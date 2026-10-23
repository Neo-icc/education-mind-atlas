/* ============================================================
   应用：路由 · 视图 · 交互
   ============================================================ */
(function () {
  const A = window.ATLAS;
  const S = A.store;
  const $root = document.getElementById("app");

  /* ---------------- 状态 ---------------- */
  const state = {
    theme: document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light",
    audience: localStorage.getItem("atlas-audience") || "",
    scAge: "",
    scAudience: "",
    triage: { age: "", concern: "", duration: "" },
    sheetPick: [],
    sheetInit: false,
    navOpen: false,
    filter: { domain: "", branch: "", kind: "" },
    tlDomain: "",
    tlEra: "",
    netHubs: false,
    lpDomain: "",
    glossaryQ: "",
    netType: { agreement: true, disagreement: true, derivative: true },
    netFocus: "",
    cmpA: "",
    cmpB: "",
    pathA: "",
    pathB: "",
    searchOpen: false,
    searchQ: "",
    searchType: "",
    researchQ: "",
    citeFmt: "plain",
  };

  /* ---------------- 工具 ---------------- */
  window.ATLAS.debugState = state;

  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const fmtYear = (y) => {
    if (y == null || y === "") return "—";
    if (typeof y !== "number") return String(y);
    if (y < 0) return "前 " + Math.abs(y);
    return String(y);
  };

  const rangeYear = (t) => {
    if (!t) return "—";
    if (t.birth == null) {
      return t.minYear ? `活跃 ${fmtYear(t.minYear)}–${fmtYear(t.maxYear)}` : "—";
    }
    const b = fmtYear(t.birth);
    const d = t.death == null ? "" : fmtYear(t.death);
    return d ? b + "–" + d : b + "–";
  };

  const domainOf = (id) => S.domainById[id] || { name: id, color: "var(--ink-4)", tint: "var(--paper-3)", short: "?" };
  const branchOf = (id) => S.branchById[id] || { name: id, en: "", domain: "" };

  const domainColor = (d) => domainOf(d).color;
  const branchStyle = (branchId) => {
    const b = branchOf(branchId);
    const dom = domainOf(b.domain);
    return `--bc:${dom.color};--bt:${dom.tint};`;
  };

  const linkSymbol = { agreement: "↔", disagreement: "⇹", derivative: "→" };
  const linkName = { agreement: "共识", disagreement: "分歧", derivative: "衍生" };

  const yearBucket = (y) => (y < 1900 ? 0 : y < 1980 ? 1 : 2);
  const BUCKETS = [
    { key: 0, name: "经典奠基期", range: "1900 年以前" },
    { key: 1, name: "现代成型期", range: "1900 — 1980" },
    { key: 2, name: "当代拓展期", range: "1980 年至今" },
  ];

  const topByDegree = (n, filterFn) =>
    S.entries.filter(filterFn || (() => true))
      .slice()
      .sort((a, b) => S.degree(b.id) - S.degree(a.id))
      .slice(0, n);

  const countIn = (fn) => S.entries.filter(fn).length;

  /* ---------------- 路由 ---------------- */
  function parseHash() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs] = raw.split("?");
    const parts = path.split("/").filter(Boolean);
    const query = {};
    (qs || "").split("&").filter(Boolean).forEach((kv) => {
      const [k, v] = kv.split("=");
      query[decodeURIComponent(k)] = decodeURIComponent(v || "");
    });
    return { parts, query };
  }

  function go(hash) { location.hash = hash; }

  /* ---------------- 侧栏 ---------------- */
  function navGroups() {
    if (state.audience === "researcher") {
      return [
        { g: "研究索引", items: [
          ["#/", "研究索引", "overview"],
          ["#/entries", "理论条目", "entries"],
          ["#/glossary", "术语索引", "glossary"],
          ["#/thinkers", "人物索引", "thinkers"],
          ["#/network", "关联网络", "network"],
          ["#/timeline", "观点时间轴", "timeline"],
        ]},
        { g: "工具", items: [
          ["#/compare", "理论对比", "compare"],
          ["#/path", "关联路径", "path"],
          ["#/learning-path", "阅读路径", "learning-path"],
          ["#/integrity", "数据自检", "integrity"],
          ["#/methods", "方法与边界", "methods"],
        ]},
      ];
    }
    return [
      { g: "从这里开始", items: [
        ["#/start", "快速分诊", "start"],
        ["#/scenarios", "场景库", "scenarios"],
        ["#/", "概览", "overview"],
        ["#/entries", "理论条目", "entries"],
        ["#/glossary", "术语索引", "glossary"],
      ]},
      { g: "探索", items: [
        ["#/timeline", "观点时间轴", "timeline"],
        ["#/thinkers", "人物索引", "thinkers"],
        ["#/network", "关联网络", "network"],
        ["#/learning-path", "阅读路径", "learning-path"],
      ]},
      { g: "工具", items: [
        ["#/compare", "理论对比", "compare"],
        ["#/path", "关联路径", "path"],
        ["#/integrity", "数据自检", "integrity"],
        ["#/methods", "方法与边界", "methods"],
      ]},
    ];
  }

  function sidebarHTML(active) {
    const nav = navGroups();

    const domainNav = S.domains.map((d) => {
      const n = S.entries.filter((e) => e.domain === d.id).length;
      return `<a class="nav-item" href="#/entries?domain=${d.id}" data-nav="entries">
        <span class="domain-dot" style="--dc:${d.color}"></span>
        <span>${esc(d.name)}</span><span class="ni-count">${n}</span>
      </a>`;
    }).join("");

    return `
    <aside class="sidebar" id="sidebar" aria-label="主导航">
      <div class="sidebar-head">
        <a class="brand" href="#/">
          <span class="brand-title">教育与心智<br/>知识图谱</span>
          <span class="brand-en">Education · Mind · Brain Atlas</span>
        </a>
        <div class="aud-switch" role="group" aria-label="选择使用身份">
          <button class="aud-btn ${state.audience === "teacher" ? "on" : ""}" data-aud="teacher">我是老师</button>
          <button class="aud-btn ${state.audience === "parent" ? "on" : ""}" data-aud="parent">我是家长</button>
          <button class="aud-btn ${state.audience === "researcher" ? "on" : ""}" data-aud="researcher">研究者</button>
        </div>
        <div class="aud-hint">${state.audience === "teacher" ? "按课堂情境组织 · 含给教师的做法" : state.audience === "parent" ? "按年龄与家庭情境组织 · 含转介边界" : state.audience === "researcher" ? "索引与工具 · 检索 · 图谱 · 引用 · 数据" : "选择身份后，全站文案与建议会随之调整"}</div>
      </div>
      <div class="sidebar-search">
        <button class="search-trigger" id="open-search" aria-label="打开全局搜索">
          <span aria-hidden="true">⌕</span>
          <span>搜情况 · 条目 · 术语</span>
          <span class="kbd">Ctrl K</span>
        </button>
      </div>
      <nav class="sidebar-nav">
        ${nav.map((g) => `
          <div class="nav-group">
            <span class="nav-group-label">${g.g}</span>
            ${g.items.map(([href, label, key]) => `
              <a class="nav-item ${active === key ? "active" : ""}" href="${href || "#/"}" data-nav="${key}">${label}</a>
            `).join("")}
          </div>`).join("")}
        <div class="nav-group">
          <span class="nav-group-label">领域 · ${S.domains.length}</span>
          ${domainNav}
        </div>
      </nav>
      <div class="sidebar-foot">
        <button class="theme-btn" id="theme-toggle" aria-label="切换主题">
          <span id="theme-icon">${state.theme === "dark" ? "☾" : "☀"}</span>
          <span id="theme-label">${state.theme === "dark" ? "深色" : "浅色"}</span>
        </button>
        <span class="ver">v${esc(A.meta.version)}</span>
      </div>
    </aside>`;
  }

  function shellHTML(active, inner, crumb) {
    return `
    <div class="app-shell ${state.navOpen ? "nav-open" : ""}">
      ${sidebarHTML(active)}
      ${state.navOpen ? '<div class="nav-scrim" id="nav-scrim"></div>' : ""}
      <div class="main">
        <div class="topbar">
          <button class="icon-btn mobile-only" id="nav-btn" aria-label="打开导航">☰</button>
          <div class="crumb">${crumb || '<span class="cur">概览</span>'}</div>
          <div class="topbar-actions">
            <button class="icon-btn" id="open-search-2" aria-label="搜索" title="搜索 (Ctrl K)">⌕</button>
            <button class="icon-btn mobile-only" id="theme-toggle-2" aria-label="切换主题">◐</button>
          </div>
        </div>
        <main class="main-inner" id="main">${inner}</main>
      </div>
    </div>`;
  }

  function footHTML() {
    return `<footer class="site-foot">
      <span>${esc(A.meta.title)} · v${esc(A.meta.version)}</span>
      <span>${S.stats.entries} 条目 · ${S.stats.terms} 术语 · ${S.stats.links} 关联 · ${S.stats.thinkers} 人物</span>
      <span class="sp">五大领域 · 机制级关联 · 可核验来源</span>
    </footer>`;
  }

  /* ---------------- 落地页（未选身份） ---------------- */
  function viewLanding() {
    const st = S.stats;
    const metrics = [[st.entries, "理论条目"], [st.terms, "术语卡"], [st.links, "机制关联"], [st.thinkers, "人物"]]
      .map(([n, l]) => `<div class="metric"><span class="metric-num">${n}</span><span class="metric-label">${l}</span></div>`).join("");
    return `
    <section class="hero">
      <div>
        <span class="eyebrow">${esc(A.meta.subtitle)}</span>
        <h1>教育与心智<br/>知识图谱</h1>
        <p class="hero-lead">一份知识库，三种用法。老师和家长走「情境优先」拿到可执行的做法；研究者与学者走「研究索引」做检索、引用与数据。两边读的是同一套机制与证据。</p>
      </div>
      <div class="metric-grid">${metrics}</div>
    </section>

    <section class="gate-grid">
      <div class="gate-card">
        <span class="gate-tag">给家长与老师</span>
        <h2>情境优先</h2>
        <p class="gate-lead">先给能直接用的做法、话术与转介边界，再往下看背后的机制。</p>
        <ul class="gate-points">
          <li>按年龄 / 课堂情境快速分诊</li>
          <li>「可以试 · 先别做 · 可以这样说」</li>
          <li>2–3 条情境合并成一张 A4</li>
        </ul>
        <div class="gate-actions">
          <button class="btn primary" data-aud="parent">我是家长</button>
          <button class="btn ghost" data-aud="teacher">我是老师</button>
        </div>
      </div>
      <div class="gate-card">
        <span class="gate-tag">给研究者与学者</span>
        <h2>研究索引</h2>
        <p class="gate-lead">作为索引与工具：精确检索、可核验来源、引用导出与整库数据下载。</p>
        <ul class="gate-points">
          <li>按作者 / 年份 / DOI / 编号精确检索</li>
          <li>BibTeX / RIS 引用导出</li>
          <li>整库 JSON / CSV 下载</li>
        </ul>
        <div class="gate-actions">
          <button class="btn primary" data-aud="researcher">进入研究索引</button>
        </div>
      </div>
    </section>

    <p class="graph-hint" style="margin-top:1rem">任何时候都可以通过左上角切换身份，或按 Ctrl K 全局搜索。身份不锁定，内容不复制。</p>
    ${footHTML()}`;
  }

  /* ---------------- 研究者工作台 ---------------- */
  function viewResearch() {
    const st = S.stats;
    const metrics = [[st.entries, "理论条目"], [st.terms, "术语卡"], [st.links, "机制关联"], [st.doiItems, "可核验 DOI"]]
      .map(([n, l]) => `<div class="metric"><span class="metric-num">${n}</span><span class="metric-label">${l}</span></div>`).join("");
    return `
    <section class="hero">
      <div>
        <span class="eyebrow">研究索引 · Researcher</span>
        <h1>索引 · 检索<br/>图谱 · 引用 · 数据</h1>
        <p class="hero-lead">面向研究者与学者的入口。${st.entries} 个条目、${st.terms} 张术语卡、${st.links} 条机制关联，证据分级与 DOI 均可核验。</p>
        <div class="hero-actions">
          <a class="btn primary" href="#/entries">浏览条目</a>
          <a class="btn ghost" href="#/network">关联网络</a>
          <a class="btn ghost" href="#/integrity">数据自检</a>
        </div>
      </div>
      <div class="metric-grid">${metrics}</div>
    </section>

    <section class="sec">
      <div class="sec-head">
        <span class="sec-k">Search · 学术检索</span>
        <span class="filter-meta">按作者 / 年份 / DOI / 编号 / 英文标题</span>
      </div>
      <div class="academic-input-row">
        <span aria-hidden="true">⌕</span>
        <input id="research-input" placeholder="如 E001、皮亚杰、1999、10.1037/、Zone of proximal…" value="${esc(state.researchQ)}" autocomplete="off" />
      </div>
      <div class="academic-results" id="research-results"></div>
    </section>

    <section class="sec">
      <div class="sec-head"><span class="sec-k">Export · 数据下载</span></div>
      <div class="export-row">
        <button class="btn ghost" data-dl="json">整库 JSON</button>
        <button class="btn ghost" data-dl="entries-csv">条目 CSV</button>
        <button class="btn ghost" data-dl="links-csv">关联 CSV</button>
      </div>
      <p class="graph-hint">从页面同一份数据实时生成，与站内计数一致；JSON 含元数据、条目（含 DOI）、术语、关联、人物与情境。</p>
    </section>

    <section class="sec">
      <div class="sec-head"><span class="sec-k">Cite · 引用导出</span></div>
      <p class="graph-hint">打开任意条目，底部「引用本条」提供中文引文、BibTeX 与 RIS 三种格式，可直接复制。</p>
      <a class="btn ghost sm" href="#/entries">去条目页 →</a>
    </section>
    ${footHTML()}`;
  }

  function academicSearch(q) {
    const norm = (s) => String(s == null ? "" : s).toLowerCase();
    const query = norm(q).trim();
    if (!query) return [];
    const out = [];
    const isId = /^e\d+$/.test(query);
    const isYear = /^\d{3,4}$/.test(query);
    const seen = new Set();
    const push = (h) => { const k = h.href + "|" + h.kind + "|" + h.title; if (!seen.has(k)) { seen.add(k); out.push(h); } };

    if (isId) {
      const e = S.byId[query.toUpperCase()];
      if (e) push({ kind: "entry", title: e.name, sub: e.en, meta: e.id + " · " + S.thinkerName(e.thinker) + " · " + e.year, href: "#/entry/" + e.id });
    } else if (isYear) {
      S.entries.forEach((e) => {
        if (String(e.year).indexOf(query) > -1) push({ kind: "entry", title: e.name, sub: e.en, meta: S.thinkerName(e.thinker) + " · " + e.year, href: "#/entry/" + e.id });
      });
    } else {
      S.entries.forEach((e) => {
        const hitName = norm(e.name).indexOf(query) > -1;
        const hitEn = norm(e.en).indexOf(query) > -1;
        const hitThinker = norm(S.thinkerName(e.thinker)).indexOf(query) > -1 || norm(S.thinkerEn(e.thinker)).indexOf(query) > -1;
        const hitDoi = e.evidence.some((ev) => ev.doi && ev.doi.toLowerCase().indexOf(query) > -1);
        if (hitName || hitEn) push({ kind: "entry", title: e.name, sub: e.en, meta: S.thinkerName(e.thinker) + " · " + e.year, href: "#/entry/" + e.id });
        else if (hitThinker) push({ kind: "entry", title: e.name, sub: S.thinkerName(e.thinker) + " · " + e.year, meta: e.id, href: "#/entry/" + e.id });
        else if (hitDoi) {
          const ev = e.evidence.find((x) => x.doi && x.doi.toLowerCase().indexOf(query) > -1);
          push({ kind: "entry", title: e.name, sub: "DOI " + ev.doi, meta: ev.text, href: "#/entry/" + e.id });
        }
      });
      S.thinkers.forEach((t) => {
        if (norm(t.name).indexOf(query) > -1 || norm(t.en).indexOf(query) > -1) push({ kind: "thinker", title: t.name, sub: t.en, meta: t.entries.length + " 条关联条目", href: "#/thinker/" + t.id });
      });
      S.terms.forEach((t) => {
        if (norm(t.t).indexOf(query) > -1 || norm(t.en).indexOf(query) > -1) push({ kind: "term", title: t.t, sub: t.en, meta: t.d, href: "#/entry/" + t.entry });
      });
    }
    return out.slice(0, 40);
  }

  function renderResearchResults() {
    const box = document.getElementById("research-results");
    if (!box) return;
    const q = state.researchQ.trim();
    if (!q) {
      box.innerHTML = `<p class="graph-hint">输入作者名、年份、DOI、条目编号或英文标题。精确检索不展开口语同义词。</p>`;
      return;
    }
    const hits = academicSearch(q);
    if (!hits.length) {
      box.innerHTML = `<p class="graph-hint">没有精确匹配。试试完整作者名、四位年份或完整 DOI。</p>`;
      return;
    }
    const groups = { entry: "条目", thinker: "人物", term: "术语" };
    let html = "";
    ["entry", "thinker", "term"].forEach((k) => {
      const g = hits.filter((h) => h.kind === k);
      if (!g.length) return;
      html += `<div class="sr-group-label">${groups[k]} · ${g.length}</div>`;
      html += g.map((h) => `<div class="sr-item" data-href="${h.href}">
        <span class="sr-title">${esc(h.title)}</span>
        <span class="sr-kind">${groups[h.kind]}</span>
        <span class="sr-sub">${esc(h.sub || "")}${h.meta ? " · " + esc(h.meta) : ""}</span>
      </div>`).join("");
    });
    box.innerHTML = html;
    box.querySelectorAll("[data-href]").forEach((el) => {
      el.addEventListener("click", () => go(el.dataset.href));
    });
  }

  function csv(head, rows) {
    const c = (v) => { const s = String(v == null ? "" : v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    return [head, ...rows].map((r) => r.map(c).join(",")).join("\r\n") + "\r\n";
  }

  function buildExport(fmt) {
    if (fmt === "json") {
      const data = {
        meta: A.meta, generatedAt: new Date().toISOString(), stats: S.stats,
        domains: S.domains, entries: S.entries, links: S.links,
        thinkers: S.thinkers.map((t) => ({ id: t.id, name: t.name, en: t.en, birth: t.birth, death: t.death, country: t.country, entries: t.entries.map((e) => e.id) })),
        scenarios: S.scenarios, terms: S.terms,
      };
      return { name: "education-mind-atlas.json", mime: "application/json", text: JSON.stringify(data, null, 2) };
    }
    if (fmt === "entries-csv") {
      return {
        name: "entries.csv", mime: "text/csv",
        text: csv(["id", "name", "en", "domain", "branch", "thinker", "year", "kind", "tagline"],
          S.entries.map((e) => [e.id, e.name, e.en, e.domain, e.branch, S.thinkerName(e.thinker), e.year, e.kind, e.tagline])),
      };
    }
    if (fmt === "links-csv") {
      return {
        name: "links.csv", mime: "text/csv",
        text: csv(["a", "b", "type", "point", "confidence", "since"],
          S.links.map((l) => [l.a, l.b, l.type, l.point, l.confidence, l.since])),
      };
    }
    return null;
  }

  function downloadData(fmt) {
    const exp = buildExport(fmt);
    if (!exp) return;
    const blob = new Blob([exp.text], { type: exp.mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = exp.name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  /* ---------------- 概览 ---------------- */
  function viewOverview() {
    if (!state.audience) return viewLanding();
    if (state.audience === "researcher") return viewResearch();
    const st = S.stats;
    const metrics = [
      [st.entries, "详解条目", ""],
      [st.terms, "术语卡", ""],
      [st.links, "关联", ""],
      [st.thinkers, "人物", ""],
      [st.byType.agreement, "共识关联", "agree"],
      [st.byType.disagreement, "分歧对立", "disagree"],
      [st.byType.derivative, "衍生发展", "derive"],
      [st.activeBranches + "/" + st.branches, "覆盖分支", ""],
    ].map(([n, l, c]) => `<div class="metric"><span class="metric-num ${c}">${n}</span><span class="metric-label">${l}</span></div>`).join("");

    const maxDomain = Math.max.apply(null, S.domains.map((d) => countIn((e) => e.domain === d.id)));
    const domains = S.domains.map((d) => {
      const n = countIn((e) => e.domain === d.id);
      const branches = d.branches.filter((b) => (S.entriesOfBranch[b.id] || []).length).length;
      const pct = Math.round((n / maxDomain) * 100);
      return `<a class="domain-card" href="#/entries?domain=${d.id}" style="--dc:${d.color}">
        <div class="dc-top"><span class="dc-k">${String(S.domains.indexOf(d) + 1).padStart(2, "0")}</span><span class="dc-name">${esc(d.name)}</span></div>
        <span class="dc-en">${esc(d.en)}</span>
        <p class="dc-desc">${esc(d.desc)}</p>
        <div class="dc-foot">
          <span>${n} 条目</span><span>·</span><span>${branches}/${d.branches.length} 分支</span>
          <span class="bar"><i style="width:${pct}%"></i></span>
        </div>
      </a>`;
    }).join("");

    const hubs = topByDegree(6);
    const hubHTML = hubs.map((e, i) => `
      <div class="entry-row" data-go="#/entry/${e.id}">
        <span class="er-id">${String(i + 1).padStart(2, "0")}</span>
        <div>
          <div class="er-name">${esc(e.name)}</div>
          <span class="er-en">${esc(e.en)}</span>
          <span class="er-tag">${esc(e.tagline)}</span>
        </div>
        <div class="er-side">
          <span class="er-meta">${S.degree(e.id)} 条关联</span>
          <span class="er-branch" style="${branchStyle(e.branch)}">${esc(branchOf(e.branch).name)}</span>
        </div>
      </div>`).join("");

    /* 年代分布：以 20 年为一格 */
    const buckets = [];
    const startD = 1880;
    for (let d = startD; d <= 2020; d += 20) buckets.push({ d, n: 0 });
    S.entries.forEach((e) => {
      if (e.year < startD) buckets[0].n += 1; else {
        const idx = Math.floor((e.year - startD) / 20);
        if (buckets[idx]) buckets[idx].n += 1;
        else buckets[buckets.length - 1].n += 1;
      }
    });
    const maxB = Math.max.apply(null, buckets.map((b) => b.n)) || 1;
    const eraBars = buckets.map((b) => {
      const h = Math.max(3, Math.round((b.n / maxB) * 62));
      const showLabel = (b.d - startD) % 40 === 0;
      return `<div class="era-col" data-tip="${b.d}–${b.d + 19} · ${b.n} 条">
        <div class="era-bar" style="height:${h}px"></div>
        ${showLabel ? `<span class="era-x">${b.d}</span>` : ""}
      </div>`;
    }).join("");

    /* 关联构成 */
    const t = S.stats.byType;
    const total = t.agreement + t.disagreement + t.derivative || 1;
    const mixBar = `<div class="mix-bar">
      <i style="width:${(t.agreement / total) * 100}%;background:var(--agree)"></i>
      <i style="width:${(t.disagreement / total) * 100}%;background:var(--disagree)"></i>
      <i style="width:${(t.derivative / total) * 100}%;background:var(--derive)"></i>
    </div>
    <div class="mix-legend">
      <div class="mix-item"><span class="sw" style="background:var(--agree)"></span>共识关联<span class="v">${t.agreement}</span></div>
      <div class="mix-item"><span class="sw" style="background:var(--disagree)"></span>分歧对立<span class="v">${t.disagreement}</span></div>
      <div class="mix-item"><span class="sw" style="background:var(--derive)"></span>衍生发展<span class="v">${t.derivative}</span></div>
    </div>`;

    const aud = state.audience;
    const heroCopy = aud === "teacher"
      ? { eb: "教师工作台 · Teacher", h1: "把研究结论<br/>变成明天能用的课堂动作", lead: `${st.scenarios} 个课堂情境、${st.entries} 个知识点、${st.links} 条机制级关联。先按情境找到可执行的做法，再往下读机制与证据；每个建议都标明证据强度与转介边界。`, cta: [["#/start", "30 秒分诊", "primary"], ["#/scenarios", "场景库", "ghost"], ["#/entries", "浏览条目", "ghost"]] }
      : aud === "parent"
        ? { eb: "家长手册 · Parent", h1: "先理解孩子<br/>再决定怎么做", lead: `按 0–3、3–6、6–12、12–18 四个年龄段组织。每个情境都写清：可能是怎么回事、可以试什么、先别做什么、可以怎么说，以及什么时候该找专业帮助。`, cta: [["#/start", "30 秒分诊", "primary"], ["#/scenarios", "场景库", "ghost"], ["#/scenarios?age=all", "先看辟谣", "ghost"]] }
        : { eb: A.meta.tagline, h1: "把教育与心智<br/>连成一张可查的地图", lead: `五个领域、${st.entries} 个知识点、${st.links} 条机制级关联。老师可以按课堂情境找做法，家长可以按年龄找解释；两种身份共享同一套机制与证据。`, cta: [["#/start", "30 秒分诊", "primary"], ["#/scenarios", "场景库", "ghost"], ["#/entries", "浏览条目", "ghost"]] };

    const scStrip = S.scenarios
      .filter((s) => !aud || s.audience.includes(aud))
      .slice(0, 4)
      .map((s) => `<a class="sc-mini" href="#/scenarios?open=${s.id}">
        <span class="sc-mini-age">${esc(AGE_NAME[s.age] || s.age)}</span>
        <span class="sc-mini-title">${esc(s.title)}</span>
        <span class="sc-mini-go">→</span>
      </a>`).join("");

    return `
    <section class="hero">
      <div>
        <span class="eyebrow">${esc(heroCopy.eb)}</span>
        <h1>${heroCopy.h1}</h1>
        <p class="hero-lead">${esc(heroCopy.lead)}</p>
        <div class="hero-actions">
          ${heroCopy.cta.map(([href, label, cls]) => `<a class="btn ${cls}" href="${href}">${label}</a>`).join("")}
        </div>
      </div>
      <div class="metric-grid">${metrics}</div>
    </section>

    <section class="sc-strip">
      <div class="sec-head" style="margin-bottom:0.7rem">
        <span class="sec-k">Scenarios · 大家最常遇到</span>
        <a class="sec-more" href="#/scenarios">全部 ${st.scenarios} 个情境 →</a>
      </div>
      <div class="sc-mini-grid">${scStrip}</div>
    </section>

    <section class="chart-row">
      <div class="chart-block">
        <div class="chart-head">
          <span class="chart-title">年代分布 · 20 年一格</span>
          <span class="chart-note">${st.entries} 条 · ${st.yearRange[0] < 0 ? "古代" : st.yearRange[0]}–${st.yearRange[1]}</span>
        </div>
        <div class="era-chart">${eraBars}</div>
      </div>
      <div class="chart-block">
        <div class="chart-head">
          <span class="chart-title">关联构成</span>
          <span class="chart-note">${st.links} 条</span>
        </div>
        <div class="mix-chart">${mixBar}</div>
      </div>
    </section>

    <section class="sec">
      <div class="sec-head">
        <span class="sec-k">Areas · 内容领域</span>
        <a class="sec-more" href="#/entries">全部条目 →</a>
      </div>
      <div class="domain-grid">${domains}</div>
    </section>

    <section class="sec">
      <div class="sec-head">
        <span class="sec-k">Hubs · 关联枢纽</span>
        <a class="sec-more" href="#/network">打开网络 →</a>
      </div>
      <div class="entry-list">${hubHTML}</div>
    </section>

    <section class="sec">
      <div class="sec-head"><span class="sec-k">Explore · 三条探索路径</span></div>
      <div class="domain-grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
        <a class="domain-card" href="#/timeline" style="--dc:var(--accent)">
          <div class="dc-top"><span class="dc-name">按时间</span></div>
          <span class="dc-en">Timeline</span>
          <p class="dc-desc">从 1885 到 2006，看理论如何接力、谁在反驳谁。</p>
          <div class="dc-foot"><span>${S.stats.yearRange[0] < 0 ? "古代" : S.stats.yearRange[0]} — ${S.stats.yearRange[1]}</span></div>
        </a>
        <a class="domain-card" href="#/path" style="--dc:var(--derive)">
          <div class="dc-top"><span class="dc-name">按关联</span></div>
          <span class="dc-en">Path</span>
          <p class="dc-desc">任意两个知识点之间的最短关联路径，最多五跳。</p>
          <div class="dc-foot"><span>图算法 · BFS</span></div>
        </a>
        <a class="domain-card" href="#/integrity" style="--dc:var(--agree)">
          <div class="dc-top"><span class="dc-name">按证据</span></div>
          <span class="dc-en">Integrity</span>
          <p class="dc-desc">全站计数、引用与孤立节点自检，数字处处一致。</p>
          <div class="dc-foot"><span>${S.integrity().errors} 错误 · ${S.integrity().warnings} 提示</span></div>
        </a>
      </div>
    </section>
    ${footHTML()}`;
  }

  /* ---------------- 快速分诊 ---------------- */
  function viewTriage() {
    const tr = S.triage;
    const t = state.triage;
    const ageObj = (tr.ages || []).find((a) => a.id === t.age);
    const concernObj = (tr.concerns || []).find((c) => c.id === t.concern);
    const ready = !!(ageObj && concernObj);

    let results = [];
    let relaxed = false;
    if (ready) {
      const ids = concernObj.scenarios.slice();
      const exact = ids.filter((id) => S.scenarioById[id] && S.scenarioById[id].age === t.age);
      const generic = ids.filter((id) => S.scenarioById[id] && S.scenarioById[id].age === "all");
      const other = ids.filter((id) => S.scenarioById[id] && S.scenarioById[id].age !== t.age && S.scenarioById[id].age !== "all");
      results = exact.concat(generic);
      if (!results.length) { results = other; relaxed = true; }
      results = results.slice(0, 6).map((id) => S.scenarioById[id]);
    }

    const urgent = t.duration === "months" || t.duration === "impact";

    /* 一页纸选择：默认选中最贴近的 3 条；改年龄或困扰时重新初始化 */
    const resultIds = results.map((s) => s.id);
    if (ready && !state.sheetInit) {
      state.sheetInit = true;
      state.sheetPick = resultIds.slice(0, 3);
    }
    state.sheetPick = state.sheetPick.filter((id) => resultIds.indexOf(id) > -1);
    const picked = state.sheetPick.map((id) => S.scenarioById[id]).filter(Boolean);
    const canSheet = picked.length >= 2;
    const sheetHref = `#/handout?ids=${picked.map((s) => s.id).join(",")}&age=${encodeURIComponent(t.age)}&concern=${encodeURIComponent(t.concern)}`;

    const ageOpts = (tr.ages || []).map((a) => `<button class="triage-opt ${t.age === a.id ? "on" : ""}" data-tr="age" data-v="${a.id}">
      <b>${esc(a.name)}</b><small>${esc(a.hint)}</small></button>`).join("");

    const concernOpts = (tr.concerns || []).map((c) => `<button class="triage-opt ${t.concern === c.id ? "on" : ""}" data-tr="concern" data-v="${c.id}">
      <b>${esc(c.name)}</b><small>${esc(c.hint)}</small></button>`).join("");

    const durOpts = (tr.durations || []).map((d) => `<button class="chip ${t.duration === d.id ? "on" : ""}" data-tr="duration" data-v="${d.id}">${esc(d.name)}</button>`).join("");

    return `
    <div class="page-head">
      <span class="eyebrow">Start · 快速分诊</span>
      <h1 class="page-title">先回答三个问题</h1>
      <p class="page-lead">不用先想清楚属于哪个理论。选年龄、选困扰、选持续时间，系统给出最接近的几条情境，每条都含可以试、先别做与转介边界。</p>
    </div>

    <div class="triage-wrap">
      <section class="triage-q">
        <div class="triage-q-head"><span class="triage-num">01</span><span class="triage-q-title">孩子多大</span>
          ${ageObj ? `<button class="triage-edit" data-tr="reset" data-v="age">改</button>` : ""}</div>
        <div class="triage-opts ages">${ageOpts}</div>
      </section>

      ${ageObj ? `<section class="triage-q">
        <div class="triage-q-head"><span class="triage-num">02</span><span class="triage-q-title">现在最困扰你的是</span>
          ${concernObj ? `<button class="triage-edit" data-tr="reset" data-v="concern">改</button>` : ""}</div>
        <div class="triage-opts">${concernOpts}</div>
      </section>` : ""}

      ${ready ? `<section class="triage-q">
        <div class="triage-q-head"><span class="triage-num">03</span><span class="triage-q-title">持续多久了</span>
          <span class="triage-hint">用于提示紧急程度，不影响匹配</span></div>
        <div class="graph-bar" style="margin-top:0">${durOpts}</div>
      </section>` : ""}

      ${ready ? `
        <div class="triage-result">
          <div class="triage-result-head">
            <span class="sec-k">${esc(ageObj.name)} · ${esc(concernObj.name)}</span>
            <span class="filter-meta">${results.length} 条情境</span>
          </div>
          ${urgent ? `<div class="sc-esc" style="margin-top:0.6rem"><span class="sc-k">先看这条</span>
            持续时间较长或已影响吃饭、睡觉、上学时，优先排除健康与情绪因素，并考虑联系学校心理老师、儿科或儿童心理专业人员。下面的做法可以同时进行，但不要替代评估。</div>` : ""}
          ${relaxed ? `<p class="graph-hint">该年龄段没有直接对应的情境，以下按「同类困扰」跨年龄推荐。</p>` : ""}
          ${results.length >= 2 ? `<div class="pick-bar no-print">
            <div class="pick-head">
              <span class="sec-k">带走哪几条</span>
              <span class="filter-meta">已选 ${picked.length} / 3 · 至少 2 条</span>
            </div>
            <div class="pick-chips">
              ${results.map((s) => {
                const idx = state.sheetPick.indexOf(s.id);
                return `<button class="chip pick ${idx > -1 ? "on" : ""}" data-pick="${s.id}" aria-pressed="${idx > -1 ? "true" : "false"}">
                  ${idx > -1 ? `<b>${idx + 1}</b>` : ""}${esc(s.title)}</button>`;
              }).join("")}
            </div>
            <div class="pick-actions">
              <span class="graph-hint">合并成一张 A4，家长会、家访或面谈时一次带走。</span>
              ${canSheet
                ? `<a class="btn primary sm" href="${sheetHref}">生成一页纸（A4）→</a>`
                : `<span class="btn primary sm disabled" aria-disabled="true">生成一页纸（A4）</span>`}
            </div>
          </div>` : results.length === 1 ? `<div class="pick-bar no-print">
            <p class="graph-hint">这一项当前只匹配到 1 条情境，无法合并；可以直接打印单条。</p>
            <div class="pick-actions">
              <a class="btn primary sm" href="#/scenario/${results[0].id}">打印这一条（A4）→</a>
            </div>
          </div>` : `<div class="pick-bar no-print"><p class="graph-hint">该困扰暂无可推荐的情境，换一个类别试试。</p></div>`}
          <div class="sc-list" style="margin-top:0.8rem">
            ${results.map((s, i) => scenarioCard(s, i < 2, state.sheetPick.indexOf(s.id) + 1)).join("")}
          </div>
          <div class="triage-actions">
            <a class="btn ghost sm" href="#/scenarios?age=${encodeURIComponent(t.age)}">看该年龄全部情境 →</a>
            <button class="btn ghost sm" data-tr="reset" data-v="all">重新选择</button>
          </div>
        </div>` : `<div class="triage-actions"><span class="graph-hint">选完前两项即可看到结果。</span></div>`}

      <p class="triage-note"><b>一个判断说明</b>　分诊的 10 个类别和映射是按「家长 / 老师会怎么描述问题」做的编辑判断，不是研究结论。有些情境会同时出现在两类里（如「作业拖拉」既在注意力也在学习），这是有意的——同一个现象从不同入口都该能被找到。</p>
    </div>
    ${footHTML()}`;
  }

  /* ---------------- 场景库 ---------------- */
  const AGES = [
    { id: "", name: "全部年龄" },
    { id: "0-3", name: "0–3 岁" },
    { id: "3-6", name: "3–6 岁" },
    { id: "6-12", name: "6–12 岁" },
    { id: "12-18", name: "12–18 岁" },
    { id: "all", name: "通用 / 辟谣" },
  ];
  const AGE_NAME = { "0-3": "0–3 岁", "3-6": "3–6 岁", "6-12": "6–12 岁", "12-18": "12–18 岁", all: "通用" };

  function activityHTML(id) {
    const act = S.activities[id];
    if (!act || state.audience === "parent") return "";
    return `<div class="sc-activity">
      <div class="sc-activity-head"><span>5 分钟课堂活动</span><b>${esc(act.name)}</b><em>${act.minutes} 分钟</em></div>
      <ol>${act.steps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
      <div class="sc-activity-meta"><span>材料：${esc(act.materials)}</span><span>时机：${esc(act.when)}</span></div>
      <p class="sc-activity-note">${esc(act.note)}</p>
    </div>`;
  }

  function scenarioCard(s, open, pickIndex) {
    const audTags = s.audience.map((a) => `<span class="badge">${a === "teacher" ? "给老师" : "给家长"}</span>`).join("");
    const entries = (s.links || []).map((id) => S.byId[id]).filter(Boolean);
    return `<details class="sc-card" ${open ? "open" : ""}>
      <summary>
        <span class="sc-title">${esc(s.title)}</span>
        <span class="sc-tags">
          ${pickIndex ? `<span class="badge pick-on">已选 ${pickIndex}</span>` : ""}
          <span class="badge">${esc(AGE_NAME[s.age] || s.age)}</span>
          ${audTags}
          ${S.activities[s.id] && state.audience !== "parent" ? '<span class="badge derive">含课堂活动</span>' : ""}
          <span class="badge ${s.evidence === "established" ? "agree" : s.evidence === "contested" ? "disagree" : "derive"}">${esc((A.confidences[s.evidence] || {}).name || s.evidence)}</span>
        </span>
      </summary>
      <div class="sc-body">
        <div class="sc-row"><span class="sc-k">现象</span><p>${esc(s.signal)}</p></div>
        <div class="sc-row"><span class="sc-k">可能不是你以为的那样</span><p>${esc(s.read)}</p></div>
        <div class="sc-three">
          <div class="sc-col do">
            <div class="sc-col-head">可以试</div>
            <ul>${s.do.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>
          <div class="sc-col dont">
            <div class="sc-col-head">先别做</div>
            <ul>${s.dont.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>
          <div class="sc-col say">
            <div class="sc-col-head">可以这样说</div>
            <ul>${s.say.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>
        </div>
        ${activityHTML(s.id)}
        ${s.escalate && s.escalate !== "—" ? `<div class="sc-esc"><span class="sc-k">何时找专业帮助</span>${esc(s.escalate)}</div>` : ""}
        ${entries.length ? `<div class="sc-links"><span class="sc-k">背后的机制</span>${entries.map((e) => `<a class="rel-pill" href="#/entry/${e.id}">${esc(e.name)}</a>`).join("")}</div>` : ""}
        <div class="sc-actions no-print"><a class="btn ghost sm" href="#/scenario/${s.id}">打印这一条 →</a></div>
      </div>
    </details>`;
  }

  function viewScenarios(query) {
    const openId = (query && query.open) || "";
    const ident = state.audience;
    const audFilter = state.scAudience || ident || "all";
    const list = S.scenarios.filter((s) =>
      (audFilter === "all" || s.audience.includes(audFilter)) &&
      (!state.scAge || s.age === state.scAge || s.age === "all")
    );

    const ageChips = AGES.map((a) => `<button class="chip ${state.scAge === a.id ? "on" : ""}" data-sc-age="${a.id}">${esc(a.name)}</button>`).join("");
    const audChips = [["all", "全部"], ["teacher", "老师"], ["parent", "家长"]]
      .map(([v, n]) => `<button class="chip ${audFilter === v ? "on" : ""}" data-sc-aud="${v}">${n}</button>`).join("");

    const intro = ident === "teacher"
      ? "按课堂上真实会遇到的情况组织。每条给出：可能的机制、可以试的课堂动作、先别做的事、可以直接说的话，以及何时该转介。"
      : ident === "parent"
        ? "按孩子的年龄和家里真实会遇到的情况组织。每条给出：可能是怎么回事、可以试的做法、先别做的事、可以直接说的话，以及什么时候该找专业帮助。"
        : "这是给老师和家长的情境库。选一个孩子年龄，或直接找到与你此刻最接近的那一条。";

    return `
    <div class="page-head">
      <span class="eyebrow">Scenarios · 场景库</span>
      <h1 class="page-title">${ident === "teacher" ? "课堂上，先做什么" : ident === "parent" ? "孩子这样，我能做什么" : "从一个具体情境开始"}</h1>
      <p class="page-lead">${esc(intro)}</p>
      <div class="graph-bar" style="margin-top:1rem">
        <span class="sc-filter-label">身份</span>${audChips}
        <span class="sc-filter-label" style="margin-left:0.6rem">年龄</span>${ageChips}
        <span class="filter-meta">${list.length} 个情境</span>
      </div>
    </div>
    <div class="sc-list">${list.map((s, i) => scenarioCard(s, openId ? s.id === openId : (i === 0 && list.length <= 6))).join("") || '<div class="empty"><div class="em-t">该筛选下暂无情境</div>换一个年龄试试。</div>'}</div>
    <p class="graph-hint">每条情境都是对站内条目的编辑性综合，不构成诊断或个别化建议。涉及发展、精神健康与安全问题，请以专业人员评估为准。</p>
    ${footHTML()}`;
  }

  /* ---------------- 情境卡（可打印） ---------------- */
  function viewScenarioSheet(id) {
    const s = S.scenarioById[id];
    if (!s) return notFound("未找到该情境");
    const entries = (s.links || []).map((x) => S.byId[x]).filter(Boolean);
    const act = S.activities[s.id];
    const showAct = act && state.audience !== "parent";
    const today = new Date();
    const dateStr = today.getFullYear() + " 年 " + (today.getMonth() + 1) + " 月 " + today.getDate() + " 日";

    return `
    <div class="sheet-actions no-print">
      <a class="back-link" href="#/scenarios?open=${s.id}">← 返回场景库</a>
      <button class="btn primary sm" id="sheet-print">打印 / 存为 PDF</button>
    </div>
    <article class="sheet-paper">
      <header class="sheet-head">
        <span class="sheet-kicker">教育与心智知识图谱 · 情境卡</span>
        <h1>${esc(s.title)}</h1>
        <div class="sheet-meta">
          <span>${esc(AGE_NAME[s.age] || s.age)}</span>
          <span>${s.audience.map((a) => (a === "teacher" ? "给老师" : "给家长")).join(" / ")}</span>
          <span>证据：${esc((A.confidences[s.evidence] || {}).name || s.evidence)}</span>
          <span>${esc(s.id)}</span>
        </div>
      </header>

      <section class="sheet-sec">
        <h2>你看到的现象</h2>
        <p>${esc(s.signal)}</p>
      </section>

      <section class="sheet-sec">
        <h2>可能不是你以为的那样</h2>
        <p>${esc(s.read)}</p>
      </section>

      <section class="sheet-sec">
        <h2>可以试</h2>
        <ol class="sheet-do">${s.do.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
      </section>

      <section class="sheet-sec">
        <h2>先别做</h2>
        <ul class="sheet-dont">${s.dont.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </section>

      <section class="sheet-sec">
        <h2>可以这样说</h2>
        <ul class="sheet-say">${s.say.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </section>

      ${showAct ? `<section class="sheet-sec sheet-act">
        <h2>5 分钟课堂活动 · ${esc(act.name)}（${act.minutes} 分钟）</h2>
        <ol class="sheet-do">${act.steps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
        <p class="sheet-act-meta"><b>材料</b>　${esc(act.materials)}　　<b>时机</b>　${esc(act.when)}</p>
        <p class="sheet-act-note">${esc(act.note)}</p>
      </section>` : ""}

      ${s.escalate && s.escalate !== "—" ? `<section class="sheet-sec sheet-esc">
        <h2>何时找专业帮助</h2>
        <p>${esc(s.escalate)}</p>
      </section>` : ""}

      ${entries.length ? `<section class="sheet-sec">
        <h2>依据（可查证的机制条目）</h2>
        <ul class="sheet-refs">
          ${entries.map((e) => `<li><b>${esc(e.name)}</b>　${esc(S.thinkerName(e.thinker))}，${fmtYear(e.year)}　<span class="sheet-id">${esc(e.id)}</span></li>`).join("")}
        </ul>
      </section>` : ""}

      <footer class="sheet-foot">
        <p>本卡是对站内知识条目的编辑性综合，不构成诊断，也不能替代个别化评估。涉及发展与精神健康问题，请以专业人员意见为准。</p>
        <p>教育与心智知识图谱 v${esc(A.meta.version)} · ${esc(dateStr)} · ${esc(s.id)}</p>
      </footer>
    </article>`;
  }

  /* ---------------- 一页纸（2–3 条情境合并，A4） ---------------- */
  function viewHandout(query) {
    const rawIds = String(query.ids || "").split(",").map((x) => x.trim()).filter(Boolean);
    const ids = rawIds.filter((id, i) => rawIds.indexOf(id) === i).slice(0, 3);
    const list = ids.map((id) => S.scenarioById[id]).filter(Boolean);
    if (!list.length) return notFound("没有可合并的情境");

    const ageId = query.age || "";
    const concern = (S.triage.concerns || []).find((c) => c.id === (query.concern || ""));
    const today = new Date();
    const dateStr = today.getFullYear() + " 年 " + (today.getMonth() + 1) + " 月 " + today.getDate() + " 日";
    const countName = ["", "一件事", "两件事", "三件事"][list.length];
    const audLabel = state.audience === "teacher" ? "给老师" : state.audience === "parent" ? "给家长" : "老师 / 家长";

    /* 依据：合并去重后的机制条目 */
    const refMap = {};
    list.forEach((s) => (s.links || []).forEach((id) => { if (S.byId[id]) refMap[id] = S.byId[id]; }));
    const refs = Object.keys(refMap).map((id) => refMap[id]);

    return `
    <div class="sheet-actions no-print">
      <a class="back-link" href="#/start">← 返回分诊</a>
      <div class="sheet-actions-right">
        <span class="filter-meta">A4 · 单页 · 已合并 ${list.length} 条</span>
        <button class="btn primary sm" id="sheet-print">打印 / 存为 PDF</button>
      </div>
    </div>
    <article class="sheet-paper handout">
      <header class="sheet-head">
        <span class="sheet-kicker">教育与心智知识图谱 · 家校沟通一页纸</span>
        <h1>带回去的${countName}</h1>
        <div class="sheet-meta">
          ${ageId ? `<span>${esc(AGE_NAME[ageId] || ageId)}</span>` : ""}
          ${concern ? `<span>困扰：${esc(concern.name)}</span>` : ""}
          <span>${esc(audLabel)}</span>
          <span>${esc(dateStr)}</span>
        </div>
      </header>

      <p class="handout-lead">这一页把与你描述最接近的 ${list.length} 个情境合在一起。不必按顺序做，先挑一条最容易开始的。</p>

      ${list.map((s, i) => `
      <section class="handout-item">
        <h2 class="handout-h">
          <span class="handout-num">${String(i + 1).padStart(2, "0")}</span>
          <span>${esc(s.title)}</span>
          <span class="handout-ev">证据：${esc((A.confidences[s.evidence] || {}).name || s.evidence)}</span>
        </h2>
        <p class="handout-signal"><b>你可能会看到</b>　${esc(s.signal)}</p>
        <p class="handout-read"><b>可能不是你以为的那样</b>　${esc(s.read)}</p>
        <div class="handout-row">
          <div class="handout-col do"><h3>可以试</h3><ol>${s.do.map((x) => `<li>${esc(x)}</li>`).join("")}</ol></div>
          <div class="handout-col dont"><h3>先别做</h3><ul>${s.dont.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="handout-col say"><h3>可以这样说</h3><ul>${s.say.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
        </div>
        ${s.escalate && s.escalate !== "—" ? `<p class="handout-esc"><b>何时找专业帮助</b>　${esc(s.escalate)}</p>` : ""}
      </section>`).join("")}

      ${refs.length ? `<section class="handout-refs">
        <h2>依据</h2>
        <p>${refs.map((e) => `<b>${esc(e.name)}</b>（${esc(S.thinkerName(e.thinker))}，${fmtYear(e.year)} · ${esc(e.id)}）`).join("；")}</p>
      </section>` : ""}

      <footer class="sheet-foot">
        <p>本页是对站内知识条目的编辑性综合，不构成诊断，也不能替代个别化评估。涉及发展与精神健康问题，请以专业人员意见为准。</p>
        <p>教育与心智知识图谱 v${esc(A.meta.version)} · ${esc(dateStr)} · 共 ${list.length} 条情境 · 单页</p>
      </footer>
    </article>`;
  }

  /* ---------------- 条目列表 ---------------- */
  function filteredEntries() {
    const f = state.filter;
    return S.entries.filter((e) =>
      (!f.domain || e.domain === f.domain) &&
      (!f.branch || e.branch === f.branch) &&
      (!f.kind || e.kind === f.kind)
    );
  }

  function viewEntries() {
    const list = filteredEntries();
    const kinds = Object.keys(A.kinds);
    const domChips = S.domains.map((d) => {
      const n = countIn((e) => e.domain === d.id);
      return `<button class="chip ${state.filter.domain === d.id ? "on" : ""}" data-filter="domain" data-value="${d.id}">${esc(d.short)} <span class="n">${n}</span></button>`;
    }).join("");

    const kindChips = kinds.map((k) => {
      const n = S.entries.filter((e) => e.kind === k).length;
      if (!n) return "";
      return `<button class="chip ${state.filter.kind === k ? "on" : ""}" data-filter="kind" data-value="${k}">${esc(A.kinds[k].name)} <span class="n">${n}</span></button>`;
    }).join("");

    const branchChips = state.filter.domain
      ? domainOf(state.filter.domain).branches.map((b) => {
          const n = (S.entriesOfBranch[b.id] || []).length;
          if (!n) return "";
          return `<button class="chip ${state.filter.branch === b.id ? "on" : ""}" data-filter="branch" data-value="${b.id}">${esc(b.name)} <span class="n">${n}</span></button>`;
        }).join("")
      : "";

    const hasFilter = state.filter.domain || state.filter.branch || state.filter.kind;

    /* 分组 */
    let body = "";
    if (state.filter.domain) {
      const d = domainOf(state.filter.domain);
      const branches = state.filter.branch ? [S.branchById[state.filter.branch]] : d.branches;
      body = branches.map((b) => {
        const items = list.filter((e) => e.branch === b.id);
        if (!items.length) return "";
        return `<div class="group-head"><h3>${esc(b.name)}</h3><span class="gh-n">${items.length} 条</span></div>${items.map(rowHTML).join("")}`;
      }).join("");
    } else {
      body = S.domains.map((d) => {
        const items = list.filter((e) => e.domain === d.id);
        if (!items.length) return "";
        return `<div class="group-head"><h3>${esc(d.name)}</h3><span class="gh-n">${items.length} 条</span></div>${items.slice(0, 8).map(rowHTML).join("")}
          ${items.length > 8 ? `<div style="padding:0.6rem 0;"><a class="btn ghost sm" href="#/entries?domain=${d.id}">查看该领域全部 ${items.length} 条 →</a></div>` : ""}`;
      }).join("");
    }

    if (!list.length) body = `<div class="empty"><div class="em-t">没有符合条件的条目</div>试试清除筛选。</div>`;

    return `
    <div class="page-head">
      <span class="eyebrow">Entries · 理论条目</span>
      <div class="page-head-row">
        <div>
          <h1 class="page-title">${state.filter.domain ? esc(domainOf(state.filter.domain).name) : "全部知识点"}</h1>
          <p class="page-lead">${state.filter.domain ? esc(domainOf(state.filter.domain).desc) : "按领域与分支组织，每条含定义、核心论断、学界共识、学术分歧、实证来源、教育应用与术语卡。"}</p>
        </div>
      </div>
    </div>

    <div class="filter-bar" role="group" aria-label="筛选">
      <button class="chip ${!state.filter.domain ? "on" : ""}" data-filter="domain" data-value="">全部</button>
      ${domChips}
      <span style="width:1px;height:18px;background:var(--rule);margin:0 0.2rem"></span>
      ${kindChips}
      ${hasFilter ? `<button class="chip chip-clear" data-filter="clear">清除筛选</button>` : ""}
      <span class="filter-meta">${list.length} / ${S.stats.entries} 条</span>
    </div>
    ${branchChips ? `<div class="filter-bar" style="border-bottom:none;padding-top:0.4rem;position:static">${branchChips}</div>` : ""}

    <div class="entry-list">${body}</div>
    ${footHTML()}`;
  }

  function rowHTML(e) {
    return `<div class="entry-row" data-go="#/entry/${e.id}" role="link" tabindex="0">
      <span class="er-id">${esc(e.id)}</span>
      <div>
        <div class="er-name">${esc(e.name)}</div>
        <span class="er-en">${esc(e.en)}</span>
        <span class="er-tag">${esc(e.tagline)}</span>
      </div>
      <div class="er-side">
        <span class="er-meta">${esc(S.thinkerName(e.thinker))} · ${fmtYear(e.year)}</span>
        <span class="er-branch" style="${branchStyle(e.branch)}">${esc(branchOf(e.branch).name)}</span>
        <span class="er-meta">${S.degree(e.id)} 关联</span>
      </div>
    </div>`;
  }

  /* ---------------- 条目详情 ---------------- */
  function viewEntry(id) {
    const e = S.byId[id];
    if (!e) return notFound("未找到该条目");

    const dom = domainOf(e.domain);
    const br = branchOf(e.branch);
    const rel = (S.adj[e.id] || []);
    const relByType = { agreement: [], disagreement: [], derivative: [] };
    rel.forEach((n) => relByType[n.link.type].push(n));

    const relBlock = (type) => {
      const arr = relByType[type];
      if (!arr.length) return "";
      return `<div style="margin-bottom:0.7rem">
        <div class="aside-row" style="border:none;padding-bottom:0.2rem;font-family:var(--mono);font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--ink-5)">
          <span>${linkName[type]}</span><b>${arr.length}</b></div>
        <div class="rel-list">${arr.map((n) => {
          const o = S.byId[n.id];
          return `<a class="rel-item" href="#/entry/${o.id}">
            <span class="rel-type ${type}">${linkSymbol[type]}</span>
            <span>${esc(o.name)}</span>
          </a>`;
        }).join("")}</div>
      </div>`;
    };

    const disagreements = e.disagreements.map((d) => {
      const sides = (d.sides || []).map((s) => `<div class="dis-side"><span class="who">${esc(S.thinkerName(s.who))}</span><div class="view">${esc(s.view)}</div></div>`).join("");
      return `<div class="dis-card">
        <div class="dis-topic">${esc(d.topic)}</div>
        <div class="dis-sides">${sides}</div>
        ${d.stake ? `<div class="dis-stake"><b>争议焦点</b>　${esc(d.stake)}</div>` : ""}
      </div>`;
    }).join("");

    const hasWork = (t) => /《[^》]+》/.test(t) || /[A-Za-z]{3,}([\s,&-]+[A-Za-z]{2,}){2,}/.test(t) || /(Journal|Review|Press|学报|期刊|出版社|杂志)/.test(t);
    const evTier = (ev) => (ev.doi ? "doi" : hasWork(ev.text) ? "ref" : (/\d{4}/.test(ev.text) ? "trace" : "review"));
    const TIER_LABEL = { ref: "有出处", trace: "作者 + 年份", review: "综述" };
    const TIER_TIP = {
      ref: "标注了具体作品（书名号、英文标题或期刊名），可据此定位",
      trace: "标注了作者与年份，但未指向具体作品",
      review: "概括性表述，未指向单一原始文献",
    };
    const tierCounts = { doi: 0, ref: 0, trace: 0, review: 0 };
    e.evidence.forEach((ev) => { tierCounts[evTier(ev)] += 1; });
    const evLegend = [["doi", "DOI 可直达"], ["ref", "有明确出处"], ["trace", "仅作者与年份"], ["review", "综述"]]
      .filter(([k]) => tierCounts[k])
      .map(([k, label]) => `<span class="dot-mark ${k}"></span>${label} ${tierCounts[k]}`)
      .join("　");
    const evidence = e.evidence.map((ev, i) => {
      const tier = evTier(ev);
      return `<div class="ev-item t-${tier}">
        <span class="ev-k">${String(i + 1).padStart(2, "0")}</span>
        <span>${esc(ev.text)}</span>
        ${ev.doi
          ? `<a class="doi" href="https://doi.org/${esc(ev.doi)}" target="_blank" rel="noopener">DOI ↗</a>`
          : `<span class="ev-tier" title="${TIER_TIP[tier]}">${TIER_LABEL[tier]}</span>`}
      </div>`;
    }).join("");

    const terms = e.terms.map((t) => `<div class="term">
      <div><span class="t">${esc(t.t)}</span><span class="te">${esc(t.en)}</span></div>
      <div class="td">${esc(t.d)}</div>
    </div>`).join("");

    const appLabel = state.audience === "teacher" ? "课堂可以试" : state.audience === "parent" ? "在家可以试" : "教育应用";
    const scForEntry = S.scenariosOfEntry[e.id] || [];
    const doiN = e.evidence.filter((x) => x.doi).length;

    const citeUrl = location.origin + location.pathname + "#/entry/" + e.id;
    const citeYear = typeof e.year === "number" ? String(e.year) : fmtYear(e.year);
    const citeFormats = {
      plain: `${e.name}（${S.thinkerName(e.thinker)}，${fmtYear(e.year)}）. 教育与心智知识图谱 v${A.meta.version}.`,
      bibtex: `@misc{${e.id.toLowerCase()},\n  title = {${e.name}},\n  author = {${S.thinkerName(e.thinker)}},\n  year = {${citeYear}},\n  howpublished = {教育与心智知识图谱 v${A.meta.version}},\n  url = {${citeUrl}}\n}`,
      ris: `TY  - CHAP\nTI  - ${e.name}\nAU  - ${S.thinkerName(e.thinker)}\nPY  - ${citeYear}\nUR  - ${citeUrl}\nER  -`,
    };

    const aside = `
      <div class="aside-block">
        <h4>条目信息</h4>
        <div class="aside-row"><span>编号</span><b>${esc(e.id)}</b></div>
        <div class="aside-row"><span>类型</span><b>${esc(A.kinds[e.kind] ? A.kinds[e.kind].name : e.kind)}</b></div>
        <div class="aside-row"><span>年代</span><b>${fmtYear(e.year)}</b></div>
        <div class="aside-row"><span>关联</span><b>${rel.length}</b></div>
        <div class="aside-row"><span>术语卡</span><b>${e.terms.length}</b></div>
        <div class="aside-row"><span>共识 / 分歧</span><b>${relByType.agreement.length} / ${relByType.disagreement.length}</b></div>
      </div>
      <div class="aside-block">
        <h4>关联网络</h4>
        ${relBlock("agreement")}${relBlock("disagreement")}${relBlock("derivative")}
        ${rel.length ? "" : '<div class="tc-count">暂无关联</div>'}
      </div>
      <div class="aside-block">
        <h4>继续</h4>
        <a class="rel-item" href="#/compare?a=${e.id}&b=">⇄ 与其他条目对比</a>
        <a class="rel-item" href="#/path?b=${e.id}">⇢ 查找到此条目的路径</a>
        <a class="rel-item" href="#/network?focus=${e.id}">◎ 在网络中定位</a>
      </div>`;

    return `
    <div class="detail-layout rise">
      <article class="detail-main">
        <header class="detail-head">
          <div class="detail-badges">
            <span class="badge id">${esc(e.id)}</span>
            <span class="badge">${esc(dom.name)}</span>
            <span class="badge">${esc(br.name)}</span>
            <span class="badge">${esc(A.kinds[e.kind] ? A.kinds[e.kind].name : e.kind)}</span>
            ${relByType.agreement.length ? `<span class="badge agree">共识 ${relByType.agreement.length}</span>` : ""}
            ${relByType.disagreement.length ? `<span class="badge disagree">分歧 ${relByType.disagreement.length}</span>` : ""}
            ${relByType.derivative.length ? `<span class="badge derive">衍生 ${relByType.derivative.length}</span>` : ""}
            ${doiN ? `<span class="badge derive">来源可直达 ${doiN}</span>` : ""}
          </div>
          <h1 class="detail-title">${esc(e.name)}</h1>
          <div class="detail-en">${esc(e.en)}</div>
          <div class="detail-kv">
            <span><b>人物</b><a href="#/thinker/${esc(e.thinker)}">${esc(S.thinkerName(e.thinker))}</a></span>
            <span><b>年代</b>${fmtYear(e.year)}</span>
            <span><b>领域</b>${esc(dom.name)}</span>
            <span><b>分支</b>${esc(br.name)}</span>
          </div>
        </header>

        <div class="definition">${esc(e.definition)}</div>

        ${rel.length ? `<div class="rel-strip">
          <span class="rel-strip-label">关联</span>
          ${rel.slice(0, 6).map((n) => {
            const o = S.byId[n.id];
            return `<a class="rel-pill" href="#/entry/${o.id}"><span class="rt ${n.link.type}">${linkSymbol[n.link.type]}</span>${esc(o.name)}</a>`;
          }).join("")}
          ${rel.length > 6 ? `<a class="rel-pill" href="#/network?focus=${e.id}">+${rel.length - 6} 条 · 在网络中查看</a>` : ""}
        </div>` : ""}

        ${e.claims.length ? `<section class="dsection"><h2><span class="dot"></span>核心论断<span class="hcount">${e.claims.length}</span></h2>
          <ol class="nums">${e.claims.map((c) => `<li>${esc(c)}</li>`).join("")}</ol></section>` : ""}

        ${e.agreements.length ? `<section class="dsection agree"><h2><span class="dot"></span>学界共识 · Agreement<span class="hcount">${e.agreements.length}</span></h2>
          <ul class="bullets">${e.agreements.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></section>` : ""}

        ${e.disagreements.length ? `<section class="dsection disagree"><h2><span class="dot"></span>学术分歧 · Disagreement<span class="hcount">${e.disagreements.length}</span></h2>
          ${disagreements}</section>` : ""}

        ${e.evidence.length ? `<section class="dsection"><h2><span class="dot"></span>实证与来源<span class="hcount">${e.evidence.length}</span></h2>
          <p class="ev-legend">${evLegend}</p>
          <div class="evidence">${evidence}</div></section>` : ""}

        ${e.applications.length ? `<section class="dsection"><h2><span class="dot"></span>${esc(appLabel)}<span class="hcount">${e.applications.length}</span></h2>
          <ul class="bullets">${e.applications.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></section>` : ""}

        ${scForEntry.length ? `<section class="dsection"><h2><span class="dot"></span>相关情境<span class="hcount">${scForEntry.length}</span></h2>
          <div class="sc-links">${scForEntry.map((s) => `<a class="rel-pill" href="#/scenarios?open=${s.id}">${esc(s.title)}</a>`).join("")}</div>
          <p class="graph-hint">情境页给出可直接执行的做法与话术。</p></section>` : ""}

        ${e.terms.length ? `<section class="dsection"><h2><span class="dot"></span>术语卡<span class="hcount">${e.terms.length}</span></h2>
          <div class="term-grid">${terms}</div></section>` : ""}

        <section class="dsection">
          <h2><span class="dot"></span>引用本条</h2>
          <div class="cite-box">
            ${state.audience === "researcher" ? `<div class="cite-formats">${[["plain", "中文"], ["bibtex", "BibTeX"], ["ris", "RIS"]].map(([v, l]) => `<button class="chip ${state.citeFmt === v ? "on" : ""}" data-cite-fmt="${v}">${l}</button>`).join("")}</div>` : ""}
            <div class="cite-body">
              <code id="cite-text" style="white-space:pre-wrap">${esc(citeFormats[state.citeFmt] || citeFormats.plain)}</code>
              <button class="btn ghost sm" id="copy-cite" type="button">复制</button>
            </div>
          </div>
        </section>
      </article>
      <aside class="detail-aside">${aside}</aside>
    </div>
    ${footHTML()}`;
  }

  /* ---------------- 时间轴 ---------------- */
  const ERAS = [
    { id: "", name: "全部" },
    { id: "pre1900", name: "1900 前", min: -9999, max: 1900 },
    { id: "1900-1950", name: "1900–1950", min: 1900, max: 1950 },
    { id: "1950-1980", name: "1950–1980", min: 1950, max: 1980 },
    { id: "1980-2000", name: "1980–2000", min: 1980, max: 2000 },
    { id: "post2000", name: "2000 后", min: 2000, max: 9999 },
  ];

  function viewTimeline() {
    const era = ERAS.find((x) => x.id === state.tlEra);
    const pool = S.entries
      .filter((e) => !state.tlDomain || e.domain === state.tlDomain)
      .filter((e) => !era || era.id === "" || (e.year >= era.min && e.year < era.max))
      .slice().sort((a, b) => a.year - b.year);

    const legend = S.domains.map((d) => `<button class="tl-legend-item ${state.tlDomain && state.tlDomain !== d.id ? "off" : ""}" data-tl-domain="${d.id}" style="--dc:${d.color}">
      <span class="tl-swatch"></span>${esc(d.short)}</button>`).join("");

    const groups = BUCKETS.map((b) => {
      const items = pool.filter((e) => yearBucket(e.year) === b.key);
      if (!items.length) return "";
      const nodes = items.map((e) => `<div class="tl-node" style="--dc:${domainColor(e.domain)}">
        <div class="tl-year">${fmtYear(e.year)}</div>
        <div class="tl-name" data-go="#/entry/${e.id}">${esc(e.name)}</div>
        <div class="tl-sub">${esc(S.thinkerName(e.thinker))} · ${esc(branchOf(e.branch).name)}</div>
      </div>`).join("");
      return `<div class="tl-period">
        <div class="tl-period-head">
          <span class="tl-period-name">${b.name}</span>
          <span class="tl-period-range">${b.range} · ${items.length} 条</span>
        </div>
        <div class="tl-axis-wrap"><div class="tl-axis"></div>${nodes}</div>
      </div>`;
    }).join("");

    return `
    <div class="page-head">
      <span class="eyebrow">Timeline · 时间序列</span>
      <h1 class="page-title">观点时间轴</h1>
      <p class="page-lead">按提出年代排序，分经典奠基、现代成型、当代拓展三期。颜色编码领域，点击任意条目查看详情。</p>
      <div class="tl-legend">
        <button class="tl-legend-item ${!state.tlDomain ? "on" : ""}" data-tl-domain="" style="--dc:var(--ink-4)"><span class="tl-swatch"></span>全部</button>
        ${legend}
      </div>
      <div class="graph-bar" style="margin-top:0.7rem">
        ${ERAS.map((e) => `<button class="chip ${state.tlEra === e.id ? "on" : ""}" data-tl-era="${e.id}">${esc(e.name)}</button>`).join("")}
        <span class="filter-meta">${pool.length} 条</span>
      </div>
    </div>
    <div class="tl-wrap">${groups || '<div class="empty">该筛选下暂无条目</div>'}</div>
    ${footHTML()}`;
  }

  /* ---------------- 人物 ---------------- */
  function viewThinkers() {
    const list = S.thinkers;
    const cards = list.map((t) => {
      const doms = Array.from(new Set(t.entries.map((e) => e.domain)));
      return `<a class="thinker-card" href="#/thinker/${t.id}">
        <div class="tc-top"><span class="tc-name">${esc(t.name)}</span><span class="tc-years">${rangeYear(t)}</span></div>
        <span class="tc-en">${esc(t.en)}</span>
        <div class="tc-meta">
          <span class="tc-count">${t.entries.length} 条观点</span>
          ${t.country ? `<span class="tc-count">· ${esc(t.country)}</span>` : ""}
          ${doms.map((d) => `<span class="tl-swatch" style="--dc:${domainColor(d)};width:7px;height:7px"></span>`).join("")}
        </div>
      </a>`;
    }).join("");

    return `
    <div class="page-head">
      <span class="eyebrow">Thinkers · 人物索引</span>
      <h1 class="page-title">学者与观点</h1>
      <p class="page-lead">${S.stats.thinkers} 位学者，按出生年排序。每位学者的观点条目、所属领域与关联密度均可下钻。</p>
    </div>
    <div class="thinker-grid stagger">${cards}</div>
    ${footHTML()}`;
  }

  function viewThinker(id) {
    const t = S.thinkerMap[id];
    if (!t) return notFound("未找到该学者");

    const entries = t.entries.slice().sort((a, b) => a.year - b.year);
    const related = {};
    entries.forEach((e) => {
      (S.adj[e.id] || []).forEach((n) => { related[n.id] = (related[n.id] || 0) + 1; });
    });
    const relatedList = Object.keys(related)
      .filter((k) => !entries.some((e) => e.id === k))
      .sort((a, b) => related[b] - related[a])
      .slice(0, 8);

    return `
    <div class="crumb" style="margin-bottom:1rem">
      <a href="#/thinkers">人物</a><span class="sep">/</span><span class="cur">${esc(t.name)}</span>
    </div>
    <div class="detail-layout rise">
      <div class="detail-main">
        <header class="detail-head">
          <h1 class="detail-title">${esc(t.name)}</h1>
          <div class="detail-en">${esc(t.en)}</div>
          <div class="detail-kv">
            <span><b>生卒</b>${rangeYear(t)}</span>
            <span><b>国别</b>${esc(t.country || "—")}</span>
            <span><b>观点</b>${entries.length} 条</span>
            <span><b>活跃</b>${Math.min.apply(null, entries.map((e) => e.year))} — ${Math.max.apply(null, entries.map((e) => e.year))}</span>
          </div>
        </header>
        <div class="entry-list" style="margin-top:1.2rem">
          ${entries.map(rowHTML).join("")}
        </div>
      </div>
      <aside class="detail-aside">
        <div class="aside-block">
          <h4>常与之同现</h4>
          <div class="rel-list">
            ${relatedList.map((rid) => `<a class="rel-item" href="#/entry/${rid}"><span class="rel-type agreement">·</span><span>${esc(S.byId[rid].name)}</span></a>`).join("") || '<div class="tc-count">—</div>'}
          </div>
        </div>
      </aside>
    </div>
    ${footHTML()}`;
  }

  /* ---------------- 关联网络 ---------------- */
  function viewNetwork(query) {
    const focus = query.focus || state.netFocus || "";
    const domains = S.domains.map((d) => `<span class="gl-item"><span class="gl-dot" style="background:${d.color}"></span>${esc(d.short)}</span>`).join("");

    return `
    <div class="page-head">
      <span class="eyebrow">Network · 关联网络</span>
      <h1 class="page-title">跨领域关联图谱</h1>
      <p class="page-lead">节点为知识点，颜色编码领域；连线为共识、分歧与衍生。拖拽节点重排，滚轮缩放，悬停高亮邻接，点击进入条目。</p>
      <div class="graph-legend">
        <span class="gl-item"><span class="gl-line" style="background:var(--agree)"></span>共识</span>
        <span class="gl-item"><span class="gl-line" style="background:var(--disagree)"></span>分歧</span>
        <span class="gl-item"><span class="gl-line" style="background:var(--derive);height:2px"></span>衍生（虚线）</span>
      </div>
      <div class="graph-legend" style="margin-top:0.4rem">${domains}</div>
    </div>
    <div class="graph-bar">
      <button class="chip on" data-net-type="agreement">共识 <span class="n">${S.stats.byType.agreement}</span></button>
      <button class="chip on" data-net-type="disagreement">分歧 <span class="n">${S.stats.byType.disagreement}</span></button>
      <button class="chip on" data-net-type="derivative">衍生 <span class="n">${S.stats.byType.derivative}</span></button>
      <button class="chip ${state.netHubs ? "on" : ""}" id="net-hubs">仅枢纽（≥4 关联）</button>
      <button class="chip" id="net-reset">重置视图</button>
      <span class="filter-meta" id="net-count"></span>
    </div>
    <div class="graph-wrap">
      <svg id="graph" role="img" aria-label="知识点关联网络图"></svg>
      <div class="graph-tooltip" id="graph-tooltip"></div>
    </div>
    <p class="graph-hint">提示：节点标签在低缩放时自动隐藏以避免重叠；悬停节点可查看其全部邻接关系。</p>
    ${footHTML()}`;
  }

  function drawGraph(focusId) {
    const svgEl = document.getElementById("graph");
    if (!svgEl || typeof d3 === "undefined") {
      if (svgEl) svgEl.parentNode.insertAdjacentHTML("beforeend", '<div class="empty">图表库未加载</div>');
      return;
    }
    const wrap = svgEl.parentNode;
    const tooltip = document.getElementById("graph-tooltip");
    const width = wrap.clientWidth || 900;
    const height = 620;

    d3.select(svgEl).selectAll("*").remove();
    const svg = d3.select(svgEl).attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`);

    const root = svg.append("g");
    const zoom = d3.zoom().scaleExtent([0.25, 3.2]).on("zoom", (ev) => root.attr("transform", ev.transform));
    svg.call(zoom);

    const domIndex = {};
    S.domains.forEach((d, i) => { domIndex[d.id] = i; });
    const R = Math.min(width, height) * 0.31;
    const CX = width / 2, CY = height / 2;

    const nodePool = state.netHubs ? S.entries.filter((e) => S.degree(e.id) >= 4) : S.entries;
    const nodeIds = new Set(nodePool.map((e) => e.id));

    const nodes = nodePool.map((e) => {
      const i = domIndex[e.domain] || 0;
      const ang = (-Math.PI / 2) + (i * 2 * Math.PI) / S.domains.length;
      return {
        id: e.id, name: e.name, domain: e.domain, degree: S.degree(e.id),
        r: 5 + Math.min(8, S.degree(e.id) * 0.45),
        cx: CX + Math.cos(ang) * R,
        cy: CY + Math.sin(ang) * R,
      };
    });
    const links = S.links
      .filter((l) => nodeIds.has(l.a) && nodeIds.has(l.b))
      .map((l) => ({ source: l.a, target: l.b, type: l.type, point: l.point, confidence: l.confidence }));

    const sim = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id)
        .distance((l) => {
          const same = (l.source.domain || l.source) === (l.target.domain || l.target);
          return same ? 58 : 190;
        })
        .strength((l) => {
          const same = (l.source.domain || l.source) === (l.target.domain || l.target);
          return same ? 0.42 : 0.08;
        }))
      .force("charge", d3.forceManyBody().strength(-58).distanceMax(220))
      .force("collide", d3.forceCollide((d) => d.r + 3).iterations(2))
      .force("clusterX", d3.forceX((d) => d.cx).strength(0.20))
      .force("clusterY", d3.forceY((d) => d.cy).strength(0.26));

    const defs = svg.append("defs");
    Object.keys(A.linkTypes).forEach((type) => {
      defs.append("marker").attr("id", "arw-" + type)
        .attr("viewBox", "0 -5 10 10").attr("refX", 16).attr("refY", 0)
        .attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto")
        .append("path").attr("d", "M0,-5L10,0L0,5")
        .attr("fill", A.linkTypes[type].color);
    });

    const link = root.append("g").selectAll("line").data(links).enter().append("line")
      .attr("stroke", (d) => A.linkTypes[d.type].color)
      .attr("stroke-width", (d) => (d.type === "disagreement" ? 1.6 : 1.3))
      .attr("stroke-opacity", 0.32)
      .attr("stroke-dasharray", (d) => (d.type === "derivative" ? "4 4" : null))
      .attr("marker-end", (d) => (d.type === "derivative" ? "url(#arw-derivative)" : null));

    const node = root.append("g").selectAll("g").data(nodes).enter().append("g")
      .attr("class", "node").style("cursor", "pointer")
      .call(d3.drag()
        .on("start", (ev, d) => { if (!ev.active) sim.alphaTarget(0.25).restart(); d.fx = d.x; d.fy = d.y; })
        .on("drag", (ev, d) => { d.fx = ev.x; d.fy = ev.y; })
        .on("end", (ev, d) => { if (!ev.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }))
      .on("click", (ev, d) => { go("#/entry/" + d.id); });

    node.append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => domainColor(d.domain))
      .attr("stroke", "var(--paper-2)")
      .attr("stroke-width", 2);

    node.append("text")
      .text((d) => d.name)
      .attr("x", (d) => d.r + 4).attr("y", 3.5)
      .attr("font-size", "9.5px")
      .attr("font-family", "var(--sans)")
      .attr("fill", "var(--ink-2)")
      .attr("pointer-events", "none")
      .attr("opacity", 0);

    /* 领域簇水印：置于最底层，标示五个聚类 */
    const clusterLabels = S.domains.map((d, i) => {
      const ang = (-Math.PI / 2) + (i * 2 * Math.PI) / S.domains.length;
      const rr = R * 1.22;
      return {
        name: d.name, color: d.color,
        x: Math.max(64, Math.min(width - 64, CX + Math.cos(ang) * rr)),
        y: Math.max(18, Math.min(height - 10, CY + Math.sin(ang) * rr)),
      };
    });
    root.insert("g", ":first-child").selectAll("text").data(clusterLabels).enter().append("text")
      .attr("x", (d) => d.x).attr("y", (d) => d.y)
      .attr("text-anchor", "middle")
      .attr("font-family", "var(--mono)")
      .attr("font-size", "10.5px")
      .attr("letter-spacing", "0.18em")
      .attr("fill", (d) => d.color)
      .attr("opacity", 0.42)
      .attr("pointer-events", "none")
      .text((d) => d.name);

    /* 标签防重叠：只标注枢纽节点，按度数优先贪心放置 */
    const placed = [];
    function labelBox(d) {
      const fs = 9.5;
      const w = d.name.length * fs * 0.96;
      const h = fs + 3;
      const left = d.x > width - w - 40;
      const x = left ? -d.r - 5 : d.r + 5;
      return {
        x: left ? d.x - w : d.x + d.r + 5,
        y: d.y - h / 2,
        w, h, left, x,
      };
    }
    function declutter() {
      placed.length = 0;
      const sorted = nodes.slice().sort((a, b) => b.degree - a.degree).slice(0, 18);
      const visible = new Set();
      sorted.forEach((d) => {
        const b = labelBox(d);
        const hit = placed.some((p) => !(b.x + b.w < p.x || p.x + p.w < b.x || b.y + b.h < p.y || p.y + p.h < b.y));
        if (!hit) { placed.push(b); visible.add(d.id); }
      });
      node.select("text")
        .attr("opacity", (d) => (visible.has(d.id) ? 0.95 : 0))
        .attr("text-anchor", (d) => (labelBox(d).left ? "end" : "start"))
        .attr("x", (d) => labelBox(d).x - d.x);
    }

    function showTip(html, ev) {
      const r = wrap.getBoundingClientRect();
      tooltip.innerHTML = html;
      tooltip.style.opacity = 1;
      tooltip.style.left = Math.min(ev.clientX - r.left + 14, r.width - 340) + "px";
      tooltip.style.top = ev.clientY - r.top + 14 + "px";
    }

    node.on("mouseover", function (ev, d) {
      const nb = new Set([d.id]);
      link.attr("stroke-opacity", (l) => {
        const s = l.source.id || l.source, t = l.target.id || l.target;
        if (s === d.id || t === d.id) { nb.add(s); nb.add(t); return 0.95; }
        return 0.05;
      }).attr("stroke-width", (l) => {
        const s = l.source.id || l.source, t = l.target.id || l.target;
        return (s === d.id || t === d.id) ? 2.4 : 1;
      });
      node.style("opacity", (n) => (nb.has(n.id) ? 1 : 0.12));
      d3.select(this).select("text").attr("opacity", 1);
      const e = S.byId[d.id];
      const rel = S.adj[d.id] || [];
      const ag = rel.filter((n) => n.link.type === "agreement").length;
      const di = rel.filter((n) => n.link.type === "disagreement").length;
      const de = rel.filter((n) => n.link.type === "derivative").length;
      showTip(`<b>${esc(e.name)}</b><br/><span style="opacity:.72">${esc(branchOf(e.branch).name)} · ${fmtYear(e.year)}</span><br/>共识 ${ag} · 分歧 ${di} · 衍生 ${de}`, ev);
    }).on("mousemove", (ev, d) => {
      const e = S.byId[d.id];
      const rel = S.adj[d.id] || [];
      const ag = rel.filter((n) => n.link.type === "agreement").length;
      const di = rel.filter((n) => n.link.type === "disagreement").length;
      const de = rel.filter((n) => n.link.type === "derivative").length;
      showTip(`<b>${esc(e.name)}</b><br/><span style="opacity:.72">${esc(branchOf(e.branch).name)} · ${fmtYear(e.year)}</span><br/>共识 ${ag} · 分歧 ${di} · 衍生 ${de}`, ev);
    }).on("mouseout", function () {
      link.attr("stroke-opacity", 0.32).attr("stroke-width", (d) => (d.type === "disagreement" ? 1.6 : 1.3));
      node.style("opacity", 1);
      declutter();
      tooltip.style.opacity = 0;
    });

    link.on("mouseover", function (ev, d) {
      d3.select(this).attr("stroke-opacity", 1).attr("stroke-width", 2.6);
      const a = S.byId[d.source.id || d.source], b = S.byId[d.target.id || d.target];
      showTip(`<b>${esc(a.name)}</b> ${linkSymbol[d.type]} <b>${esc(b.name)}</b><br/><span style="opacity:.78">${esc(d.point)}</span>`, ev);
    }).on("mousemove", (ev, d) => {
      const a = S.byId[d.source.id || d.source], b = S.byId[d.target.id || d.target];
      showTip(`<b>${esc(a.name)}</b> ${linkSymbol[d.type]} <b>${esc(b.name)}</b><br/><span style="opacity:.78">${esc(d.point)}</span>`, ev);
    }).on("mouseout", function () {
      d3.select(this).attr("stroke-opacity", 0.32).attr("stroke-width", (d) => (d.type === "disagreement" ? 1.6 : 1.3));
      tooltip.style.opacity = 0;
    });

    sim.on("tick", () => {
      nodes.forEach((d) => {
        const r = d.r + 8;
        if (d.x < r) d.x = r;
        if (d.x > width - r) d.x = width - r;
        if (d.y < r) d.y = r;
        if (d.y > height - r) d.y = height - r;
      });
      link.attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    sim.on("end", declutter);
    setTimeout(declutter, 2200);

    /* 类型筛选 */
    const counter = document.getElementById("net-count");
    function applyFilter() {
      const active = state.netType;
      link.style("display", (d) => (active[d.type] ? null : "none"));
      let shown = links.filter((d) => active[d.type]).length;
      if (counter) counter.textContent = nodes.length + " 节点 · " + shown + " 连线";
    }
    document.querySelectorAll("[data-net-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const t = btn.dataset.netType;
        state.netType[t] = !state.netType[t];
        btn.classList.toggle("on", state.netType[t]);
        btn.setAttribute("aria-pressed", state.netType[t] ? "true" : "false");
        applyFilter();
      });
    });
    applyFilter();

    const reset = document.getElementById("net-reset");
    if (reset) reset.addEventListener("click", () => {
      svg.transition().duration(450).call(zoom.transform, d3.zoomIdentity);
    });

    if (focusId) {
      const target = nodes.find((n) => n.id === focusId);
      if (target) {
        setTimeout(() => {
          const scale = 1.8;
          svg.transition().duration(650).call(
            zoom.transform,
            d3.zoomIdentity.translate(width / 2 - target.x * scale, height / 2 - target.y * scale).scale(scale)
          );
        }, 900);
      }
    }
  }

  /* ---------------- 对比 ---------------- */
  function optionsHTML(selected) {
    const groups = S.domains.map((d) => {
      const opts = S.entries.filter((e) => e.domain === d.id)
        .map((e) => `<option value="${e.id}" ${selected === e.id ? "selected" : ""}>${esc(e.name)}（${e.id}）</option>`).join("");
      return `<optgroup label="${esc(d.name)}">${opts}</optgroup>`;
    }).join("");
    return `<option value="">选择条目…</option>${groups}`;
  }

  function viewCompare(query) {
    const a = query.a || state.cmpA;
    const b = query.b || state.cmpB;
    state.cmpA = a; state.cmpB = b;

    let body = `<div class="empty"><div class="em-t">选择两个条目开始对比</div>系统会自动列出它们的直接关联、共同邻居与各自立场。</div>`;
    if (a && b && a !== b) {
      const c = S.compare(a, b);
      if (c) {
        const direct = c.direct.length
          ? c.direct.map((l) => `<div class="cmp-shared-item"><div class="who"><span class="badge ${l.type === "agreement" ? "agree" : l.type === "disagreement" ? "disagree" : "derive"}">${linkName[l.type]}</span> ${esc(l.point)}</div></div>`).join("")
          : `<div class="tc-count">两者之间没有直接关联。下方「共同邻居」与「最短关联链」给出间接关系。</div>`;

        const shared = (type) => {
          const arr = c.shared[type];
          if (!arr.length) return "";
          return `<div class="cmp-shared-item" style="border-left:2px solid var(--${type === "agreement" ? "agree" : type === "disagreement" ? "disagree" : "derive"})">
            <div class="who">${linkName[type]} · 共同指向 ${arr.length} 个条目</div>
            <div class="pt">${arr.map((x) => `<a href="#/entry/${x.other}" style="color:var(--accent)">${esc(S.byId[x.other].name)}</a>`).join("、")}</div>
          </div>`;
        };

        const col = (e) => `<div class="cmp-col">
          <h3>${esc(e.name)}</h3>
          <div class="cmp-en">${esc(e.en)}</div>
          <div class="cmp-def">${esc(e.definition)}</div>
          <div class="cmp-meta">${esc(S.thinkerName(e.thinker))} · ${fmtYear(e.year)} · ${esc(branchOf(e.branch).name)} · ${S.degree(e.id)} 关联</div>
          <div style="margin-top:0.8rem"><a class="btn ghost sm" href="#/entry/${e.id}">打开条目 →</a></div>
        </div>`;

        const bridge = S.shortestPath(a, b, 6);
        const bridgeEdges = bridge ? S.pathLinks(bridge) : [];
        const bridgeHtml = bridge
          ? `<div class="bridge-chain">${bridge.map((id, i) => {
              const o = S.byId[id];
              const e2 = i > 0 ? bridgeEdges[i - 1] : null;
              return `${e2 ? `<span class="bridge-edge"><i>${linkSymbol[e2.type]}</i>${linkName[e2.type]}</span>` : ""}<a class="rel-pill" href="#/entry/${o.id}">${esc(o.name)}</a>`;
            }).join("")}</div>`
          : `<p class="page-lead" style="margin-top:0">这两个条目在六跳内不连通，说明它们在当前数据中属于不同的知识脉络。</p>`;

        body = `
        <div class="compare-grid">${col(c.a)}${col(c.b)}</div>
        <section class="cmp-section">
          <div class="sec-head"><span class="sec-k">Direct · 直接关联</span></div>
          ${direct}
        </section>
        <section class="cmp-section">
          <div class="sec-head"><span class="sec-k">Shared · 共同邻居</span></div>
          ${shared("agreement") || shared("disagreement") || shared("derivative") || '<div class="tc-count">无共同邻居</div>'}
        </section>
        <section class="cmp-section">
          <div class="sec-head"><span class="sec-k">Bridge · 最短关联链</span><a class="sec-more" href="#/path?a=${a}&b=${b}">逐跳展开 →</a></div>
          ${bridgeHtml}
        </section>`;
      }
    }

    return `
    <div class="page-head">
      <span class="eyebrow">Compare · 理论对比</span>
      <h1 class="page-title">并置两个理论</h1>
      <p class="page-lead">选择任意两个知识点，自动汇总它们的直接关联、共同邻居与各自的核心主张——这是列表式网站做不到的。</p>
    </div>
    <form class="compare-form" id="compare-form">
      <div class="field"><label for="cmp-a">条目 A</label><select id="cmp-a">${optionsHTML(a)}</select></div>
      <span class="vs">vs</span>
      <div class="field"><label for="cmp-b">条目 B</label><select id="cmp-b">${optionsHTML(b)}</select></div>
      <button class="btn primary" type="submit">对比</button>
    </form>
    ${body}
    ${footHTML()}`;
  }

  /* ---------------- 路径 ---------------- */
  function viewPath(query) {
    const a = query.a || state.pathA;
    const b = query.b || state.pathB;
    state.pathA = a; state.pathB = b;

    let body = `<div class="empty"><div class="em-t">选择起点与终点</div>系统用广度优先搜索找出最多五跳的最短关联链。</div>`;

    if (a && b && a !== b) {
      const path = S.shortestPath(a, b, 6);
      if (!path) {
        body = `<div class="empty"><div class="em-t">六跳内未找到路径</div>这两个条目在现有数据中不连通。</div>`;
      } else {
        const edges = S.pathLinks(path);
        const steps = path.map((id, i) => {
          const e = S.byId[id];
          const edge = edges[i];
          return `<div class="path-step">
            <span class="path-index">${i + 1}</span>
            <div class="path-body">
              <a class="path-name" href="#/entry/${e.id}">${esc(e.name)}</a>
              <div class="path-en">${esc(e.en)}</div>
              ${edge ? `<div class="path-edge" style="--ec:${A.linkTypes[edge.type].color}">
                <span class="etype">${linkSymbol[edge.type]} ${linkName[edge.type]}${edge.since ? " · " + fmtYear(edge.since) : ""}</span>
                ${esc(edge.point)}
              </div>` : ""}
            </div>
          </div>`;
        }).join("");
        body = `<div class="path-chain">${steps}</div>
        <p class="graph-hint">共 ${path.length - 1} 跳 · 路径为无权最短路，可能不唯一。</p>`;
      }
    }

    return `
    <div class="page-head">
      <span class="eyebrow">Path · 关联路径</span>
      <h1 class="page-title">两个理论如何相连</h1>
      <p class="page-lead">在图谱上做广度优先搜索，找出两条目之间的最短关联链，并逐跳给出关系类型与机制说明。</p>
    </div>
    <form class="compare-form" id="path-form">
      <div class="field"><label for="path-a">起点</label><select id="path-a">${optionsHTML(a)}</select></div>
      <span class="vs">→</span>
      <div class="field"><label for="path-b">终点</label><select id="path-b">${optionsHTML(b)}</select></div>
      <button class="btn primary" type="submit">寻路</button>
    </form>
    ${body}
    ${footHTML()}`;
  }

  /* ---------------- 术语索引 ---------------- */
  function viewGlossary() {
    const q = state.glossaryQ.toLowerCase();
    const list = S.terms.filter((t) => !q || (t.t + " " + t.en + " " + t.d).toLowerCase().indexOf(q) > -1);
    const shown = list.slice(0, 240);
    return `
    <div class="page-head">
      <span class="eyebrow">Glossary · 术语索引</span>
      <h1 class="page-title">术语卡</h1>
      <p class="page-lead">${S.stats.terms} 张术语卡，来自各条目的核心概念。每张卡都链回其所属条目，可作为备课与复习的检索入口。</p>
      <div class="filter-bar" style="position:static;border-bottom:none;padding-bottom:0">
        <input id="glossary-q" type="text" placeholder="筛选术语…" value="${esc(state.glossaryQ)}"
          style="max-width:320px;padding:0.45rem 0.7rem;border:1px solid var(--rule);border-radius:6px;background:var(--paper)" />
        <span class="filter-meta">${list.length} 张</span>
      </div>
    </div>
    <div class="term-grid" style="grid-template-columns:repeat(auto-fill,minmax(250px,1fr))">
      ${shown.map((t) => `<a class="term" href="#/entry/${t.entry}">
        <div><span class="t">${esc(t.t)}</span><span class="te">${esc(t.en)}</span></div>
        <div class="td">${esc(t.d)}</div>
        <div class="tc-count" style="margin-top:0.35rem">${esc(t.entryName)}</div>
      </a>`).join("")}
    </div>
    ${list.length > shown.length ? `<p class="graph-hint">仅显示前 ${shown.length} 张，请用筛选缩小范围。</p>` : ""}
    ${footHTML()}`;
  }

  /* ---------------- 数据自检 ---------------- */
  function viewIntegrity() {
    const r = S.integrity();
    const st = S.stats;

    const domainRows = S.domains.map((d) => {
      const n = r.countByDomain[d.id] || 0;
      const branchSum = d.branches.reduce((x, b) => x + (S.entriesOfBranch[b.id] || []).length, 0);
      const ok = n === branchSum;
      const branchList = d.branches.map((b) => `${esc(b.name)} <b>${(S.entriesOfBranch[b.id] || []).length}</b>`).join(" · ");
      return `<tr>
        <td>${esc(d.name)}</td>
        <td style="text-align:right;font-variant-numeric:tabular-nums">${n}</td>
        <td style="text-align:right;font-variant-numeric:tabular-nums">${branchSum}</td>
        <td><span class="badge ${ok ? "agree" : "disagree"}">${ok ? "一致" : "不一致"}</span></td>
        <td style="font-size:0.78rem;color:var(--ink-4)">${branchList}</td>
      </tr>`;
    }).join("");

    const issues = r.issues.length
      ? r.issues.map((i) => `<div class="issue ${i.level}">
          <span class="lv">${i.level === "error" ? "错误" : "提示"}</span>
          <span>${esc(i.text)}${i.ref ? `　<a href="#/entry/${i.ref}">查看</a>` : ""}</span>
        </div>`).join("")
      : `<div class="issue"><span class="lv" style="background:var(--agree-bg);color:var(--agree)">通过</span><span>未发现结构性问题：所有条目均有详解、术语、有效分支，且计数一致。</span></div>`;

    const orphans = S.entries.filter((e) => S.degree(e.id) === 0);

    const scAges = Array.from(new Set(S.scenarios.map((s) => s.age)));
    const scLinked = new Set();
    S.scenarios.forEach((s) => (s.links || []).forEach((id) => scLinked.add(id)));

    return `
    <div class="page-head">
      <span class="eyebrow">Integrity · 数据自检</span>
      <h1 class="page-title">一致性仪表盘</h1>
      <p class="page-lead">所有统计都在渲染时从同一份数据实时计算，不存在「概览写 110、列表写 100」的口径分裂。本页列出结构性校验结果。</p>
    </div>

    <div class="audit-summary">
      <div class="audit-cell ok"><div class="n">${st.entries}</div><div class="l">条目</div></div>
      <div class="audit-cell ok"><div class="n">${st.detailed}</div><div class="l">含详解</div></div>
      <div class="audit-cell ok"><div class="n">${st.links}</div><div class="l">关联</div></div>
      <div class="audit-cell ${r.errors ? "bad" : "ok"}"><div class="n">${r.errors}</div><div class="l">结构错误</div></div>
    </div>

    <section class="sec" style="margin-top:1.5rem">
      <div class="sec-head"><span class="sec-k">Checks · 校验结果</span><span class="filter-meta">${r.errors} 错误 · ${r.warnings} 提示</span></div>
      <div class="issue-list">${issues}</div>
    </section>

    <section class="sec">
      <div class="sec-head"><span class="sec-k">Counts · 领域与分支计数</span></div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:0.86rem">
          <thead><tr style="border-bottom:1px solid var(--rule-2);text-align:left">
            <th style="padding:0.5rem 0.4rem;font-family:var(--mono);font-size:0.66rem;letter-spacing:0.1em;color:var(--ink-5)">领域</th>
            <th style="padding:0.5rem 0.4rem;text-align:right;font-family:var(--mono);font-size:0.66rem;color:var(--ink-5)">条目</th>
            <th style="padding:0.5rem 0.4rem;text-align:right;font-family:var(--mono);font-size:0.66rem;color:var(--ink-5)">分支合计</th>
            <th style="padding:0.5rem 0.4rem;font-family:var(--mono);font-size:0.66rem;color:var(--ink-5)">状态</th>
            <th style="padding:0.5rem 0.4rem;font-family:var(--mono);font-size:0.66rem;color:var(--ink-5)">分布</th>
          </tr></thead>
          <tbody>${domainRows}</tbody>
        </table>
      </div>
    </section>

    <section class="sec">
      <div class="sec-head"><span class="sec-k">Graph · 图谱健康度</span></div>
      <div class="aside-block">
        <div class="aside-row"><span>平均每节点关联</span><b>${(st.links * 2 / st.entries).toFixed(2)}</b></div>
        <div class="aside-row"><span>孤立节点</span><b>${orphans.length}</b></div>
        <div class="aside-row"><span>证据强度分布</span><b>${Object.keys(st.byConfidence).map((k) => (A.confidences[k] ? A.confidences[k].name : k) + " " + st.byConfidence[k]).join(" · ")}</b></div>
        <div class="aside-row"><span>术语卡</span><b>${st.terms}</b></div>
        <div class="aside-row"><span>年份跨度</span><b>${fmtYear(st.yearRange[0])} — ${st.yearRange[1]}</b></div>
      </div>
    </section>

    <section class="sec">
      <div class="sec-head"><span class="sec-k">Citations · 引用可核验性</span><span class="filter-meta">经 Crossref 逐条比对</span></div>
      <div class="aside-block">
        <div class="aside-row"><span>证据条目总数</span><b>${st.evidenceItems}</b></div>
        <div class="aside-row"><span>DOI 可直达</span><b>${st.doiItems}（${(st.doiItems / st.evidenceItems * 100).toFixed(1)}%）</b></div>
        <div class="aside-row"><span>有明确出处（书名 / 期刊 / 标题）</span><b>${st.evidenceRefs}</b></div>
        <div class="aside-row"><span>仅作者与年份</span><b>${st.evidenceTraces}</b></div>
        <div class="aside-row"><span>综述性表述</span><b>${st.evidenceReviews}</b></div>
        <div class="aside-row"><span>含 DOI 的条目</span><b>${st.entriesWithDoi} / ${st.entries}</b></div>
      </div>
      <p class="graph-hint">DOI 由 Crossref API 按「标题相似度 ≥ 0.8 且年份相差 ≤ 2 年」匹配，匹配不上的位置留空，不做猜测性补全。</p>
    </section>

    <section class="sec">
      <div class="sec-head"><span class="sec-k">Scenarios · 场景与课堂活动</span></div>
      <div class="aside-block">
        <div class="aside-row"><span>情境数</span><b>${st.scenarios}</b></div>
        <div class="aside-row"><span>含 5 分钟课堂活动</span><b>${st.activities}</b></div>
        <div class="aside-row"><span>覆盖年龄档</span><b>${scAges.length} 档（${scAges.map((a) => (AGE_NAME[a] || a)).join(" / ")}）</b></div>
        <div class="aside-row"><span>被引用的条目</span><b>${scLinked.size}</b></div>
        <div class="aside-row"><span>打印页</span><b>${st.scenarios} 条均可单独成页</b></div>
      </div>
    </section>
    ${footHTML()}`;
  }

  /* ---------------- 阅读路径 ---------------- */
  function viewLearningPath(query) {
    const domain = query.domain || state.lpDomain || "";
    state.lpDomain = domain;
    const lp = S.learningPath(domain || null);
    const stageNames = ["奠基：先建立概念与问题", "展开：机制与实证", "分化：争论与应用", "前沿：当代修正"];

    const stageHTML = lp.stages.map((arr, i) => {
      if (!arr.length) return "";
      const picks = arr.slice().sort((a, b) => S.degree(b.id) - S.degree(a.id)).slice(0, 8).sort((a, b) => a.year - b.year);
      return `<section class="lp-stage">
        <div class="lp-stage-head">
          <span class="lp-stage-num">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <div class="lp-stage-name">${esc(stageNames[i])}</div>
            <div class="lp-stage-meta">本阶段 ${arr.length} 条 · 展示 8 个关键节点</div>
          </div>
        </div>
        <ol class="lp-list">
          ${picks.map((e) => `<li>
            <a class="lp-item" href="#/entry/${e.id}">
              <span class="lp-year">${fmtYear(e.year)}</span>
              <span class="lp-name">${esc(e.name)}</span>
              <span class="lp-deg">${S.degree(e.id)} 关联</span>
            </a>
          </li>`).join("")}
        </ol>
      </section>`;
    }).join("");

    return `
    <div class="page-head">
      <span class="eyebrow">Learning Path · 阅读顺序</span>
      <h1 class="page-title">从哪读起</h1>
      <p class="page-lead">按「衍生发展」关系做拓扑排序，把领域内的知识点排成四个阶段。前置概念在前，修正与前沿在后——这是图谱结构给出的阅读建议，不是价值排序。</p>
      <div class="compare-form" style="grid-template-columns:1fr auto;margin-top:1.2rem">
        <div class="field"><label for="lp-domain">领域</label>
          <select id="lp-domain">
            <option value="">全部领域（${S.stats.entries} 条）</option>
            ${S.domains.map((d) => `<option value="${d.id}" ${domain === d.id ? "selected" : ""}>${esc(d.name)}（${countIn((e) => e.domain === d.id)} 条）</option>`).join("")}
          </select>
        </div>
        <button class="btn primary" id="lp-go">生成路径</button>
      </div>
    </div>
    <div class="lp-grid">${stageHTML}</div>
    <p class="graph-hint">${lp.hasCycle ? "提示：衍生关系存在环路，环路内条目已按年代补入后段。" : "衍生关系为有向无环图，顺序有唯一的基础拓扑解。"}</p>
    ${footHTML()}`;
  }

  /* ---------------- 方法与边界 ---------------- */
  function viewMethods() {
    const st = S.stats;
    const conf = Object.keys(A.confidences).map((k) => `<div class="aside-row"><span>${esc(A.confidences[k].name)} · ${esc(A.confidences[k].en)}</span><b>${st.byConfidence[k] || 0}</b></div>`).join("");
    return `
    <div class="page-head">
      <span class="eyebrow">Method · 方法与边界</span>
      <h1 class="page-title">这份图谱是怎么做出来的</h1>
      <p class="page-lead">一份知识产品必须先说明自己的编制规则与限制，否则读者无法判断该在多大程度上信任它。以下内容对全站生效，也接受同一套自检。</p>
    </div>

    <div class="detail-main">
      <section class="dsection">
        <h2><span class="dot"></span>面向谁</h2>
        <ul class="bullets">
          <li><b>老师</b>：按课堂情境进入场景库，每条给出可执行的课堂动作、先别做的事、可直接使用的课堂语言，以及转介建议；其中 ${st.activities} 条另配 5 分钟课堂活动脚本，可单独打印。</li>
          <li><b>家长</b>：按孩子年龄进入，每条给出可能的解释、在家可以试的做法、先别做的事、可以对孩子说的话，以及何时该找专业帮助；可把 2–3 条合并打印成一张 A4，家长会、家访或面谈时一次带走。</li>
          <li><b>研究者与学生</b>：按领域与关联网络进入，可对比、寻路、查看证据分级与引用格式。</li>
        </ul>
        <p style="font-size:.92rem;color:var(--ink-3);line-height:1.8;margin-top:.6rem">场景库共 ${st.scenarios} 条，是对站内条目的<strong>编辑性综合</strong>，不是新的研究结论；每条都回链到机制条目，便于核对依据。它不构成诊断，也不能替代个别化评估。</p>
      </section>

      <section class="dsection">
        <h2><span class="dot"></span>六层结构</h2>
        <ol class="nums">
          <li><b>领域</b>：按研究对象的差异划分五个板块，不按学科建制划分。</li>
          <li><b>分支</b>：每个领域下 6–7 个分支，共 ${st.branches} 个，全部有内容覆盖。</li>
          <li><b>条目</b>：${st.entries} 条，统一含定义、核心论断、学界共识、学术分歧、实证来源、教育应用。</li>
          <li><b>术语卡</b>：${st.terms} 张，从条目中抽出的最小概念单元，可独立检索并回链原条目。</li>
          <li><b>关联</b>：${st.links} 条，分共识、分歧、衍生三类，每条都写明关系发生在哪个机制层面。</li>
          <li><b>场景</b>：${st.scenarios} 条，把机制转成老师与家长可执行的动作与话术，并标注证据强度与转介边界。</li>
        </ol>
      </section>

      <section class="dsection">
        <h2><span class="dot"></span>关联的四条判定标准</h2>
        <ul class="bullets">
          <li><b>机制级而非主题级</b>：不写「两者都研究学习」，而写清共享哪条假设、在哪个环节冲突。</li>
          <li><b>可追溯</b>：每条关联都能落到具体条目与人物，不做跨条目的模糊概括。</li>
          <li><b>分歧必须双方并举</b>：每条分歧都给出两方立场与「争议焦点」，不把一方写成结论。</li>
          <li><b>允许一对多型</b>：同一对条目可以在一个层面共识、在另一个层面分歧，不做强行归一。</li>
        </ul>
      </section>

      <section class="dsection">
        <h2><span class="dot"></span>证据分级</h2>
        <p style="font-size:.95rem;color:var(--ink-2);line-height:1.8;margin-bottom:.8rem">全站关联按证据状态标注四档。分级针对「这条关联」，不针对整条理论。</p>
        <div class="aside-block" style="background:var(--paper-2)">${conf}</div>
        <ul class="bullets" style="margin-top:.8rem">
          ${Object.keys(A.confidences).map((k) => `<li><b>${esc(A.confidences[k].name)}</b>：${esc(A.confidences[k].desc)}</li>`).join("")}
        </ul>
      </section>

      <section class="dsection disagree">
        <h2><span class="dot"></span>已知限制</h2>
        <ul class="bullets">
          <li><b>不是系统综述</b>：条目为综述性整理，用于定位与入门，不能替代原始文献与元分析。</li>
          <li><b>来源可核验但未穷尽</b>：${st.evidenceItems} 条证据中，${st.doiItems} 条给出经 Crossref 核验的 DOI（${(st.doiItems / st.evidenceItems * 100).toFixed(1)}%），覆盖 ${st.entriesWithDoi} 个条目；${st.evidenceRefs} 条标注了可定位的作品名，${st.evidenceTraces} 条只有作者与年份。匹配不上 DOI 的一律留空，不做猜测性补全。</li>
          <li><b>机制到教学需中介</b>：脑科学条目的应用建议均经认知与课堂研究转译，不做神经还原式推论。</li>
          <li><b>覆盖不均衡</b>：以英语学界与中文可及文献为主，非西方传统与本土研究收录有限。</li>
          <li><b>关联存在取舍</b>：${st.links} 条关联是选择的结果，未收录的关系不代表不存在。</li>
        </ul>
      </section>

      <section class="dsection">
        <h2><span class="dot"></span>引用格式</h2>
        <div class="term" style="cursor:text">
          <div class="td">教育与心智知识图谱（v${esc(A.meta.version)}）. 条目「巴甫洛夫经典条件反射」. 检索于 ${new Date().toISOString().slice(0, 10)}.</div>
        </div>
        <p class="graph-hint">条目页底部提供单条引用文本，可直接复制。</p>
      </section>

      <section class="dsection">
        <h2><span class="dot"></span>质量自检</h2>
        <p style="font-size:.95rem;color:var(--ink-2);line-height:1.8">全站统计在渲染时从同一份数据实时计算，不存在多处口径不一致；分支计数、孤立节点、缺失详解、引文覆盖均可在自检页逐项核对。</p>
        <a class="btn ghost sm" href="#/integrity" style="margin-top:.8rem">打开数据自检 →</a>
      </section>
    </div>
    ${footHTML()}`;
  }

  /* ---------------- 404 ---------------- */
  function notFound(msg) {
    return `<div class="empty" style="padding:6rem 0">
      <div class="em-t">${esc(msg || "页面未找到")}</div>
      <p style="margin-bottom:1.2rem">请求的内容不存在或已被移动。</p>
      <a class="btn ghost" href="#/">返回概览</a>
    </div>`;
  }

  /* ---------------- 搜索面板 ---------------- */
  function renderSearchResults() {
    const box = document.getElementById("sr-results");
    if (!box) return;
    if (!state.searchQ.trim()) {
      box.innerHTML = `<div class="sr-group-label">试着这样搜</div>
        ${["写作业拖拉", "上课坐不住", "分离哭闹", "要不要报班", "关键期", "背了就忘"].map((k) =>
          `<div class="sr-item" data-suggest="${esc(k)}"><span class="sr-title">${esc(k)}</span><span class="sr-sub">搜索「${esc(k)}」</span><span class="sr-kind">示例</span></div>`).join("")}`;
      bindSearchItems();
      return;
    }
    const hits = S.search(state.searchQ, { type: state.searchType, limit: 30 });
    if (!hits.length) {
      box.innerHTML = `<div class="empty" style="padding:2rem">没有匹配结果<br/><span style="font-size:.8rem;color:var(--ink-5)">可以换成更口语的描述，例如「孩子不肯写作业」</span></div>`;
      return;
    }
    const groups = { scenario: "情境", entry: "条目", term: "术语", thinker: "人物", link: "关联说明" };
    let html = "";
    ["scenario", "entry", "term", "thinker", "link"].forEach((k) => {
      const g = hits.filter((h) => h.kind === k);
      if (!g.length) return;
      html += `<div class="sr-group-label">${groups[k]} · ${g.length}</div>`;
      html += g.map((h) => `<div class="sr-item" data-href="${h.href}">
        <span class="sr-title">${hl(h.title, state.searchQ)}</span>
        <span class="sr-kind">${groups[h.kind]}</span>
        <span class="sr-sub">${hitSub(h)}</span>
      </div>`).join("");
    });
    box.innerHTML = html;
    bindSearchItems();
  }

  function hitSub(h) {
    if (h.kind === "scenario") return esc(h.sub || "");
    if (h.kind === "term") return esc(h.sub || "") + " · " + esc(h.meta || "");
    if (h.kind === "link") return esc(h.meta || "");
    return esc(h.sub || "") + (h.meta ? " · " + esc(h.meta) : "");
  }

  function hl(text, q) {
    const t = esc(text);
    if (!q) return t;
    try {
      return t.replace(new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>");
    } catch (e) { return t; }
  }

  function bindSearchItems() {
    document.querySelectorAll("[data-href]").forEach((el) => {
      el.addEventListener("click", () => { closeSearch(); go(el.dataset.href); });
    });
    document.querySelectorAll("[data-suggest]").forEach((el) => {
      el.addEventListener("click", () => {
        const inp = document.getElementById("sr-input");
        if (inp) { inp.value = el.dataset.suggest; state.searchQ = el.dataset.suggest; renderSearchResults(); inp.focus(); }
      });
    });
  }

  function openSearch() {
    state.searchOpen = true;
    const ov = document.createElement("div");
    ov.className = "search-overlay";
    ov.id = "search-overlay";
    ov.innerHTML = `
      <div class="search-panel" role="dialog" aria-modal="true" aria-label="全局搜索">
        <div class="search-head">
          <span style="color:var(--ink-5)">⌕</span>
          <input class="search-input" id="sr-input" placeholder="${state.audience === "researcher" ? "输入关键词、作者、年份、DOI 或条目编号…" : "说说遇到的情况，如「孩子不肯写作业」…"}" autocomplete="off" />
          <span class="kbd">Esc</span>
        </div>
        <div class="search-facets">
          ${[["", "全部"], ["scenario", "情境"], ["entry", "条目"], ["term", "术语"], ["thinker", "人物"], ["link", "关联"]].map(([v, l]) =>
            `<button class="chip ${state.searchType === v ? "on" : ""}" data-sr-type="${v}">${l}</button>`).join("")}
        </div>
        <div class="search-results" id="sr-results"></div>
        <div class="search-foot"><span>↑↓ 选择</span><span>Enter 打开</span><span>Esc 关闭</span><span style="margin-left:auto">${S.stats.scenarios} 情境 · ${S.stats.entries} 条目 · ${S.stats.terms} 术语</span></div>
      </div>`;
    document.body.appendChild(ov);
    const input = document.getElementById("sr-input");
    input.value = state.searchQ;
    input.focus();
    renderSearchResults();

    input.addEventListener("input", () => { state.searchQ = input.value; renderSearchResults(); });
    document.querySelectorAll("[data-sr-type]").forEach((b) => {
      b.addEventListener("click", () => {
        state.searchType = b.dataset.srType;
        document.querySelectorAll("[data-sr-type]").forEach((x) => x.classList.toggle("on", x === b));
        renderSearchResults();
        input.focus();
      });
    });
    ov.addEventListener("click", (e) => { if (e.target === ov) closeSearch(); });

    input.addEventListener("keydown", (e) => {
      const items = Array.from(document.querySelectorAll(".sr-item[data-href]"));
      const sel = document.querySelector(".sr-item.sel");
      if (e.key === "Escape") { closeSearch(); return; }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!items.length) return;
        let idx = items.indexOf(sel);
        idx = e.key === "ArrowDown" ? Math.min(items.length - 1, idx + 1) : Math.max(0, idx - 1);
        items.forEach((x) => x.classList.remove("sel"));
        items[idx].classList.add("sel");
        items[idx].scrollIntoView({ block: "nearest" });
      }
      if (e.key === "Enter") {
        const target = document.querySelector(".sr-item.sel") || items[0];
        if (target) { const href = target.dataset.href; closeSearch(); go(href); }
      }
    });
  }

  function closeSearch() {
    state.searchOpen = false;
    const ov = document.getElementById("search-overlay");
    if (ov) ov.remove();
    if (document.getElementById("sr-input")) state.searchQ = "";
  }

  /* ---------------- 渲染 ---------------- */
  function render() {
    const { parts, query } = parseHash();
    const route = parts[0] || "";
    let active = "overview";
    let inner = "";
    let crumb = "";

    if (route === "") { inner = viewOverview(); crumb = '<span class="cur">' + (state.audience === "researcher" ? "研究索引" : state.audience ? "概览" : "开始") + '</span>'; }
    else if (route === "start") { active = "start"; inner = viewTriage(); crumb = '<span class="cur">快速分诊</span>'; }
    else if (route === "scenarios") {
      active = "scenarios";
      if (query.age) state.scAge = query.age;
      inner = viewScenarios(query);
      crumb = '<span class="cur">场景库</span>';
    }
    else if (route === "scenario") {
      active = "scenarios";
      const s = S.scenarioById[parts[1]];
      inner = viewScenarioSheet(parts[1]);
      crumb = `<a href="#/scenarios">场景库</a><span class="sep">/</span><span class="cur">${esc(s ? s.title : "未找到")}</span>`;
    }
    else if (route === "handout") {
      active = "start";
      inner = viewHandout(query);
      crumb = `<a href="#/start">快速分诊</a><span class="sep">/</span><span class="cur">一页纸</span>`;
    }
    else if (route === "entries") {
      active = "entries";
      if (query.domain) state.filter.domain = query.domain;
      if (query.branch) state.filter.branch = query.branch;
      inner = viewEntries();
      crumb = `<a href="#/entries">条目</a>${state.filter.domain ? `<span class="sep">/</span><span class="cur">${esc(domainOf(state.filter.domain).name)}</span>` : ""}`;
    }
    else if (route === "entry") {
      active = "entries";
      const e = S.byId[parts[1]];
      inner = viewEntry(parts[1]);
      crumb = `<a href="#/entries">条目</a>${e ? `<span class="sep">/</span><a href="#/entries?domain=${e.domain}">${esc(domainOf(e.domain).name)}</a>` : ""}<span class="sep">/</span><span class="cur">${esc(e ? e.name : "未找到")}</span>`;
    }
    else if (route === "timeline") { active = "timeline"; inner = viewTimeline(); crumb = '<span class="cur">观点时间轴</span>'; }
    else if (route === "thinkers") { active = "thinkers"; inner = viewThinkers(); crumb = '<span class="cur">人物索引</span>'; }
    else if (route === "thinker") {
      active = "thinkers";
      const t = S.thinkerMap[parts[1]];
      inner = viewThinker(parts[1]);
      crumb = `<a href="#/thinkers">人物</a><span class="sep">/</span><span class="cur">${esc(t ? t.name : "未找到")}</span>`;
    }
    else if (route === "network") { active = "network"; inner = viewNetwork(query); crumb = '<span class="cur">关联网络</span>'; }
    else if (route === "learning-path") { active = "learning-path"; inner = viewLearningPath(query); crumb = '<span class="cur">阅读路径</span>'; }
    else if (route === "methods") { active = "methods"; inner = viewMethods(); crumb = '<span class="cur">方法与边界</span>'; }
    else if (route === "compare") { active = "compare"; inner = viewCompare(query); crumb = '<span class="cur">理论对比</span>'; }
    else if (route === "path") { active = "path"; inner = viewPath(query); crumb = '<span class="cur">关联路径</span>'; }
    else if (route === "glossary") { active = "glossary"; inner = viewGlossary(); crumb = '<span class="cur">术语索引</span>'; }
    else if (route === "integrity") { active = "integrity"; inner = viewIntegrity(); crumb = '<span class="cur">数据自检</span>'; }
    else { inner = notFound(); crumb = '<span class="cur">未找到</span>'; }

    $root.innerHTML = shellHTML(active, inner, crumb);
    document.documentElement.setAttribute("data-theme", state.theme);

    bind();
    if (route === "network") drawGraph(query.focus || "");
  }

  /* ---------------- 事件 ---------------- */
  function bind() {
    /* 主题 */
    const toggle = () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("atlas-theme", state.theme);
      document.documentElement.setAttribute("data-theme", state.theme);
      const ic = document.getElementById("theme-icon");
      const lb = document.getElementById("theme-label");
      if (ic) ic.textContent = state.theme === "dark" ? "☾" : "☀";
      if (lb) lb.textContent = state.theme === "dark" ? "深色" : "浅色";
    };
    ["theme-toggle", "theme-toggle-2"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("click", toggle);
    });

    /* 移动导航 */
    const navBtn = document.getElementById("nav-btn");
    if (navBtn) navBtn.addEventListener("click", () => {
      state.navOpen = true;
      document.querySelector(".app-shell").classList.add("nav-open");
      const scrim = document.createElement("div");
      scrim.className = "nav-scrim"; scrim.id = "nav-scrim";
      scrim.addEventListener("click", () => closeNav());
      document.querySelector(".main").appendChild(scrim);
    });
    const scrim = document.getElementById("nav-scrim");
    if (scrim) scrim.addEventListener("click", closeNav);

    /* 搜索 */
    ["open-search", "open-search-2"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("click", openSearch);
    });

    /* 行点击 */
    document.querySelectorAll("[data-go]").forEach((el) => {
      el.addEventListener("click", () => go(el.dataset.go));
      el.addEventListener("keydown", (e) => { if (e.key === "Enter") go(el.dataset.go); });
    });

    /* 筛选 */
    document.querySelectorAll("[data-filter]").forEach((el) => {
      el.addEventListener("click", () => {
        const k = el.dataset.filter;
        if (k === "clear") {
          state.filter = { domain: "", branch: "", kind: "" };
        } else {
          const v = el.dataset.value;
          state.filter[k] = state.filter[k] === v ? "" : v;
          if (k === "domain") state.filter.branch = "";
        }
        const f = state.filter;
        const qs = [];
        if (f.domain) qs.push("domain=" + f.domain);
        if (f.branch) qs.push("branch=" + f.branch);
        go("#/entries" + (qs.length ? "?" + qs.join("&") : ""));
      });
    });

    /* 快速分诊 */
    document.querySelectorAll("[data-tr]").forEach((el) => {
      el.addEventListener("click", () => {
        const k = el.dataset.tr;
        const v = el.dataset.v;
        if (k === "age") {
          state.triage.age = state.triage.age === v ? "" : v;
          if (!state.triage.age) state.triage.concern = "";
          state.sheetPick = []; state.sheetInit = false;
        } else if (k === "concern") {
          state.triage.concern = state.triage.concern === v ? "" : v;
          state.sheetPick = []; state.sheetInit = false;
        } else if (k === "duration") {
          state.triage.duration = state.triage.duration === v ? "" : v;
        } else if (k === "reset") {
          if (v === "concern") state.triage.concern = "";
          else state.triage = { age: "", concern: "", duration: "" };
          state.sheetPick = []; state.sheetInit = false;
        }
        render();
        if (k === "concern" && state.triage.concern) {
          const el = document.querySelector(".triage-result");
          if (el) el.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      });
    });

    /* 一页纸：选择 2–3 条 */
    document.querySelectorAll("[data-pick]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.pick;
        const i = state.sheetPick.indexOf(id);
        if (i > -1) state.sheetPick.splice(i, 1);
        else if (state.sheetPick.length < 3) state.sheetPick.push(id);
        render();
      });
    });

    /* 身份切换 */
    document.querySelectorAll("[data-aud]").forEach((el) => {
      el.addEventListener("click", () => {
        const v = el.dataset.aud;
        state.audience = state.audience === v ? "" : v;
        state.scAudience = "";
        localStorage.setItem("atlas-audience", state.audience);
        render();
      });
    });

    /* 场景库筛选 */
    document.querySelectorAll("[data-sc-age]").forEach((el) => {
      el.addEventListener("click", () => { state.scAge = el.dataset.scAge; render(); });
    });
    document.querySelectorAll("[data-sc-aud]").forEach((el) => {
      el.addEventListener("click", () => { state.scAudience = el.dataset.scAud; render(); });
    });

    /* 时间轴领域 */
    document.querySelectorAll("[data-tl-domain]").forEach((el) => {
      el.addEventListener("click", () => {
        state.tlDomain = el.dataset.tlDomain;
        render();
      });
    });

    /* 时间轴年代 */
    document.querySelectorAll("[data-tl-era]").forEach((el) => {
      el.addEventListener("click", () => {
        state.tlEra = el.dataset.tlEra;
        render();
      });
    });

    /* 图谱枢纽模式 */
    const hubBtn = document.getElementById("net-hubs");
    if (hubBtn) hubBtn.addEventListener("click", () => {
      state.netHubs = !state.netHubs;
      render();
    });

    /* 对比 / 路径表单 */
    const cf = document.getElementById("compare-form");
    if (cf) cf.addEventListener("submit", (e) => {
      e.preventDefault();
      const a = document.getElementById("cmp-a").value;
      const b = document.getElementById("cmp-b").value;
      go(`#/compare?a=${a}&b=${b}`);
    });
    const pf = document.getElementById("path-form");
    if (pf) pf.addEventListener("submit", (e) => {
      e.preventDefault();
      const a = document.getElementById("path-a").value;
      const b = document.getElementById("path-b").value;
      go(`#/path?a=${a}&b=${b}`);
    });

    /* 术语筛选 */
    const gq = document.getElementById("glossary-q");
    if (gq) {
      let timer;
      gq.addEventListener("input", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          state.glossaryQ = gq.value;
          const pos = gq.selectionStart;
          render();
          const n = document.getElementById("glossary-q");
          if (n) { n.focus(); try { n.setSelectionRange(pos, pos); } catch (err) {} }
        }, 220);
      });
    }
    /* 引用复制 */
    const copyBtn = document.getElementById("copy-cite");
    if (copyBtn) copyBtn.addEventListener("click", function () {
      const el = document.getElementById("cite-text");
      const txt = el ? el.textContent : "";
      const done = () => {
        copyBtn.textContent = "已复制";
        setTimeout(() => { copyBtn.textContent = "复制"; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(done).catch(() => { copyBtn.textContent = "请手动选择"; });
      } else {
        copyBtn.textContent = "请手动选择";
      }
    });

    /* 引用格式切换（研究者） */
    document.querySelectorAll("[data-cite-fmt]").forEach((el) => {
      el.addEventListener("click", () => {
        state.citeFmt = el.dataset.citeFmt;
        render();
      });
    });

    /* 学术检索（研究者工作台） */
    const rinput = document.getElementById("research-input");
    if (rinput) {
      rinput.addEventListener("input", () => { state.researchQ = rinput.value; renderResearchResults(); });
      renderResearchResults();
    }

    /* 数据下载（研究者工作台） */
    document.querySelectorAll("[data-dl]").forEach((el) => {
      el.addEventListener("click", () => downloadData(el.dataset.dl));
    });

    /* 阅读路径生成 */
    const lpGo = document.getElementById("lp-go");
    if (lpGo) lpGo.addEventListener("click", () => {
      const sel = document.getElementById("lp-domain");
      const v = sel ? sel.value : "";
      go("#/learning-path" + (v ? "?domain=" + v : ""));
    });

    /* 情境卡打印 */
    const sheetPrint = document.getElementById("sheet-print");
    if (sheetPrint) sheetPrint.addEventListener("click", () => window.print());
  }

  function closeNav() {
    state.navOpen = false;
    const shell = document.querySelector(".app-shell");
    if (shell) shell.classList.remove("nav-open");
    const scrim = document.getElementById("nav-scrim");
    if (scrim) scrim.remove();
  }

  /* 全局快捷键 */
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (state.searchOpen) closeSearch(); else openSearch();
    }
    if (e.key === "Escape" && state.searchOpen) closeSearch();
  });

  window.addEventListener("hashchange", () => {
    closeNav();
    render();
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  document.addEventListener("DOMContentLoaded", render);
  if (document.readyState !== "loading") render();
})();
