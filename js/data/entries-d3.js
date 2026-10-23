/* ============================================================
   知识点详解（三）：泛教育理论 E103–E137
   字段：definition / claims / agreements / disagreements
        evidence / applications / terms
   ============================================================ */
window.ATLAS = window.ATLAS || {};
ATLAS.details = Object.assign(ATLAS.details || {}, {
  /* ── 终身与成人学习 ── */
  E103: {
    definition: "朗格朗在 1965 年联合国教科文组织成人教育促进国际会议提出终身教育构想，并于 1970 年《终身教育导论》中系统化。该理论主张教育不是限定于学龄期的预备，而是贯穿个体一生的连续过程，须把学校、成人教育、工作与闲暇中的学习重组为统一体系，最终走向「学习化社会」。它是一种制度重组原则，而非成人教育的另一个名称。",
    claims: [
      "教育的时间跨度应覆盖全生涯，学前、学校、职业与退休后的学习属于同一连续体。",
      "终身教育不是某类教育的扩张，而是对整个教育制度组织方式的重新设计。",
      "学习化社会要求教育供给从学校垄断转向家庭、社区、企业与文化机构的多主体参与。",
      "终身教育的正当性既来自技术与职业变迁，也来自公民自我实现与民主参与的伦理要求。",
      "其后继文献把终身学习操作化为学会认知、学会做事、学会共同生活与学会生存四大支柱。",
    ],
    agreements: [
      "学习不止于学校，成人期仍存在显著可塑性与新的发展任务。",
      "教育制度需为回流教育、学分累积与资格衔接提供制度通道。",
      "终身学习机会的分布并不均衡，公共供给具有补偿功能。",
    ],
    disagreements: [
      {
        topic: "终身教育究竟扩展自由还是延伸制度控制",
        sides: [
          { who: "lengrand", view: "终身教育把学习机会扩展到人生各阶段，使成人摆脱一次教育定终身的束缚。" },
          { who: "illich", view: "把学习终身制度化，只会把对学校的依赖延伸到整个生命历程，压缩自主学习的空间。" },
        ],
        stake: "争论焦点是制度供给究竟在解放学习者，还是以更细密的方式管理其一生。",
      },
      {
        topic: "终身学习的首要驱动力",
        sides: [
          { who: "lengrand", view: "终身教育根植于人文主义与民主公民理想，经济需求只是其中一项理由。" },
          { who: "carnoy", view: "在全球化竞争中，终身学习话语已被重塑为技能供给与人力资本投资的政策工具。" },
        ],
        stake: "若以竞争力为唯一尺度，终身教育可能窄化为就业培训，失去公民与文化维度。",
      },
    ],
    evidence: [
      { text: "Lengrand, P. 《An Introduction to Lifelong Education》(1970)，联合国教科文组织出版", doi: null },
      { text: "Faure, E. 等 《Learning to Be: The World of Education Today and Tomorrow》(1972)", doi: null },
      { text: "Delors, J. 等 《Learning: The Treasure Within》(1996)，提出四大学习支柱", doi: null },
    ],
    applications: [
      "开放大学与学分银行的制度设计，承认非正式与非正规学习成果。",
      "企业学习体系把岗位轮换、导师制与正式课程编入员工全生涯发展规划。",
      "社区学习中心为老年人、失业者与移民提供低门槛的持续学习机会。",
      "区域终身教育规划中协调学校、图书馆、博物馆与企业之间的资源开放。",
    ],
    terms: [
      { t: "终身教育", en: "lifelong education", d: "把教育视为贯穿一生的连续过程，而非学龄期的准备阶段。" },
      { t: "学习化社会", en: "learning society", d: "教育机会由社会多主体共同供给，学习嵌入日常生活与制度。" },
      { t: "回流教育", en: "recurrent education", d: "在工作与学习之间交替往返，使教育可分段回归的制度安排。" },
      { t: "四大支柱", en: "four pillars of learning", d: "学会认知、做事、共同生活与生存，后继文献对终身学习的操作化。" },
    ],
  },

  E104: {
    definition: "诺尔斯于 1968 年提出 andragogy 概念，1970 年《现代成人教育实践：成人教育学 versus 教育学》系统阐述。理论主张成人学习者自我概念独立、经验丰富、学习准备由生活任务驱动、取向为问题中心、动机以内在为主，因此教学应从内容传授转向促进自主学习。诺尔斯后期承认这些特征是连续谱，而非成人专属。",
    claims: [
      "成人的自我概念从依赖型人格转为自我导向，教学须相应让渡控制权。",
      "经验是成人学习最丰富的资源，同时也可能成为固化偏见的来源。",
      "学习准备度由社会角色与现实任务决定，而非由学科逻辑预先规定。",
      "成人学习取向是问题中心与表现中心，而非教材中心。",
      "内在动机（成长、自我实现）比外在奖惩更能维持成人持续学习。",
    ],
    agreements: [
      "成人带入的经验显著影响新知识的编码与提取方式。",
      "以真实问题组织课程能提高成人学习的参与度与保持率。",
      "教师角色应是促进者、资源提供者与共同学习者，而非唯一权威。",
    ],
    disagreements: [
      {
        topic: "成人教育学能否作为儿童教学的对立面",
        sides: [
          { who: "knowles", view: "成人与儿童在学习假设上有系统差异，需以不同教学模型分别对待。" },
          { who: "dewey", view: "学习都是经验的连续改造与探究，按年龄划出两种教育学缺乏依据。" },
        ],
        stake: "若自我导向被视为成人专属，学校中培养自主性的可能就被理论排除。",
      },
      {
        topic: "经验在成人学习中的地位",
        sides: [
          { who: "knowles", view: "经验是成人学习最宝贵的资源，教学应充分调用与承认它。" },
          { who: "mezirow", view: "未经检验的经验固化了习惯性期待，恰恰是需要被批判反思重构的对象。" },
        ],
        stake: "资源隐喻与转化隐喻之争，决定成人教育是强化既有经验还是动摇它。",
      },
    ],
    evidence: [
      { text: "Knowles, M. 《The Modern Practice of Adult Education: Andragogy versus Pedagogy》(1970)", doi: null },
      { text: "Knowles, M. 《Andragogy in Action》(1984)，承认假设适用于各年龄的连续谱", doi: null },
      { text: "Merriam, S. 《Andragogy and self-directed learning: Pillars of adult learning theory》(2001)", doi: null },
    ],
    applications: [
      "企业培训以真实业务问题组织工作坊，替代按教材章节推进的讲授。",
      "成人高等教育采用学习契约与先前经验认定，缩短重复学习。",
      "继续医学教育以病例讨论与同伴审核为主，嵌入临床任务。",
      "社区成人识字项目以学员生活场景中的文本为起点设计任务。",
    ],
    terms: [
      { t: "成人教育学", en: "andragogy", d: "关于成人学习假设与相应教学策略的理论取向，与 pedagogy 相对。" },
      { t: "自我概念", en: "self-concept", d: "个体对自身作为学习者的角色认知，成人倾向自主而非依赖。" },
      { t: "学习准备度", en: "readiness to learn", d: "由发展任务与社会角色产生的学习时机与动机状态。" },
      { t: "问题中心取向", en: "problem-centered orientation", d: "以解决现实任务为组织轴心，而非以学科内容顺序推进。" },
    ],
  },

  E105: {
    definition: "转化学习理论由梅齐罗在 1978 年对女性重返大学的追踪研究中提出，1991 年《转化学习的维度》系统化。它认为成人学习的深层变化不是知识增量，而是意义结构（意义观点与意义方案）的重构：当既有习惯性期待无法解释经验时，学习者经历迷失性困境，经批判性自我反思与理性话语，形成更具包容性与整合性的视角。",
    claims: [
      "意义结构由社会文化塑造，常以未经检验的假设形式在背景中运作。",
      "迷失性困境是转化的典型触发条件，但并非唯一路径。",
      "批判性自我反思与批判性话语是视角转化的核心机制。",
      "转化的方向是更自主、更开放、更能容纳差异的意义观点。",
      "成人教育的核心任务不是传递内容，而是支持意义结构的重构。",
    ],
    agreements: [
      "成人学习包含对既有假设的检验，而不只是技能累积。",
      "反思的质量比学习时长更能预测学习深度。",
      "同伴之间以理性商谈为基础的对话能促成视角重构。",
    ],
    disagreements: [
      {
        topic: "转化应以个体意义结构还是集体意识化为单位",
        sides: [
          { who: "mezirow", view: "转化的核心是个体意义观点的重构，经由批判性自我反思与理性话语完成。" },
          { who: "freire", view: "真正的意识化在对话与集体行动中生成，离开对压迫结构的改造就只是心理调整。" },
        ],
        stake: "个体认知重构与社会结构变革何者优先，决定成人教育是自我更新还是政治实践。",
      },
      {
        topic: "迷失性困境是否为转化的必要条件",
        sides: [
          { who: "mezirow", view: "迷失性困境打破习惯性期待，是触发视角转化的典型起点。" },
          { who: "E. 泰勒", view: "转化也可由长期累积的反思渐进发生，不必以一次断裂性危机为前提。" },
        ],
        stake: "若把危机设为必要门槛，课程设计会忽视日常渐进的反思性成长。",
      },
      {
        topic: "理性反思是否垄断了转化的机制",
        sides: [
          { who: "mezirow", view: "批判性反思与理性话语是可检验、可教授的转化路径。" },
          { who: "迪尔克斯", view: "情感、想象与无意识过程才是成人深层转变的主要载体，冷认知模型过于狭窄。" },
        ],
        stake: "情感维度缺席会使理论难以解释艺术、信仰与创伤经验中的转化。",
      },
    ],
    evidence: [
      { text: "Mezirow, J. 《Perspective Transformation》(1978)，Adult Education Quarterly", doi: null },
      { text: "Mezirow, J. 《Transformative Dimensions of Adult Learning》(1991)", doi: null },
      { text: "Mezirow, J. 等 《Learning as Transformation: Critical Perspectives on a Theory in Progress》(2000)", doi: null },
    ],
    applications: [
      "成人高等教育以自传写作与批判反思日志支持视角重构。",
      "教师反思性实践项目以课堂冲突为素材检验既有信念。",
      "医务与社工督导中处理职业价值冲突与道德困境。",
      "组织中针对性别与权力议题的批判性领导力发展课程。",
    ],
    terms: [
      { t: "意义观点", en: "meaning perspective", d: "由文化与社会化形成的宽泛解释框架，是转化的主要对象。" },
      { t: "意义方案", en: "meaning scheme", d: "针对具体情境的期待与解释规则，比意义观点更易改变。" },
      { t: "迷失性困境", en: "disorienting dilemma", d: "既有框架失效所引发的困惑状态，常成为转化的触发点。" },
      { t: "批判性自我反思", en: "critical self-reflection", d: "追问自身假设从何而来、为谁服务的反思方式。" },
      { t: "视角转化", en: "perspective transformation", d: "意义观点整体重组，使经验获得新的组织方式。" },
    ],
  },

  E106: {
    definition: "库伯在杜威、勒温与皮亚杰传统上，于 1984 年《经验学习：经验作为学习与发展的源泉》提出经验学习理论。学习被描述为由具体经验、反思观察、抽象概念化、主动实验构成的四阶段循环；个体对四种模式形成不同偏好，发展的方向是让四种模式趋于整合而非固守一端。",
    claims: [
      "学习是经验经反思、概念化再投入实践的循环，而非单向接收。",
      "四阶段相互依赖，长期停留于单一模式会限制学习与发展。",
      "学习风格是模式偏好的组合，不是固定的人格类型。",
      "发展表现为四种模式的分化与再整合，而非偏好强化。",
      "知识在经验的改造中被建构，并在新情境的检验中修正。",
    ],
    agreements: [
      "反思是把经验转化为概念的中介环节，缺此则经验难以成为学习。",
      "只有活动而无反思的课堂，往往产生热闹但浅表的学习。",
      "概念化必须回到实践检验，否则易成空洞口号。",
    ],
    disagreements: [
      {
        topic: "学习风格匹配是否具备实证基础",
        sides: [
          { who: "kolb", view: "学习者确有稳定的模式偏好，教学应据此设计不同入口的活动。" },
          { who: "pashler", view: "按偏好匹配教学缺乏交互效应证据，风格标签不应作为设计依据。" },
        ],
        stake: "若匹配效应不成立，四阶段循环的类型学基础与测评工具都需重新论证。",
      },
      {
        topic: "经验循环能否替代系统讲授",
        sides: [
          { who: "kolb", view: "具体经验与反思是概念化的必要基础，脱离经验的概念难以内化。" },
          { who: "rosenshine", view: "新手缺乏先备知识，需小步讲授与有指导练习，纯经验循环效率过低。" },
        ],
        stake: "争论在于经验在学习的哪个阶段介入，以及新手是否具备自主反思的条件。",
      },
    ],
    evidence: [
      { text: "Kolb, D. 《Experiential Learning: Experience as the Source of Learning and Development》(1984)", doi: null },
      { text: "Kolb, A. & Kolb, D. 《Learning styles and learning spaces》(2005)，Academy of Management Learning & Education", doi: null },
      { text: "Kolb, D. 《Experiential Learning》(2015, 2nd ed.)，扩充团队与组织层面的应用", doi: null },
    ],
    applications: [
      "医学与工程专业的实习轮转，以操作、复盘、理论补课与再实践构成循环。",
      "服务学习课程要求反思日志把社区经验与课堂概念相互对照。",
      "企业行动学习项目以真实业务问题驱动反思与方案试验。",
      "教师工作坊按四种模式设计示范、讨论、原理讲解与试教环节。",
    ],
    terms: [
      { t: "具体经验", en: "concrete experience", d: "学习者全身投入具体情境所获得的直接感受与素材。" },
      { t: "反思观察", en: "reflective observation", d: "从多角度回看经验，识别模式与矛盾的环节。" },
      { t: "抽象概念化", en: "abstract conceptualization", d: "把观察整合为可表述的概念、规则或理论。" },
      { t: "主动实验", en: "active experimentation", d: "把概念用于新情境并检验其有效性。" },
      { t: "学习风格", en: "learning style", d: "个体对四种学习模式的相对偏好组合，具争议性。" },
    ],
  },

  E107: {
    definition: "自我导向学习指学习者自行诊断学习需求、设定目标、识别资源、选择策略并评价结果的过程与能力。塔夫 1971 年对成人学习项目的调查、诺尔斯 1975 年《自我导向学习》与古列尔米诺 1977 年的准备度量表共同奠定其研究基础。它既是成人学习的常见形态，也是可经由元认知与策略教学培养的能力。",
    claims: [
      "成人的大量学习发生在无正式课程、由个人发起的学习项目中。",
      "自我导向不等于孤立学习，教师、同伴与机构仍是可调用的资源。",
      "自我导向程度是连续变量，随领域熟悉度、动机与情境而变化。",
      "自我导向能力可通过目标设定、自我监控与求助策略的教学提升。",
      "自我导向包含对学习结果负责的伦理维度，而非仅技术性规划。",
    ],
    agreements: [
      "自我导向依赖元认知监控与目标管理能力。",
      "领域知识越熟悉，学习者越能做出有效的资源与策略选择。",
      "自主性与结构支持并非零和，适度支架能提升自主质量。",
    ],
    disagreements: [
      {
        topic: "自我导向是否为成人特有属性",
        sides: [
          { who: "knowles", view: "自我导向随成熟与角色变化在成人期成为主导的学习取向。" },
          { who: "deci_ryan", view: "自主是贯穿一生的基本心理需要，儿童同样具备，年龄划分并不成立。" },
        ],
        stake: "若自主需要跨年龄存在，学校教育就应更早提供选择与自我调节的机会。",
      },
      {
        topic: "自我导向话语是否掩盖结构性不平等",
        sides: [
          { who: "knowles", view: "自我导向是成人可普遍发展的能力，教育应信任并培养它。" },
          { who: "bourdieu", view: "规划学习所需的时间、语言与文化资本分布不均，自主话语易把结构问题个体化。" },
        ],
        stake: "把学习失败归因于自主性不足，可能遮蔽资源与制度层面的责任。",
      },
    ],
    evidence: [
      { text: "Tough, A. 《The Adult's Learning Projects》(1971)", doi: null },
      { text: "Knowles, M. 《Self-Directed Learning: A Guide for Learners and Teachers》(1975)", doi: null },
      { text: "Guglielmino, L. 《Development of the Self-Directed Learning Readiness Scale》(1977)，博士论文", doi: null },
    ],
    applications: [
      "开放大学与慕课以学习计划、进度自评与同伴互助支持自主学习。",
      "个人学习计划（ILP）在职业教育中由学员与导师共同拟定并复查。",
      "住院医师以病例清单自我诊断缺口并安排轮转与阅读。",
      "企业学习平台提供目标设定、资源推荐与自我评价工具。",
    ],
    terms: [
      { t: "学习契约", en: "learning contract", d: "学习者与指导教师协商确定目标、资源、期限与评价方式的书面约定。" },
      { t: "自我诊断", en: "self-diagnosis", d: "学习者识别自身知识缺口与学习需求的过程。" },
      { t: "自主学习准备度", en: "self-directed learning readiness", d: "个体承担自主学习的态度、技能与人格倾向水平。" },
      { t: "学习项目", en: "learning project", d: "由学习者发起、可持续数月至数年的有意图学习活动序列。" },
    ],
  },

  E108: {
    definition: "圣吉 1990 年《第五项修炼》提出，学习型组织是能够持续扩展其创造未来能力的组织。五项修炼为系统思考、自我超越、心智模式、共同愿景与团队学习，其中系统思考统摄其余四项，用以识别反馈回路、延迟与结构性冲突。该概念在 1990 年代后被广泛引入学校改进与企业知识管理。",
    claims: [
      "组织学习的障碍多来自心智模式与局部优化造成的结构，而非个体能力不足。",
      "系统思考是整合其余四项修炼的元能力。",
      "共同愿景把个体学习转化为组织承诺与集体方向。",
      "团队学习通过对话、悬挂假设与共同推理产生集体智识。",
      "学习型组织是持续修炼的过程，不是可宣告完成的状态。",
    ],
    agreements: [
      "组织的惯例与结构会限制个体学习向组织能力的转化。",
      "单环学习需由双环学习补充，后者追问目标与规范本身是否合理。",
      "领导者的示范与制度激励显著影响学习文化。",
    ],
    disagreements: [
      {
        topic: "组织学习能否还原为个体与团队学习",
        sides: [
          { who: "senge", view: "共享心智模型与团队学习使组织形成超出个体加总的集体能力。" },
          { who: "engestrom", view: "活动系统的矛盾与扩张性学习是集体现象，不能还原为团队对话或心智模型。" },
        ],
        stake: "分析单位若停留在团队互动，结构性矛盾与跨系统边界的学习将被漏掉。",
      },
      {
        topic: "学习型组织是否为可操作的科学概念",
        sides: [
          { who: "senge", view: "五项修炼提供了可练习、可观察的组织变革路径。" },
          { who: "伊斯特比-史密斯", view: "概念规范性过强、实证证据薄弱，测量工具难以区分修辞与实质变化。" },
        ],
        stake: "若无法测量，学习型组织易沦为管理话语，难以检验其改进效果。",
      },
    ],
    evidence: [
      { text: "Senge, P. 《The Fifth Discipline: The Art and Practice of the Learning Organization》(1990)", doi: null },
      { text: "Argyris, C. & Schön, D. 《Organizational Learning: A Theory of Action Perspective》(1978)", doi: null },
      { text: "Senge, P. 等 《Schools That Learn》(2000)，面向学校系统的应用", doi: null },
    ],
    applications: [
      "学校以校本教研与共同愿景推进改进，而非仅下达指标。",
      "企业以复盘、事后分析（AAR）与知识库建设沉淀组织经验。",
      "医院以跨科室质量改进小组识别系统性差错。",
      "公共部门以情景规划与系统地图处理跨部门议题。",
    ],
    terms: [
      { t: "系统思考", en: "systems thinking", d: "以反馈回路、延迟与整体结构解释复杂行为的能力。" },
      { t: "心智模式", en: "mental models", d: "组织成员共享的隐含假设与因果信念，决定行动方式。" },
      { t: "共同愿景", en: "shared vision", d: "成员真正认同的未来图景，而非自上而下发布的口号。" },
      { t: "双环学习", en: "double-loop learning", d: "不仅修正行动，还质疑支配行动的规范与目标本身。" },
      { t: "团队学习", en: "team learning", d: "通过对话与共同推理使团队智识高于个体之和。" },
    ],
  },

  /* ── 情境与非正式学习 ── */
  E109: {
    definition: "莱夫与温格 1991 年《情境学习：合法的边缘性参与》提出，学习不是信息的内部化，而是在实践共同体中参与方式与身份的转变。新手以合法方式从边缘参与逐步走向更核心的参与，知识的意义在实践中生成。该理论源自对利比里亚裁缝学徒、酗酒者互助会等日常实践的民族志研究。",
    claims: [
      "学习是社会实践的组成部分，而非脱离情境的独立认识过程。",
      "合法的边缘性参与描述新手进入共同体的结构性路径。",
      "知识与技能的意义由共同体中的使用方式与目标决定。",
      "身份变化是学习的关键成果，与知识增长不可分割。",
      "学校式的去情境化教学割裂了知识与其使用场景。",
    ],
    agreements: [
      "真实任务与专家实践能提高参与的深度与持续性。",
      "新手需要以低风险方式逐步承担核心责任。",
      "知识被使用的情境影响其后续迁移。",
    ],
    disagreements: [
      {
        topic: "情境性知识与抽象知识的可迁移性",
        sides: [
          { who: "lave_wenger", view: "意义源于具体实践，脱离情境的抽象教学只能产生惰性知识。" },
          { who: "anderson_j", view: "抽象规则与符号表征可跨情境迁移，情境差异只是提取线索问题。" },
        ],
        stake: "若抽象知识可迁移，学校式去情境教学就具有独立价值，不必以实践共同体为前提。",
      },
      {
        topic: "共同体能否容纳权力不对称与冲突",
        sides: [
          { who: "wenger", view: "合法性授予使新手得以进入，共同体通过参与与物化协调代际传承。" },
          { who: "engestrom", view: "共同体内部存在结构性矛盾与排斥，边缘者未必被合法接纳，须以扩张性学习突破。" },
        ],
        stake: "若合法性并非自动成立，边缘性参与可能变成长期排斥的委婉说法。",
      },
    ],
    evidence: [
      { text: "Lave, J. & Wenger, E. 《Situated Learning: Legitimate Peripheral Participation》(1991)", doi: null },
      { text: "Lave, J. 《Cognition in Practice: Mind, Mathematics and Culture in Everyday Life》(1988)", doi: null },
      { text: "Anderson, J., Reder, L. & Simon, H. 《Situated learning and education》(1996)，Educational Researcher", doi: null },
    ],
    applications: [
      "医学临床带教以观察、协助、独立操作逐步移交责任。",
      "职业教育学徒制以真实生产任务组织学习，而非先学后做。",
      "新教师入职引导安排边缘参与式观摩与协同备课。",
      "企业新人以参与真实项目与社区例会完成社会化。",
    ],
    terms: [
      { t: "合法的边缘性参与", en: "legitimate peripheral participation", d: "新手以被承认的身份从实践边缘逐步深入核心的过程。" },
      { t: "实践共同体", en: "community of practice", d: "由共同事业与共享实践维系、成员持续互动的人群。" },
      { t: "去情境化", en: "decontextualization", d: "把知识从使用场景中抽离，以便学校传授的做法。" },
      { t: "惰性知识", en: "inert knowledge", d: "可在测验中复述、却无法在相关情境中调用的知识。" },
    ],
  },

  E110: {
    definition: "温格 1998 年《实践共同体：学习、意义与身份》把 CoP 发展为独立理论。共同体由相互投入、共同事业与共享 repertoire 三个维度构成；学习是参与与物化之间的意义协商，成员在其中建构身份。该概念后被广泛用于知识管理、教师专业发展与组织学习。",
    claims: [
      "共同体由相互投入、共同事业与共享资源三重结构共同界定。",
      "意义在参与与物化的张力中生成，二者缺一不可。",
      "学习与身份建构是同一过程的两个面向。",
      "共同体边界产生多成员性与跨边界协商的空间。",
      "共同体是自组织的社会结构，不能仅靠制度指定。",
    ],
    agreements: [
      "知识与实践在共同体中共同演化，而非先有知识再进入实践。",
      "成员资格通过参与获得，证书只是辅助性凭证。",
      "边界物可促进不同共同体之间的协作与翻译。",
    ],
    disagreements: [
      {
        topic: "实践共同体能否被管理与设计",
        sides: [
          { who: "wenger", view: "共同体可被培育：通过共同事业、相互投入与共享资源创造条件。" },
          { who: "康图", view: "把共同体当作可管理对象，忽视了权力关系与劳动控制，容易沦为管理修辞。" },
        ],
        stake: "设计隐喻若不处理权力，知识管理项目可能压制共同体内部的分歧。",
      },
      {
        topic: "共同体是否必然产生学习",
        sides: [
          { who: "wenger", view: "参与与物化的持续协商本身即生成学习与身份变化。" },
          { who: "engestrom", view: "共同体也可能再生产僵化实践，学习需以矛盾为杠杆突破既有活动结构。" },
        ],
        stake: "若共同体可固化惯例，则参与并不自动等于学习，需引入变革机制。",
      },
    ],
    evidence: [
      { text: "Wenger, E. 《Communities of Practice: Learning, Meaning, and Identity》(1998)", doi: null },
      { text: "Wenger, E., McDermott, R. & Snyder, W. 《Cultivating Communities of Practice》(2002)", doi: null },
      { text: "Contu, A. & Willmott, H. 《Re-embedding situatedness: The importance of power relations in learning theory》(2003)，Organization", doi: null },
    ],
    applications: [
      "企业以跨部门实践社群沉淀隐性知识与技术诀窍。",
      "教师专业共同体以共同备课、课例研究与相互观课形成共享实践。",
      "开源社区以文档、代码审查与例会维持新成员的社会化。",
      "临床专科以病例讨论会与操作规范传承专长。",
    ],
    terms: [
      { t: "相互投入", en: "mutual engagement", d: "成员持续互动、彼此回应并共同承担任务的实践关系。" },
      { t: "共同事业", en: "joint enterprise", d: "成员协商形成的共同目标与责任，处于持续再协商中。" },
      { t: "共享 repertoire", en: "shared repertoire", d: "共同体积累的术语、工具、惯例与故事等资源。" },
      { t: "物化", en: "reification", d: "把意义凝结为文档、工具与符号，使实践可被传承。" },
      { t: "边界物", en: "boundary object", d: "能被多个共同体共同使用、促进跨边界协作的物件或概念。" },
    ],
  },

  E111: {
    definition: "恩格斯托姆在维果茨基与列昂节夫基础上，1987 年《学习与扩展》提出活动系统模型。主体、工具、客体、共同体、规则与分工六要素构成集体活动系统，系统内部矛盾是学习与变革的动力；他由此提出扩张性学习，即参与者共同发现并跨越现有活动边界，生成新的活动模式。",
    claims: [
      "分析单位是集体活动系统，而非个体头脑中的认知过程。",
      "工具与符号中介主体与客体之间的关系，塑造任务的可能性。",
      "矛盾是活动系统的结构性动力，而非待消除的故障。",
      "扩张性学习是跨越边界的集体创新，需经历质疑、分析、建模与检验。",
      "多个活动系统交叠形成网络与边界地带，是创新的常见位置。",
    ],
    agreements: [
      "工具与制度中介必须纳入学习分析，否则会误判失败原因。",
      "改革受阻常源于活动系统的多重目标冲突。",
      "实践中的冲突与偏差可被转化为设计资源。",
    ],
    disagreements: [
      {
        topic: "变革动力来自矛盾激化还是协同建设",
        sides: [
          { who: "engestrom", view: "唯有暴露并跨越活动系统的矛盾，才可能生成新的实践模式。" },
          { who: "fullan", view: "系统改进依赖方向、能力与问责的协同，持续施压可能耗竭一线。" },
        ],
        stake: "若矛盾不足以自动产生学习，变革策略需在扰动与支持之间取得平衡。",
      },
      {
        topic: "六要素框架是否过度结构化",
        sides: [
          { who: "engestrom", view: "六要素使矛盾可被定位、建模与干预，是分析复杂实践的必要抽象。" },
          { who: "wilson_m", view: "具身认知强调身体与情境的实时耦合，六要素框架把实践过度符号化。" },
        ],
        stake: "结构化分析可能漏掉身体、情感与瞬间协调等难以言说的实践维度。",
      },
    ],
    evidence: [
      { text: "Engeström, Y. 《Learning by Expanding: An Activity-Theoretical Approach to Developmental Research》(1987)", doi: null },
      { text: "Engeström, Y. 《Expansive learning at work: Toward an activity theoretical reconceptualization》(2001)，Journal of Education and Work", doi: null },
      { text: "Engeström, Y. & Sannino, A. 《Studies of expansive learning: Foundations, findings and future challenges》(2010)，Educational Research Review", doi: null },
    ],
    applications: [
      "医院多科室协作改进，以活动系统图定位规则与分工冲突。",
      "学校教研分析课堂活动的工具、规则与共同体张力。",
      "企业流程再造以边界跨越工作坊生成新服务模式。",
      "跨机构儿童服务整合，识别不同系统的目标冲突。",
    ],
    terms: [
      { t: "活动系统", en: "activity system", d: "由主体、工具、客体、共同体、规则与分工构成的集体实践单元。" },
      { t: "中介", en: "mediation", d: "工具与符号在主体与客体之间起到的转化作用。" },
      { t: "矛盾", en: "contradiction", d: "活动系统内部或系统之间的结构性张力，是变革动力源。" },
      { t: "扩张性学习", en: "expansive learning", d: "参与者共同建构新的活动模式与对象的集体学习过程。" },
      { t: "边界跨越", en: "boundary crossing", d: "在不同活动系统交界处协商协作的实践。" },
    ],
  },

  E112: {
    definition: "哈钦斯在对海军舰艇导航的田野研究中提出分布式认知，1995 年《荒野中的认知》系统阐述。认知任务并非只在个体头脑中完成，而分布于人、工具与表征构成的系统；系统的认知属性不能还原为单个成员的心理过程。信息如何在不同表征之间转换，是其分析核心。",
    claims: [
      "认知分析的单元是社会技术系统，而非孤立的个体。",
      "表征在人与工具之间流动并被反复转换，转换过程本身携带认知工作。",
      "系统可表现出任何单个成员都不具备的认知能力。",
      "认知负荷可通过外部结构与分工在系统中重新分配。",
      "文化历史形成的工具塑造任务结构与问题解决方式。",
    ],
    agreements: [
      "图表、清单与仪表等外部表征实质参与认知过程。",
      "团队协作依赖信息在成员之间的选择性传递与冗余控制。",
      "仅用个体心理解释难以覆盖复杂系统的可靠表现。",
    ],
    disagreements: [
      {
        topic: "分布式描述是否需要个体认知机制",
        sides: [
          { who: "hutchins_e", view: "认知属性属于系统层面，须以表征转换与协调过程为分析对象。" },
          { who: "anderson_j", view: "个体认知架构已能解释大部分表现，系统描述缺乏可检验的机制。" },
        ],
        stake: "若系统层面描述无法还原为机制，其解释力与预测力就难以被检验。",
      },
      {
        topic: "把认知外包给工具是否促进学习",
        sides: [
          { who: "hutchins_e", view: "合理设计工具与分工可降低个体负荷，使系统完成更复杂的任务。" },
          { who: "sweller", view: "外部替代会减少必要的图式建构，短期表现提升未必带来长期能力。" },
        ],
        stake: "系统绩效与个体能力发展可能背离，设计须区分任务完成与学习发生。",
      },
    ],
    evidence: [
      { text: "Hutchins, E. 《Cognition in the Wild》(1995)", doi: null },
      { text: "Hutchins, E. 《How a cockpit remembers its speeds》(1995)，Cognitive Science", doi: null },
      { text: "Hollan, J., Hutchins, E. & Kirsh, D. 《Distributed cognition: Toward a new foundation for human-computer interaction research》(2000)，ACM TOCHI", doi: null },
    ],
    applications: [
      "驾驶舱与手术室的人因设计，减少表征转换中的信息丢失。",
      "协作学习平台以共享白板与版本记录分担群体记忆。",
      "临床核查清单把关键步骤外化，降低团队遗漏率。",
      "应急指挥系统设计明确信息流与角色分工。",
    ],
    terms: [
      { t: "分布式认知", en: "distributed cognition", d: "把认知视为人、工具与表征构成系统的整体属性。" },
      { t: "表征转换", en: "representational transformation", d: "信息在不同媒介与格式间被改写的过程，可能引入误差。" },
      { t: "认知生态", en: "cognitive ecology", d: "由人、人工物与社会组织共同构成的认知环境。" },
      { t: "系统认知属性", en: "system-level cognitive property", d: "只有系统整体才具备、个体不具备的认知能力。" },
    ],
  },

  E113: {
    definition: "非正式学习指在博物馆、社区、家庭与工作场所等非课程化情境中，由兴趣与身份驱动的学习。福尔克与迪尔金 2000 年《从博物馆中学习》提出情境学习模型，强调个人情境、社会文化情境与物理情境的交互；福尔克 2009 年进一步以身份相关动机解释观众的学习路径。其成果多为长期、弥散，难以用标准化测验捕捉。",
    claims: [
      "非正式学习由自由选择与内在兴趣驱动，学习者掌握进入与退出的主动权。",
      "场馆学习是个人情境、社会文化情境与物理情境交互的产物。",
      "观众的身份相关动机决定注意力分配与意义建构方式。",
      "学习成果常表现为持续参与、家庭对话与后续探究，而非即时测验分数。",
      "非正式情境的学习不能直接套用学校评价指标。",
    ],
    agreements: [
      "家庭与同伴的对话是场馆学习的主要中介机制。",
      "展品与空间设计影响停留时间、谈话质量与概念参与。",
      "兴趣与身份是预测持续学习参与的有力变量。",
    ],
    disagreements: [
      {
        topic: "非正式学习是否需要显性教学支架",
        sides: [
          { who: "falk", view: "自由选择与自主探索是有效性的来源，过度结构化会削弱动机。" },
          { who: "rosenshine", view: "新手在缺乏指导时难以聚焦关键特征，非正式情境同样需要显性支架。" },
        ],
        stake: "自主与指导的配比决定了场馆教育是停留在体验，还是形成概念理解。",
      },
      {
        topic: "数字环境中的非正式学习是否被高估",
        sides: [
          { who: "falk", view: "数字资源扩展了自由选择学习的时空，使兴趣驱动的探究更易持续。" },
          { who: "selwyn", view: "随处学习的叙事掩盖了内容质量参差与机会不均，收益被系统性夸大。" },
        ],
        stake: "若数字非正式学习只惠及已有文化资本者，其公平承诺就难以成立。",
      },
    ],
    evidence: [
      { text: "Falk, J. & Dierking, L. 《Learning from Museums: Visitor Experiences and the Making of Meaning》(2000)", doi: null },
      { text: "Falk, J. 《Identity and the Museum Visitor Experience》(2009)", doi: null },
      { text: "Falk, J. & Dierking, L. 《The Museum Experience Revisited》(2013)", doi: null },
    ],
    applications: [
      "科技馆按观众身份动机设计差异化导览与展项说明。",
      "博物馆研学课程以提问卡与家庭对话任务替代知识清单。",
      "社区学习中心以兴趣小组维持成人持续参与。",
      "家庭科学项目培训家长使用对话式提问支持日常探究。",
    ],
    terms: [
      { t: "自由选择学习", en: "free-choice learning", d: "由学习者自主决定内容、时间与深度的非正式学习形态。" },
      { t: "情境学习模型", en: "Contextual Model of Learning", d: "以个人、社会文化与物理三重情境解释场馆学习的框架。" },
      { t: "身份相关动机", en: "identity-related motivation", d: "观众依据自我认同与社交角色选择参观方式的内在驱动。" },
      { t: "场馆学习", en: "museum learning", d: "在博物馆、科技馆等自由选择环境中发生的意义建构。" },
    ],
  },

  E114: {
    definition: "服务学习把有组织的社区服务与课程学习目标结合，并以结构化反思作为联结机制，源于杜威的经验教育传统，1990 年代在北美制度化。其主张是：当服务回应社区真实需要并与学术内容形成互惠关系时，学生同时获得学科理解、公民能力与伦理发展。它与单纯志愿服务或纯粹实习的区别在于课程整合与反思。",
    claims: [
      "反思是把服务经验转化为学习的关键环节，缺此则只是服务。",
      "服务须回应社区真实需要，并与课程目标形成互惠结构。",
      "服务学习同时指向学术目标与公民目标，二者不可相互替代。",
      "课程整合程度与持续时长决定学习质量。",
      "学生自主性与教师结构化支持需要平衡。",
    ],
    agreements: [
      "无结构化反思的服务不构成服务学习。",
      "互惠性影响社区伙伴关系的可持续性与伦理正当性。",
      "学生需要明确的任务边界与安全支持。",
    ],
    disagreements: [
      {
        topic: "服务经验能否替代系统讲授",
        sides: [
          { who: "dewey", view: "直接经验经反思可产生理解，服务提供比课堂更完整的经验情境。" },
          { who: "rosenshine", view: "新手缺乏先备图式，缺乏讲授与练习的服务易停留在表面体验。" },
        ],
        stake: "经验与讲授的先后顺序，决定服务学习是深化理解还是消耗课时。",
      },
      {
        topic: "服务学习是否固化施助者与受助者的权力关系",
        sides: [
          { who: "westheimer", view: "设计得当的服务能培养公共理性与正义取向的公民行动。" },
          { who: "freire", view: "未经批判意识化的服务易沦为慈善施予，固化施助者与受助者的不平等。" },
        ],
        stake: "服务究竟挑战还是再生产社会等级，取决于是否处理权力与结构分析。",
      },
    ],
    evidence: [
      { text: "Dewey, J. 《Experience and Education》(1938)", doi: null },
      { text: "Eyler, J. & Giles, D. 《Where's the Learning in Service-Learning?》(1999)", doi: null },
      { text: "Furco, A. 《Service-learning: A balanced approach to experiential education》(1996)", doi: null },
    ],
    applications: [
      "中学社区服务课程与公民科单元目标对齐，配以每周反思写作。",
      "医学人文与社区实习要求学生分析服务对象的健康社会决定因素。",
      "大学社会实践学分以社区伙伴需求书与成果汇报作为评价证据。",
      "环境教育行动项目把监测数据交给社区用于决策。",
    ],
    terms: [
      { t: "服务学习", en: "service learning", d: "把社区服务与课程目标通过结构化反思结合的教与学方式。" },
      { t: "结构化反思", en: "structured reflection", d: "有计划地回看服务经验，并与课程概念建立联系的活动。" },
      { t: "互惠性", en: "reciprocity", d: "服务者与社区双方均获益并共同界定任务的关系原则。" },
      { t: "社区伙伴", en: "community partner", d: "参与设计、实施与评价的社区组织或居民代表。" },
    ],
  },

  /* ── 学习科学 ── */
  E115: {
    definition: "学习科学形成于 1990 年代，索耶 2006 年主编的《剑桥学习科学手册》是其标志性综述。该领域以设计为基础，跨认知科学、教育心理学、计算机科学与人类学，研究真实情境中的深层学习，主张从实验室的记忆实验转向对学习环境、工具与互动的系统设计。",
    claims: [
      "研究应在真实学习情境中进行，并以设计干预世界而非仅描述它。",
      "深层学习要求建构可迁移的理解，而非记住孤立事实。",
      "学习是社会的、情境的与互动的过程，不能只建模为个体加工。",
      "设计、实施与理论产出应同步迭代，形成闭环。",
      "技术应重构学习活动与参与结构，而非仅传递内容。",
    ],
    agreements: [
      "先前知识是新学习最重要的起点。",
      "元认知与自我调节是可教的核心能力。",
      "视频、日志与多模态数据能揭示过程性学习，弥补仅看结果的不足。",
    ],
    disagreements: [
      {
        topic: "设计研究能否提供因果证据",
        sides: [
          { who: "brown_ann", view: "在真实课堂迭代设计，可同时产出局部理论与可行方案，因果通过多重证据链确立。" },
          { who: "slavin", view: "只有随机对照与可复制效应才能排除选择偏差，设计研究易把改进误当证据。" },
        ],
        stake: "证据标准之争决定学习科学成果能否进入政策层面的有效实践清单。",
      },
      {
        topic: "设计原则能否规模化",
        sides: [
          { who: "sawyer", view: "学习科学提供的是需情境化实施的设计原则，而非可照搬的固定程序。" },
          { who: "fullan", view: "规模化取决于系统能力与问责安排，单点设计难以自行扩散。" },
        ],
        stake: "若原则必须重设计，规模化成本被低估，改革易停留在示范校。",
      },
    ],
    evidence: [
      { text: "Sawyer, R. K. (ed.) 《The Cambridge Handbook of the Learning Sciences》(2006)", doi: null },
      { text: "Brown, A. 《Design experiments: Theoretical and methodological challenges in creating complex interventions in classroom settings》(1992)，Journal of the Learning Sciences", doi: null },
      { text: "National Research Council 《How People Learn: Brain, Mind, Experience, and School》(2000)", doi: null },
    ],
    applications: [
      "课堂设计研究以迭代课例同时改进教学与提炼原则。",
      "教师与研究者组成协作团队，共同分析过程数据。",
      "教育产品以学习进程模型指导功能迭代。",
      "学习环境评估关注参与结构而非仅后测分数。",
    ],
    terms: [
      { t: "学习科学", en: "the learning sciences", d: "以设计为基础、跨学科研究真实情境中深层学习的领域。" },
      { t: "深层学习", en: "deep learning", d: "形成可迁移理解与灵活运用的学习，区别于表层记忆。" },
      { t: "设计实验", en: "design experiment", d: "在真实情境中迭代设计干预并同步提炼理论的研究方法。" },
      { t: "学习环境", en: "learning environment", d: "由任务、工具、参与者与规范共同构成的学习支持系统。" },
    ],
  },

  E116: {
    definition: "波斯纳、斯特赖克、休森与格茨罗格 1982 年提出概念转变的经典模型：学习者原有概念要被替换，须满足对旧概念不满意、新概念可理解、合理且富有成效四个条件。该理论解释了学生为何在教学中仍保留直觉性错误概念，并推动了关于错误概念性质、转变机制与教学策略的大量研究。",
    claims: [
      "学生带着系统化的原有概念进入课堂，而非空白容器。",
      "概念转变不是信息添加，而是概念框架或本体类别的重组。",
      "不满意、可理解、合理与富有成效是转变的必要条件。",
      "认知冲突与元认知监控可促成学习者主动放弃旧概念。",
      "部分错误概念以碎片化知识而非连贯理论的形式存在。",
    ],
    agreements: [
      "原有概念会干扰新知识的编码与提取，须被显性处理。",
      "仅告知正确答案不足以引发转变，需处理其合理性判断。",
      "认知冲突应控制在可理解范围内，过强会引发回避。",
    ],
    disagreements: [
      {
        topic: "错误概念是连贯理论还是碎片化知识",
        sides: [
          { who: "posner", view: "错误概念构成有结构的框架，转变需整体替换其核心假设。" },
          { who: "迪塞萨", view: "学生知识由大量现象学原语碎片构成，转变是逐步重组而非理论更替。" },
        ],
        stake: "若知识是碎片化的，以整体框架替换为目标的教学设计就会失效。",
      },
      {
        topic: "概念转变是否只需认知条件",
        sides: [
          { who: "posner", view: "四条件刻画了理性层面的转变机制，教学应围绕其设计。" },
          { who: "平特里奇", view: "动机、情感与课堂目标结构决定学生是否愿意投入转变，冷认知模型不足。" },
        ],
        stake: "忽视动机会使概念转变教学在低投入学生身上系统性失效。",
      },
    ],
    evidence: [
      { text: "Posner, G., Strike, K., Hewson, P. & Gertzog, W. 《Accommodation of a scientific conception: Toward a theory of conceptual change》(1982)，Science Education", doi: null },
      { text: "Vosniadou, S. & Brewer, W. 《Mental models of the earth: A study of conceptual change in childhood》(1992)，Cognitive Psychology", doi: null },
      { text: "diSessa, A. 《Toward an epistemology of physics》(1993)，Cognition and Instruction", doi: null },
    ],
    applications: [
      "物理与生物课前使用前概念诊断题，据此设计冲突情境。",
      "教师培训中分析学生对力、光合作用与进化的典型错误框架。",
      "课程顺序安排先暴露直觉冲突，再引入形式化表述。",
      "科学论证任务要求学生比较旧解释与新解释的预测力。",
    ],
    terms: [
      { t: "错误概念", en: "misconception", d: "与学科共识冲突、却在日常经验中稳固有效的直觉性理解。" },
      { t: "认知冲突", en: "cognitive conflict", d: "新证据与原有预期不一致所引发的失衡状态。" },
      { t: "概念生态", en: "conceptual ecology", d: "影响概念取舍的既有知识、信念与认识论标准的整体。" },
      { t: "本体类别", en: "ontological category", d: "概念所属的基本存在类型，错误归类会阻碍转变。" },
    ],
  },

  E117: {
    definition: "具身认知主张认知并非脱离身体的符号运算，而依赖身体形态、感觉运动系统与环境的耦合。威尔逊 2002 年《具身认知的六个观点》梳理了从「认知即情境行动」到「离线认知仍依赖身体」的多种立场。在教育中，它被用于解释手势、操作材料与身体参与对概念理解的作用。",
    claims: [
      "认知活动依赖身体与环境的实时耦合，而非纯颅内运算。",
      "抽象概念部分植根于感觉运动经验与身体图式。",
      "手势与身体动作参与意义的生成、表达与提取。",
      "认知不是脱离情境的符号操作，环境结构构成任务的一部分。",
      "身体经验的文化差异会塑造概念隐喻的形态。",
    ],
    agreements: [
      "操作材料与手势能支持数学与科学概念的建立。",
      "身体姿态、呼吸与情绪状态影响认知表现。",
      "环境中的结构可作为认知任务的延伸。",
    ],
    disagreements: [
      {
        topic: "身体是认知的基础还是伴随现象",
        sides: [
          { who: "wilson_m", view: "感觉运动经验构成概念表征的组成部分，身体不是可替换的输出端。" },
          { who: "anderson_j", view: "核心认知仍可由抽象符号加工解释，身体活动多为外围例证。" },
        ],
        stake: "若身体只是伴随物，具身教学就难以主张超出一般直观教学的效果。",
      },
      {
        topic: "具身教学效应的稳健性",
        sides: [
          { who: "wilson_m", view: "身体参与能减轻抽象符号的负担，为理解提供可感的锚点。" },
          { who: "pashler", view: "从实验室效应到课堂建议存在跳跃，额外动作常只增加负荷而无学习收益。" },
        ],
        stake: "效应是否依赖具体设计，决定具身原则能否成为通用教学建议。",
      },
    ],
    evidence: [
      { text: "Wilson, M. 《Six views of embodied cognition》(2002)，Psychonomic Bulletin & Review", doi: null },
      { text: "Barsalou, L. 《Grounded cognition》(2008)，Annual Review of Psychology", doi: null },
      { text: "Goldin-Meadow, S. 《Hearing Gesture: How Our Hands Help Us Think》(2003)", doi: null },
    ],
    applications: [
      "小学数学以实物操作与手势解释分数、等量与负数。",
      "科学课用身体模拟分子运动、板块构造与电流方向。",
      "语言学习以动作编码配合词汇与句式记忆。",
      "特殊教育以感觉运动活动支持概念学习与注意力调节。",
    ],
    terms: [
      { t: "具身认知", en: "embodied cognition", d: "主张认知依赖身体与环境的理论取向，反对离身符号观。" },
      { t: "感觉运动经验", en: "sensorimotor experience", d: "由感知与动作产生的经验，被视为概念的基础材料。" },
      { t: "概念隐喻", en: "conceptual metaphor", d: "以身体经验为源域理解抽象概念的结构映射。" },
      { t: "手势", en: "gesture", d: "伴随言语的手部动作，既反映也参与思维组织。" },
    ],
  },

  E118: {
    definition: "设计研究（设计实验）由布朗与柯林斯于 1992 年分别提出，主张在真实课堂中迭代设计干预，并同步产出局部理论与可用的设计原则。它回应传统实验研究与实践脱节的问题，以设计、实施、分析、再设计的循环处理多变量、情境化的学习环境。",
    claims: [
      "研究应在真实情境中进行，并以设计介入而非仅观察。",
      "理论产出应是情境化的、可操作的局部理论，而非普适定律。",
      "迭代循环使设计假设在实践中被检验、修正与再表述。",
      "量化、质性与日志证据需三角互证，以解释复杂结果。",
      "研究成果包括设计原则、可用方案与实践者的专业理解。",
    ],
    agreements: [
      "教育干预的复杂性与情境依赖必须被正面处理。",
      "研究者与实践者的长期协作是必要条件。",
      "过程数据对解释结果为何出现不可或缺。",
    ],
    disagreements: [
      {
        topic: "设计研究能否确立因果",
        sides: [
          { who: "brown_ann", view: "多重证据链与迭代对照可在真实课堂中支撑因果推断与实践理论。" },
          { who: "slavin", view: "缺乏随机分配时选择与实施偏差难以排除，因果结论应留给对照实验。" },
        ],
        stake: "证据层级之争决定设计研究能否影响政策对有效实践的认定。",
      },
      {
        topic: "设计原则能否跨情境外推",
        sides: [
          { who: "brown_ann", view: "原则在提炼后可在同类情境中迁移，并随实施条件调整。" },
          { who: "卡特赖特", view: "效应高度依赖情境，跨情境外推需说明支持因素，不能默认成立。" },
        ],
        stake: "若外推需逐案论证，设计研究的可累积性与其政策价值就受限。",
      },
    ],
    evidence: [
      { text: "Brown, A. 《Design experiments: Theoretical and methodological challenges in creating complex interventions in classroom settings》(1992)，Journal of the Learning Sciences", doi: null },
      { text: "Collins, A. 《Toward a design science of education》(1992)", doi: null },
      { text: "Design-Based Research Collective 《Design-based research: An emerging paradigm for educational inquiry》(2003)，Educational Researcher", doi: null },
    ],
    applications: [
      "课堂干预的多轮迭代，每轮依据视频与作业证据修订设计。",
      "教育技术产品与学校共同开发，按真实使用数据迭代。",
      "教师专业发展项目以设计循环嵌入校本改进。",
      "课程改革试点以小规模设计与跨校复制逐步推进。",
    ],
    terms: [
      { t: "设计研究", en: "design-based research", d: "在真实情境中迭代设计干预并提炼情境化理论的研究取向。" },
      { t: "设计实验", en: "design experiment", d: "设计研究与教学实施结合的具体研究形式。" },
      { t: "局部理论", en: "local theory", d: "限定于特定情境与条件、可直接指导设计的理论表述。" },
      { t: "设计原则", en: "design principle", d: "从多轮迭代中提炼、可指导同类环境设计的条件性陈述。" },
    ],
  },

  E119: {
    definition: "计算机支持的协作学习（CSCL）形成于 1990 年代中期，科施曼 1996 年编《CSCL：新兴范式的理论与实践》标志其独立。它关注技术中介下群体如何共同建构意义，以共享表征、共同知识对象与对话过程为分析单位，区别于以个体成绩为终点的计算机辅助教学。",
    claims: [
      "协作学习的分析单位是群体意义建构，而非个体得分之和。",
      "技术提供共享表征空间，使协作对象可被共同查看与修改。",
      "共同知识对象是协作的焦点，其质量影响互动深度。",
      "对话与论证的结构反映协作质量，应被纳入评价。",
      "评价需捕捉群体过程与个体贡献，而非仅看后测。",
    ],
    agreements: [
      "积极互赖与个人责任仍是有效协作的设计基础。",
      "角色分配与协作脚本能改善互动结构。",
      "群体过程需要可视化与教师引导，难以自发优化。",
    ],
    disagreements: [
      {
        topic: "应以群体过程还是个体成绩评价协作",
        sides: [
          { who: "koschmann", view: "CSCL 的核心成果是群体意义建构，评价应聚焦共同知识与对话质量。" },
          { who: "slavin", view: "须以个体可问责的学业成绩检验，否则搭便车与能力差异会被掩盖。" },
        ],
        stake: "评价单位的选择会反向塑造任务设计，决定个体责任是否被保留。",
      },
      {
        topic: "技术是否真正改变了互动质量",
        sides: [
          { who: "koschmann", view: "技术中介创造新的共享表征与协作形式，使某些对话成为可能。" },
          { who: "selwyn", view: "多数平台只复制既有课堂结构，互动质量由任务与教师决定。" },
        ],
        stake: "若技术只是容器，投入平台的资源应转向任务设计与教师能力。",
      },
    ],
    evidence: [
      { text: "Koschmann, T. (ed.) 《CSCL: Theory and Practice of an Emerging Paradigm》(1996)", doi: null },
      { text: "Roschelle, J. & Teasley, S. 《The construction of shared knowledge in collaborative problem solving》(1995)", doi: null },
      { text: "Stahl, G. 《Group Cognition: Computer Support for Building Collaborative Knowledge》(2006)", doi: null },
    ],
    applications: [
      "协作编程平台以共享代码与评论记录支持群体调试。",
      "知识论坛以观点改进与 Rise Above 支架组织持续探究。",
      "在线讨论以角色脚本与论证模板提升对话质量。",
      "跨校协作探究以共享数据表与视频会议形成共同对象。",
    ],
    terms: [
      { t: "计算机支持的协作学习", en: "CSCL", d: "研究技术中介下群体共同建构意义的学习领域。" },
      { t: "共同知识对象", en: "joint knowledge object", d: "群体共同创建、修改并引用的知识与人工物。" },
      { t: "共享表征", en: "shared representation", d: "多名成员可同时查看、操作并达成一致理解的外部表征。" },
      { t: "协作脚本", en: "collaboration script", d: "预先设计的角色、步骤与话语提示，用以结构化协作。" },
    ],
  },

  E120: {
    definition: "知识追踪由科贝特与安德森于 1994 年提出，用隐变量模型估计学习者对每个知识成分的掌握概率，并随作答序列更新。它与教育数据挖掘共同构成从学习过程数据中提取模式、预测表现并驱动自适应推送的技术路径；贝叶斯知识追踪及其深度变体是典型代表。",
    claims: [
      "学习可被建模为知识成分掌握状态随练习变化的序列过程。",
      "每次作答都为掌握概率提供贝叶斯式更新证据。",
      "预测模型可驱动练习选择、提示与复习时机安排。",
      "模型精度需以交叉验证、跨群体与跨知识点检验评估。",
      "数据驱动的结论须与学习理论互证，否则难以解释。",
    ],
    agreements: [
      "练习序列与反馈方式影响掌握估计的稳定性。",
      "模型需显式处理猜测与失误，否则会高估或低估掌握。",
      "预测精度不等于教学解释力，两者需分别评估。",
    ],
    disagreements: [
      {
        topic: "掌握概率是否对应真实的心理状态",
        sides: [
          { who: "corbett", view: "掌握概率是可用于决策的潜在状态估计，随证据持续更新。" },
          { who: "siemens", view: "学习是情境化的社会过程，单一潜在变量难以代表真实理解。" },
        ],
        stake: "若潜变量只是统计拟合，其教学解释与标签使用就需严格限制。",
      },
      {
        topic: "预测精度是否等于教学价值",
        sides: [
          { who: "corbett", view: "更准确的掌握估计能优化练习安排与掌握学习判断。" },
          { who: "vanlehn", view: "辅导效果主要来自步骤级诊断与反馈内容，整体掌握概率的信息量有限。" },
        ],
        stake: "优化 AUC 与优化学习收益可能指向不同的模型设计目标。",
      },
    ],
    evidence: [
      { text: "Corbett, A. & Anderson, J. 《Knowledge tracing: Modeling the acquisition of procedural knowledge》(1994/1995)，User Modeling and User-Adapted Interaction", doi: null },
      { text: "Koedinger, K., Corbett, A. & Perfetti, C. 《The Knowledge-Learning-Instruction framework》(2012)，Cognitive Science", doi: null },
      { text: "Piech, C. 等 《Deep knowledge tracing》(2015)，NeurIPS", doi: null },
    ],
    applications: [
      "自适应练习系统按掌握概率调度题目与复习间隔。",
      "数学与语言技能诊断报告定位薄弱知识成分。",
      "学习预警系统识别长期低掌握的学生并触发干预。",
      "课程知识点图谱以掌握关系支持内容排布。",
    ],
    terms: [
      { t: "知识追踪", en: "knowledge tracing", d: "依据作答序列估计知识成分掌握状态的建模方法。" },
      { t: "贝叶斯知识追踪", en: "Bayesian knowledge tracing", d: "以四参数隐马尔可夫模型更新掌握概率的经典方法。" },
      { t: "知识成分", en: "knowledge component", d: "可被独立练习与测量的最小知识与技能单元。" },
      { t: "认知诊断", en: "cognitive diagnosis", d: "从作答模式推断具体技能掌握剖面的测量取向。" },
    ],
  },

  E121: {
    definition: "生成式人工智能与学习指以大语言模型等生成系统作为解释者、写作伙伴与对话式导师参与学习的研究与实践。2022 年后其能力跃升使随时可用的个别化解释成为现实，同时带来认知卸载、虚假胜任感、学术诚信与数据隐私问题；勒金等主张以教师与课程的 AI 就绪重构应对，而非简单禁用或拥抱。",
    claims: [
      "生成式系统可提供即时、多轮、多模态的解释与反馈，降低求助成本。",
      "过度依赖会诱发认知卸载，削弱自主推理与写作能力。",
      "流畅且自信的输出容易造成虚假胜任感，学习者高估自身理解。",
      "提示、追问与结果核验能力成为新的学习素养。",
      "评价方式须从结果转向过程证据与口头辩护。",
    ],
    agreements: [
      "生成内容存在事实错误、偏见与来源不明，需核验。",
      "教师的中介与任务设计决定收益大于风险还是相反。",
      "学术诚信需要任务设计与制度规范双重回应。",
    ],
    disagreements: [
      {
        topic: "生成式 AI 是脚手架还是认知卸载器",
        sides: [
          { who: "luckin", view: "设计得当的生成系统可作为对话式导师，扩展学习者的最近发展区。" },
          { who: "selwyn", view: "商业化工具强化答案获取，削弱写作与推理过程，收益被技术与商业叙事夸大。" },
        ],
        stake: "若收益依赖高度设计，普遍可得的工具可能在常规使用中净损害学习。",
      },
      {
        topic: "评价应转向 AI 协作还是回归受控考试",
        sides: [
          { who: "luckin", view: "评价应承认 AI 协作现实，考察提问、判断与整合的人机协同能力。" },
          { who: "道森", view: "若无受控条件与过程证据，难以确认学生独立能力，评价可信度将受损。" },
        ],
        stake: "评价改革若快于测量技术，文凭的能力信号功能可能被削弱。",
      },
    ],
    evidence: [
      { text: "Kasneci, E. 等 《ChatGPT for good? On opportunities and challenges of large language models for education》(2023)，Learning and Individual Differences", doi: null },
      { text: "Luckin, R. 等 《Empowering educators to be AI-ready》(2022)，Computers and Education: Artificial Intelligence", doi: null },
      { text: "Bastani, H. 等 《Generative AI can harm learning》(2024)，SSRN 工作论文", doi: null },
    ],
    applications: [
      "写作课以生成稿对比与修改说明作为过程性作业。",
      "语言学习以角色对话与即时纠错支持口语练习。",
      "教师用生成工具批量命制变式题并人工审校。",
      "学校开设 AI 素养课程，教授核验、引用与提示策略。",
    ],
    terms: [
      { t: "生成式人工智能", en: "generative AI", d: "能依据提示生成文本、图像等内容的模型系统。" },
      { t: "认知卸载", en: "cognitive offloading", d: "把本应由自己完成的认知加工转移给外部工具。" },
      { t: "虚假胜任感", en: "illusory competence", d: "因输出流畅而高估自身理解与能力的判断偏差。" },
      { t: "提示工程", en: "prompt engineering", d: "通过组织指令与示例引导模型输出的技巧。" },
      { t: "AI 素养", en: "AI literacy", d: "理解、使用、评估与批判 AI 系统所需的知识与能力。" },
    ],
  },

  /* ── 批判教育学 ── */
  E122: {
    definition: "批判性思维教学指以证据评估、论证识别、隐含假设分析与反例检验为核心的有意教学。恩尼斯 1989 年提出批判性思维倾向与能力的清单，并争论其是否领域特殊；1990 年德尔菲报告给出跨学科共识定义。教学路径包括独立课程、学科嵌入与全校整合三种。",
    claims: [
      "批判性思维包含能力与倾向两个维度，缺一不可。",
      "论证分析、证据评估与假设识别是可教的程序性技能。",
      "批判性思维需要领域知识支撑，不能凭空运作。",
      "教学应提供真实议题、对话机会与可反驳的反馈。",
      "评价应考察论证质量与推理过程，而非观点是否正确。",
    ],
    agreements: [
      "领域知识是批判思考的必要条件，专家比新手更易识别关键证据。",
      "对话与辩论能暴露推理漏洞并促进元认知。",
      "教师的提问方式与示范影响学生的思维倾向。",
    ],
    disagreements: [
      {
        topic: "批判性思维是通用技能还是领域特殊",
        sides: [
          { who: "ennis", view: "存在可跨学科迁移的批判思维原则与倾向，可作为教学目标独立表述。" },
          { who: "麦克佩克", view: "批判性思维内嵌于学科内容，脱离具体领域的通用训练无法迁移。" },
        ],
        stake: "若思维高度领域特殊，独立思维课程的时间应从学科教学中让渡吗。",
      },
      {
        topic: "独立思维课程是否有效",
        sides: [
          { who: "ennis", view: "显性教授论证规则与谬误识别，可提升跨情境的推理质量。" },
          { who: "威林厄姆", view: "脱离内容的思维训练效果有限，应以领域知识为基础嵌入教学。" },
        ],
        stake: "课程结构的选择，决定思维教学是增设科目还是改造学科教学。",
      },
    ],
    evidence: [
      { text: "Ennis, R. 《Critical thinking and subject specificity: Clarification and needed research》(1989)，Educational Researcher", doi: null },
      { text: "Facione, P. 《Critical Thinking: A Statement of Expert Consensus for Purposes of Educational Assessment and Instruction》(1990)，德尔菲报告", doi: null },
      { text: "Abrami, P. 等 《Strategies for teaching students to think critically: A meta-analysis》(2015)，Review of Educational Research", doi: null },
    ],
    applications: [
      "议论文读写课以论证地图与反例检验组织修改。",
      "科学课讨论社会性科学议题，要求区分证据与推断。",
      "大学通识课以结构化辩论训练证据评估。",
      "教师培训聚焦追问技巧与课堂话语模式。",
    ],
    terms: [
      { t: "批判性思维", en: "critical thinking", d: "有目的地判断证据与论证质量的反思性思维。" },
      { t: "倾向", en: "disposition", d: "愿意质疑、寻求证据并开放修正的态度习惯。" },
      { t: "论证分析", en: "argument analysis", d: "识别主张、理由、隐含前提与推理形式的过程。" },
      { t: "领域特殊", en: "domain specificity", d: "能力只在特定知识领域内成立、难以普遍迁移的性质。" },
    ],
  },

  E123: {
    definition: "多元文化教育主张学校课程、教学与制度应以文化多样性为前提并促进教育公平。班克斯 1993 年提出五维框架：内容整合、知识建构、偏见削减、公平教学法与赋权性学校文化。其目标从个别学生的态度改变，扩展到学校结构与知识观的改造。",
    claims: [
      "课程内容应整合多元族群的经验、视角与贡献。",
      "知识建构过程本身受文化立场与权力关系影响。",
      "偏见需通过持续干预与接触经验削减，而非单次活动。",
      "教学法应确保不同群体学生获得实质学习机会。",
      "学校文化与制度须支持多元身份并维持高期望。",
    ],
    agreements: [
      "教材中的刻板印象会影响学生的自我认知与同伴期待。",
      "教师期望存在群体差异，并通过互动影响成绩。",
      "多元文化教育需要制度支持，仅增补课时难以奏效。",
    ],
    disagreements: [
      {
        topic: "多元文化教育是否瓦解共同文化",
        sides: [
          { who: "banks", view: "承认多元文化并培养共同公民身份可以并行，二者并不冲突。" },
          { who: "施莱辛格", view: "过度强调族群差异会削弱共享政治文化，导致社会分裂。" },
        ],
        stake: "课程应突出差异还是共同性，关系到多元社会的整合基础。",
      },
      {
        topic: "文化多样性与共同知识的关系",
        sides: [
          { who: "banks", view: "以多元视角重构共同知识，使其更具包容性与解释力。" },
          { who: "赫希", view: "共同知识是平等交流的前提，课程应保证所有学生掌握文化常识。" },
        ],
        stake: "若共同知识本身带有排他性，公平应靠扩展还是靠保障既有内容实现。",
      },
    ],
    evidence: [
      { text: "Banks, J. 《Approaches to multicultural curriculum reform》(1993)，在《Multicultural Education: Issues and Perspectives》中", doi: null },
      { text: "Banks, J. & Banks, C. (eds.) 《Handbook of Research on Multicultural Education》(2004, 2nd ed.)", doi: null },
      { text: "Schlesinger, A. 《The Disuniting of America: Reflections on a Multicultural Society》(1991)", doi: null },
    ],
    applications: [
      "教材审查以族群刻板印象与视角缺失为指标。",
      "移民学生融入项目同时支持母语与文化身份。",
      "开设族群研究选修课并纳入跨学科主题。",
      "教师多元文化素养培训结合课堂话语分析。",
    ],
    terms: [
      { t: "内容整合", en: "content integration", d: "在课程材料中纳入多元族群的经验与视角。" },
      { t: "知识建构", en: "knowledge construction", d: "帮助学生理解学科知识如何受文化立场与假设影响。" },
      { t: "偏见削减", en: "prejudice reduction", d: "通过接触与合作经验改变刻板印象与歧视态度。" },
      { t: "赋权性学校文化", en: "empowering school culture", d: "制度与文化层面支持多元群体取得成就的学校环境。" },
    ],
  },

  E124: {
    definition: "女性主义教育学关注课堂中的性别权力关系，主张以关怀、关系与经验替代控制与客观化，并质疑「中立知识」的性别编码。诺丁斯 1984 年《关怀》从伦理维度奠定基础；1990 年代后与批判教育学、后结构主义结合，关注交叉性与师生角色的重构。",
    claims: [
      "课堂中的知识权威与发言机会分布带有性别模式。",
      "关怀关系是教学伦理的基础，优先于规则与效率。",
      "学生的个人经验应成为知识建构的合法资源。",
      "教师应减少控制、增加对话与相互性。",
      "所谓客观中立的知识标准本身需被审视。",
    ],
    agreements: [
      "性别化的参与模式影响课堂话语机会与学科认同。",
      "关系性支持影响女生在 STEM 领域的持续意愿。",
      "教师的自我反省是改变课堂权力结构的前提。",
    ],
    disagreements: [
      {
        topic: "以关怀为核心是否强化性别角色",
        sides: [
          { who: "noddings", view: "关怀是普遍的人类伦理取向，不应被本质化为女性专属特质。" },
          { who: "胡克斯", view: "把关怀置于教学中心若不分拆权力，会使女性再次被绑定于照料角色。" },
        ],
        stake: "关怀伦理究竟是解放资源，还是对性别分工的温和再确认。",
      },
      {
        topic: "课堂权力能否被真正平均分配",
        sides: [
          { who: "noddings", view: "以关系、信任与对话替代控制，可在课堂内形成非支配性的权威。" },
          { who: "freire", view: "不触及制度与阶级结构的关怀，容易成为温和的规训而非解放。" },
        ],
        stake: "微观关系改造能否替代结构变革，是批判教育学对关怀取向的核心质疑。",
      },
    ],
    evidence: [
      { text: "Noddings, N. 《Caring: A Feminine Approach to Ethics and Moral Education》(1984)", doi: null },
      { text: "Noddings, N. 《The Challenge to Care in Schools: An Alternative Approach to Education》(1992)", doi: null },
      { text: "hooks, b. 《Teaching to Transgress: Education as the Practice of Freedom》(1994)", doi: null },
    ],
    applications: [
      "课堂话语分析用于均衡性别与族群的发言机会。",
      "导师制强调关系连续性而非仅学业指导。",
      "STEM 教学采用合作任务与女性榜样降低刻板威胁。",
      "教师伦理培训以关怀与权力反思为核心议题。",
    ],
    terms: [
      { t: "关怀伦理", en: "ethics of care", d: "以关系、回应与责任而非抽象规则为道德基础的伦理取向。" },
      { t: "相互性", en: "mutuality", d: "关怀关系中双方都被承认并有所获得的性质。" },
      { t: "立场理论", en: "standpoint theory", d: "边缘位置可能提供更完整社会认知的知识论主张。" },
      { t: "解放性教学", en: "engaged pedagogy", d: "把师生共同成长与批判意识纳入教学目标的实践。" },
    ],
  },

  E125: {
    definition: "莱德森-比林斯 1995 年提出文化相关教学，主张把学生的文化经验作为学习资源，同时保持高期望与学术严谨。它区别于仅调整教材表层的文化附加，强调教师对社区文化的理解、批判意识与文化能力，并要求学业成功、文化能力与批判意识三者并重。",
    claims: [
      "学业成功不应以牺牲学生的文化认同为代价。",
      "学生社区的文化实践可作为通往学科概念的桥梁。",
      "教师需具备文化能力与批判意识，而非仅掌握教学技巧。",
      "高期望与文化回应并不矛盾，二者互为条件。",
      "文化回应是教学取向，不是可勾选的活动清单。",
    ],
    agreements: [
      "教师对社区文化的理解影响课堂互动与提问质量。",
      "课程与学生经验脱节会显著降低参与度。",
      "一次性的文化庆祝活动难以改变学业结果。",
    ],
    disagreements: [
      {
        topic: "文化回应是否优于通用有效教学",
        sides: [
          { who: "ladson_billings", view: "通用方法忽视文化中介，须以学生文化经验重构教学内容与关系。" },
          { who: "rosenshine", view: "结构化讲授、练习与反馈是有效教学核心，文化适配属次要调节变量。" },
        ],
        stake: "若通用方法已足够，文化回应可能被视为额外负担而非质量要素。",
      },
      {
        topic: "文化回应的证据基础",
        sides: [
          { who: "ladson_billings", view: "文化回应是情境化的伦理实践，其价值不能化约为单一效应量。" },
          { who: "hattie", view: "需以可比较的效应证据判断干预优先级，否则难以进入资源分配。" },
        ],
        stake: "方法论差异使文化回应难以进入证据本位改革的核心清单。",
      },
    ],
    evidence: [
      { text: "Ladson-Billings, G. 《Toward a theory of culturally relevant pedagogy》(1995)，American Educational Research Journal", doi: null },
      { text: "Ladson-Billings, G. 《The Dreamkeepers: Successful Teachers of African American Children》(2009, 2nd ed.)", doi: null },
      { text: "Gay, G. 《Culturally Responsive Teaching: Theory, Research, and Practice》(2010, 2nd ed.)", doi: null },
    ],
    applications: [
      "城市学校以社区访谈与本地文本重构阅读单元。",
      "原住民与少数民族地区课程纳入本地语言与知识实践。",
      "教师培训以课堂案例反思文化假设与期望。",
      "双语课堂以学生家庭语言资源支持概念学习。",
    ],
    terms: [
      { t: "文化相关教学", en: "culturally relevant pedagogy", d: "以学生文化经验为资源、兼顾学业与文化认同的教学取向。" },
      { t: "文化能力", en: "cultural competence", d: "理解并有效回应不同文化背景学生的知识与能力。" },
      { t: "批判意识", en: "critical consciousness", d: "识别并质疑社会不平等结构并采取行动的意向与能力。" },
      { t: "文化回应", en: "culturally responsive", d: "教学在内容、互动与评价上回应学生文化背景的性质。" },
    ],
  },

  E126: {
    definition: "公民教育培养参与公共事务所需的知识、审议能力与民主品格。韦斯特海默与卡恩 2004 年区分三种公民观：个人责任型、参与型与正义取向型，指出课程设计隐含不同的政治理想。公共理性传统则要求以他人可接受的理由进行公共论证，构成审议式公民教育的规范基础。",
    claims: [
      "公民教育的目标不止于守法、纳税与志愿服务。",
      "审议能力需在真实公共议题的讨论中练习，而非背诵制度条文。",
      "学校治理本身即公民教育的隐性课程。",
      "公民教育必然包含价值判断，宣称价值中立本身就是一种立场。",
      "正义取向公民教育鼓励学生质疑并改善结构性问题。",
    ],
    agreements: [
      "知识、技能与品格需同时培养，不能相互替代。",
      "讨论争议议题能提升政治效能感与参与意愿。",
      "学校氛围与师生关系影响公民态度的内化。",
    ],
    disagreements: [
      {
        topic: "正义取向公民教育是否滑向政治动员",
        sides: [
          { who: "westheimer", view: "公民教育应培养学生识别不公并采取集体行动的能力。" },
          { who: "施莱辛格", view: "学校应传递共享政治文化，行动主义易被派系立场绑架。" },
        ],
        stake: "公民教育的边界在于培养批判公民，还是维持共同体的基本共识。",
      },
      {
        topic: "公共理性是否要求悬置整全性信念",
        sides: [
          { who: "westheimer", view: "课堂应让学生带完整经验入场，并练习在差异中协商公共行动。" },
          { who: "rawls", view: "公共论证须以各方可接受的理由为依据，应克制以整全学说作为理由。" },
        ],
        stake: "若要求悬置深层信念，公民教育可能压制的正是学生最真实的政治自我。",
      },
    ],
    evidence: [
      { text: "Westheimer, J. & Kahne, J. 《What kind of citizen? The politics of educating for democracy》(2004)，American Educational Research Journal", doi: null },
      { text: "Hess, D. & McAvoy, P. 《The Political Classroom: Evidence and Ethics in Democratic Education》(2015)", doi: null },
      { text: "Rawls, J. 《Political Liberalism》(1993)", doi: null },
    ],
    applications: [
      "社会科以争议议题讨论与听证模拟组织单元。",
      "学生自治与校规共建作为公民实践的真实场景。",
      "服务学习加入结构分析与政策建议环节。",
      "模拟联合国与社区议事会培养审议与妥协技能。",
    ],
    terms: [
      { t: "公民参与", en: "civic engagement", d: "参与公共事务、社区治理与集体决策的意愿与行动。" },
      { t: "审议", en: "deliberation", d: "在分歧中交换理由、权衡取舍并寻求可接受方案的过程。" },
      { t: "公共理性", en: "public reason", d: "以他人可接受的理由进行公共论证的规范要求。" },
      { t: "政治效能感", en: "political efficacy", d: "个体相信自己能理解并影响政治过程的感受。" },
    ],
  },

  E127: {
    definition: "伊里奇 1971 年《去学校化社会》主张，学校已把教育等同于证书消费与制度性照护，反而阻碍学习；应废除强制 schooling，以学习网络提供物品、榜样、同伴与教育者四类资源，使学习回到自主选择与社会关系之中。该批判与赖默《学校已死》共同构成 1970 年代激进教育批判。",
    claims: [
      "学校制度把学习异化为证书交换与年龄分层的管理。",
      "制度化教育掩盖了非正式学习与自主探究的能力。",
      "学习需要可自由接入的资源网络，而非课程垄断。",
      "教师应作为资源提供者与协作者，而非权威守门人。",
      "强制 schooling 与教育本身不是同义词。",
    ],
    agreements: [
      "学校组织的隐性功能常优先于学习本身。",
      "证书膨胀未必提升真实能力，却加剧竞争。",
      "非正式学习网络具有重要的教育价值。",
    ],
    disagreements: [
      {
        topic: "学校能否被学习网络取代",
        sides: [
          { who: "illich", view: "学习网络可提供更平等、更自主的教育机会，学校制度应予废除。" },
          { who: "dewey", view: "学校是组织经验、传递共同文化与练习民主的必要制度形式。" },
        ],
        stake: "学校是可有可无的垄断机构，还是民主社会不可替代的教育制度。",
      },
      {
        topic: "去学校化是否伤害弱势学生",
        sides: [
          { who: "illich", view: "现行学校以证书壁垒排斥多数人，网络化才能让资源真正开放。" },
          { who: "darling_hammond", view: "公共学校仍是弱势学生获得资源与机会的主要渠道，取消会加剧不平等。" },
        ],
        stake: "在教育资源本已不均的社会，废校是解放还是把风险转嫁给最弱者。",
      },
    ],
    evidence: [
      { text: "Illich, I. 《Deschooling Society》(1971)", doi: null },
      { text: "Reimer, E. 《School is Dead: Alternatives in Education》(1971)", doi: null },
      { text: "Illich, I. 《Tools for Conviviality》(1973)", doi: null },
    ],
    applications: [
      "非制度化学习社区与自学网络的实践探索。",
      "开放教育资源与技能认证改革讨论。",
      "社区技能交换与导师网络的制度建设。",
      "对强制出勤与学校垄断的公共政策辩论。",
    ],
    terms: [
      { t: "去学校化", en: "deschooling", d: "主张废除强制学校教育、以学习网络替代的制度批判。" },
      { t: "学习网络", en: "learning web", d: "让学习者自由接入物品、榜样、同伴与教育者的资源系统。" },
      { t: "制度化", en: "institutionalization", d: "把社会功能固化为专门组织与资格壁垒的过程。" },
      { t: "共生性", en: "conviviality", d: "工具与制度尊重人的自主与相互依赖的性质。" },
    ],
  },

  /* ── 比较与全球教育 ── */
  E128: {
    definition: "比较教育方法论研究如何跨国家、跨文化地比较教育现象。布雷与托马斯 1995 年提出多层比较框架，涵盖世界、国家、地区、学校、课堂与个体层次；2007 年《比较教育研究方法》系统整理研究路径。其核心难题是分析单位的选择、语境的可比性与别国经验的可移植性。",
    claims: [
      "比较必须明确分析单位与比较层次，否则结论无法对应。",
      "语境差异使直接移植他国政策风险极高。",
      "量化指标与质性解释需互补，单一方法易误读。",
      "研究者自身的理论立场影响比较框架的构造。",
      "政策借用常是政治过程，而非中性技术选择。",
    ],
    agreements: [
      "单一国家的经验不能直接推广为普遍规律。",
      "指标体系的选择本身包含价值判断与理论预设。",
      "历史与制度脉络是比较研究的必要背景。",
    ],
    disagreements: [
      {
        topic: "比较的基本单位是民族国家还是全球系统",
        sides: [
          { who: "bray", view: "应明确多层分析单位，并处理层次间的交互，避免以国家为唯一边界。" },
          { who: "meyer_j", view: "民族国家教育体系受世界社会模型塑造，比较应以全球制度扩散为单位。" },
        ],
        stake: "分析单位不同，会把相似的趋同现象解释为不同机制的结果。",
      },
      {
        topic: "政策借用的语境适配是实质还是修辞",
        sides: [
          { who: "bray", view: "须系统评估语境差异并做本土化调整，否则移植必然失败。" },
          { who: "施泰纳-哈姆西", view: "借用在政治上常以「外部化」为改革授权，语境论证多服务于合法性。" },
        ],
        stake: "若适配只是修辞，比较研究应更多分析借用的政治经济学而非技术方案。",
      },
    ],
    evidence: [
      { text: "Bray, M. & Thomas, R. 《Levels of comparison in educational studies: Different insights from different literatures and the value of multilevel analyses》(1995)，Harvard Educational Review", doi: null },
      { text: "Bray, M., Adamson, B. & Mason, M. (eds.) 《Comparative Education Research: Approaches and Methods》(2007)", doi: null },
      { text: "Steiner-Khamsi, G. (ed.) 《The Global Politics of Educational Borrowing and Lending》(2004)", doi: null },
    ],
    applications: [
      "国际教育政策比较研究报告的方法设计。",
      "课程改革借鉴中的语境评估与本土化改造。",
      "跨国办学与留学项目的质量比较。",
      "教育指标国际比较中的构念等值检验。",
    ],
    terms: [
      { t: "分析单位", en: "unit of analysis", d: "比较研究所选取的实体层次，如国家、地区或学校。" },
      { t: "政策借用", en: "policy borrowing", d: "把他国政策理念或制度安排引入本国改革的过程。" },
      { t: "语境化", en: "contextualization", d: "把教育现象置于其历史、制度与文化背景中解释。" },
      { t: "多层比较", en: "multilevel comparison", d: "在不同层次同时比较并分析层次间交互的方法。" },
    ],
  },

  E129: {
    definition: "PISA 由 OECD 自 2000 年起每三年实施，以统一框架测评 15 岁学生的阅读、数学与科学素养，并通过排名与指标参与全球教育治理。迈耶与贝纳沃特 2013 年指出，PISA 已不只是测评工具，而是塑造政策议程、课程目标与国家改革话语的治理机制。",
    claims: [
      "国际测评通过排名与同行对照重塑各国政策优先序。",
      "指标化使复杂的教育目标被可测量维度替代。",
      "参与国形成跨国政策学习、模仿与话语趋同。",
      "测评框架隐含特定的素养观与课程取向。",
      "排名压力可能诱发应试化、补习扩张与课程窄化。",
    ],
    agreements: [
      "PISA 提升了许多国家对学习结果与公平差异的关注。",
      "排名常被媒体与政治话语简化使用，脱离测量不确定性。",
      "测评的构念效度与跨语言等值需持续检验。",
    ],
    disagreements: [
      {
        topic: "PISA 是诊断工具还是课程扭曲源",
        sides: [
          { who: "meyer_j", view: "PISA 以排名与指标重塑政策议程，使课程目标向可测维度收缩。" },
          { who: "oecd", view: "PISA 提供可比证据，帮助各国识别薄弱环节并改进教学质量。" },
        ],
        stake: "同一套数据被用于诊断还是排名，决定其对课程的实际影响方向。",
      },
      {
        topic: "排名能否驱动真实改进",
        sides: [
          { who: "meyer_j", view: "排名政治化后，改革重心转向指标表现而非学习质量本身。" },
          { who: "fullan", view: "外部问责若与能力建设结合，可转化为系统改进的动力。" },
        ],
        stake: "问责与支持的配比，决定测评压力是促进还是扭曲学校实践。",
      },
    ],
    evidence: [
      { text: "OECD 《PISA 2018 Results (Volume I): What Students Know and Can Do》(2019)", doi: null },
      { text: "Meyer, H.-D. & Benavot, A. (eds.) 《PISA, Power, and Policy: The Emergence of Global Educational Governance》(2013)", doi: null },
      { text: "Hopmann, S. 《No child, no school, no state left behind: Schooling in the age of accountability》(2008)，Journal of Curriculum Studies", doi: null },
    ],
    applications: [
      "国家课程与评价改革中对国际指标的批判性解读。",
      "教师评价素养培训，识别排名与抽样的局限。",
      "教育政策比较研究中的指标政治分析。",
      "区域教育质量监测避免照搬国际框架。",
    ],
    terms: [
      { t: "全球教育治理", en: "global education governance", d: "由国际组织、指标与比较机制协调各国教育政策的格局。" },
      { t: "指标治理", en: "governance by indicators", d: "以量化指标替代直接指令来引导组织行为的治理方式。" },
      { t: "为测评而教", en: "teaching to the test", d: "教学范围与形式被测评内容反向决定的现象。" },
      { t: "排名表", en: "league table", d: "把测评结果简化为名次以供比较与舆论使用的呈现方式。" },
    ],
  },

  E130: {
    definition: "教育全球化指资本、人才、标准与话语的跨境流动对国家教育体系的重新塑造；国际化则指院校与系统层面有意识的策略，如学生流动、课程国际化与跨国合作。卡诺伊等指出，全球化并不均质地作用于各国，而是通过竞争、私有化与标准扩散加剧既有不平等。",
    claims: [
      "全球竞争重塑国家教育目标、评价标准与财政结构。",
      "人才与资本流动改变高等教育的供给与分层。",
      "国际组织与跨国企业参与教育标准与话语的设定。",
      "全球化收益在不同国家与群体之间分布不均。",
      "国际化不等于西化，但常伴随话语与语言的不对称。",
    ],
    agreements: [
      "跨境学生流动持续增长并影响高教财政与课程语言。",
      "英语作为学术通用语强化了中心与边缘的结构。",
      "国家标准与国际指标之间存在持续张力。",
    ],
    disagreements: [
      {
        topic: "教育趋同源于资本逻辑还是世界文化模型",
        sides: [
          { who: "carnoy", view: "全球竞争与资本流动迫使各国采用相似的市场化与标准化改革。" },
          { who: "meyer_j", view: "趋同主要来自世界社会共享的现代教育模型与合法性压力。" },
        ],
        stake: "解释机制不同，抵抗趋同的策略也分为经济规制与话语重构。",
      },
      {
        topic: "国际化是发展机会还是新依附",
        sides: [
          { who: "carnoy", view: "跨境流动加剧人才外流与不对等交换，收益集中于强势体系。" },
          { who: "unesco", view: "国际合作与能力建设可为发展中国家带来教育质量提升的机会。" },
        ],
        stake: "若结构不对称未被处理，国际化可能以合作之名固化依附关系。",
      },
    ],
    evidence: [
      { text: "Carnoy, M. 《Globalization and Educational Reform: What Planners Need to Know》(1999)，UNESCO IIEP", doi: null },
      { text: "Knight, J. 《Internationalization remodeled: Definition, approaches, and rationales》(2004)，Journal of Studies in International Education", doi: null },
      { text: "UNESCO 《Rethinking Education: Towards a Global Common Good?》(2015)", doi: null },
    ],
    applications: [
      "高校国际化战略的定位与风险评估。",
      "跨国合作办学中的课程与师资治理。",
      "留学生政策与人才流动的制度设计。",
      "英语授课课程的学术语言支持体系。",
    ],
    terms: [
      { t: "全球化", en: "globalization", d: "资本、人才、信息与规范跨境流动并重组国家体系的过程。" },
      { t: "国际化", en: "internationalization", d: "院校或系统有意识地把国际维度纳入教学与研究的策略。" },
      { t: "人才外流", en: "brain drain", d: "高技能人才长期迁出并对母国造成能力损失的现象。" },
      { t: "学术资本主义", en: "academic capitalism", d: "高校以市场逻辑经营知识生产与服务的取向。" },
    ],
  },

  E131: {
    definition: "全民教育（EFA）源于 1990 年宗滴恩世界全民教育大会，经 2000 年达喀尔论坛与千年发展目标延续，2015 年由联合国可持续发展目标四（SDG4）接续，承诺到 2030 年提供包容、公平、优质的全民教育。其治理依赖全球承诺、国家行动计划与指标体系，核心张力在普及入学与学习质量之间。",
    claims: [
      "受教育权应覆盖所有年龄、性别与能力状态的群体。",
      "全球承诺能提升弱势群体的入学机会并形成政策压力。",
      "质量与公平不可分割，扩招若伴随质量下滑将抵消收益。",
      "指标与监测是问责的必要工具，但会简化目标。",
      "国家自主与全球目标之间需持续协商。",
    ],
    agreements: [
      "入学率提升不等于学习质量提升。",
      "女童、残障儿童与冲突地区儿童仍是最易被排除的群体。",
      "数据缺口使监测结果失真，低报问题被系统性忽视。",
    ],
    disagreements: [
      {
        topic: "全球目标能否实质改善弱势群体教育",
        sides: [
          { who: "unesco", view: "全球承诺与监测把教育置于政治议程，推动资源向弱势群体倾斜。" },
          { who: "tikly", view: "目标话语掩盖结构性不平等，援助条件反而压缩受援国的政策空间。" },
        ],
        stake: "全球治理是资源的再分配机制，还是合法性生产与话语协调。",
      },
      {
        topic: "指标化是否导致目标置换",
        sides: [
          { who: "unesco", view: "可测量指标使进展可追踪，并为问责提供共同语言。" },
          { who: "meyer_j", view: "指标一旦成为目标，系统会优化可测数字而非教育本身。" },
        ],
        stake: "为达标而达标，可能使入学率上升而学习质量停滞。",
      },
    ],
    evidence: [
      { text: "UNESCO 等 《World Declaration on Education for All》(1990)，宗滴恩会议", doi: null },
      { text: "UNESCO 等 《Incheon Declaration and Framework for Action for the Implementation of SDG4》(2015)", doi: null },
      { text: "UNESCO 《Global Education Monitoring Report》(2015 年起年度发布)", doi: null },
    ],
    applications: [
      "发展中国家基础教育规划的指标设计。",
      "女童教育与残障融合项目的优先排序。",
      "国家教育监测体系与数据能力建设。",
      "国际组织教育项目的效果评估。",
    ],
    terms: [
      { t: "全民教育", en: "Education for All", d: "1990 年发起的全球承诺，确保所有儿童与成人获得基础教育。" },
      { t: "可持续发展目标四", en: "SDG4", d: "2030 年前实现包容、公平、优质教育的全球目标。" },
      { t: "学习贫困", en: "learning poverty", d: "儿童在既定年龄仍无法阅读并理解简单文本的比例指标。" },
      { t: "教育监测", en: "education monitoring", d: "以指标与数据追踪教育目标进展并进行问责的机制。" },
    ],
  },

  E132: {
    definition: "教育援助指双边与多边机构向低收入国家提供的资金、技术与能力支持，1990 年代后从项目援助转向部门计划与预算支持。蒂克利等以后殖民视角指出，援助常附带政策条件与话语权力，把捐助方的学校模型与评估标准视为默认，从而边缘化本地知识与非正式教育实践。",
    claims: [
      "援助条件会影响受援国的政策自主与优先序设定。",
      "援助话语隐含特定的教育与发展模型，具有规范性。",
      "捐助方协调可降低交易成本，但也强化同构压力。",
      "本地知识与社区实践常被排除在设计之外。",
      "援助效果需以学习结果与公平双重标准评估。",
    ],
    agreements: [
      "援助的长期效果依赖受援国的制度能力与政治承诺。",
      "项目碎片化削弱系统性改进与财政可持续性。",
      "数据与评估能力是受援国的常见短板。",
    ],
    disagreements: [
      {
        topic: "教育援助是否具有新殖民性",
        sides: [
          { who: "tikly", view: "援助以条件与标准输出捐助方模型，本地知识被系统性边缘化。" },
          { who: "unesco", view: "多边协调与共同标准能减少碎片化，并支持受援国自主规划。" },
        ],
        stake: "协调究竟是增强自主，还是以技术合作形式延续话语支配。",
      },
      {
        topic: "援助应以学习结果还是过程能力衡量",
        sides: [
          { who: "tikly", view: "应评估受援国制度能力与公平改善，而非只追踪短期学习指标。" },
          { who: "hattie", view: "若无学习结果证据，援助难以判断何种干预真正有效。" },
        ],
        stake: "指标选择决定援助是投资长期能力，还是追逐可汇报的短期产出。",
      },
    ],
    evidence: [
      { text: "Tikly, L. 《Education and the new imperialism》(2004)，Comparative Education", doi: null },
      { text: "Tikly, L. & Barrett, A. 《Social justice, capabilities and the quality of education in low income countries》(2011)，International Journal of Educational Development", doi: null },
      { text: "OECD 等 《Paris Declaration on Aid Effectiveness》(2005)", doi: null },
    ],
    applications: [
      "国际教育援助项目的逻辑框架与条件设计。",
      "南南合作与区域教育能力建设。",
      "受援国教育部门规划与财政对齐。",
      "援助项目中的本地知识参与机制设计。",
    ],
    terms: [
      { t: "援助有效性", en: "aid effectiveness", d: "援助在自主、对齐、协调与结果管理上的实际效果。" },
      { t: "条件性", en: "conditionality", d: "把资金或债务减免与特定政策改革挂钩的做法。" },
      { t: "新殖民性", en: "coloniality", d: "殖民结束后仍延续的知识、权力与经济等级关系。" },
      { t: "部门计划", en: "sector-wide approach", d: "捐助方与受援国围绕整体教育部门规划协调资源的机制。" },
    ],
  },

  /* ── 教育系统与改进 ── */
  E133: {
    definition: "教育系统与治理研究关注目标设定、权责分配、资源分配与问责机制如何共同影响学校实践。富兰 2001 年《变革的意义》指出，教育改革失败常因忽视方向、能力与问责的协同；单点改革会被系统张力抵消，因此需同时处理课堂、学校与系统三个层面。",
    claims: [
      "系统改进需方向、能力与问责三者并进，缺一即失衡。",
      "单点改革难以突破系统张力，常被既有结构吸收。",
      "治理结构决定改革信息、资源与责任的流向。",
      "教师的专业资本是政策落地的中介变量。",
      "短期指标与长期能力建设之间需明确取舍。",
    ],
    agreements: [
      "改革实施过程比政策文本更能解释结果差异。",
      "学区与校长等中层领导是关键的传导枢纽。",
      "过度问责会诱发策略性应对与数据操纵。",
    ],
    disagreements: [
      {
        topic: "改进应从系统协同还是从高影响实践入手",
        sides: [
          { who: "fullan", view: "须同时调整方向、能力与问责，单点推广会被系统张力抵消。" },
          { who: "hattie", view: "以证据识别高影响实践并在课堂层面落实，即可产生可观改进。" },
        ],
        stake: "变革的杠杆在系统设计还是课堂实践，决定改革资源的投放重点。",
      },
      {
        topic: "问责是改进动力还是扭曲来源",
        sides: [
          { who: "fullan", view: "问责需与能力建设配对，否则压力会转为防御与表面合规。" },
          { who: "darling_hammond", view: "高利害问责窄化课程并加剧不平等，应转向支持性评价。" },
        ],
        stake: "问责的强度与形式，直接影响教师是否愿意暴露真实问题。",
      },
    ],
    evidence: [
      { text: "Fullan, M. 《The New Meaning of Educational Change》(2001, 3rd ed.)", doi: null },
      { text: "Fullan, M. 《Choosing the wrong drivers for whole system reform》(2011)，教育政策研讨报告", doi: null },
      { text: "Fullan, M. & Quinn, J. 《Coherence: The Right Drivers in Action for Schools, Districts, and Systems》(2016)", doi: null },
    ],
    applications: [
      "区域教育规划中的目标、能力与问责配套设计。",
      "学校改进督导从检查转向能力建设。",
      "课程改革的实施监测与中层领导培训。",
      "校长领导力发展项目以连贯性框架组织。",
    ],
    terms: [
      { t: "系统改进", en: "system improvement", d: "同时作用于课堂、学校与治理层的整体变革策略。" },
      { t: "能力建设", en: "capacity building", d: "提升教师与组织持续解决新问题的知识、技能与资源。" },
      { t: "问责", en: "accountability", d: "以证据向公众与上级说明结果并承担后果的制度安排。" },
      { t: "连贯性", en: "coherence", d: "目标、策略与日常实践之间的一致与可理解状态。" },
    ],
  },

  E134: {
    definition: "学校效能研究以量化方法识别与学业成就相关的学校层面因素，如领导、期望、学习机会与课堂时间。哈蒂 2009 年《可见的学习》以效应量汇总 800 余项元分析，主张以证据识别高影响实践。学校改进则把效能证据转化为组织变革过程，两者在方法论与政治性上存在张力。",
    claims: [
      "学校层面因素可解释部分成就差异，值得系统性干预。",
      "效应量可帮助排序干预的潜在影响，指导资源投放。",
      "清晰教学、反馈与高期望属于高影响实践。",
      "高效能学校具备共同特征，但不存在固定配方。",
      "效能证据须结合情境判断，不能机械套用。",
    ],
    agreements: [
      "教师质量是校内的最强影响因素之一。",
      "高期望与结构化教学与成就正相关。",
      "效能研究推动了数据驱动的学校改进。",
    ],
    disagreements: [
      {
        topic: "效应量排序是否可靠",
        sides: [
          { who: "hattie", view: "效应量为跨研究比较提供共同尺度，可指导实践优先级。" },
          { who: "斯努克", view: "效应量合并了异质研究与不同结局，排序掩盖测量误差与情境差异。" },
        ],
        stake: "若排序不可靠，以效应量清单指导改革可能误导资源分配。",
      },
      {
        topic: "学校作用是否被高估",
        sides: [
          { who: "hattie", view: "学校与教师可解释的方差足以支撑大规模改进努力。" },
          { who: "coleman", view: "家庭背景的解释力远大于学校资源差异，效能研究夸大了学校作用。" },
        ],
        stake: "学校能否抵消家庭不平等，决定问责应指向学校还是社会政策。",
      },
    ],
    evidence: [
      { text: "Hattie, J. 《Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement》(2009)", doi: null },
      { text: "Snook, I. 等 《Invisible Learnings? A commentary on John Hattie's Visible Learning》(2009)，New Zealand Journal of Educational Studies", doi: null },
      { text: "Hattie, J. 《Visible Learning for Teachers: Maximizing Impact on Learning》(2012)", doi: null },
    ],
    applications: [
      "学校改进诊断中的因素排查与优先级排序。",
      "教师反馈与清晰教学的专项培训。",
      "干预方案的成本效果比较。",
      "校长与教研组的数据素养建设。",
    ],
    terms: [
      { t: "效应量", en: "effect size", d: "衡量干预影响大小的标准化统计量，便于跨研究比较。" },
      { t: "可见的学习", en: "visible learning", d: "以效应量汇总证据、使学习影响可被看见与讨论的取向。" },
      { t: "学校效能", en: "school effectiveness", d: "研究学校层面因素与学生成就关系的研究领域。" },
      { t: "学习机会", en: "opportunity to learn", d: "学生实际接触教学内容与练习的时间与质量。" },
    ],
  },

  E135: {
    definition: "教师专业学习指教师通过持续、协作、聚焦内容的活动提升实践能力。达林-哈蒙德等 2017 年总结有效专业发展的七项特征：聚焦内容、主动学习、协作、使用模型与实践、提供教练与反馈、持续时长与连贯性。它与一次性培训的区别在于嵌入课堂并持续迭代。",
    claims: [
      "聚焦学科内容的专业学习比泛化教学法培训更有效。",
      "持续、嵌入课堂的支持优于一次性讲座。",
      "协作与同伴观察能促成实践改变。",
      "教练与具体反馈是转化为课堂行为的关键机制。",
      "学校需提供时间、结构与制度激励。",
    ],
    agreements: [
      "教师知识深度影响学生成就。",
      "教研应以课堂证据为基础，而非经验交流。",
      "专业学习共同体可降低教师孤立感并共享实践。",
    ],
    disagreements: [
      {
        topic: "应以实践改变还是学生成绩衡量专业学习",
        sides: [
          { who: "darling_hammond", view: "先改变实践与信念，学生成绩变化滞后且受多因素影响，不能作为唯一标准。" },
          { who: "hattie", view: "须以学习结果效应验证投入是否值得，否则专业发展难以排除安慰剂效应。" },
        ],
        stake: "评价周期与指标的选择，决定专业学习是追求短期分数还是持续能力。",
      },
      {
        topic: "专业学习应外部推广还是校本生成",
        sides: [
          { who: "darling_hammond", view: "有效设计具可迁移特征，可系统化推广并配套教练支持。" },
          { who: "科克伦-史密斯", view: "教师应在自身课堂中生成知识，外部方案易脱离情境并削弱探究立场。" },
        ],
        stake: "知识生产的归属，决定教师是方案执行者还是实践研究者。",
      },
    ],
    evidence: [
      { text: "Darling-Hammond, L., Hyler, M. & Gardner, M. 《Effective Teacher Professional Development》(2017)，Learning Policy Institute", doi: null },
      { text: "Darling-Hammond, L. 等 《Professional Learning in the Learning Profession: A Status Report on Teacher Development》(2009)", doi: null },
      { text: "Cochran-Smith, M. & Lytle, S. 《Relationships of knowledge and practice: Teacher learning in communities》(1999)，Review of Research in Education", doi: null },
    ],
    applications: [
      "校本教研与集体备课的流程重构。",
      "教师工作坊配合课堂教练与观察反馈。",
      "新教师入职培训的导师制与渐进责任。",
      "教研组评价从活动次数转向实践证据。",
    ],
    terms: [
      { t: "专业发展", en: "professional development", d: "教师提升知识、技能与实践能力的持续活动。" },
      { t: "教研", en: "teaching research", d: "以课例为载体、同行协作分析教学问题的校本制度。" },
      { t: "教练", en: "coaching", d: "在教师真实课堂中提供观察、示范与反馈的持续支持。" },
      { t: "探究立场", en: "inquiry stance", d: "教师把自身实践视为持续提问与研究的对象。" },
    ],
  },

  E136: {
    definition: "爱泼斯坦 1987 年提出交叠影响域理论，2001 年系统化为外部与内部模型：家庭、学校与社区的责任域既分离又交叠，学生处于中心；三者互动质量决定学生发展。她据此提出六类参与方式，包括教养、沟通、志愿服务、家庭学习、决策参与与社区协作。",
    claims: [
      "家庭、学校与社区的影响域可以且应当有意交叠。",
      "学生是三方影响的中心，而非被争夺的对象。",
      "参与是多维的，不止于辅导作业或参加家长会。",
      "学校应主动设计参与结构，而非等待家庭自发参与。",
      "参与质量取决于关系与信任，而非活动数量。",
    ],
    agreements: [
      "家长参与与学业成就、出勤与行为表现正相关。",
      "沟通的频率与质量影响家校信任。",
      "参与机会在不同社会群体间分布不均。",
    ],
    disagreements: [
      {
        topic: "家校参与是否再生产文化资本",
        sides: [
          { who: "epstein", view: "学校可通过六类参与设计降低门槛，使不同背景家庭都能投入。" },
          { who: "bourdieu", view: "学校期待中产式的参与方式，参与要求本身即筛选并再生产优势。" },
        ],
        stake: "参与制度是促进公平的工具，还是把阶层差异转译为学校中的可见差距。",
      },
      {
        topic: "学校应否要求家庭承担教学责任",
        sides: [
          { who: "epstein", view: "家庭学习是六类参与之一，学校应指导家长支持学习。" },
          { who: "darling_hammond", view: "学校应承担主要教学责任，过度要求家庭参与会把结构问题转嫁给家长。" },
        ],
        stake: "责任边界若模糊，弱势家庭可能因资源不足而被判定为不配合。",
      },
    ],
    evidence: [
      { text: "Epstein, J. 等 《School, Family, and Community Partnerships: Your Handbook for Action》(2002)", doi: null },
      { text: "Epstein, J. 等 《School, Family, and Community Partnerships》(2019, 4th ed.)", doi: null },
      { text: "Jeynes, W. 《The relationship between parental involvement and urban secondary school student academic achievement: A meta-analysis》(2007)，Urban Education", doi: null },
    ],
    applications: [
      "家长学校与家访计划的分层设计。",
      "家庭作业设计兼顾家庭资源差异。",
      "家校沟通平台明确信息与责任边界。",
      "社区资源整合支持课后与暑期学习。",
    ],
    terms: [
      { t: "交叠影响域", en: "overlapping spheres of influence", d: "家庭、学校与社区责任域既分离又交叠的理论模型。" },
      { t: "六类参与", en: "six types of involvement", d: "教养、沟通、志愿服务、家庭学习、决策与社区协作。" },
      { t: "家庭学习", en: "family learning", d: "家庭环境中由家长支持的学习活动与互动。" },
      { t: "伙伴关系", en: "partnership", d: "家校之间以共同责任与相互尊重为基础的合作关系。" },
    ],
  },

  E137: {
    definition: "教育数字化转型指数字技术、数据基础设施与平台逻辑对教育目标、流程与制度的系统性重组。塞尔温 2016 年《技术对教育有益吗？》批评把技术引入等同于改革的倾向，主张以教学目标与公平为尺度审视收益。该领域同时关注数据治理、教师劳动与平台化带来的权力转移。",
    claims: [
      "技术引入不等于教学变革，工具更替常掩盖实践未变。",
      "数字化转型重塑制度安排、劳动分工与专业角色。",
      "数据化使教学被指标与平台逻辑重新组织。",
      "数字鸿沟已从设备接入转向使用方式与收益分配。",
      "转型应以教学目标为起点，而非以技术能力为起点。",
    ],
    agreements: [
      "教师的中介与教学设计决定技术的实际效果。",
      "基础设施、维护与技术支持影响可持续性。",
      "数据隐私、算法问责与商业依赖需制度回应。",
    ],
    disagreements: [
      {
        topic: "技术能否重构教学关系",
        sides: [
          { who: "selwyn", view: "多数教育技术只强化既有结构，收益被商业与技术叙事系统性夸大。" },
          { who: "luckin", view: "设计得当的智能系统可重构反馈与个性化支持，改变教学关系。" },
        ],
        stake: "技术是改良工具还是制度变革动力，决定投入与监管的重心。",
      },
      {
        topic: "学习分析是支持还是监控",
        sides: [
          { who: "siemens", view: "过程数据可提供及时反馈与干预，使学习支持更具响应性。" },
          { who: "selwyn", view: "数据化把教学简化为可计算指标，强化监控并削弱专业判断。" },
        ],
        stake: "同一套数据基础设施，既可服务于学习支持，也可服务于绩效监控。",
      },
    ],
    evidence: [
      { text: "Selwyn, N. 《Is Technology Good for Education?》(2016)", doi: null },
      { text: "Selwyn, N. 《Should Robots Replace Teachers? AI and the Future of Education》(2019)", doi: null },
      { text: "Siemens, G. & Long, P. 《Penetrating the fog: Analytics in learning and education》(2011)，EDUCAUSE Review", doi: null },
    ],
    applications: [
      "区域教育数字化规划的目标与风险评估。",
      "教育平台采购的学习成效与数据条款审查。",
      "教师数字素养培训聚焦教学决策而非工具操作。",
      "学生数据治理规范与算法问责机制建设。",
    ],
    terms: [
      { t: "数字化转型", en: "digital transformation", d: "数字技术引发组织流程、制度与价值创造方式的系统重组。" },
      { t: "平台化", en: "platformization", d: "教育服务向少数平台集中并重塑其治理关系的过程。" },
      { t: "数字鸿沟", en: "digital divide", d: "在设备接入、使用能力与获益上的系统性差距。" },
      { t: "数据治理", en: "data governance", d: "关于数据采集、使用、共享与问责的制度安排。" },
      { t: "技术决定论", en: "technological determinism", d: "认为技术按其自身逻辑必然导致特定社会变革的观点。" },
    ],
  },
});
