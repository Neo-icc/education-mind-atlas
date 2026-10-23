/* ============================================================
   知识点详解（二）：教育行为心理学 E048–E102
   字段：定义 / 论断 / 共识 / 争议 / 证据 / 应用 / 术语
   ============================================================ */
window.ATLAS = window.ATLAS || {};
ATLAS.details = Object.assign(ATLAS.details || {}, {
  E048: {
    definition: "巴甫洛夫在 19 世纪末研究消化腺分泌时发现，狗在铃声与食物反复配对之后，仅凭铃声即可分泌唾液。他把原本中性的刺激称为条件刺激，把由其引发的反应称为条件反应，提出条件反射是联想学习的基本单位。",
    claims: [
      "中性刺激与无条件刺激在时间上邻近地反复配对，可获得单独引发条件反应的能力。",
      "条件反应的形成受配对次数、时间间隔与刺激强度影响，邻近性是关键变量。",
      "条件反射会消退、自发恢复、泛化与分化，说明它是随经验持续调整的暂时联系。",
      "已建立的条件刺激可充当无条件刺激，形成二级条件化，使联结可以层层扩展。"
    ],
    agreements: [
      "联结学习是人与动物共有的基本学习形式，跨物种证据充分。",
      "时间邻近是条件化的核心变量，延迟条件化与痕迹条件化的效果明显不同。",
      "消退并非遗忘原联结，而是建立新的抑制性学习，因此会出现自发恢复。"
    ],
    disagreements: [
      { topic: "条件化的机制：刺激替代还是预期学习", sides: [ { who: "pavlov", view: "条件刺激经由与无条件刺激的联结，替代后者直接引发反应" }, { who: "雷斯克拉", view: "动物学到的是条件刺激对结果的预测关系，相关性比配对次数更关键" } ], stake: "学习是刺激之间的直接联结，还是对事件关系的认知表征。" },
      { topic: "学习是被动联结还是主动行为选择", sides: [ { who: "pavlov", view: "条件反射是被动形成的刺激—反应联结，可由外部安排精确控制" }, { who: "skinner", view: "真正重要的是行为后果对行为的筛选，应答性条件化只是有限的一类" } ], stake: "课堂中的学习应被理解为刺激控制，还是后果对行为的塑造。" }
    ],
    evidence: [
      { text: "Pavlov, Conditioned Reflexes (1927)", doi: null },
      { text: "Watson & Rayner, Conditioned Emotional Reactions (1920)", doi: null },
      { text: "Rescorla, Probability of shock in the presence and absence of CS in fear conditioning (1968)", doi: null }
    ],
    applications: [
      "用稳定的课堂信号（铃声、倒计时、固定指令语）建立常规，减少管理成本。",
      "对考试焦虑采用系统脱敏，把放松反应与渐进的焦虑情境配对。",
      "警惕学科厌恶的条件化：反复的羞辱性提问会把学科本身变成厌恶刺激。",
      "用中性提示（如固定的作文开场程序）帮助进入写作状态。"
    ],
    terms: [
      { t: "无条件刺激", en: "Unconditioned Stimulus", d: "无需学习即可引发反应的刺激，如食物。" },
      { t: "条件刺激", en: "Conditioned Stimulus", d: "经配对后获得引发反应能力的中性刺激。" },
      { t: "消退", en: "Extinction", d: "不再呈现无条件刺激时，条件反应逐渐减弱。" },
      { t: "泛化", en: "Generalization", d: "对与条件刺激相似的刺激也作出条件反应。" },
      { t: "自发恢复", en: "Spontaneous Recovery", d: "消退后间隔一段时间，条件反应重新出现。" }
    ]
  },
  E049: {
    definition: "桑代克以迷箱实验研究猫的学习，认为学习是情境与反应之间联结的形成，而非观念的推理。他据此提出效果律、练习律与准备律，成为联结主义与后来行为主义的直接先声。",
    claims: [
      "学习是尝试错误中联结的建立与削弱，而不是顿悟或逻辑推理。",
      "效果律：带来满意后果的联结被加强，带来烦恼后果的联结被削弱。",
      "练习律：联结强度随使用而增强、随不用而减弱，桑代克后期对此作了重要修正。",
      "准备律：有机体准备好行动时行动带来满意，被迫行动则带来烦恼。",
      "迁移取决于前后情境共同要素的数量，而非心智官能的普遍锻炼。"
    ],
    agreements: [
      "后果影响行为出现频率这一基本命题，被后续操作条件作用研究广泛支持。",
      "试误是技能获得早期阶段的常见形态，新手面对陌生任务时尤其明显。",
      "练习与反馈对联结巩固有作用，但单纯重复的作用常被高估。"
    ],
    disagreements: [
      { topic: "顿悟还是试误", sides: [ { who: "thorndike", view: "动物在迷箱中的学习是渐进、盲目的试误，成功时间平滑下降" }, { who: "kohler", view: "黑猩猩表现出停顿后的整体重组，是真正的领悟而非偶然成功" } ], stake: "学习是否存在质的跳跃，还是始终由渐进联结累积而成。" },
      { topic: "强化的作用机制", sides: [ { who: "thorndike", view: "满意状态直接印入并加强特定联结，属于生理性的巩固" }, { who: "skinner", view: "强化是对行为概率的选择，无需假定联结被印入" } ], stake: "效果律描述的是联结的加强，还是行为被环境选择的结果。" }
    ],
    evidence: [
      { text: "Thorndike, Animal Intelligence: An Experimental Study (1898)", doi: null },
      { text: "Thorndike, Educational Psychology (1913)", doi: null },
      { text: "Thorndike & Woodworth, The influence of improvement in one mental function upon the efficiency of other functions (1901)", doi: null }
    ],
    applications: [
      "为新技能设计带即时反馈的重复练习，而非无反馈的机械抄写。",
      "把复杂任务切成小段，使成功可及，避免连续失败削弱联结。",
      "用「准备度」检查安排任务时机，疲劳或动机不足时练习效率低。",
      "设计迁移任务时明确共同要素，帮助学生识别相似之处。"
    ],
    terms: [
      { t: "效果律", en: "Law of Effect", d: "带来满意结果的反应被加强，带来烦恼的被削弱。" },
      { t: "联结主义", en: "Connectionism", d: "以刺激—反应联结解释学习的学习理论。" },
      { t: "试误学习", en: "Trial and Error", d: "通过多次尝试与淘汰错误逐步接近正确反应。" },
      { t: "准备律", en: "Law of Readiness", d: "准备状态决定行动带来满意还是烦恼。" },
      { t: "共同要素", en: "Identical Elements", d: "前后情境中相同成分，是迁移发生的基础。" }
    ]
  },
  E050: {
    definition: "华生 1913 年在《行为主义者眼中的心理学》中主张，心理学应放弃意识与内省，只研究可观察的刺激与反应。他由此奠定行为主义的方法论纲领，并以环境决定论的强硬表述闻名。",
    claims: [
      "心理学的对象是行为，方法是客观观察与实验，意识与内省不具科学地位。",
      "一切行为都可分解为刺激与反应，复杂行为由基本联结累积而成。",
      "环境是行为的主要塑造者，他宣称给定环境可把婴儿训练成任一类型的专家。",
      "情绪反应（如恐惧）也可通过条件化习得，并泛化到相似对象。",
      "心理学应服务于预测与控制行为，而非描述主观体验。"
    ],
    agreements: [
      "客观化与可操作化是心理学科学化的必要一步，被后续几乎所有流派接受。",
      "恐惧等情绪反应可经经典条件化习得，这一现象已被反复观察。",
      "环境与经验对行为有巨大影响，行为治疗的有效性提供了部分支持。"
    ],
    disagreements: [
      { topic: "行为是否需要认知中介", sides: [ { who: "watson", view: "行为可由刺激与反应直接描述，无需假定内部的表征与预期" }, { who: "bandura", view: "观察学习依赖注意、保持与预期等内部表征，不能还原为 S–R" } ], stake: "心理学解释是否可以完全排除内部认知过程。" },
      { topic: "整体经验能否还原为要素", sides: [ { who: "watson", view: "复杂行为可分解为基本 S–R 单元，学习即单元的累加" }, { who: "kohler", view: "知觉与问题解决遵循整体组织原则，拆成要素就失去其本质" } ], stake: "心理学应以元素分析还是以整体结构为基本单位。" }
    ],
    evidence: [
      { text: "Watson, Psychology as the Behaviorist Views It (1913)", doi: null },
      { text: "Watson & Rayner, Conditioned Emotional Reactions (1920)", doi: null },
      { text: "Watson, Behaviorism (1924)", doi: null }
    ],
    applications: [
      "把教学目标写成可观察、可测量的行为表现，便于评价与反馈。",
      "用系统脱敏等条件化程序处理特定恐惧与回避行为。",
      "重视环境提示与常规的一致性，减少对「自觉」的依赖。",
      "警惕环境决定论的过度推论：气质、神经发育与认知因素同样起作用。"
    ],
    terms: [
      { t: "行为主义", en: "Behaviorism", d: "只以可观察行为为研究对象的心理学取向。" },
      { t: "刺激—反应", en: "Stimulus–Response", d: "以 S–R 联结解释行为的基本分析单位。" },
      { t: "内省", en: "Introspection", d: "被试报告自身意识内容的方法，行为主义予以拒绝。" },
      { t: "环境决定论", en: "Environmentalism", d: "主张行为主要由环境经验塑造的立场。" },
      { t: "小艾伯特实验", en: "Little Albert Study", d: "演示恐惧可经条件化习得的著名实验。" }
    ]
  },
  E051: {
    definition: "斯金纳区分应答性行为与操作性行为，指出后者由后果控制。他通过斯金纳箱系统研究强化程式，提出操作性条件作用：行为的发生概率由其后果决定，教学即是对强化相倚的安排。",
    claims: [
      "正强化与负强化都增加行为概率，正惩罚与负惩罚都降低行为概率，四者不可混用。",
      "强化程式（固定或可变的比例与间隔）产生特征性的反应率与消退抗性。",
      "即时、一致、相倚的强化优于延迟或非相倚的奖惩。",
      "负强化不是惩罚：前者通过撤除厌恶刺激增加行为，后者降低行为。",
      "复杂行为可通过塑造（逐次接近）与链式连接逐步建立。"
    ],
    agreements: [
      "强化程式对反应模式的影响在动物与人类实验中高度可重复。",
      "即时反馈优于延迟反馈，这一结论与形成性评价研究相互印证。",
      "惩罚只能抑制行为，不能教会替代行为，且可能带来回避、攻击等副作用。"
    ],
    disagreements: [
      { topic: "外部奖励是否总是增强行为", sides: [ { who: "skinner", view: "强化即行为概率的提高，安排得当的奖励总能增加目标行为" }, { who: "deci_ryan", view: "控制性奖励会削弱自主感，从而侵蚀原有的内在动机" } ], stake: "奖励是普遍的行为工具，还是会改变动机性质的双刃剑。" },
      { topic: "行为是否需经认知中介", sides: [ { who: "skinner", view: "无需假设期待与表征，强化史足以解释行为的发生与消退" }, { who: "bandura", view: "替代强化与结果预期表明，人可在未亲历强化时调整行为" } ], stake: "行为分析是否必须纳入预期与表征等内部变量。" }
    ],
    evidence: [
      { text: "Skinner, The Behavior of Organisms (1938)", doi: null },
      { text: "Ferster & Skinner, Schedules of Reinforcement (1957)", doi: null },
      { text: "Deci, Koestner & Ryan, A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation (1999)", doi: null }
    ],
    applications: [
      "用代币制或积分系统建立课堂行为规范，并明确行为与后果的相倚关系。",
      "对目标行为给予即时、具体的反馈，避免延迟到期末才算总账。",
      "用塑造法逐步建立复杂技能，先强化近似行为再提高标准。",
      "优先强化替代行为，而非只惩罚问题行为。"
    ],
    terms: [
      { t: "操作性条件作用", en: "Operant Conditioning", d: "行为由其后效决定概率的学习过程。" },
      { t: "强化程式", en: "Schedule of Reinforcement", d: "决定何时给予强化的规则，影响反应模式。" },
      { t: "塑造", en: "Shaping", d: "逐次强化接近目标的行为，最终形成新行为。" },
      { t: "负强化", en: "Negative Reinforcement", d: "撤除厌恶刺激以提高行为发生概率。" },
      { t: "消退", en: "Extinction", d: "停止强化后行为频率下降的过程。" }
    ]
  },
  E052: {
    definition: "斯金纳 1954 年在《学习的科学与教学的艺术》中提出，把教学内容分解为小步、要求学习者主动反应并即时给出正确答案，可用教学机器实现个体化自定进度。这一设想是程序教学、计算机辅助教学与自适应学习的直接源头。",
    claims: [
      "教学应小步呈现，使错误率降到最低，避免错误被反复强化。",
      "学习者必须作出可观察的主动反应，而不是被动听讲。",
      "反馈必须即时，在正确反应之后立即出现。",
      "学习者按自己的速度前进，教学是个别化的而非全班同步的。",
      "线性程序与分支程序是两种组织方式，后者依错误路径提供补救。"
    ],
    agreements: [
      "即时反馈与小步教学对新手有效，与直接教学、形成性评价的证据一致。",
      "自定进度可减少跟不上而累积的知识缺口。",
      "主动反应优于纯被动接受，与生成性学习和检索练习的结论一致。"
    ],
    disagreements: [
      { topic: "教学应消除错误还是制造合意困难", sides: [ { who: "skinner", view: "小步程序把错误率降到最低，错误本身会削弱学习" }, { who: "roediger", view: "适度困难的提取与犯错后纠正，反而更有利于长期保持" } ], stake: "短期顺畅与长期保持之间应如何取舍。" },
      { topic: "小步塑造还是整体把握结构", sides: [ { who: "skinner", view: "把内容切成小步并逐次强化，是建立复杂行为的可靠路径" }, { who: "bruner", view: "先把握学科的基本结构，细节才有位置，否则只是碎片累积" } ], stake: "课程组织应以行为单元为单位，还是以知识结构为单位。" }
    ],
    evidence: [
      { text: "Skinner, The Science of Learning and the Art of Teaching (1954)", doi: null },
      { text: "Skinner, The Technology of Teaching (1968)", doi: null },
      { text: "Kulik & Fletcher, Effectiveness of intelligent tutoring systems: A meta-analytic review (2016)", doi: null }
    ],
    applications: [
      "把技能拆成可即时判定的步骤，用于线上闯关式练习。",
      "在练习环节提供自动判题与解释，缩短反馈延迟。",
      "允许学生按掌握情况跳步或补练，而非统一进度。",
      "用分支设计处理常见错误，为不同错误路径准备补救材料。"
    ],
    terms: [
      { t: "线性程序", en: "Linear Program", d: "所有学习者按同一顺序完成小步单元的编排。" },
      { t: "分支程序", en: "Branching Program", d: "依学习者反应选择不同后续路径的编排。" },
      { t: "教学机器", en: "Teaching Machine", d: "呈现小步内容并即时反馈的自定进度装置。" },
      { t: "即时反馈", en: "Immediate Feedback", d: "在反应后立刻给出对错与解释。" },
      { t: "自定进度", en: "Self-Pacing", d: "学习者按自身掌握速度推进课程。" }
    ]
  },
  E053: {
    definition: "班杜拉在 1961 年波波玩偶实验中证明，儿童无需直接强化，仅通过观察榜样即可习得攻击行为。他由此提出社会学习理论，强调注意、保持、再现与动机四个环节，把观察学习与替代强化引入学习研究。",
    claims: [
      "观察学习不等同于简单模仿，学习者从榜样行为中抽取规则并可创造性再造。",
      "学习与表现可以分离：习得的行为未必立即表现，取决于预期后果。",
      "替代强化与自我强化同样调节行为，不必依赖直接的外部强化。",
      "观察学习经历注意、保持、动作再现与动机四个过程。",
      "行为、个人因素与环境三者交互决定，而非环境单向塑造。"
    ],
    agreements: [
      "榜样示范能有效改变行为，示范教学在技能与社交行为训练中被广泛验证。",
      "替代经验（看到相似他人成功）影响自我效能与尝试意愿。",
      "媒体与同伴榜样对青少年行为有实质影响。"
    ],
    disagreements: [
      { topic: "观察学习的机制", sides: [ { who: "bandura", view: "观察者把榜样行为编码为符号表征，再在需要时转化为行动" }, { who: "skinner", view: "观察学习仍可由辨别刺激与强化史解释，无需假定内部表征" } ], stake: "示范效应是认知编码的结果还是刺激控制的延伸。" },
      { topic: "媒介暴力的影响是否被夸大", sides: [ { who: "bandura", view: "实验证明媒介示范可即时增加儿童的攻击行为，效应稳定" }, { who: "弗格森", view: "实验室指标与真实暴力行为差距大，长期效应证据薄弱" } ], stake: "实验室中的攻击行为测量能否外推到现实暴力。" }
    ],
    evidence: [
      { text: "Bandura, Ross & Ross, Transmission of aggression through imitation of aggressive models (1961)", doi: null },
      { text: "Bandura, Social Learning Theory (1977)", doi: null },
      { text: "Bandura, Social Foundations of Thought and Action (1986)", doi: null }
    ],
    applications: [
      "教师用出声思维示范解题与写作过程，让策略可见。",
      "用同伴示范视频呈现真实可及的成功路径，增强替代经验。",
      "注意教师自身情绪应对方式的示范效应。",
      "选择可信、与学习者相似的榜样，避免只呈现遥不可及的典范。"
    ],
    terms: [
      { t: "观察学习", en: "Observational Learning", d: "通过观看榜样及其后果而习得行为。" },
      { t: "替代强化", en: "Vicarious Reinforcement", d: "看到他人因某行为受奖而提高该行为倾向。" },
      { t: "交互决定论", en: "Reciprocal Determinism", d: "行为、个人因素与环境三者相互影响。" },
      { t: "自我效能", en: "Self-Efficacy", d: "对自己能完成特定任务的信念。" },
      { t: "示范", en: "Modeling", d: "通过展示行为及其步骤来传递技能与规范。" }
    ]
  },
  E054: {
    definition: "班杜拉 1977 年提出自我效能感，指个体对自己能否组织并执行特定行动以达成目标的信念。它不是笼统的自尊，而是任务与情境特定的能力判断，影响任务选择、努力投入、坚持性与情绪反应。",
    claims: [
      "自我效能有四类信息来源：掌握性经验、替代经验、言语说服与生理情绪状态，其中掌握经验最强。",
      "效能信念影响任务选择、努力程度、坚持性以及受挫后的恢复速度。",
      "效能判断具有领域与任务特异性，不能等同于一般自尊或自信人格特质。",
      "效能信念通过目标设定、归因方式与策略使用间接影响成绩。"
    ],
    agreements: [
      "自我效能与学业成绩呈稳定正相关，跨年龄与学科一致。",
      "掌握性经验是最有效的提升途径，尤其是逐步加难的成功序列。",
      "效能信念对行为有预测力，但因果方向存在双向性。"
    ],
    disagreements: [
      { topic: "效能判断是原因还是伴随结果", sides: [ { who: "bandura", view: "效能信念独立影响努力与坚持，是可干预的动机变量" }, { who: "温哥华", view: "任务中的效能判断随进展波动，过高估计反而导致努力分配不足" } ], stake: "提升效能信念能否独立带来成绩改善。" },
      { topic: "效能应作一般构念还是任务特异构念", sides: [ { who: "bandura", view: "效能必须针对具体任务测量，一般自我效能缺乏预测力" }, { who: "施瓦泽", view: "存在可测量的一般自我效能，能预测跨情境的应对能力" } ], stake: "测量层次应多细，才能兼顾预测力与实用性。" }
    ],
    evidence: [
      { text: "Bandura, Self-efficacy: Toward a unifying theory of behavioral change (1977)", doi: null },
      { text: "Multon, Brown & Lent, Relation of self-efficacy beliefs to academic outcomes: A meta-analytic investigation (1991)", doi: null },
      { text: "Pajares, Self-efficacy beliefs in academic settings (1996)", doi: null }
    ],
    applications: [
      "把任务排成阶梯，让学生频繁获得可归因于自身努力的掌握经验。",
      "给出具体的过程性反馈，替代空泛的「你很棒」。",
      "用相似同伴的示范降低「这不可能做到」的判断。",
      "帮助学生重新解读考试紧张等生理唤醒，减少其对效能的削弱。"
    ],
    terms: [
      { t: "自我效能", en: "Self-Efficacy", d: "对自己能完成特定任务的信念。" },
      { t: "掌握性经验", en: "Mastery Experience", d: "亲身成功带来的最强效能信息来源。" },
      { t: "替代经验", en: "Vicarious Experience", d: "观察相似他人成功而提升的效能判断。" },
      { t: "言语说服", en: "Verbal Persuasion", d: "他人鼓励或反馈对效能判断的影响。" },
      { t: "效能—表现关系", en: "Efficacy–Performance Relationship", d: "效能信念与成绩之间双向作用的关联。" }
    ]
  },
  E055: {
    definition: "赫尔 1943 年在《行为原理》中提出以驱力与习惯强度的乘积预测反应潜能的理论，试图用数学化公设系统解释学习。该理论整体已被放弃，但其关于强化程式与习惯累积的研究遗产仍影响后续学习理论。",
    claims: [
      "反应潜能等于驱力、习惯强度与诱因动机的乘积，行为由三者共同决定。",
      "驱力源于生理需要的缺失，推动有机体行动；习惯强度由强化次数累积。",
      "强化通过降低驱力起作用，即所谓驱力还原说。",
      "不同强化程式导致不同的反应率与消退速度，可用参数描述。"
    ],
    agreements: [
      "强化程式确实系统影响反应模式，这一实验事实被完整保留。",
      "动机水平（饥渴、唤醒）调节表现，不能只研究学习本身。",
      "用形式化模型表述学习规律是可行且有价值的方法论尝试。"
    ],
    disagreements: [
      { topic: "强化的本质", sides: [ { who: "hull", view: "强化之所以有效，是因为它降低了生理驱力" }, { who: "skinner", view: "强化无需驱力还原作解释，它就是行为概率的提高" } ], stake: "强化是驱力降低的副产品，还是独立的行为选择过程。" },
      { topic: "动机可否由单一驱力解释", sides: [ { who: "hull", view: "各类行为最终可归因于有限的生理驱力及其组合" }, { who: "maslow", view: "动机由多层次需要构成，高层成长需要无法还原为生理驱力" } ], stake: "动机理论应追求简约的驱力模型，还是容纳多层需要结构。" }
    ],
    evidence: [
      { text: "Hull, Principles of Behavior (1943)", doi: null },
      { text: "Hull, A Behavior System (1952)", doi: null },
      { text: "Crespi, Quantitative variation of incentive and performance in the white rat (1942)", doi: null }
    ],
    applications: [
      "解释睡眠不足、饥饿与慢性压力如何直接压低课堂表现。",
      "用可变强化程式维持长期练习习惯，避免只在考试前突击。",
      "注意奖励幅度（诱因）对即时表现的强烈影响，但不等于学习本身。",
      "避免把动机问题简单化为奖惩设置，需同时看生理与安全条件。"
    ],
    terms: [
      { t: "驱力", en: "Drive", d: "由生理需要缺失产生的行为推动状态。" },
      { t: "习惯强度", en: "Habit Strength", d: "由强化累积形成的 S–R 联结强度。" },
      { t: "反应潜能", en: "Reaction Potential", d: "特定情境中反应发生的倾向强度。" },
      { t: "驱力还原", en: "Drive Reduction", d: "强化通过降低驱力而起作用的解释。" },
      { t: "诱因动机", en: "Incentive Motivation", d: "奖励大小等外部诱因对表现的即时影响。" }
    ]
  },
  E056: {
    definition: "消退、泛化与塑造是行为分析中三组基本的行为改变程序。消退指撤除维持行为的强化物使行为减少；泛化指反应扩展到相似刺激或情境；塑造则通过强化逐次接近目标的反应来建立新行为。",
    claims: [
      "消退不是压制行为，而是撤除强化，初期常出现短暂的行为爆发。",
      "泛化梯度显示与条件刺激越相似，反应越强；分化训练可提高辨别力。",
      "塑造通过连续强化近似反应，可建立个体原本不会做出的复杂行为。",
      "自发恢复说明消退建立的是新的抑制性学习，而非原联结被删除。"
    ],
    agreements: [
      "消退程序在焦虑障碍治疗（暴露疗法）中有效，是行为治疗的核心技术。",
      "消退效果依赖情境，改变环境可能导致行为复发。",
      "塑造对建立连续技能有效，但复杂认知策略需与认知方法结合。"
    ],
    disagreements: [
      { topic: "消退的机制", sides: [ { who: "pavlov", view: "消退是条件反应被抑制，原联结仍然存在并可自发恢复" }, { who: "雷斯克拉", view: "消退是新的抑制性预期学习，动物学到条件刺激不再预示结果" } ], stake: "消退是原联结的暂时抑制，还是关于新关系的独立学习。" },
      { topic: "复杂能力应如何建立", sides: [ { who: "skinner", view: "通过强化逐次接近目标的小步塑造，可建立任何复杂行为" }, { who: "collins", view: "复杂思维需在真实任务中通过示范、教练与反思整体习得" } ], stake: "复杂技能是可分解塑造的行为链，还是需情境化的整体实践。" }
    ],
    evidence: [
      { text: "Skinner, Science and Human Behavior (1953)", doi: null },
      { text: "Pavlov, Conditioned Reflexes (1927)", doi: null },
      { text: "Bouton, Context and behavioral processes in extinction (2004)", doi: null }
    ],
    applications: [
      "用有计划的忽视撤除对课堂干扰行为的无意强化，并预告消退爆发。",
      "把暴露与放松结合，用于特定恐惧与回避行为。",
      "用塑造法教发音、书写等连续性技能，逐步提高标准。",
      "在多个情境中练习同一技能，促进泛化而非只在原教室有效。"
    ],
    terms: [
      { t: "消退", en: "Extinction", d: "撤除强化后行为频率下降的过程。" },
      { t: "自发恢复", en: "Spontaneous Recovery", d: "消退后间隔一段时间行为重新出现。" },
      { t: "泛化梯度", en: "Generalization Gradient", d: "反应强度随刺激相似度变化而变化的曲线。" },
      { t: "塑造", en: "Shaping", d: "逐次强化接近目标的行为以建立新行为。" },
      { t: "分化训练", en: "Discrimination Training", d: "只强化特定刺激下的反应，提高辨别力。" }
    ]
  },
  E057: {
    definition: "苛勒在 1913 至 1917 年对黑猩猩的实验中观察到，动物并非逐步试误，而是停顿后突然把箱子、棍子等元素重组为解决问题的整体方案。格式塔学派据此提出顿悟学习：学习是对问题结构的重组与领悟。",
    claims: [
      "学习是对整体关系的重新组织，而非刺激—反应的逐次联结。",
      "顿悟表现为突然出现、可迁移，并能复述解决问题的原则。",
      "知觉遵循接近、相似、闭合等组织原则，学习同样受整体结构支配。",
      "重复与练习本身不导致理解，理解来自对关系的把握。",
      "迁移发生在结构相似而非要素相同的情境之间。"
    ],
    agreements: [
      "人类问题解决中确实存在突然明白的体验，且常伴随策略重组。",
      "整体结构影响部分理解，孤立的事实碎片不易迁移。",
      "知觉组织原则在视觉设计与多媒体呈现中被验证有效。"
    ],
    disagreements: [
      { topic: "顿悟还是试误", sides: [ { who: "kohler", view: "猩猩在停顿后重排整个问题场，表现出对关系的真正领悟" }, { who: "thorndike", view: "猫的学习曲线平滑下降，说明学习是渐进的试误累积" } ], stake: "学习是连续渐变，还是存在质的重组与跳跃。" },
      { topic: "顿悟是否真的没有渐进成分", sides: [ { who: "kohler", view: "顿悟是不可分解的整体重组，无法由先前联想拼合而成" }, { who: "爱泼斯坦", view: "鸽子的实验表明，顿悟可由先前习得的成分在关键时刻组合而成" } ], stake: "顿悟是独立的学习类型，还是既有成分的重新组合。" }
    ],
    evidence: [
      { text: "Köhler, The Mentality of Apes (1917/1925)", doi: null },
      { text: "Wertheimer, Productive Thinking (1945)", doi: null },
      { text: "Epstein, Kirshnit, Lanza & Rubin, Insight in the pigeon: Antecedents and determinants of an intelligent performance (1984)", doi: null }
    ],
    applications: [
      "先呈现问题的整体图景与目标，再进入细节，避免碎片化。",
      "要求学生用自己的话重述问题结构，而非只记步骤。",
      "用类比与结构对照促进跨情境迁移。",
      "用可视化呈现要素间关系，帮助形成完整表征。"
    ],
    terms: [
      { t: "顿悟", en: "Insight", d: "突然把握问题整体关系而产生解决方案。" },
      { t: "整体论", en: "Holism", d: "主张整体性质不能由部分简单相加推出。" },
      { t: "重组", en: "Restructuring", d: "重新组织问题要素之间的关系以达成解决。" },
      { t: "知觉组织", en: "Perceptual Organization", d: "按接近、相似、闭合等原则组织视觉元素。" },
      { t: "生产性思维", en: "Productive Thinking", d: "超越重复经验、产生新结构的思维方式。" }
    ]
  },
  E058: {
    definition: "巴特利特 1932 年在《记忆》中发现，被试复述陌生故事时会依自身文化图式进行省略、合理化与变形。图式理论据此主张，记忆并非被动存储，而是以已有知识结构主动重构的过程。",
    claims: [
      "图式是组织经验的知识结构，决定信息的选取、编码与提取。",
      "回忆是重构而非复现，受图式引导会发生系统性扭曲。",
      "图式缺失时理解困难，图式错配时产生稳定而自信的误读。",
      "专家与新手的差异主要在于领域图式的丰富度与组织方式。"
    ],
    agreements: [
      "背景知识是阅读理解最强的预测因素之一。",
      "记忆重构现象在多种材料与文化中被重复观察。",
      "专家优势依赖领域特定的知识组织，而非一般智力。"
    ],
    disagreements: [
      { topic: "图式是稳定模板还是情境框架", sides: [ { who: "bartlett", view: "图式是文化中积淀的稳定结构，持续同化新经验" }, { who: "阿尔巴与哈舍", view: "图式远比想象中灵活，许多经典实验难以重复，效应被夸大" } ], stake: "图式是持久的认知模板，还是即时建构的解释框架。" },
      { topic: "图式应如何表征", sides: [ { who: "bartlett", view: "图式是难以分解的整体经验结构，宜作整体描述" }, { who: "anderson_j", view: "知识应表述为可计算的命题网络与产生式，图式需形式化" } ], stake: "心理学概念应保持整体性描述，还是必须可计算建模。" }
    ],
    evidence: [
      { text: "Bartlett, Remembering: A Study in Experimental and Social Psychology (1932)", doi: null },
      { text: "Bransford & Johnson, Contextual prerequisites for understanding (1972)", doi: null },
      { text: "Anderson & Pichert, Recall of previously unrecallable information following a shift in perspective (1978)", doi: null }
    ],
    applications: [
      "阅读前激活相关背景知识，或先补足缺失的领域图式。",
      "用先行组织者与结构图帮助学生建立上位框架。",
      "比较专家与新手的解题结构，显性呈现组织方式。",
      "把学生的稳定误读视为图式错配，而非粗心。"
    ],
    terms: [
      { t: "图式", en: "Schema", d: "组织经验与预期的一般化知识结构。" },
      { t: "重构", en: "Reconstruction", d: "提取时依据图式重新组合而非原样复现。" },
      { t: "背景知识", en: "Background Knowledge", d: "理解新材料所需的既有领域知识。" },
      { t: "图式驱动", en: "Schema-Driven Processing", d: "由既有结构自上而下引导信息加工。" },
      { t: "先行组织者", en: "Advance Organizer", d: "学习前提供的上位框架性材料。" }
    ]
  },
  E059: {
    definition: "米勒 1956 年在《神奇数字七加减二》中综合多项实验指出，人类在绝对判断与即时记忆上的容量限制约为 7±2 个组块。他强调组块可随经验扩大，从而把容量限制转化为编码策略问题。",
    claims: [
      "即时记忆的容量以组块为单位，约为 7±2。",
      "组块是随经验形成的意义单元，专家可用更大组块容纳更多信息。",
      "容量限制是稳定的个体常数，但可通过编码策略部分绕过。",
      "绝对判断的通道容量也受类似限制，提示存在一般的信息加工瓶颈。"
    ],
    agreements: [
      "短时记忆容量有限，这一结论被后续研究一致支持。",
      "组块化能显著提升即时记忆量，是专家表现的重要机制。",
      "有限容量是教学设计必须考虑的基本约束，与认知负荷理论一致。"
    ],
    disagreements: [
      { topic: "容量常数究竟是多少", sides: [ { who: "miller_g", view: "即时记忆的容量约为 7±2 个组块，是稳定的经验规律" }, { who: "考恩", view: "排除复述与组块策略后，纯容量约为 4 个组块" } ], stake: "容量应以策略性成绩还是纯存储成绩来估计。" },
      { topic: "容量是单一瓶颈还是分通道资源", sides: [ { who: "miller_g", view: "存在一个一般性的通道容量限制，跨材料类型共通" }, { who: "baddeley", view: "语音与视空间通道各自独立，限制并非来自单一瓶颈" } ], stake: "工作记忆限制应建模为统一资源还是多成分系统。" }
    ],
    evidence: [
      { text: "Miller, The magical number seven, plus or minus two (1956)", doi: null },
      { text: "Cowan, The magical number 4 in short-term memory (2001)", doi: null },
      { text: "Chase & Simon, Perception in chess (1973)", doi: null }
    ],
    applications: [
      "单次呈现的新要素控制在三到五个，避免一次灌输过多。",
      "教学生主动组块：分类、找规律、编口诀、意义编码。",
      "把公式、电话号码与长术语分段呈现。",
      "多媒体页面控制同时出现的元素数量，减少视觉拥挤。"
    ],
    terms: [
      { t: "组块", en: "Chunk", d: "被整合为一个意义单元的信息集合。" },
      { t: "组块化", en: "Chunking", d: "把零散信息整合为更大意义单元的策略。" },
      { t: "即时记忆", en: "Immediate Memory", d: "无需复述即可保持的极短时记忆。" },
      { t: "容量限制", en: "Capacity Limit", d: "同时可处理的信息单元数量上限。" },
      { t: "绝对判断", en: "Absolute Judgment", d: "对单一维度刺激作出绝对分类判断。" }
    ]
  },

  E060: {
    definition: "阿特金森与希夫林 1968 年提出记忆的多存储模型，把记忆分为感觉登记、短时存储与长时存储三个子系统。信息经注意进入短时存储，经复述转入长时存储，各阶段有不同的容量与持续时间。",
    claims: [
      "记忆由感觉登记、短时存储、长时存储三个结构组成，功能与容量各不相同。",
      "注意决定哪些感觉信息进入短时存储，复述决定哪些信息转入长时存储。",
      "短时存储容量有限且以听觉编码为主，长时存储容量近乎无限且以语义编码为主。",
      "提取是搜索长时存储的过程，失败可源于干扰或线索不足。"
    ],
    agreements: [
      "记忆存在不同时间尺度的子系统，这一分层思想被广泛接受。",
      "复述与注意影响信息能否进入长时记忆。",
      "首因与近因效应支持多重存储的区分。"
    ],
    disagreements: [
      { topic: "短时存储是否是独立的中转站", sides: [ { who: "atkinson_shiffrin", view: "短时存储是一个容量有限的独立结构，信息经复述转入长时存储" }, { who: "baddeley", view: "应以多成分工作记忆取代单一短时存储，存储与加工不可分割" } ], stake: "短时记忆是被动中转站，还是主动加工的工作空间。" },
      { topic: "保持取决于复述量还是加工深度", sides: [ { who: "atkinson_shiffrin", view: "复述的时长与次数决定信息能否进入长时记忆" }, { who: "克雷克与洛克哈特", view: "编码的深度与意义性决定保持，机械复述几乎无用" } ], stake: "教学应延长重复时间，还是改变加工方式。" }
    ],
    evidence: [
      { text: "Atkinson & Shiffrin, Human memory: A proposed system and its control processes (1968)", doi: null },
      { text: "Glanzer & Cunitz, Two storage mechanisms in free recall (1966)", doi: null },
      { text: "Craik & Lockhart, Levels of processing: A framework for memory research (1972)", doi: null }
    ],
    applications: [
      "区分「把信息保持在脑中」与「把信息加工到意义层」两类课堂活动。",
      "用精细复述（举例、比较、解释）替代机械背诵。",
      "控制一次性输入量，为注意选择留出时间。",
      "把关键内容安排在课的首尾，利用首因与近因效应。"
    ],
    terms: [
      { t: "感觉登记", en: "Sensory Register", d: "感官信息短暂停留的初始存储阶段。" },
      { t: "短时存储", en: "Short-Term Store", d: "容量有限、无需复述即迅速衰退的存储。" },
      { t: "长时存储", en: "Long-Term Store", d: "容量近乎无限、相对持久的记忆系统。" },
      { t: "复述", en: "Rehearsal", d: "重复或加工信息以延长保持的过程。" },
      { t: "系列位置效应", en: "Serial Position Effect", d: "材料首尾部分回忆优于中间部分的现象。" }
    ]
  },
  E061: {
    definition: "巴德利与希契 1974 年提出工作记忆模型，用以取代单一的短时存储。模型由中央执行、语音环路与视空间画板构成，2000 年又加入情景缓冲，强调工作记忆是容量有限的主动加工与暂存系统。",
    claims: [
      "工作记忆由中央执行、语音环路、视空间画板与情景缓冲四个成分组成。",
      "语音环路与视空间画板相对独立，形成两条可并行的加工通道。",
      "中央执行负责注意分配、任务切换与干扰抑制，本身不承担存储。",
      "工作记忆容量限制是复杂认知与学业表现的主要瓶颈之一。"
    ],
    agreements: [
      "工作记忆容量与流体智力、阅读理解、数学成绩存在稳定相关。",
      "语音相似性效应与词长效应支持语音环路的存在。",
      "双任务干扰的模式支持通道分离的假设。"
    ],
    disagreements: [
      { topic: "中央执行是单一资源还是可分离成分", sides: [ { who: "baddeley", view: "中央执行是一个容量有限的注意控制系统，统一调配资源" }, { who: "miyake", view: "抑制、刷新与转换三者相关但可分离，不宜视为单一资源" } ], stake: "执行控制应建模为统一瓶颈还是若干独立功能。" },
      { topic: "容量差异源于存储还是注意控制", sides: [ { who: "baddeley", view: "个体差异主要反映各存储成分的容量与加工效率" }, { who: "恩格尔", view: "容量差异的核心是注意控制与抗干扰能力，而非存储槽位数量" } ], stake: "训练应扩大存储还是提升注意控制。" }
    ],
    evidence: [
      { text: "Baddeley & Hitch, Working memory (1974)", doi: null },
      { text: "Baddeley, The episodic buffer: A new component of working memory? (2000)", doi: null },
      { text: "Daneman & Carpenter, Individual differences in working memory and reading (1980)", doi: null }
    ],
    applications: [
      "避免图文分屏与无关声音干扰，减少跨通道竞争。",
      "把解题步骤外化为工作单或检查表，降低存储负担。",
      "为工作记忆较弱的学生提供步骤提示与分段任务。",
      "讲解时不同时呈现大量新元素，先降低元素交互性。"
    ],
    terms: [
      { t: "中央执行", en: "Central Executive", d: "负责注意分配与任务协调的控制成分。" },
      { t: "语音环路", en: "Phonological Loop", d: "暂存与复述言语信息的成分。" },
      { t: "视空间画板", en: "Visuospatial Sketchpad", d: "暂存与操作视觉空间表象的成分。" },
      { t: "情景缓冲", en: "Episodic Buffer", d: "整合多通道信息并与长时记忆连接的成分。" },
      { t: "双任务范式", en: "Dual-Task Paradigm", d: "同时执行两项任务以检验资源共享的实验方法。" }
    ]
  },
  E062: {
    definition: "加涅 1965 年提出学习的信息加工理论，把学习结果分为言语信息、智慧技能、认知策略、态度与动作技能五类，并指出每类需要不同的内外条件。他据此提出九大教学事件，把教学视为对内部加工过程的外部支持。",
    claims: [
      "学习结果分为五类，各类的能力本质与所需教学条件不同。",
      "智慧技能具有累积性，由辨别、概念、规则到问题解决逐级依赖。",
      "教学应依据学习者的内部加工阶段安排九大外部事件。",
      "教学设计应做任务分析，识别前提技能与支持性条件。"
    ],
    agreements: [
      "不同学习结果需要不同教学条件，这一分类思想被教学设计领域广泛采用。",
      "任务分析与前提技能识别是有效教学设计的核心步骤。",
      "九大教学事件（引起注意、呈现目标、提供反馈等）在实践中被大量验证。"
    ],
    disagreements: [
      { topic: "学习层次是否严格累积", sides: [ { who: "gagne", view: "复杂智慧技能必须建立在已掌握的下位技能之上，需逐级分析" }, { who: "glasersfeld", view: "知识在整体任务与情境中被建构，不必先学齐下位技能" } ], stake: "课程应按学习层级序列化，还是围绕整体任务组织。" },
      { topic: "教学事件是否应固定为九步", sides: [ { who: "gagne", view: "九大事件对应内部加工阶段，可作为通用设计框架" }, { who: "梅里尔", view: "应以问题为中心整合五条首要原理，而非固定步骤序列" } ], stake: "教学设计应遵循固定流程还是依任务灵活组合原则。" }
    ],
    evidence: [
      { text: "Gagné, The Conditions of Learning (1965)", doi: null },
      { text: "Gagné, Briggs & Wager, Principles of Instructional Design (1992)", doi: null },
      { text: "Merrill, First principles of instruction (2002)", doi: null }
    ],
    applications: [
      "备课时按九大事件检查：目标、激活旧知、示范、练习、反馈、迁移。",
      "先做任务分析，列出前提技能再设计活动。",
      "针对五类学习结果采用不同的评价方式。",
      "为智慧技能设计由辨别到问题解决的分层练习。"
    ],
    terms: [
      { t: "学习结果", en: "Learning Outcomes", d: "学习后形成的五类能力表现。" },
      { t: "智慧技能", en: "Intellectual Skills", d: "运用符号与规则完成认知任务的能力。" },
      { t: "教学事件", en: "Events of Instruction", d: "支持内部加工过程的九类外部教学步骤。" },
      { t: "任务分析", en: "Task Analysis", d: "分解任务以识别前提技能与步骤的过程。" },
      { t: "前提技能", en: "Prerequisite Skills", d: "学习新技能前必须已掌握的下位能力。" }
    ]
  },
  E063: {
    definition: "奥苏贝尔 1962 年提出有意义接受学习理论，区分机械与有意义、接受与发现两个维度。他指出讲授式教学同样可以是有意义的，关键在于新知识能否与认知结构中已有观念建立非任意、实质性的联系。",
    claims: [
      "接受学习不等于机械学习，发现学习也不必然有意义。",
      "有意义学习需满足三条件：材料有逻辑意义、学习者有有意义学习心向、认知结构中有相关观念。",
      "新知识通过与已有观念的归属、派生、相关或并列组合获得意义。",
      "先行组织者可在学习前提供认知框架，促进同化。",
      "影响学习的最重要单一因素是学习者已经知道什么。"
    ],
    agreements: [
      "背景知识对理解的决定性作用被大量研究支持。",
      "讲授法在结构良好的知识传授中可以高效且有意义。",
      "先行组织者对陌生材料的学习有小的正向效应。"
    ],
    disagreements: [
      { topic: "发现学习还是有意义讲授", sides: [ { who: "ausubel", view: "发现学习耗时且不必然优于有意义讲授，讲授可高效传递结构" }, { who: "bruner", view: "通过自主发现掌握学科结构，才能形成可迁移的直觉与兴趣" } ], stake: "学习的效率与深度应主要来自言语同化还是自主探究。" },
      { topic: "先行组织者的效应是否稳健", sides: [ { who: "ausubel", view: "先行组织者能显著促进陌生材料的学习与保持" }, { who: "巴恩斯与克劳森", view: "元分析显示效应不稳定，高度依赖材料与实施质量" } ], stake: "该技术能否支撑普适的教学设计建议。" }
    ],
    evidence: [
      { text: "Ausubel, The use of advance organizers in the learning and retention of meaningful verbal material (1960)", doi: null },
      { text: "Ausubel, The Psychology of Meaningful Verbal Learning (1963)", doi: null },
      { text: "Ausubel, Novak & Hanesian, Educational Psychology: A Cognitive View (1978)", doi: null }
    ],
    applications: [
      "讲新课前用先行组织者、类比或结构图激活旧知。",
      "讲授时明确概念的上下位关系，而非并列罗列。",
      "用同化式提问检查新旧知识是否真正建立联系。",
      "避免无关联的事实堆砌，先给上位框架。"
    ],
    terms: [
      { t: "有意义学习", en: "Meaningful Learning", d: "新知识与已有观念建立非任意实质联系。" },
      { t: "接受学习", en: "Reception Learning", d: "以讲授方式直接获得结论性知识。" },
      { t: "认知结构", en: "Cognitive Structure", d: "个体已有观念的内容与组织方式。" },
      { t: "同化", en: "Assimilation", d: "新知识被纳入已有上位观念而获得意义。" },
      { t: "先行组织者", en: "Advance Organizer", d: "先于学习材料呈现的上位框架。" }
    ]
  },
  E064: {
    definition: "安德森 1983 年在《智能的建筑》中提出 ACT* 理论，后发展为 ACT-R 认知架构。它区分陈述性知识与产生式规则，认为技能学习经历从陈述性解释、产生式编译到自动化的过程。",
    claims: [
      "认知由陈述性记忆（事实）与程序性记忆（产生式规则）两类知识构成。",
      "技能获得经历陈述性阶段、知识编译阶段与程序化自动化阶段。",
      "产生式规则的调用由激活水平与目标情境共同决定，激活反映使用频率与近因。",
      "复杂认知可分解为可计算的模块与缓冲，工作记忆活动有明确容量限制。",
      "练习带来的学习曲线符合幂律，改进渐进但递减。"
    ],
    agreements: [
      "技能学习由受控加工走向自动化，这一总体路径被广泛接受。",
      "练习量、反馈与变式影响规则的强度与适用性。",
      "计算建模能生成可检验的精细预测，是认知科学的重要方法。"
    ],
    disagreements: [
      { topic: "认知的基本单元是符号规则还是分布式表征", sides: [ { who: "anderson_j", view: "认知可由符号性的产生式规则与缓冲精确建模" }, { who: "鲁梅尔哈特", view: "技能学习是联结权重的调整，无需显式的符号规则" } ], stake: "认知架构应采用符号计算还是并行分布加工。" },
      { topic: "自动化是否总是学习的目标", sides: [ { who: "anderson_j", view: "技能经编译自动化后效率最高，是专长的标志" }, { who: "roediger", view: "保持一定的提取努力与变式，才有利于长期保持与迁移" } ], stake: "流畅自动化与可迁移的灵活提取之间如何权衡。" }
    ],
    evidence: [
      { text: "Anderson, The Architecture of Cognition (1983)", doi: null },
      { text: "Anderson, Acquisition of cognitive skill (1982)", doi: null },
      { text: "Anderson et al., An integrated theory of the mind (2004)", doi: null }
    ],
    applications: [
      "先讲清步骤与原理，再通过大量练习使其程序化。",
      "提供即时诊断与纠错，避免错误规则被编译固化。",
      "设计变式练习，防止自动化后失去灵活性。",
      "用幂律预期安排练习量，接受后期收益递减。"
    ],
    terms: [
      { t: "陈述性知识", en: "Declarative Knowledge", d: "可用言语陈述的事实与概念知识。" },
      { t: "产生式规则", en: "Production Rule", d: "条件—动作形式的程序性知识单元。" },
      { t: "知识编译", en: "Knowledge Compilation", d: "把陈述性步骤转化为程序化规则的加工。" },
      { t: "自动化", en: "Automaticity", d: "技能经充分练习后无需意识控制地执行。" },
      { t: "认知架构", en: "Cognitive Architecture", d: "描述认知系统固定结构与机制的模型框架。" }
    ]
  },
  E065: {
    definition: "斯韦勒 1988 年提出认知负荷理论，以工作记忆容量有限、长时记忆容量无限为前提，主张教学设计应减少无关负荷、管理内在负荷并促进生成性加工。它把工作记忆限制视为教学设计的核心约束。",
    claims: [
      "工作记忆容量有限，长时记忆则通过图式获得近乎无限的容量。",
      "认知负荷分内在（任务要素交互）、外在（呈现方式不当）与生成性（用于图式建构）三类。",
      "教学设计应削减外在负荷，把有限资源留给图式建构。",
      "对新手有效的支持（样例、双通道呈现）对专家可能产生专长逆转效应。",
      "随专长增长，教学支持应逐步撤除。"
    ],
    agreements: [
      "工作记忆限制是学习的基本约束，这一前提被广泛接受。",
      "样例学习、分割复杂任务与减少冗余信息对新手有效。",
      "专长逆转效应在多项实验中重复出现。"
    ],
    disagreements: [
      { topic: "有指导教学还是探究式教学", sides: [ { who: "sweller", view: "新手缺乏图式，最小指导会让工作记忆被搜索过程耗尽" }, { who: "希梅洛-西尔弗", view: "真实问题与探究能培养灵活的知识与自我导向能力" } ], stake: "在有限工作记忆下，指导程度应如何随学习目标调整。" },
      { topic: "三类负荷是否可独立测量", sides: [ { who: "sweller", view: "内在、外在与生成性负荷可通过实验操纵与主观量表区分" }, { who: "德容", view: "三类负荷难以独立测量，理论存在事后解释与不可证伪的风险" } ], stake: "负荷分类是可检验的理论实体，还是解释性标签。" }
    ],
    evidence: [
      { text: "Sweller, Cognitive load during problem solving: Effects on learning (1988)", doi: null },
      { text: "Sweller, van Merriënboer & Paas, Cognitive architecture and instructional design (1998)", doi: null },
      { text: "Kalyuga, Ayres, Chandler & Sweller, The expertise reversal effect (2003)", doi: null }
    ],
    applications: [
      "用完整样例替代无指导的探索，尤其对新手。",
      "整合文本与图示，避免注意力在多个来源间分散。",
      "把复杂任务分段呈现，先降低要素交互。",
      "随专长增长逐步撤除样例与提示，避免专长逆转。"
    ],
    terms: [
      { t: "内在负荷", en: "Intrinsic Load", d: "由任务要素交互性与学习者先备知识决定。" },
      { t: "外在负荷", en: "Extraneous Load", d: "由不当呈现方式造成、与学习无关的负荷。" },
      { t: "生成性负荷", en: "Germane Load", d: "用于图式建构与自动化的有效加工负荷。" },
      { t: "专长逆转效应", en: "Expertise Reversal Effect", d: "对新手有效的支持对专家反而有害。" },
      { t: "样例学习", en: "Worked Example Effect", d: "通过研读完整解题样例降低搜索负荷。" }
    ]
  },

  E066: {
    definition: "皮亚杰通过临床访谈与对儿童的长期观察，提出认知建构主义：儿童不是被动接收信息，而是通过同化与顺应不断调整内部图式，以达成与环境的平衡。认知发展按感知运动、前运算、具体运算、形式运算四阶段质变推进。",
    claims: [
      "认知发展是图式通过同化与顺应不断平衡化的建构过程。",
      "发展分为四个阶段，各阶段有质的不同的思维方式。",
      "儿童是主动的探索者，知识来自动作与操作而非言语传递。",
      "前运算期儿童受自我中心与守恒缺失限制，具体运算期才获得可逆性。",
      "发展水平限定可学习的内容，教学不能简单跨越阶段。"
    ],
    agreements: [
      "儿童思维与成人有质的不同，而非只是知识量更少。",
      "具体经验与动手操作对理解抽象概念有重要作用。",
      "守恒与可逆性的发展顺序在跨文化研究中大体稳定。"
    ],
    disagreements: [
      { topic: "阶段是普遍结构还是受容量调节", sides: [ { who: "piaget", view: "四阶段是普遍的逻辑结构质变，跨文化、跨领域一致" }, { who: "case", view: "阶段跃迁可由工作记忆容量与加工效率的增长来解释，不必假定独立结构" } ], stake: "发展阶段是自主的逻辑结构，还是容量增长的副产品。" },
      { topic: "教学能否走在发展前面", sides: [ { who: "piaget", view: "教学必须等待相应认知结构成熟，提前教授只能得到表面模仿" }, { who: "vygotsky", view: "教学可以走在发展前面，在协助中带动新的心理机能形成" } ], stake: "发展是教学的前提，还是教学可以引领发展。" }
    ],
    evidence: [
      { text: "Piaget, Le langage et la pensée chez l'enfant (1923)", doi: null },
      { text: "Piaget, The Origins of Intelligence in Children (1952)", doi: null },
      { text: "Piaget & Inhelder, The Psychology of the Child (1969)", doi: null }
    ],
    applications: [
      "用倒水、分饼干等操作材料教守恒与分数，而非只讲定义。",
      "减少对低龄儿童的纯口头抽象讲解。",
      "按具体—半抽象—抽象的序列设计概念教学。",
      "用同伴讨论制造认知冲突，引发顺应。"
    ],
    terms: [
      { t: "同化", en: "Assimilation", d: "用已有图式解释新经验的过程。" },
      { t: "顺应", en: "Accommodation", d: "调整已有图式以适应新经验的过程。" },
      { t: "平衡", en: "Equilibration", d: "同化与顺应达到暂时协调的自我调节过程。" },
      { t: "图式", en: "Schema", d: "组织动作与经验的心理结构。" },
      { t: "守恒", en: "Conservation", d: "物体外观改变而数量不变的判断能力。" }
    ]
  },
  E067: {
    definition: "维果茨基在 1920 至 1930 年代提出社会文化理论，主张高级心理机能首先以社会关系的形式存在于人与人之间，再经语言等文化工具的中介内化为个体能力。他因此把教育互动置于发展的核心位置。",
    claims: [
      "高级心理机能起源于社会互动，遵循先在人际间、后在个体内的内化规律。",
      "语言、符号与工具是中介心理活动的文化工具。",
      "教学应着眼于最近发展区，走在发展前面并引领发展。",
      "自我中心言语逐步内化为内部言语，成为思维的载体。",
      "游戏创造最近发展区，是学前期的主导活动。"
    ],
    agreements: [
      "社会互动与语言中介对认知发展有重要作用，跨文化证据充分。",
      "成人或更有能力同伴的协助能提升儿童当前可达到的水平。",
      "内部言语与自我调节相关，自言自语在任务中具有自我指导功能。"
    ],
    disagreements: [
      { topic: "认知发展的动力来源", sides: [ { who: "vygotsky", view: "发展由文化工具与社会互动的内化驱动，教学具有引领作用" }, { who: "piaget", view: "发展源于个体与物理环境的互动及自身平衡化，社会互动只提供冲突" } ], stake: "发展是文化中介的结果，还是个体建构的结果。" },
      { topic: "支架还是先让学生挣扎", sides: [ { who: "vygotsky", view: "在最近发展区内提供协助，能让学习者完成独立无法完成的任务" }, { who: "卡普尔", view: "先让学生在新问题上失败并生成多种解法，再指导，迁移效果更好" } ], stake: "协助应尽早提供，还是延迟到学生充分探索之后。" }
    ],
    evidence: [
      { text: "Vygotsky, Thought and Language (1934/1986)", doi: null },
      { text: "Vygotsky, Mind in Society (1978)", doi: null },
      { text: "Wood, Bruner & Ross, The role of tutoring in problem solving (1976)", doi: null }
    ],
    applications: [
      "用同伴互助与小组讨论把社会对话转化为个体理解。",
      "提供学术语言模板与话语支架，教学生「像学科专家那样说」。",
      "把任务设计在最近发展区内，略高于独立水平。",
      "用出声思维把内隐的自我指导外化，再逐步内化。"
    ],
    terms: [
      { t: "社会文化理论", en: "Sociocultural Theory", d: "以社会互动与文化工具解释高级心理机能的形成。" },
      { t: "内化", en: "Internalization", d: "外部社会互动转化为个体内部心理过程。" },
      { t: "中介", en: "Mediation", d: "借助语言等文化工具间接调节心理活动。" },
      { t: "最近发展区", en: "Zone of Proximal Development", d: "独立水平与协助下水平之间的区间。" },
      { t: "内部言语", en: "Inner Speech", d: "内化后的自我指导性言语，支撑思维与调节。" }
    ]
  },
  E068: {
    definition: "最近发展区是维果茨基 1934 年提出的构念，指儿童独立解决问题所达到的水平与在成人指导或更有能力同伴协作下所能达到的水平之间的差距。他把这一区间视为教学最有效的着力点。",
    claims: [
      "最近发展区是独立表现与协助下表现之间的差距，而非固定的能力标签。",
      "有效教学应瞄准最近发展区，而非已掌握的水平或远超能力的内容。",
      "协助形式包括示范、提示、提问与共同完成任务的片段。",
      "最近发展区随能力增长而移动，需要持续重新评估。"
    ],
    agreements: [
      "在协助下儿童能达到高于独立水平的成绩，这一现象被大量研究证实。",
      "动态评估比静态测验更能反映学习潜能。",
      "协助应随能力增长逐步撤除，而非长期固定。"
    ],
    disagreements: [
      { topic: "最近发展区是可测量的区间还是整体关系", sides: [ { who: "vygotsky", view: "它是可据以安排教学的发展区间，具有明确的教学含义" }, { who: "斯马戈林斯基", view: "把它窄化为难度匹配的技术概念，会丢失其情感、关系与整体性维度" } ], stake: "该构念应被操作化为难度区间，还是保留为整体发展关系。" },
      { topic: "协助的时机", sides: [ { who: "vygotsky", view: "在区间内及时提供协助，使学习者完成更高水平的任务" }, { who: "卡普尔", view: "延迟指导、先经历生产性失败，能带来更深的迁移" } ], stake: "教学效率与长期迁移之间如何取舍。" }
    ],
    evidence: [
      { text: "Vygotsky, Mind in Society (1978)", doi: null },
      { text: "Wood, Bruner & Ross, The role of tutoring in problem solving (1976)", doi: null },
      { text: "Chaiklin, The zone of proximal development in Vygotsky's analysis of learning and instruction (2003)", doi: null }
    ],
    applications: [
      "先诊断独立水平，再决定支架的量与形式。",
      "把略高能力的同伴与学习者配对，形成互助区间。",
      "设计分级提示卡，从一般提示到具体步骤。",
      "随进步撤除支架，重新定位新的区间。"
    ],
    terms: [
      { t: "最近发展区", en: "Zone of Proximal Development", d: "独立水平与协助下可达水平之间的差距。" },
      { t: "动态评估", en: "Dynamic Assessment", d: "在协助过程中测量学习潜能而非既有成绩。" },
      { t: "支架", en: "Scaffolding", d: "暂时性、可渐隐的结构支持。" },
      { t: "现有发展水平", en: "Actual Development Level", d: "独立解决问题所能达到的水平。" },
      { t: "协助表现", en: "Assisted Performance", d: "在他人支持下完成任务的表现。" }
    ]
  },
  E069: {
    definition: "伍德、布鲁纳与罗斯 1976 年在研究成人辅导幼儿搭积木时提出支架隐喻，指成人提供的暂时性、可调节、可渐隐的结构支持。其核心是把学习者尚不能独立完成的部分接管过来，随能力增长再移交。",
    claims: [
      "支架是暂时性的，必须随能力增长逐步撤除。",
      "支架包括唤起兴趣、降低自由度、维持方向、标记关键特征与示范。",
      "支架应针对当前卡点，而非替代学习者完成全部任务。",
      "支架的最终目标是让学习者接管自我调节。"
    ],
    agreements: [
      "对新手而言，有指导的协助优于无协助的独立探索。",
      "支架过度会导致依赖，支架不足则导致挫败，需校准在最近发展区内。",
      "渐隐是支架有效的关键环节，而非附属步骤。"
    ],
    disagreements: [
      { topic: "支架应即时还是延迟", sides: [ { who: "wood_b", view: "在困难出现时提供恰到好处的帮助，使任务得以推进" }, { who: "卡普尔", view: "先让学生独立探索并失败，再提供指导，迁移效果更佳" } ], stake: "帮助的时机与学习深度之间的关系。" },
      { topic: "降低难度是否损害长期保持", sides: [ { who: "wood_b", view: "降低任务自由度能让学习者专注于当前可学的部分" }, { who: "roediger", view: "适度困难与自主提取更有利于长期保持，过度支架会削弱它" } ], stake: "即时表现顺畅与长期学习之间如何权衡。" }
    ],
    evidence: [
      { text: "Wood, Bruner & Ross, The role of tutoring in problem solving (1976)", doi: null },
      { text: "Palincsar & Brown, Reciprocal teaching of comprehension-fostering and comprehension-monitoring activities (1984)", doi: null },
      { text: "Puntambekar & Hübscher, Tools for scaffolding students in a complex learning environment (2005)", doi: null }
    ],
    applications: [
      "提供写作模板与句式支架，随熟练逐步撤除。",
      "设计提示层级，从一般性提醒到具体步骤。",
      "课堂中通过巡回与同伴互助提供分布式支架。",
      "使用渐隐式学习单，逐次减少填空与提示。"
    ],
    terms: [
      { t: "支架", en: "Scaffolding", d: "暂时性、可渐隐的结构支持。" },
      { t: "渐隐", en: "Fading", d: "随能力增长逐步撤除支持的过程。" },
      { t: "提示", en: "Prompting", d: "指向关键线索以推动下一步行动的干预。" },
      { t: "任务分解", en: "Task Decomposition", d: "把复杂任务拆成可管理的子步骤。" },
      { t: "责任移交", en: "Transfer of Responsibility", d: "把任务控制权从教师转向学习者。" }
    ]
  },
  E070: {
    definition: "柯林斯、布朗与纽曼 1989 年提出认知学徒制，把传统学徒制的示范与带教迁移到认知领域。它通过建模、教练、脚手架、清晰化、反思与探索六个环节，使原本内隐的专家思维过程可见、可学、可迁移。",
    claims: [
      "思维过程应外显化，学生才能观察与模仿专家的策略。",
      "学习应在真实或逼真的任务情境中进行，而非脱离应用的技能训练。",
      "教学包含建模、教练、支架、清晰化、反思与探索六种方法。",
      "随能力增长，教师支持减少，学生自主探索增加。"
    ],
    agreements: [
      "专家示范与出声思维能提升学生的策略使用。",
      "在真实任务中学习有助于迁移，与情境学习理论一致。",
      "反思与自我解释对深度理解有重要作用。"
    ],
    disagreements: [
      { topic: "从整体任务还是分解成分开始", sides: [ { who: "collins", view: "应从一开始就在真实复杂任务中学习，成分在情境中获得意义" }, { who: "anderson_j", view: "应先在简化条件中训练基本规则，熟练后再组合以降低负荷" } ], stake: "复杂技能的学习序列应自上而下还是自下而上。" },
      { topic: "能否在大班中规模化", sides: [ { who: "collins", view: "通过同伴、工具与结构化对话，学徒制可以扩展到班级" }, { who: "rosenshine", view: "大班中示范与个别教练难以保证频率，结构化直接教学更可行" } ], stake: "高成本的情境化方法能否在不失其效的前提下普及。" }
    ],
    evidence: [
      { text: "Collins, Brown & Newman, Cognitive apprenticeship: Teaching the crafts of reading, writing, and mathematics (1989)", doi: null },
      { text: "Brown, Collins & Duguid, Situated cognition and the culture of learning (1989)", doi: null },
      { text: "Collins, Brown & Holum, Cognitive apprenticeship: Making thinking visible (1991)", doi: null }
    ],
    applications: [
      "数学解题时教师出声示范思路与犹豫之处。",
      "写作工作坊采用示范—共写—独立写的序列。",
      "实习与临床带教中安排观察、协助到独立承担。",
      "用反思日志与复盘把策略外化。"
    ],
    terms: [
      { t: "建模", en: "Modeling", d: "专家外显展示任务执行与思考过程。" },
      { t: "教练", en: "Coaching", d: "观察学生执行并给予针对性提示与反馈。" },
      { t: "脚手架", en: "Scaffolding", d: "提供暂时支持以完成当前无法独立完成的部分。" },
      { t: "清晰化", en: "Articulation", d: "要求学生说出自己的知识与思考过程。" },
      { t: "反思", en: "Reflection", d: "将自己的表现与专家模型比较并修正。" }
    ]
  },
  E071: {
    definition: "冯·格拉塞斯费尔德在 1970 至 1980 年代提出激进建构主义，主张知识不是对外部世界的表征复制，而是主体为组织经验、维持适应而主动建构的结构。其真理标准不是符合论，而是生存力。",
    claims: [
      "知识不由外界输入，而是主体内部建构的产物。",
      "认知的功能是适应经验，而非发现本体论意义上的真理。",
      "真理标准应是生存力与一致性，而非与外部世界的符合。",
      "教师无法把知识传递给学生，只能提供扰动与协商的机会。",
      "学习是自我组织的过程，错误是建构的必然组成。"
    ],
    agreements: [
      "学习者带着先前概念进入课堂，教学必须从这些概念出发。",
      "讲授不能保证理解，学生需要主动加工。",
      "概念转变往往需要认知冲突与协商。"
    ],
    disagreements: [
      { topic: "是否存在共享的客观知识", sides: [ { who: "glasersfeld", view: "我们只能接触自己的经验建构，无法比较其与实在的符合" }, { who: "马修斯", view: "科学知识指称独立于心灵的实在，否认这一点会瓦解科学教育的基础" } ], stake: "若知识只是个体建构，课程权威与科学共识如何被辩护。" },
      { topic: "建构主义是否推出最小指导", sides: [ { who: "glasersfeld", view: "教学只能扰动，不能传递，学生必须自行建构" }, { who: "sweller", view: "认识论主张不等于教学处方，新手需要明确指导以节省工作记忆" } ], stake: "关于知识本质的立场能否直接推出教学方法。" }
    ],
    evidence: [
      { text: "von Glasersfeld, An introduction to radical constructivism (1984)", doi: null },
      { text: "von Glasersfeld, Radical Constructivism: A Way of Knowing and Learning (1995)", doi: null },
      { text: "Matthews, Science Teaching: The Role of Philosophy of Science (1994)", doi: null }
    ],
    applications: [
      "用诊断性提问先探查学生的前概念，而非假设空白。",
      "设计能暴露矛盾的实验或案例，制造有效扰动。",
      "允许学生提出并检验自己的解释，再与学科共识对照。",
      "把错误视为建构过程的线索，而非需要立即清除的污点。"
    ],
    terms: [
      { t: "生存力", en: "Viability", d: "建构在经验中能否支持有效行动的标准。" },
      { t: "扰动", en: "Perturbation", d: "引发认知不平衡、促使重构的外部事件。" },
      { t: "自我组织", en: "Self-Organization", d: "系统依内部规则自发形成秩序的过程。" },
      { t: "前概念", en: "Preconception", d: "学习前已有的、常与科学解释冲突的观念。" },
      { t: "符合论真理", en: "Correspondence Theory of Truth", d: "主张陈述因符合实在而为真的真理观。" }
    ]
  },

  E072: {
    definition: "马斯洛 1943 年在《人类动机理论》中提出需求层次，把人的需要由低到高排列为生理、安全、归属与爱、尊重、自我实现。低层需要未满足时，高层需要难以成为行为的主要驱动力。",
    claims: [
      "需要分层次，缺失性需要（生理、安全、归属、尊重）优先于成长性需要。",
      "未满足的缺失性需要会主导注意与行为，压制学习等成长性活动。",
      "自我实现是潜能充分发展的倾向，属于成长性动机。",
      "需要一旦满足便不再构成动机，动机重心随之上移。"
    ],
    agreements: [
      "安全、归属等基本需要未满足会干扰学习与注意，这一实践结论被支持。",
      "动机是多维的，不能简化为单一奖惩维度。",
      "满足基本心理需要有助于投入，与自我决定理论部分一致。"
    ],
    disagreements: [
      { topic: "需要是层级递进还是并行", sides: [ { who: "maslow", view: "低层需要未满足时，高层需要难以成为行为的组织中心" }, { who: "deci_ryan", view: "自主、胜任与关联三种需要并行起作用，不必按层级先后满足" } ], stake: "动机结构应建模为金字塔，还是若干普遍且并行的心理需要。" },
      { topic: "层级顺序是否有实证支持", sides: [ { who: "maslow", view: "临床观察显示需要按由低到高的顺序显现" }, { who: "瓦巴与布里德威尔", view: "跨研究综述几乎不支持严格的层级顺序，理论更接近启发式框架" } ], stake: "该理论是经验科学命题，还是用于组织讨论的分类框架。" }
    ],
    evidence: [
      { text: "Maslow, A theory of human motivation (1943)", doi: null },
      { text: "Maslow, Motivation and Personality (1954)", doi: null },
      { text: "Wahba & Bridwell, Maslow reconsidered: A review of research on the need hierarchy theory (1976)", doi: null }
    ],
    applications: [
      "先建立课堂安全感与归属感，再推进高难任务。",
      "不在学生饥饿、恐惧或睡眠不足时强推复杂学习。",
      "用稳定的常规与班级共同体活动满足归属需要。",
      "避免把学习动机不足道德化，先排查基本条件。"
    ],
    terms: [
      { t: "缺失性需要", en: "Deficiency Needs", d: "未满足时驱动行为、满足后动机减弱的低层需要。" },
      { t: "成长性需要", en: "Growth Needs", d: "指向潜能实现的自我实现倾向。" },
      { t: "自我实现", en: "Self-Actualization", d: "充分发挥自身潜能的倾向。" },
      { t: "需求层次", en: "Hierarchy of Needs", d: "按优先顺序排列的需要结构。" },
      { t: "峰值体验", en: "Peak Experience", d: "自我实现时出现的高度完整与愉悦体验。" }
    ]
  },
  E073: {
    definition: "阿特金森 1957 年提出成就动机的期望—价值模型，认为行为倾向由追求成功的动机与避免失败的动机之合力决定。追求成功者偏好中等难度任务，避免失败者偏好很容易或很难的任务。",
    claims: [
      "成就行为倾向等于追求成功的倾向减去避免失败的倾向。",
      "追求成功的倾向由动机强度、成功概率与成功诱因值共同决定。",
      "成功概率与诱因值互补，因此中等难度任务对追求成功者吸引力最大。",
      "避免失败者倾向选择极难或极易任务，以回避失败带来的自责。"
    ],
    agreements: [
      "个体在成就情境中的任务选择存在稳定差异。",
      "失败恐惧会引发回避策略，如拖延与自我设限。",
      "期望与价值共同决定动机，与期望—价值理论一致。"
    ],
    disagreements: [
      { topic: "动机是稳定特质还是可改变的信念", sides: [ { who: "atkinson_j", view: "追求成功与避免失败是相对稳定的动机倾向，决定任务选择" }, { who: "dweck", view: "能力观与目标定向塑造失败反应，可通过干预改变" } ], stake: "成就行为源于稳定动机强度，还是可塑的信念系统。" },
      { topic: "两种动机是否独立", sides: [ { who: "atkinson_j", view: "追求成功与避免失败是两个独立维度，其合力决定行为" }, { who: "科温顿", view: "两者都服务于自我价值保护，本质是同一动机的两种表现" } ], stake: "失败恐惧是独立动机，还是自我价值威胁的衍生物。" }
    ],
    evidence: [
      { text: "Atkinson, Motivational determinants of risk-taking behavior (1957)", doi: null },
      { text: "McClelland, Atkinson, Clark & Lowell, The Achievement Motive (1953)", doi: null },
      { text: "Covington, Making the Grade: A Self-Worth Perspective on Motivation and School Reform (1992)", doi: null }
    ],
    applications: [
      "设置中等难度、可分解的挑战，让成功概率与价值都足够高。",
      "减少公开排名，降低失败恐惧对任务选择的扭曲。",
      "识别自我设限行为（临时抱佛脚、故意不准备）并提供替代策略。",
      "用个人进步而非横向比较作为评价基准。"
    ],
    terms: [
      { t: "成就动机", en: "Achievement Motivation", d: "追求高标准表现的内在倾向。" },
      { t: "追求成功动机", en: "Hope of Success", d: "趋向成功与自豪体验的动机倾向。" },
      { t: "避免失败动机", en: "Fear of Failure", d: "回避失败带来的羞耻与自责的倾向。" },
      { t: "诱因值", en: "Incentive Value", d: "成功所带来的吸引力大小。" },
      { t: "自我设限", en: "Self-Handicapping", d: "故意设置障碍以便为失败提供借口。" }
    ]
  },
  E074: {
    definition: "韦纳 1974 年提出归因理论，认为个体对成败原因的解释沿内外源、稳定性与可控性三个维度展开，不同归因模式引发不同情绪与期望，从而影响后续努力。归因训练因此成为动机干预的常用路径。",
    claims: [
      "归因可按内外源、稳定性与可控性三个维度分类。",
      "能力归因（内部、稳定、不可控）导致无助与放弃，努力归因（内部、不稳定、可控）维持希望。",
      "归因影响自豪、内疚、羞耻与愤怒等情绪，并改变对未来的成功期望。",
      "归因方式可通过训练改变，并进而改善学业行为。"
    ],
    agreements: [
      "归因与情绪、期望存在稳定关联，跨文化研究大体支持三维结构。",
      "把失败归因于可控因素（策略、努力）比归因于能力更有利于坚持。",
      "教师的反馈语言会传递归因信息，影响学生的解释方式。"
    ],
    disagreements: [
      { topic: "应强调努力还是策略", sides: [ { who: "weiner", view: "把失败归因于努力不足（可控）能维持期望与自责式动力" }, { who: "dweck", view: "反复强调努力可能被理解为能力不足，应转向策略与能力可塑信念" } ], stake: "归因训练的核心杠杆是努力量还是策略与能力观。" },
      { topic: "归因是原因还是结果", sides: [ { who: "weiner", view: "归因独立影响情绪与后续努力，是可干预的中介变量" }, { who: "bandura", view: "归因变化往往伴随效能信念变化，难以独立产生效果" } ], stake: "改变归因能否脱离能力信念单独起作用。" }
    ],
    evidence: [
      { text: "Weiner et al., Perceiving the causes of success and failure (1971)", doi: null },
      { text: "Weiner, An attributional theory of achievement motivation and emotion (1985)", doi: null },
      { text: "Försterling, Attributional retraining: A review (1985)", doi: null }
    ],
    applications: [
      "反馈具体指向策略，如「换一种方法试试」，而非「再努力点」。",
      "避免用能力标签解释成绩，尤其是公开评价场合。",
      "用归因训练小组帮助学生区分可控与不可控因素。",
      "失败复盘时同时检查策略、投入与任务难度。"
    ],
    terms: [
      { t: "归因", en: "Attribution", d: "对行为结果原因的推断与解释。" },
      { t: "内外源", en: "Locus", d: "原因位于个体内部还是外部。" },
      { t: "稳定性", en: "Stability", d: "原因是否随时间持续不变。" },
      { t: "可控性", en: "Controllability", d: "原因是否受个体意志调节。" },
      { t: "习得性无助", en: "Learned Helplessness", d: "反复不可控失败后放弃尝试的状态。" }
    ]
  },
  E075: {
    definition: "德西与瑞安在 1985 年系统提出自我决定理论，主张人有自主、胜任与关联三种基本心理需要，其满足程度决定动机的质量而非仅数量。理论以外在动机的内化连续体解释从无动机到内在动机的转变。",
    claims: [
      "自主、胜任与关联三种基本心理需要的满足是内在动机与心理健康的基础。",
      "动机是连续体：无动机、外部调节、内摄调节、认同调节、整合调节到内在动机。",
      "控制性的奖励、期限与评价会削弱自主感，从而侵蚀内在动机。",
      "自主支持的教学（提供选择、解释理由、承认感受）提升投入与深层学习。"
    ],
    agreements: [
      "自主支持型教学与更高的投入、坚持和幸福感相关，跨文化研究支持。",
      "控制性奖励可能削弱内在动机，这一效应在元分析中总体成立。",
      "能力感与归属感对学习投入有独立贡献。"
    ],
    disagreements: [
      { topic: "外部奖励是有益还是有害", sides: [ { who: "deci_ryan", view: "奖励的效果取决于其控制性还是信息性，控制性奖励会破坏自主" }, { who: "skinner", view: "强化即行为概率的提高，安排得当的奖励总能增加目标行为" } ], stake: "奖励应被视为普遍有效的行为工具，还是需要区分其动机性质。" },
      { topic: "三种需要是否普遍", sides: [ { who: "deci_ryan", view: "自主、胜任与关联是跨文化的基本心理需要" }, { who: "马库斯与北山", view: "集体主义文化中的动机更多由关系义务构成，自主并非普遍核心" } ], stake: "自主需要是普遍人性，还是个体主义文化的价值投射。" }
    ],
    evidence: [
      { text: "Deci & Ryan, Intrinsic Motivation and Self-Determination in Human Behavior (1985)", doi: null },
      { text: "Deci, Koestner & Ryan, A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation (1999)", doi: null },
      { text: "Ryan & Deci, Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being (2000)", doi: null }
    ],
    applications: [
      "在任务、材料或呈现方式上提供有意义的选择。",
      "解释任务理由与价值，而非仅下达命令。",
      "使用信息性反馈（指出改进方向）而非控制性评价。",
      "设计合作性结构，减少纯竞争带来的关系损耗。"
    ],
    terms: [
      { t: "自主", en: "Autonomy", d: "行为出于自愿意志而非被迫的体验。" },
      { t: "胜任", en: "Competence", d: "感到自己能够有效应对任务的需要。" },
      { t: "关联", en: "Relatedness", d: "与他人建立安全连接的需要。" },
      { t: "内化", en: "Internalization", d: "外部调节逐步转化为个人价值的过程。" },
      { t: "过度理由效应", en: "Overjustification Effect", d: "外部奖励削弱原有内在兴趣的现象。" }
    ]
  },
  E076: {
    definition: "德韦克在 2006 年《思维模式》中区分固定型与成长型思维：前者认为智力固定，后者认为能力可通过努力与策略发展。她主张思维模式影响目标选择、对失败的解释与坚持性。",
    claims: [
      "对智力可塑性的信念影响挑战寻求、努力归因与挫折后的恢复。",
      "固定型思维者倾向表现目标，把失败解读为能力不足的证据。",
      "成长型思维可通过过程性表扬、策略反馈与教学干预培养。",
      "思维模式是情境敏感的信念，而非固定的人格类型。"
    ],
    agreements: [
      "能力观与目标定向、失败反应存在相关，跨样本大体稳定。",
      "过程性表扬比能力表扬更有利于挫折后的坚持，短期实验支持。",
      "思维模式信念可以被测量，且随情境变化。"
    ],
    disagreements: [
      { topic: "干预效应是否具有实践意义", sides: [ { who: "dweck", view: "成长型思维干预对学业有可观的正面效应，尤其对弱势学生" }, { who: "西斯克", view: "两项元分析显示平均效应极小，且集中于少数高风险群体" } ], stake: "小效应是否值得大规模推广，还是被过度宣传。" },
      { topic: "实验室效应能否规模化", sides: [ { who: "dweck", view: "设计良好的简短干预可在真实学校中产生持久效果" }, { who: "福利亚诺", view: "英国大规模随机试验未发现整体效应，规模化后效应消失" } ], stake: "受控实验的效应能否在真实教育系统中复现。" }
    ],
    evidence: [
      { text: "Dweck, Mindset: The New Psychology of Success (2006)", doi: null },
      { text: "Blackwell, Trzesniewski & Dweck, Implicit theories of intelligence predict achievement across an adolescent transition (2007)", doi: null },
      { text: "Sisk et al., To what extent and under which circumstances are growth mind-sets important to academic achievement? Two meta-analyses (2018)", doi: null }
    ],
    applications: [
      "表扬过程与策略，而非天赋或聪明。",
      "把错误正常化为学习信息，公开讨论错题思路。",
      "教学生使用「我还没学会」的语言替代能力判定。",
      "把思维模式口号与具体策略教学结合，避免空喊口号。"
    ],
    terms: [
      { t: "固定型思维", en: "Fixed Mindset", d: "认为智力基本固定、难以改变的信念。" },
      { t: "成长型思维", en: "Growth Mindset", d: "认为能力可通过努力与策略发展的信念。" },
      { t: "过程性表扬", en: "Process Praise", d: "针对努力、策略与过程的肯定。" },
      { t: "内隐智力观", en: "Implicit Theory of Intelligence", d: "个体关于智力可塑性的潜在信念。" },
      { t: "简短心理干预", en: "Brief Intervention", d: "一次或数次短时课程式的信念干预。" }
    ]
  },

  E077: {
    definition: "尼科尔斯 1984 年提出目标定向理论，区分掌握目标（关注能力增长与任务掌握）与表现目标（关注证明或避免显示低能力）。后续研究进一步区分趋近与回避的表现目标，并指出课堂的目标结构塑造学生的目标定向。",
    claims: [
      "掌握目标指向能力发展，表现目标指向能力证明。",
      "表现目标可再分为表现趋近与表现回避，后者与无助模式关联最强。",
      "目标定向受课堂目标结构（评价、任务、权威安排）影响，而不只是个体特质。",
      "掌握目标与深层策略、坚持性和内在兴趣相关。"
    ],
    agreements: [
      "表现回避目标与较差的学习结果、焦虑和放弃相关，证据较一致。",
      "掌握目标结构与深层加工、学科兴趣相关。",
      "目标定向具有情境依赖性，可通过课堂设计改变。"
    ],
    disagreements: [
      { topic: "表现目标是否必然有害", sides: [ { who: "nicholls", view: "以证明能力为目的的目标会削弱学习本身的价值与坚持" }, { who: "哈拉克维茨", view: "表现趋近目标在大学竞争中可预测更高成绩，关键在趋近还是回避" } ], stake: "表现目标应被整体否定，还是需分维度与情境评估。" },
      { topic: "目标定向是特质还是状态", sides: [ { who: "nicholls", view: "目标定向源于个体对能力的理解方式，具有相当的稳定性" }, { who: "平特里奇", view: "个体可同时持有多重目标，且随课堂情境变化" } ], stake: "应按稳定个体差异还是情境建构来设计与测量。" }
    ],
    evidence: [
      { text: "Nicholls, Achievement motivation: Conceptions of ability, subjective experience, task choice, and performance (1984)", doi: null },
      { text: "Dweck & Leggett, A social-cognitive approach to motivation and personality (1988)", doi: null },
      { text: "Harackiewicz, Barron, Pintrich, Elliot & Thrash, Revision of achievement goal theory (2002)", doi: null }
    ],
    applications: [
      "用掌握性评价与个人进步反馈替代公开排名。",
      "任务设计强调学习目的与选择空间，减少能力比较。",
      "区分「做得好」与「比他人好」两类反馈语言。",
      "对表现回避的学生降低公开出错的风险。"
    ],
    terms: [
      { t: "掌握目标", en: "Mastery Goal", d: "以发展能力与掌握任务为目的的定向。" },
      { t: "表现目标", en: "Performance Goal", d: "以证明或避免显示低能力为目的的定向。" },
      { t: "目标结构", en: "Goal Structure", d: "课堂评价与任务安排所传递的目标导向。" },
      { t: "能力观", en: "Conception of Ability", d: "对能力是固定还是可发展的理解。" },
      { t: "表现回避", en: "Performance Avoidance", d: "以避免显得无能为核心的表现目标。" }
    ]
  },
  E078: {
    definition: "威格菲尔德与埃克尔斯在 2000 年系统阐述期望—价值理论，主张成就行为由对成功的期望与任务的主观价值共同决定。价值被分解为内在价值、效用价值、成就价值与代价四个成分。",
    claims: [
      "动机近似等于期望与价值的乘积，任一成分接近零则动机接近于零。",
      "价值包含内在兴趣、效用、成就价值与相对代价四个成分。",
      "期望与价值随年龄下降，并在数学等学科中随自我概念分化。",
      "期望与价值受社会角色、文化刻板印象与先前成就经验影响。"
    ],
    agreements: [
      "期望与价值能稳定预测课程选择与学业投入。",
      "学科自我概念随年龄变得更加领域特定。",
      "代价（时间、情绪成本、替代机会）是独立成分，不可忽略。"
    ],
    disagreements: [
      { topic: "期望还是价值更能预测选择", sides: [ { who: "wigfield", view: "任务价值成分对课程选择与持续投入具有独特且较强的预测力" }, { who: "bandura", view: "能力信念与自我效能才是行为选择与坚持的首要决定因素" } ], stake: "提升学业选择的杠杆应放在价值建构还是能力信念。" },
      { topic: "期望与价值是乘法还是加法关系", sides: [ { who: "wigfield", view: "两者交互决定动机，任一为零则动机消失" }, { who: "特劳特魏因", view: "实证数据中加法模型的拟合往往更好，乘法假设被夸大" } ], stake: "理论形式应坚持乘积假设还是依数据修正。" }
    ],
    evidence: [
      { text: "Eccles et al., Expectancies, values, and academic behaviors (1983)", doi: null },
      { text: "Wigfield & Eccles, Expectancy–value theory of achievement motivation (2000)", doi: null },
      { text: "Hulleman & Harackiewicz, Promoting interest and performance in high school science classes (2009)", doi: null }
    ],
    applications: [
      "把学科内容与学生的现实用途、职业路径建立具体联系。",
      "同时提升期望：用小步成功与清晰标准降低「我做不到」的判断。",
      "公开讨论学习的时间与情绪代价，帮助做真实的取舍。",
      "减少刻板印象线索，保护弱势群体的领域价值感。"
    ],
    terms: [
      { t: "期望", en: "Expectancy", d: "对自己能否成功完成任务的判断。" },
      { t: "内在价值", en: "Intrinsic Value", d: "从事任务本身的兴趣与愉悦。" },
      { t: "效用价值", en: "Utility Value", d: "任务对当前或未来目标的工具性作用。" },
      { t: "成就价值", en: "Attainment Value", d: "任务对自我身份与价值的重要性。" },
      { t: "代价", en: "Cost", d: "投入所需的时间、情绪与机会损失。" }
    ]
  },
  E079: {
    definition: "凯勒 1983 年提出 ARCS 动机设计模型，把动机条件分为注意、相关、信心与满足四类，主张在教学设计中系统安排这四类条件。它把动机从学生特质转化为可设计的教学变量。",
    claims: [
      "动机由注意、相关、信心与满足四类条件共同支撑，缺一不可。",
      "注意需要先唤起再维持，可通过不一致、冲突与变化实现。",
      "相关指内容与学习者的目标、经验与需要建立连接。",
      "信心来自可达到的成功期望，满足来自结果与期望的一致。"
    ],
    agreements: [
      "动机可通过教学设计系统影响，而非仅靠教师人格魅力。",
      "四个类别覆盖了主要动机理论的可操作要点，便于实践使用。",
      "情境兴趣可由新颖性与变化提升，但难以持久。"
    ],
    disagreements: [
      { topic: "动机设计应基于分类还是统一机制", sides: [ { who: "keller", view: "四类条件的操作性分类足以指导设计，无需统一机制模型" }, { who: "deci_ryan", view: "应从自主、胜任与关联三种基本需要出发解释动机，分类只是表层" } ], stake: "实践框架能否替代机制解释，以及如何预测条件冲突。" },
      { topic: "吸引注意与削减负荷是否冲突", sides: [ { who: "keller", view: "适度的情绪与装饰性设计能提升投入，从而促进学习" }, { who: "sweller", view: "与目标无关的装饰会增加外在负荷，反而损害理解" } ], stake: "动机性装饰的收益是否大于其认知成本。" }
    ],
    evidence: [
      { text: "Keller, Motivational design of instruction (1983)", doi: null },
      { text: "Keller, Development and use of the ARCS model of instructional design (1987)", doi: null },
      { text: "Keller, Motivational Design for Learning and Performance (2010)", doi: null }
    ],
    applications: [
      "用冲突性问题或反直觉现象开场，唤起注意。",
      "明确说明学习内容与考试之外的真实用途。",
      "设置可达成的阶段目标，让学生体验可控的成功。",
      "提供及时、公平的认可与反馈，避免空洞奖励。"
    ],
    terms: [
      { t: "注意", en: "Attention", d: "唤起并维持学生对内容的关注。" },
      { t: "相关", en: "Relevance", d: "内容与学习者目标经验的连接程度。" },
      { t: "信心", en: "Confidence", d: "学生对自己能成功的预期。" },
      { t: "满足", en: "Satisfaction", d: "结果与期望一致带来的内在或外在满足。" },
      { t: "动机设计", en: "Motivational Design", d: "有意安排教学条件以激发与维持动机。" }
    ]
  },
  E080: {
    definition: "契克森米哈赖在 1975 至 1990 年间通过对艺术家、运动员与日常活动的访谈提出心流理论。心流指挑战与技能相匹配时产生的高度投入、专注、时间感改变与自我意识消退的最佳体验状态。",
    claims: [
      "心流发生在挑战与技能大致平衡、且挑战略高于技能的通道中。",
      "心流伴随高度专注、清晰目标、即时反馈、控制感与时间变形。",
      "挑战过低导致厌倦，过高导致焦虑，两者都偏离心流。",
      "心流是内在动机的典型体验，活动本身即回报。"
    ],
    agreements: [
      "挑战与技能的平衡同投入体验相关，跨活动类型有证据。",
      "清晰目标与即时反馈是进入投入状态的重要条件。",
      "心流体验与持续参与、主观幸福感相关。"
    ],
    disagreements: [
      { topic: "平衡是否为必要条件", sides: [ { who: "csikszentmihalyi", view: "挑战与技能的平衡是心流产生的核心条件" }, { who: "莫诺塔", view: "心流可在技能明显高于挑战时出现，个体差异与任务性质调节该关系" } ], stake: "心流是平衡点的产物，还是多种路径可达的状态。" },
      { topic: "心流是否等于有效学习", sides: [ { who: "csikszentmihalyi", view: "高度投入与专注是理想学习状态的标志" }, { who: "比约克", view: "流畅的主观体验未必带来长期保持，学习需要适度的提取困难" } ], stake: "主观投入体验能否作为教学效果的指标。" }
    ],
    evidence: [
      { text: "Csikszentmihalyi, Beyond Boredom and Anxiety (1975)", doi: null },
      { text: "Csikszentmihalyi, Flow: The Psychology of Optimal Experience (1990)", doi: null },
      { text: "Shernoff, Csikszentmihalyi, Schneider & Shernoff, Student engagement in high school classrooms from the perspective of flow theory (2003)", doi: null }
    ],
    applications: [
      "用自适应难度把任务维持在略高于当前技能的水平。",
      "为长任务设置清晰目标与阶段性反馈。",
      "减少不必要的打断，保护连续的专注时段。",
      "用体验取样或简短问卷了解学生的投入分布。"
    ],
    terms: [
      { t: "心流", en: "Flow", d: "挑战与技能平衡时的高度投入体验。" },
      { t: "挑战—技能平衡", en: "Challenge–Skill Balance", d: "任务难度与能力相匹配的状态。" },
      { t: "经验取样法", en: "Experience Sampling Method", d: "在日常生活中有信号提示时即时报告体验。" },
      { t: "内在奖赏", en: "Autotelic Experience", d: "活动本身即目的与回报的体验。" },
      { t: "焦虑通道", en: "Anxiety Channel", d: "挑战远高于技能时产生的负面状态。" }
    ]
  },

  E081: {
    definition: "艾宾浩斯 1885 年以无意义音节为材料，用节省法测量自己的记忆保持，绘制出遗忘曲线：遗忘在学习后最初数小时最快，随后逐渐平缓。他还发现间隔学习优于集中学习，材料的意义性影响保持。",
    claims: [
      "遗忘呈指数式下降，学习后最初 24 小时的损失最大。",
      "分散学习优于集中学习，即间隔效应。",
      "有意义的材料比无意义音节保持得更好。",
      "过度学习能提高保持，但收益递减。"
    ],
    agreements: [
      "遗忘曲线的基本形状在多种材料与人群中被重复验证。",
      "间隔学习优于集中学习，是学习科学中最稳健的结论之一。",
      "材料的意义性与组织性影响保持。"
    ],
    disagreements: [
      { topic: "实验室曲线能否推广到课堂知识", sides: [ { who: "ebbinghaus", view: "无意义音节测得的保持曲线反映记忆的一般规律" }, { who: "bartlett", view: "有意义材料的记忆是图式化重构，不能用统一的衰减曲线描述" } ], stake: "记忆规律是一般性的，还是随材料性质而变。" },
      { topic: "遗忘源于衰退还是干扰", sides: [ { who: "ebbinghaus", view: "遗忘主要是记忆痕迹随时间自然衰退" }, { who: "安德伍德", view: "遗忘主要来自前后学习之间的干扰与提取失败，而非痕迹消失" } ], stake: "复习策略应针对时间流逝还是针对干扰与新旧材料的区分。" }
    ],
    evidence: [
      { text: "Ebbinghaus, Über das Gedächtnis (1885)", doi: null },
      { text: "Cepeda, Pashler, Vul, Wixted & Rohrer, Distributed practice in verbal recall tasks: A review and quantitative synthesis (2006)", doi: null }
    ],
    applications: [
      "把复习分散到多天，而不是考前一次性突击。",
      "使用间隔重复工具安排术语与外语词汇的复习。",
      "在课后 24 小时内安排一次简短回顾。",
      "避免长时间连续灌输同一内容，改为分次短时段。"
    ],
    terms: [
      { t: "遗忘曲线", en: "Forgetting Curve", d: "保持量随时间下降的曲线，前段最陡。" },
      { t: "节省法", en: "Savings Method", d: "以重学所需时间的减少量衡量保持。" },
      { t: "间隔效应", en: "Spacing Effect", d: "分散学习优于集中学习的现象。" },
      { t: "过度学习", en: "Overlearning", d: "达到掌握后继续练习以增强保持。" },
      { t: "无意义音节", en: "Nonsense Syllable", d: "无可联想意义的实验记忆材料。" }
    ]
  },
  E082: {
    definition: "贾德 1908 年以投镖水下靶实验说明，迁移的关键不是两种情境的共同要素，而是学习者概括出的一般原理。两组儿童在理论上讲解折射原理后，在新水下深度条件下表现显著更好。",
    claims: [
      "迁移取决于对一般原理的概括，而非情境要素的相同。",
      "理论讲解能促进向新情境的迁移。",
      "经验若未上升为原理，迁移范围有限。",
      "教学应显性提炼可迁移的原则，而非只练具体题型。"
    ],
    agreements: [
      "理解原理能促进迁移，尤其当新情境表面不同而结构相似时。",
      "仅靠重复练习难以产生远迁移。",
      "概括与抽象是迁移发生的重要中介。"
    ],
    disagreements: [
      { topic: "迁移靠原理概括还是要素重叠", sides: [ { who: "judd", view: "掌握折射原理的儿童能把经验迁移到新的水深条件" }, { who: "thorndike", view: "迁移量取决于前后情境共同要素的数量，原理只是其中一类要素" } ], stake: "迁移的机制是抽象概括还是具体相似。" },
      { topic: "掌握原理是否足以保证迁移", sides: [ { who: "judd", view: "只要概括出原理，学习者便能将其应用于相关新情境" }, { who: "吉克与霍利约克", view: "即便掌握原理，学习者常无法自行提取，需要类比提示与线索" } ], stake: "教学应止于讲清原理，还是必须训练情境识别与提取。" }
    ],
    evidence: [
      { text: "Judd, The relation of special training to general intelligence (1908)", doi: null },
      { text: "Gick & Holyoak, Analogical problem solving (1980)", doi: null },
      { text: "Nisbett, Fong, Lehman & Cheng, Teaching reasoning (1987)", doi: null }
    ],
    applications: [
      "讲完例题后显性总结可迁移的原理与适用条件。",
      "用变式题训练学生识别结构相似性。",
      "在解题前提示「这像之前的哪个问题」。",
      "把原理与典型情境线索绑定，便于日后提取。"
    ],
    terms: [
      { t: "迁移", en: "Transfer", d: "先前学习对后续学习或表现的影响。" },
      { t: "概括化", en: "Generalization", d: "从具体经验中抽取一般原理的过程。" },
      { t: "原理", en: "Principle", d: "可跨情境应用的关系性知识。" },
      { t: "近迁移", en: "Near Transfer", d: "向高度相似情境的迁移。" },
      { t: "远迁移", en: "Far Transfer", d: "向表面差异较大的情境的迁移。" }
    ]
  },
  E083: {
    definition: "桑代克与伍德沃斯 1901 年通过实验否定形式训练说，提出共同要素说：迁移量取决于前后学习情境中相同要素的多少。该理论把迁移从心智官能锻炼转向具体经验的相似性。",
    claims: [
      "迁移量由前后情境中相同要素的数量决定。",
      "不存在通过训练某一心智官能而普遍提升所有能力的效应。",
      "训练应与目标情境高度相似，才可能产生明显迁移。",
      "学习是特定联结的建立，迁移即联结的共享。"
    ],
    agreements: [
      "形式训练说（如以拉丁文训练推理）缺乏证据，这一结论被广泛接受。",
      "迁移随情境相似性下降而减少，是稳健的经验规律。",
      "具体技能训练的效果通常局限于相近任务。"
    ],
    disagreements: [
      { topic: "迁移是否只依赖要素重叠", sides: [ { who: "thorndike", view: "只有共同要素足够多时迁移才会发生，原理本身不构成独立机制" }, { who: "judd", view: "概括出一般原理可使表面不同情境之间也发生迁移" } ], stake: "迁移机制是要素重叠还是抽象概括。" },
      { topic: "是否存在跨领域的训练迁移", sides: [ { who: "thorndike", view: "训练效应局限于与训练任务共享要素的活动" }, { who: "格林与贝弗利尔", view: "动作游戏训练可迁移到注意与视觉选择等非游戏任务" } ], stake: "认知训练能否产生超出训练内容的远迁移。" }
    ],
    evidence: [
      { text: "Thorndike & Woodworth, The influence of improvement in one mental function upon the efficiency of other functions (1901)", doi: null },
      { text: "Thorndike, Educational Psychology (1913)", doi: null },
      { text: "Green & Bavelier, Action video game modifies visual selective attention (2003)", doi: null }
    ],
    applications: [
      "在多样化情境中练习同一技能，扩大共同要素覆盖面。",
      "让训练任务尽量接近真实应用的条件与材料。",
      "不指望「学数学自动提升一般逻辑」，需显性指出可迁移之处。",
      "用跨情境任务检测并促进近迁移。"
    ],
    terms: [
      { t: "共同要素", en: "Identical Elements", d: "前后情境中相同的刺激与反应成分。" },
      { t: "形式训练说", en: "Formal Discipline", d: "认为训练某官能可普遍增强心智的旧说。" },
      { t: "迁移", en: "Transfer", d: "先前学习对后续表现的影响。" },
      { t: "近迁移", en: "Near Transfer", d: "向相似情境的迁移。" },
      { t: "心智官能", en: "Mental Faculty", d: "假定的可独立训练的心理能力。" }
    ]
  },
  E084: {
    definition: "塔尔文与汤姆森 1973 年提出编码特异性原则：记忆提取的效果取决于提取线索与编码时加工信息的匹配程度。该原则整合了情境依存与状态依存记忆现象，说明记住高度依赖线索。",
    claims: [
      "提取依赖编码时形成的特定线索，线索匹配则提取成功。",
      "情境、物理环境与情绪状态都可成为编码线索。",
      "同一材料以不同方式编码，会形成不同的提取路径。",
      "教学应使编码条件接近日后应用的条件。"
    ],
    agreements: [
      "情境依存记忆现象在多种范式下被重复观察。",
      "提取线索对回忆的作用强于单纯重复。",
      "编码与提取匹配的原则与迁移研究相互印证。"
    ],
    disagreements: [
      { topic: "匹配的对象是线索还是加工类型", sides: [ { who: "tulving", view: "提取成功取决于线索与编码时存储的痕迹是否匹配" }, { who: "莫里斯", view: "更关键的是编码与提取所要求的加工类型是否一致，即迁移适当加工" } ], stake: "教学设计应对齐线索环境还是对齐加工方式。" },
      { topic: "状态依存效应是否具有实践价值", sides: [ { who: "tulving", view: "情绪与生理状态作为编码线索会影响提取，具有普遍意义" }, { who: "艾希", view: "状态依存效应主要出现在情绪材料与强状态操纵中，一般化有限" } ], stake: "该现象能否支撑日常学习建议。" }
    ],
    evidence: [
      { text: "Tulving & Thomson, Encoding specificity and retrieval processes in episodic memory (1973)", doi: null },
      { text: "Godden & Baddeley, Context-dependent memory in two natural environments (1975)", doi: null },
      { text: "Morris, Bransford & Franks, Levels of processing versus transfer appropriate processing (1977)", doi: null }
    ],
    applications: [
      "在与考试相似的条件下练习：题型、时间限制与安静程度。",
      "用多种情境与例子编码，增加可用线索。",
      "教学生自建提取线索，如关键词与心理图像。",
      "避免只在单一教室或单一例题形式下练习。"
    ],
    terms: [
      { t: "编码特异性", en: "Encoding Specificity", d: "提取效果取决于线索与编码的匹配。" },
      { t: "情境依存记忆", en: "Context-Dependent Memory", d: "环境线索影响记忆提取的现象。" },
      { t: "提取线索", en: "Retrieval Cue", d: "触发记忆提取的提示信息。" },
      { t: "迁移适当加工", en: "Transfer-Appropriate Processing", d: "编码与提取所需加工一致时表现最佳。" },
      { t: "状态依存记忆", en: "State-Dependent Memory", d: "生理或情绪状态作为线索影响提取。" }
    ]
  },
  E085: {
    definition: "间隔效应指在总学习时间相同的情况下，把学习分散到多次、带间隔的时段，其长期保持优于集中突击。塞佩达等 2006 年的元分析整合数百年研究，确认该效应稳健并受间隔长度与保持期调节。",
    claims: [
      "分散学习在长期保持上优于集中学习。",
      "最优间隔随期望保持时间的延长而增长。",
      "间隔效应在多种材料、年龄与任务中稳定出现。",
      "学习者常低估间隔学习的效果，形成元认知错觉。"
    ],
    agreements: [
      "间隔效应是学习科学中最稳健的发现之一。",
      "间隔学习对长期保持优势明显，对即时测验优势较小。",
      "与检索练习结合时效果最佳。"
    ],
    disagreements: [
      { topic: "应使用等间隔还是扩展间隔", sides: [ { who: "cepeda", view: "元分析未发现扩展间隔稳定优于等间隔，等间隔更易实施" }, { who: "兰道尔", view: "随学习进展逐步拉长间隔的扩展安排更符合记忆巩固规律" } ], stake: "间隔安排应依固定节律还是随掌握程度动态调整。" },
      { topic: "效应主要来自遗忘后再编码还是提取", sides: [ { who: "cepeda", view: "间隔期的部分遗忘使每次重学都需要重新编码，从而增强记忆" }, { who: "roediger", view: "间隔之所以有效，关键在于每次接触都包含一次主动提取" } ], stake: "间隔教学应安排纯复习还是必须嵌入自测。" }
    ],
    evidence: [
      { text: "Cepeda, Pashler, Vul, Wixted & Rohrer, Distributed practice in verbal recall tasks: A review and quantitative synthesis (2006)", doi: null },
      { text: "Cepeda, Vul, Rohrer, Wixted & Pashler, Spacing effects in learning: A temporal ridgeline of optimal retention (2008)", doi: null },
      { text: "Ebbinghaus, Über das Gedächtnis (1885)", doi: null }
    ],
    applications: [
      "把复习排入每周多次的短时段，而非一次性长时段。",
      "按期望保持期设定间隔：考试越远，间隔越长。",
      "设计累积复习，每次回顾前几日内容。",
      "向学生解释间隔的学习错觉，避免依赖「读起来顺」的判断。"
    ],
    terms: [
      { t: "间隔效应", en: "Spacing Effect", d: "分散学习优于集中学习的现象。" },
      { t: "分散学习", en: "Distributed Practice", d: "把学习分配到多个时间片段。" },
      { t: "集中学习", en: "Massed Practice", d: "在单一连续时段内完成全部学习。" },
      { t: "扩展间隔", en: "Expanding Schedule", d: "随次数增加逐步拉长复习间隔的安排。" },
      { t: "元认知错觉", en: "Metacognitive Illusion", d: "主观流畅感误导学习判断的现象。" }
    ]
  },
  E086: {
    definition: "罗迪格与卡皮克 2006 年的实验表明，相比反复阅读，进行一次或多次提取测验能显著提升一周后的保持，即使测验本身没有反馈。这一测试效应说明提取本身即是强有力的学习事件。",
    claims: [
      "主动提取比重复阅读更能促进长期保持。",
      "测验的益处不完全依赖反馈，但反馈能纠正错误并增强效果。",
      "提取会改变记忆的可提取性，而不仅是评估它。",
      "学生与教师常低估测验的学习价值，偏好重复阅读。"
    ],
    agreements: [
      "测试效应在实验室与课堂、多种材料与年龄中稳定重复。",
      "提取练习对长期保持与部分迁移有正效应。",
      "高利害终结性测验不能替代低风险的形成性提取。"
    ],
    disagreements: [
      { topic: "能否促进复杂理解与迁移", sides: [ { who: "roediger", view: "只要测验形式与目标一致，提取练习能促进迁移" }, { who: "范戈格", view: "对复杂材料的迁移效应较小，需与样例、反馈结合" } ], stake: "提取练习的适用范围应限于事实还是可扩展到深层理解。" },
      { topic: "对新手是否应先学后测", sides: [ { who: "roediger", view: "即便初始提取失败，尝试提取仍能增强后续学习" }, { who: "sweller", view: "缺乏先备知识时提取徒增负荷与挫败，应先提供指导" } ], stake: "提取应在学习前、中还是后嵌入。" }
    ],
    evidence: [
      { text: "Roediger & Karpicke, Test-enhanced learning: Taking memory tests improves long-term retention (2006)", doi: null },
      { text: "Karpicke & Blunt, Retrieval practice produces more learning than elaborative studying with concept mapping (2011)", doi: null },
      { text: "Dunlosky, Rawson, Marsh, Nathan & Willingham, Improving students' learning with effective learning techniques (2013)", doi: null }
    ],
    applications: [
      "每节课用低风险小测代替部分讲授时间。",
      "推广「先回忆再翻书」的自测方法。",
      "把测验当作学习活动，而不仅是评价工具。",
      "设计累积性测验，使旧知识反复被提取。"
    ],
    terms: [
      { t: "测试效应", en: "Testing Effect", d: "提取测验提升长期保持的现象。" },
      { t: "提取练习", en: "Retrieval Practice", d: "主动从记忆中取回信息的学习活动。" },
      { t: "合意困难", en: "Desirable Difficulty", d: "增加当下难度但利于长期保持的条件。" },
      { t: "形成性测验", en: "Formative Quiz", d: "用于调节学习而非评分的低风险测验。" },
      { t: "元认知错觉", en: "Metacognitive Illusion", d: "流畅感导致高估学习效果的现象。" }
    ]
  },
  E087: {
    definition: "埃里克森等 1993 年通过对柏林音乐学院小提琴学生的研究发现，专家水平与累计的刻意练习时数相关。刻意练习指有明确目标、即时反馈、适度超出当前能力且通常需教练设计的重复训练。",
    claims: [
      "专长主要来自长期、结构化的刻意练习，而非天赋或单纯经验累积。",
      "刻意练习需明确目标、即时反馈与适度超出舒适区。",
      "练习应由教练或专家设计，以针对当前薄弱环节。",
      "工作年限不等于专长，经验可能固化为平台期。"
    ],
    agreements: [
      "练习量与专业表现存在稳定正相关，跨领域证据充分。",
      "反馈与针对性纠错是技能提升的关键。",
      "长期高强度练习需要高动机与支持性条件才能维持。"
    ],
    disagreements: [
      { topic: "练习能解释多少专长差异", sides: [ { who: "ericsson", view: "刻意练习是专长的决定性因素，差异主要来自累计练习量" }, { who: "麦克纳马拉", view: "元分析显示练习只能解释约一成到四分之一的变异，领域差异大" } ], stake: "专长是可训练的产物，还是受天赋与起始条件强烈约束。" },
      { topic: "天赋的角色", sides: [ { who: "ericsson", view: "所谓天赋多为早期练习与训练条件的差异，并非固定上限" }, { who: "弗朗索瓦·加涅", view: "天赋与练习存在交互，同等练习下个体进步速度差异显著" } ], stake: "教育应假定人人可达高水平，还是承认起点差异并做差异化支持。" }
    ],
    evidence: [
      { text: "Ericsson, Krampe & Tesch-Römer, The role of deliberate practice in the acquisition of expert performance (1993)", doi: null },
      { text: "Macnamara, Hambrick & Oswald, Deliberate practice and performance in music, games, sports, education, and professions: A meta-analysis (2014)", doi: null },
      { text: "Ericsson & Harwell, Deliberate practice and proposed limits on the effects of practice on the acquisition of expert performance (2019)", doi: null }
    ],
    applications: [
      "设计针对薄弱环节的练习，而非重复已熟练内容。",
      "提供即时、具体、可执行的反馈。",
      "把目标设在略高于当前水平，并分解为可练的子技能。",
      "避免把「多练」等同于「有效练」，定期复盘练习方式。"
    ],
    terms: [
      { t: "刻意练习", en: "Deliberate Practice", d: "有目标、有反馈、超出舒适区的结构化训练。" },
      { t: "专长", en: "Expertise", d: "在特定领域稳定表现出的高水平能力。" },
      { t: "反馈", en: "Feedback", d: "关于表现与目标差距的信息。" },
      { t: "舒适区", en: "Comfort Zone", d: "已熟练、无需额外努力的任务范围。" },
      { t: "平台期", en: "Plateau", d: "练习继续但表现长期不再提升的阶段。" }
    ]
  },

  E088: {
    definition: "弗拉维尔 1979 年提出元认知，指个体关于自身认知过程的知识，以及对这些过程的监控与调节。它包括元认知知识与元认知体验，并在计划、监控与评估三个环节中发挥作用。",
    claims: [
      "元认知包括元认知知识与元认知调节（计划、监控、评估）。",
      "元认知知识涉及关于自我、任务与策略三方面的认识。",
      "元认知监控依赖工作记忆与执行功能，并随年龄发展。",
      "元认知能力可通过显性教学与反思活动提升。"
    ],
    agreements: [
      "元认知与学业成就存在稳定正相关，且部分独立于智力。",
      "自我监控与策略选择的训练能改善学习表现。",
      "年幼儿童的元认知判断常过度乐观，高估自己的掌握程度。"
    ],
    disagreements: [
      { topic: "元认知能力是否可作一般技能测量", sides: [ { who: "flavell", view: "元认知是跨领域的一般认知能力，可在不同任务中迁移" }, { who: "维恩曼", view: "元认知判断高度依赖领域知识与任务情境，难以脱离内容测量" } ], stake: "元认知应作为通用能力训练，还是嵌入各学科分别培养。" },
      { topic: "元认知能否独立解释自我调节", sides: [ { who: "flavell", view: "元认知的知识与监控是理解学习调节的核心线索" }, { who: "zimmerman", view: "自我调节还包括动机与行为维度，单靠元认知无法解释投入与坚持" } ], stake: "学习调节的理论单位应是元认知，还是包含动机的完整系统。" }
    ],
    evidence: [
      { text: "Flavell, Metacognition and cognitive monitoring: A new area of cognitive-developmental inquiry (1979)", doi: null },
      { text: "Veenman, Van Hout-Wolters & Afflerbach, Metacognition and learning: Conceptual and methodological considerations (2006)", doi: null },
      { text: "Dunlosky & Metcalfe, Metacognition (2009)", doi: null }
    ],
    applications: [
      "教学生使用预测—检验—反思的循环。",
      "用学习日志记录所用策略及其效果。",
      "考前让学生预测得分，再与结果对照校准判断。",
      "提供策略菜单并讨论各策略的适用条件。"
    ],
    terms: [
      { t: "元认知", en: "Metacognition", d: "关于自身认知的知识与对其监控调节。" },
      { t: "元认知知识", en: "Metacognitive Knowledge", d: "关于自我、任务与策略的认识。" },
      { t: "监控", en: "Monitoring", d: "在学习过程中追踪理解与进展。" },
      { t: "调节", en: "Regulation", d: "依监控结果调整策略与投入。" },
      { t: "学习判断", en: "Judgment of Learning", d: "对自己已掌握程度的即时评估。" }
    ]
  },
  E089: {
    definition: "齐默尔曼 1989 年提出自我调节学习的社会认知模型，把学习视为预思、执行与自我反思三阶段的循环。学习者在元认知、动机与行为三个维度上主动调节，并受环境与个人因素的交互影响。",
    claims: [
      "自我调节学习是预思、执行、反思三阶段的循环，而非一次性事件。",
      "调节发生在元认知、动机与情感、行为三个维度。",
      "自我调节能力经观察、模仿、自我控制到自我调节逐步社会化。",
      "自我效能、目标定向与归因是调节的重要动机基础。"
    ],
    agreements: [
      "自我调节学习策略与学业成绩正相关，跨年龄稳定。",
      "三阶段循环框架与实证研究大体吻合。",
      "自我调节可教，显性策略教学有效。"
    ],
    disagreements: [
      { topic: "核心是可训练的策略还是底层认知能力", sides: [ { who: "zimmerman", view: "自我调节的核心是可教的策略、目标与动机调节系统" }, { who: "diamond", view: "自我调节的瓶颈在抑制与工作记忆等执行功能，训练策略收益有限" } ], stake: "干预应聚焦策略教学还是认知能力训练。" },
      { topic: "应以自陈还是行为数据测量", sides: [ { who: "zimmerman", view: "结构化的自陈量表能有效反映学习者的调节倾向" }, { who: "温内", view: "应以过程日志与在线行为痕迹追踪调节，自陈易受记忆与印象管理干扰" } ], stake: "自我调节研究应依赖何种证据来源。" }
    ],
    evidence: [
      { text: "Zimmerman, A social cognitive view of self-regulated academic learning (1989)", doi: null },
      { text: "Zimmerman, Attaining self-regulation: A social cognitive perspective (2000)", doi: null },
      { text: "Zimmerman & Martinez-Pons, Development of a structured interview for assessing student use of self-regulated learning strategies (1986)", doi: null }
    ],
    applications: [
      "教学生把长期目标拆成具体、可检查的短程目标。",
      "用学习日志与周计划支持自我监控。",
      "在课堂中示范自我检查与调整的过程。",
      "训练求助、时间管理与环境安排等资源管理策略。"
    ],
    terms: [
      { t: "预思", en: "Forethought", d: "学习前的目标设定与策略规划阶段。" },
      { t: "执行", en: "Performance", d: "学习中的自我监控与策略调整阶段。" },
      { t: "自我反思", en: "Self-Reflection", d: "学习后的归因与自我评价阶段。" },
      { t: "自我调节", en: "Self-Regulation", d: "主动调节认知、动机与行为以达成目标。" },
      { t: "循环模型", en: "Cyclical Model", d: "三阶段相互影响、反复循环的调节模型。" }
    ]
  },
  E090: {
    definition: "自我监控指学习者对自己的学习过程与结果进行观察、记录与评价；学习策略则包括复述、精细加工、组织、计划与监控等具体方法。齐默尔曼等强调策略需与任务情境匹配，并经训练才能迁移。",
    claims: [
      "学习策略可分为认知策略（复述、精细加工、组织）、元认知策略与资源管理策略。",
      "自我监控通过记录与对照目标提升策略使用与成绩。",
      "策略训练需包含条件知识，即何时、何地与为何使用，否则难以迁移。",
      "策略使用具有领域特异性，并随专长发展而变化。"
    ],
    agreements: [
      "精细加工与组织策略比简单复述更有效。",
      "策略的条件性知识是迁移的关键。",
      "自我监控记录能提升学习行为的自我意识。"
    ],
    disagreements: [
      { topic: "策略应独立设课还是嵌入学科", sides: [ { who: "zimmerman", view: "可先教授通用策略，再在各科中应用以促进迁移" }, { who: "普雷斯特利", view: "策略必须在丰富内容学习中教学，脱离内容的策略课难以迁移" } ], stake: "通用学习技能能否作为独立课程成立。" },
      { topic: "策略使用应以自陈还是行为测量", sides: [ { who: "zimmerman", view: "自陈量表能反映学习者的策略使用倾向与偏好" }, { who: "温内", view: "自陈受记忆与印象管理影响，应结合过程日志与行为痕迹" } ], stake: "策略研究与实践评估应依据何种证据。" }
    ],
    evidence: [
      { text: "Zimmerman & Martinez-Pons, Development of a structured interview for assessing student use of self-regulated learning strategies (1986)", doi: null },
      { text: "Pressley, Borkowski & Schneider, Cognitive strategies: Good strategy users coordinate metacognition and knowledge (1987)", doi: null },
      { text: "Dunlosky, Rawson, Marsh, Nathan & Willingham, Improving students' learning with effective learning techniques (2013)", doi: null }
    ],
    applications: [
      "教精细加工：提问、类比、用自己的话总结。",
      "用检查表帮助学生自我监控任务完成度。",
      "把策略教学嵌入具体学科任务，而非空泛讲方法。",
      "与学生讨论策略的适用条件与失效情形。"
    ],
    terms: [
      { t: "精细加工", en: "Elaboration", d: "把新信息与已有知识建立联系以加深理解。" },
      { t: "组织", en: "Organization", d: "把信息按层级或类别整理成结构。" },
      { t: "复述", en: "Rehearsal", d: "重复材料以维持或强化记忆。" },
      { t: "自我监控", en: "Self-Monitoring", d: "观察并记录自身学习过程与结果。" },
      { t: "条件性知识", en: "Conditional Knowledge", d: "关于何时何地使用某策略的知识。" }
    ]
  },
  E091: {
    definition: "学习风格假说主张个体有视觉型、听觉型或动觉型偏好，按偏好匹配教学可提升学习。帕什勒等 2008 年的综述指出，支持匹配效应的严格实验证据几乎不存在，相关研究多混淆了偏好与能力。",
    claims: [
      "学习者确有偏好，但偏好不等于更有效的学习方式。",
      "支持按风格匹配教学能提高成绩的严格实验证据极少。",
      "大量研究混淆了风格测量与能力测量，形成循环论证。",
      "以风格为依据的分组与教材开发缺乏证据支持。"
    ],
    agreements: [
      "目前没有可靠证据支持风格匹配教学能提升学习。",
      "学习者偏好确实存在，但偏好与学习效果基本无关。",
      "该迷思在教师教育中广泛流行，需要明确纠正。"
    ],
    disagreements: [
      { topic: "风格概念是否完全无价值", sides: [ { who: "pashler", view: "风格既无稳定测量也无匹配效应，应停止作为教学依据" }, { who: "kolb", view: "学习风格描述的是学习过程中的偏好倾向，对反思教学仍有启发价值" } ], stake: "风格应作为教学匹配依据被弃用，还是保留为描述性反思工具。" },
      { topic: "差异化教学是否滑向风格匹配", sides: [ { who: "pashler", view: "按偏好分组缺乏证据，容易浪费资源并固化标签" }, { who: "tomlinson", view: "差异化应依据准备度、兴趣与学习轮廓调整内容与过程，与风格匹配不同" } ], stake: "如何区分有证据的差异化与无证据的风格匹配。" }
    ],
    evidence: [
      { text: "Pashler, McDaniel, Rohrer & Bjork, Learning styles: Concepts and evidence (2008)", doi: null },
      { text: "Kirschner, Stop propagating the learning styles myth (2017)", doi: null },
      { text: "Newton & Salvi, How common is belief in the learning styles neuromyth? A systematic review (2020)", doi: null }
    ],
    applications: [
      "用多种表征呈现关键内容，而非按风格分组。",
      "依据先备知识与语言水平做差异化，而非偏好。",
      "把「视觉/听觉偏好」转换为任务与材料的适配问题。",
      "向家长与学生澄清学习风格迷思，减少无效投入。"
    ],
    terms: [
      { t: "学习风格", en: "Learning Styles", d: "按感知偏好划分学习者的分类主张。" },
      { t: "匹配效应", en: "Meshing Hypothesis", d: "教学方式与风格匹配可提升学习的假设。" },
      { t: "神经迷思", en: "Neuromyth", d: "以脑科学名义流传的错误教育观念。" },
      { t: "差异化教学", en: "Differentiated Instruction", d: "依准备度与兴趣调整内容与过程。" },
      { t: "多重表征", en: "Multiple Representation", d: "以多种形式呈现同一内容。" }
    ]
  },
  E092: {
    definition: "基 1994 年通过研究物理问题解决发现，成功学生常自发地对自己解释例题每一步的理由，而低成就学生较少如此。自我解释因此被视为一种有效的生成性学习策略，可外显并加以训练。",
    claims: [
      "自我解释要求学习者说明材料为何如此，从而促进深层理解。",
      "高质量自我解释包含原理引用、与已有知识连接与对困惑的监控。",
      "提示与训练可显著提高自我解释的频率与质量。",
      "自我解释对迁移的作用优于单纯复述。"
    ],
    agreements: [
      "自我解释与理解深度、迁移成绩正相关。",
      "提示性自我解释在多项实验中有效。",
      "与样例学习结合时效果尤其明显。"
    ],
    disagreements: [
      { topic: "对低先备知识者是否有效", sides: [ { who: "chi", view: "自我解释能促使所有学生从样例中抽取原理" }, { who: "伦克尔", view: "低先备者常生成错误解释，需先提供原理支架再要求解释" } ], stake: "生成性活动是否必须以足够的先备知识为前提。" },
      { topic: "生成性加工的成本是否超过收益", sides: [ { who: "chi", view: "解释带来的深层加工值得额外的认知投入" }, { who: "sweller", view: "对新手而言自我解释会占用有限工作记忆，可能损害学习" } ], stake: "何时应要求生成，何时应先降低负荷。" }
    ],
    evidence: [
      { text: "Chi, Bassok, Lewis, Reimann & Glaser, Self-explanations: How students study and use examples in learning to solve problems (1989)", doi: null },
      { text: "Chi, De Leeuw, Chiu & LaVancher, Eliciting self-explanations improves understanding (1994)", doi: null },
      { text: "Renkl, Learning from worked-out examples: A study on individual differences (1997)", doi: null }
    ],
    applications: [
      "讲例题时追问「为什么这一步成立」。",
      "提供提示卡，如「这与我已知的什么有关」。",
      "同伴互教时要求说出理由而非只报答案。",
      "把自我解释纳入作业与错题订正要求。"
    ],
    terms: [
      { t: "自我解释", en: "Self-Explanation", d: "对自己说明材料理由与依据的活动。" },
      { t: "生成性学习", en: "Generative Learning", d: "学习者主动建构意义而非接收信息。" },
      { t: "样例", en: "Worked Example", d: "含完整步骤与解答的示例问题。" },
      { t: "提示", en: "Prompting", d: "用问题引导学生产生特定认知活动。" },
      { t: "迁移", en: "Transfer", d: "把所学应用于新情境。" }
    ]
  },
  E093: {
    definition: "哈蒂与蒂姆珀利 2007 年的综述把反馈分为任务层、过程层、自我调节层与自我层四类，指出前三类对学习有效，而针对自我的表扬与批评效力最低。反馈的效力取决于它是否缩小了当前表现与目标之间的差距。",
    claims: [
      "反馈按聚焦层级分为任务、过程、自我调节与自我四类。",
      "任务层与过程层反馈最有效，自我层反馈效力最低。",
      "反馈效力取决于它是否提供了缩小差距的信息与下一步方向。",
      "反馈效果受学生先备知识、目标定向与课堂氛围调节。"
    ],
    agreements: [
      "反馈是影响学业成就的高效应因素之一。",
      "具体、及时、可操作的反馈优于笼统评价。",
      "表扬本身对学习的作用有限，且可能分散对任务的注意。"
    ],
    disagreements: [
      { topic: "反馈是否应被视为高效策略", sides: [ { who: "hattie", view: "反馈是效应量最高的教学影响因素之一，应优先投入" }, { who: "维斯涅夫斯基", view: "反馈平均效应中等，且高度依赖类型与情境，不宜笼统推崇" } ], stake: "反馈的效应应作总体估计还是分类型条件化估计。" },
      { topic: "自我层反馈是否完全无效", sides: [ { who: "hattie", view: "针对个人的表扬与批评对学习几乎无益，应尽量减少" }, { who: "deci_ryan", view: "信息性的认可可支持胜任感，只有控制性表扬才有害" } ], stake: "自我层反馈应被排除，还是需区分其信息性与控制性。" }
    ],
    evidence: [
      { text: "Hattie & Timperley, The power of feedback (2007)", doi: null },
      { text: "Kluger & DeNisi, The effects of feedback interventions on performance: A historical review, a meta-analysis, and a preliminary feedback intervention theory (1996)", doi: null },
      { text: "Wisniewski, Zierer & Hattie, The power of feedback revisited: A meta-analysis of educational feedback research (2020)", doi: null }
    ],
    applications: [
      "反馈指向任务标准与具体改进步骤。",
      "使用「做得好的地方—下一步做什么」的结构。",
      "减少空泛表扬，把注意力引向过程与策略。",
      "提供评分标准，让学生据此自我评估。"
    ],
    terms: [
      { t: "任务层反馈", en: "Task-Level Feedback", d: "针对答案正确性与任务要求的反馈。" },
      { t: "过程层反馈", en: "Process-Level Feedback", d: "针对解题思路与策略使用的反馈。" },
      { t: "自我调节反馈", en: "Feedback for Self-Regulation", d: "促进自我监控与调整的反馈。" },
      { t: "自我层反馈", en: "Self-Level Feedback", d: "针对个人特质或努力的表扬与批评。" },
      { t: "反馈差距", en: "Feedback Gap", d: "当前表现与目标之间的差距。" }
    ]
  },

  E094: {
    definition: "迈耶 2001 年提出多媒体学习认知理论，基于双通道、有限容量与主动加工三条假设，主张多媒体设计应减少外在加工、管理必要加工并促进生成性加工。由此推出一系列具体设计原则。",
    claims: [
      "人通过言语与视觉两条通道加工信息。",
      "每条通道的加工容量有限。",
      "有意义学习需要选择、组织与整合三类主动加工。",
      "减少无关信息、突出关键、讲解与图像同步可提升学习。",
      "冗余、分散注意与过度装饰会损害学习。"
    ],
    agreements: [
      "多媒体原则（图像配讲解优于纯文字）在多项实验中成立。",
      "通道原则与冗余原则获得较一致的证据支持。",
      "生成性加工，如自我解释与绘图，能促进理解。"
    ],
    disagreements: [
      { topic: "设计原则是否普遍适用", sides: [ { who: "mayer", view: "多媒体原则对多数学习者成立，可作为通用设计准则" }, { who: "sweller", view: "原则受专长调节，对高先备知识者图像与讲解可能构成冗余" } ], stake: "设计原则应作为普遍规范还是按专长水平条件化使用。" },
      { topic: "动画是否优于静态图", sides: [ { who: "mayer", view: "动画能直观呈现过程变化，配合讲解可提升理解" }, { who: "霍夫勒", view: "元分析显示动画总体优势很小，且可能因瞬时性增加负荷" } ], stake: "动态呈现的直观性与认知成本如何权衡。" }
    ],
    evidence: [
      { text: "Mayer, Multimedia Learning (2001)", doi: null },
      { text: "Mayer & Moreno, Nine ways to reduce cognitive load in multimedia learning (2003)", doi: null },
      { text: "Höffler & Leutner, Instructional animation versus static pictures: A meta-analysis (2007)", doi: null }
    ],
    applications: [
      "图与讲解同步呈现，避免图文分屏。",
      "删除与学习目标无关的装饰、背景音乐与动画。",
      "用分段与自定进度控制呈现节奏。",
      "用高亮、箭头等信号引导注意关键部分。"
    ],
    terms: [
      { t: "多媒体原则", en: "Multimedia Principle", d: "图像加讲解优于仅呈现文字。" },
      { t: "通道原则", en: "Modality Principle", d: "图像配语音讲解优于图像配文字。" },
      { t: "冗余原则", en: "Redundancy Principle", d: "重复呈现相同信息会增加负荷。" },
      { t: "信号原则", en: "Signaling Principle", d: "用线索突出关键信息有助于学习。" },
      { t: "生成性加工", en: "Generative Processing", d: "学习者主动组织与整合信息的加工。" }
    ]
  },
  E095: {
    definition: "显性教学指教师明确讲解概念、示范步骤并提供有指导的练习；直接教学强调小步呈现、高频提问、即时反馈与充分练习。大量证据表明，对新手与基础技能，其效应高于无指导的探究。",
    claims: [
      "新手缺乏先备知识，需要明确讲解与示范，而非自主发现。",
      "教学应小步推进、高频检查理解、即时纠错。",
      "有指导练习应逐步过渡到独立练习。",
      "显性教学不等于满堂灌，仍要求高参与度与持续反馈。"
    ],
    agreements: [
      "对新手与基础技能，有指导教学优于最小指导，证据较强。",
      "高频提问与检查理解能提升参与与成绩。",
      "显性阅读与数学教学对弱势学生尤其有效。"
    ],
    disagreements: [
      { topic: "直接教学还是发现学习", sides: [ { who: "rosenshine", view: "新手需要明确步骤与大量有指导练习，否则搜索会耗尽工作记忆" }, { who: "bruner", view: "通过发现掌握学科结构，才能形成可迁移的直觉与持久兴趣" } ], stake: "学习的深度与迁移究竟源于自主探究还是有效指导。" },
      { topic: "指导程度应如何随目标调整", sides: [ { who: "rosenshine", view: "先建立扎实的基础技能，再逐步增加开放性任务" }, { who: "希梅洛-西尔弗", view: "复杂问题与项目能同时培养知识、协作与自我导向能力" } ], stake: "基础技能与复杂能力应分阶段还是整合培养。" }
    ],
    evidence: [
      { text: "Rosenshine, Content, time, and direct instruction (1979)", doi: null },
      { text: "Rosenshine & Stevens, Teaching functions (1986)", doi: null },
      { text: "Kirschner, Sweller & Clark, Why minimal guidance during instruction does not work (2006)", doi: null }
    ],
    applications: [
      "新概念采用讲解、示范、引导练习、独立练习的序列。",
      "每五到十分钟插入一次检查理解的提问。",
      "对易错步骤作明确示范，并说明理由。",
      "为弱势学生提供结构化材料与更多引导练习。"
    ],
    terms: [
      { t: "显性教学", en: "Explicit Instruction", d: "明确讲解与示范目标技能的教学方式。" },
      { t: "直接教学", en: "Direct Instruction", d: "小步、高频反馈、教师主导的结构化教学。" },
      { t: "有指导练习", en: "Guided Practice", d: "在教师支持下的初步练习阶段。" },
      { t: "检查理解", en: "Checking for Understanding", d: "用提问或任务确认学生是否跟上。" },
      { t: "最小指导", en: "Minimal Guidance", d: "以学生自主探索为主、少有教师指导的方式。" }
    ]
  },
  E096: {
    definition: "佩维奥 1971 年提出双重编码理论，主张言语信息与视觉信息分别以言语码与意象码存储，二者相互关联。同时使用两种编码可形成两条提取路径，从而提高记忆与理解。",
    claims: [
      "言语与意象是两个独立但相互联系的编码系统。",
      "具体词比抽象词更易记忆，因为可同时进行意象编码。",
      "图像与言语结合可提升保持与提取。",
      "记忆术通过建立生动意象与结构线索增强编码。"
    ],
    agreements: [
      "具体性效应与图像优势效应被反复验证。",
      "图配文通常优于纯文字，与多媒体原则一致。",
      "记忆术对事实性材料的保持有效。"
    ],
    disagreements: [
      { topic: "是否存在两个独立编码系统", sides: [ { who: "paivio", view: "言语与意象是两套独立而互通的表征系统" }, { who: "anderson_j", view: "信息以统一命题表征，图像与言语差异是加工结果而非独立系统" } ], stake: "表征架构应设为双系统还是单一命题网络。" },
      { topic: "记忆术能否替代理解", sides: [ { who: "paivio", view: "双重编码为提取提供多重路径，是有效的学习工具" }, { who: "威林厄姆", view: "记忆术多提升事实记忆，对概念理解与迁移作用有限" } ], stake: "编码技巧与结构性理解之间应如何配比。" }
    ],
    evidence: [
      { text: "Paivio, Imagery and Verbal Processes (1971)", doi: null },
      { text: "Paivio, Mental Representations: A Dual Coding Approach (1986)", doi: null },
      { text: "Clark & Paivio, Dual coding theory and education (1991)", doi: null }
    ],
    applications: [
      "关键概念配示意图，并同步口头解释。",
      "教关键词记忆术帮助记住术语与序列。",
      "让学生把抽象关系画成图或示意图。",
      "用具体意象解释抽象概念，再回到抽象定义。"
    ],
    terms: [
      { t: "双重编码", en: "Dual Coding", d: "言语与意象两套系统同时参与加工。" },
      { t: "意象码", en: "Imaginal Code", d: "以视觉表象形式存储的信息表征。" },
      { t: "言语码", en: "Verbal Code", d: "以语言形式存储的信息表征。" },
      { t: "具体性效应", en: "Concreteness Effect", d: "具体词比抽象词更易记忆的现象。" },
      { t: "记忆术", en: "Mnemonic", d: "借助意象与结构线索增强记忆的技巧。" }
    ]
  },
  E097: {
    definition: "诺瓦克在 1984 年基于奥苏贝尔的有意义学习理论提出概念图，用节点表示概念、连线表示命题关系，并以层级结构外化知识组织。它既是学习工具，也是评价结构性理解的工具。",
    claims: [
      "概念图以命题形式外化概念间关系，促进有意义学习。",
      "层级结构反映认知结构中概念的上下位关系。",
      "交叉连接显示跨领域的整合理解。",
      "概念图可作为评价工具，反映理解的结构而非碎片知识。"
    ],
    agreements: [
      "概念图能提升结构性理解与保持，元分析支持中等效应。",
      "概念图的质量与学科理解水平相关。",
      "与自我解释、合作建构结合时效果更好。"
    ],
    disagreements: [
      { topic: "建图还是提取更有效", sides: [ { who: "novak", view: "绘制概念图能外化并重组知识结构，是有效的意义建构活动" }, { who: "roediger", view: "实验显示提取练习在理解测验上优于概念图学习" } ], stake: "结构化外化与主动提取，哪种加工更能带来长期理解。" },
      { topic: "概念图能否作为可靠评价", sides: [ { who: "novak", view: "命题数量、层级与交叉连接可客观反映理解质量" }, { who: "鲁伊斯—普里莫", view: "评分高度依赖评分规则与培训，信度不足会削弱其评价效力" } ], stake: "概念图是教学工具还是心理测量工具。" }
    ],
    evidence: [
      { text: "Novak & Gowin, Learning How to Learn (1984)", doi: null },
      { text: "Novak, Concept mapping: A useful tool for science education (1990)", doi: null },
      { text: "Karpicke & Blunt, Retrieval practice produces more learning than elaborative studying with concept mapping (2011)", doi: null }
    ],
    applications: [
      "单元结束时让学生独立绘制概念图并互相比较。",
      "用交叉连接的数量与质量评估整合程度。",
      "小组合作建图，迫使讨论概念关系。",
      "用学生概念图诊断迷思概念与缺失连接。"
    ],
    terms: [
      { t: "概念图", en: "Concept Map", d: "以节点与连线表示概念关系的图示。" },
      { t: "命题", en: "Proposition", d: "两个概念通过连接词构成的意义单元。" },
      { t: "交叉连接", en: "Cross-Link", d: "连接不同分支概念、体现整合的连线。" },
      { t: "层级结构", en: "Hierarchy", d: "按概括程度由上位到下位排列的结构。" },
      { t: "有意义学习", en: "Meaningful Learning", d: "新知识与已有观念建立实质联系。" }
    ]
  },
  E098: {
    definition: "智能导学系统通过学习者模型、领域模型与教学模型追踪学生状态并动态选择任务与提示。范莱恩 2011 年的元分析指出，其效果接近一对一人类辅导，但实现依赖高质量的领域建模与反馈设计。",
    claims: [
      "智能导学系统由领域模型、学习者模型与教学模型构成。",
      "通过逐步提示与错误诊断，系统可模拟一对一辅导的互动。",
      "效果取决于模型精度与提示设计，而非技术本身的新颖性。",
      "与人类辅导相比，系统在成本与可扩展性上具有优势。"
    ],
    agreements: [
      "智能导学系统对数学与物理等结构良好领域有稳定正效应。",
      "逐步提示优于直接给出答案。",
      "其效果通常低于高质量人类辅导，但高于常规课堂讲授。"
    ],
    disagreements: [
      { topic: "能否支持复杂迁移与开放任务", sides: [ { who: "vanlehn", view: "通过精细的步骤建模，系统可支持复杂问题解决技能" }, { who: "希梅洛-西尔弗", view: "结构化系统难以培养协作、论证与开放问题中的灵活能力" } ], stake: "技能分解建模能否覆盖复杂能力的目标。" },
      { topic: "课堂效应是否被高估", sides: [ { who: "vanlehn", view: "元分析显示系统接近人类辅导，效应稳定" }, { who: "斯蒂恩伯根-胡与库珀", view: "对照条件影响很大，真实课堂中的效应小于实验室估计" } ], stake: "实验室效应量能否代表日常教学中的收益。" }
    ],
    evidence: [
      { text: "VanLehn, The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems (2011)", doi: null },
      { text: "Koedinger & Corbett, Cognitive tutors: Technology bringing learning sciences to the classroom (2006)", doi: null },
      { text: "Steenbergen-Hu & Cooper, A meta-analysis of the effectiveness of intelligent tutoring systems on college students' academic learning (2013)", doi: null }
    ],
    applications: [
      "用智能系统承担分层练习与即时诊断，释放教师时间。",
      "把系统数据用于确定全班共性错误与后续讲解重点。",
      "监控提示使用频率，防止学生依赖提示刷题。",
      "在结构良好领域优先部署，开放任务仍以人和项目为主。"
    ],
    terms: [
      { t: "学习者模型", en: "Student Model", d: "系统对学习者知识状态的估计。" },
      { t: "领域模型", en: "Domain Model", d: "对学科知识与技能结构的形式化表示。" },
      { t: "教学模型", en: "Tutor Model", d: "决定何时提示、如何选择任务的策略模块。" },
      { t: "逐步提示", en: "Hint Sequence", d: "由弱到强、逐步指向答案的提示链。" },
      { t: "模型追踪", en: "Model Tracing", d: "沿专家规则路径比对并诊断学生步骤。" }
    ]
  },
  E099: {
    definition: "学习分析指采集、测量与分析学习过程数据，以理解并优化学习及其环境。西门斯 2011 年将其推向教育政策与实践议程，强调数据驱动的预测与干预，同时伴随隐私与指标异化风险。",
    claims: [
      "学习过程留下可采集的数字痕迹，可用于理解与预测学习。",
      "分析结果应转化为可行动的干预，而非仅生成报表。",
      "预警系统可识别高风险学生并触发支持。",
      "数据使用须处理隐私、知情同意与算法偏见问题。"
    ],
    agreements: [
      "学习行为数据与成绩存在可预测的关联。",
      "早期预警只有配合人工跟进才可能改善结果。",
      "隐私与伦理问题需要制度性保障，而非仅靠技术方案。"
    ],
    disagreements: [
      { topic: "学习分析服务于谁", sides: [ { who: "siemens", view: "数据应反馈给学习者与教师，支持自我调节与教学改进" }, { who: "塞尔温", view: "实践中学习分析常服务于管理监控与绩效问责，而非教学" } ], stake: "数据驱动应以赋权学习者还是强化行政控制为核心。" },
      { topic: "行为痕迹能否代表学习质量", sides: [ { who: "siemens", view: "点击流、停留时间等指标能有效预测学习结果" }, { who: "盖斯维克", view: "这些指标与深层学习关系薄弱，且可被策略性操纵" } ], stake: "可测量的行为是否等于有意义的学习。" }
    ],
    evidence: [
      { text: "Siemens & Long, Penetrating the fog: Analytics in learning and education (2011)", doi: null },
      { text: "Baker & Inventado, Educational data mining and learning analytics (2014)", doi: null },
      { text: "Selwyn, What's the problem with learning analytics? (2019)", doi: null }
    ],
    applications: [
      "用早期预警识别缺勤与低参与学生并安排跟进。",
      "把学习仪表盘开放给学生，支持自我监控。",
      "用定性数据与教师判断解读指标，避免数字替代理解。",
      "建立数据治理规范，明确采集范围与使用边界。"
    ],
    terms: [
      { t: "学习分析", en: "Learning Analytics", d: "采集与分析学习过程数据以改进学习。" },
      { t: "早期预警", en: "Early Warning", d: "依据数据识别高风险学生并及时干预。" },
      { t: "仪表盘", en: "Dashboard", d: "可视化呈现学习数据的界面。" },
      { t: "数据伦理", en: "Data Ethics", d: "数据采集中隐私、同意与公平的规范。" },
      { t: "行为痕迹", en: "Behavioral Trace", d: "学习平台中留下的可记录行为数据。" }
    ]
  },
  E100: {
    definition: "翻转课堂指把内容讲授移至课前，通常以视频形式，把课堂时间用于讨论、练习与问题解决。伯格曼与萨姆斯 2012 年的实践推广使其流行，其核心是课堂时间的重新分配而非技术本身。",
    claims: [
      "课前自学内容，课中用于互动、练习与问题解决。",
      "翻转的关键是课堂时间用途的改变，而非视频本身。",
      "课前学习需配套检查机制以保证准备度。",
      "教师角色从讲授者转为任务设计与引导者。"
    ],
    agreements: [
      "翻转课堂总体有小的正向效应，但研究间异质性大。",
      "效果依赖课前任务质量与课堂活动设计。",
      "学生的自我调节能力影响翻转课堂的成效。"
    ],
    disagreements: [
      { topic: "效应来自翻转形式还是主动学习", sides: [ { who: "bergmann", view: "把讲授移到课前，能让课堂专注于互动与个别指导" }, { who: "毕晓普与弗贝克", view: "多数研究把翻转与主动学习混在一起，难以分离出翻转本身的效应" } ], stake: "应把翻转视为独立方法还是一类主动学习安排。" },
      { topic: "是否加重资源不均", sides: [ { who: "bergmann", view: "视频可反复观看，反而帮助进度较慢的学生" }, { who: "赖希", view: "课前学习依赖设备、网络与家庭监督，可能扩大既有差距" } ], stake: "技术带来的灵活性是否抵消家庭资源差异。" }
    ],
    evidence: [
      { text: "Bergmann & Sams, Flip Your Classroom: Reach Every Student in Every Class Every Day (2012)", doi: null },
      { text: "Bishop & Verleger, The flipped classroom: A survey of the research (2013)", doi: null },
      { text: "van Alten, Phielix, Janssen & Kester, Effects of flipping the classroom on learning outcomes and satisfaction: A meta-analysis (2019)", doi: null }
    ],
    applications: [
      "课前短视频配三个检查问题，确保观看与理解。",
      "课堂以配对讨论、问题解决与教师巡回为主。",
      "为无设备学生提供离线材料或校内观看时间。",
      "教学生课前自学的计划与监控策略。"
    ],
    terms: [
      { t: "翻转课堂", en: "Flipped Classroom", d: "课前自学内容、课中互动应用的安排。" },
      { t: "课前学习", en: "Pre-Class Learning", d: "上课前完成的内容接触与初步理解。" },
      { t: "主动学习", en: "Active Learning", d: "要求学生参与思考与操作的教学方式。" },
      { t: "混合学习", en: "Blended Learning", d: "线上与面授结合的教学组织形态。" },
      { t: "课堂时间", en: "Classroom Time", d: "面授时段内可用于互动与指导的时间。" }
    ]
  },
  E101: {
    definition: "帕林斯卡与布朗 1984 年提出互惠教学，针对阅读理解困难学生，通过预测、提问、澄清、总结四种策略的轮流使用，把监控理解的责任逐步移交学生。教师先示范，再以对话方式与学生轮换主导。",
    claims: [
      "阅读理解困难常源于缺乏监控与策略，而非仅缺乏解码能力。",
      "预测、提问、澄清、总结四策略可在对话中协同训练。",
      "责任应逐步从教师移交给学生，形成互惠的对话结构。",
      "对话式互动本身是策略内化的中介。"
    ],
    agreements: [
      "互惠教学能显著提升阅读理解成绩，尤其对困难学生。",
      "策略示范与逐步移交是关键机制。",
      "同伴辅导对辅导者与被辅导者双方均有收益。"
    ],
    disagreements: [
      { topic: "是否必须使用这四种策略", sides: [ { who: "palincsar", view: "四策略组合覆盖了理解监控的核心环节，应完整实施" }, { who: "达菲", view: "其他策略组合也可能有效，关键是持续的自我监控而非固定四步" } ], stake: "效应来自特定策略组合还是一般的监控对话结构。" },
      { topic: "同伴辅导的效力来自何处", sides: [ { who: "palincsar", view: "关键在于策略对话与责任移交的质量" }, { who: "slavin", view: "关键在于小组互赖与个人责任的结构设计，而非特定策略" } ], stake: "同伴辅导应优先设计对话质量还是强化结构。" }
    ],
    evidence: [
      { text: "Palincsar & Brown, Reciprocal teaching of comprehension-fostering and comprehension-monitoring activities (1984)", doi: null },
      { text: "Rosenshine & Meister, Reciprocal teaching: A review of the research (1994)", doi: null },
      { text: "Slavin, Cooperative learning: Theory, research, and practice (1995)", doi: null }
    ],
    applications: [
      "阅读课小组轮流担任提问者、总结者与澄清者。",
      "教师先完整示范四种策略的思考过程。",
      "用角色提示卡支持轮换，降低组织成本。",
      "在学科教材阅读中复用该流程，而非只在语文课使用。"
    ],
    terms: [
      { t: "互惠教学", en: "Reciprocal Teaching", d: "师生轮流主导四策略对话的阅读教学。" },
      { t: "预测", en: "Predicting", d: "依据标题与线索预判内容。" },
      { t: "澄清", en: "Clarifying", d: "处理不熟悉的词句与理解障碍。" },
      { t: "总结", en: "Summarizing", d: "用简短语句概括段落要点。" },
      { t: "责任移交", en: "Transfer of Responsibility", d: "把主导权逐步交给学生。" }
    ]
  },
  E102: {
    definition: "范梅里恩伯尔 1997 年提出四成分教学设计模型（4C/ID），用于复杂技能与专业能力的整体任务学习。四个成分是学习任务、支持性信息、程序性信息与部分任务练习，强调从简化到复杂的整体任务序列。",
    claims: [
      "复杂学习应以整体任务为单位，而非先分解再拼装。",
      "学习任务应按从简到繁、从高支持到低支持的序列安排变式。",
      "支持性信息（原理与心智模型）与程序性信息（步骤规则）应分别设计并即时可用。",
      "部分任务练习仅用于自动化关键子技能。"
    ],
    agreements: [
      "整体任务序列有助于迁移与动机，优于纯部分任务训练。",
      "任务变式对图式建构与迁移十分重要。",
      "即时可用的信息支持优于前置大量灌输。"
    ],
    disagreements: [
      { topic: "整体任务还是层级分解", sides: [ { who: "van_merrienboer", view: "应从简化后的整体任务切入，成分在任务中获得意义" }, { who: "gagne", view: "应通过任务分析先掌握下位技能，再逐步组合成复杂能力" } ], stake: "复杂技能的学习序列应自上而下还是自下而上。" },
      { topic: "模型应追求完备还是简约", sides: [ { who: "van_merrienboer", view: "四成分与十步骤能系统处理复杂技能的各要素，值得投入" }, { who: "梅里尔", view: "五条首要教学原理已足以指导大多数设计，过度建模降低可用性" } ], stake: "教学设计模型应在理论上完备还是在实践中易用。" }
    ],
    evidence: [
      { text: "van Merriënboer, Training Complex Cognitive Skills (1997)", doi: null },
      { text: "van Merriënboer & Kirschner, Ten Steps to Complex Learning (2018)", doi: null },
      { text: "Merrill, First principles of instruction (2002)", doi: null }
    ],
    applications: [
      "用完整病例、完整项目或完整案例组织课程单元。",
      "提供即时信息表，在任务需要时查阅而非提前背诵。",
      "设计由简到繁、条件变化的任务变式序列。",
      "只对必须自动化的关键子技能安排专门重复练习。"
    ],
    terms: [
      { t: "整体任务", en: "Whole Task", d: "包含完整专业实践要素的任务单元。" },
      { t: "支持性信息", en: "Supportive Information", d: "解释原理与策略、支撑图式建构的信息。" },
      { t: "程序性信息", en: "Procedural Information", d: "完成任务所需的步骤与规则提示。" },
      { t: "部分任务练习", en: "Part-Task Practice", d: "针对关键子技能的专门重复练习。" },
      { t: "任务变式", en: "Task Variability", d: "在相似结构中变换条件以促进迁移。" }
    ]
  }
});
