const fs = require("fs");
const https = require("https");
const path = require("path");
const vm = require("vm");

/* ---------- 载入数据 ---------- */
const sb = {}; sb.window = sb; vm.createContext(sb);
[
  "domains.js", "roster-1.js", "roster-2.js", "roster-3.js",
  "entries-d1.js", "entries-d2.js", "entries-d3.js", "entries-d4.js", "entries-d5.js",
  "thinkers.js", "scholars-extra.js", "overrides.js",
  "dom-6-foundation.js", "dom-7-psych.js", "dom-8-broad.js", "dom-9-dev.js", "dom-10-brain.js",
].forEach((f) => vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "js", "data", f), "utf8"), sb));
const A = sb.ATLAS;

/* ---------- 候选清单 ---------- */
const targets = [];
Object.entries(A.details).forEach(([id, d]) => {
  (d.evidence || []).forEach((e, i) => {
    if (!e.doi && e.text) targets.push({ id, index: i, text: e.text });
  });
});
console.log("candidates:", targets.length);

/* ---------- 工具 ---------- */
const norm = (s) => String(s).toLowerCase()
  .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, " ")
  .replace(/\s+/g, " ")
  .trim();

function dice(a, b) {
  if (!a || !b) return 0;
  if (a === b) return 1;
  const bg = (s) => {
    const out = new Map();
    for (let i = 0; i < s.length - 1; i++) {
      const k = s.slice(i, i + 2);
      out.set(k, (out.get(k) || 0) + 1);
    }
    return out;
  };
  const A2 = bg(a), B2 = bg(b);
  let inter = 0, total = 0;
  A2.forEach((v, k) => { total += v; if (B2.has(k)) inter += Math.min(v, B2.get(k)); });
  B2.forEach((v) => { total += v; });
  return total ? (2 * inter) / total : 0;
}

function getJSON(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { "User-Agent": "atlas-review/1.0 (mailto:review@example.org)" } }, (res) => {
      let buf = "";
      res.on("data", (c) => { buf += c; });
      res.on("end", () => {
        let json = null;
        try { json = JSON.parse(buf); } catch (e) { json = null; }
        resolve({ status: res.statusCode, json });
      });
    });
    req.on("error", () => resolve({ status: 0, json: null }));
    req.setTimeout(15000, () => { req.destroy(); resolve({ status: 0, json: null }); });
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- 主流程 ---------- */
const outFile = path.join(__dirname, "..", "_doi.json");
let results = [];
if (fs.existsSync(outFile)) {
  try { results = JSON.parse(fs.readFileSync(outFile, "utf8")); } catch (e) { results = []; }
}
const done = new Set(results.map((r) => r.id + "#" + r.index));
const todo = targets.filter((t) => !done.has(t.id + "#" + t.index));
console.log("already done:", results.length, "todo:", todo.length);

const stats = { checked: 0, matched: 0, nomatch: 0, failed: 0 };

async function checkOne(t) {
  const q = encodeURIComponent(t.text.slice(0, 200));
  const url = "https://api.crossref.org/works?rows=3&select=DOI,title,issued,type&mailto=review@example.org&query.bibliographic=" + q;

  let data = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await getJSON(url);
    if (res.status === 200 && res.json && res.json.message && res.json.message.items) { data = res.json; break; }
    await sleep(700 * (attempt + 1));
  }

  stats.checked++;
  if (!data) { stats.failed++; return null; }

  const evNorm = norm(t.text);
  const years = (t.text.match(/(1[5-9]\d{2}|20\d{2})/g) || []).map(Number);

  let best = null;
  for (const it of data.message.items) {
    const title = (it.title && it.title[0]) || "";
    const tn = norm(title);
    if (tn.length < 10) continue;
    const issued = (it.issued && it.issued["date-parts"] && it.issued["date-parts"][0] && it.issued["date-parts"][0][0]) || null;

    let score = 0;
    if (evNorm.indexOf(tn) > -1) score = 1;
    else score = dice(evNorm, tn);
    if (score < 0.8) continue;

    if (years.length && issued) {
      const ok = years.some((y) => Math.abs(y - issued) <= 2);
      if (!ok) continue;
    }
    if (!best || score > best.score) best = { doi: it.DOI, title, issued, score };
  }

  if (best) {
    stats.matched++;
    return { id: t.id, index: t.index, doi: best.doi, title: best.title, issued: best.issued, score: Math.round(best.score * 100) / 100, text: t.text.slice(0, 80) };
  }
  stats.nomatch++;
  return null;
}

(async () => {
  const queue = todo.slice();
  const CONC = 2;
  const started = Date.now();

  async function worker() {
    while (queue.length) {
      const t = queue.shift();
      if (!t) break;
      try {
        const r = await checkOne(t);
        if (r) results.push(r);
      } catch (e) {
        stats.failed++;
      }
      // 每 40 条落盘一次
      if (stats.checked % 40 === 0) {
        fs.writeFileSync(outFile, JSON.stringify(results, null, 1), "utf8");
      }
      await sleep(180);
      if (Date.now() - started > 480000) break; // 8 分钟上限
    }
  }

  await Promise.all(Array.from({ length: CONC }, worker));
  fs.writeFileSync(outFile, JSON.stringify(results, null, 1), "utf8");

  console.log("checked:", stats.checked, "matched:", stats.matched, "nomatch:", stats.nomatch, "failed:", stats.failed);
  console.log("total saved:", results.length);
  console.log("elapsed sec:", Math.round((Date.now() - started) / 1000));
})();
