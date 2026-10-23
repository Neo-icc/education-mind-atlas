/* ============================================================
   核心引擎：数据规范化 · 索引 · 检索 · 图算法 · 一致性自检
   ============================================================ */
(function () {
  const A = window.ATLAS;
  const domains = A.domains || [];
  const details = A.details || {};
  const scholars = A.scholars || {};
  const meta = A.thinkerMeta || {};

  /* ---------- 规范化条目 ---------- */
  const renames = (A.overrides && A.overrides.renames) || {};
  const doiMap = A.dois || {};

  /* 证据文本是否指向可定位的单篇作品（书名号、英文多词标题、期刊/出版社标记） */
  function hasWorkTitle(t) {
    return /《[^》]+》/.test(t) ||
      /[A-Za-z]{3,}([\s,&-]+[A-Za-z]{2,}){2,}/.test(t) ||
      /(Journal|Review|Press|学报|期刊|出版社|杂志)/.test(t);
  }

  const entries = (A.roster || []).map((r) => {
    const [id, rawName, en, domain, branch, thinker, year, kind, tagline] = r;
    const name = renames[id] || rawName;
    const d = details[id] || {};
    const mapped = doiMap[id] || [];
    return {
      id, name, en, domain, branch, thinker, year,
      kind: kind || "theory", tagline: tagline || "",
      definition: d.definition || tagline || "",
      claims: d.claims || [],
      agreements: d.agreements || [],
      disagreements: d.disagreements || [],
      evidence: (d.evidence || []).map((ev, i) => (mapped[i] ? Object.assign({}, ev, { doi: mapped[i] }) : ev)),
      applications: d.applications || [],
      terms: d.terms || [],
      _detail: !!details[id],
    };
  });

  const byId = {};
  entries.forEach((e) => { byId[e.id] = e; });

  /* ---------- 领域 / 分支索引 ---------- */
  const domainById = {};
  const branchById = {};
  domains.forEach((d) => {
    domainById[d.id] = d;
    d.branches.forEach((b) => { branchById[b.id] = Object.assign({}, b, { domain: d.id, domainName: d.name }); });
  });

  const branchesOf = {};
  const entriesOfBranch = {};
  entries.forEach((e) => {
    branchesOf[e.domain] = branchesOf[e.domain] || [];
    entriesOfBranch[e.branch] = entriesOfBranch[e.branch] || [];
    entriesOfBranch[e.branch].push(e);
  });

  /* ---------- 人物索引 ---------- */
  const thinkerName = (id) => (scholars[id] ? scholars[id][0] : (id || "未署名"));
  const thinkerEn = (id) => (scholars[id] ? scholars[id][1] : "");

  const thinkerMap = {};
  entries.forEach((e) => {
    if (!e.thinker) return;
    if (!thinkerMap[e.thinker]) {
      const m = meta[e.thinker] || [];
      thinkerMap[e.thinker] = {
        id: e.thinker,
        name: thinkerName(e.thinker),
        en: thinkerEn(e.thinker),
        birth: m[0] != null ? m[0] : null,
        death: m[1] != null ? m[1] : null,
        country: m[2] || "",
        entries: [],
      };
    }
    thinkerMap[e.thinker].entries.push(e);
  });
  Object.values(thinkerMap).forEach((t) => {
    const years = t.entries.map((e) => e.year).filter((y) => typeof y === "number" && y !== 0);
    t.minYear = years.length ? Math.min.apply(null, years) : (t.birth || 0);
    t.maxYear = years.length ? Math.max.apply(null, years) : (t.death || t.birth || 0);
    t.unknownBirth = t.birth == null;
  });
  const thinkers = Object.values(thinkerMap).sort((a, b) => {
    const ka = a.birth != null ? a.birth : a.minYear;
    const kb = b.birth != null ? b.birth : b.minYear;
    return ka - kb;
  });

  /* ---------- 关联规范化 ---------- */
  const seen = new Set();
  const links = [];
  let droppedLinks = 0;
  (A.links || []).forEach((l) => {
    const [a, b, type, point, confidence, since] = l;
    if (!byId[a] || !byId[b] || a === b) { droppedLinks += 1; return; }
    const key = [a, b].sort().join("|") + "|" + type;
    if (seen.has(key)) { droppedLinks += 1; return; }
    seen.add(key);
    links.push({ a, b, type, point, confidence: confidence || "supported", since: since || null });
  });

  /* ---------- 邻接表 ---------- */
  const adj = {};
  entries.forEach((e) => { adj[e.id] = []; });
  links.forEach((l) => {
    adj[l.a].push({ id: l.b, link: l, dir: "out" });
    adj[l.b].push({ id: l.a, link: l, dir: "in" });
  });
  const degree = (id) => (adj[id] ? adj[id].length : 0);

  /* ---------- 术语卡 ---------- */
  const terms = [];
  entries.forEach((e) => {
    e.terms.forEach((t) => {
      terms.push({ t: t.t, en: t.en, d: t.d, entry: e.id, entryName: e.name, domain: e.domain });
    });
  });
  const termSeen = new Set();
  const uniqueTerms = terms.filter((x) => {
    const k = (x.t || "").trim();
    if (!k || termSeen.has(k)) return false;
    termSeen.add(k); return true;
  });

  /* ---------- 场景库 ---------- */
  const scenarios = A.scenarios || [];
  const scenarioById = {};
  scenarios.forEach((s) => { scenarioById[s.id] = s; });
  const scenariosOfEntry = {};
  scenarios.forEach((s) => {
    (s.links || []).forEach((id) => {
      if (!scenariosOfEntry[id]) scenariosOfEntry[id] = [];
      scenariosOfEntry[id].push(s);
    });
  });

  /* ---------- 课堂活动 ---------- */
  const activities = A.activities || {};

  /* ---------- 快速分诊 ---------- */
  const triage = A.triage || { ages: [], concerns: [], durations: [] };

  /* ---------- 统计 ---------- */
  const stats = {
    entries: entries.length,
    detailed: entries.filter((e) => e._detail).length,
    terms: uniqueTerms.length,
    links: links.length,
    thinkers: thinkers.length,
    domains: domains.length,
    branches: domains.reduce((n, d) => n + d.branches.length, 0),
    activeBranches: Object.keys(entriesOfBranch).length,
    byType: {
      agreement: links.filter((l) => l.type === "agreement").length,
      disagreement: links.filter((l) => l.type === "disagreement").length,
      derivative: links.filter((l) => l.type === "derivative").length,
    },
    byConfidence: {},
    scenarios: scenarios.length,
    activities: Object.keys(A.activities || {}).length,
    doiItems: entries.reduce((n, e) => n + e.evidence.filter((x) => x.doi).length, 0),
    entriesWithDoi: entries.filter((e) => e.evidence.some((x) => x.doi)).length,
    evidenceItems: entries.reduce((n, e) => n + e.evidence.length, 0),
    evidenceRefs: entries.reduce((n, e) => n + e.evidence.filter((x) => !x.doi && hasWorkTitle(x.text)).length, 0),
    evidenceTraces: entries.reduce((n, e) => n + e.evidence.filter((x) => !x.doi && !hasWorkTitle(x.text) && /\d{4}/.test(x.text)).length, 0),
    evidenceReviews: entries.reduce((n, e) => n + e.evidence.filter((x) => !x.doi && !hasWorkTitle(x.text) && !/\d{4}/.test(x.text)).length, 0),
    yearRange: [Math.min.apply(null, entries.map((e) => e.year)), Math.max.apply(null, entries.map((e) => e.year))],
  };
  links.forEach((l) => { stats.byConfidence[l.confidence] = (stats.byConfidence[l.confidence] || 0) + 1; });

  /* ---------- 全文检索 ---------- */
  function norm(s) { return String(s == null ? "" : s).toLowerCase(); }

  /* 口语句式 → 检索词。老师和家长不会用学术词，这里做一次同义展开。 */
  const EXPAND = [
    [["不写作业", "作业慢", "磨蹭", "拖拉", "拖延", "不想写"], ["作业", "拖拉", "拖延", "自我调节"]],
    [["不专注", "坐不住", "走神", "注意力", "多动", "安静不下来"], ["注意", "走神", "坐不住", "执行功能"]],
    [["发脾气", "哭闹", "情绪爆发", "崩溃", "摔东西"], ["情绪", "情绪调节", "发脾气"]],
    [["打人", "咬人", "抢玩具", "攻击"], ["打人", "咬人", "抢", "亲社会"]],
    [["不睡", "夜醒", "哄睡", "失眠", "熬夜", "起不来"], ["睡", "睡眠", "节律"]],
    [["不说话", "说话晚", "开口", "语言慢"], ["开口", "语言", "语言发展"]],
    [["认字", "识字", "拼音"], ["认字", "语音意识", "阅读"]],
    [["数学", "应用题", "算数", "计算"], ["数学", "应用题", "数感"]],
    [["阅读", "跳字", "漏字", "读不懂"], ["阅读", "跳字", "阅读障碍"]],
    [["考试", "紧张", "考前", "发挥失常"], ["考试", "焦虑", "工作记忆"]],
    [["朋友", "排挤", "孤立", "没人玩", "霸凌", "欺负"], ["同伴", "排挤", "欺凌"]],
    [["手机", "游戏", "短视频", "屏幕", "平板"], ["手机", "屏幕", "游戏", "奖赏"]],
    [["背", "记不住", "忘", "听写"], ["记忆", "间隔", "检索练习"]],
    [["顶嘴", "叛逆", "青春期", "不沟通"], ["顶嘴", "自主", "青春期"]],
    [["补课", "补习", "报班", "辅导班"], ["补习", "影子教育", "择校"]],
    [["关键期", "错过", "三岁定终身"], ["关键期", "敏感期", "迷思"]],
    [["左右脑", "右脑开发"], ["左右脑", "神经迷思"]],
    [["学习风格", "视觉型", "听觉型"], ["学习风格", "迷思"]],
    [["脑训练", "健脑", "变聪明"], ["脑训练", "迁移"]],
    [["多巴胺", "戒断", "快乐教育"], ["多巴胺", "动机"]],
    [["分离", "黏人", "离不开"], ["分离", "依恋"]],
    [["撒谎", "说谎"], ["撒谎", "心理理论", "道德"]],
    [["不肯", "放弃", "畏难", "不敢", "一遇困难"], ["自我效能", "成长型思维", "习得性"]]
  ];

  function expand(query) {
    const out = new Set([query]);
    EXPAND.forEach((row) => {
      if (row[0].some((k) => query.indexOf(k) > -1)) row[1].forEach((x) => out.add(norm(x)));
    });
    return Array.from(out);
  }

  /* 长句兜底：中文没有空格，用 2–4 字 n-gram 补齐口语长句 */
  const STOP_GRAM = new Set(["孩子", "我的", "什么", "怎么", "怎么办", "特别", "总是", "老是",
    "一下", "这个", "那个", "有点", "最近", "现在", "一直", "非常", "比较", "应该", "可以",
    "要不要", "是不是", "我们", "他们", "老师", "家长", "怎么", "如何"]);

  function buildTerms(query) {
    const map = new Map();
    map.set(query, { w: 1, gram: false });
    expand(query).forEach((t) => { if (t !== query && !map.has(t)) map.set(t, { w: 0.6, gram: false }); });
    if (query.length >= 4) {
      for (let n = 2; n <= 4; n += 1) {
        for (let i = 0; i + n <= query.length; i += 1) {
          const g = query.slice(i, i + n);
          if (STOP_GRAM.has(g) || map.has(g)) continue;
          map.set(g, { w: n === 2 ? 0.3 : 0.45, gram: true });
        }
      }
    }
    return Array.from(map, ([t, v]) => ({ t, w: v.w, gram: v.gram }));
  }

  function scoreEntry(e, q) {
    const name = norm(e.name), en = norm(e.en), tag = norm(e.tagline);
    let s = 0;
    if (name === q) s += 100;
    if (name.indexOf(q) === 0) s += 40;
    if (name.indexOf(q) > -1) s += 22;
    if (en.indexOf(q) > -1) s += 14;
    if (tag.indexOf(q) > -1) s += 8;
    if (norm(e.definition).indexOf(q) > -1) s += 6;
    if (norm(e.claims.join(" ")).indexOf(q) > -1) s += 4;
    if (norm(e.applications.join(" ")).indexOf(q) > -1) s += 2;
    if (norm(thinkerName(e.thinker)).indexOf(q) > -1) s += 10;
    if (norm(thinkerEn(e.thinker)).indexOf(q) > -1) s += 6;
    return s;
  }

  function search(q, opts) {
    opts = opts || {};
    const query = norm(q).trim();
    if (!query) return [];
    const out = [];
    const limit = opts.limit || 40;
    const weighted = buildTerms(query);

    if (!opts.type || opts.type === "entry") {
      entries.forEach((e) => {
        let s = 0;
        let bestW = 1;
        weighted.forEach(({ t, w }) => {
          const v = Math.round(scoreEntry(e, t) * w);
          if (v > s) { s = v; bestW = w; }
        });
        /* 只靠 2 字片段命中的条目降权，避免「写作」误命中「写作业」 */
        if (bestW <= 0.3) s = Math.round(s * 0.5);
        if (s >= 12) out.push({ kind: "entry", score: s, id: e.id, title: e.name, sub: e.en, meta: thinkerName(e.thinker) + " · " + e.year, domain: e.domain, href: "#/entry/" + e.id });
      });
    }

    if (!opts.type || opts.type === "scenario") {
      scenarios.forEach((sc) => {
        const hay = [norm(sc.title), norm(sc.signal), norm(sc.read), norm((sc.do || []).join(" ")), norm((sc.dont || []).join(" ")), norm((sc.say || []).join(" "))];
        let s = 0;
        weighted.forEach(({ t, w }) => {
          if (hay[0] === t) s = Math.max(s, 120 * w);
          else if (hay[0].indexOf(t) > -1) s = Math.max(s, 85 * w);
          if (hay[1].indexOf(t) > -1) s = Math.max(s, 38 * w);
          if (hay[2].indexOf(t) > -1) s = Math.max(s, 16 * w);
          if (hay[3].indexOf(t) > -1 || hay[4].indexOf(t) > -1 || hay[5].indexOf(t) > -1) s = Math.max(s, 9 * w);
        });
        if (s >= 12) {
          out.push({
            kind: "scenario", score: Math.round(s), id: sc.id, title: sc.title,
            sub: sc.signal, meta: (sc.age === "all" ? "通用" : sc.age + " 岁"), domain: null,
            href: "#/scenarios?open=" + sc.id,
          });
        }
      });
    }
    if (!opts.type || opts.type === "term") {
      uniqueTerms.forEach((t) => {
        const tn = norm(t.t), te = norm(t.en), td = norm(t.d);
        let s = 0;
        if (tn === query) s = 60; else if (tn.indexOf(query) > -1) s = 26;
        if (te.indexOf(query) > -1) s += 10;
        if (td.indexOf(query) > -1) s += 4;
        if (s > 0) out.push({ kind: "term", score: s, id: t.t, title: t.t, sub: t.en, meta: t.d, domain: t.domain, href: "#/entry/" + t.entry });
      });
    }
    if (!opts.type || opts.type === "thinker") {
      thinkers.forEach((t) => {
        const tn = norm(t.name), te = norm(t.en);
        let s = 0;
        if (tn === query) s = 70; else if (tn.indexOf(query) > -1) s = 30;
        if (te.indexOf(query) > -1) s += 14;
        if (norm(t.country).indexOf(query) > -1) s += 3;
        if (s > 0) out.push({ kind: "thinker", score: s, id: t.id, title: t.name, sub: t.en, meta: (t.country || "") + " · " + (t.birth || "?") + "–" + (t.death || ""), domain: null, href: "#/thinker/" + t.id });
      });
    }
    if (!opts.type || opts.type === "link") {
      links.forEach((l) => {
        const p = norm(l.point);
        if (p.indexOf(query) > -1) {
          out.push({ kind: "link", score: 5, id: l.a + l.b + l.type, title: byId[l.a].name + " ↔ " + byId[l.b].name, sub: A.linkTypes[l.type].name, meta: l.point, domain: byId[l.a].domain, href: "#/entry/" + l.a });
        }
      });
    }

    out.sort((x, y) => y.score - x.score);

    /* 场景强命中时，条目只保留前 2 条，避免 n-gram 噪声抢占注意力 */
    const bestScenario = out.reduce((m, h) => (h.kind === "scenario" ? Math.max(m, h.score) : m), 0);
    let result = out;
    if (bestScenario >= 60) {
      let kept = 0;
      result = out.filter((h) => {
        if (h.kind !== "entry") return true;
        kept += 1;
        return kept <= 2;
      });
    }
    return result.slice(0, limit);
  }

  /* ---------- 图算法 ---------- */
  function neighbors(id, typeFilter) {
    return (adj[id] || []).filter((n) => !typeFilter || typeFilter[n.link.type]);
  }

  function shortestPath(from, to, maxDepth) {
    maxDepth = maxDepth || 5;
    if (!byId[from] || !byId[to]) return null;
    if (from === to) return [from];
    const prev = {};
    const q = [[from, 0]];
    const visited = new Set([from]);
    while (q.length) {
      const [cur, d] = q.shift();
      if (d >= maxDepth) continue;
      for (const n of (adj[cur] || [])) {
        if (visited.has(n.id)) continue;
        visited.add(n.id);
        prev[n.id] = cur;
        if (n.id === to) {
          const path = [to];
          let p = to;
          while (p !== from) { p = prev[p]; path.unshift(p); }
          return path;
        }
        q.push([n.id, d + 1]);
      }
    }
    return null;
  }

  function pathLinks(path) {
    const out = [];
    for (let i = 0; i < path.length - 1; i += 1) {
      const a = path[i], b = path[i + 1];
      const l = links.find((x) => (x.a === a && x.b === b) || (x.a === b && x.b === a));
      if (l) out.push(l);
    }
    return out;
  }

  function sharedBetween(a, b) {
    const na = {}; (adj[a] || []).forEach((n) => { na[n.id] = n.link; });
    const common = [];
    (adj[b] || []).forEach((n) => { if (na[n.id]) common.push({ other: n.id, l1: na[n.id], l2: n.link }); });
    return common;
  }

  function compare(a, b) {
    const A1 = byId[a], B1 = byId[b];
    if (!A1 || !B1) return null;
    const direct = links.filter((l) => (l.a === a && l.b === b) || (l.a === b && l.b === a));
    const byType = { agreement: [], disagreement: [], derivative: [] };
    (adj[a] || []).forEach((n) => {
      if (adj[b] && adj[b].some((m) => m.id === n.id)) byType[n.link.type].push({ other: n.id, point: n.link.point });
    });
    return { a: A1, b: B1, direct, shared: byType, sharedCount: byType.agreement.length + byType.disagreement.length + byType.derivative.length };
  }

  function topologicalDerivatives(domainFilter) {
    const nodes = entries.filter((e) => !domainFilter || e.domain === domainFilter).map((e) => e.id);
    const set = new Set(nodes);
    const indeg = {}; nodes.forEach((n) => { indeg[n] = 0; });
    const edges = links.filter((l) => l.type === "derivative" && set.has(l.a) && set.has(l.b));
    edges.forEach((l) => { indeg[l.b] += 1; });
    const q = nodes.filter((n) => indeg[n] === 0).sort((x, y) => byId[x].year - byId[y].year);
    const order = [];
    while (q.length) {
      const n = q.shift();
      order.push(n);
      edges.filter((l) => l.a === n).forEach((l) => {
        indeg[l.b] -= 1;
        if (indeg[l.b] === 0) q.push(l.b);
      });
      q.sort((x, y) => byId[x].year - byId[y].year);
    }
    return order;
  }

  /* ---------- 阅读路径：按衍生关系拓扑排序并分四阶段 ---------- */
  function learningPath(domainId) {
    const pool = entries.filter((e) => !domainId || e.domain === domainId);
    const set = new Set(pool.map((e) => e.id));
    const indeg = {}; pool.forEach((e) => { indeg[e.id] = 0; });
    const edges = links.filter((l) => l.type === "derivative" && set.has(l.a) && set.has(l.b));
    edges.forEach((l) => { indeg[l.b] += 1; });
    const q = pool.filter((e) => indeg[e.id] === 0).sort((a, b) => a.year - b.year);
    const order = [];
    while (q.length) {
      const e = q.shift();
      order.push(e);
      edges.filter((l) => l.a === e.id).forEach((l) => {
        indeg[l.b] -= 1;
        if (indeg[l.b] === 0) {
          const n = byId[l.b];
          if (n) q.push(n);
        }
      });
      q.sort((a, b) => a.year - b.year);
    }
    const seenIds = new Set(order.map((e) => e.id));
    const rest = pool.filter((e) => !seenIds.has(e.id)).sort((a, b) => a.year - b.year);
    const all = order.concat(rest);
    const n = all.length;
    const stages = [];
    for (let i = 0; i < 4; i += 1) {
      stages.push(all.slice(Math.round((i * n) / 4), Math.round(((i + 1) * n) / 4)));
    }
    return { all, stages, hasCycle: order.length < pool.length };
  }

  /* ---------- 一致性自检 ---------- */
  function integrity() {
    const issues = [];
    const ids = new Set(entries.map((e) => e.id));

    if (droppedLinks) issues.push({ level: "warn", text: "有 " + droppedLinks + " 条关联因 id 缺失或重复被丢弃" });

    entries.forEach((e) => {
      if (!e._detail) issues.push({ level: "error", text: e.id + " 缺少详解内容", ref: e.id });
      if (!e.definition || e.definition.length < 20) issues.push({ level: "warn", text: e.id + " 定义过短", ref: e.id });
      if (!e.terms.length) issues.push({ level: "warn", text: e.id + " 缺少术语卡", ref: e.id });
      if (degree(e.id) === 0) issues.push({ level: "warn", text: e.id + " 是孤立节点（无任何关联）", ref: e.id });
      if (!domainById[e.domain]) issues.push({ level: "error", text: e.id + " 的领域 id 无效", ref: e.id });
      if (!branchById[e.branch]) issues.push({ level: "error", text: e.id + " 的分支 id 无效", ref: e.id });
      const b = branchById[e.branch];
      if (b && b.domain !== e.domain) issues.push({ level: "error", text: e.id + " 的分支与领域不匹配", ref: e.id });
    });

    /* 计数一致性：同一数字在所有位置必须相同 */
    const countByDomain = {};
    domains.forEach((d) => { countByDomain[d.id] = entries.filter((e) => e.domain === d.id).length; });
    domains.forEach((d) => {
      const sum = d.branches.reduce((n, b) => n + (entriesOfBranch[b.id] || []).length, 0);
      if (sum !== countByDomain[d.id]) {
        issues.push({ level: "error", text: d.name + " 分支计数之和 " + sum + " ≠ 领域条目数 " + countByDomain[d.id] });
      }
    });

    const linkedPairs = new Set();
    links.forEach((l) => linkedPairs.add(l.a + "|" + l.b));
    let multiTypePairs = 0;
    const pairTypes = {};
    links.forEach((l) => {
      const k = [l.a, l.b].sort().join("|");
      pairTypes[k] = pairTypes[k] || new Set();
      pairTypes[k].add(l.type);
    });
    Object.keys(pairTypes).forEach((k) => { if (pairTypes[k].size > 1) multiTypePairs += 1; });

    const noSource = entries.filter((e) => !e.evidence.length);
    if (noSource.length) issues.push({ level: "warn", text: noSource.length + " 条缺少实证来源" });

    /* 场景与课堂活动 */
    const scIds = new Set();
    scenarios.forEach((s) => {
      if (scIds.has(s.id)) issues.push({ level: "error", text: "场景 id 重复：" + s.id });
      scIds.add(s.id);
      (s.links || []).forEach((id) => {
        if (!byId[id]) issues.push({ level: "error", text: s.id + " 关联了不存在的条目 " + id });
      });
      if (!s.audience || !s.audience.length) issues.push({ level: "warn", text: s.id + " 未标注适用身份" });
      if (!s.evidence || !A.confidences[s.evidence]) issues.push({ level: "warn", text: s.id + " 证据等级无效：" + (s.evidence || "空") });
      if (!s.do || !s.do.length) issues.push({ level: "warn", text: s.id + " 缺少「可以试」" });
      if (!s.dont || !s.dont.length) issues.push({ level: "warn", text: s.id + " 缺少「先别做」" });
    });
    Object.keys(activities).forEach((id) => {
      if (!scenarioById[id]) issues.push({ level: "error", text: "课堂活动指向不存在的场景：" + id });
    });

    /* 分诊覆盖 */
    const covered = new Set();
    (triage.concerns || []).forEach((c) => {
      (c.scenarios || []).forEach((id) => {
        if (!scenarioById[id]) issues.push({ level: "error", text: "分诊项「" + c.name + "」指向不存在的场景 " + id });
        covered.add(id);
      });
      if (!c.scenarios || !c.scenarios.length) issues.push({ level: "warn", text: "分诊项「" + c.name + "」没有任何情境" });
    });
    scenarios.forEach((s) => {
      if (!covered.has(s.id)) issues.push({ level: "warn", text: s.id + " 未纳入任何分诊项" });
    });

    return {
      issues,
      errors: issues.filter((i) => i.level === "error").length,
      warnings: issues.filter((i) => i.level === "warn").length,
      countByDomain,
      multiTypePairs,
      linkedPairs: linkedPairs.size,
    };
  }

  /* ---------- 导出 ---------- */
  A.store = {
    entries, byId, links, adj, degree, domains, domainById, branchById, branchesOf, entriesOfBranch,
    thinkers, thinkerMap, thinkerName, thinkerEn, terms: uniqueTerms, stats,
    scenarios, scenarioById, scenariosOfEntry, activities, triage,
    search, neighbors, shortestPath, pathLinks, sharedBetween, compare, topologicalDerivatives, learningPath, integrity,
    droppedLinks,
  };
})();
