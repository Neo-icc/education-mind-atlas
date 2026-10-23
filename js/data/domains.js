/* ============================================================
   知识图谱 · 分类体系（5 领域 / 39 分支）
   每个领域与分支均有独立色相，全部使用 OKLCH 以保证明度统一。
   ============================================================ */
window.ATLAS = window.ATLAS || {};

ATLAS.meta = {
  title: "教育与心智 · 知识图谱",
  subtitle: "Education, Mind & Brain Atlas",
  tagline: "五大领域 · 机制级关联 · 可核验来源",
  version: "2.0",
  builtAt: "2026-09",
};

ATLAS.domains = [
  {
    id: "foundation",
    name: "教育学基础理论",
    en: "Foundations of Education",
    short: "基础",
    color: "oklch(47% 0.13 262)",
    tint: "oklch(95% 0.022 262)",
    desc: "教育的哲学前提、课程逻辑、教学方法、社会功能与制度设计——回答「为什么这样教」。",
    branches: [
      { id: "edu-philosophy", name: "教育哲学与价值论", en: "Philosophy of Education" },
      { id: "edu-curriculum", name: "课程论", en: "Curriculum Studies" },
      { id: "edu-method", name: "教学方法论", en: "Pedagogy" },
      { id: "edu-sociology", name: "教育社会学", en: "Sociology of Education" },
      { id: "edu-policy", name: "教育制度与政策", en: "Policy & Governance" },
      { id: "edu-assessment", name: "教育评价与测量", en: "Assessment" },
    ],
  },
  {
    id: "psych",
    name: "教育行为心理学",
    en: "Learning & Behavioral Psychology",
    short: "心理",
    color: "oklch(45% 0.16 28)",
    tint: "oklch(95% 0.025 28)",
    desc: "学习如何发生：行为联结、信息加工、建构、动机、迁移、元认知与教学设计的心理学机制。",
    branches: [
      { id: "behaviorism", name: "行为主义", en: "Behaviorism" },
      { id: "cognitivism", name: "认知主义", en: "Cognitivism" },
      { id: "constructivism", name: "建构主义", en: "Constructivism" },
      { id: "motivation", name: "学习动机", en: "Motivation" },
      { id: "transfer", name: "迁移与记忆", en: "Transfer & Memory" },
      { id: "metacognition", name: "元认知与自我调节", en: "Metacognition" },
      { id: "instruction", name: "教学设计与技术", en: "Instructional Design" },
    ],
  },
  {
    id: "broad",
    name: "泛教育理论",
    en: "Broad Education",
    short: "泛教",
    color: "oklch(50% 0.12 160)",
    tint: "oklch(95% 0.022 160)",
    desc: "越过课堂边界：终身与成人学习、情境与共同体、学习科学、批判教育学与全球治理。",
    branches: [
      { id: "lifelong", name: "终身与成人学习", en: "Lifelong Learning" },
      { id: "situated", name: "情境与非正式学习", en: "Situated Learning" },
      { id: "learn-sci", name: "学习科学", en: "Learning Sciences" },
      { id: "critical", name: "批判教育学", en: "Critical Pedagogy" },
      { id: "global", name: "比较与全球教育", en: "Comparative Education" },
      { id: "system", name: "教育系统与改进", en: "Systems & Improvement" },
    ],
  },
  {
    id: "dev",
    name: "儿童成长与发展",
    en: "Child Development",
    short: "发展",
    color: "oklch(48% 0.13 320)",
    tint: "oklch(95% 0.023 320)",
    desc: "从婴儿到青春期的认知、社会性、道德、语言与情绪发展，以及家庭与特殊需要。",
    branches: [
      { id: "cog-dev", name: "认知发展", en: "Cognitive Development" },
      { id: "psycho-social", name: "心理社会性发展", en: "Psychosocial Development" },
      { id: "moral", name: "道德与社会化", en: "Moral Development" },
      { id: "language", name: "语言发展", en: "Language Development" },
      { id: "emotion-social", name: "情感与社会性", en: "Social-Emotional" },
      { id: "special", name: "差异与特殊发展", en: "Individual Differences" },
      { id: "family", name: "家庭与教养", en: "Family & Parenting" },
    ],
  },
  {
    id: "brain",
    name: "脑科学与学习",
    en: "Brain & Learning",
    short: "脑科学",
    color: "oklch(46% 0.12 210)",
    tint: "oklch(95% 0.021 210)",
    desc: "可塑性、记忆巩固、注意与执行、情绪与应激、语言与阅读、数感，以及必须警惕的神经迷思。",
    branches: [
      { id: "neuro-plasticity", name: "可塑性与敏感期", en: "Plasticity & Sensitive Periods" },
      { id: "memory-sleep", name: "记忆与睡眠巩固", en: "Memory & Sleep" },
      { id: "attention-exec", name: "注意与执行功能", en: "Attention & Executive Function" },
      { id: "emotion-brain", name: "情绪与应激脑机制", en: "Emotion & Stress" },
      { id: "language-brain", name: "语言与阅读脑", en: "Language & Reading Brain" },
      { id: "math-brain", name: "数感与数学脑", en: "Numeracy & Math Brain" },
      { id: "neuromyth", name: "神经迷思与转化边界", en: "Neuromyths & Translation" },
    ],
  },
];

/* 关联类型 */
ATLAS.linkTypes = {
  agreement:   { name: "共识关联", en: "Agreement",   color: "oklch(43% 0.12 148)", desc: "不同理论得出相同或彼此印证的结论" },
  disagreement:{ name: "分歧对立", en: "Disagreement",color: "oklch(46% 0.16 28)",  desc: "核心主张对立，或对同一证据给出冲突解释" },
  derivative:  { name: "衍生发展", en: "Derivation",  color: "oklch(46% 0.11 252)", desc: "后者对前者的延伸、修正或操作化" },
};

/* 证据强度 */
ATLAS.confidences = {
  established: { name: "已确立", en: "Established", desc: "多项独立研究重复验证，教科书级共识" },
  supported:   { name: "有支持", en: "Supported",   desc: "有实证支持但仍存在边界条件或争议" },
  contested:   { name: "存争议", en: "Contested",   desc: "证据冲突，学界尚未收敛" },
  emerging:    { name: "新兴",   en: "Emerging",    desc: "新兴方向，证据初步，需谨慎解读" },
};

/* 条目类型 */
ATLAS.kinds = {
  theory:    { name: "理论", en: "Theory" },
  construct: { name: "构念", en: "Construct" },
  mechanism: { name: "机制", en: "Mechanism" },
  practice:  { name: "实践", en: "Practice" },
  critique:  { name: "批判", en: "Critique" },
};
