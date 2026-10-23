/* ============================================================
   数据修订层
   1) 补全争议中出现的学者姓名，避免裸 id 直接显示
   2) 补全学者生卒与国别，修正排序与「?」显示
   3) 对「基础概念 / 应用变体」的近似标题做区分，避免检索混淆
   ============================================================ */
window.ATLAS = window.ATLAS || {};

Object.assign(ATLAS.scholars, {
  spencer: ["斯宾塞", "Herbert Spencer"],
  hirsch: ["赫希", "E. D. Hirsch"],
  kohn: ["科恩", "Alfie Kohn"],
  kirschner: ["基尔希纳", "Paul Kirschner"],
  labov: ["拉波夫", "William Labov"],
  becker: ["贝克尔", "Gary Becker"],
  nozick: ["诺齐克", "Robert Nozick"],
  mill: ["密尔", "John Stuart Mill"],
  sen: ["阿马蒂亚·森", "Amartya Sen"],
  oakley: ["奥克利", "Barbara Oakley"],
  koedinger: ["柯丁格", "Ken Koedinger"]
});

Object.assign(ATLAS.thinkerMeta, {
  augustine: [354, 430, "罗马"], aquinas: [1225, 1274, "意大利"],
  vico: [1668, 1744, "意大利"], humboldt: [1767, 1835, "德国"],
  newman: [1801, 1890, "英国"], jaspers: [1883, 1969, "德国"],
  whitehead: [1861, 1947, "英国"], bobbitt: [1876, 1956, "美国"],
  charters: [1875, 1952, "美国"], taba: [1902, 1967, "美国"],
  goodson: [1945, null, "英国"], pinar: [1947, null, "美国"],
  van_manen: [1942, null, "荷兰/加拿大"], parkhurst: [1887, 1973, "美国"],
  washburne: [1889, 1968, "美国"], kilpatrick: [1871, 1965, "美国"],
  engelmann: [1931, 2019, "美国"], adler: [1902, 2001, "美国"],
  giroux: [1943, null, "美国"], bowles_gintis: [1939, null, "美国"],
  collins_r: [1941, null, "美国"], lareau: [1952, null, "美国"],
  friedman: [1912, 2006, "美国"], edmonds: [1935, 1983, "美国"],
  caldwell: [1942, null, "澳大利亚"], hanushek: [1943, null, "美国"],
  spearman: [1863, 1945, "英国"], rasch: [1901, 1980, "丹麦"],
  angoff: [1914, 1997, "美国"], kolen: [1950, null, "美国"],
  spencer: [1820, 1903, "英国"], hirsch: [1928, null, "美国"],
  kohn: [1923, null, "美国"], kirschner: [1951, null, "荷兰"],
  labov: [1927, null, "美国"], becker: [1930, 2014, "美国"],
  nozick: [1938, 2002, "美国"], mill: [1806, 1873, "英国"],
  sen: [1933, null, "印度"], oakley: [1955, null, "美国/加拿大"],
  koedinger: [1950, null, "美国"], cast: [1984, null, "美国"],
  oecd: [1961, null, "国际组织"], unesco: [1945, null, "国际组织"],
  casel: [1994, null, "美国"], black_wiliam: [1944, null, "英国"],
  greenough: [1930, null, "美国"], hentsch: [1961, null, "日本/美国"],
  schlaug: [1955, null, "德国/美国"], tononi: [1960, null, "意大利/美国"],
  doyon: [1966, null, "加拿大"], rizzolatti: [1937, null, "意大利"],
  raichle: [1937, null, "美国"], schacter: [1952, null, "美国"],
  roenneberg: [1963, null, "德国"], mednick: [1965, null, "美国"],
  anderson_m: [1967, null, "美国"], loftus: [1944, null, "美国"],
  broadbent: [1926, 1993, "英国"], lavie: [1963, null, "英国"],
  sonuga_barke: [1959, null, "英国"], christoff: [1970, null, "加拿大"],
  barrett: [1965, null, "美国"], yerkes: [1876, 1956, "美国"],
  galvan: [1974, null, "美国"], singer: [1960, null, "德国"],
  kuhl: [1947, null, "美国"], friederici: [1956, null, "德国"],
  patel: [1962, null, "美国"], ansari: [1970, null, "加拿大"],
  bowers: [1960, null, "英国"], miller_n: [1909, 2002, "美国"],
  sugai: [1951, null, "美国"], murdock: [1925, 2006, "加拿大"],
  craik: [1942, null, "加拿大"], kahneman: [1934, 2024, "以色列/美国"],
  rumelhart: [1942, 2011, "美国"], newell: [1927, 1992, "美国"],
  chase: [1947, null, "美国"], spiro: [1942, null, "美国"],
  scardamalia: [1947, null, "加拿大"], covington: [1937, null, "美国"],
  seligman: [1942, null, "美国"], rotter: [1916, 2014, "美国"],
  lepper: [1941, null, "美国"], locke_e: [1938, null, "美国"],
  pekrun: [1952, null, "德国"], miller_w: [1944, null, "美国"],
  underwood: [1915, 1994, "美国"], bjork: [1937, null, "美国"],
  rohrer: [1964, null, "美国"], koriat: [1945, null, "以色列"],
  nelson_t: [1938, null, "美国"], risko: [1980, null, "加拿大"],
  steel: [1964, null, "加拿大"], bangert_drowns: [1950, null, "美国"],
  branch: [1950, null, "美国"], rose_d: [1945, null, "美国"],
  mazur: [1954, null, "美国"], baltes: [1939, 2006, "德国/美国"],
  linn: [1944, null, "美国"], gentner: [1946, null, "美国"],
  corcoran: [1950, null, "美国"], andriessen: [1950, null, "荷兰"],
  graesser: [1945, null, "美国"], buckingham: [1954, null, "英国"],
  phillips_d: [1944, null, "英国"], lingard: [1950, null, "澳大利亚"],
  dryden_peterson: [1976, null, "加拿大/美国"], hargreaves: [1951, null, "英国/美国"],
  spillane: [1965, null, "美国"], skilbeck: [1935, null, "澳大利亚"],
  warschauer: [1964, null, "美国"], wimmer: [1946, null, "奥地利"],
  thelen: [1941, 2018, "美国"], gelman: [1942, null, "美国"],
  gathercole: [1952, null, "英国"], harris_j: [1946, null, "美国"],
  eagly: [1938, null, "美国"], mclean: [1970, null, "加拿大"],
  arnett: [1955, null, "美国"], blasi: [1938, null, "意大利/美国"],
  zehr: [1944, null, "美国"], carey: [1947, null, "美国"],
  brown_r: [1925, 1997, "美国"], hart_risley: [1941, null, "美国"],
  baker_c: [1947, null, "英国"], gough: [1930, null, "美国"],
  denham: [1950, null, "美国"], crick: [1965, null, "美国"],
  rothbart: [1937, null, "美国"], eisenberger: [1970, null, "美国"],
  durlak: [1942, null, "美国"], baum: [1942, null, "美国"],
  conger: [1941, null, "美国"]
});

/* 标题区分：基础概念 / 应用变体 / 证据形态 */
Object.assign(ATLAS.thinkerMeta, { lupien: [1959, null, "加拿大"] });

ATLAS.overrides = {
  renames: {
    E329: "形成性评价在学习进程中的嵌入",
    E313: "认知学徒制的成分与变式",
    E304: "成长型思维的课堂干预方案",
    E300: "自我调节学习的循环阶段模型",
    E454: "学习风格迷思的流行率调查",
    E332: "学习分析预警系统的部署",
    E317: "学习契约：自我导向学习的操作化",
    E382: "社会情绪学习的效应量证据",
    E449: "计算障碍的亚型分类",
    E247: "理解六侧面：UbD 的评估框架",
    E308: "掌握学习的反馈—矫正循环",
    E314: "支架的渐隐与责任移交"
  }
};
