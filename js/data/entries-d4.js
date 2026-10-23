/* ============================================================
   条目详解（四）：儿童成长与发展 E138–E182
   结构：definition / claims / agreements / disagreements / evidence / applications / terms
   ============================================================ */
window.ATLAS = window.ATLAS || {};

ATLAS.details = Object.assign(ATLAS.details || {}, {
  /* ── 认知发展 ── */
  E138: {
    definition: "皮亚杰在 1920 至 1950 年代基于临床访谈与守恒实验，提出认知发展经历感知运动（0—2 岁）、前运算（2—7 岁）、具体运算（7—11 岁）与形式运算（11 岁以后）四个阶段。每个阶段由不同的认知结构组织，阶段之间是质变而非知识量的累加，经由同化、顺应与平衡化推进。其核心主张是儿童不是缩小版的成人，其思维有自身的逻辑与限度。",
    claims: [
      "阶段按固定顺序出现且不可跳跃，但达到某阶段的年龄可因经验与文化而不同。",
      "思维的基本单位是图式；同化把新经验纳入旧结构，顺应则改造旧结构，二者经平衡化推动跃迁。",
      "前运算期的自我中心、泛灵论与不可逆性，源于缺乏可逆的心理运算而非知识不足。",
      "具体运算期儿童能完成守恒、分类与排序，但仍依赖具体事物；形式运算期才具备假设—演绎推理。",
      "发展阶段具有领域一般性，同一儿童的逻辑水平应跨内容大体一致。"
    ],
    agreements: [
      "认知发展存在粗略顺序性：从婴儿到青少年，在数量、类别与因果推理上呈现可重复的先后次序。",
      "前运算期儿童在守恒任务上的系统性错误可被稳定重复，并与注意与抑制等基本过程有关。",
      "主动建构而非被动接受是发展的重要机制，这一建构主义立场已被广泛接受。"
    ],
    disagreements: [
      { topic: "阶段是否具有领域一般性", sides: [ { who: "piaget", view: "阶段是整体结构，逻辑水平应跨内容一致" }, { who: "fodor", view: "心理由领域特殊模块构成，不存在统一阶段" } ], stake: "若思维分领域独立发展，按年龄划分阶段便缺乏解释力" },
      { topic: "阶段是自然成熟还是文化内化", sides: [ { who: "piaget", view: "阶段由成熟与自我调节的平衡化推动" }, { who: "vygotsky", view: "高级思维经文化工具与教学内化而成，可被引领" } ], stake: "这决定教学应等待阶段还是主动创设发展条件" },
      { topic: "婴儿是否已具备客体永久性", sides: [ { who: "piaget", view: "感知运动期婴儿尚无稳定客体表征" }, { who: "spelke", view: "数月龄婴儿已表现出客体持续存在的预期" } ], stake: "早期能力的有无改变了对发展起点的基本假设" }
    ],
    evidence: [
      { text: "Piaget, The Origins of Intelligence in Children（1952）", doi: null },
      { text: "Piaget & Inhelder, The Psychology of the Child（1969）", doi: null },
      { text: "Baillargeon, Object permanence in 3.5- and 4.5-month-old infants（1987）", doi: null }
    ],
    applications: [
      "以具体操作为先，低年级不急于引入纯符号与形式化推理。",
      "用教具、实验与分类活动支撑具体运算期的学习。",
      "把「尚未达到」理解为结构差异而非能力缺陷，避免负面标签。",
      "在形式运算期引入假设检验、变量控制与论证写作。"
    ],
    terms: [
      { t: "图式", en: "Schema", d: "组织经验与行动的心理结构，随经验不断分化与整合。" },
      { t: "同化", en: "Assimilation", d: "把新经验纳入已有图式，保持结构不变。" },
      { t: "顺应", en: "Accommodation", d: "原有图式无法解释新经验时，改造结构本身。" },
      { t: "守恒", en: "Conservation", d: "理解物体外形改变而数量或质量不变的能力。" },
      { t: "形式运算", en: "Formal Operations", d: "脱离具体内容进行假设—演绎推理的思维形式。" }
    ]
  },
  E139: {
    definition: "新皮亚杰主义是 1970 至 1980 年代由 Case、Pascual-Leone、Halford 等人发展的理论群。它保留阶段思想，但把阶段跃迁的机制从「逻辑结构重组」替换为工作记忆容量、加工速度与执行资源的增长。其贡献在于让阶段假设获得可测量的认知机制，并使阶段与内容的关系更为灵活。",
    claims: [
      "阶段差异可由工作记忆可同时激活的图式数量解释，而不必诉诸抽象的逻辑结构。",
      "加工速度与注意资源的增长是阶段跃迁的近因，成熟与经验共同提升容量。",
      "阶段仍具顺序性，但同一年龄的儿童在不同内容上可处于不同水平。",
      "教学可通过降低任务对工作记忆的占用，使儿童表现出超出其阶段的成绩。",
      "发展呈阶梯式：每一阶段把前一阶段的图式重新组织为更高阶的整合单位。"
    ],
    agreements: [
      "工作记忆容量在童年期稳定增长，并与复杂推理成绩显著相关。",
      "加工速度随年龄提升，可解释部分认知发展差异。",
      "儿童在熟悉内容上的表现常高于陌生内容，支持水平与内容相分离。"
    ],
    disagreements: [
      { topic: "阶段是真实结构还是描述工具", sides: [ { who: "case", view: "阶段对应可测量的容量上限，是真实结构" }, { who: "siegler", view: "发展是策略分布的连续变化，无需阶段假设" } ], stake: "这决定研究应寻找阶段跃迁还是策略更替" },
      { topic: "容量限制能否被训练突破", sides: [ { who: "case", view: "容量是发展约束，教学应绕开而非硬训" }, { who: "owen", view: "认知训练多只提升训练任务，远迁移证据薄弱" } ], stake: "若容量不可训练，课程只能通过降低负荷来适应" }
    ],
    evidence: [
      { text: "Case, Intellectual Development: Birth to Adulthood（1985）", doi: null },
      { text: "Pascual-Leone, A mathematical model for the transition rule in Piaget's developmental stages（1970）", doi: null },
      { text: "Kail, Longitudinal evidence that increases in processing speed and working memory enhance children's reasoning（2007）", doi: null }
    ],
    applications: [
      "把复杂任务分解为单步操作，降低同时保持的信息量。",
      "多变量推理与抽象证明安排在小学高年级之后。",
      "对发展迟缓儿童调整任务复杂度，而非仅降低内容难度。",
      "用外部表征（图表、清单）替儿童分担工作记忆负荷。"
    ],
    terms: [
      { t: "工作记忆容量", en: "Working Memory Capacity", d: "可同时激活并操作的信息量上限，随年龄增长。" },
      { t: "加工速度", en: "Processing Speed", d: "完成基本认知操作所需时间，童年期持续加快。" },
      { t: "图式整合", en: "Structural Integration", d: "把多个低阶图式组合为单一高阶单位的过程。" },
      { t: "执行资源", en: "Executive Resources", d: "用于抑制、切换与监控的有限注意资源。" }
    ]
  },
  E140: {
    definition: "信息加工发展观由 Siegler 等人在 1980 至 1990 年代系统提出，主张发展不是阶段更替，而是策略库的变异、选择与保留。儿童在同一时期同时掌握多种策略，并依任务难度与效率不断调整其分布。研究采用微观发生法高频追踪，强调变化是连续、渐进而非突变的。",
    claims: [
      "儿童在任一任务上同时拥有多种策略，策略选择具有适应性，随经验改变分布。",
      "新策略常在被稳定使用前以低效形式出现，经反复尝试与反馈逐步提高效率。",
      "发展可由策略频次分布的变化刻画，无需假设整体性的阶段结构。",
      "编码效率、自动化水平与工作记忆的提升改变策略之间的竞争结果。",
      "个体差异显著，同龄儿童可能处于完全不同的策略组合状态。"
    ],
    agreements: [
      "儿童确实同时使用多种策略，策略使用模式与成绩相关，微观发生研究可重复。",
      "策略发现是渐进的，新策略初期常伴随「利用缺陷」，即用了新策略却未获益。",
      "反馈与练习能改变策略选择，教学可以加速策略更替。"
    ],
    disagreements: [
      { topic: "发展是连续变化还是阶段跃迁", sides: [ { who: "siegler", view: "变化是策略频率的连续漂移，无须阶段" }, { who: "case", view: "存在由容量决定的可辨识阶段边界" } ], stake: "这影响如何设计评估：看过程分布还是看阶段达标" },
      { topic: "策略选择由元认知还是联想机制驱动", sides: [ { who: "siegler", view: "选择依据对策略效率的适应性与反馈" }, { who: "flavell", view: "元认知监控与知识在策略选择中起中介作用" } ], stake: "若靠元认知，则应教监控；若靠强化，则应改反馈结构" }
    ],
    evidence: [
      { text: "Siegler, Emerging Minds: The Process of Change in Children's Thinking（1996）", doi: null },
      { text: "Siegler & Jenkins, How Children Discover New Strategies（1989）", doi: null },
      { text: "Siegler, How does change occur: A microgenetic study of number conservation（1995）", doi: null }
    ],
    applications: [
      "允许同一题目的多种解法并存，并组织效率比较。",
      "在策略发现期容忍低效与错误，提供及时反馈而非直接给答案。",
      "用高频小测追踪策略变化，而不只看期末结果。",
      "针对个体策略剖面设计辅导，而非按年龄统一推进。"
    ],
    terms: [
      { t: "策略库", en: "Strategy Repertoire", d: "个体在特定任务上可调用的多种策略集合。" },
      { t: "微观发生法", en: "Microgenetic Method", d: "在变化发生期高频观测，以捕捉变化的实时过程。" },
      { t: "利用缺陷", en: "Utilization Deficiency", d: "已使用新策略但尚未从中获益的过渡状态。" },
      { t: "适应性选择", en: "Adaptive Strategy Choice", d: "依任务特征与自身效率调整策略的倾向。" }
    ]
  },
  E141: {
    definition: "维果茨基在 1920 至 1930 年代提出，高级心理机能起源于社会互动，经语言等文化工具中介而内化。发展不是等待成熟后的自然展开，教学可以「走在发展前面」，在最近发展区内引领发展。其著作于 1978 年以《社会中的心智》英译出版后，对西方发展心理学与教育产生重大影响。",
    claims: [
      "高级心理机能先以人际形式出现，再内化为个体内部的心理过程。",
      "语言、符号与书写等文化工具中介思维，工具的性质塑造认知的形式。",
      "最近发展区是独立水平与协助下可达水平之间的区间，是教学最有效的着力点。",
      "教学与发展并非彼此独立，教学可以创造新的发展可能性。",
      "游戏创造最近发展区，儿童在游戏中的自我调节水平高于日常表现。"
    ],
    agreements: [
      "社会互动与语言输入对认知发展有实质影响，跨文化研究支持。",
      "成人协助能提升儿童当下的问题解决水平，支架研究提供稳定证据。",
      "私语在任务变难时增多并与自我调节相关，支持内化假说。"
    ],
    disagreements: [
      { topic: "教学能否引领发展", sides: [ { who: "vygotsky", view: "教学可走在发展前面并创造新的发展水平" }, { who: "piaget", view: "教学须等待相应认知结构成熟才能奏效" } ], stake: "这决定课程是跟随发展阶段还是主动超前设计" },
      { topic: "支架隐喻是否过度简化", sides: [ { who: "wood_b", view: "支架是渐隐的临时结构，可操作化" }, { who: "斯通", view: "真实互动是共同建构，支架隐喻易沦为技术化控制" } ], stake: "隐喻的选择影响教师如何理解自己的协助角色" }
    ],
    evidence: [
      { text: "Vygotsky, Mind in Society（1978）", doi: null },
      { text: "Vygotsky, Thought and Language（1934/1986）", doi: null },
      { text: "Wood, Bruner & Ross, The role of tutoring in problem solving（1976）", doi: null }
    ],
    applications: [
      "组织同伴互助与师徒式教学，让能力较高者提供临时支持。",
      "在最近发展区内提供分级提示，并随能力增长及时撤除。",
      "把私语与自我指导纳入课堂，允许儿童出声思考。",
      "评估「协助后表现」而不仅是独立表现，以识别发展潜能。"
    ],
    terms: [
      { t: "最近发展区", en: "Zone of Proximal Development", d: "独立水平与协助下可达水平之间的发展空间。" },
      { t: "中介", en: "Mediation", d: "借助符号工具改造心理过程的作用方式。" },
      { t: "内化", en: "Internalization", d: "外部社会互动转化为内部心理机能的过程。" },
      { t: "私语", en: "Private Speech", d: "儿童对自己说的话，逐步转为内部言语与自我调节。" },
      { t: "文化工具", en: "Cultural Tool", d: "语言、符号、技术等中介思维的人工制品。" }
    ]
  },
  E142: {
    definition: "心理理论指理解他人拥有与自己不同的信念、欲望与意图，并据此预测行为的能力。Wimmer 与 Perner 于 1983 年用错误信念任务开创系统研究，Wellman 等将其概括为从欲望心理学到信念—欲望心理学的序列发展。其标志性成就是认识到信念可以是错的，行为由信念而非现实直接驱动。",
    claims: [
      "约 4 岁儿童多数能通过标准错误信念任务，理解他人可持有与事实不符的信念。",
      "发展呈序列：先理解欲望，再理解知悉与信念，最后理解信念—情绪与二级信念。",
      "心理理论水平预测同伴交往、合作质量与社会适应。",
      "语言能力、执行功能与家庭中的心理状态对话均促进心理理论发展。",
      "心理理论不是全或无的能力，存在情境差异，成人亦有系统性偏差。"
    ],
    agreements: [
      "错误信念理解在 4 岁左右出现，跨文化研究显示顺序一致而时间略有差异。",
      "心理理论与语言、执行功能正相关，多项纵向研究可重复。",
      "假装游戏与心理状态词汇的使用同心理理论发展相关。"
    ],
    disagreements: [
      { topic: "婴儿是否已具备心理理论", sides: [ { who: "wellman", view: "稳定的信念理解约在 4 岁才形成" }, { who: "贝拉尔容", view: "婴儿在违反预期范式中已表现出信念预期" } ], stake: "测量方式是否触及同一构念，决定发展起点的判定" },
      { topic: "心理理论是模块还是领域一般推理", sides: [ { who: "baron_cohen", view: "存在专门的心理理论模块，可选择性受损" }, { who: "wellman", view: "心理理论依赖一般表征与信念—欲望推理的发展" } ], stake: "这决定干预应训练专门技能还是通用语言与推理" }
    ],
    evidence: [
      { text: "Wimmer & Perner, Beliefs about beliefs（1983）", doi: null },
      { text: "Wellman, Cross & Watson, Meta-analysis of theory-of-mind development（2001）", doi: null },
      { text: "Onishi & Baillargeon, Do 15-month-old infants understand false beliefs?（2005）", doi: "10.1126/science.1111656" }
    ],
    applications: [
      "在阅读与叙事中讨论角色的所知、所想与误会。",
      "日常使用心理状态词汇（以为、记得、希望）并解释行为理由。",
      "对自闭谱系儿童进行显性的信念理解教学。",
      "冲突调解中引导双方复述对方意图，减少敌意归因。"
    ],
    terms: [
      { t: "错误信念", en: "False Belief", d: "认识到他人可持有与事实不符的信念。" },
      { t: "信念—欲望推理", en: "Belief-Desire Reasoning", d: "由欲望与信念共同推断他人行为的推理形式。" },
      { t: "二级心理理论", en: "Second-Order Theory of Mind", d: "推断他人对第三者想法的能力，约 6 至 7 岁出现。" },
      { t: "心理状态词汇", en: "Mental State Terms", d: "表示想法、感受与意图的词语，是发展的促进因素。" }
    ]
  },
  E143: {
    definition: "执行功能指为达成目标而自上而下调控思维与行为的一组一般性控制过程，通常分为抑制控制、工作记忆与认知灵活性三个成分。Diamond 等综合发展研究指出，执行功能在童年期快速发展，并显著预测学业成就与社会适应。前额叶皮层的长期成熟为其主要神经基础。",
    claims: [
      "三成分在学前至小学阶段快速发展，抑制控制较早成熟，认知灵活性相对较晚。",
      "执行功能对入学准备与数学、阅读成绩的预测力部分独立于智力。",
      "执行功能可经特定活动改善，但向未训练领域的迁移有限。",
      "压力、睡眠不足与贫困环境会损害执行功能的表现。",
      "执行功能与情绪调节共享调控资源，二者在发展上相互交织。"
    ],
    agreements: [
      "抑制、工作记忆与转换可分离但中度相关，因子分析支持三成分结构。",
      "执行功能预测学业成就，多项纵向研究结论一致。",
      "前额叶皮层成熟延续至成年早期，与执行功能提升同步。"
    ],
    disagreements: [
      { topic: "训练能否产生远迁移", sides: [ { who: "diamond", view: "有针对性的活动可改善执行功能并带来部分迁移" }, { who: "owen", view: "训练多只提升训练任务，远迁移证据薄弱" } ], stake: "这决定学校是否值得投入独立的能力训练课程" },
      { topic: "执行功能是单一系统还是多成分", sides: [ { who: "miyake", view: "抑制、刷新与转换可分离为三个成分" }, { who: "邓肯", view: "存在统摄各任务的共同执行因素" } ], stake: "结构假设决定评估与干预是分维还是整体" }
    ],
    evidence: [
      { text: "Diamond, Executive functions（2013）", doi: "10.1146/annurev-psych-113011-143750" },
      { text: "Miyake et al., The unity and diversity of executive functions（2000）", doi: "10.1006/cogp.1999.0734" },
      { text: "Moffitt et al., A gradient of childhood self-control predicts health, wealth, and public safety（2011）", doi: null }
    ],
    applications: [
      "把执行功能训练嵌入学科任务，而非孤立做电脑游戏。",
      "减少课堂无关干扰，明确步骤并提供外部结构（清单、流程图）。",
      "为低执行功能儿童拆分长任务、增加检查点与过渡提示。",
      "保障睡眠、降低高压评价，避免压力进一步侵蚀调控资源。"
    ],
    terms: [
      { t: "抑制控制", en: "Inhibitory Control", d: "压制冲动与无关反应以执行目标行为的能力。" },
      { t: "刷新", en: "Updating", d: "在工作记忆中持续替换与更新信息的能力。" },
      { t: "认知灵活性", en: "Cognitive Flexibility", d: "在规则或视角间切换并适应变化的能力。" },
      { t: "远迁移", en: "Far Transfer", d: "训练收益扩展到情境与内容差异较大的任务。" }
    ]
  },
  E144: {
    definition: "婴儿核心知识理论由 Spelke 等提出，主张婴儿天生具备若干核心知识系统，分别处理客体、数量、空间与有生命主体的运动，为后续学习提供初始表征。学习不是白板书写，而是在核心系统之上进行组合与扩展。该立场与皮亚杰强调动作建构的观点形成直接对照。",
    claims: [
      "婴儿早期即表现出客体永久性、数量辨别与几何布局敏感性。",
      "核心系统是领域特殊的，各有输入方式与加工限制，不共享一般逻辑。",
      "核心系统在人类中普遍存在，并具有进化与神经基础。",
      "新知识通过核心系统的组合与语言中介而建构，而非简单取代它们。",
      "婴儿表现出的「知识」是有限的、情境依赖的，不等于成人概念。"
    ],
    agreements: [
      "在违反预期范式下，婴儿对数量与客体事件表现出注视时间差异，结果可重复。",
      "近似数量系统的精度随年龄提高，并与后续数学成绩相关。",
      "早期空间与数量敏感性具有跨文化普遍性。"
    ],
    disagreements: [
      { topic: "婴儿是否真具有概念性知识", sides: [ { who: "spelke", view: "核心系统提供先于经验的抽象表征" }, { who: "piaget", view: "知识源于动作与感知的建构，婴儿尚无表征" } ], stake: "这决定早期经验与教育应从何时、以何种方式介入" },
      { topic: "核心知识能否解释概念发展", sides: [ { who: "spelke", view: "核心系统经组合与语言扩展为成熟概念" }, { who: "卡雷", view: "概念发展常需整体替换，而非原有系统的扩展" } ], stake: "连续扩展与概念替换对应完全不同的教学策略" }
    ],
    evidence: [
      { text: "Spelke et al., Origins of knowledge（1992）", doi: null },
      { text: "Wynn, Addition and subtraction by human infants（1992）", doi: null },
      { text: "Spelke & Kinzler, Core knowledge（2007）", doi: null }
    ],
    applications: [
      "早期数学从数量比较与一一对应入手，而非直接符号运算。",
      "提供丰富的操作与空间探索机会，顺应核心系统的输入偏好。",
      "利用注视与预期范式做早期发展筛查。",
      "把婴儿的早期表现视为起点而非概念掌握，避免超前学术训练。"
    ],
    terms: [
      { t: "核心知识", en: "Core Knowledge", d: "先天具备、领域特殊的初始表征系统。" },
      { t: "违反预期范式", en: "Violation-of-Expectation", d: "以注视时间差异推断婴儿预期的实验方法。" },
      { t: "客体永久性", en: "Object Permanence", d: "物体离开视线后仍继续存在的理解。" },
      { t: "近似数量系统", en: "Approximate Number System", d: "无需计数即可粗略估计数量的先天能力。" }
    ]
  },
  E145: {
    definition: "福多于 1983 年提出心理的模块论，主张认知由领域特殊的模块构成：模块加工快速、强制、信息封闭，仅向中央系统输出结果。该立场反对以一般逻辑结构解释发展，主张各认知能力有独立机制与神经基础。它构成对皮亚杰领域一般阶段论的直接挑战。",
    claims: [
      "模块是领域特殊的，仅处理特定类型的输入，加工具有强制性。",
      "模块信息封闭，不受背景信念影响，速度快且难以中断。",
      "中央系统负责推理与信念形成，是非模块的，其运作难以用计算模型刻画。",
      "发展应理解为各模块的成熟与参数设定，而非整体结构重组。",
      "领域特殊性在语言、面孔识别与数感等能力上获得较多支持。"
    ],
    agreements: [
      "语言与面孔加工表现出领域特殊性与特定神经基础，证据较强。",
      "某些能力在婴儿期即出现，难以用一般学习机制解释。",
      "大脑存在功能分化，但分化程度与可塑性仍有争议。"
    ],
    disagreements: [
      { topic: "心理是否大规模模块化", sides: [ { who: "fodor", view: "只有输入输出系统是模块，中央推理不是" }, { who: "科斯米德斯", view: "社会推理等中央能力同样由大量模块构成" } ], stake: "模块范围决定「通用思维训练」是否可能成立" },
      { topic: "模块化是起点还是发展结果", sides: [ { who: "fodor", view: "模块是先天给定的结构" }, { who: "卡米洛夫-史密斯", view: "模块化随发展逐步形成，起点更为领域一般" } ], stake: "这影响对早期干预窗口与教学顺序的判断" }
    ],
    evidence: [
      { text: "Fodor, The Modularity of Mind（1983）", doi: null },
      { text: "Karmiloff-Smith, Beyond Modularity（1992）", doi: null },
      { text: "Kanwisher, McDermott & Chun, The fusiform face area（1997）", doi: null }
    ],
    applications: [
      "分领域评估能力剖面，而非只看单一智商分数。",
      "针对特定能力设计训练，不期待自动迁移到其他领域。",
      "对「一般思维训练」「全脑开发」类宣传保持审慎。",
      "用双重分离证据判断某项能力是否相对独立。"
    ],
    terms: [
      { t: "模块", en: "Module", d: "领域特殊、加工封闭的专门化认知系统。" },
      { t: "信息封闭", en: "Informational Encapsulation", d: "模块加工不受其他知识与信念影响的性质。" },
      { t: "领域特殊", en: "Domain Specific", d: "仅适用于特定内容范围而非普遍适用。" },
      { t: "中央系统", en: "Central System", d: "负责信念形成与推理的非模块化系统。" }
    ]
  },
  /* ── 心理社会性发展 ── */
  E146: {
    definition: "埃里克森在 1950 年《童年与社会》中提出，人格发展贯穿一生，分为八个阶段，每阶段面临一对心理社会危机，如信任对不信任、勤奋对自卑、同一性对角色混乱。危机的解决质量影响人格品质与关系模式，后期经验亦可修正早期遗留。该理论把弗洛伊德的性心理阶段扩展至社会文化维度。",
    claims: [
      "发展分为八个阶段，顺序固定，每阶段有特定关系场域与危机主题。",
      "危机解决产生基本品质：希望、意志、目的、能力、忠诚、爱、关怀与智慧。",
      "青少年期的核心任务是同一性形成，涉及自我定义与角色实验。",
      "阶段并非一次定型，后期经验可以补偿与修正早期不足。",
      "发展受文化与社会制度影响，危机内容随社会情境而变化。"
    ],
    agreements: [
      "青少年期同一性探索是重要发展任务，跨文化研究支持其普遍性。",
      "早期照料关系影响信任与关系模式，与依恋研究部分吻合。",
      "人格在成年期仍可变化，支持终身发展观。"
    ],
    disagreements: [
      { topic: "阶段框架是否以男性为中心", sides: [ { who: "erikson", view: "同一性危机以自主与角色探索为核心" }, { who: "gilligan", view: "以关系与关怀为核心的女性发展路径被置于边缘" } ], stake: "发展任务的界定决定了何种成长被视为成熟" },
      { topic: "阶段年龄界限是否仍适用", sides: [ { who: "erikson", view: "成年早期以亲密对孤独为主要危机" }, { who: "阿奈特", view: "18 至 25 岁已形成独立的成年初显期" } ], stake: "阶段划分影响对青年期教育与家庭支持的制度安排" }
    ],
    evidence: [
      { text: "Erikson, Childhood and Society（1950）", doi: null },
      { text: "Erikson, Identity: Youth and Crisis（1968）", doi: null },
      { text: "Marcia, Development and validation of ego-identity status（1966）", doi: null }
    ],
    applications: [
      "按阶段任务设计学校与家庭支持，如青春期的角色探索活动。",
      "把行为退化理解为危机重现，而非单纯的品行问题。",
      "在生涯教育中安排试探性角色与反思。",
      "以终身视角看待成人学习与中年转换。"
    ],
    terms: [
      { t: "心理社会危机", en: "Psychosocial Crisis", d: "特定阶段必须解决的核心发展矛盾。" },
      { t: "同一性", en: "Identity", d: "关于自己是谁、要成为什么的连贯自我定义。" },
      { t: "基本品质", en: "Basic Virtue", d: "危机顺利解决后形成的人格力量。" },
      { t: "角色混乱", en: "Role Confusion", d: "无法整合自我角色与未来方向的状态。" }
    ]
  },
  E147: {
    definition: "鲍尔比在 1969 年《依恋与失落》第一卷中提出，依恋是进化形成的生物行为系统，婴儿通过接近照料者获得保护，从而提高生存概率。照料者的可及性与敏感性塑造儿童关于自我与他人的内部工作模型，持续影响关系与情绪调节。该理论整合了精神分析、动物行为学与控制系统思想。",
    claims: [
      "依恋具有生物适应功能，目的是维持与保护者的接近。",
      "依恋行为在 6 至 24 个月逐步组织为有目标的系统，分离会引发抗议、绝望与疏离。",
      "早期互动内化为内部工作模型，成为后续关系的解释框架。",
      "安全依恋源于照料者的可及性与敏感性，而非喂养方式。",
      "依恋模式具有一定程度的跨代传递性。"
    ],
    agreements: [
      "安全依恋与照料者敏感性相关，元分析支持中等效应。",
      "依恋质量预测社会情绪适应，效应中等且受多重因素调节。",
      "依恋关系在儿童期相对稳定，但可因环境变化而改变。"
    ],
    disagreements: [
      { topic: "依恋差异源于关系经验还是气质", sides: [ { who: "bowlby", view: "依恋组织主要由照料者回应方式塑造" }, { who: "卡根", view: "气质与神经类型可解释部分依恋行为差异" } ], stake: "归因不同决定干预应针对亲子互动还是儿童特质" },
      { topic: "早期依恋是否决定终身关系", sides: [ { who: "bowlby", view: "内部工作模型具有持续影响" }, { who: "哈里斯", view: "同伴群体与遗传对长期人格影响更大" } ], stake: "因果强度决定早期干预的优先级与资源分配" },
      { topic: "依恋类型是否跨文化普遍", sides: [ { who: "ainsworth", view: "四类依恋策略具有普遍结构" }, { who: "罗斯鲍姆", view: "日本等文化的依恋表达与分类标准需重新校准" } ], stake: "测量工具的跨文化效度影响诊断与政策" }
    ],
    evidence: [
      { text: "Bowlby, Attachment and Loss, Vol. 1: Attachment（1969）", doi: null },
      { text: "Harlow, The nature of love（1958）", doi: null },
      { text: "De Wolff & van IJzendoorn, Sensitivity and attachment: A meta-analysis（1997）", doi: null }
    ],
    applications: [
      "婴幼儿照护安排以稳定性优先，减少照料者频繁更换。",
      "为分离与入园设计过渡性安排，允许携带安抚物。",
      "对寄养与机构照护人员开展敏感性回应培训。",
      "把「难带」行为理解为依恋策略而非故意对抗。"
    ],
    terms: [
      { t: "依恋行为系统", en: "Attachment Behavioral System", d: "维持与保护者接近的进化性行为组织。" },
      { t: "内部工作模型", en: "Internal Working Model", d: "关于自我是否值得被爱与他人是否可靠的表征。" },
      { t: "安全基地", en: "Secure Base", d: "照料者作为探索出发点和返回避风港的功能。" },
      { t: "敏感性", en: "Sensitivity", d: "准确察觉并及时恰当回应婴儿信号的能力。" }
    ]
  },
  E148: {
    definition: "安斯沃斯等在 1978 年《依恋模式》中用陌生情境实验，把 12 至 18 个月婴儿的依恋组织为安全型、回避型与矛盾型，后由 Main 与 Solomon 补充混乱型。分类依据是分离与重聚时婴儿在探索与求助之间的平衡方式，而非单一行为频率。该范式使依恋成为可编码、可比较的实证构念。",
    claims: [
      "依恋类型可由分离—重聚的行为组织稳定区分，并具有可接受编码信度。",
      "安全型婴儿以照料者为安全基地，能自主探索并在需要时寻求安抚。",
      "回避型与矛盾型是适应性策略，分别反映照料者的拒绝与不可预测回应。",
      "混乱型多见于受虐待或高冲突家庭，表现为矛盾、冻结或恐惧行为。",
      "依恋类型分布在不同样本中存在文化差异，但四类结构大体可识别。"
    ],
    agreements: [
      "陌生情境编码的信度在多种文化样本中得到验证。",
      "安全型在多数西方样本中约占 60% 至 65%，分布可重复。",
      "不安全依恋与后续行为问题相关，但效应中等。"
    ],
    disagreements: [
      { topic: "依恋类型是否稳定", sides: [ { who: "ainsworth", view: "依恋类型反映稳定的关系组织" }, { who: "兰姆", view: "类型随照料环境与测量情境而变，稳定性被高估" } ], stake: "稳定性决定早期分类能否用于长期预测" },
      { topic: "混乱型的边界", sides: [ { who: "main", view: "混乱型是可编码的独立类别" }, { who: "莱昂斯-鲁斯", view: "混乱型高度异质，宜按行为维度而非类别处理" } ], stake: "分类方式直接影响临床判断与干预靶点" }
    ],
    evidence: [
      { text: "Ainsworth, Blehar, Waters & Wall, Patterns of Attachment（1978）", doi: null },
      { text: "Ainsworth & Bell, Attachment, exploration, and separation（1970）", doi: null },
      { text: "Main & Solomon, Procedures for identifying infants as disorganized/disoriented（1990）", doi: null }
    ],
    applications: [
      "用依恋评估筛查高风险家庭，而不用于普通儿童贴标签。",
      "托育机构保证主要照料者稳定与可预期。",
      "对回避型儿童减少强迫亲密，对矛盾型儿童提供可预期的分离预告。",
      "以敏感性指导替代笼统的「多陪伴」建议。"
    ],
    terms: [
      { t: "陌生情境", en: "Strange Situation", d: "通过分离与重聚观察依恋组织的标准化程序。" },
      { t: "安全基地", en: "Secure Base", d: "支持探索并在压力时提供安抚的照料者功能。" },
      { t: "重聚行为", en: "Reunion Behavior", d: "分离后与照料者重逢时的接近与安抚模式。" },
      { t: "混乱型依恋", en: "Disorganized Attachment", d: "缺乏一致策略、出现冻结或恐惧行为的依恋模式。" }
    ]
  },
  E149: {
    definition: "托马斯与切斯在纽约纵向研究中提出，婴儿在活动水平、节律性、趋近退缩、适应性、反应阈、反应强度、心境、注意分散度与坚持性九个维度上存在稳定差异，可归为容易型、困难型与慢热型。气质本身无优劣，发展结果取决于气质与环境要求之间的「拟合优度」。",
    claims: [
      "气质是具有生物学基础的早期行为风格差异，在婴儿期即可观察。",
      "气质维度相对稳定但非固定，会随成熟与经验发生变化。",
      "发展结果不由气质单独决定，而由气质与环境要求的匹配程度决定。",
      "困难型气质在缺乏回应的教养中风险更高，在结构化支持中可转化。",
      "教养方式应依据儿童气质调整，而非套用统一标准。"
    ],
    agreements: [
      "气质差异在婴儿期可测量，且具有中等遗传度。",
      "困难型气质与后续行为问题相关，但相关受教养方式调节。",
      "拟合优度概念被广泛用于解释同一教养下的不同结果。"
    ],
    disagreements: [
      { topic: "气质应如何划分维度", sides: [ { who: "thomas_chess", view: "九个维度可归为三种气质类型" }, { who: "罗斯巴特", view: "反应性与自我调节两维更能概括气质结构" } ], stake: "维度划分决定测量工具与干预靶点" },
      { topic: "早期气质能否预测成人人格", sides: [ { who: "thomas_chess", view: "气质具连续性，但受环境匹配调节" }, { who: "卡根", view: "行为抑制的长期连续性有限，不宜过度预测" } ], stake: "预测力决定早期气质评估的使用边界" }
    ],
    evidence: [
      { text: "Thomas & Chess, Temperament and Development（1977）", doi: null },
      { text: "Thomas, Chess & Birch, Temperament and Behavior Disorders in Children（1968）", doi: null },
      { text: "Kagan, Galen's Prophecy: Temperament in Human Nature（1994）", doi: null }
    ],
    applications: [
      "依据气质调整托育与课堂的刺激强度与过渡节奏。",
      "为慢热儿童提供渐进式适应，不强迫即时参与。",
      "家长教育中讲解匹配而非纠正气质。",
      "避免用「难养型」标签固化对儿童的期待。"
    ],
    terms: [
      { t: "气质", en: "Temperament", d: "早期出现、具生物学基础的行为反应风格。" },
      { t: "拟合优度", en: "Goodness of Fit", d: "气质特征与环境要求之间的匹配程度。" },
      { t: "行为抑制", en: "Behavioral Inhibition", d: "面对陌生情境时退缩与谨慎的稳定倾向。" },
      { t: "慢热型", en: "Slow-to-Warm-Up", d: "在新情境中需较长时间适应的一类气质模式。" }
    ]
  },
  E150: {
    definition: "哈特等在 1980 至 1990 年代提出，自我概念是多维、领域特殊的自我评价网络，涵盖学业、外貌、运动、社会接纳与行为等域，整体自尊则由各域评价按主观重要性加权整合。其发展从学前的全盘积极，到学龄期的领域分化，再到青春期的分化与整合并存。",
    claims: [
      "自我概念是多维结构，各领域评价可分离，学业自我并不等于整体自尊。",
      "学前儿童自我评价偏高且全盘积极，难以区分能力与努力。",
      "随年龄增长，儿童进行更多社会比较，自我评价准确性提高而水平下降。",
      "整体自尊由领域评价与主观重要性权重共同决定。",
      "自尊与学业成绩相关，但因果方向双向且效应有限。"
    ],
    agreements: [
      "自我概念具多维结构，因素分析支持领域分化。",
      "青少年早期自尊常出现下降，随后逐步回升。",
      "自尊与心理健康指标相关，但高自尊不必然带来更好表现。"
    ],
    disagreements: [
      { topic: "自尊与学业成就的因果方向", sides: [ { who: "harter", view: "领域自我评价影响投入与坚持，进而影响成绩" }, { who: "马什", view: "学业成就在技能发展模型中对自我概念影响更强" } ], stake: "因果方向决定资源应投向提升自尊还是提升能力" },
      { topic: "提升自尊是否应作为教育目标", sides: [ { who: "harter", view: "领域胜任感是自尊的基础，值得培养" }, { who: "鲍迈斯特", view: "高自尊与成就无稳定因果，单独提升自尊收益有限" } ], stake: "目标设定影响课程与评价制度的设计" }
    ],
    evidence: [
      { text: "Harter, The Construction of the Self（1999）", doi: null },
      { text: "Harter, The Perceived Competence Scale for Children（1982）", doi: null },
      { text: "Marsh & Craven, Reciprocal effects of self-concept and performance（2006）", doi: null }
    ],
    applications: [
      "反馈指向具体领域与策略，而非笼统的「你真棒」。",
      "设计可达成的小任务，让儿童在具体领域积累胜任证据。",
      "青春期安排自我探索与多元角色尝试。",
      "避免以单科成绩推断整体自我价值。"
    ],
    terms: [
      { t: "自我概念", en: "Self-Concept", d: "关于自己各方面能力与特征的多维评价。" },
      { t: "整体自尊", en: "Global Self-Esteem", d: "对自我整体价值的总体评价。" },
      { t: "领域特殊性", en: "Domain Specificity", d: "自我评价在不同能力领域彼此分离。" },
      { t: "社会比较", en: "Social Comparison", d: "以他人为参照评估自身能力的过程。" }
    ]
  },
  E151: {
    definition: "马西亚在 1966 年依据埃里克森理论，以「探索」与「承诺」两个维度划分同一性的四种状态：达成、延缓、早闭与弥散。该操作化使同一性从哲学概念转为可测量构念，并催生大量青少年与成人研究。状态而非阶段，意味着个体可在不同领域与时期反复转换。",
    claims: [
      "同一性可用探索与承诺两维操作化，形成四种状态而非线性阶段。",
      "达成状态伴随较成熟的自我调节与较低的焦虑水平。",
      "延缓状态是健康的探索期，但长期滞留伴随犹豫与焦虑。",
      "早闭状态的承诺来自他人，遇到冲突时容易动摇。",
      "状态可以反复转换，同一性形成不是一次性完成。"
    ],
    agreements: [
      "四种状态在多种文化样本中可识别，测量信度可接受。",
      "延缓状态在大学生中常见，且与主动探索相关。",
      "同一性达成与心理适应正相关，元分析支持。"
    ],
    disagreements: [
      { topic: "状态分类还是叙事过程", sides: [ { who: "marcia", view: "同一性可由状态分类刻画，便于比较" }, { who: "麦克亚当斯", view: "同一性是持续建构的生命叙事，分类会丢失过程" } ], stake: "方法论选择影响研究结论与辅导评估方式" },
      { topic: "访谈与自陈量表是否测同一构念", sides: [ { who: "marcia", view: "半结构访谈是状态判定的标准方法" }, { who: "亚当斯", view: "自陈量表可高效测量同一性风格与状态" } ], stake: "测量工具不同会导致同一研究的结论不可比" }
    ],
    evidence: [
      { text: "Marcia, Development and validation of ego-identity status（1966）", doi: null },
      { text: "Marcia, Identity in Adolescence（1980）", doi: null },
      { text: "Kroger & Marcia, The identity statuses: Origins, meanings, and interpretations（2011）", doi: null }
    ],
    applications: [
      "生涯与选科辅导中区分「探索不足」与「承诺过早」。",
      "在大学通识阶段提供低成本的角色试探机会。",
      "把延迟探索视为正常过程，而非落后或逃避。",
      "用同一性访谈辅助个别辅导，而非仅凭问卷分类。"
    ],
    terms: [
      { t: "探索", en: "Exploration", d: "主动尝试不同角色与价值以寻找方向的过程。" },
      { t: "承诺", en: "Commitment", d: "对特定价值与目标的稳定投入。" },
      { t: "早闭", en: "Foreclosure", d: "未经充分探索即接受他人安排的身份状态。" },
      { t: "同一性弥散", en: "Identity Diffusion", d: "既未探索也未承诺的弥散状态。" }
    ]
  },
  E152: {
    definition: "梅因等在 1985 年发展成人依恋访谈，以叙述连贯性评估成人关于早期依恋经验的表征状态；巴塞洛缪与霍洛维茨进一步提出安全、痴迷、回避与恐惧四种成人依恋风格。核心概念是内部工作模型作为相对稳定的表征，持续影响亲密关系与情绪调节。该研究把依恋从婴儿观察延伸到成人表征层面。",
    claims: [
      "成人依恋表征可通过叙述的连贯性而非经历内容本身来评估。",
      "内部工作模型包含自我模型与他人模型两个维度，组合成四种风格。",
      "依恋风格影响亲密关系中的接近、冲突处理与情绪调节策略。",
      "成人依恋具有一定稳定性，但可经关系经验与心理治疗改变。",
      "未解决的创伤状态与解离性叙述具有临床意义。"
    ],
    agreements: [
      "成人依恋访谈编码与婴儿依恋存在跨代相关，元分析支持中等效应。",
      "依恋焦虑与依恋回避两维在自陈量表中可重复。",
      "不安全依恋与较低的关系满意度相关。"
    ],
    disagreements: [
      { topic: "访谈与自陈量表是否测同一构念", sides: [ { who: "main", view: "访谈评估的是叙述整合与防御过程" }, { who: "巴塞洛缪", view: "自陈量表测量的是可意识到的关系风格" } ], stake: "两种测量相关偏低，影响临床与研究结论的可比性" },
      { topic: "成人依恋的稳定性有多高", sides: [ { who: "main", view: "依恋表征具有较强连续性与跨代传递" }, { who: "弗雷利", view: "稳定性中等，关系事件可显著改变依恋" } ], stake: "稳定性估计决定「可改变性」与治疗预期的判断" }
    ],
    evidence: [
      { text: "George, Kaplan & Main, Adult Attachment Interview（1985）", doi: null },
      { text: "Brennan, Clark & Shaver, Self-report measurement of adult attachment（1998）", doi: null },
      { text: "Fraley, Attachment stability from infancy to adulthood: Meta-analysis（2002）", doi: null }
    ],
    applications: [
      "伴侣与亲子咨询中引入依恋视角理解冲突循环。",
      "教师对高回避学生减少公开施压，提供可预期的私下沟通。",
      "以反思功能训练帮助照护者理解儿童行为背后的意图。",
      "避免用依恋类型作为筛选或标签化工具。"
    ],
    terms: [
      { t: "成人依恋访谈", en: "Adult Attachment Interview", d: "以叙述连贯性评估成人依恋表征的半结构访谈。" },
      { t: "反思功能", en: "Reflective Function", d: "理解自己与他人行为背后心理状态的能力。" },
      { t: "依恋焦虑", en: "Attachment Anxiety", d: "担心被抛弃、过度寻求靠近的倾向。" },
      { t: "依恋回避", en: "Attachment Avoidance", d: "回避亲密与依赖、强调自立的倾向。" }
    ]
  },
  /* ── 道德与社会化 ── */
  E153: {
    definition: "皮亚杰在 1932 年《儿童的道德判断》中，通过打弹珠规则与故事对偶判断研究，提出道德判断从他律走向自律：年幼儿童以结果与权威命令为准，年长儿童逐渐重视动机与互惠。其机制是角色采择与同伴平等互动带来的去中心化。该研究奠定了道德认知发展研究的基本问题。",
    claims: [
      "道德判断由他律道德发展为自律道德：规则从权威给定、不可变更，转为协商生成、可以修改。",
      "年幼儿童依据行为结果判断对错，年长儿童更多考虑动机与意图。",
      "同伴平等互动促进去中心化，成人单向权威则维持他律。",
      "惩罚观从抵罪性惩罚转向以互惠与修复为取向的惩罚观。",
      "道德发展与认知发展平行，受同一逻辑结构制约。"
    ],
    agreements: [
      "动机在道德判断中的权重随年龄增加，跨文化研究可重复。",
      "同伴互动的质量与道德推理水平相关。",
      "幼儿对规则的理解确有明显的权威依赖特征。"
    ],
    disagreements: [
      { topic: "幼儿是否真的只看结果", sides: [ { who: "piaget", view: "前运算期儿童以结果责任为判断依据" }, { who: "turiel", view: "幼儿已能考虑意图，失败多因任务语言负担" } ], stake: "若能力早已存在，道德教育的起点应大幅提前" },
      { topic: "道德是否按整体阶段发展", sides: [ { who: "piaget", view: "道德判断随一般认知结构整体推进" }, { who: "turiel", view: "道德、习俗与个人领域各自发展，不成整体阶段" } ], stake: "发展单位的选择决定德育课程如何组织" }
    ],
    evidence: [
      { text: "Piaget, The Moral Judgment of the Child（1932）", doi: null },
      { text: "Turiel, The Development of Social Knowledge（1983）", doi: null },
      { text: "Killen & Smetana (eds.), Handbook of Moral Development（2015）", doi: null }
    ],
    applications: [
      "用同伴协商共同制定班级规则，而非单方面宣布。",
      "处理冲突时先询问意图与情境，再谈后果。",
      "避免仅凭结果奖惩，以减少「没被抓到就不算错」的推理。",
      "以两难故事与真实校园议题组织道德讨论。"
    ],
    terms: [
      { t: "他律道德", en: "Heteronomous Morality", d: "以权威命令与固定规则为判断依据的道德观。" },
      { t: "自律道德", en: "Autonomous Morality", d: "以互惠、意图与协商为基础的道德观。" },
      { t: "结果责任", en: "Objective Responsibility", d: "仅按行为造成的后果大小判断对错。" },
      { t: "抵罪性惩罚", en: "Expiatory Punishment", d: "以施加痛苦抵偿过错的惩罚观念。" }
    ]
  },
  E154: {
    definition: "科尔伯格在 1958 年博士论文及后续研究中，用海因茨偷药等道德两难故事提出三水平六阶段理论：前习俗（惩罚服从、工具性互惠）、习俗（人际和谐、维护秩序）、后习俗（社会契约、普遍原则）。他主张阶段顺序普遍且不可跳跃，后习俗推理是道德成熟的标志。该理论长期主导道德心理学与德育课程。",
    claims: [
      "道德推理按三水平六阶段顺序发展，顺序不变而速度因人而异。",
      "阶段是结构化的整体，个体在同一阶段的推理具有跨情境一致性。",
      "认知冲突与「加一阶段」的同伴讨论可以促进阶段提升。",
      "后习俗推理以普遍原则而非既有规则为最终依据。",
      "道德判断水平与道德行为相关，但不构成直接因果。"
    ],
    agreements: [
      "道德推理随年龄向更高阶段移动，纵向研究支持顺序性。",
      "认知发展与角色采择水平是阶段前进的重要条件。",
      "后习俗推理在成人中同样并不普遍，阶段分布可重复。"
    ],
    disagreements: [
      { topic: "理论是否存在性别偏向", sides: [ { who: "kohlberg", view: "公正与权利是道德成熟的核心标准" }, { who: "gilligan", view: "以关怀与责任为核心的取向被误判为低阶段" } ], stake: "成熟标准的设定直接影响评分与教育目标" },
      { topic: "阶段是否具有文化普遍性", sides: [ { who: "kohlberg", view: "六阶段顺序适用于所有文化" }, { who: "施维德", view: "道德推理的内容与次序随文化伦理传统而变" } ], stake: "普遍性主张决定能否跨文化使用同一测评" },
      { topic: "阶段还是图式", sides: [ { who: "kohlberg", view: "发展是结构化整体的阶段更替" }, { who: "雷斯特", view: "以图式与判断分数刻画更符合实证数据" } ], stake: "构念界定影响测量方法与干预设计" }
    ],
    evidence: [
      { text: "Kohlberg, The development of modes of moral thinking and choice in the years 10 to 16（1958）", doi: null },
      { text: "Kohlberg, Stage and sequence: The cognitive-developmental approach to socialization（1969）", doi: null },
      { text: "Colby et al., A longitudinal study of moral judgment（1983）", doi: null }
    ],
    applications: [
      "以两难讨论与「加一阶段」同伴对话组织德育课堂。",
      "在服务学习中安排伦理反思，把行动与推理连接。",
      "避免用阶段给学生贴道德等级标签。",
      "以班级公约的公共理性讨论替代单向训导。"
    ],
    terms: [
      { t: "前习俗水平", en: "Preconventional Level", d: "以奖惩与个人利害为判断依据的道德水平。" },
      { t: "习俗水平", en: "Conventional Level", d: "以社会期望与秩序维护为判断依据的道德水平。" },
      { t: "后习俗水平", en: "Postconventional Level", d: "以社会契约与普遍原则为依据的道德水平。" },
      { t: "道德两难", en: "Moral Dilemma", d: "两种道德价值冲突、无显然正确答案的情境。" }
    ]
  },
  E155: {
    definition: "吉利根在 1982 年《不同的声音》中批评科尔伯格以公正与权利作为道德成熟标准，指出存在以关系、责任与回应需要为核心的关怀伦理。她主张两种取向并非高低阶段，而是不同的道德声音，其差异部分源于性别化的社会化经验。该批评推动了关怀伦理学与关系性道德研究。",
    claims: [
      "道德发展存在关怀取向，核心是维持关系与回应具体他人的需要。",
      "关怀取向并非低于公正取向的阶段，而是不同的道德框架。",
      "传统评分把关怀取向编码为较低阶段，造成系统性性别偏差。",
      "道德成熟应包含对情境与关系的敏感，而非仅抽象原则的一致应用。",
      "性别差异源于社会化与话语机会，而非本质差异。"
    ],
    agreements: [
      "道德推理中存在可独立测量的关怀与关系维度。",
      "科尔伯格早期样本以男性为主，结论的普遍性因此受限。",
      "关怀取向与女性社会化经验有统计关联，但效应不大。"
    ],
    disagreements: [
      { topic: "道德取向是否存在稳定性别差异", sides: [ { who: "gilligan", view: "男女在道德取向上呈现可辨识的系统差异" }, { who: "贾菲与海德", view: "元分析显示性别差异很小，且随情境变化" } ], stake: "差异大小决定是否应以性别为单位设计德育" },
      { topic: "公正与关怀是两种伦理还是同一伦理的两面", sides: [ { who: "gilligan", view: "关怀是独立且等值的道德声音" }, { who: "kohlberg", view: "关怀可纳入以公正为核心的统一发展序列" } ], stake: "这决定德育应以原则推理还是关系实践为主线" }
    ],
    evidence: [
      { text: "Gilligan, In a Different Voice（1982）", doi: null },
      { text: "Jaffee & Hyde, Gender differences in moral orientation: A meta-analytic review（2000）", doi: "10.1037/0033-2909.126.5.703" },
      { text: "Noddings, Caring: A Feminine Approach to Ethics and Moral Education（1984）", doi: null }
    ],
    applications: [
      "德育课程纳入关怀、照护与关系修复议题。",
      "在班级中建立同伴照顾与互助制度。",
      "冲突调解以修复关系为目标，而非仅判定责任。",
      "避免把「讲原则」当作唯一的成熟标准。"
    ],
    terms: [
      { t: "关怀伦理", en: "Ethics of Care", d: "以关系维系与回应他人需要为核心的伦理框架。" },
      { t: "不同的声音", en: "Different Voice", d: "指被主流公正伦理遮蔽的关怀道德取向。" },
      { t: "关系性自我", en: "Relational Self", d: "在关系网络中界定自我的心理倾向。" },
      { t: "责任伦理", en: "Ethics of Responsibility", d: "以对具体他人的责任而非抽象权利为起点。" }
    ]
  },
  E156: {
    definition: "图列尔在 1983 年提出社会域理论，主张儿童并非把一切规则视为同类，而是区分道德（伤害、公平、权利）、社会习俗（约定俗成的规范）与个人领域（个人选择）。三者在权威依赖、可变更性与跨情境普遍性上不同，这一区分在幼儿期即可观察到。该理论以领域特殊性替代整体阶段论。",
    claims: [
      "儿童早期即可区分道德规则与社会习俗，前者被视为不可由权威任意更改。",
      "个人领域的划定为儿童争取自主，其边界随文化与发展而变化。",
      "道德判断基于伤害、公平与权利，而非仅内化成人禁令。",
      "社会域区分具有跨文化普遍性，但各域的具体内容存在文化差异。",
      "发展不是整体阶段更替，而是各领域内知识逐步精细化。"
    ],
    agreements: [
      "幼儿在「无规则允许」的情境下仍判定伤害行为错误，跨文化可重复。",
      "青少年与父母的冲突多集中在个人领域与安全议题的边界。",
      "三域区分在多种文化样本中得到验证。"
    ],
    disagreements: [
      { topic: "道德与习俗的边界是否普遍", sides: [ { who: "turiel", view: "道德域基于伤害与公平，具有跨文化普遍性" }, { who: "施维德", view: "道德与习俗在许多文化中相互交织，难以分割" } ], stake: "若边界不普遍，以三域为基础的德育框架需本土化" },
      { topic: "是否还需要阶段概念", sides: [ { who: "turiel", view: "各域内知识渐进精细化，无须整体阶段" }, { who: "kohlberg", view: "道德推理按结构化阶段整体提升" } ], stake: "发展单位的取舍决定测评与课程组织方式" }
    ],
    evidence: [
      { text: "Turiel, The Development of Social Knowledge（1983）", doi: null },
      { text: "Smetana, Preschool children's conceptions of moral and social rules（1981）", doi: null },
      { text: "Nucci & Turiel, Social interactions and the development of social concepts in preschool children（1978）", doi: null }
    ],
    applications: [
      "班级规则区分「安全与公平」和「本班惯例」，并说明理由。",
      "尊重青少年的个人领域，在发型、兴趣等议题上减少无谓对抗。",
      "性教育与安全议题以保护与权利为框架，而非仅凭权威。",
      "以说理与协商替代以「规定如此」压服。"
    ],
    terms: [
      { t: "社会域", en: "Social Domain", d: "道德、习俗与个人三类规则各自组织的知识领域。" },
      { t: "社会习俗", en: "Social Convention", d: "依群体约定存在、可由权威更改的规范。" },
      { t: "个人领域", en: "Personal Domain", d: "属于个人选择、不应受外部强制的事务范围。" },
      { t: "道德判断", en: "Moral Judgment", d: "基于伤害、公平与权利评价行为对错。" }
    ]
  },
  E157: {
    definition: "霍夫曼在 2000 年《共情与道德发展》中提出，共情经历从自我中心的情绪感染，到以他人感受为中心，再到对他人整体处境与群体处境的共情这一发展序列，是道德动机的核心来源。内疚与羞耻等道德情绪则调节行为后果的整合。该理论把情感过程置于道德发展的中心。",
    claims: [
      "共情发展分阶段：从情绪感染到以他人为中心，再到对群体处境的共情。",
      "共情通过唤起对受害者痛苦的感受引发道德动机，但强度过高会导致回避。",
      "内疚指向行为并可促成修复，羞耻指向自我并可能引发攻击或退缩。",
      "共情与观点采择相互作用，后者扩展共情的适用范围。",
      "教养中的诱导式说明比权力压制更能培养道德内化。"
    ],
    agreements: [
      "共情与亲社会行为正相关，元分析支持中等效应。",
      "内疚倾向与较少攻击、较多修复行为相关。",
      "父母使用诱导式管教与儿童道德内化相关。"
    ],
    disagreements: [
      { topic: "共情是否真正驱动利他", sides: [ { who: "hoffman", view: "共情唤起直接产生利他动机" }, { who: "西奥迪尼", view: "助人主要为缓解自身不适，本质仍是自我取向" } ], stake: "动机来源的判定影响德育应培养情感还是规范" },
      { topic: "共情是否应作为核心教育目标", sides: [ { who: "hoffman", view: "共情是道德动机最可靠的来源" }, { who: "布卢姆", view: "共情存在范围偏见，宜以原则与制度补充" } ], stake: "目标设定决定课程重心放在体验还是推理" }
    ],
    evidence: [
      { text: "Hoffman, Empathy and Moral Development（2000）", doi: null },
      { text: "Batson, The Altruism Question（1991）", doi: null },
      { text: "Eisenberg, Fabes & Spinrad, Prosocial development（2006）", doi: null }
    ],
    applications: [
      "以诱导式说明行为对他人的影响，替代羞辱与体罚。",
      "用角色扮演、叙事与影像培养观点采择。",
      "反馈中区分「你做了错事」（内疚）与「你是坏孩子」（羞耻）。",
      "服务学习中安排对受助者处境的反思。"
    ],
    terms: [
      { t: "共情", en: "Empathy", d: "对他人的情绪状态产生替代性感受的能力。" },
      { t: "同情关怀", en: "Sympathy", d: "对他人处境的关切与帮助意愿，含情感与认知成分。" },
      { t: "内疚", en: "Guilt", d: "因自己行为造成伤害而产生的负性情绪，指向行为。" },
      { t: "诱导", en: "Induction", d: "通过说明行为后果与他人感受来引导规范内化。" }
    ]
  },
  E158: {
    definition: "艾森伯格等通过纵向研究与元分析刻画了分享、助人、安慰等亲社会行为的发展轨迹：随观点采择、情绪调节与道德推理的发展而增加，并受教养方式、榜样与同伴规范调节。其研究强调亲社会行为有多种动机来源，包括自利、规范、共情与内化价值。",
    claims: [
      "亲社会行为在幼儿期以自我中心式分享为主，随年龄转向更考虑公平与需要。",
      "观点采择与共情是亲社会行为的重要预测因子。",
      "父母温暖与诱导式教养促进亲社会行为，严厉惩罚则抑制。",
      "亲社会行为具有一定的跨情境稳定性，但程度中等。",
      "青少年期助人行为受同伴规范与身份认同的影响明显增大。"
    ],
    agreements: [
      "亲社会行为随年龄增加，且个体差异具有中等稳定性。",
      "共情与亲社会行为正相关，跨文化可重复。",
      "榜样示范与具体表扬可短期提升分享行为。"
    ],
    disagreements: [
      { topic: "是否存在纯粹的利他动机", sides: [ { who: "eisenberg", view: "内化价值与共情可产生非自利的助人动机" }, { who: "西奥迪尼", view: "助人可由缓解自身负性状态解释" } ], stake: "动机解释影响德育是培养情感体验还是行为规范" },
      { topic: "表扬是否会削弱内在动机", sides: [ { who: "eisenberg", view: "针对行为的具体表扬可强化亲社会行为" }, { who: "deci_ryan", view: "控制性奖励会侵蚀内在动机与自主感" } ], stake: "奖励设计方式直接决定亲社会行为能否持续" }
    ],
    evidence: [
      { text: "Eisenberg & Fabes, Prosocial development（1998）", doi: null },
      { text: "Eisenberg, Spinrad & Knafo-Noam, Prosocial development（2015）", doi: null },
      { text: "Warneken & Tomasello, Altruistic helping in human infants and young chimpanzees（2006）", doi: null }
    ],
    applications: [
      "设置轮值、互助岗与班级服务角色。",
      "使用描述性、过程性表扬而非贴「好孩子」标签。",
      "以同伴辅导与服务学习提供真实的助人经验。",
      "冲突后安排修复性行动，把道歉落到具体补偿。"
    ],
    terms: [
      { t: "亲社会行为", en: "Prosocial Behavior", d: "有益于他人、不以外部回报为目的的自愿行为。" },
      { t: "观点采择", en: "Perspective Taking", d: "推断他人想法与感受的认知能力。" },
      { t: "内化", en: "Internalization", d: "外部规范转化为个人价值与自我要求的过程。" },
      { t: "助人", en: "Helping", d: "在他人需要时提供实际支持的行为。" }
    ]
  },
  /* ── 语言发展 ── */
  E159: {
    definition: "乔姆斯基在 1957 年《句法结构》与 1965 年《句法理论面面观》中提出，儿童能在有限且不完美的输入下迅速掌握复杂语法，说明存在先天的语言官能与普遍语法，环境只提供触发经验并设定参数。语言习得装置即这一先天机制的表征。该立场引发了语言学与心理学的持续论战。",
    claims: [
      "语言能力是先天官能，普遍语法规定所有人类语言的可能形式。",
      "儿童输入有限且含错误，却能在数年内掌握复杂规则，构成刺激贫乏论证。",
      "语言习得是原则激活与参数设定，而非逐句模仿与强化。",
      "语法能力相对独立于一般认知与交际意图，具有模块性。",
      "语言的核心结构具有生物学基础，并受敏感期约束。"
    ],
    agreements: [
      "儿童语言发展的速度与规则性难以用单纯模仿解释。",
      "语言习得存在敏感期，晚期习得者达到母语水平的比例下降。",
      "所有已知语言都共享某些结构特征，如递归。"
    ],
    disagreements: [
      { topic: "语言能力源于先天语法还是用法归纳", sides: [ { who: "chomsky", view: "普遍语法是先天的、领域特殊的语言官能" }, { who: "tomasello", view: "语言由意图共享与模式归纳在社会互动中建构" } ], stake: "若语言源于一般认知，普遍语法便非必要假设" },
      { topic: "刺激贫乏论证是否成立", sides: [ { who: "chomsky", view: "输入不足以决定语法，故需先天约束" }, { who: "普利马克", view: "对儿童实际输入与可学性的估计存在系统性偏差" } ], stake: "论证成败直接影响先天论的经验基础" }
    ],
    evidence: [
      { text: "Chomsky, Syntactic Structures（1957）", doi: null },
      { text: "Chomsky, A review of B. F. Skinner's Verbal Behavior（1959）", doi: null },
      { text: "Chomsky, Aspects of the Theory of Syntax（1965）", doi: null }
    ],
    applications: [
      "母语习得不必依赖系统语法规则灌输，应重视丰富输入。",
      "第二语言学习需考虑起始年龄与输入量，但不宜夸大关键期。",
      "对语言障碍评估区分语法加工与一般认知能力。",
      "审慎对待「错过关键期即无法学会」的绝对化宣称。"
    ],
    terms: [
      { t: "语言习得装置", en: "Language Acquisition Device", d: "假定中负责快速习得语法的先天机制。" },
      { t: "普遍语法", en: "Universal Grammar", d: "所有人类语言共同遵循的先天结构原则。" },
      { t: "刺激贫乏", en: "Poverty of the Stimulus", d: "儿童所获输入不足以唯一确定其语法的主张。" },
      { t: "参数", en: "Parameter", d: "可由经验触发而在有限选项间设定的语法维度。" }
    ]
  },
  E160: {
    definition: "布鲁纳在 1983 年《儿童谈话》中提出语言习得支持系统，认为成人通过与婴儿建立的互动「格式」、共同注意与脚手架，为语言习得提供结构化社会支持。语言发展是先天机制与社会互动共同作用的结果，而非单一模块的独立展开。该理论把语言习得放回日常照料实践之中。",
    claims: [
      "成人—婴儿的常规互动格式（喂食、洗澡、共读）提供可预测的语言情境。",
      "共同注意与指称行为帮助儿童建立词与物的稳定映射。",
      "成人通过扩展、重述与简化输入为儿童提供可理解的脚手架。",
      "语言习得既需先天能力，也需社会支持系统，二者不可分割。",
      "文化实践塑造儿童学习语言的方式与内容。"
    ],
    agreements: [
      "共同注意与词汇发展正相关，纵向研究支持。",
      "成人的重述与扩展与儿童句法发展相关。",
      "亲子互动质量预测语言发展，跨文化可重复。"
    ],
    disagreements: [
      { topic: "社会支持是必要条件还是加速条件", sides: [ { who: "bruner", view: "语言习得依赖成人提供的互动支架" }, { who: "chomsky", view: "语言官能可在有限输入下自行展开" } ], stake: "这决定语言迟缓干预应聚焦互动还是等待成熟" },
      { topic: "输入的量还是互动质量更关键", sides: [ { who: "bruner", view: "互动结构与共同注意决定习得效率" }, { who: "哈特与里斯利", view: "早期词汇输入量的差异造成显著差距" } ], stake: "资源投向词汇量补充还是互动质量培训由此分出" }
    ],
    evidence: [
      { text: "Bruner, Child's Talk: Learning to Use Language（1983）", doi: null },
      { text: "Bruner, The ontogenesis of speech acts（1975）", doi: null },
      { text: "Tomasello & Farrar, Joint attention and early language（1986）", doi: null }
    ],
    applications: [
      "亲子共读中先建立共同注意，再给词命名与扩展。",
      "托育机构采用应答性照护，跟随婴儿兴趣命名。",
      "语言迟缓干预训练家长的扩展与重述技巧。",
      "避免只追求词汇量而忽视对话轮次与互动结构。"
    ],
    terms: [
      { t: "语言习得支持系统", en: "LASS", d: "成人为语言习得提供的结构化社会支持系统。" },
      { t: "格式", en: "Format", d: "成人与婴儿反复进行的可预测互动常规。" },
      { t: "共同注意", en: "Joint Attention", d: "成人与婴儿共同关注同一对象的协调状态。" },
      { t: "重述", en: "Recast", d: "把儿童的话以更完整或更规范的形式重说。" }
    ]
  },
  E161: {
    definition: "托马塞洛在 2003 年《建构语言》中提出用法本位理论：儿童从具体互动中的意图理解出发，先掌握单词与固定短语，再通过模式归纳与类比逐步抽象出句法结构。语言能力源于一般认知能力（意图共享、模式发现）与文化学习，而非独立的普遍语法模块。",
    claims: [
      "儿童早期语言由具体项目构成，如以特定动词为中心的句式，而非抽象规则。",
      "意图共享与共同注意是词义习得的前提。",
      "句法结构通过类比与模式归纳从具体表达中逐步抽象。",
      "语言习得依赖一般认知机制与文化学习，无需专用语法模块。",
      "输入频率与分布特征直接影响习得顺序。"
    ],
    agreements: [
      "儿童早期句法确以具体动词为中心，项目本位模式可重复。",
      "输入频率与词汇、结构习得相关。",
      "共同注意与意图理解预测词汇发展。"
    ],
    disagreements: [
      { topic: "是否需要普遍语法", sides: [ { who: "tomasello", view: "语言可由一般认知与互动归纳而成" }, { who: "chomsky", view: "缺乏先天约束则无法解释习得的效率与一致性" } ], stake: "理论取舍决定语言教学与语言障碍研究的方向" },
      { topic: "幼儿是否具有抽象句法表征", sides: [ { who: "tomasello", view: "早期句法局限于具体词汇项目" }, { who: "费希尔", view: "幼儿在眼动任务中已表现出抽象句法预期" } ], stake: "表征抽象程度影响语言教学应从句型还是构式入手" }
    ],
    evidence: [
      { text: "Tomasello, Constructing a Language: A Usage-Based Theory（2003）", doi: null },
      { text: "Tomasello, First Verbs: A Case Study of Early Grammatical Development（1992）", doi: null },
      { text: "Childers & Tomasello, Two-year-olds learn novel nouns, verbs, and conventional actions（2002）", doi: null }
    ],
    applications: [
      "语言教学以高频常用句型与构式为起点，而非先讲抽象规则。",
      "在真实互动情境中教词与句，保持意图清晰。",
      "对语言迟缓儿童增加有意义的对话轮次。",
      "外语教学采用构式与框架句训练，逐步替换成分。"
    ],
    terms: [
      { t: "用法本位", en: "Usage-Based", d: "语言结构由使用中的模式归纳而成。" },
      { t: "项目本位", en: "Item-Based", d: "早期句法围绕具体词汇项目组织。" },
      { t: "意图共享", en: "Shared Intentionality", d: "与他人共享目标与注意的心理能力。" },
      { t: "模式归纳", en: "Pattern Finding", d: "从反复出现的表达中抽取规律的一般认知机制。" }
    ]
  },
  E162: {
    definition: "语音意识指对口语中音节、押韵与音素进行切分与操作的能力；解码指把字形映射到语音的能力。埃里提出阅读发展阶段模型，认为音—形对应规则的显式教学是学会阅读的关键，语音意识是早期阅读最强预测因子之一。该结论经美国国家阅读小组报告等大规模评估后成为阅读教学的主流依据。",
    claims: [
      "语音意识是早期阅读与拼写发展的强预测因子，优于一般智力。",
      "解码依赖字形—音素对应规则的掌握，需显式且系统的教学。",
      "阅读发展经历阶段：由整体视觉词到字母—音素映射再到自动化。",
      "系统语音教学对初学读者与阅读困难学生均有正向效应。",
      "阅读障碍的核心缺陷多在语音加工，而非视觉或智力。"
    ],
    agreements: [
      "系统语音教学优于非系统或不教语音，大规模评估支持。",
      "语音意识训练可提升早期单词阅读，效应中等。",
      "语音缺陷与阅读障碍的关联稳定，跨语言可重复。"
    ],
    disagreements: [
      { topic: "阅读教学应以意义还是技能为先", sides: [ { who: "ehri", view: "解码技能是理解的前提，需显式系统教学" }, { who: "古德曼", view: "阅读是意义建构，应在真实文本中自然习得" } ], stake: "取向差异决定了教材、课时与评估的重心" },
      { topic: "正式阅读教学应否推迟", sides: [ { who: "ehri", view: "早期系统教学可预防阅读困难累积" }, { who: "史密斯", view: "过早的技能训练可能损害阅读动机与理解" } ], stake: "入学年龄与课程安排由此产生实质分歧" }
    ],
    evidence: [
      { text: "Ehri, Phases of development in learning to read words by sight（1995）", doi: null },
      { text: "National Reading Panel, Teaching Children to Read（2000）", doi: null },
      { text: "Ehri et al., Systematic phonics instruction helps students learn to read（2001）", doi: null }
    ],
    applications: [
      "幼儿园开展押韵、首音与音节切分等语音游戏。",
      "低年级实施系统的自然拼读课程，配合可解码读物。",
      "入学即筛查语音意识，对落后儿童提供分层干预。",
      "对阅读困难学生强化音素操作与解码流畅性训练。"
    ],
    terms: [
      { t: "语音意识", en: "Phonological Awareness", d: "对口语语音结构进行觉察与操作的能力。" },
      { t: "音素意识", en: "Phonemic Awareness", d: "聚焦最小语音单位并加以操作的能力。" },
      { t: "解码", en: "Decoding", d: "依据字形—语音对应规则把书面词转为语音。" },
      { t: "字母原则", en: "Alphabetic Principle", d: "字母或字母组合表征语音的系统对应关系。" }
    ]
  },
  E163: {
    definition: "双语发展研究关注同时性与顺序性双语习得的路径，以及双语经验对认知的影响。比亚韦斯托克等提出双语者在抑制控制、认知灵活性与元语言意识上可能占优，源于长期管理两种语言的竞争。该「双语优势」假说近十余年受到效应量与发表偏差的严格检验。",
    claims: [
      "双语儿童的语言里程碑顺序与单语相似，但词汇分布与语码转换常见。",
      "管理两种语言的持续竞争可能强化执行功能中的抑制与切换。",
      "双语者在元语言意识与部分阅读技能上可能占优。",
      "优势效应的大小受年龄、语言使用情境与社会经济地位调节。",
      "双语不会导致语言混淆或认知负担，早期「双语有害」观点已被否定。"
    ],
    agreements: [
      "双语不损害整体语言能力与认知发展，证据一致。",
      "双语者的跨语言词汇总量与单语相当，单一语言的词汇量可能较小。",
      "语码转换是正常现象，反映语用能力而非语言混乱。"
    ],
    disagreements: [
      { topic: "双语认知优势是否存在", sides: [ { who: "bialystok", view: "双语经验对抑制控制有可测的正向影响" }, { who: "帕普", view: "优势效应不稳，受样本与发表偏差影响" } ], stake: "效应真伪决定双语教育是否应以认知收益为卖点" },
      { topic: "优势是否局限于特定任务", sides: [ { who: "bialystok", view: "优势体现在需要冲突解决的执行控制任务" }, { who: "莱赫托宁", view: "元分析显示整体效应接近零，仅个别任务显著" } ], stake: "效应范围影响对双语课程的期待与评估设计" }
    ],
    evidence: [
      { text: "Bialystok, Bilingualism（2010）", doi: null },
      { text: "Bialystok, Craik & Freedman, Bilingualism, aging, and cognitive control（2007）", doi: null },
      { text: "Paap & Greenberg, There is no coherent evidence for a bilingual advantage（2013）", doi: null }
    ],
    applications: [
      "支持家庭保持母语，采用添加式双语而非替代式同化。",
      "学校开设双语项目时保证两种语言的学术输入质量。",
      "评估双语儿童语言能力时应跨语言合计，避免误判障碍。",
      "不以「提升智力」作为双语教育的唯一理由。"
    ],
    terms: [
      { t: "同时性双语", en: "Simultaneous Bilingualism", d: "从出生起同时接触两种语言的习得路径。" },
      { t: "语码转换", en: "Code-Switching", d: "在会话中依情境在两种语言间切换。" },
      { t: "元语言意识", en: "Metalinguistic Awareness", d: "把语言本身作为对象加以反思的能力。" },
      { t: "抑制控制", en: "Inhibitory Control", d: "压制优势反应以选择目标语言或行为的能力。" }
    ]
  },
  E164: {
    definition: "发展性语言障碍指在非言语智力正常、无听力或神经损伤的情况下，语言能力显著落后并影响日常功能。毕晓普等推动以 DLD 统一此前混乱的术语，强调其持续性、异质性与共病性，并主张以功能影响而非单一测验分数界定。该界定直接影响识别标准与服务资格。",
    claims: [
      "DLD 的核心是语言能力显著落后，且不能用听力、智力或环境剥夺解释。",
      "DLD 异质性强，可累及语音、词汇、语法与语用等不同层面。",
      "DLD 常与阅读困难、注意问题共病，但共病并非必然结果。",
      "早期识别与语言治疗可改善功能，但多数个案存在持续性困难。",
      "术语统一有助于研究结果比较与服务衔接。"
    ],
    agreements: [
      "DLD 的患病率约在 7% 左右，跨样本估计接近。",
      "语音与语法缺陷是最常见的核心表现。",
      "早期干预能改善语言结果，效应中等。"
    ],
    disagreements: [
      { topic: "如何与语言差异区分", sides: [ { who: "bishop", view: "应以母语常模与功能影响区分障碍与差异" }, { who: "帕拉迪斯", view: "双语儿童常被误判为障碍，评估需跨语言证据" } ], stake: "误判会造成不当分流或漏诊，影响教育安置" },
      { topic: "核心缺陷是语法还是通用加工", sides: [ { who: "bishop", view: "缺陷高度异质，难以归结为单一语法模块" }, { who: "乌尔曼", view: "程序性记忆系统的缺陷可解释语法与词汇困难" } ], stake: "机制假设决定干预是训练语法还是训练序列学习" }
    ],
    evidence: [
      { text: "Bishop, Why is it so hard to reach agreement on terminology? The case of DLD（2017）", doi: null },
      { text: "Bishop & Snowling, Developmental dyslexia and specific language impairment: Same or different?（2004）", doi: null },
      { text: "Tomblin et al., Prevalence of specific language impairment in kindergarten children（1997）", doi: null }
    ],
    applications: [
      "以功能影响与跨情境表现判定，而非仅看智力—语言差距。",
      "课堂提供简化句法、视觉支持与更多加工时间。",
      "语言干预与阅读干预衔接，避免各自为政。",
      "双语家庭应获得支持而非被告知放弃母语。"
    ],
    terms: [
      { t: "发展性语言障碍", en: "DLD", d: "非其他原因可解释的持续性语言困难。" },
      { t: "特定语言障碍", en: "SLI", d: "旧术语，强调排除非言语智力落后。" },
      { t: "共病", en: "Comorbidity", d: "同一儿童同时出现两种及以上发展障碍。" },
      { t: "语用障碍", en: "Pragmatic Impairment", d: "在社交情境中使用语言不当的困难。" }
    ]
  },
  /* ── 情感与社会性 ── */
  E165: {
    definition: "情绪智力指识别、理解、运用与管理情绪的能力。萨洛维与梅耶于 1990 年提出四分支模型，戈尔曼 1995 年的著作则将其扩展为含自我意识、自我管理、社会意识与关系管理的混合模型。能力模型主张以表现测验测量，混合模型则纳入人格特质与动机成分。",
    claims: [
      "情绪智力包含感知、运用、理解与管理情绪四种能力。",
      "能力型情绪智力与一般智力相关但可区分。",
      "情绪智力预测社会适应与关系质量，效应中等。",
      "混合模型与能力模型的测量结果相关较低，不宜混用。",
      "情绪技能可以通过教学与反馈得到部分提升。"
    ],
    agreements: [
      "情绪识别与理解能力可被可靠测量，且与社交表现相关。",
      "情绪智力与人格（尤其宜人性、情绪稳定性）存在部分重叠。",
      "情绪技能可以学习，短期干预有正向效应。"
    ],
    disagreements: [
      { topic: "情绪智力是能力还是特质集合", sides: [ { who: "goleman", view: "情绪智力囊括性格、动机与人际能力" }, { who: "迈耶与萨洛维", view: "应以可测的情绪加工能力界定，排除人格成分" } ], stake: "构念边界决定测量工具与选拔使用的合法性" },
      { topic: "预测力是否独立于智力与人格", sides: [ { who: "goleman", view: "情绪智力对成就有独立且显著的贡献" }, { who: "约瑟夫", view: "控制智力与人格后，增量效度明显缩小" } ], stake: "增量效度决定是否值得在课程与招聘中单独投入" }
    ],
    evidence: [
      { text: "Salovey & Mayer, Emotional intelligence（1990）", doi: null },
      { text: "Goleman, Emotional Intelligence（1995）", doi: null },
      { text: "Mayer, Caruso & Salovey, The ability model of emotional intelligence（2016）", doi: null }
    ],
    applications: [
      "开设情绪词汇、面部与情境识别的教学活动。",
      "教师培训中加入情绪觉察与调节策略。",
      "团队与领导力课程强调倾听与冲突沟通。",
      "避免以 EQ 测验作为选拔或分班的唯一依据。"
    ],
    terms: [
      { t: "能力模型", en: "Ability Model", d: "把情绪智力视为可测验的信息加工能力。" },
      { t: "混合模型", en: "Mixed Model", d: "把情绪智力与人格、动机等特质混合界定。" },
      { t: "情绪管理", en: "Emotion Management", d: "调节自身与他人情绪以达成目标的能力。" },
      { t: "特质情绪智力", en: "Trait EI", d: "以自陈量表测量的情绪相关性格倾向。" }
    ]
  },
  E166: {
    definition: "格罗斯在 1998 年提出情绪调节过程模型，把策略按发生时间分为前因聚焦（情境选择、情境修正、注意分配、认知改变）与反应聚焦（反应调整）。研究表明认知重评在情绪体验、生理与社交后果上优于表达抑制。该模型为情绪调节研究提供了统一的分类框架。",
    claims: [
      "情绪调节可发生在情绪生成过程的多个时点，不同时点的策略后果不同。",
      "认知重评改变情绪意义，减少负性体验而不增加生理代价。",
      "表达抑制降低外显表达，但提高生理唤醒并损害记忆与社交。",
      "策略的适应性取决于情境，灵活运用比固定偏好更重要。",
      "情绪调节能力随年龄发展，并受教养与依恋经验影响。"
    ],
    agreements: [
      "认知重评通常优于表达抑制，实验与元分析支持。",
      "情绪调节困难与内化问题相关。",
      "策略使用具有情境依赖性，单一策略偏好不利于适应。"
    ],
    disagreements: [
      { topic: "表达抑制是否总是适应不良", sides: [ { who: "gross", view: "抑制增加生理负荷并损害社交与记忆" }, { who: "博纳诺", view: "在无法改变情境时，抑制可有效维持功能" } ], stake: "这决定干预是否应一律鼓励「把感受说出来」" },
      { topic: "重评是否跨文化普遍适用", sides: [ { who: "gross", view: "重评的适应性在多种文化中一致" }, { who: "巴特勒", view: "互依文化中抑制表达有助于维系关系和谐" } ], stake: "文化差异要求情绪教育目标本土化" }
    ],
    evidence: [
      { text: "Gross, Antecedent- and response-focused emotion regulation（1998）", doi: null },
      { text: "Gross & John, Individual differences in two emotion regulation processes（2003）", doi: null },
      { text: "Webb, Miles & Sheeran, Dealing with feeling: A meta-analysis（2012）", doi: null }
    ],
    applications: [
      "教学生识别情绪并用重新解释情境的方式降温。",
      "考前焦虑干预采用重评而非压制。",
      "家长指导中区分「接纳情绪」与「允许行为」。",
      "避免简单要求儿童「别哭」「不许生气」。"
    ],
    terms: [
      { t: "认知重评", en: "Cognitive Reappraisal", d: "重新解释情境意义以改变情绪反应。" },
      { t: "表达抑制", en: "Expressive Suppression", d: "压制情绪的外显表达而不改变体验。" },
      { t: "前因聚焦", en: "Antecedent-Focused", d: "在情绪产生前介入的调节策略。" },
      { t: "调节灵活性", en: "Regulatory Flexibility", d: "依情境在多种调节策略间灵活切换。" }
    ]
  },
  E167: {
    definition: "社会情绪学习由 CASEL 在 1990 年代中期提出，以自我意识、自我管理、社会意识、关系技能与负责任决策五个维度组织课程与学校改进。其假设是这些能力可教、可测，并能改善学业、行为与心理健康。杜拉克等的元分析为其提供了较系统的证据基础。",
    claims: [
      "SEL 的五维能力可通过系统课程与学校氛围建设加以培养。",
      "SEL 干预可提升社会情绪技能与态度，减少问题行为并改善学业。",
      "效果依赖实施质量、教师培训与全校一致性。",
      "SEL 应嵌入日常教学与班级管理，而非仅作为独立课时。",
      "家庭与社区参与能增强 SEL 的持续性。"
    ],
    agreements: [
      "SEL 干预对技能与态度有正向效应，元分析支持。",
      "实施保真度与效果大小相关。",
      "教师自身的情绪能力影响课堂氛围与 SEL 效果。"
    ],
    disagreements: [
      { topic: "效果能否长期维持", sides: [ { who: "casel", view: "持续实施可使技能与收益累积" }, { who: "琼斯", view: "多数项目效应在结束后逐渐衰减" } ], stake: "持续性证据决定 SEL 应作为课程还是全校制度" },
      { topic: "构念是否可统一测量", sides: [ { who: "casel", view: "五维能力可统一定义并用于课程与评估" }, { who: "泽德纳", view: "社会情绪能力构念宽泛，测量效度不足" } ], stake: "测量效度影响 SEL 能否进入正式评价体系" }
    ],
    evidence: [
      { text: "Durlak et al., The impact of enhancing students' social and emotional learning: A meta-analysis（2011）", doi: "10.1111/j.1467-8624.2010.01564.x" },
      { text: "Taylor et al., Promoting positive youth development through school-based SEL interventions（2017）", doi: null },
      { text: "CASEL, Social and Emotional Learning Core Competencies（2005）", doi: null }
    ],
    applications: [
      "班会中系统教授情绪词汇、倾听与冲突解决。",
      "开展教师 SEL 培训，先建设成人的情绪能力。",
      "把 SEL 与反欺凌、心理健康工作整合，而非并行加码。",
      "以观察与自评的过程性证据替代打分排名。"
    ],
    terms: [
      { t: "社会情绪学习", en: "SEL", d: "系统培养社会与情绪能力的课程与学校改进框架。" },
      { t: "自我管理", en: "Self-Management", d: "调节情绪与行为以达成目标的能力。" },
      { t: "关系技能", en: "Relationship Skills", d: "建立与维持健康关系、合作与解决冲突的能力。" },
      { t: "实施保真度", en: "Fidelity", d: "项目按要求的内容与强度得到执行的程度。" }
    ]
  },
  E168: {
    definition: "同伴关系研究以社会测量法（同伴提名）区分受欢迎、被拒绝、被忽视、争议与一般地位。鲁宾等指出不同地位对应不同的适应路径：被拒绝儿童更易出现外化问题，被忽视儿童更多表现为内化或社交退缩。同伴关系因此被视为独立于亲子关系的发展情境。",
    claims: [
      "同伴地位可稳定测量，并能预测短期与长期的社会适应。",
      "被拒绝常与攻击、冲动相关，被忽视则与害羞、退缩相关。",
      "友谊质量与同伴接纳是两个不同维度，对适应各有独立贡献。",
      "社交技能训练对部分被拒绝儿童有效，但需针对其行为功能。",
      "同伴侵害与内化问题之间存在双向影响。"
    ],
    agreements: [
      "同伴拒绝预测后续外化行为，纵向研究支持。",
      "友谊质量与心理健康相关，且独立于受欢迎程度。",
      "社交退缩与被忽视地位相关，但该群体内部异质性很大。"
    ],
    disagreements: [
      { topic: "被拒绝地位是否稳定", sides: [ { who: "rubin", view: "地位随行为与群体变化，具有可塑性" }, { who: "科伊与道奇", view: "被拒绝地位在童年期具有较高稳定性" } ], stake: "稳定性估计决定干预的时间窗口与力度" },
      { topic: "社交技能训练是否有效", sides: [ { who: "rubin", view: "针对行为功能的技能训练可改善同伴关系" }, { who: "格雷沙姆", view: "通用技能训练的迁移有限，效果常被高估" } ], stake: "效果证据决定学校是否应普遍开设技能课" }
    ],
    evidence: [
      { text: "Rubin, Bukowski & Parker, Peer Interactions, Relationships, and Groups（2006）", doi: null },
      { text: "Coie, Dodge & Coppotelli, Dimensions and types of social status（1982）", doi: null },
      { text: "Ladd, Peer rejection, aggressive or withdrawn behavior, and psychological maladjustment（2006）", doi: null }
    ],
    applications: [
      "设计结构化合作学习，让不同地位儿童有共同任务。",
      "对被拒绝儿童做行为功能评估，而非只做「合群」说教。",
      "以友谊质量而非人气作为干预目标。",
      "开展旁观者介入与班级氛围建设。"
    ],
    terms: [
      { t: "社会测量地位", en: "Sociometric Status", d: "由同伴提名得出的群体位置分类。" },
      { t: "同伴接纳", en: "Peer Acceptance", d: "被群体喜欢与接纳的程度。" },
      { t: "友谊质量", en: "Friendship Quality", d: "具体友谊中的亲密、支持与冲突水平。" },
      { t: "社交退缩", en: "Social Withdrawal", d: "在同伴情境中持续回避互动的行为倾向。" }
    ]
  },
  E169: {
    definition: "塞尔曼在 1980 年提出社会观点采择的发展阶段：从自我中心、主观视角、自我反思、相互视角到社会—习俗视角共五级。观点采择是理解他人思想、感受与意图的能力，被视为社交推理与冲突解决的基础。每一级都整合前一级，并新增对视角之间关系的区分。",
    claims: [
      "观点采择按五级顺序发展，每级整合前一级并出现新的区分能力。",
      "相互视角约在 8 至 10 岁出现，使儿童能同时考虑自己与他人的立场。",
      "观点采择水平预测冲突解决策略的质量与同伴关系。",
      "观点采择可通过角色扮演与结构化讨论得到促进。",
      "观点采择是道德推理与共情的认知前提之一。"
    ],
    agreements: [
      "观点采择水平随年龄提高，跨文化研究支持顺序性。",
      "观点采择与亲社会行为、冲突解决能力正相关。",
      "角色扮演与结构化讨论可提升观点采择表现。"
    ],
    disagreements: [
      { topic: "阶段是否领域一般", sides: [ { who: "selman", view: "观点采择按统一阶段推进并跨情境一致" }, { who: "turiel", view: "社会认知按道德、习俗与个人领域分别发展" } ], stake: "这决定社交课程能否按年龄统一设置" },
      { topic: "认知采择能否直接转化为关怀行为", sides: [ { who: "selman", view: "采择能力提升可改善社会行为与冲突处理" }, { who: "hoffman", view: "缺共情的情感唤起，认知采择未必带来助人" } ], stake: "课程重心应在认知训练还是情感体验由此分出" }
    ],
    evidence: [
      { text: "Selman, The Growth of Interpersonal Understanding（1980）", doi: null },
      { text: "Selman, Taking another's perspective: Role-taking development in early childhood（1971）", doi: null },
      { text: "Yeates & Selman, Social competence in the schools（1989）", doi: null }
    ],
    applications: [
      "冲突调解中要求双方复述对方的理由与感受。",
      "文学阅读中分析角色的信息差与误解。",
      "合作任务中安排角色互换与分工协商。",
      "班会讨论公共议题时区分「我的立场」与「他的立场」。"
    ],
    terms: [
      { t: "观点采择", en: "Perspective Taking", d: "区分并推断他人视角与心理状态的能力。" },
      { t: "相互视角", en: "Mutual Perspective", d: "能同时持守自己与他人立场并加以协调。" },
      { t: "社会认知", en: "Social Cognition", d: "加工社会信息、理解人际关系的心智过程。" },
      { t: "角色采择", en: "Role Taking", d: "暂时采用他人社会角色以推断其行为与感受。" }
    ]
  },
  E170: {
    definition: "奥维斯在挪威的系列研究中把欺凌界定为重复发生、力量不对等的故意伤害，并提出以全校为单位、结合课堂规则、教师监督、旁观者责任与个别辅导的干预方案。其核心观点是欺凌是群体与制度现象，而非个别「坏孩子」的问题。该方案成为全球反欺凌项目的基本模板。",
    claims: [
      "欺凌包含重复性、故意伤害与力量不对等三个要素。",
      "欺凌发生在同伴生态中，旁观者的沉默或助威维持了它。",
      "有效干预需同时改变学校政策、课堂规范、课间监督与个别支持。",
      "零容忍与单纯惩罚效果有限，且可能使欺凌转向隐蔽。",
      "网络欺凌延伸了时空边界，但群体机制与线下相似。"
    ],
    agreements: [
      "全校多成分干预可减少欺凌，元分析显示效应中等。",
      "旁观者干预训练能降低欺凌发生率与支持欺凌的规范。",
      "教师监督与规则清晰程度同较低的欺凌率相关。"
    ],
    disagreements: [
      { topic: "干预效应是否被高估", sides: [ { who: "olweus", view: "系统性全校方案可在多数学校显著降低欺凌" }, { who: "梅雷尔", view: "独立评估显示多项项目的实际效应微弱" } ], stake: "效应估计影响政策是否大规模推广该项目" },
      { topic: "网络欺凌是否需要独立框架", sides: [ { who: "olweus", view: "线上线下共享群体机制，可用统一方案应对" }, { who: "史密斯", view: "匿名性与传播速度带来新机制，需专门策略" } ], stake: "框架选择决定学校资源配置与课程内容" }
    ],
    evidence: [
      { text: "Olweus, Bullying at School: What We Know and What We Can Do（1993）", doi: null },
      { text: "Ttofi & Farrington, Effectiveness of school-based programs to reduce bullying（2011）", doi: "10.1007/s11292-010-9109-1" },
      { text: "Olweus, Aggression in the Schools: Bullies and Whipping Boys（1978）", doi: null }
    ],
    applications: [
      "以匿名问卷定期监测本校欺凌率与旁观者反应。",
      "课堂共建反欺凌规则，并训练旁观者安全介入。",
      "安排课间与走廊的可见监督岗位。",
      "采用修复性流程处理事件，而非仅停课处罚。"
    ],
    terms: [
      { t: "欺凌", en: "Bullying", d: "重复发生、力量不对等的故意伤害行为。" },
      { t: "旁观者", en: "Bystander", d: "目睹欺凌而可能介入或沉默的在场同伴。" },
      { t: "全校干预", en: "Whole-School Approach", d: "同时改造政策、课堂、环境与个别支持的方案。" },
      { t: "网络欺凌", en: "Cyberbullying", d: "经由数字媒介实施的重复性伤害行为。" }
    ]
  },
  /* ── 差异与特殊发展 ── */
  E171: {
    definition: "加德纳在 1983 年《智能的结构》中提出，智能不是单一 g 因素，而是相对独立的多种智能，包括语言、逻辑数学、空间、音乐、身体动觉、人际与内省，后又补充自然观察等。其证据来自脑损伤的双重分离、奇才与专家案例以及跨文化的能力分布。该理论对教育实践影响巨大，但其测量学基础广受质疑。",
    claims: [
      "智能是多元且相对独立的，各智能有各自的核心加工过程。",
      "每种智能有特定神经基础，脑损伤可选择性损害某一智能。",
      "智能在文化产品与活动中表现，评估应情境化。",
      "教育应提供多种入口，使不同优势的学生都能接触同一内容。",
      "智能组合形成个体差异，不存在单一可比的智力高低。"
    ],
    agreements: [
      "人类能力确实存在领域差异，个体认知剖面并不均衡。",
      "使用多种表征方式有助于理解，这与多媒体学习研究一致。",
      "学生的兴趣与优势会影响投入与坚持。"
    ],
    disagreements: [
      { topic: "多种智能是否相互独立", sides: [ { who: "gardner", view: "各智能相对独立，不应合并为单一分数" }, { who: "卡罗尔", view: "实证数据支持一般因素与层级化的宽能力结构" } ], stake: "结构假设决定智力测验能否成立" },
      { topic: "能否作为测评与分班依据", sides: [ { who: "gardner", view: "应以情境化活动识别智能优势" }, { who: "戈特弗雷德森", view: "多元智能缺乏独立的测量学证据，不宜用于分流" } ], stake: "测评效度决定该理论能否进入正式教育决策" }
    ],
    evidence: [
      { text: "Gardner, Frames of Mind: The Theory of Multiple Intelligences（1983）", doi: null },
      { text: "Gardner, Intelligence Reframed（1999）", doi: null },
      { text: "Visser, Ashton & Vernon, Beyond g: Putting multiple intelligences theory to the test（2006）", doi: null }
    ],
    applications: [
      "用多模态表征与多样成果形式呈现同一内容。",
      "以学生优势为入口，而非按「智能类型」分轨。",
      "避免把学生标为视觉型或音乐型学习者。",
      "校本课程设计多样化的能力展示机会。"
    ],
    terms: [
      { t: "多元智能", en: "Multiple Intelligences", d: "一组相对独立的能力领域而非单一智力。" },
      { t: "神经分离", en: "Neural Dissociation", d: "脑损伤选择性损害某一能力而保留其他能力。" },
      { t: "智能剖面", en: "Intelligence Profile", d: "个体在各能力领域上的相对强弱组合。" },
      { t: "g 因素", en: "General Factor", d: "解释各类认知任务共同变异的通用智力因素。" }
    ]
  },
  E172: {
    definition: "斯滕伯格在 1996 年提出成功智力，主张智力应理解为在个人文化情境中达成目标的能力，包含分析性、创造性与实践性三方面，需平衡运用以适应、选择与塑造环境。该理论扩展了传统测验偏重的分析性能力，并强调默会知识构成的实践智慧。",
    claims: [
      "智力应在个人目标与文化情境中界定，而非脱离情境的测验分数。",
      "分析性、创造性与实践性智力需平衡，偏重其一会限制成就。",
      "实践性智力大量表现为默会知识，可通过经验与指导获得。",
      "传统测验主要测分析性能力，对创造与实践的预测不足。",
      "教学应同时培养三种能力，并允许不同的优势路径。"
    ],
    agreements: [
      "创造性成就与实践适应不能由智商单独解释。",
      "默会知识与工作绩效相关，且可部分传授。",
      "情境化评估能捕捉传统测验遗漏的能力。"
    ],
    disagreements: [
      { topic: "三分是否独立可测", sides: [ { who: "sternberg", view: "三种智力可分别测量并具增量效度" }, { who: "卡罗尔", view: "现有证据仍支持层级化的 g 与宽能力结构" } ], stake: "结构争议影响智力测验的编制与解释" },
      { topic: "实践智力是否只是 g 加人格", sides: [ { who: "sternberg", view: "实践智力是独立于 g 的默会知识能力" }, { who: "施密特", view: "一般心智能力已能解释大部分工作绩效变异" } ], stake: "增量效度决定招聘与课程是否应单独评估实践能力" }
    ],
    evidence: [
      { text: "Sternberg, Beyond IQ: A Triarchic Theory of Human Intelligence（1985）", doi: null },
      { text: "Sternberg, Successful Intelligence（1996）", doi: null },
      { text: "Sternberg et al., Practical Intelligence in Everyday Life（2000）", doi: null }
    ],
    applications: [
      "以项目与真实任务评价替代单一纸笔测验。",
      "用见习与导师制传授默会知识。",
      "创造力课程兼顾发散生成与标准评估。",
      "避免仅以测验分数做教育分流。"
    ],
    terms: [
      { t: "成功智力", en: "Successful Intelligence", d: "在个人文化情境中达成目标的能力组合。" },
      { t: "默会知识", en: "Tacit Knowledge", d: "未明言、经经验获得的实践性行动知识。" },
      { t: "实践智力", en: "Practical Intelligence", d: "适应与改造日常环境以达成目标的能力。" },
      { t: "适应—选择—塑造", en: "Adaptation–Selection–Shaping", d: "个体与环境互动的三种基本策略。" }
    ]
  },
  E173: {
    definition: "卡特尔在 1963 年提出流体智力与晶体智力的区分：前者处理新异问题、依赖神经效率并随年龄下降，后者是文化与经验积累的知识库、可随年龄持续增长。该区分被霍恩—卡特尔模型与 CHC 理论吸收，成为当代智力结构研究的主流框架之一。",
    claims: [
      "智力可分为流体与晶体两大类，二者相关但发展轨迹不同。",
      "流体智力在青年期达峰后缓慢下降，晶体智力可维持或增长至中老年。",
      "教育主要提升晶体智力，对流体智力的提升作用有限。",
      "流体智力是学习新知识的条件，晶体智力是学习的积累结果。",
      "智力结构具有层级性，存在一般因素与若干宽能力层。"
    ],
    agreements: [
      "Gf 与 Gc 的区分在多项因素分析中可重复。",
      "晶体智力随教育与经验增长，跨文化一致。",
      "流体智力的下降早于晶体智力。"
    ],
    disagreements: [
      { topic: "智力结构是一般因素还是宽能力", sides: [ { who: "cattell", view: "Gf 与 Gc 是可分离的宽能力" }, { who: "卡罗尔", view: "宽能力之上仍存在稳定的高阶一般因素" } ], stake: "结构层级影响测验分数如何汇总与解释" },
      { topic: "流体智力能否经训练提升", sides: [ { who: "cattell", view: "Gf 主要反映神经效率，可塑性有限" }, { who: "owen", view: "训练多提升特定任务，难以改变一般能力" } ], stake: "可塑性判断影响「脑训练」类产品的政策空间" }
    ],
    evidence: [
      { text: "Cattell, Theory of fluid and crystallized intelligence: A critical experiment（1963）", doi: null },
      { text: "Horn & Cattell, Refinement and test of the theory of fluid and crystallized intelligence（1966）", doi: null },
      { text: "Flynn, Massive IQ gains in 14 nations（1987）", doi: null }
    ],
    applications: [
      "成人教育以经验与知识积累为支点设计课程。",
      "老年学习降低加工速度要求，保留知识优势。",
      "避免用单一 IQ 分数推断学习潜力。",
      "以新异问题任务评估流体智力，以学科测验评估晶体智力。"
    ],
    terms: [
      { t: "流体智力", en: "Fluid Intelligence", d: "处理新异问题、识别规律的推理能力。" },
      { t: "晶体智力", en: "Crystallized Intelligence", d: "经教育与经验积累的知识与词汇能力。" },
      { t: "CHC 理论", en: "CHC Theory", d: "整合卡特尔—霍恩与卡罗尔模型的智力结构框架。" },
      { t: "投资理论", en: "Investment Theory", d: "流体智力经投入学习转化为晶体知识的观点。" }
    ]
  },
  E174: {
    definition: "学习障碍指在智力正常、教学机会充分的情况下，阅读、书写或数学等特定学业技能显著落后。弗莱彻等主张以干预反应与多源评估替代传统的能力—成就差距模型，强调障碍呈维度分布而非离散类别。核心支持是结构化、显性、持续的技能教学。",
    claims: [
      "学习障碍是特定学业技能的持续困难，不能用智力、感官或环境因素充分解释。",
      "能力—成就差距模型区分效度低，且会延误干预时机。",
      "干预反应模型可同时用于识别与预防，需分层教学与进度监测。",
      "障碍呈维度分布，诊断阈值具有人为性。",
      "有效支持是显性、系统、密集且持续的技能教学。"
    ],
    agreements: [
      "语音缺陷是阅读障碍最主要的相关因素。",
      "早期、密集、显性的干预效果优于延迟补救。",
      "分层教学与进度监测能改善识别的公平性。"
    ],
    disagreements: [
      { topic: "是否保留智力—成就差距标准", sides: [ { who: "fletcher", view: "差距标准效度不足，应以干预反应识别" }, { who: "卡瓦莱", view: "取消差距标准会导致过度识别与资源稀释" } ], stake: "识别标准直接决定服务资格与财政投入" },
      { topic: "阅读障碍是单一语音缺陷还是多重缺陷", sides: [ { who: "fletcher", view: "语音缺陷是核心，可解释多数个案" }, { who: "沃尔夫", view: "命名速度等非语音缺陷同样构成独立风险" } ], stake: "缺陷模型影响筛查工具与干预内容的选择" }
    ],
    evidence: [
      { text: "Fletcher et al., Learning Disabilities: From Identification to Intervention（2007）", doi: null },
      { text: "Stanovich, Matthew effects in reading（1986）", doi: null },
      { text: "Fuchs & Fuchs, Introduction to response to intervention（2006）", doi: null }
    ],
    applications: [
      "建立三层分级支持与每月进度监测。",
      "对阅读困难学生实施显性解码与写作策略教学。",
      "提供考试合理便利，但不降低学业标准。",
      "与家长共同设定具体、可测量的短期目标。"
    ],
    terms: [
      { t: "干预反应", en: "RTI", d: "依据对分层干预的反应程度识别学习困难。" },
      { t: "能力—成就差距", en: "Ability–Achievement Discrepancy", d: "以智力与成绩之差判定学习障碍的旧标准。" },
      { t: "分层支持", en: "Tiered Support", d: "按需逐级加强干预强度的教学组织方式。" },
      { t: "阅读障碍", en: "Dyslexia", d: "以精确与流畅识字困难为核心的特定学习障碍。" }
    ]
  },
  E175: {
    definition: "自闭谱系以社会沟通差异与受限、重复的行为兴趣为核心特征。巴伦-科恩等提出心理理论缺陷与极端男性脑等解释，推动了对社会认知机制的深入研究。神经多样性视角则主张自闭是一种认知差异而非单纯缺陷，干预重点应从矫正个体转向改造环境与提供支持。",
    claims: [
      "自闭谱系的核心特征是社会沟通差异与受限重复行为，表现高度异质。",
      "心理理论、执行功能与中央统合等认知解释各有证据，但均不完整。",
      "感觉加工异常常见，环境调整能显著改善功能表现。",
      "神经多样性视角主张以支持与接纳替代以正常化为目标的干预。",
      "早期支持应聚焦沟通与适应，而非压制无害的自我调节行为。"
    ],
    agreements: [
      "自闭特征在人群中呈连续分布，诊断阈值具有人为性。",
      "结构化环境与视觉支持能改善沟通与参与。",
      "焦虑、注意与睡眠等共病常见，需并行处理。"
    ],
    disagreements: [
      { topic: "干预目标是正常化还是支持", sides: [ { who: "baron_cohen", view: "应训练识别他人心理状态以改善社会适应" }, { who: "辛克莱", view: "应改造环境与提升接纳，而非要求个体伪装" } ], stake: "目标设定决定干预是否以消除自闭特征为指标" },
      { topic: "社会困难源于心理理论缺陷还是社会动机不足", sides: [ { who: "baron_cohen", view: "核心缺陷在于推断他人心理状态的能力" }, { who: "舍瓦利耶", view: "社会动机减弱使儿童较少主动获取社会信息" } ], stake: "机制解释决定训练认知推理还是创设社交动机" }
    ],
    evidence: [
      { text: "Kanner, Autistic disturbances of affective contact（1943）", doi: null },
      { text: "Baron-Cohen, Leslie & Frith, Does the autistic child have a theory of mind?（1985）", doi: null },
      { text: "Lord et al., Autism spectrum disorder（2020）", doi: null }
    ],
    applications: [
      "使用视觉日程与提前预告变化，降低不确定性。",
      "改造感官环境，如降低噪音与强光。",
      "社交小组以兴趣为纽带，而非强制眼神接触。",
      "开展家长培训与同伴接纳教育，减少排斥。"
    ],
    terms: [
      { t: "自闭谱系", en: "Autism Spectrum", d: "社会沟通差异与受限重复行为构成的连续谱。" },
      { t: "神经多样性", en: "Neurodiversity", d: "把神经差异视为人类多样性而非病理的立场。" },
      { t: "心理理论缺陷", en: "Theory-of-Mind Deficit", d: "推断他人信念与意图困难的认知解释。" },
      { t: "感觉加工差异", en: "Sensory Processing Differences", d: "对声音、光线、触觉等刺激的反应异常。" }
    ]
  },
  E176: {
    definition: "伦祖利在 1978 年提出三环模型，认为才能由高于平均的能力、任务承诺与创造力三者交互产生，并主张以三环丰富化模型与全校范围的服务替代一次性筛选。才能发展观强调天赋需经长期学习、练习与支持才能转化为成就。该取向把超常教育从「鉴定」转向「培养」。",
    claims: [
      "才能是能力、承诺与创造力交互的结果，而非单一测验分数。",
      "识别应使用多源信息并保持动态，避免一次测验贴标签。",
      "丰富化与加速是两类主要支持方式，需依个体需要组合。",
      "天赋不等于成就，需要长期练习、导师与心理支持。",
      "弱势群体中的高潜能学生易被传统识别方式系统性遗漏。"
    ],
    agreements: [
      "加速对学业成绩有效，社交适应的风险通常不大。",
      "丰富化课程能提升投入与创造表现。",
      "传统识别方法对低收入与少数群体存在偏差。"
    ],
    disagreements: [
      { topic: "识别取向：特质还是发展", sides: [ { who: "renzulli", view: "以行为表现与三环交互动态识别才能" }, { who: "斯坦利", view: "以高能力测验成绩作为加速与专门培养的依据" } ], stake: "识别取向决定谁获得有限的特教资源" },
      { topic: "是否保留「超常」标签", sides: [ { who: "renzulli", view: "标签可组织服务，但应以发展为落脚点" }, { who: "博兰德", view: "标签缺乏效度并加剧教育分层" } ], stake: "标签存废影响超常教育的制度合法性与公平性" }
    ],
    evidence: [
      { text: "Renzulli, What makes giftedness? Reexamining a definition（1978）", doi: null },
      { text: "Renzulli, The three-ring conception of giftedness（2005）", doi: null },
      { text: "Colangelo et al., A Nation Deceived: How Schools Hold Back America's Brightest Students（2004）", doi: null }
    ],
    applications: [
      "实施全校丰富化模型，让更多学生接触高阶任务。",
      "为个别学生提供学科加速与大学先修机会。",
      "对弱势群体采用补充性识别与提名机制。",
      "为高潜能学生提供社会情绪支持小组。"
    ],
    terms: [
      { t: "三环模型", en: "Three-Ring Model", d: "能力、承诺与创造力交互形成才能的模型。" },
      { t: "丰富化", en: "Enrichment", d: "在不加速进度的前提下扩展深度与广度的课程。" },
      { t: "加速", en: "Acceleration", d: "以更快进度或更高年级内容满足学习需要。" },
      { t: "才能发展", en: "Talent Development", d: "把潜能经长期练习与支持转化为成就的过程。" }
    ]
  },
  /* ── 家庭与教养 ── */
  E177: {
    definition: "布朗芬布伦纳在 1979 年提出生态系统理论，把发展置于微观系统、中间系统、外层系统、宏观系统与时间系统的嵌套结构中，强调发展是个体与多层环境持续相互作用的结果。后期修订为生物生态模型，以「近端过程」为核心机制。该理论成为家校社协同干预的基础框架。",
    claims: [
      "发展发生在多层嵌套的情境中，任一层的变化都会影响其他层。",
      "近端过程即日常互动，是发展的核心引擎，其效果依赖个体特征与情境。",
      "中间系统（如家校联结）的质量影响儿童适应。",
      "外层与宏观系统通过政策、文化与经济间接塑造发展机会。",
      "干预应多层同时进行，单层干预易被其他层的力量抵消。"
    ],
    agreements: [
      "家庭、学校与社区因素共同预测发展，证据充分。",
      "家校合作与儿童适应正相关。",
      "贫困与政策等远端因素主要通过近端过程影响发展。"
    ],
    disagreements: [
      { topic: "环境与遗传的相对权重", sides: [ { who: "bronfenbrenner", view: "多层环境与互动过程是发展的主要解释" }, { who: "哈里斯", view: "遗传与同伴群体对长期人格影响更大" } ], stake: "权重估计决定家庭干预与学校干预的优先级" },
      { topic: "同一环境是否对所有人同效", sides: [ { who: "bronfenbrenner", view: "近端过程的效果依个体特征而定" }, { who: "贝尔斯基", view: "儿童对环境的易感性存在系统性差异" } ], stake: "差异化易感性要求干预按风险剖面精准投放" }
    ],
    evidence: [
      { text: "Bronfenbrenner, The Ecology of Human Development（1979）", doi: null },
      { text: "Bronfenbrenner & Morris, The bioecological model of human development（2006）", doi: null },
      { text: "Sameroff, A unified theory of development: A dialectic integration（2010）", doi: null }
    ],
    applications: [
      "设计同时覆盖家庭、班级与社区的多层干预。",
      "评估政策时追踪其经近端过程产生的间接效应。",
      "建立稳定的家校沟通机制与共同目标。",
      "绘制社区资源地图，弥补家庭支持不足。"
    ],
    terms: [
      { t: "微观系统", en: "Microsystem", d: "儿童直接参与的活动与关系环境。" },
      { t: "中间系统", en: "Mesosystem", d: "各微观系统之间的联系，如家校沟通。" },
      { t: "外层系统", en: "Exosystem", d: "儿童不直接参与但影响其环境的系统。" },
      { t: "近端过程", en: "Proximal Processes", d: "人与环境之间持续、渐进的日常互动。" }
    ]
  },
  E178: {
    definition: "鲍姆林德在 1966 至 1971 年的研究中，以要求（控制）与回应（温暖）两个维度划分权威型、专制型、放任型与忽视型教养。权威型即高要求高回应，在学业、社会能力与心理健康上结果最好，兼顾自主与规则。该框架至今仍是教养研究的经典分类。",
    claims: [
      "教养可沿要求与回应两维划分，形成四种类型。",
      "权威型通过说理与适度控制促进自主与自控。",
      "专制型服从高但自主与内化低，放任型自控较弱。",
      "忽视型风险最高，与多种不良发展结果相关。",
      "教养效果受儿童气质与文化情境调节。"
    ],
    agreements: [
      "温暖与适度要求同较好的发展结果相关，跨文化大体一致。",
      "严厉体罚与攻击、内化问题相关。",
      "教养是双向过程，儿童行为也在塑造父母的教养方式。"
    ],
    disagreements: [
      { topic: "类型是否跨文化适用", sides: [ { who: "baumrind", view: "高要求高回应的权威型具有普遍优势" }, { who: "赵（Ruth Chao）", view: "华人「训导」式严格不等同于专制，需按文化意义解读" } ], stake: "文化误读会导致对移民家庭教养的错误干预" },
      { topic: "教养的因果效应有多强", sides: [ { who: "baumrind", view: "教养方式对发展有实质因果作用" }, { who: "哈里斯", view: "遗传与同伴群体解释了大部分长期变异" } ], stake: "效应强度决定家长教育项目的投入产出预期" }
    ],
    evidence: [
      { text: "Baumrind, Effects of authoritative parental control on child behavior（1966）", doi: null },
      { text: "Baumrind, Current patterns of parental authority（1971）", doi: null },
      { text: "Maccoby & Martin, Socialization in the context of the family（1983）", doi: null }
    ],
    applications: [
      "家长工作坊聚焦「高要求加高回应」的沟通方式。",
      "帮助家长区分规则执行与体罚。",
      "青春期以协商方式调整自主边界。",
      "避免用类型标签简单评判家长。"
    ],
    terms: [
      { t: "权威型", en: "Authoritative", d: "高要求且高回应，以说理维持规则。" },
      { t: "专制型", en: "Authoritarian", d: "高控制低回应，强调服从与惩罚。" },
      { t: "放任型", en: "Permissive", d: "高回应低要求，缺少明确边界。" },
      { t: "回应性", en: "Responsiveness", d: "察觉并恰当回应儿童需求与信号的倾向。" }
    ]
  },
  E179: {
    definition: "家庭社会经济地位通过资源投入、教养期望、语言环境与压力通路影响学业成就。西林 2005 年的元分析估计 SES 与学业成就的相关约 0.30，且受测量方式与样本特征调节。该领域的争论集中在效应大小、因果解释以及学校能否有效缓冲不利处境。",
    claims: [
      "SES 与学业成就正相关，效应中等，并随测量方式变化。",
      "影响经由物质资源、文化资本、期望与语言互动等多条通路。",
      "长期贫困与压力损害执行功能与情绪调节，间接影响学习。",
      "高质量学校与早期干预可以部分缓冲 SES 不利。",
      "SES 效应部分是遗传与环境共同作用，并非纯环境因果。"
    ],
    agreements: [
      "SES 与学业成就相关，跨国家可重复。",
      "早期语言环境与入学准备差异部分解释 SES 差距。",
      "学校质量对弱势学生的边际作用更大。"
    ],
    disagreements: [
      { topic: "家庭背景与学校效应孰重", sides: [ { who: "coleman", view: "家庭背景对成绩的解释力远大于学校资源差异" }, { who: "埃德蒙兹", view: "高效能学校可显著改善弱势学生的学业表现" } ], stake: "权重判断决定资源投向家庭支持还是学校改进" },
      { topic: "SES 效应是否为环境因果", sides: [ { who: "sirin", view: "SES 通过资源与环境通路影响学业" }, { who: "特克海默", view: "行为遗传学提示部分效应来自遗传混杂" } ], stake: "因果解释影响政策是否应聚焦收入再分配" }
    ],
    evidence: [
      { text: "Sirin, Socioeconomic status and academic achievement: A meta-analytic review（2005）", doi: null },
      { text: "Coleman et al., Equality of Educational Opportunity（1966）", doi: null },
      { text: "Hart & Risley, Meaningful Differences in the Everyday Experience of Young American Children（1995）", doi: null }
    ],
    applications: [
      "为弱势家庭提供早期语言与阅读支持。",
      "学校提供结构化学习资源与课后辅导，减少对家庭资本的依赖。",
      "改革作业设计，避免需要家长高投入的任务。",
      "教师避免以家庭背景推断学生能力。"
    ],
    terms: [
      { t: "社会经济地位", en: "SES", d: "由收入、教育与职业构成的家庭社会位置。" },
      { t: "文化资本", en: "Cultural Capital", d: "被学校默认认可的语言、品味与知识资源。" },
      { t: "语言环境", en: "Linguistic Environment", d: "家庭中词汇量、对话轮次与互动质量的总和。" },
      { t: "缓冲", en: "Buffering", d: "高质量环境削弱风险因素不利影响的作用。" }
    ]
  },
  E180: {
    definition: "早期干预指针对弱势或发展风险儿童及其家庭提供的系统性支持，包括高质量学前教育、家访与亲子指导。佩里学前项目与阿贝塞达里安项目的长期追踪显示，高质量、结构化、持续时间长的项目对学业、就业与健康有长期收益。越早开始、越持续，公共回报越高。",
    claims: [
      "高质量学前教育对弱势儿童有长期正向效应，包括学业、就业与减少犯罪。",
      "效果取决于项目质量、强度、持续时间与起始年龄。",
      "家访项目通过改善亲子互动与家庭环境间接促进发展。",
      "短期项目常出现效应衰减，需要后续学校支持衔接。",
      "成本—收益分析显示早期干预的公共回报较高。"
    ],
    agreements: [
      "高质量示范项目具有长期效应，追踪证据充分。",
      "项目质量与师资水平是效果的关键决定因素。",
      "家访对高危家庭有正向但相对较小的效应。"
    ],
    disagreements: [
      { topic: "示范项目效应能否规模化", sides: [ { who: "schweinhart", view: "高质量项目可持续产生长期收益" }, { who: "普马", view: "全国推广的 Head Start 效应较小且随时间衰减" } ], stake: "规模化证据决定财政投入的预期回报" },
      { topic: "家访与中心式学前孰优", sides: [ { who: "schweinhart", view: "中心式高质量学前教育对认知与学业作用更直接" }, { who: "奥尔兹", view: "结构化家访可改善养育与健康并降低长期风险" } ], stake: "服务模式选择取决于目标群体与资源约束" }
    ],
    evidence: [
      { text: "Schweinhart et al., Lifetime Effects: The High/Scope Perry Preschool Study Through Age 40（2005）", doi: null },
      { text: "Campbell et al., Early childhood investments substantially boost adult health（2014）", doi: null },
      { text: "Olds et al., Long-term effects of nurse home visitation on children's criminal and antisocial behavior（1998）", doi: null }
    ],
    applications: [
      "优先覆盖高危家庭的普惠学前教育。",
      "建立项目质量监测与师资持续培训制度。",
      "设计幼小衔接，延续学前阶段的支持。",
      "家访内容结构化，聚焦亲子互动与健康管理。"
    ],
    terms: [
      { t: "早期干预", en: "Early Intervention", d: "面向发展风险儿童的早期系统支持服务。" },
      { t: "家访", en: "Home Visiting", d: "由专业人员入户提供养育指导与资源链接。" },
      { t: "效应衰减", en: "Fade-Out", d: "干预结束后初期收益随时间逐渐消失的现象。" },
      { t: "成本—收益", en: "Cost–Benefit", d: "比较项目投入与其长期社会收益的分析。" }
    ]
  },
  E181: {
    definition: "怀特赫斯特在 1988 年提出对话式阅读，用 PEER（提示、评价、扩展、重复）与 CROWD（填空、回忆、开放、wh-、联想）提示，把亲子共读从成人朗读变为儿童参与的对话。研究显示其能提升幼儿口语词汇与理解，对语言弱势儿童效果更明显。该方法已成为家庭语言干预的常用方案。",
    claims: [
      "共读中的互动质量比朗读数量更能预测语言发展。",
      "开放式提问与扩展能增加儿童的语言产出与词汇增长。",
      "对话式阅读对语言弱势儿童的效果更明显。",
      "家长与教师均可通过短期培训掌握该方法。",
      "效果依赖实施保真度与持续频率。"
    ],
    agreements: [
      "对话式阅读提升口语词汇，元分析支持中等效应。",
      "开放式提问优于封闭式提问。",
      "家长培训能有效改变共读行为。"
    ],
    disagreements: [
      { topic: "效果能否迁移到标准化阅读测验", sides: [ { who: "whitehurst", view: "口语能力提升可带动后续阅读理解" }, { who: "莫尔", view: "效应集中于口语与近迁移，对解码与阅读理解较弱" } ], stake: "迁移范围决定该方法能否替代系统阅读教学" },
      { topic: "共读应否刻意教学化", sides: [ { who: "whitehurst", view: "结构化提示能高效提升语言产出" }, { who: "希思", view: "自然互动与文化叙事习惯才是共读的基础" } ], stake: "过度教学化可能损害阅读兴趣与亲子关系" }
    ],
    evidence: [
      { text: "Whitehurst et al., Accelerating language development through picture book reading（1988）", doi: null },
      { text: "Mol et al., Added value of dialogic parent–child book readings: A meta-analysis（2008）", doi: null },
      { text: "Arnold et al., Accelerating language development through picture book reading: Replication and extension（1994）", doi: null }
    ],
    applications: [
      "家长培训中练习 PEER 与 CROWD 提示。",
      "幼儿园开展小组式对话共读。",
      "作为语言迟缓儿童的补充性家庭干预。",
      "图书馆亲子活动设计互动提问环节。"
    ],
    terms: [
      { t: "对话式阅读", en: "Dialogic Reading", d: "以提问与扩展把共读变为双向对话的方法。" },
      { t: "PEER 提示", en: "PEER", d: "提示、评价、扩展、重复四步互动序列。" },
      { t: "CROWD 提示", en: "CROWD", d: "五类提问方式的缩写，用于引导儿童表达。" },
      { t: "扩展", en: "Expansion", d: "把儿童的不完整表达补充为更完整的语句。" }
    ]
  },
  E182: {
    definition: "屏幕时间研究关注数字媒介使用与儿童认知、语言、情绪及睡眠的关系。普日贝尔斯基与温斯坦 2017 年的「金发姑娘假说」在大样本中发现中等使用者的幸福感略高，奥本与普日贝尔斯基 2019 年进一步指出其效应量与日常活动相当。当前共识是内容、情境与替代活动比总时长更关键，极端使用风险更明确。",
    claims: [
      "屏幕时间与发展的关系多为小效应，且呈非线性。",
      "内容质量（教育性、暴力、节奏）比总时长更能预测结果。",
      "睡前使用与背景电视损害睡眠质量与亲子互动。",
      "当屏幕使用挤占睡眠、运动与面对面互动时，风险明显上升。",
      "两岁前大量独自观看与后续语言发展落后相关。"
    ],
    agreements: [
      "背景电视与亲子语言互动减少相关，证据较一致。",
      "睡前屏幕使用与睡眠不足相关。",
      "教育性内容与共同观看的风险较低，甚至可能有正向作用。"
    ],
    disagreements: [
      { topic: "屏幕时间与青少年心理健康", sides: [ { who: "przybylski", view: "关联很弱，效应量与日常活动相当" }, { who: "特温格", view: "数字媒介使用上升与青少年心理问题增加相关" } ], stake: "效应解释决定是否应推行统一的使用时限管制" },
      { topic: "早期屏幕暴露与语言发展是否因果", sides: [ { who: "przybylski", view: "关联受家庭与养育因素混杂，因果证据不足" }, { who: "马迪根", view: "元分析显示早期使用量与语言落后存在稳定负相关" } ], stake: "因果判断影响婴幼儿屏幕使用的公共建议强度" }
    ],
    evidence: [
      { text: "Przybylski & Weinstein, A large-scale test of the Goldilocks hypothesis（2017）", doi: null },
      { text: "Orben & Przybylski, The association between adolescent well-being and digital technology use（2019）", doi: "10.1038/s41562-018-0506-1" },
      { text: "Madigan et al., Associations between screen use and child language skills（2020）", doi: null }
    ],
    applications: [
      "制定家庭媒介使用计划，同时约定内容与时段。",
      "保留睡前一段无屏时间，卧室不放屏幕设备。",
      "倡导共同观看与讨论，而非让儿童独自刷视频。",
      "以户外活动与共读等替代活动减少被动观看。"
    ],
    terms: [
      { t: "屏幕时间", en: "Screen Time", d: "使用电视、手机、平板等屏幕设备的总时长。" },
      { t: "金发姑娘假说", en: "Goldilocks Hypothesis", d: "中等使用水平关联最佳结果、过少过多均不利的假设。" },
      { t: "背景电视", en: "Background TV", d: "开着但无人专注观看、仍干扰互动的电视。" },
      { t: "共同观看", en: "Co-viewing", d: "成人与儿童一起观看并即时讨论的媒介使用方式。" }
    ]
  }
});
