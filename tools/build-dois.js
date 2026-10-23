const fs = require("fs");

const path = require("path");
const raw = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "_doi.json"), "utf8"));
const map = {};
raw.forEach((r) => {
  if (!map[r.id]) map[r.id] = [];
  map[r.id][r.index] = r.doi;
});
Object.keys(map).forEach((id) => {
  const a = map[id];
  while (a.length && !a[a.length - 1]) a.pop();
});

const ids = Object.keys(map).sort();
const body = ids.map((id) => "  " + JSON.stringify(id) + ": " + JSON.stringify(map[id].map((x) => x || null))).join(",\n");

const out = [
  "/* 经 Crossref 核验的 DOI 映射：条目 id → 与 evidence 数组下标对齐的 DOI",
  "   生成方式：按证据文本检索 Crossref，要求标题包含或相似度 ≥ 0.8，且年份相差 ≤ 2 年",
  "   未匹配到的位置为 null，不猜测、不补造 */",
  "window.ATLAS = window.ATLAS || {};",
  "",
  "ATLAS.dois = {",
  body,
  "};",
  ""
].join("\n");

const outPath = path.join(__dirname, "..", "js", "data", "dois.js");
fs.writeFileSync(outPath, out, "utf8");

const total = ids.reduce((n, id) => n + map[id].filter(Boolean).length, 0);
console.log("entries with doi:", ids.length);
console.log("doi items:", total);
console.log("bytes:", fs.statSync(outPath).size);
