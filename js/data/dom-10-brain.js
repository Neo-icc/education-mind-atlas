/* ============================================================
   脑科学与学习 · 详解条目（E396–E462）
   科学口径：每一节区分机制证据与教学推论，标注证据限度；
   凡属推论、类比或商业宣称，均在协议与应用中说明其不成立之处。
   ============================================================ */
window.ATLAS = window.ATLAS || {};

/* ── 花名册 ── */
ATLAS.roster = (ATLAS.roster || []).concat([
/* 可塑性与敏感期 */
["E396","经验期待与经验依赖可塑性","Experience-Expectant and Experience-Dependent Plasticity","brain","neuro-plasticity","greenough",1987,"mechanism","物种典型经验在窗口内塑造回路，个体特异经验则终身改变连接。"],
["E397","关键期的分子开关","Molecular Brakes on Critical Periods","brain","neuro-plasticity","hentsch",2005,"mechanism","GABA 抑制成熟启动窗口，周神经元网与髓鞘信号等「刹车」使其关闭。"],
["E398","双眼竞争与视觉皮层可塑性","Binocular Rivalry and Visual Cortex Plasticity","brain","neuro-plasticity","hubel_wiesel",1965,"mechanism","两眼输入竞争决定视皮层眼优势，早期异常经验改变皮层接线。"],
["E399","音乐训练与脑结构","Music Training and Brain Structure","brain","neuro-plasticity","schlaug",2005,"mechanism","长期音乐训练与胼胝体、听皮层和运动区结构差异相关，因果方向仍待检验。"],
["E400","第二语言学习的脑可塑性","Brain Plasticity in Second Language Learning","brain","neuro-plasticity","newport",2001,"mechanism","第二语言的句法与神经表征随起始年龄变化，词汇学习窗口则宽得多。"],
["E401","睡眠与突触稳态假说","Synaptic Homeostasis Hypothesis","brain","neuro-plasticity","tononi",2014,"mechanism","觉醒时突触广泛增强，慢波睡眠选择性下调，以恢复信噪比与能量。"],
["E402","小脑与程序性学习","Cerebellum and Procedural Learning","brain","neuro-plasticity","doyon",2005,"mechanism","小脑支持运动序列的获得与计时，自动化后部分功能转向纹状体回路。"],
["E403","镜像神经元与观察学习","Mirror Neurons and Observational Learning","brain","neuro-plasticity","rizzolatti",1996,"mechanism","执行与观察同一动作共享神经元反应，为示范学习提供机制线索。"],
["E404","神经调质与学习状态","Neuromodulators and Learning States","brain","neuro-plasticity","schultz",2016,"mechanism","多巴胺编码奖赏预测误差，其他调质调节唤醒、探索与可塑性门控。"],
["E405","脑网络与功能连接","Brain Networks and Functional Connectivity","brain","neuro-plasticity","raichle",2001,"mechanism","脑以多个大尺度网络组织活动，静息态功能连接刻画网络间的协同与分离。"],
/* 记忆与睡眠 */
["E406","工作记忆的神经基础","Neural Basis of Working Memory","brain","memory-sleep","baddeley",2012,"mechanism","前额—顶叶网络支持有限容量的维持与操作，内容表征分布于感觉皮层。"],
["E407","情景记忆的构建性","Constructive Episodic Memory","brain","memory-sleep","schacter",2007,"mechanism","情景记忆是依线索的重建，与未来情景模拟共享海马—默认网络。"],
["E408","睡眠纺锤与记忆巩固","Sleep Spindles and Consolidation","brain","memory-sleep","rasch_born",2013,"mechanism","睡眠纺锤与慢波耦合，协调海马到皮层的信息转移与记忆巩固。"],
["E409","慢波睡眠的脑电特征","Slow-Wave Sleep EEG","brain","memory-sleep","tononi",2006,"mechanism","0.5–4 Hz 高幅慢波反映皮层同步化，其强度受睡眠压力与学习调节。"],
["E410","睡眠与程序性技能","Sleep and Procedural Skill","brain","memory-sleep","walker_m",2003,"mechanism","睡眠后运动序列表现常有提升，阶段特异性证据则弱于最初报告。"],
["E411","昼夜节律与学业时序","Circadian Rhythm and Academic Timing","brain","memory-sleep","roenneberg",2007,"mechanism","青春期昼夜相位后移，早课时间与生理节律错配造成慢性睡眠不足。"],
["E412","午睡与记忆","Napping and Memory","brain","memory-sleep","mednick",2003,"mechanism","短时午睡恢复警觉，含慢波或 REM 的午睡可促进特定材料的巩固。"],
["E413","记忆抑制与主动遗忘","Memory Suppression and Motivated Forgetting","brain","memory-sleep","anderson_m",2001,"mechanism","前额叶可主动抑制不想要的记忆，抑制伴随海马再激活下降。"],
["E414","误信息效应与记忆扭曲","Misinformation Effect","brain","memory-sleep","loftus",1974,"mechanism","事后暗示与提问措辞可改变记忆报告，显示提取过程的重建性。"],
["E415","闪光灯记忆的准确性","Accuracy of Flashbulb Memories","brain","memory-sleep","wixted",2018,"mechanism","重大事件的记忆生动而自信，但准确性随时间下降，信心与准确脱钩。"],
/* 注意与执行 */
["E416","选择性注意的早期与晚期选择","Early vs Late Selection","brain","attention-exec","broadbent",1958,"mechanism","注意瓶颈发生在知觉前还是语义后，取决于任务与负载条件。"],
["E417","注意的负载理论","Load Theory of Attention","brain","attention-exec","lavie",1995,"mechanism","知觉负载高时无关刺激被过滤，负载低时干扰物被加工到语义水平。"],
["E418","执行功能与学业成就","Executive Function and Achievement","brain","attention-exec","diamond",2007,"mechanism","抑制、刷新与转换预测学业成就，且可通过课程与游戏干预改善。"],
["E419","抑制控制的发展曲线","Developmental Trajectory of Inhibition","brain","attention-exec","casey",2011,"mechanism","抑制控制持续发展到成年，在情绪与奖赏情境下青少年表现明显下降。"],
["E420","认知灵活性与任务切换","Cognitive Flexibility and Switching","brain","attention-exec","miyake",2000,"mechanism","任务切换有稳定代价，反映规则重构与旧任务集的惯性。"],
["E421","注意缺陷的异质性","Heterogeneity of Attention Deficits","brain","attention-exec","sonuga_barke",2003,"mechanism","ADHD 存在执行缺陷与延迟厌恶等多条通路，单一解释覆盖不足。"],
["E422","正念训练的注意效应","Mindfulness and Attention","brain","attention-exec","tang",2007,"mechanism","短期正念练习可改善注意与压力指标，效应小到中等且方法学异质。"],
["E423","数字媒体使用与注意","Digital Media Use and Attention","brain","attention-exec","przybylski",2019,"mechanism","屏幕使用与注意问题的相关很小，内容、情境与替代活动比时长更关键。"],
["E424","走神的神经关联","Neural Correlates of Mind Wandering","brain","attention-exec","christoff",2016,"mechanism","走神涉及默认网络与额顶控制的耦合，可分自发与故意两类。"],
["E425","认知负荷的神经影像证据","Neuroimaging Evidence for Cognitive Load","brain","attention-exec","sweller",2011,"mechanism","高负荷增加前额活动与瞳孔直径，但影像对负荷类型的区分仍有限。"],
/* 情绪与应激 */
["E426","情绪的分类与维度模型","Categorical vs Dimensional Models of Emotion","brain","emotion-brain","barrett",2017,"theory","基本情绪论主张离散类别，建构论主张情绪由核心情感与概念即时组装。"],
["E427","应激与表现的倒 U 形","Yerkes-Dodson Law","brain","emotion-brain","yerkes",1908,"mechanism","中等唤醒常最优，任务越复杂最优点越低，倒 U 只是启发式概括。"],
["E428","杏仁核与前额叶的发育时序","Developmental Timing of Amygdala and PFC","brain","emotion-brain","giedd",2010,"mechanism","杏仁核较早成熟而前额控制回路较晚，时序差与青少年情绪反应相关。"],
["E429","社会排斥的神经反应","Neural Response to Social Exclusion","brain","emotion-brain","eisenberger",2003,"mechanism","社会排斥激活背侧前扣带与前脑岛，与疼痛的情感成分部分重叠。"],
["E430","奖赏系统的发育","Development of Reward Circuitry","brain","emotion-brain","galvan",2006,"mechanism","青春期纹状体对奖赏的反应增强，而前额控制网络尚未成熟。"],
["E431","催产素与社会认知","Oxytocin and Social Cognition","brain","emotion-brain","feldman",2012,"mechanism","催产素调节社会线索的显著性，行为效应依赖情境且可重复性受质疑。"],
["E432","情绪传染与共情","Emotional Contagion and Empathy","brain","emotion-brain","singer",2004,"mechanism","观察他人痛苦激活部分自身疼痛网络，共情含情感共享与认知采择。"],
["E433","压力与海马体积","Stress and Hippocampal Volume","brain","emotion-brain","lupien",2009,"mechanism","慢性应激与海马体积减小相关，人类证据多为相关且效应量有限。"],
["E434","情绪调节的神经训练","Neural Training of Emotion Regulation","brain","emotion-brain","davidson",2012,"mechanism","重评与正念训练改变前额—杏仁核耦合，短期效应有限且个体差异大。"],
["E435","学校氛围与应激生理","School Climate and Stress Physiology","brain","emotion-brain","shonkoff",2016,"mechanism","不可控的长期压力改变应激系统，支持性关系与可预测环境可缓冲。"],
/* 语言与阅读 */
["E436","语音范畴知觉","Phonetic Category Perception","brain","language-brain","kuhl",2004,"mechanism","婴儿从普遍区分转向母语范畴化，社会互动是窄化的关键条件。"],
["E437","词汇学习的脑机制","Neural Basis of Word Learning","brain","language-brain","hickok",2012,"mechanism","词汇依赖腹侧语义通路与背侧听—运动通路，新词编码需要海马参与。"],
["E438","句法加工的脑区","Brain Regions for Syntax","brain","language-brain","friederici",2011,"mechanism","左额下回与颞上区构成句法网络，负责层次结构与短语组合。"],
["E439","阅读通路的发育","Development of Reading Pathways","brain","language-brain","dehaene",2015,"mechanism","阅读复用视觉、语音与语义网络，视觉词形区由识字经验重塑而成。"],
["E440","阅读障碍的早期预测","Early Prediction of Dyslexia","brain","language-brain","gabrieli",2011,"mechanism","语音意识与快速命名可预测阅读困难，神经影像的个体预测力仍有限。"],
["E441","双语控制的神经机制","Neural Mechanisms of Bilingual Control","brain","language-brain","bialystok",2017,"mechanism","管理两种语言依赖抑制与切换网络，双语的行为优势证据并不一致。"],
["E442","手语加工的半球组织","Hemispheric Organization for Sign Language","brain","language-brain","bellugi",1990,"mechanism","手语与口语共享左半球语言区，语言组织由功能而非感觉通道决定。"],
["E443","语言与音乐的共享加工","Shared Processing of Language and Music","brain","language-brain","patel",2008,"mechanism","语言与音乐共享听觉与节奏资源，句法加工既有重叠也有分离。"],
["E444","语言关键期的神经证据","Neural Evidence for Language Critical Periods","brain","language-brain","newport",2002,"mechanism","句法习得效率随年龄下降并有相应神经差异，词汇学习窗口更宽。"],
/* 数感与数学 */
["E445","数量表征的顶内沟","Intraparietal Sulcus and Numerosity","brain","math-brain","dehaene",2003,"mechanism","顶内沟对数量有选择性反应，近似表征遵循韦伯比例并映射到符号数字。"],
["E446","数感训练与迁移","Numerosity Training and Transfer","brain","math-brain","butterworth",2011,"mechanism","数量比较训练可提升数感，向符号算术的迁移有限但可能存在小效应。"],
["E447","数学事实的提取网络","Arithmetic Fact Retrieval Network","brain","math-brain","geary",2011,"mechanism","算术事实提取依赖左角回与语言网络，程序性计算依赖顶内—额叶回路。"],
["E448","数学焦虑的生理指标","Physiological Markers of Math Anxiety","brain","math-brain","lyons",2012,"mechanism","数学焦虑伴随杏仁核激活与皮质醇升高，占用工作记忆并形成循环。"],
["E449","计算障碍的亚型","Subtypes of Dyscalculia","brain","math-brain","butterworth",2019,"mechanism","计算障碍包含核心数量缺陷、程序性缺陷与事实提取缺陷等异质亚型。"],
["E450","空间训练与数学迁移","Spatial Training and Math Transfer","brain","math-brain","uttal",2013,"mechanism","空间能力可训练，但向数学成就的迁移证据弱且依赖测量匹配。"],
["E451","符号数学的脑可塑性","Brain Plasticity for Symbolic Math","brain","math-brain","ansari",2008,"mechanism","符号数学的文化经验重塑顶内沟与角回的数量—符号映射。"],
["E452","早期数量经验的具身基础","Embodied Foundations of Number","brain","math-brain","feigenson",2011,"mechanism","婴儿依靠近似数量与物体追踪两套核心系统，感官与动作经验提供起点。"],
["E453","代数学习的认知负荷","Cognitive Load in Algebra Learning","brain","math-brain","sweller",2016,"mechanism","代数符号与规则抬高工作记忆负荷，样例与分段可降低搜索式加工。"],
/* 神经迷思与转化边界 */
["E454","学习风格迷思的流行率","Prevalence of the Learning Styles Myth","brain","neuromyth","dekker",2012,"critique","大量教师相信应按视觉或听觉风格施教，而匹配假说缺乏实证支持。"],
["E455","左右脑迷思的教育传播","Educational Spread of Left-Brain Myths","brain","neuromyth","howard_jones",2014,"critique","裂脑研究的分工发现被夸大为「左脑人/右脑人」，并进入商业课程。"],
["E456","关键期迷思与早教市场","Critical Period Myths and Early Education Markets","brain","neuromyth","bruer",1999,"critique","「三岁定终身」把突触生成数据误读为硬截止，推高早教焦虑与支出。"],
["E457","脑训练产业与证据标准","Brain Training Industry and Evidence Standards","brain","neuromyth","owen",2015,"critique","商业脑训练多只提升训练任务，远迁移缺乏活性对照与独立重复。"],
["E458","神经科学在教育中的误用","Misapplication of Neuroscience in Education","brain","neuromyth","bowers",2016,"critique","以脑图与神经术语直接支撑教学法，常跳过认知与课堂层面的检验。"],
["E459","教育神经科学的伦理边界","Ethical Boundaries of Educational Neuroscience","brain","neuromyth","goswami",2019,"critique","脑数据采集、神经标签与商业化带来隐私、污名与决定论风险。"],
["E460","神经证据的宣传与家长焦虑","Neuroscience Marketing and Parent Anxiety","brain","neuromyth","bruer",2002,"critique","神经科学被简化为营销话术，利用家长对「窗口关闭」的恐惧。"],
["E461","神经多样性与诊断标签","Neurodiversity and Diagnostic Labels","brain","neuromyth","baron_cohen",2017,"critique","诊断标签既打开支持通道，也可能把差异固化为缺陷与低期待。"],
["E462","从机制到教学处方的推理链","From Mechanism to Instructional Prescription","brain","neuromyth","bowers",2016,"critique","从突触机制到课堂方法需经多层中介，反向推理尤其容易出错。"],
]);

/* ── 详解 ── */
ATLAS.details = Object.assign(ATLAS.details || {}, {

E396: {
  definition: "经验期待可塑性指物种在进化中「预期」会遇到的典型经验（如光、语音、社会互动）在敏感期内塑造神经回路；经验依赖可塑性则指个体独特经验在任何年龄持续改变连接。格里诺（William Greenough）等 1987 年以这两类过程区分了「所有个体都会经历的塑造」与「个体特有的塑造」。",
  claims: ["经验期待过程依赖物种典型经验与特定时间窗", "早期突触过度生成后按经验修剪是其主要实现方式", "经验依赖过程贯穿一生并具个体特异性", "两类过程共享突触生成、增强与修剪的基本机制", "环境丰富化主要作用于经验依赖过程"],
  agreements: ["早期感觉与社会经验对回路形成不可替代", "可塑性不随发育结束而终止", "经验类型决定被塑造的通路"],
  disagreements: [
    { topic: "二分是否成立", sides: [{ who: "greenough", view: "两类过程在时间窗与经验类型上可清晰区分" }, { who: "hentsch", view: "分子层面是同一套可塑性机器受不同时间门控，二分是描述性而非机制性" }], stake: "该分类能否用于预测具体干预的效果" },
    { topic: "丰富化环境的教育含义", sides: [{ who: "greenough", view: "复杂环境促进突触生成与学习" }, { who: "bruer", view: "动物丰富化结果不能直接推出早教课程或商业产品" }], stake: "动物实验到课堂的推论是否成立" }
  ],
  evidence: [{ text: "Greenough、Black 与 Wallace（1987）经验与脑发育", doi: null }, { text: "Hubel 与 Wiesel（1970）单眼剥夺与视皮层改变", doi: null }],
  applications: ["优先保障语言、视觉与社交互动等物种典型经验的质量", "把额外刺激视为个体化补充，而非「越多越好」的竞赛", "对错过早期窗口的儿童仍提供系统、密集的干预"],
  terms: [{ t: "经验期待可塑性", en: "experience-expectant plasticity", d: "依赖物种典型经验与时间窗的塑造" }, { t: "经验依赖可塑性", en: "experience-dependent plasticity", d: "按个体独特经验持续调整连接" }, { t: "突触过度生成", en: "synaptic overproduction", d: "发育早期突触数量超过成人" }, { t: "环境丰富化", en: "environmental enrichment", d: "提供更复杂刺激与活动的生活条件" }]
},
E397: {
  definition: "关键期的开启与关闭受分子层面调控。亨施（Takao Hensch）等的研究显示，视皮层关键期由 GABA 能抑制（尤其小清蛋白中间神经元）成熟触发，而周神经元网、髓鞘相关抑制分子与表观遗传「刹车」共同使窗口关闭。",
  claims: ["兴奋—抑制平衡成熟是窗口开启的触发条件", "周神经元网与髓鞘相关信号构成「分子刹车」", "降解周神经元网可在成年动物恢复部分可塑性", "该机制在视觉、听觉等系统中具有保守成分"],
  agreements: ["GABA 能抑制成熟与窗口开启相关", "周神经元网参与窗口关闭", "成年可塑性可被实验手段部分重新开启"],
  disagreements: [
    { topic: "动物模型向人类的可外推程度", sides: [{ who: "hentsch", view: "分子机制清晰，可作为理解人类窗口的基础" }, { who: "goswami", view: "机制证据尚不足以支撑任何人类教育或临床干预方案" }], stake: "机制清晰是否等于干预可行" },
    { topic: "重新开启可塑性的代价", sides: [{ who: "hentsch", view: "恢复可塑性可能帮助修复受损回路" }, { who: "bowers", view: "重新打开窗口也可能破坏已稳定的功能，收益与风险需严格评估" }], stake: "是否应把「重开窗口」作为治疗目标" }
  ],
  evidence: [{ text: "Hensch 等（1998）GAD65 敲除小鼠关键期不开启", doi: null }, { text: "Pizzorusso 等（2002）降解软骨素酶恢复成年鼠视皮层可塑性", doi: null }],
  applications: ["不据此推荐任何「重开关键期」疗法或课程", "支持在敏感期内提供高质量的感觉与语言经验", "把分子证据限定在机制解释层面，不直接转为教学处方"],
  terms: [{ t: "兴奋—抑制平衡", en: "E/I balance", d: "兴奋与抑制输入的相对强度" }, { t: "小清蛋白中间神经元", en: "parvalbumin interneuron", d: "调控网络同步与窗口开启的抑制性细胞" }, { t: "周神经元网", en: "perineuronal nets", d: "包裹神经元胞体的细胞外基质结构" }, { t: "分子刹车", en: "molecular brakes", d: "限制结构可塑性的分子机制" }]
},
E398: {
  definition: "休伯尔与威塞尔（David Hubel 与 Torsten Wiesel）在 1960 年代发现，初级视皮层神经元具有眼优势，且早期单眼剥夺或人工斜视会重塑眼优势柱。双眼竞争指两眼接收冲突图像时知觉的交替，被用来研究皮层如何解决双眼输入之间的竞争。",
  claims: ["视皮层神经元对一眼输入的反应通常强于另一眼", "早期异常双眼经验改变眼优势分布", "立体视觉依赖生命早期的协调双眼输入", "冲突双眼输入的知觉交替反映皮层层面的竞争"],
  agreements: ["视觉经验塑造眼优势与立体视", "立体视存在发育敏感期", "弱视需要早期筛查与干预"],
  disagreements: [
    { topic: "双眼竞争的神经部位", sides: [{ who: "洛戈塞蒂斯（Logothetis）", view: "竞争主要发生在较高阶视觉区，V1 反应与知觉脱钩" }, { who: "布莱克（Blake）", view: "V1 参与竞争的形成，早期成分不可忽略" }], stake: "意识知觉的竞争在哪个层级被解决" },
    { topic: "剥夺效应的可逆性", sides: [{ who: "hubel_wiesel", view: "窗口内数日剥夺即可造成持久改变" }, { who: "bowers", view: "剥夺时长、物种与后续经验共同决定恢复程度，不能简化为不可逆" }], stake: "临床遮盖治疗应持续多久" }
  ],
  evidence: [{ text: "Hubel 与 Wiesel（1965）人工斜视猫的双眼交互", doi: null }, { text: "Hubel 与 Wiesel（1970）单眼剥夺与眼优势柱", doi: null }],
  applications: ["支持儿童视力、斜视与屈光参差的早期筛查", "不把实验室剥夺范式直接类比为日常屏幕使用", "不据此设计「眼罩训练」类课程"],
  terms: [{ t: "眼优势柱", en: "ocular dominance column", d: "视皮层中按输入眼分化的柱状结构" }, { t: "单眼剥夺", en: "monocular deprivation", d: "遮闭一眼以研究经验依赖可塑性" }, { t: "双眼竞争", en: "binocular rivalry", d: "两眼冲突输入引起的知觉交替" }, { t: "立体视觉", en: "stereopsis", d: "由双眼视差产生深度知觉" }]
},
E399: {
  definition: "音乐训练与脑结构研究比较音乐家与非音乐家，发现胼胝体、听皮层、运动皮层与小脑存在灰质或白质差异，且差异幅度与开始年龄和累计练习量相关。施劳格（Gottfried Schlaug）等提出，早期高强度训练可能与结构分化有关。",
  claims: ["音乐家在多处感觉运动通路存在结构差异", "差异与开始训练的年龄和练习量相关", "听觉—运动耦合是音乐训练的核心", "儿童短期训练引起的结构变化较小且不一致"],
  agreements: ["长期训练与脑结构差异相关", "早期开始与差异幅度相关", "音乐训练提升听觉与运动技能"],
  disagreements: [
    { topic: "因果方向", sides: [{ who: "schlaug", view: "训练导致结构与功能的适应性改变" }, { who: "谢伦伯格（Schellenberg）", view: "预存差异可能导致选择与坚持，随机研究中的效应远小于横断比较" }], stake: "相关差异能否归因于训练" },
    { topic: "结构证据的教学含义", sides: [{ who: "schlaug", view: "结构可塑性可作为音乐教育价值的支持" }, { who: "bowers", view: "脑结构差异不提供任何可操作的教学处方" }], stake: "音乐课应否以脑证据争取课时" }
  ],
  evidence: [{ text: "Schlaug 等（1995）音乐家胼胝体前部增大", doi: null }, { text: "Hyde 等（2009）儿童音乐训练与脑结构变化的纵向研究", doi: null }],
  applications: ["以音乐教育自身的审美与文化价值为理由，而非学业提分", "保证练习量与反馈质量，而非只增加课时", "警惕「莫扎特效应」式宣称"],
  terms: [{ t: "胼胝体", en: "corpus callosum", d: "连接两半球的巨大白质束" }, { t: "灰质体积", en: "gray matter volume", d: "神经元胞体与突触的体积累积" }, { t: "听觉—运动耦合", en: "auditory-motor coupling", d: "声音与动作表征的协同" }, { t: "选择效应", en: "selection effect", d: "预存差异导致的分组不随机" }]
},
E400: {
  definition: "第二语言学习的脑可塑性研究考察起始年龄、熟练度与神经表征的关系。纽波特（Elissa Newport）等提出，句法习得的效率随起始年龄下降，而词汇学习受年龄限制小得多，晚学者更多依赖显性记忆与额叶控制。",
  claims: ["第二语言句法习得效率随起始年龄下降", "晚学者的语法加工更依赖显性记忆系统", "词汇学习窗口远宽于句法", "熟练度与神经反应模式密切相关"],
  agreements: ["早期暴露在语音与句法上具优势", "熟练度影响神经表征", "成人仍能达到高水平，只是路径不同"],
  disagreements: [
    { topic: "成熟限制与经验解释", sides: [{ who: "newport", view: "存在成熟层面的习得限制，起始年龄本身起作用" }, { who: "bialystok", view: "输入量、动机、教学质量与身份认同可解释大部分年龄差异" }], stake: "年龄效应是生物窗口还是经验累积" },
    { topic: "神经差异的教学含义", sides: [{ who: "newport", view: "晚学者的神经模式不同，需要不同的教学路径" }, { who: "hickok", view: "熟练度与策略差异即可解释多数神经差异" }], stake: "成人课程应否模拟儿童式自然习得" }
  ],
  evidence: [{ text: "Johnson 与 Newport（1989）第二语言习得的成熟限制", doi: null }, { text: "Newport 等（2001）第二语言学习的脑可塑性", doi: null }],
  applications: ["早期提供高质量语音输入与互动", "成人学习使用显性规则、大量可理解输入与高频使用", "不以关键期为由劝阻成人学习第二语言"],
  terms: [{ t: "起始年龄效应", en: "age of acquisition effect", d: "开始学习年龄对最终水平的影响" }, { t: "显性记忆", en: "declarative memory", d: "可有意识提取的事实与规则记忆" }, { t: "程序性记忆", en: "procedural memory", d: "技能与序列的内隐记忆" }, { t: "可理解输入", en: "comprehensible input", d: "略高于当前水平的语言材料" }]
},
E401: {
  definition: "突触稳态假说（SHY）由托诺尼（Giulio Tononi）与奇雷利（Chiara Cirelli）提出：觉醒期学习使大量突触净增强，慢波睡眠则按强度选择性下调突触，以恢复信噪比、节省能量并为新学习腾出空间。",
  claims: ["觉醒期突触总体净增强", "慢波睡眠伴随突触下调的分子与电生理证据", "下调是选择性的，强连接相对保留", "睡眠不足使突触持续饱和并损害后续学习"],
  agreements: ["睡眠对可塑性必要", "慢波睡眠与突触重整相关", "睡眠不足损害学习与保持"],
  disagreements: [
    { topic: "下调是否普遍", sides: [{ who: "tononi", view: "睡眠对突触进行广泛而选择性的下调" }, { who: "rasch_born", view: "睡眠同时主动巩固重要连接，下调与巩固不是同一过程" }], stake: "睡眠是「重置」还是「筛选并保存」" },
    { topic: "人类直接证据", sides: [{ who: "tononi", view: "动物与分子证据足以支持假说" }, { who: "wixted", view: "人类活体突触测量困难，行为层面的推论需谨慎" }], stake: "假说的可检验性" }
  ],
  evidence: [{ text: "Tononi 与 Cirelli（2014）睡眠与突触稳态", doi: null }, { text: "Vyazovskiy 等（2008）睡眠与皮层突触反应", doi: null }],
  applications: ["把睡眠视为学习流程的一部分而非对立面", "不轻信「睡眠中学习」类设备", "在高强度学习期保证睡眠时长与规律"],
  terms: [{ t: "突触稳态", en: "synaptic homeostasis", d: "突触强度在睡眠中回到基线" }, { t: "慢波睡眠", en: "slow-wave sleep", d: "以低频高幅脑电为特征的深睡" }, { t: "信噪比", en: "signal-to-noise ratio", d: "有效信号与背景噪声之比" }, { t: "突触下调", en: "synaptic downscaling", d: "睡眠中突触效能的整体减弱" }]
},
E402: {
  definition: "小脑与程序性学习研究显示，小脑参与运动序列的获得、计时与错误校正。多永（Julien Doyon）等提出，新技能早期依赖小脑—皮层回路，随练习巩固部分功能转向纹状体—皮层回路，形成更自动化的表征。",
  claims: ["小脑参与运动序列学习与计时", "早期学习依赖小脑—皮层回路", "巩固后部分功能转向纹状体回路", "小脑损伤损害序列与时序学习"],
  agreements: ["小脑在运动学习中关键", "自动化伴随网络重组", "反馈与重复促进巩固"],
  disagreements: [
    { topic: "阶段转移的稳健性", sides: [{ who: "doyon", view: "存在可重复的小脑到纹状体阶段转移" }, { who: "bowers", view: "转移依赖任务与时间尺度，并非普遍规律" }], stake: "能否按阶段设计不同的练习方式" },
    { topic: "小脑的认知角色", sides: [{ who: "doyon", view: "小脑参与部分认知与语言加工" }, { who: "hickok", view: "认知贡献被过度延伸，多数证据仍限于运动与时序" }], stake: "小脑是否应被纳入认知教学模型" }
  ],
  evidence: [{ text: "Doyon 与 Benali（2005）运动技能学习的脑重组", doi: null }, { text: "Doyon 等（2002）小脑与纹状体在技能学习中的阶段分工", doi: null }],
  applications: ["技能分解与足量重复，配合及时反馈", "把复杂程序拆成可练习的单元并在间隔中巩固", "不把「小脑训练」当作学业干预"],
  terms: [{ t: "程序性学习", en: "procedural learning", d: "技能与序列的内隐习得" }, { t: "运动序列", en: "motor sequence", d: "按顺序执行的动作链" }, { t: "纹状体", en: "striatum", d: "参与奖赏与习惯形成的皮层下结构" }, { t: "错误校正", en: "error correction", d: "依据反馈调整运动指令" }]
},
E403: {
  definition: "镜像神经元由里佐拉蒂（Giacomo Rizzolatti）团队在猕猴前运动皮层 F5 区发现：这些神经元在猴子自己执行某动作与观察他人执行同一动作时都放电。该发现被用来讨论动作理解、模仿与共情，但解释范围仍有争议。",
  claims: ["存在执行与观察双激活的神经元", "镜像反应依赖个体的动作库与经验", "人类存在类似的观察—运动激活", "镜像机制不足以单独解释语言与共情"],
  agreements: ["观察动作会激活观察者的运动系统", "经验调节镜像反应强度", "镜像系统为示范学习提供启发"],
  disagreements: [
    { topic: "镜像神经元的解释力", sides: [{ who: "rizzolatti", view: "镜像机制构成动作理解与社会认知的基础" }, { who: "hickok", view: "证据不足以支撑语言与共情的宏大解释，存在多重概念混淆" }], stake: "一个细胞层面的现象能承载多少层级的解释" },
    { topic: "人类镜像系统的证据", sides: [{ who: "rizzolatti", view: "人类存在与猕猴同源的镜像系统" }, { who: "hickok", view: "人类证据多为间接，脑区激活不等于镜像神经元" }], stake: "示范教学能否援引镜像神经元作为依据" }
  ],
  evidence: [{ text: "Rizzolatti 等（1996）猕猴前运动皮层镜像神经元", doi: null }, { text: "Hickok（2009）镜像神经元的八个问题", doi: null }],
  applications: ["示范与动作分解有行为证据支持，可继续使用", "不声称某种课程或教具「激活镜像神经元」", "把观察、模仿与刻意练习结合，而非只靠观看"],
  terms: [{ t: "镜像神经元", en: "mirror neuron", d: "执行与观察同一动作时均放电的神经元" }, { t: "前运动皮层", en: "premotor cortex", d: "计划与准备动作的皮层区域" }, { t: "动作理解", en: "action understanding", d: "识别他人动作目标与意图" }, { t: "共情", en: "empathy", d: "共享他人情绪并理解其立场" }]
},
E404: {
  definition: "神经调质系统（多巴胺、乙酰胆碱、去甲肾上腺素、血清素）通过改变信噪比、可塑性与探索策略调节学习状态。舒尔茨（Wolfram Schultz）等记录到中脑多巴胺神经元编码奖赏预测误差，即结果优于预期的程度。",
  claims: ["多巴胺神经元编码奖赏预测误差", "调质系统调节可塑性与探索—利用权衡", "乙酰胆碱与去甲肾上腺素影响注意与编码", "调质状态异常与多种精神障碍相关"],
  agreements: ["多巴胺预测误差证据充分", "调质影响学习速率与记忆", "唤醒与注意状态影响编码"],
  disagreements: [
    { topic: "多巴胺编码奖赏还是动机显著性", sides: [{ who: "schultz", view: "多巴胺信号的核心是奖赏预测误差" }, { who: "berridge", view: "喜欢与想要分离，多巴胺更贴近动机显著性而非快感本身" }], stake: "奖励设计应针对预测误差还是动机唤起" },
    { topic: "机制证据的可用性", sides: [{ who: "schultz", view: "预测误差机制可直接指导反馈与激励设计" }, { who: "bowers", view: "从神经元放电到课堂奖励之间缺少中介证据" }], stake: "能否以神经调质为依据设计积分制度" }
  ],
  evidence: [{ text: "Schultz 等（1997）多巴胺神经元的奖赏预测误差", doi: null }, { text: "Schultz（2016）多巴胺奖赏预测误差编码", doi: null }],
  applications: ["提供明确、及时、信息性的反馈而非泛泛表扬", "用适度不确定性维持探索与好奇", "避免用外部奖励挤压内在动机"],
  terms: [{ t: "奖赏预测误差", en: "reward prediction error", d: "结果与预期之间的差值" }, { t: "多巴胺", en: "dopamine", d: "参与奖赏学习与动机的神经调质" }, { t: "神经调质", en: "neuromodulator", d: "调节神经元群体反应方式的化学信号" }, { t: "探索—利用权衡", en: "explore-exploit tradeoff", d: "尝试新选项与沿用已知最优的取舍" }]
},
E405: {
  definition: "脑网络研究把脑视为多个大尺度系统的集合。赖克尔（Marcus Raichle）等 2001 年描述了默认模式网络：在外部任务需求低时活动增强、任务时下调。功能连接通过静息态血氧信号的时间相关刻画网络间的协同。",
  claims: ["脑在无外部任务时仍有组织化活动", "大尺度网络（默认、显著、中央执行）可重复识别", "网络指标与认知表现存在相关", "网络连接可受经验与训练影响"],
  agreements: ["大尺度网络组织是稳健发现", "默认网络参与自我相关加工", "网络方法受扫描方案与样本量影响"],
  disagreements: [
    { topic: "个体层面预测的效度", sides: [{ who: "raichle", view: "网络指标具有解释与预测价值" }, { who: "马雷克（Marek）", view: "小样本的脑—行为关联效应严重膨胀，个体预测尚不可靠" }], stake: "能否用脑网络指标评价单个学生" },
    { topic: "网络指标的稳定性", sides: [{ who: "raichle", view: "大尺度网络在个体内可稳定重复" }, { who: "bowers", view: "重测信度与情境依赖限制了教育应用" }], stake: "静息态测量能否进入学校评估" }
  ],
  evidence: [{ text: "Raichle 等（2001）默认模式网络", doi: null }, { text: "Marek 等（2022）脑宽关联的样本量问题", doi: null }],
  applications: ["不把静息态或功能连接指标用于学生诊断与分流", "理解复杂学习需要多个网络协同而非单一脑区", "谨慎解读「师生脑同步」类研究"],
  terms: [{ t: "默认模式网络", en: "default mode network", d: "静息时活跃的自我相关网络" }, { t: "功能连接", en: "functional connectivity", d: "脑区活动时间序列的相关性" }, { t: "静息态", en: "resting state", d: "无明确任务时的自发脑活动" }, { t: "大尺度网络", en: "large-scale network", d: "跨多个脑区的协同系统" }]
},
E406: {
  definition: "工作记忆的神经基础研究关注有限容量信息如何在秒级内被维持与操作。巴德利（Alan Baddeley）的多成分模型区分语音环路、视空间画板、中央执行与情景缓冲；影像研究显示前额—顶叶网络参与控制，具体内容表征分布在相应感觉皮层。",
  claims: ["工作记忆容量有限，约四个组块", "前额—顶叶网络支持控制与维持", "内容表征分布于感觉皮层而非仅前额", "各成分具有可分离的神经基础"],
  agreements: ["前额顶网络参与工作记忆", "容量有限是稳定现象", "训练提升任务表现但迁移有限"],
  disagreements: [
    { topic: "维持机制", sides: [{ who: "baddeley", view: "持续放电与注意聚焦是维持的核心" }, { who: "康斯坦丁尼迪斯（Constantinidis）", view: "活动沉默期间的突触短时程可塑性也可维持信息" }], stake: "工作记忆是「亮着的」还是「静默存储的」" },
    { topic: "槽位与资源模型", sides: [{ who: "福格尔（Vogel）", view: "容量由离散槽位决定，约三到四个" }, { who: "马（Ma）", view: "资源是连续分配的，精度随负荷平滑下降" }], stake: "容量限制的性质" }
  ],
  evidence: [{ text: "Baddeley（2012）工作记忆：理论与争议", doi: null }, { text: "Owen 等（2005）n-back 任务的前额顶激活元分析", doi: null }],
  applications: ["减少与目标无关的负荷，把中间结果外部化", "用组块与复述策略扩展有效容量", "为工作记忆较弱的学生提供步骤清单与视觉提示"],
  terms: [{ t: "语音环路", en: "phonological loop", d: "短时保持言语信息的成分" }, { t: "中央执行", en: "central executive", d: "分配注意与控制加工的成分" }, { t: "组块", en: "chunk", d: "把多个项目整合为一个单元" }, { t: "持续放电", en: "persistent firing", d: "延迟期维持信息的神经活动" }]
},
E407: {
  definition: "情景记忆的构建性观点认为，提取不是回放录像，而是依线索与图式重建过去。沙克特（Daniel Schacter）与阿迪斯（Donna Addis）2007 年提出，情景记忆与未来情景模拟共享海马—内侧前额—顶下网络，构建性既带来灵活性也带来系统性错误。",
  claims: ["提取是重建而非读取", "情景记忆与未来想象共享核心网络", "构建性导致来源混淆与误信息易感", "海马参与场景构建而非仅存储"],
  agreements: ["记忆不是精确复制", "海马参与未来情景模拟", "构建性可解释部分记忆扭曲"],
  disagreements: [
    { topic: "记忆与想象是否同一系统", sides: [{ who: "schacter", view: "两者共享核心网络，差异在于输入来源" }, { who: "哈萨比斯（Hassabis）", view: "想象还依赖额外的语义与认知控制成分，不能简化为同一过程" }], stake: "构建性框架的解释边界" },
    { topic: "构建性的可操纵程度", sides: [{ who: "schacter", view: "构建性是适应性的代价，可用来源监控部分减弱" }, { who: "loftus", view: "记忆极易被制度性暗示操纵，需外部程序保障" }], stake: "访谈与取证程序应如何设计" }
  ],
  evidence: [{ text: "Schacter 与 Addis（2007）记忆的构建性模拟", doi: null }, { text: "Loftus 与 Palmer（1974）误信息效应", doi: null }],
  applications: ["用生成、复述与重构任务促进理解而非只做再认", "教学强调信息来源与证据核查", "评价中不把生动回忆直接当作准确证据"],
  terms: [{ t: "构建性记忆", en: "constructive memory", d: "依线索与图式重建过去" }, { t: "情景模拟", en: "episodic simulation", d: "构建未来或假想场景" }, { t: "海马", en: "hippocampus", d: "形成情景与空间表征的关键结构" }, { t: "来源监控", en: "source monitoring", d: "判断信息来自何处" }]
},
E408: {
  definition: "睡眠纺锤是 NREM 第 2 期出现的 11–16 Hz 短促波，与慢波存在相位耦合。拉施与博恩（Björn Rasch 与 Jan Born）2013 年的综述指出，纺锤—慢波耦合协调海马到皮层的信息转移，纺锤密度与学习后的记忆巩固相关。",
  claims: ["纺锤密度与学习后巩固相关", "纺锤与慢波的耦合协调信息转移", "纺锤活动可预测次日保持", "纺锤特征随年龄与个体差异变化"],
  agreements: ["纺锤参与陈述性记忆巩固", "NREM 早期对巩固重要", "睡眠不足削弱巩固"],
  disagreements: [
    { topic: "因果性", sides: [{ who: "rasch_born", view: "纺锤活动位于巩固的因果链上" }, { who: "wixted", view: "多数证据为相关，纺锤增强干预的结果并不一致" }], stake: "能否以增强纺锤作为干预目标" },
    { topic: "阶段与纺锤的稳定性", sides: [{ who: "rasch_born", view: "纺锤与巩固的关系在多项研究中重复" }, { who: "潘（Pan）", view: "元分析显示阶段与纺锤效应不稳定，效应量偏小" }], stake: "是否值得开发纺锤增强设备" }
  ],
  evidence: [{ text: "Rasch 与 Born（2013）睡眠中的记忆巩固", doi: null }, { text: "Mednick 等（2003）午睡与知觉学习", doi: null }],
  applications: ["保证 NREM 睡眠不被打断，尤其是学习后的夜间睡眠", "避免用熬夜换取复习时间", "不宣称可通过设备「训练纺锤」提升记忆"],
  terms: [{ t: "睡眠纺锤", en: "sleep spindle", d: "NREM 第 2 期的 11–16 Hz 短促波" }, { t: "慢波", en: "slow wave", d: "深睡中的低频高幅脑电" }, { t: "海马—皮层对话", en: "hippocampal-cortical dialogue", d: "睡眠中两系统的信息交换" }, { t: "NREM", en: "non-REM sleep", d: "非快速眼动睡眠" }]
},
E409: {
  definition: "慢波睡眠以 0.5–4 Hz 的高幅脑电为特征，反映皮层神经元在同步化的去极化与超极化状态间交替。托诺尼等 2006 年的研究显示，慢波活动的强度受先前觉醒时长与学习经历调节，是睡眠压力的主要电生理指标。",
  claims: ["慢波反映皮层网络的同步化", "慢波强度随睡眠压力增加", "学习经历可局部提高慢波活动", "儿童慢波睡眠占比高于成人"],
  agreements: ["慢波是深睡的可靠标志", "睡眠压力调节慢波", "慢波与陈述性巩固相关"],
  disagreements: [
    { topic: "慢波的功能", sides: [{ who: "tononi", view: "慢波主要服务于突触下调与稳态恢复" }, { who: "rasch_born", view: "慢波主动驱动系统巩固与记忆重放" }], stake: "慢波是「清理」还是「归档」" },
    { topic: "慢波与主观恢复", sides: [{ who: "tononi", view: "慢波强度是睡眠恢复的核心指标" }, { who: "roenneberg", view: "节律相位与总睡眠时长同样决定主观恢复" }], stake: "能否用深睡时长评价睡眠质量" }
  ],
  evidence: [{ text: "Tononi 等（2006）睡眠与突触稳态", doi: null }, { text: "Huber 等（2004）局部脑区慢波与学习", doi: null }],
  applications: ["保证睡眠时长与规律，而非依赖补充剂", "学校层面评估青少年上课时间", "不把深睡简化为可购买的产品或穿戴设备指标"],
  terms: [{ t: "慢波睡眠", en: "slow-wave sleep", d: "以低频高幅脑电为特征的深睡" }, { t: "同步化", en: "synchronization", d: "大量神经元同时活动的状态" }, { t: "睡眠压力", en: "sleep pressure", d: "觉醒累积的睡眠需求" }, { t: "局部睡眠", en: "local sleep", d: "特定皮层区域的睡眠样活动" }]
},
E410: {
  definition: "睡眠与程序性技能研究考察运动序列、知觉辨别等任务在睡眠前后的变化。沃克（Matthew Walker）等 2003 年报告，过夜睡眠后运动序列表现提升，且提升与第 2 期睡眠特征相关；后续元分析显示效应存在但小于最初报告。",
  claims: ["睡眠后运动序列表现常有提升", "增益与 NREM 睡眠特征相关", "睡眠剥夺损害程序性巩固", "白天短睡也可产生部分增益"],
  agreements: ["睡眠促进程序性巩固", "NREM 睡眠参与其中", "练习后睡眠有益"],
  disagreements: [
    { topic: "阶段特异性", sides: [{ who: "walker_m", view: "不同睡眠阶段服务不同记忆类型" }, { who: "潘（Pan）", view: "睡眠增益稳健，但阶段特异性证据弱于最初报告" }], stake: "是否需要针对阶段安排训练" },
    { topic: "增益的年龄差异", sides: [{ who: "walker_m", view: "成人也能获得明显的睡眠依赖增益" }, { who: "rasch_born", view: "儿童与青少年的增益更大，成人效应较小" }], stake: "成人技能培训是否需睡眠干预" }
  ],
  evidence: [{ text: "Walker 等（2003）睡眠阶段与运动序列巩固", doi: null }, { text: "Pan 与 Rickard（2015）睡眠与程序性记忆元分析", doi: null }],
  applications: ["技能练习后保证睡眠，尤其避免连续熬夜", "用分散练习安排技能课，让巩固发生在间隔中", "不采用「睡中学习」类装置作为教学方案"],
  terms: [{ t: "程序性记忆", en: "procedural memory", d: "技能与动作序列的内隐记忆" }, { t: "运动序列", en: "motor sequence", d: "按顺序执行的动作链" }, { t: "睡眠增益", en: "overnight gain", d: "睡眠后任务表现的提升" }, { t: "阶段特异性", en: "stage specificity", d: "效应依赖特定睡眠阶段" }]
},
E411: {
  definition: "昼夜节律研究显示，青春期褪黑素分泌相位后移，使青少年自然入睡与起床时间推迟。伦内伯格（Till Roenneberg）等用大规模调查刻画了这种「社会时差」：学校早课时间与生理节律错配，造成慢性睡眠不足。",
  claims: ["青少年昼夜相位在青春期后移", "早课时间与相位错配导致睡眠债", "推迟上课时间可增加睡眠并改善出勤", "晨型—夜型差异存在稳定的个体差异"],
  agreements: ["青少年相位后移有生物学基础", "早课导致睡眠不足", "推迟上课对睡眠有益"],
  disagreements: [
    { topic: "学业成绩的效应大小", sides: [{ who: "roenneberg", view: "睡眠改善应转化为学习与健康收益" }, { who: "hattie", view: "成绩效应较小且高度依赖实施条件，不宜作为唯一理由" }], stake: "政策应以健康还是成绩为主要论据" },
    { topic: "推迟上课的实施成本", sides: [{ who: "roenneberg", view: "健康收益足以抵消作息调整的成本" }, { who: "hattie", view: "涉及交通、家庭与课外安排，成本分配需实证评估" }], stake: "学校是否应整体推迟早晨上课" }
  ],
  evidence: [{ text: "Roenneberg 等（2007）社会时差", doi: null }, { text: "Carskadon 等（1998）青少年睡眠相位延迟", doi: null }],
  applications: ["学校层面评估推迟早晨上课时间", "把高难度任务安排在学生个人警觉时段", "不把晚睡简单归因于自律或态度"],
  terms: [{ t: "昼夜节律", en: "circadian rhythm", d: "约 24 小时的内源生理周期" }, { t: "相位延迟", en: "phase delay", d: "生物钟时点整体后移" }, { t: "社会时差", en: "social jetlag", d: "社会日程与生物钟的错配" }, { t: "睡眠类型", en: "chronotype", d: "晨型或夜型的个体倾向" }]
},
E412: {
  definition: "午睡研究考察短时睡眠对警觉与记忆的作用。梅德尼克（Sara Mednick）等 2003 年发现，在纹理辨别的知觉学习任务中，60–90 分钟午睡后的表现提升与整夜睡眠相当；短至 20 分钟的午睡主要恢复警觉。",
  claims: ["短时午睡可恢复警觉与情绪", "含慢波或 REM 的午睡促进特定材料的巩固", "效益取决于时长与发生时刻", "过长或过晚的午睡引起睡眠惯性并干扰夜间睡眠"],
  agreements: ["午睡改善警觉", "部分记忆类型可从午睡获益", "时长与时机是关键变量"],
  disagreements: [
    { topic: "对学业成绩的长期效应", sides: [{ who: "mednick", view: "午睡增益可累积为学习收益" }, { who: "hattie", view: "课堂午睡挤占教学时间，长期成绩证据不足" }], stake: "学校是否应把午睡纳入正式课表" },
    { topic: "午睡与夜间睡眠的权衡", sides: [{ who: "mednick", view: "短时午睡不损害夜间睡眠且提升警觉" }, { who: "walker_m", view: "过晚或过长的午睡会削弱夜间睡眠与巩固" }], stake: "学校午休应安排多长、安排在何时" }
  ],
  evidence: [{ text: "Mednick 等（2003）午睡与知觉学习", doi: null }, { text: "Mednick 等（2002）午睡与警觉恢复", doi: null }],
  applications: ["安排 20 分钟左右的小睡以恢复警觉", "避免下午过晚午睡，以免干扰夜间睡眠", "为睡眠不足的学生提供安静休息空间"],
  terms: [{ t: "午睡", en: "nap", d: "日间的短时睡眠" }, { t: "睡眠惯性", en: "sleep inertia", d: "醒后短时的迟钝状态" }, { t: "知觉学习", en: "perceptual learning", d: "反复练习提升知觉辨别" }, { t: "慢波", en: "slow wave", d: "深睡中的低频高幅脑电" }]
},
E413: {
  definition: "记忆抑制研究考察人能否主动把不想要的记忆排除出意识。安德森（Michael Anderson）与格林（Collin Green）2001 年用「想/不想」范式发现，反复抑制某线索会降低该记忆的可及性，并伴随前额叶控制增强与海马活动下降。",
  claims: ["主动抑制可导致后续遗忘", "抑制依赖前额叶控制机制", "抑制降低海马再激活", "抑制能力与情绪障碍中的回避相关"],
  agreements: ["主动遗忘是真实现象", "前额叶参与抑制", "抑制有代价，也可能出现反弹"],
  disagreements: [
    { topic: "抑制削弱痕迹还是阻断提取", sides: [{ who: "anderson_m", view: "抑制降低记忆本身的可及性" }, { who: "wixted", view: "主要是提取路径被阻断，痕迹仍可能保留" }], stake: "抑制能否作为长期消除记忆的手段" },
    { topic: "抑制策略的临床化", sides: [{ who: "anderson_m", view: "抑制机制可用于治疗性干预" }, { who: "goswami", view: "临床转化证据不足，课堂推广可能强化回避" }], stake: "是否应在课堂教学生「压制想法」" }
  ],
  evidence: [{ text: "Anderson 与 Green（2001）抑制不想要的记忆", doi: null }, { text: "Anderson 等（2004）记忆抑制中的前额叶与海马", doi: null }],
  applications: ["用替代性正确概念纠正错误，而非只叮嘱「不要想」", "帮学生识别回避的短期收益与长期代价", "对创伤相关的抑制转介专业支持，不在课堂处理"],
  terms: [{ t: "记忆抑制", en: "memory suppression", d: "主动降低不想要的记忆的可及性" }, { t: "想/不想范式", en: "think/no-think paradigm", d: "按线索抑制或提取记忆的实验" }, { t: "前额叶控制", en: "prefrontal control", d: "自上而下的调节与抑制" }, { t: "回避", en: "avoidance", d: "以减少不适为目标的行为策略" }]
},
E414: {
  definition: "误信息效应指事后接触的错误信息会改变人们对事件的记忆报告。洛夫特斯（Elizabeth Loftus）与帕尔默（John Palmer）1974 年发现，提问中动词的强度（撞碎 vs 碰到）既影响速度估计，也影响随后是否「记得」碎玻璃。",
  claims: ["事后信息可改变记忆报告", "提问措辞影响目击者证词", "记忆提取是重建性的，易受暗示", "儿童与高暗示性个体更易受影响"],
  agreements: ["误信息效应可重复", "措辞与暗示影响报告", "目击者证词需谨慎采用"],
  disagreements: [
    { topic: "是记忆改变还是反应偏差", sides: [{ who: "loftus", view: "错误信息改变了记忆表征本身" }, { who: "wixted", view: "部分效应来自报告策略与实验需求特征，痕迹未必改变" }], stake: "误信息效应能否直接外推到真实证词" },
    { topic: "实验室效应的外推", sides: [{ who: "loftus", view: "效应稳健，适用于真实访谈与取证" }, { who: "wixted", view: "实验室需求特征放大了效应，现场研究结论更混杂" }], stake: "学生申诉与访谈程序应如何设计" }
  ],
  evidence: [{ text: "Loftus 与 Palmer（1974）重建车祸记忆", doi: null }, { text: "Loftus 与 Pickrell（1995）植入错误记忆", doi: null }],
  applications: ["访谈与提问使用中性、开放、非诱导的语言", "评价与反馈中避免预设答案或反复暗示", "教学生做来源核查与证据对照"],
  terms: [{ t: "误信息效应", en: "misinformation effect", d: "事后错误信息改变记忆报告" }, { t: "暗示性", en: "suggestibility", d: "易受外部暗示影响的程度" }, { t: "来源混淆", en: "source confusion", d: "把不同来源的信息混为一体" }, { t: "目击者证词", en: "eyewitness testimony", d: "目击者对事件的回忆陈述" }]
},
E415: {
  definition: "闪光灯记忆指人们对重大公共事件的记忆，主观上生动、详细且高度自信。威克斯特德（John Wixted）等 2018 年重新分析发现，这类记忆的遗忘速率与普通自传体记忆相近，自信的下降远慢于准确性，二者逐渐脱钩。",
  claims: ["闪光灯记忆的主观生动性高于日常记忆", "其准确性随时间下降，速率与日常记忆相近", "信心与准确性分离", "重复提取提高信心但不提高准确"],
  agreements: ["生动不等于准确", "信心不能作为准确性指标", "情绪唤醒提高主观确信"],
  disagreements: [
    { topic: "是否存在特殊机制", sides: [{ who: "wixted", view: "可用普通记忆机制解释闪光灯记忆" }, { who: "布朗与库利克（Brown & Kulik）", view: "存在特殊的编码与巩固机制，使这类记忆更持久" }], stake: "是否需要为情绪性公共事件设立独立记忆模型" },
    { topic: "生动性与准确性的关系", sides: [{ who: "wixted", view: "生动与信心均不能预测准确" }, { who: "布朗与库利克（Brown & Kulik）", view: "重大事件的核心细节仍具较高准确性" }], stake: "重大事件的证词能否采信" }
  ],
  evidence: [{ text: "Talarico 与 Rubin（2003）闪光灯记忆的准确性", doi: null }, { text: "Wixted 等（2018）闪光灯记忆的遗忘", doi: null }],
  applications: ["不把「我记得很清楚」当作可靠证据", "重大事件后及时做结构化记录", "教学中训练来源监控与交叉验证"],
  terms: [{ t: "闪光灯记忆", en: "flashbulb memory", d: "对重大事件的生动记忆" }, { t: "信心—准确分离", en: "confidence-accuracy dissociation", d: "确信度高但准确度低" }, { t: "自传体记忆", en: "autobiographical memory", d: "关于自身经历的记忆" }, { t: "来源监控", en: "source monitoring", d: "判断信息来自何处" }]
},
E416: {
  definition: "选择性注意研究追问：无关信息在加工的哪个阶段被过滤。布罗德本特（Donald Broadbent）1958 年提出早期选择模型，认为过滤发生在语义分析之前；多伊奇夫妇 1963 年主张晚期选择，认为所有输入都获得语义加工，选择发生在反应之前。",
  claims: ["注意容量有限，必须进行选择", "早期选择依据物理特征过滤输入", "部分语义加工可在未注意通道发生", "选择阶段随任务与负载变化"],
  agreements: ["注意存在瓶颈", "存在早期感觉过滤成分", "语义加工可部分自动化"],
  disagreements: [
    { topic: "选择的位置", sides: [{ who: "broadbent", view: "过滤发生在知觉与语义分析之前" }, { who: "多伊奇（Deutsch）", view: "所有输入都获得语义加工，选择发生在反应阶段" }], stake: "未被注意的信息能被理解到多深" },
    { topic: "注意捕获的自动性", sides: [{ who: "broadbent", view: "物理特征过滤是自动且被动的" }, { who: "lavie", view: "捕获取决于显著性与当前负载，并非固定阶段" }], stake: "课堂干扰物应如何管理" }
  ],
  evidence: [{ text: "Broadbent（1958）知觉与通讯", doi: null }, { text: "Cherry（1953）鸡尾酒会效应", doi: null }],
  applications: ["减少课堂中无关的听觉与视觉干扰", "用学生姓名与熟悉语义提高注意捕获", "不把「能听见」等同于「在加工与学习」"],
  terms: [{ t: "早期选择", en: "early selection", d: "在语义分析前过滤无关输入" }, { t: "晚期选择", en: "late selection", d: "在语义加工后选择反应" }, { t: "鸡尾酒会效应", en: "cocktail party effect", d: "能从无关通道中捕捉自己的名字" }, { t: "过滤器", en: "filter", d: "限制进入更高层加工的信息量" }]
},
E417: {
  definition: "注意负载理论由拉维（Nilli Lavie）1995 年提出，用以调和早期与晚期选择之争：当知觉负载高、加工资源被耗尽时，无关刺激在早期被过滤；负载低时，剩余资源使干扰物获得语义加工。",
  claims: ["选择阶段由知觉负载决定", "高负载减少干扰效应", "低负载下分心物被深度加工", "认知控制负载也调节干扰"],
  agreements: ["负载调节分心程度", "与有限资源模型相容", "对课堂分心管理有直接含义"],
  disagreements: [
    { topic: "负载的操作化", sides: [{ who: "lavie", view: "知觉负载可通过任务参数精确控制" }, { who: "pashler", view: "不同任务的负载难以等量比较，跨研究结论受操作定义影响" }], stake: "负载理论的实验检验是否公平" },
    { topic: "高负载的教学价值", sides: [{ who: "lavie", view: "提高相关负载可减少无关分心" }, { who: "sweller", view: "高负荷本身会挤占图式建构的资源" }], stake: "课堂应提高还是降低任务负载" }
  ],
  evidence: [{ text: "Lavie（1995）知觉负载与选择性注意", doi: null }, { text: "Lavie 等（2004）负载与干扰加工的 fMRI 研究", doi: null }],
  applications: ["提高任务相关性负载以减少无关分心", "避免同时呈现过多无关信息", "给提前完成的学生准备延伸任务，而非让其空转"],
  terms: [{ t: "知觉负载", en: "perceptual load", d: "当前任务占用的知觉加工资源" }, { t: "认知控制负载", en: "cognitive control load", d: "任务对执行控制资源的需求" }, { t: "分心", en: "distraction", d: "无关刺激对目标加工的干扰" }, { t: "资源", en: "resources", d: "有限的加工能力" }]
},
E418: {
  definition: "执行功能与学业成就研究显示，抑制、工作记忆刷新与认知转换能预测数学与读写成绩，且预测力不完全由智力解释。戴蒙德（Adele Diamond）等 2007 年的随机对照研究显示，融入日常活动的课程可改善学前儿童的执行功能。",
  claims: ["执行功能预测学业成就", "预测力部分独立于智力", "执行功能可通过课程与游戏改善", "社会经济逆境与执行功能发展相关"],
  agreements: ["执行功能与学业相关", "早期干预可改善执行功能", "嵌入日常活动优于孤立训练"],
  disagreements: [
    { topic: "训练迁移的范围", sides: [{ who: "diamond", view: "综合课程可产生较广泛的认知与行为效益" }, { who: "owen", view: "多数效应为近迁移，远迁移证据薄弱" }], stake: "是否值得为执行功能单独设课" },
    { topic: "训练与资源公平", sides: [{ who: "diamond", view: "游戏化课程对低资源儿童收益最大" }, { who: "hattie", view: "效应量有限，同等资源投向教学质量可能更有效" }], stake: "有限预算应投向专门课程还是日常教学" }
  ],
  evidence: [{ text: "Diamond 等（2007）学前课程改善认知控制", doi: null }, { text: "Blair 与 Razza（2007）执行功能与学业准备", doi: null }],
  applications: ["把计划、轮流、规则切换嵌入日常教学", "用规则游戏与身体活动支持执行功能", "不依赖单独的「训练营」替代课程改进"],
  terms: [{ t: "执行功能", en: "executive function", d: "抑制、刷新与转换等高阶控制" }, { t: "抑制控制", en: "inhibitory control", d: "压制自动化或优势反应" }, { t: "认知控制", en: "cognitive control", d: "目标导向行为的调控能力" }, { t: "近迁移", en: "near transfer", d: "迁移到高度相似的任务" }]
},
E419: {
  definition: "抑制控制的发展呈长期上升曲线，但并非匀速。凯西（B. J. Casey）等的研究显示，青少年在冷静、无情绪的情境下抑制能力接近成人，而在奖赏与同伴情境中表现明显下降，反映前额—皮层下回路的成熟不同步。",
  claims: ["抑制控制从儿童期持续发展到成年", "青少年在热执行情境下表现更差", "发展呈非线性且情境依赖", "个体差异相对稳定"],
  agreements: ["抑制控制发展期延长", "情境与动机调节表现", "与前额网络成熟相关"],
  disagreements: [
    { topic: "是能力缺陷还是策略差异", sides: [{ who: "casey", view: "回路成熟限制是主要因素" }, { who: "克罗恩（Crone）", view: "青少年在有利条件下可表现良好，差异更多来自动机与策略" }], stake: "应训练能力还是调整情境" },
    { topic: "青少年责任的年龄线", sides: [{ who: "casey", view: "发育证据支持在纪律与法律上区别对待" }, { who: "steinberg", view: "脑证据不应直接用于划定年龄界限" }], stake: "学校纪律与法律责任年龄应如何设定" }
  ],
  evidence: [{ text: "Casey 等（2011）青少年脑发育与抑制控制", doi: null }, { text: "Somerville 等（2011）青少年在热情境下的抑制", doi: null }],
  applications: ["减少高诱惑情境下的即时决策要求", "提供外部结构、提醒与延迟策略", "不用「自控力差」作人格标签"],
  terms: [{ t: "抑制控制", en: "inhibitory control", d: "压制不适当反应的能力" }, { t: "热执行功能", en: "hot executive function", d: "涉及情绪与奖赏的执行加工" }, { t: "前额—皮层下回路", en: "prefronto-subcortical circuit", d: "前额与皮层下结构的连接" }, { t: "情境依赖", en: "context dependence", d: "表现随情境条件显著变化" }]
},
E420: {
  definition: "认知灵活性常以任务切换范式测量：被试按线索在规则间切换，切换试次比重复试次更慢且更易错。三宅（Akira Miyake）等 2000 年的潜变量研究把转换识别为执行功能的可分离成分，切换代价被解释为任务集重构与旧规则惯性。",
  claims: ["转换是可分离的执行成分", "切换存在稳定的时间与错误代价", "代价来自规则重构与干扰", "灵活性随年龄发展并可部分训练"],
  agreements: ["切换代价可重复", "转换成分可分离", "训练效应多为近迁移"],
  disagreements: [
    { topic: "代价来源", sides: [{ who: "miyake", view: "任务集重构是主要来源" }, { who: "monsell", view: "旧任务集的干扰与抑制解除同样重要" }], stake: "训练应针对重构还是干扰控制" },
    { topic: "灵活性的代价", sides: [{ who: "miyake", view: "认知灵活性是执行功能的优势成分" }, { who: "monsell", view: "频繁切换持续损害表现，灵活性有明确边界" }], stake: "课堂是否应鼓励多任务与快速切换" }
  ],
  evidence: [{ text: "Miyake 等（2000）执行功能的统一性与多样性", doi: null }, { text: "Monsell（2003）任务切换综述", doi: null }],
  applications: ["明确发出规则切换信号，给出过渡时间", "减少不必要的规则交替与形式变化", "用变式练习促进灵活应用"],
  terms: [{ t: "任务切换", en: "task switching", d: "在规则或任务间转换" }, { t: "切换代价", en: "switch cost", d: "切换导致的时间与错误增加" }, { t: "任务集重构", en: "task-set reconfiguration", d: "切换时重建任务规则" }, { t: "认知灵活性", en: "cognitive flexibility", d: "按情境调整思路与规则" }]
},
E421: {
  definition: "注意缺陷的异质性指同为 ADHD 诊断的个体在认知与动机特征上差异显著。索努加-巴克（Edmund Sonuga-Barke）2003 年提出双通路模型：一条为执行功能缺陷，另一条为对延迟奖赏的厌恶，二者可独立或共同出现。",
  claims: ["ADHD 存在多条致病通路", "执行功能缺陷只覆盖部分个体", "延迟厌恶与奖赏回路功能相关", "不同特征对干预反应不同"],
  agreements: ["ADHD 高度异质", "执行缺陷并非普遍", "动机与奖赏因素重要"],
  disagreements: [
    { topic: "亚型的稳定性", sides: [{ who: "sonuga_barke", view: "双通路可区分出稳定亚群" }, { who: "barkley", view: "执行缺陷是核心，其他为次要特征" }], stake: "诊断与干预应否按亚型分流" },
    { topic: "药物与行为干预的顺序", sides: [{ who: "sonuga_barke", view: "应先做环境调整与行为支持" }, { who: "barkley", view: "药物对核心症状有效，延迟会放大功能损害" }], stake: "干预路径应如何排序" }
  ],
  evidence: [{ text: "Sonuga-Barke（2003）ADHD 的双通路模型", doi: null }, { text: "Nigg 等（2005）ADHD 的因果模型", doi: null }],
  applications: ["评估具体困难而非只依据诊断名称", "对延迟厌恶者使用即时反馈与短段任务", "避免用单一干预方案覆盖所有学生"],
  terms: [{ t: "异质性", en: "heterogeneity", d: "同一诊断下机制与表现的多样性" }, { t: "延迟厌恶", en: "delay aversion", d: "对延迟奖赏的负性反应" }, { t: "执行功能", en: "executive function", d: "目标导向的高阶控制" }, { t: "双通路", en: "dual pathway", d: "两条相对独立的致病路径" }]
},
E422: {
  definition: "正念训练的注意效应研究考察短期冥想练习对注意与情绪的改善。唐一源（Yi-Yuan Tang）等 2007 年的随机研究显示，五天整合身心训练可改善注意与情绪指标，并伴随皮质醇与免疫功能变化；后续元分析显示效应小到中等且方法学异质。",
  claims: ["短期正念训练可改善注意与情绪", "效应与前扣带、前额活动相关", "效应量多为小到中等", "研究质量与对照类型差异大"],
  agreements: ["正念对压力与注意有小到中等效应", "学校中可行且接受度较高", "不是万能干预"],
  disagreements: [
    { topic: "与活性对照相比的效应", sides: [{ who: "tang", view: "效应在严格设计中仍稳健" }, { who: "邓宁（Dunning）", view: "等待名单对照会高估效应，活性对照下效应明显缩小" }], stake: "正念课程是否值得占用课时" },
    { topic: "课程的自愿性与价值预设", sides: [{ who: "tang", view: "世俗化训练可普遍开设" }, { who: "goswami", view: "涉及价值观与自我观，需尊重自愿与家庭差异" }], stake: "正念应否进入必修课程" }
  ],
  evidence: [{ text: "Tang 等（2007）短期身心训练与注意", doi: null }, { text: "Dunning 等（2019）正念与认知的元分析", doi: null }],
  applications: ["作为压力管理而非提分工具", "每天短时练习并保持自愿原则", "对创伤经历学生采用创伤敏感的方式"],
  terms: [{ t: "正念", en: "mindfulness", d: "有意识地、不加评判地觉察当下" }, { t: "注意调节", en: "attention regulation", d: "维持与切换注意的能力" }, { t: "活性对照", en: "active control", d: "与等效投入的替代活动比较" }, { t: "效应量", en: "effect size", d: "干预效果的标准化强度" }]
},
E423: {
  definition: "数字媒体使用与注意的研究检验屏幕时间是否损害注意。普日比尔斯基（Andrew Przybylski）等使用大样本与规格曲线分析发现，屏幕使用与青少年心理健康、注意问题的关联很小，效应量常小于其他日常变量，且受内容与情境调节。",
  claims: ["屏幕时间与注意问题的相关很小", "内容与使用情境比总时长更重要", "多数研究为横断相关，因果证据不足", "屏幕时间是过于粗糙的指标"],
  agreements: ["平均效应很小", "睡前使用与内容风险更值得关注", "因果方向尚不明确"],
  disagreements: [
    { topic: "是否存在高风险亚群", sides: [{ who: "przybylski", view: "平均效应小，只有极端使用才明显" }, { who: "特温格（Twenge）", view: "特定群体与特定使用模式存在较大风险" }], stake: "政策应针对全体还是高风险群体" },
    { topic: "因果方向", sides: [{ who: "przybylski", view: "横断相关弱且方向不明" }, { who: "特温格（Twenge）", view: "纵向趋势提示屏幕使用可能推高注意问题" }], stake: "是否应出台统一的限时政策" }
  ],
  evidence: [{ text: "Przybylski 与 Weinstein（2017）数字使用的黄金发条", doi: null }, { text: "Orben 与 Przybylski（2019）青少年福祉与数字技术", doi: null }],
  applications: ["不以总时长一刀切制定规则", "关注睡前使用、内容性质与替代活动", "教学生自我监测而非以恐吓方式管理"],
  terms: [{ t: "屏幕时间", en: "screen time", d: "使用电子屏幕的总时长" }, { t: "规格曲线分析", en: "specification curve analysis", d: "穷举合理分析组合检验稳健性" }, { t: "效应量", en: "effect size", d: "效应强度的标准化指标" }, { t: "相关设计", en: "correlational design", d: "无法确立因果的观察设计" }]
},
E424: {
  definition: "走神指注意脱离当前任务、转向任务无关思维。克里斯托夫（Kalina Christoff）等 2016 年的综述区分自发走神与故意走神，并指出走神涉及默认模式网络与额顶控制网络的耦合：耦合强时个体更有元意识。",
  claims: ["走神与默认模式网络活动相关", "走神可分为自发与故意两类", "默认网络与执行网络的耦合影响元意识", "走神与创造性及负性情绪均有联系"],
  agreements: ["走神普遍存在", "默认网络参与自我相关思维", "走神损害外部任务表现"],
  disagreements: [
    { topic: "走神的功能价值", sides: [{ who: "christoff", view: "走神具适应性与创造性功能" }, { who: "smallwood", view: "在课堂与学习中多数走神造成资源竞争与学习损失" }], stake: "课堂应减少走神还是允许其存在" },
    { topic: "走神的测量", sides: [{ who: "christoff", view: "体验采样与脑网络指标可刻画走神" }, { who: "pashler", view: "自我报告与任务表现常不一致，测量效度有限" }], stake: "课堂干预效果应如何评估" }
  ],
  evidence: [{ text: "Christoff 等（2016）走神的体验与脑网络", doi: null }, { text: "Killingsworth 与 Gilbert（2010）走神与幸福感", doi: null }],
  applications: ["用短任务与清晰目标降低走神", "在长任务中安排有意的休息", "用元认知提示帮助学生觉察走神"],
  terms: [{ t: "走神", en: "mind wandering", d: "注意转向任务无关思维" }, { t: "默认模式网络", en: "default mode network", d: "静息时活跃的自我相关网络" }, { t: "元意识", en: "meta-awareness", d: "对当前心理状态的觉察" }, { t: "自发思维", en: "spontaneous thought", d: "未受任务约束的思维流" }]
},
E425: {
  definition: "认知负荷的神经影像证据研究试图用前额活动、瞳孔直径等指标验证内在、外在与生成性负荷的区分。斯威勒（John Sweller）等指出，行为实验已足以支持负荷理论的核心预测，而影像指标与具体负荷类型的对应仍不精确。",
  claims: ["高认知负荷增加前额活动与瞳孔直径", "负荷超过资源时学习与迁移下降", "影像指标难以区分负荷类型", "负荷理论的主要证据来自行为实验"],
  agreements: ["工作记忆容量有限", "高负荷损害学习", "教学设计可降低外在负荷"],
  disagreements: [
    { topic: "神经影像对理论的验证力", sides: [{ who: "sweller", view: "行为证据已足够，影像多为伴随指标" }, { who: "帕斯（Paas）", view: "影像与生理指标可补充测量负荷，但需校准" }], stake: "是否值得用昂贵影像验证教学设计" },
    { topic: "课堂可用性", sides: [{ who: "sweller", view: "教师用行为指标即可判断负荷" }, { who: "帕斯（Paas）", view: "多指标组合更可靠，但成本与解释门槛高" }], stake: "负荷测量能否进入日常教研" }
  ],
  evidence: [{ text: "Sweller（2011）认知负荷理论", doi: null }, { text: "Paas 等（2003）认知负荷的测量", doi: null }],
  applications: ["减少无关信息与搜索式加工", "分段呈现并提供样例渐隐", "不用瞳孔或脑电指标作为课堂评价工具"],
  terms: [{ t: "认知负荷", en: "cognitive load", d: "任务施加于工作记忆的负担" }, { t: "内在负荷", en: "intrinsic load", d: "材料本身与目标相关的复杂度" }, { t: "外在负荷", en: "extraneous load", d: "由呈现方式造成的不必要负担" }, { t: "生成性加工", en: "generative processing", d: "用于建构图式的努力" }]
},
E426: {
  definition: "情绪的理论模型长期分为两类：基本情绪论主张存在若干离散、普遍且具特定生理指纹的情绪类别；建构论（巴雷特，Lisa Feldman Barrett）主张情绪由核心情感（效价与唤醒）加上概念知识与情境即时组装，不存在稳定的类别指纹。",
  claims: ["基本情绪论主张离散类别与跨文化普遍性", "建构论主张情绪是概念驱动的即时建构", "现有证据未找到可靠的离散生理指纹", "两模型对测量与干预含义不同"],
  agreements: ["效价与唤醒是有效的维度", "语言、情境与学习塑造情绪体验", "情绪影响注意、记忆与学习"],
  disagreements: [
    { topic: "是否存在基本情绪", sides: [{ who: "艾克曼（Ekman）", view: "存在跨文化普遍、可识别的离散情绪类别" }, { who: "barrett", view: "类别由概念建构，跨情境变异大于共性" }], stake: "情绪教育应教类别还是教维度与情境" },
    { topic: "情绪课程的取向", sides: [{ who: "barrett", view: "应教情绪粒度、情境归因与概念区分" }, { who: "艾克曼（Ekman）", view: "应教基本情绪的识别与表达规则" }], stake: "社会情绪学习课程如何编排" }
  ],
  evidence: [{ text: "Barrett（2017）情绪如何被制造", doi: null }, { text: "Ekman 等（1969）面部表情的跨文化元素", doi: null }],
  applications: ["教情绪词汇、情境归因与调节策略", "不用情绪脸谱测验给学生贴标签", "区分情绪体验与行为责任"],
  terms: [{ t: "基本情绪", en: "basic emotion", d: "离散且具普遍性的情绪类别" }, { t: "心理建构论", en: "psychological constructionism", d: "情绪由核心情感与概念构成" }, { t: "核心情感", en: "core affect", d: "效价与唤醒构成的状态" }, { t: "情绪粒度", en: "emotion granularity", d: "区分细微情绪状态的精细度" }]
},
E427: {
  definition: "耶克斯—多德森定律（1908）描述唤醒水平与表现之间的倒 U 形关系，并主张任务越复杂，最优唤醒水平越低。它长期被用于解释考试焦虑与动机强度，但现代证据显示该关系依赖任务与测量方式，倒 U 只是启发式概括。",
  claims: ["中等唤醒常伴随最佳表现", "复杂任务的最优唤醒低于简单任务", "过高唤醒损害精细与工作记忆依赖的任务", "关系受个体差异与任务类型调节"],
  agreements: ["唤醒影响表现", "任务难度调节最优水平", "考试焦虑可损害复杂任务表现"],
  disagreements: [
    { topic: "倒 U 的普适性", sides: [{ who: "yerkes", view: "倒 U 是可推广的一般规律" }, { who: "泰根（Teigen）", view: "多数数据呈线性或仅在特定条件下呈倒 U" }], stake: "能否据此给出统一的「最佳压力」建议" },
    { topic: "个体差异与最优唤醒", sides: [{ who: "yerkes", view: "存在可普遍适用的最优唤醒区间" }, { who: "diamond", view: "最优唤醒随任务与个体经验显著变化" }], stake: "考前动员应统一进行还是个别化" }
  ],
  evidence: [{ text: "Yerkes 与 Dodson（1908）唤醒与表现", doi: null }, { text: "Teigen（1994）对耶克斯—多德森定律的再评估", doi: null }],
  applications: ["帮学生把唤醒解读为准备状态而非失控", "高难度任务前降低威胁评价与结果权重", "不用「压力越大越好」作为管理话术"],
  terms: [{ t: "倒 U 形", en: "inverted-U", d: "先升后降的关系曲线" }, { t: "唤醒", en: "arousal", d: "生理与心理的激活水平" }, { t: "任务难度", en: "task difficulty", d: "任务对资源的需求程度" }, { t: "考试焦虑", en: "test anxiety", d: "评价情境引发的焦虑反应" }]
},
E428: {
  definition: "杏仁核与前额叶的发育时序研究显示，杏仁核及皮层下情绪系统较早成熟，而前额叶及其与皮层下的连接持续成熟到二十多岁。吉德（Jay Giedd）等的纵向影像研究为这一时序差提供了结构证据。",
  claims: ["杏仁核体积较早达到峰值", "前额叶灰质成熟持续到成年早期", "前额—杏仁核连接随年龄增强", "时序差与青少年情绪反应性相关"],
  agreements: ["皮层下系统早于前额成熟", "前额连接持续发育", "个体差异显著"],
  disagreements: [
    { topic: "时序差能否解释行为", sides: [{ who: "giedd", view: "结构时序为青少年情绪反应提供解释框架" }, { who: "克罗恩（Crone）", view: "行为更依赖网络整合与情境，单一时序差过度简化" }], stake: "发育时序证据能否用于教育与法律判断" },
    { topic: "情绪问题的归因", sides: [{ who: "giedd", view: "应以神经发育时序解释青少年情绪波动" }, { who: "shonkoff", view: "环境压力与关系质量同样是主要解释变量" }], stake: "干预应针对个体发育还是环境" }
  ],
  evidence: [{ text: "Giedd 与 Rapoport（2010）儿童青少年脑结构发育", doi: null }, { text: "Gogtay 等（2004）皮层成熟时序的纵向成像", doi: null }],
  applications: ["为青少年提供情绪调节的支架与明确边界", "不用脑成熟为低期待或放任辩护", "训练情绪识别、命名与重评"],
  terms: [{ t: "杏仁核", en: "amygdala", d: "处理威胁与情绪显著性的关键脑区" }, { t: "前额叶", en: "prefrontal cortex", d: "负责规划、抑制与调节的脑区" }, { t: "发育时序", en: "developmental timing", d: "不同系统成熟先后的安排" }, { t: "皮层—皮层下连接", en: "cortico-subcortical connectivity", d: "前额与情绪结构的白质通路" }]
},
E429: {
  definition: "社会排斥的神经反应研究用「网络传球」范式操纵被排除感。艾森伯格（Naomi Eisenberger）等 2003 年发现，社会排斥激活背侧前扣带与前脑岛，这两个区域也参与疼痛的情感成分，提示社会痛苦与物理痛苦部分共享神经底物。",
  claims: ["社会排斥激活背侧前扣带与前脑岛", "与物理疼痛的情感成分部分重叠", "个体差异与依恋风格、敏感性相关", "社会支持可缓冲排斥反应"],
  agreements: ["排斥引发真实负性反应", "背侧前扣带参与社会痛苦", "个体差异显著"],
  disagreements: [
    { topic: "是否共享「疼痛」本身", sides: [{ who: "eisenberger", view: "社会痛苦共享疼痛的情感成分" }, { who: "利伯曼（Lieberman）", view: "背侧前扣带更多反映冲突与显著性，而非疼痛特异" }], stake: "能否用疼痛框架理解与干预排斥" },
    { topic: "反排斥的干预路径", sides: [{ who: "eisenberger", view: "应优先修复关系与提供支持" }, { who: "barkley", view: "对持续排挤行为需明确规则与后果" }], stake: "反欺凌应以关系修复还是纪律惩戒为主" }
  ],
  evidence: [{ text: "Eisenberger 等（2003）社会排斥的神经关联", doi: null }, { text: "Eisenberger（2012）社会痛苦与物理痛苦", doi: null }],
  applications: ["及时识别并干预班级中的排斥与孤立", "用合作结构减少边缘化", "不轻视「只是被孤立」的体验"],
  terms: [{ t: "社会排斥", en: "social exclusion", d: "被群体排除在外的体验" }, { t: "背侧前扣带", en: "dorsal anterior cingulate", d: "参与冲突与痛苦情感成分的区域" }, { t: "前脑岛", en: "anterior insula", d: "参与内感受与情绪显著性的区域" }, { t: "社会痛苦", en: "social pain", d: "由关系损失或排斥引发的痛苦" }]
},
E430: {
  definition: "奖赏系统的发育研究显示，青春期纹状体对奖赏及其预测线索的反应增强，而前额控制网络仍在成熟。加尔万（Adriana Galván）等 2006 年的研究发现，青少年在奖赏预期与获得时纹状体激活高于儿童与成人。",
  claims: ["纹状体奖赏反应在青春期相对增强", "前额控制网络成熟较晚", "奖赏敏感性与风险行为相关", "同伴在场放大奖赏相关激活"],
  agreements: ["奖赏系统在青春期高度敏感", "前额控制仍在发展", "情境与同伴调节行为"],
  disagreements: [
    { topic: "激活差异的性质", sides: [{ who: "galvan", view: "青少年纹状体对奖赏的反应增强" }, { who: "casey", view: "差异可能反映基线或任务敏感性不同，模式比「增强」更复杂" }], stake: "如何据此设计激励制度" },
    { topic: "奖赏与内在动机", sides: [{ who: "galvan", view: "奖赏敏感性可用于设计有效激励" }, { who: "deci_ryan", view: "外在奖励可能削弱内在动机，需慎用" }], stake: "学校是否应采用积分与奖励制度" }
  ],
  evidence: [{ text: "Galván 等（2006）青少年奖赏回路", doi: null }, { text: "Galván（2010）青少年奖赏敏感性", doi: null }],
  applications: ["用即时、具体、信息性的正向反馈", "设计适度挑战与可见的进步记录", "避免赌博式积分、排名与随机奖励机制"],
  terms: [{ t: "纹状体", en: "striatum", d: "参与奖赏与习惯形成的皮层下结构" }, { t: "奖赏预期", en: "reward anticipation", d: "对即将到来奖赏的预期反应" }, { t: "青春期", en: "adolescence", d: "从性成熟到成年角色的过渡期" }, { t: "同伴在场", en: "peer presence", d: "同伴在场对行为的调节" }]
},
E431: {
  definition: "催产素与社会认知研究考察这一神经肽对信任、共情与养育行为的作用。费尔德曼（Ruth Feldman）2012 年的综述指出，催产素提高社会线索的显著性并调节亲社会行为，但效应高度依赖情境、个体与测量方式。",
  claims: ["催产素增强社会线索的显著性", "影响信任、共情与养育行为", "效应受情境与个体差异调节", "鼻喷催产素研究的可重复性受质疑"],
  agreements: ["催产素参与社会行为调节", "效应是条件性的", "内源系统与外源给药不同"],
  disagreements: [
    { topic: "鼻喷催产素的稳健性", sides: [{ who: "feldman", view: "存在可重复的行为效应" }, { who: "heinrichs", view: "效应小、受发表偏倚与剂量方案影响，外推需谨慎" }], stake: "能否把催产素作为干预手段" },
    { topic: "样本与性别外推", sides: [{ who: "feldman", view: "催产素效应在男女与亲子情境中均成立" }, { who: "heinrichs", view: "多数研究样本偏男性，家庭与课堂情境外推有限" }], stake: "能否把实验室结论用于家校实践" }
  ],
  evidence: [{ text: "Feldman（2012）催产素与社会行为", doi: null }, { text: "Kosfeld 等（2005）催产素与信任", doi: null }],
  applications: ["不推荐以催产素喷雾改善课堂或亲子关系", "重视安全依恋与稳定的师生关系", "不把复杂社会行为简单神经化"],
  terms: [{ t: "催产素", en: "oxytocin", d: "参与社会联结与分娩的神经肽" }, { t: "社会显著性", en: "social salience", d: "社会线索被优先加工的程度" }, { t: "亲社会行为", en: "prosocial behavior", d: "有利于他人的行为" }, { t: "鼻喷给药", en: "intranasal administration", d: "经鼻腔递送神经肽的方法" }]
},
E432: {
  definition: "情绪传染与共情研究区分情感共享与认知采择。辛格（Tania Singer）等 2004 年的 fMRI 研究发现，观察伴侣接受疼痛刺激时，被试的前脑岛与背侧前扣带激活，与自身接受疼痛时的情感成分重叠，而感觉成分不重叠。",
  claims: ["共情包含情感共享与认知采择", "观察他人疼痛激活前脑岛与背侧前扣带", "共情反应可被情境与动机调节", "过度共情导致情绪耗竭"],
  agreements: ["共情有可识别的神经基础", "情感共享相对自动", "共情可以被调节与训练"],
  disagreements: [
    { topic: "共情能否驱动有效利他", sides: [{ who: "singer", view: "共情可动机化关怀，并可训练为同情" }, { who: "保罗·布鲁姆（Paul Bloom）", view: "共情易偏私且易耗竭，理性关怀更可靠" }], stake: "德育应以激发共情还是训练原则为主" },
    { topic: "共情训练的边界", sides: [{ who: "singer", view: "同情训练可提升关怀而不增加耗竭" }, { who: "bowers", view: "训练效应多为自评，行为与学业迁移证据不足" }], stake: "共情课程是否值得纳入正式课时" }
  ],
  evidence: [{ text: "Singer 等（2004）共情的神经基础", doi: null }, { text: "Singer 与 Klimecki（2014）共情与同情", doi: null }],
  applications: ["教认知采择与情绪边界", "不要求教师无限共情，需制度性支持", "用结构化合作与角色互换而非仅靠感动故事"],
  terms: [{ t: "共情", en: "empathy", d: "共享他人情绪并理解其立场" }, { t: "情感共享", en: "affective sharing", d: "自动感染他人情绪状态" }, { t: "认知采择", en: "perspective taking", d: "推断他人想法与立场" }, { t: "共情疲劳", en: "empathy fatigue", d: "长期共情导致的耗竭" }]
},
E433: {
  definition: "压力与海马体积研究考察慢性应激、皮质醇与海马结构的关系。卢皮恩（Sonia Lupien）等 2009 年的综述指出，长期高皮质醇与海马体积减小及记忆下降相关，但人类证据多为相关研究，效应量与因果方向仍有争议。",
  claims: ["慢性应激与海马体积负相关", "早期逆境影响 HPA 轴调节", "糖皮质激素可损害海马可塑性", "人类证据多为相关，因果有限"],
  agreements: ["慢性压力影响海马与记忆", "早期逆境具长期影响", "可逆性证据有限"],
  disagreements: [
    { topic: "因果与效应量", sides: [{ who: "lupien", view: "压力对海马有实质且可累积的影响" }, { who: "wixted", view: "人类元分析效应小且受样本与方法调节，因果方向不明" }], stake: "能否据海马体积推断压力史" },
    { topic: "海马体积的可逆性", sides: [{ who: "lupien", view: "降低压力后海马体积可部分恢复" }, { who: "bowers", view: "人类纵向证据不足，不宜作出可逆性承诺" }], stake: "压力干预应否以脑结构改变为卖点" }
  ],
  evidence: [{ text: "Lupien 等（2009）压力对脑的影响", doi: null }, { text: "McEwen（1998）应激与海马可塑性", doi: null }],
  applications: ["减少不可控与不可预测的压力源", "提供控制感与可预测的常规", "不用恐惧与羞辱作为管理手段"],
  terms: [{ t: "皮质醇", en: "cortisol", d: "肾上腺分泌的应激激素" }, { t: "海马", en: "hippocampus", d: "与记忆和应激调节相关的结构" }, { t: "HPA 轴", en: "hypothalamic-pituitary-adrenal axis", d: "应激反应的内分泌通路" }, { t: "慢性应激", en: "chronic stress", d: "长期持续的压力状态" }]
},
E434: {
  definition: "情绪调节的神经训练研究考察认知重评、正念等策略能否改变前额—杏仁核回路。戴维森（Richard Davidson）与麦克尤恩（Bruce McEwen）2012 年的综述指出，训练与经验可改变调节回路的连接强度，但短期干预的效应有限且个体差异大。",
  claims: ["重评依赖前额对杏仁核的下调", "训练可改变前额—杏仁核耦合", "效应量与练习剂量相关", "短期干预的持久性证据有限"],
  agreements: ["前额参与情绪调节", "训练可改变调节能力", "个体差异显著"],
  disagreements: [
    { topic: "特质性改变的持久性", sides: [{ who: "davidson", view: "训练可产生较持久的回路改变" }, { who: "gross", view: "效应多为状态性，随访证据不足且依赖策略使用" }], stake: "是否值得把调节训练纳入正式课程" },
    { topic: "策略的文化适配", sides: [{ who: "davidson", view: "认知重评具有跨情境的普遍效益" }, { who: "barrett", view: "情绪调节的价值与适宜性受文化脚本影响" }], stake: "情绪课程是否存在文化偏见" }
  ],
  evidence: [{ text: "Davidson 与 McEwen（2012）社会环境影响脑", doi: null }, { text: "Ochsner 与 Gross（2005）认知重评", doi: null }],
  applications: ["教情绪命名与重评的具体步骤", "提供反复练习而非一次性讲座", "不把心理韧性课程当作万能方案"],
  terms: [{ t: "认知重评", en: "cognitive reappraisal", d: "重新解释情境以改变情绪" }, { t: "前额—杏仁核回路", en: "prefronto-amygdala circuit", d: "自上而下调节情绪的通路" }, { t: "情绪调节", en: "emotion regulation", d: "影响情绪发生与表达的过程" }, { t: "剂量", en: "dose", d: "练习的时长与频次" }]
},
E435: {
  definition: "学校氛围与应激生理研究考察校园环境如何影响学生的皮质醇节律与应激反应。肖恩科夫（Jack Shonkoff）等提出「毒性压力」概念：强烈、频繁或持续且缺乏支持性关系的应激会改变发育中的应激系统；安全、可预测的学校环境可起缓冲作用。",
  claims: ["长期不可控压力改变应激系统", "支持性关系可缓冲压力效应", "学校氛围与皮质醇节律相关", "早期逆境具累积效应"],
  agreements: ["毒性压力损害学习与健康", "关系是主要缓冲因素", "学校环境可以干预"],
  disagreements: [
    { topic: "皮质醇作为指标的信度", sides: [{ who: "shonkoff", view: "生理指标支持毒性压力框架" }, { who: "gunnar", view: "皮质醇受采样时间与情境影响，个体差异大，需谨慎解读" }], stake: "学校能否用生理指标评估氛围" },
    { topic: "氛围评估的工具选择", sides: [{ who: "shonkoff", view: "应纳入生理与健康指标" }, { who: "gunnar", view: "自报告与观察更稳定，生理指标只宜作辅助" }], stake: "学校评估应采集哪些数据" }
  ],
  evidence: [{ text: "Shonkoff（2016）早期逆境与终身健康后果", doi: null }, { text: "McEwen 与 Gianaros（2011）应激与脑可塑性", doi: null }],
  applications: ["建立可预测的常规与稳定的师生关系", "培训教师识别持续应激的行为信号", "不把压力反应归因于学生性格或家庭失败"],
  terms: [{ t: "毒性压力", en: "toxic stress", d: "缺乏支持且长期的强烈应激" }, { t: "皮质醇", en: "cortisol", d: "肾上腺分泌的应激激素" }, { t: "缓冲关系", en: "buffering relationship", d: "稳定支持性关系减弱应激影响" }, { t: "学校氛围", en: "school climate", d: "校园中的关系、规范与安全感" }]
},
E436: {
  definition: "语音范畴知觉研究考察婴儿如何从区分所有语言的音位对比，转为只对母语范畴敏感。库尔（Patricia Kuhl）等提出「知觉窄化」：6–12 个月间母语范畴辨别增强、非母语对比辨别下降，且真实的面对面社会互动是学习的关键条件。",
  claims: ["婴儿早期能区分跨语言的语音对比", "母语范畴化随年龄增强而非母语辨别下降", "社会互动促进语音学习", "神经指标可预测后续语言发展"],
  agreements: ["语音知觉存在窄化", "社会互动优于纯音频输入", "早期语言环境质量重要"],
  disagreements: [
    { topic: "窄化是否可逆", sides: [{ who: "kuhl", view: "早期经验塑造知觉，后期训练效率明显下降" }, { who: "维尔克（Werker）", view: "成人经高强度训练可恢复部分非母语辨别" }], stake: "成人语音教学的可能性边界" },
    { topic: "窄化的机制", sides: [{ who: "kuhl", view: "统计学习与社会门控共同驱动窄化" }, { who: "pashler", view: "注意分配与刺激熟悉性即可解释多数结果" }], stake: "早教产品应以社会互动还是音频输入为核心" }
  ],
  evidence: [{ text: "Kuhl（2004）早期语言习得", doi: null }, { text: "Kuhl 等（2006）母语语音知觉的促进效应", doi: null }],
  applications: ["提供丰富的面对面语言互动而非仅播放音频", "多语言家庭不必担心「语言混淆」", "不用高价产品替代日常交流"],
  terms: [{ t: "语音范畴", en: "phonetic category", d: "把连续声学变化切分为音位类别" }, { t: "知觉窄化", en: "perceptual narrowing", d: "随经验收窄对非母语对比的敏感度" }, { t: "母语磁效应", en: "native language magnet", d: "母语原型吸引邻近语音的知觉" }, { t: "社会门控", en: "social gating", d: "社会互动对语言学习的促进作用" }]
},
E437: {
  definition: "词汇学习的脑机制可由「双流模型」刻画：腹侧通路把语音映射到语义，背侧通路连接听觉与运动表征以支持复述与产出。希科克（Greg Hickok）2012 年的综述指出，新词学习依赖海马的快速编码，随后逐步整合进分布式语义网络。",
  claims: ["词汇表征分布于多个皮层网络", "腹侧通路支持语音到语义的映射", "背侧通路支持语音工作记忆与产出", "新词学习初期依赖海马"],
  agreements: ["双流模型有影像与病例支持", "海马参与新词快速编码", "语义是分布式的"],
  disagreements: [
    { topic: "语义是否具身", sides: [{ who: "hickok", view: "语义可脱离感觉运动模拟而存在" }, { who: "巴索卢（Barsalou）", view: "概念依赖感觉运动经验的模拟" }], stake: "词汇教学应否强调身体经验" },
    { topic: "新词巩固的时间窗", sides: [{ who: "hickok", view: "新词经快速编码后逐步整合" }, { who: "戴维斯（Davis）", view: "稳定整合需要睡眠与间隔，非一次教学可完成" }], stake: "词汇教学应如何安排复习节奏" }
  ],
  evidence: [{ text: "Hickok 与 Poeppel（2007）语音加工的双流模型", doi: null }, { text: "Davis 与 Gaskell（2009）新词学习与巩固", doi: null }],
  applications: ["词汇教学同时给出语音、语义与使用情境", "用间隔与提取巩固新词", "多通道输入有价值，但不夸大手势的独特作用"],
  terms: [{ t: "双流模型", en: "dual-stream model", d: "腹侧语义与背侧听觉—运动通路" }, { t: "腹侧通路", en: "ventral stream", d: "语音到语义的加工路径" }, { t: "背侧通路", en: "dorsal stream", d: "听觉—运动映射的加工路径" }, { t: "语义表征", en: "semantic representation", d: "词义在脑中的分布式编码" }]
},
E438: {
  definition: "句法加工的脑区研究显示，左侧额下回（尤其 BA44）与左侧颞上回、颞叶前部构成句法网络。弗里德里奇（Angela Friederici）2011 年的模型区分局部短语结构构建与跨短语的层次依赖，分别对应不同时间进程与脑区。",
  claims: ["句法加工依赖左额—颞网络", "BA44 参与层次结构与序列构建", "颞上区参与局部短语组合", "不同句法操作有可分离的成分"],
  agreements: ["左半球网络参与句法", "额下回关键", "句法成分可分离"],
  disagreements: [
    { topic: "句法是否模块化", sides: [{ who: "friederici", view: "存在相对专门的句法网络与时间进程" }, { who: "托马塞洛（Tomasello）", view: "句法由一般序列学习与使用经验逐步涌现" }], stake: "句法教学应教规则还是提供使用情境" },
    { topic: "句法网络的左侧化程度", sides: [{ who: "friederici", view: "句法加工高度左侧化" }, { who: "hickok", view: "影像元分析显示双侧均有参与，右侧贡献不可忽略" }], stake: "语言障碍评估应关注哪些脑区" }
  ],
  evidence: [{ text: "Friederici（2011）句法加工的脑基础", doi: null }, { text: "Friederici 等（2006）BA44 与句法加工", doi: null }],
  applications: ["显性句法教学结合大量可理解输入", "把长句拆解为层次结构并可视化", "不宣称可以「训练语法脑区」"],
  terms: [{ t: "句法加工", en: "syntactic processing", d: "分析词序与层次结构的过程" }, { t: "布洛卡区", en: "Broca's area", d: "左侧额下回的语言相关区域" }, { t: "层次结构", en: "hierarchical structure", d: "短语与从句的嵌套组织" }, { t: "左侧化", en: "lateralization", d: "功能偏向一侧半球" }]
},
E439: {
  definition: "阅读通路的发育研究显示，识字会重塑左侧枕颞皮层，形成对文字敏感的视觉词形区（VWFA）。德阿纳（Stanislas Dehaene）2015 年以「神经元再利用」解释：阅读借用原本用于物体与面孔识别的视觉回路，并与语音、语义网络建立连接。",
  claims: ["阅读依赖视觉词形区、颞上与额下网络", "VWFA 的文字敏感性由识字经验形成", "阅读发展依赖语音意识与形音映射", "白质连接成熟支持阅读通路"],
  agreements: ["VWFA 存在且可重复", "阅读需要多区协同", "语音意识对解码关键"],
  disagreements: [
    { topic: "VWFA 是否文字特异", sides: [{ who: "dehaene", view: "存在对文字有选择性的专门区域" }, { who: "普赖斯（Price）", view: "该区域也可由一般视觉经验与任务需求解释" }], stake: "阅读教学是否应针对特定脑区" },
    { topic: "阅读教学的取向", sides: [{ who: "dehaene", view: "应系统教授语音与形音对应" }, { who: "古德曼（Goodman）", view: "应在真实阅读中自然习得，过度拆解损害意义" }], stake: "早期阅读课程如何编排" }
  ],
  evidence: [{ text: "Dehaene（2015）阅读脑的神经元再利用", doi: null }, { text: "Price 与 Devlin（2011）阅读脑的交互性账户", doi: null }],
  applications: ["系统教授语音与形音对应规则", "自动化解码后大幅增加阅读量", "早期识别风险而非等待自然成熟"],
  terms: [{ t: "视觉词形区", en: "visual word form area", d: "对文字形状敏感的左侧枕颞区" }, { t: "神经元再利用", en: "neuronal recycling", d: "既有回路被文化技能改造" }, { t: "语音意识", en: "phonological awareness", d: "觉察与操作语音单位的能力" }, { t: "形音映射", en: "grapheme-phoneme mapping", d: "字形与语音的对应关系" }]
},
E440: {
  definition: "阅读障碍的早期预测研究发现，学前语音意识、快速命名与字母知识能预测后续阅读困难，家族史提高风险概率。加布里埃利（John Gabrieli）2011 年的综述指出，神经影像可显示风险儿童的功能差异，但个体预测力尚不足以用于筛查。",
  claims: ["语音意识与快速命名预测阅读困难", "家族风险显著提高概率", "神经影像的个体预测力有限", "早期结构化干预可改善结果"],
  agreements: ["语音缺陷是核心机制之一", "早期识别可行", "早期干预有效"],
  disagreements: [
    { topic: "神经影像筛查的效度与伦理", sides: [{ who: "gabrieli", view: "影像有助理解机制与亚型" }, { who: "bowers", view: "成本高、个体预测弱，易造成标签与资源误配" }], stake: "是否应把脑成像纳入筛查流程" },
    { topic: "普筛的假阳性", sides: [{ who: "gabrieli", view: "早识别的收益大于误判风险" }, { who: "bowers", view: "假阳性会造成焦虑与标签，收益需先证明" }], stake: "是否应对全体学前儿童普筛" }
  ],
  evidence: [{ text: "Gabrieli（2009）阅读障碍：教育与认知神经科学的协同", doi: null }, { text: "Ozernov-Palchik 与 Gabrieli（2016）早期识别与干预", doi: null }],
  applications: ["学前筛查语音意识与快速命名", "不等待「发育成熟」再干预", "不用脑成像结果给学生贴标签"],
  terms: [{ t: "阅读障碍", en: "dyslexia", d: "以解码困难为核心的学习障碍" }, { t: "快速命名", en: "rapid automatized naming", d: "快速命名系列刺激的能力" }, { t: "语音意识", en: "phonological awareness", d: "觉察与操作语音单位的能力" }, { t: "家族风险", en: "familial risk", d: "家族史带来的概率升高" }]
},
E441: {
  definition: "双语控制的神经机制研究考察双语者如何在两套语言间选择与切换。比亚韦斯托克（Ellen Bialystok）2017 年的综述认为，长期语言管理会调用抑制与切换网络，但双语者在一般执行功能上的行为优势证据不一致，效应量小且受样本与任务调节。",
  claims: ["双语者需持续选择目标语言并抑制另一语言", "语言控制依赖左额下回与前扣带", "双语经验可能改变控制网络", "一般执行功能优势的行为证据不一致"],
  agreements: ["语言控制依赖执行网络", "语言切换存在代价", "经验可塑造相关网络"],
  disagreements: [
    { topic: "双语优势是否存在", sides: [{ who: "bialystok", view: "存在小到中等的执行控制优势" }, { who: "paap", view: "控制混杂后优势不稳定，可能存在发表偏倚" }], stake: "双语教育是否应以认知优势为卖点" },
    { topic: "双语与主流语言成绩", sides: [{ who: "bialystok", view: "双语经验不损害且可能促进语言能力" }, { who: "hattie", view: "在弱势群体中，课时分配可能压低主流语言成绩" }], stake: "双语课程应如何推广" }
  ],
  evidence: [{ text: "Bialystok（2017）双语的适应", doi: null }, { text: "Paap 等（2015）双语优势的元分析", doi: null }],
  applications: ["双语教育的价值以其语言与文化收益为理由", "不承诺双语能「提升大脑」或提高成绩", "支持家庭语言维持与双向双语"],
  terms: [{ t: "双语控制", en: "bilingual control", d: "在两套语言间选择与切换" }, { t: "抑制", en: "inhibition", d: "压制非目标语言的激活" }, { t: "切换代价", en: "switch cost", d: "语言切换导致的时间与错误增加" }, { t: "双语优势", en: "bilingual advantage", d: "双语经验带来的认知优势假设" }]
},
E442: {
  definition: "手语加工的半球组织研究显示，手语与口语一样主要依赖左半球语言区。贝鲁吉（Ursula Bellugi）等对失语症手语者的研究发现，左半球损伤导致手语失语，而右半球损伤更多影响空间关系加工，表明语言功能由功能需求而非感觉通道决定。",
  claims: ["手语者左半球损伤导致手语失语", "手语依赖左侧语言区", "空间语法可能更多涉及右半球", "手语习得存在敏感期"],
  agreements: ["左半球语言优势跨通道成立", "手语是完整语言", "早期语言可及性关键"],
  disagreements: [
    { topic: "空间语法的半球分工", sides: [{ who: "bellugi", view: "空间句法更多依赖右半球的空间加工" }, { who: "hickok", view: "左半球语言区也深度参与空间语法，分工不宜夸大" }], stake: "手语教学应否强调空间训练" },
    { topic: "聋童的语言选择", sides: [{ who: "bellugi", view: "应优先保障手语可及性以支持语言发展" }, { who: "bowers", view: "人工耳蜗后以口语为主亦可行，需个别化评估" }], stake: "个别化语言计划如何制定" }
  ],
  evidence: [{ text: "Bellugi 等（1990）手语与脑", doi: null }, { text: "Hickok 等（2001）脑中的手语", doi: null }],
  applications: ["尊重手语作为完整语言的地位", "保障聋童早期语言可及性", "不以口语优先为由延迟任何语言暴露"],
  terms: [{ t: "手语失语", en: "sign aphasia", d: "脑损伤后手语能力的选择性受损" }, { t: "左半球优势", en: "left-hemisphere dominance", d: "语言功能主要位于左半球" }, { t: "空间语法", en: "spatial grammar", d: "利用空间关系组织句法的手语系统" }, { t: "语言可及性", en: "language accessibility", d: "儿童能及时接触完整语言" }]
},
E443: {
  definition: "语言与音乐的共享加工研究考察两者是否共用资源。帕特尔（Aniruddh Patel）2008 年提出「共享资源」框架：语言与音乐在听觉分析、节奏与工作记忆上重叠，而句法加工虽有相似原则却依赖部分分离的机制。",
  claims: ["语言与音乐共享听觉与节奏加工", "句法加工存在重叠与分离", "共享资源导致同时任务的干扰", "音乐训练与语音技能的相关为小效应"],
  agreements: ["节奏与语音加工相关", "两者网络部分重叠", "训练迁移效应小"],
  disagreements: [
    { topic: "音乐训练能否迁移到语言与阅读", sides: [{ who: "patel", view: "存在以节奏为中介的合理迁移路径" }, { who: "萨拉（Sala）", view: "远迁移效应小且不稳定，多受设计与期望影响" }], stake: "音乐课能否作为语言干预" },
    { topic: "训练的时序与剂量", sides: [{ who: "patel", view: "长期、有节奏互动的训练才可能产生迁移" }, { who: "萨拉（Sala）", view: "短期训练研究已显示效应不稳定，剂量不是唯一解释" }], stake: "是否应把音乐纳入语言干预课程" }
  ],
  evidence: [{ text: "Patel（2008）音乐、语言与脑", doi: null }, { text: "Sala 与 Gobet（2020）音乐训练与认知的元分析", doi: null }],
  applications: ["音乐活动用于节奏、听觉与情绪目标", "不承诺音乐训练能提升阅读成绩", "语言课可用韵律与节奏辅助语音教学"],
  terms: [{ t: "共享资源", en: "shared resources", d: "两个领域竞争同一加工资源" }, { t: "节奏", en: "rhythm", d: "时间上的规律性结构" }, { t: "句法", en: "syntax", d: "组合单位的规则系统" }, { t: "远迁移", en: "far transfer", d: "迁移到结构不同的领域" }]
},
E444: {
  definition: "语言关键期的神经证据来自行为曲线与神经反应的结合。纽波特（Elissa Newport）等 2002 年指出，句法习得效率随起始年龄下降，晚学者的神经反应模式与母语者不同；词汇学习受年龄限制小得多，因此更像敏感期而非硬性关键期。",
  claims: ["句法习得效率随起始年龄下降", "晚学者的神经反应模式不同", "词汇学习窗口更宽", "证据支持渐变敏感期"],
  agreements: ["早期暴露在句法上具优势", "神经模式随习得年龄变化", "词汇与句法限制不同"],
  disagreements: [
    { topic: "成熟限制与经验解释", sides: [{ who: "newport", view: "存在成熟层面的习得限制" }, { who: "bialystok", view: "输入质量、动机与身份认同可解释大部分年龄差异" }], stake: "教育政策应否以关键期为依据" },
    { topic: "关键期与成人教学", sides: [{ who: "newport", view: "成人习得效率下降，需要不同的支持强度" }, { who: "hattie", view: "显性策略与足量练习可大幅补偿年龄劣势" }], stake: "成人语言课程如何设计" }
  ],
  evidence: [{ text: "Newport 等（2002）语言关键期", doi: null }, { text: "Johnson 与 Newport（1989）语言习得的成熟限制", doi: null }],
  applications: ["保障早期语言可及性与高质量输入", "成人学习用显性规则、沉浸输入与高频使用", "不以关键期为由放弃后期语言教学"],
  terms: [{ t: "敏感期", en: "sensitive period", d: "经验塑造效应最强的发育窗口" }, { t: "起始年龄", en: "age of acquisition", d: "开始学习语言的年龄" }, { t: "句法习得", en: "syntactic acquisition", d: "掌握组合规则的过程" }, { t: "神经反应模式", en: "neural response pattern", d: "加工语言时的脑活动特征" }]
},
E445: {
  definition: "数量表征的顶内沟研究显示，顶内沟（IPS）对数量有选择性反应，且其近似表征遵循韦伯定律：数量越大，可分辨的最小差异按比例增大。德阿纳（Stanislas Dehaene）2003 年提出，符号数字通过教育映射到这一近似数量系统上。",
  claims: ["IPS 对数量有选择性反应", "近似数量表征遵循韦伯比例", "IPS 参与符号算术", "数量与空间共享部分资源"],
  agreements: ["IPS 是数量加工核心区", "近似表征存在", "符号需映射到数量"],
  disagreements: [
    { topic: "数量是否独立于连续量", sides: [{ who: "dehaene", view: "存在相对专用的数量表征" }, { who: "莱布维奇（Leibovich）", view: "IPS 也编码密度、面积等连续量，数量并非独立维度" }], stake: "数感训练应针对数量还是连续量" },
    { topic: "符号训练与数量表征", sides: [{ who: "dehaene", view: "符号映射建立在近似数量系统之上" }, { who: "ansari", view: "符号训练会重塑数量表征本身" }], stake: "数感课程应以近似比较还是符号操作为主" }
  ],
  evidence: [{ text: "Dehaene 等（2003）数量表征的神经基础", doi: null }, { text: "Piazza 等（2004）顶内沟的数量编码", doi: null }],
  applications: ["用数轴与近似比较活动建立数量感", "符号、图形与语言多表征并用", "不只训练符号运算而忽略数量意义"],
  terms: [{ t: "顶内沟", en: "intraparietal sulcus", d: "参与数量与空间加工的顶叶区域" }, { t: "近似数量系统", en: "approximate number system", d: "无需符号的粗略数量估计" }, { t: "韦伯定律", en: "Weber's law", d: "可辨差异随刺激量按比例增大" }, { t: "符号映射", en: "symbolic mapping", d: "数字符号与数量的对应" }]
},
E446: {
  definition: "数感训练与迁移研究考察近似数量辨别训练能否改善符号数学。巴特沃斯（Brian Butterworth）等 2011 年的研究显示，针对数量比较的计算机化训练可提升数感，并对算术表现产生有限的正向影响，效应大小与训练强度、年龄相关。",
  claims: ["数量辨别能力可通过训练提升", "向符号算术的迁移存在但效应小", "效应依赖训练强度与年龄", "高危儿童可能获益更多"],
  agreements: ["数感可以训练", "迁移有限", "早期干预重要"],
  disagreements: [
    { topic: "迁移的范围", sides: [{ who: "butterworth", view: "数感训练可产生实质的算术迁移" }, { who: "帕克（Park）", view: "迁移多为近迁移，远迁移证据薄弱" }], stake: "数感训练能否替代系统数学教学" },
    { topic: "干预对象的优先级", sides: [{ who: "butterworth", view: "应优先投向数感薄弱的高危儿童" }, { who: "hattie", view: "对全体学生的平均收益小，资源应集中" }], stake: "数感课程应面向全体还是小组" }
  ],
  evidence: [{ text: "Butterworth 等（2011）数感训练", doi: null }, { text: "Park 与 Brannon（2013）近似数量训练与数学", doi: null }],
  applications: ["用数量比较游戏补充低年级数学", "把数感训练与符号任务结合", "不以其替代系统的数学课程"],
  terms: [{ t: "数感", en: "number sense", d: "对数量大小与关系的直觉" }, { t: "近似数量系统", en: "approximate number system", d: "粗略估计数量的核心系统" }, { t: "迁移", en: "transfer", d: "训练效果扩展到未训练任务" }, { t: "干预强度", en: "intervention intensity", d: "训练的时长、频次与难度" }]
},
E447: {
  definition: "数学事实的提取网络研究关注成人如何快速取回 7×8 这类答案。吉尔里（David Geary）2011 年的综述指出，算术事实提取依赖左角回与语言相关网络，而程序性计算与新问题解决更多依赖顶内沟与前额叶，二者发展轨迹不同。",
  claims: ["事实提取依赖左角回与语言网络", "程序性计算依赖顶内—额叶回路", "事实提取随练习趋于自动化", "数学学习困难常伴事实提取缺陷"],
  agreements: ["角回参与事实提取", "自动化对流畅性重要", "个体差异显著"],
  disagreements: [
    { topic: "事实提取是否依赖语言", sides: [{ who: "geary", view: "事实提取借用语言网络的言语编码" }, { who: "dehaene", view: "也可通过数量—符号映射实现，语言并非必需" }], stake: "乘法表应否以言语背诵为主要方法" },
    { topic: "事实记忆与理解", sides: [{ who: "geary", view: "自动化的事实提取是后续学习的前提" }, { who: "sweller", view: "理解性图式比孤立事实更能支持迁移" }], stake: "小学阶段应否要求熟练背诵乘法表" }
  ],
  evidence: [{ text: "Geary（2011）数学学习的认知预测因素", doi: null }, { text: "Grabner 等（2009）算术事实提取的脑基础", doi: null }],
  applications: ["在理解基础上分散练习事实", "用多种表征支持提取而非纯背诵", "避免以计时压力替代概念理解"],
  terms: [{ t: "事实提取", en: "fact retrieval", d: "直接从长时记忆取回算术答案" }, { t: "角回", en: "angular gyrus", d: "参与言语与数学事实提取的顶叶区域" }, { t: "程序性计算", en: "procedural computation", d: "按步骤执行的计算过程" }, { t: "自动化", en: "automaticity", d: "无需意识努力即可执行" }]
},
E448: {
  definition: "数学焦虑的生理指标研究显示，高数学焦虑者在预期数学任务时杏仁核激活增强、皮质醇与心率上升。莱昂斯（Ian Lyons）与贝洛克（Sian Beilock）2012 年的研究指出，焦虑占用工作记忆资源，形成「越焦虑越差、越差越焦虑」的循环。",
  claims: ["数学焦虑者在预期数学时杏仁核激活增强", "生理唤醒指标可测量", "焦虑占用工作记忆", "焦虑与表现形成负向循环"],
  agreements: ["数学焦虑影响表现", "生理指标可测", "工作记忆是中介"],
  disagreements: [
    { topic: "因果方向与特异性", sides: [{ who: "lyons", view: "焦虑通过占用工作记忆特异性损害数学表现" }, { who: "ramirez", view: "也可能是一般评价焦虑或长期回避的结果，方向需纵向检验" }], stake: "干预应针对数学焦虑还是一般考试焦虑" },
    { topic: "干预责任与边界", sides: [{ who: "lyons", view: "课堂调整与考前书写即可显著缓解" }, { who: "barkley", view: "严重焦虑需临床评估，教师不应独自处理" }], stake: "教师应在何种程度上处理数学焦虑" }
  ],
  evidence: [{ text: "Lyons 与 Beilock（2012）数学焦虑的生理基础", doi: null }, { text: "Beilock 与 Carr（2005）压力下的工作记忆与表现", doi: null }],
  applications: ["减少公开计时、排名与突袭测验", "考前让学生写下担忧以释放工作记忆", "设计可成功的渐进任务以打断循环"],
  terms: [{ t: "数学焦虑", en: "math anxiety", d: "面对数学时的紧张与回避" }, { t: "工作记忆", en: "working memory", d: "有限容量的即时加工系统" }, { t: "皮质醇", en: "cortisol", d: "肾上腺分泌的应激激素" }, { t: "杏仁核", en: "amygdala", d: "处理威胁与情绪显著性的脑区" }]
},
E449: {
  definition: "计算障碍的亚型研究显示，这一诊断覆盖异质群体。巴特沃斯（Brian Butterworth）2019 年的综述区分核心数量缺陷、程序性与工作记忆缺陷、以及算术事实提取缺陷等亚型，不同亚型对干预的反应不同。",
  claims: ["计算障碍存在多个亚型", "核心数量表征缺陷见于部分个体", "其他亚型涉及工作记忆与事实提取", "亚型对干预反应不同"],
  agreements: ["计算障碍高度异质", "核心数量缺陷是重要通路", "需要个别化评估"],
  disagreements: [
    { topic: "亚型划分标准", sides: [{ who: "butterworth", view: "应以核心数量缺陷为分类核心" }, { who: "聚奇（Szűcs）", view: "亚型边界不稳定且共病常见，分类需多维证据" }], stake: "是否按亚型分配不同的干预方案" },
    { topic: "诊断的必要性", sides: [{ who: "butterworth", view: "识别亚型是精准干预的前提" }, { who: "bowers", view: "标签收益有限，直接针对具体困难更有效" }], stake: "是否应推动计算障碍的诊断普及" }
  ],
  evidence: [{ text: "Butterworth（2019）计算障碍", doi: null }, { text: "Szűcs 与 Goswami（2013）发展性计算障碍的机制", doi: null }],
  applications: ["用多成分评估确定具体困难", "针对数量、程序或事实分别设计干预", "避免把所有数学困难都归为「数感差」"],
  terms: [{ t: "计算障碍", en: "dyscalculia", d: "以数量与计算困难为核心的学习障碍" }, { t: "亚型", en: "subtype", d: "同一障碍下机制不同的分组" }, { t: "数量表征", en: "numerical representation", d: "对数量大小的内部编码" }, { t: "事实提取", en: "fact retrieval", d: "直接从记忆取回算术答案" }]
},
E450: {
  definition: "空间训练与数学迁移研究考察空间可视化训练能否提升数学表现。乌塔尔（David Uttal）等 2013 年的元分析发现，空间训练能稳定提升空间任务表现，但对数学的迁移效应较小，且高度依赖训练内容与测量任务的匹配。",
  claims: ["空间能力可以通过训练提升", "空间训练对空间任务有效", "向数学的迁移效应较小", "迁移受训练与测量匹配调节"],
  agreements: ["空间能力可训练", "空间能力与 STEM 相关", "迁移有限"],
  disagreements: [
    { topic: "迁移幅度", sides: [{ who: "uttal", view: "平均迁移效应小，需谨慎宣称" }, { who: "程（Cheng）", view: "设计良好的空间—数学整合课程可放大效应" }], stake: "是否应单独开设空间训练课" },
    { topic: "空间课程的定位", sides: [{ who: "uttal", view: "空间能力自身有价值，不必以数学迁移为目标" }, { who: "程（Cheng）", view: "应与数学内容整合，否则迁移难以发生" }], stake: "空间内容放在独立课还是数学课中" }
  ],
  evidence: [{ text: "Uttal 等（2013）空间训练与 STEM 的元分析", doi: null }, { text: "Cheng 与 Mix（2014）空间训练与数学表现", doi: null }],
  applications: ["把几何与空间推理活动纳入常规课程", "用图示、手势与实物模型支持理解", "不承诺空间训练必然提高数学成绩"],
  terms: [{ t: "空间能力", en: "spatial ability", d: "表征与操作空间关系的能力" }, { t: "迁移", en: "transfer", d: "训练效果扩展到其他任务" }, { t: "元分析", en: "meta-analysis", d: "对多项研究效应量的统计整合" }, { t: "心理旋转", en: "mental rotation", d: "在头脑中旋转物体的能力" }]
},
E451: {
  definition: "符号数学的脑可塑性研究显示，文化学习会重塑数量网络。安萨里（Daniel Ansari）2008 年的综述指出，随着符号数学经验增加，顶内沟对数量的反应模式改变，角回等区域参与符号—数量的映射，教育经验因此成为脑组织的重要变量。",
  claims: ["符号数学经验重塑数量网络", "训练可改变 IPS 的反应模式", "角回参与符号—数量映射", "教育经验塑造脑组织"],
  agreements: ["经验塑造数量网络", "IPS 具有可塑性", "教育对脑发展重要"],
  disagreements: [
    { topic: "先天核心系统与符号映射的关系", sides: [{ who: "ansari", view: "符号映射建立在核心数量系统之上" }, { who: "莱布维奇（Leibovich）", view: "符号数学可发展出独立于近似数量的表征" }], stake: "数学教学应从数感还是符号规则入手" },
    { topic: "文化经验与普遍性", sides: [{ who: "ansari", view: "教育与文化经验深度塑造数量网络" }, { who: "dehaene", view: "核心数量系统跨文化普遍，差异主要在符号层" }], stake: "跨文化数学课程能否统一设计" }
  ],
  evidence: [{ text: "Ansari（2008）发展与文化对数量表征的影响", doi: null }, { text: "Emerson 与 Cantlon（2012）符号数学的早期起源", doi: null }],
  applications: ["系统教授符号与数量的对应关系", "符号、图像与情境多表征并用", "早期把数感活动与符号教学结合"],
  terms: [{ t: "符号数学", en: "symbolic math", d: "使用数字符号与规则的数学" }, { t: "顶内沟", en: "intraparietal sulcus", d: "参与数量加工的顶叶区域" }, { t: "角回", en: "angular gyrus", d: "参与符号与语义映射的顶叶区域" }, { t: "文化塑造", en: "enculturation", d: "文化实践对脑组织的塑造" }]
},
E452: {
  definition: "早期数量经验的具身基础研究显示，婴儿拥有两套核心数量系统：近似数量系统支持粗略估计，物体追踪系统支持对小数量（约三个以内）的精确辨别。费根森（Lisa Feigenson）等认为，感官与动作经验为后续符号数学提供了起点。",
  claims: ["婴儿具备近似数量与物体追踪两套系统", "小数量精确辨别有严格容量限制", "数量感可通过感官与动作经验表达", "核心系统与后续符号数学相关"],
  agreements: ["婴儿具有数量感", "两套核心系统有证据", "经验调节数量能力"],
  disagreements: [
    { topic: "具身经验与抽象表征的关系", sides: [{ who: "feigenson", view: "核心系统提供相对抽象的数量表征" }, { who: "巴索卢（Barsalou）", view: "数量概念依赖感觉运动经验的模拟" }], stake: "低年级数学应否依赖操作材料" },
    { topic: "操作材料的使用年龄", sides: [{ who: "feigenson", view: "早期具体经验为符号学习奠基" }, { who: "sweller", view: "过多实物操作会增加无关负荷，应尽快过渡到符号" }], stake: "教具应在低年级使用多久" }
  ],
  evidence: [{ text: "Feigenson 等（2004）核心数量系统", doi: null }, { text: "Halberda 与 Feigenson（2008）近似数量能力的发展", doi: null }],
  applications: ["低年级使用可操作材料与数数活动", "多感官呈现数量关系", "不只做纸笔符号练习"],
  terms: [{ t: "近似数量系统", en: "approximate number system", d: "粗略估计数量的核心系统" }, { t: "物体追踪系统", en: "object tracking system", d: "精确辨别小数量物体的系统" }, { t: "核心系统", en: "core system", d: "先天具备的领域特异能力" }, { t: "具身经验", en: "embodied experience", d: "通过身体与感官获得的经验" }]
},
E453: {
  definition: "代数学习的认知负荷研究关注符号规则如何占用工作记忆。斯威勒（John Sweller）等指出，代数中大量符号、隐含规则与搜索式解题会增加外在负荷；样例学习、完成问题与分段呈现可降低负荷并释放资源用于图式建构。",
  claims: ["代数符号与规则抬高工作记忆负荷", "新手用搜索策略时外在负荷最高", "样例学习优于纯问题解决（新手阶段）", "专长反转效应调节支持强度"],
  agreements: ["工作记忆容量有限", "样例对新手有效", "专长反转效应存在"],
  disagreements: [
    { topic: "直接指导与探索式学习的取舍", sides: [{ who: "sweller", view: "新手需要强指导与样例，否则负荷过高" }, { who: "卡普尔（Kapur）", view: "在充分支持下，适度的产出性失败可促进深层理解" }], stake: "代数入门应否先讲步骤" },
    { topic: "符号与具体材料的顺序", sides: [{ who: "sweller", view: "应尽快过渡到符号表征以减少负荷" }, { who: "feigenson", view: "具体材料为数量关系提供必要基础" }], stake: "代数启蒙应先用教具还是先教符号" }
  ],
  evidence: [{ text: "Sweller 等（2011）认知负荷理论", doi: null }, { text: "Kalyuga 等（2003）专长反转效应", doi: null }],
  applications: ["用样例渐隐与完成问题过渡到独立解题", "分段呈现多步代数过程", "减少格式、符号与情境的无关变化"],
  terms: [{ t: "外在负荷", en: "extraneous load", d: "由呈现方式造成的不必要负担" }, { t: "样例学习", en: "worked example", d: "先研究完整解答再练习" }, { t: "专长反转", en: "expertise reversal", d: "对专家有效的支持对新手无效甚至有害" }, { t: "完成问题", en: "completion problem", d: "给出部分解答由学生补全" }]
},
E454: {
  definition: "学习风格迷思的流行率由德克尔（Sanne Dekker）等 2012 年调查：在荷兰与英国教师样本中，约九成教师认同「按视觉、听觉或动觉风格施教能提升学习」这一缺乏证据的主张，且认同度与对神经科学的兴趣正相关。",
  claims: ["学习风格匹配在教师中广泛被相信", "该主张缺乏支持匹配假说的实验证据", "相信迷思与接触神经科学信息相关", "迷思不因学历提高而自动消失"],
  agreements: ["迷思流行率高", "匹配假说缺乏证据", "需要系统培训与澄清"],
  disagreements: [
    { topic: "迷思测量的效度", sides: [{ who: "dekker", view: "问卷可刻画迷思的流行程度" }, { who: "howard_jones", view: "问卷措辞可能高估「相信」的比例，需结合访谈" }], stake: "流行率数据能否作为培训需求的依据" },
    { topic: "学习风格概念的存废", sides: [{ who: "dekker", view: "应明确纠正匹配假说，避免概念继续流通" }, { who: "tomlinson", view: "学习者偏好可作为了解学生的线索，但不应作为分组依据" }], stake: "教师话语中是否还能使用「学习风格」一词" }
  ],
  evidence: [{ text: "Dekker 等（2012）教育中的神经迷思", doi: null }, { text: "Pashler 等（2008）学习风格的概念与证据", doi: null }],
  applications: ["识别：是否按视觉型、听觉型分组或布置作业", "纠正：改用多种表征而非匹配偏好", "在教师培训中澄清匹配假说的证据标准"],
  terms: [{ t: "学习风格", en: "learning style", d: "按感知偏好划分学习者的分类" }, { t: "匹配假说", en: "meshing hypothesis", d: "按风格匹配教学可提升学习" }, { t: "神经迷思", en: "neuromyth", d: "对脑科学的误解被用于教育" }, { t: "流行率", en: "prevalence", d: "某信念在群体中的比例" }]
},
E455: {
  definition: "左右脑迷思的教育传播指裂脑研究中的半球分工发现被夸大为「左脑理性、右脑创造」的人格与学习类型。霍华德-琼斯（Paul Howard-Jones）2014 年指出，这类说法在教师中流行，并因神经科学术语而显得权威。",
  claims: ["半球存在一定分工，但不构成学习类型", "左右脑学习风格主张缺乏证据", "神经术语提高说服力", "商业产品助推迷思传播"],
  agreements: ["迷思在教育中流行", "商业利益是重要推手", "需要媒介与科学素养"],
  disagreements: [
    { topic: "迷思的成因", sides: [{ who: "howard_jones", view: "主要源于误读与传播链条" }, { who: "dekker", view: "部分产品与培训者有意识地选择性使用研究" }], stake: "治理应靠科普还是靠监管" },
    { topic: "半球分工的教学含义", sides: [{ who: "howard_jones", view: "半球分工不构成任何学习类型或课程依据" }, { who: "tomlinson", view: "尊重个体差异有必要，但应基于学习证据而非半球" }], stake: "课程分化应以什么为依据" }
  ],
  evidence: [{ text: "Howard-Jones（2014）神经科学与教育：迷思与信息", doi: null }, { text: "Gazzaniga（1967）裂脑研究", doi: null }],
  applications: ["识别：课程是否宣称「开发右脑」或按半球分班", "纠正：说明胼胝体与双侧协同加工", "审查采购与宣传材料中的神经术语"],
  terms: [{ t: "裂脑", en: "split brain", d: "切断胼胝体后的脑状态" }, { t: "半球分工", en: "hemispheric specialization", d: "两半球在特定加工上的差异" }, { t: "右脑开发", en: "right-brain training", d: "缺乏证据的商业化主张" }, { t: "神经迷思", en: "neuromyth", d: "对脑科学的误解被用于教育" }]
},
E456: {
  definition: "关键期迷思与早教市场指「三岁前决定一生」的说法。布鲁尔（John Bruer）1999 年在《前三年的迷思》中指出，突触生成与修剪的动物数据被误读为硬性截止，而人类证据支持的是渐变敏感期与后期干预的可行性。",
  claims: ["零到三岁关键期被显著夸大", "突触数据不能推出「过期作废」", "早期干预有效但非唯一窗口", "早教市场利用这一叙事"],
  agreements: ["早期经验重要但非决定", "误读普遍存在", "后期干预仍有效"],
  disagreements: [
    { topic: "早期投资的政策优先级", sides: [{ who: "bruer", view: "不应以神经迷思为由过度倾斜资源" }, { who: "赫克曼（Heckman）", view: "早期投资的社会回报率高于后期补偿" }], stake: "政策应优先投资哪个年龄段" },
    { topic: "早教市场的规制", sides: [{ who: "bruer", view: "应强制披露证据，限制「关键期」营销" }, { who: "hattie", view: "家长选择与市场竞争也能淘汰无效产品" }], stake: "是否需要专门监管早教宣传" }
  ],
  evidence: [{ text: "Bruer（1999）前三年的迷思", doi: null }, { text: "Knudsen（2004）敏感期经济学", doi: null }],
  applications: ["识别：「三岁定终身」「窗口已关闭」类话术", "纠正：用渐变敏感期与补偿干预的证据回应", "把资源投向课程质量与师资而非焦虑性消费"],
  terms: [{ t: "关键期", en: "critical period", d: "经验不可或缺的严格时间窗" }, { t: "突触修剪", en: "synaptic pruning", d: "按使用经验消除多余突触" }, { t: "早教市场", en: "early education market", d: "面向婴幼儿的商业教育服务" }, { t: "敏感期", en: "sensitive period", d: "经验塑造效应最强的窗口" }]
},
E457: {
  definition: "脑训练产业与证据标准讨论商业健脑产品是否有效。欧文（Adrian Owen）等 2010 年的大规模在线研究发现，训练提升训练任务成绩但未迁移到未训练任务；西蒙斯等 2016 年进一步指出，多数商业宣称缺乏活性对照、预注册与独立重复。",
  claims: ["脑训练提升训练任务表现", "远迁移证据薄弱", "多数研究缺乏活性对照", "需要预注册与独立重复"],
  agreements: ["训练效应多为任务特异", "远迁移不足", "商业宣称常超出证据"],
  disagreements: [
    { topic: "是否存在特定人群或特定迁移", sides: [{ who: "owen", view: "总体证据不支持有意义的远迁移" }, { who: "西蒙斯（Simons）", view: "不排除特定训练对特定人群有小效应，但需严格试验" }], stake: "是否应全面否定脑训练产品" },
    { topic: "近迁移的价值", sides: [{ who: "owen", view: "只提升训练任务本身不构成教育价值" }, { who: "hattie", view: "针对具体技能的近迁移仍可纳入教学设计" }], stake: "监管应以远迁移还是任务特异性为标准" }
  ],
  evidence: [{ text: "Owen 等（2010）脑训练对认知的迁移", doi: null }, { text: "Simons 等（2016）脑训练项目是否有效", doi: null }],
  applications: ["识别：宣称提升智商、成绩或防止衰退的产品", "纠正：要求活性对照、预注册与独立重复", "把预算优先投向学科教学与睡眠保障"],
  terms: [{ t: "脑训练", en: "brain training", d: "以游戏化任务训练认知能力" }, { t: "远迁移", en: "far transfer", d: "迁移到结构不同的任务" }, { t: "活性对照", en: "active control", d: "与等效投入的替代活动比较" }, { t: "预注册", en: "preregistration", d: "研究前公开假设与分析方案" }]
},
E458: {
  definition: "神经科学在教育中的误用指以脑成像或神经术语直接支撑教学主张。鲍尔斯（Jeffrey Bowers）2016 年系统指出，多数教育神经科学发现要么与已有行为研究重复，要么距离可操作的教学处方过远，且常被过度解释。",
  claims: ["多数神经发现未提供新的教学信息", "行为研究常已足够指导教学", "神经证据易被过度解释", "需要区分不同层级的解释"],
  agreements: ["桥接存在困难", "需要认知与课堂研究中介", "过度解释常见"],
  disagreements: [
    { topic: "教育神经科学是否有独特贡献", sides: [{ who: "bowers", view: "贡献有限且常与行为研究冗余" }, { who: "goswami", view: "机制约束可排除无效方法并生成新假设" }], stake: "是否值得继续投资教育神经科学" },
    { topic: "证据的必要性", sides: [{ who: "bowers", view: "没有神经证据也能作出同样的教学决策" }, { who: "dehaene", view: "神经约束能排除看似合理却违背脑组织的方案" }], stake: "教育研究是否应要求神经层面的证据" }
  ],
  evidence: [{ text: "Bowers（2016）教育神经科学的实践与原则问题", doi: null }, { text: "Bruer（1997）教育与脑科学桥接的边界", doi: null }],
  applications: ["识别：用脑图证明某教学法有效的论证", "纠正：要求行为与课堂层面的证据", "在跨学科评审中加入解释层级的检查"],
  terms: [{ t: "教育神经科学", en: "educational neuroscience", d: "连接脑机制与教育实践的领域" }, { t: "解释层级", en: "levels of explanation", d: "分子、细胞、认知与社会等不同层次" }, { t: "过度解释", en: "over-interpretation", d: "从有限证据推出过强结论" }, { t: "桥接", en: "bridging", d: "跨层级建立可检验的联系" }]
},
E459: {
  definition: "教育神经科学的伦理边界涉及脑数据隐私、神经标签的社会后果与商业化的期望管理。戈斯瓦米（Usha Goswami）2019 年强调，课堂采集的神经与生理数据可能被用于分流或营销，需要知情同意、最小必要与明确的用途限制。",
  claims: ["脑数据带来隐私与二次使用风险", "神经标签可能导致决定论与污名", "商业化易利用家长焦虑", "需要伦理框架与知情同意"],
  agreements: ["伦理风险真实存在", "标签可能固化低期待", "需要监管与透明"],
  disagreements: [
    { topic: "边界的具体划定", sides: [{ who: "goswami", view: "应严格限制教育场景的神经数据使用" }, { who: "霍华德-琼斯（Howard-Jones）", view: "在知情同意的形成性评估中可有条件使用" }], stake: "学校能否开展脑数据相关的教学创新" },
    { topic: "脑数据的所有权", sides: [{ who: "goswami", view: "神经数据不应由学校或商业机构持有" }, { who: "gabrieli", view: "在伦理审查与匿名化前提下可用于研究" }], stake: "教育脑数据应如何治理" }
  ],
  evidence: [{ text: "Goswami（2006）神经科学与教育：从研究到实践", doi: null }, { text: "经济合作与发展组织（2002）理解脑：走向新的学习科学", doi: null }],
  applications: ["识别：学校是否采集脑数据或购买神经筛查", "纠正：最小必要、知情同意、不用于分流", "建立数据治理与家长沟通机制"],
  terms: [{ t: "神经伦理", en: "neuroethics", d: "神经科学应用的伦理问题" }, { t: "脑数据隐私", en: "brain data privacy", d: "神经与生理数据的保护" }, { t: "神经标签", en: "neuro-labeling", d: "用脑指标给人分类与定性" }, { t: "知情同意", en: "informed consent", d: "充分告知后的自愿同意" }]
},
E460: {
  definition: "神经证据的宣传与家长焦虑指「关键窗口正在关闭」一类信息如何被用于营销。布鲁尔（John Bruer）2002 年警告，把动物突触数据简化为「三岁前必须完成」的说法，会让家长为缺乏证据的产品付费，并忽视学校与后期干预的作用。",
  claims: ["神经发现常被简化为紧迫的时间窗", "家长焦虑被商业利用", "科学传播需说明限定条件", "早期经验重要但不决定终身"],
  agreements: ["营销普遍夸大", "家长焦虑真实存在", "需要清晰的科学传播"],
  disagreements: [
    { topic: "警示与安抚的平衡", sides: [{ who: "bruer", view: "应强调证据边界，避免制造恐慌" }, { who: "肖恩科夫（Shonkoff）", view: "强调早期风险有助于争取政策与社会支持" }], stake: "公共传播应侧重风险还是可塑性" },
    { topic: "风险沟通的策略", sides: [{ who: "bruer", view: "应给出可做的日常建议而非倒计时" }, { who: "肖恩科夫（Shonkoff）", view: "不强调风险会削弱对早期干预的投入" }], stake: "面向家长的科普应如何措辞" }
  ],
  evidence: [{ text: "Bruer（2002）避免儿科医生的错误", doi: null }, { text: "Bruer（1999）前三年的迷思", doi: null }],
  applications: ["识别：「窗口关闭」「黄金期倒计时」类话术", "纠正：使用概率性与条件性表述", "家长沟通聚焦日常互动与睡眠等可控因素"],
  terms: [{ t: "科学传播", en: "science communication", d: "向公众传递研究结论的实践" }, { t: "家长焦虑", en: "parental anxiety", d: "对子女发展窗口的担忧" }, { t: "关键窗口", en: "critical window", d: "被夸大的时间限制说法" }, { t: "商业化", en: "commercialization", d: "以盈利为目的推广服务" }]
},
E461: {
  definition: "神经多样性与诊断标签讨论如何理解自闭、ADHD、阅读障碍等神经差异。巴伦-科恩（Simon Baron-Cohen）2017 年主张，神经多样性把差异视为人类变异的一部分，同时承认支持需求；但标签既能打开资源通道，也可能固化缺陷印象与低期待。",
  claims: ["神经差异呈连续分布而非二分", "诊断标签有助于获取支持", "标签也可能带来污名与决定论", "支持应针对具体需求而非标签"],
  agreements: ["标签具有双刃效应", "特质呈连续分布", "个别化支持重要"],
  disagreements: [
    { topic: "神经多样性框架与医学模型", sides: [{ who: "baron_cohen", view: "差异与支持需求可以并存" }, { who: "辛克莱（Sinclair）", view: "医学模型仍以缺陷为中心，应转向接纳与可及性" }], stake: "资源应投向「治疗差异」还是「消除障碍」" },
    { topic: "诊断与资源分配", sides: [{ who: "baron_cohen", view: "诊断标签是获取支持与资源的必要通道" }, { who: "辛克莱（Sinclair）", view: "以标签分配资源会强化分类，应改造环境本身" }], stake: "特殊教育资源应如何分配" }
  ],
  evidence: [{ text: "Baron-Cohen（2017）神经多样性编者按", doi: null }, { text: "Pellicano 与 den Houting（2022）神经多样性年度综述", doi: null }],
  applications: ["识别：是否把诊断当作能力上限", "纠正：以具体需求与优势设计支持", "与家庭讨论标签的获益与风险"],
  terms: [{ t: "神经多样性", en: "neurodiversity", d: "神经差异作为人类变异的观点" }, { t: "诊断标签", en: "diagnostic label", d: "用于分类与获取服务的名称" }, { t: "连续分布", en: "continuous distribution", d: "特质在人群中渐变分布" }, { t: "个别化支持", en: "individualized support", d: "按具体需求提供的支持" }]
},
E462: {
  definition: "从机制到教学处方的推理链指「发现某脑区参与学习，就据此设计教学法」这一跳跃。鲍尔斯（Jeffrey Bowers）2016 年指出，机制证据需经认知与课堂层面的实验中介，且从有效教学反推机制尤其容易产生错误结论。",
  claims: ["神经机制不能直接推出教学法", "需经认知与课堂实验中介", "反向推理是常见谬误", "不同层级解释不可互相替代"],
  agreements: ["层级间需要中介", "行为与课堂证据优先", "神经证据可作为假设来源"],
  disagreements: [
    { topic: "神经证据的启发价值", sides: [{ who: "bowers", view: "多数情况下神经证据对教学是冗余的" }, { who: "goswami", view: "机制约束能排除无效方法并指导新设计" }], stake: "神经科学应处于教育研究的什么位置" },
    { topic: "反向推理的价值", sides: [{ who: "bowers", view: "由脑活动反推心理过程多为谬误" }, { who: "dehaene", view: "在强约束与多方法汇聚时仍可生成可检验假设" }], stake: "研究设计应否允许反向推理" }
  ],
  evidence: [{ text: "Bowers（2016）教育神经科学的实践与原则问题", doi: null }, { text: "Bruer（1997）教育与脑科学桥接的边界", doi: null }],
  applications: ["识别：「因为激活了某脑区，所以这样教」的论证", "纠正：要求课堂随机对照与重复验证", "把神经科学定位为假设来源而非教学处方"],
  terms: [{ t: "推理链", en: "inference chain", d: "从证据到结论的多步推导" }, { t: "解释层级", en: "levels of explanation", d: "不同分析层次的描述" }, { t: "反向推理", en: "reverse inference", d: "由脑活动反推心理过程" }, { t: "课堂证据", en: "classroom evidence", d: "在真实教学情境中获得的证据" }]
}
});

/* ── 关联网络 ── */
ATLAS.links = (ATLAS.links || []).concat([
["E396","E186","agreement","经验期待可塑性与敏感期描述同一现象：物种典型经验在窗口内对回路塑造最强，窗口后效率下降。","established",1987],
["E396","E187","derivative","纽波特等人的渐变窗口研究把格里诺的经验期待过程操作化为可测量的年龄—成绩曲线。","supported",1990],
["E396","E456","disagreement","经验期待可塑性被商业话语改写为「三岁定终身」；布鲁尔指出这是从动物突触数据到硬截止的误读。","established",1999],
["E397","E186","agreement","分子刹车研究为敏感期提供了机制解释：GABA 抑制成熟开启窗口，周神经元网使其关闭。","supported",2005],
["E397","E229","derivative","关键期绝对化迷思把分子层面的窗口关闭简化为「过期即永久失败」，忽略了可塑性的残余。","supported",2006],
["E398","E186","agreement","单眼剥夺实验是敏感期概念最有力的证据来源，眼优势柱改变显示了经验对皮层接线的塑造。","established",1963],
["E399","E189","agreement","音乐训练的结构差异与髓鞘化、灰质可塑性研究相互印证：长期练习伴随感觉运动通路的改变。","supported",2005],
["E400","E444","agreement","第二语言起始年龄效应与语言关键期的神经证据指向同一组渐变曲线。","supported",2001],
["E400","E441","agreement","两者都表明语言经验会重塑控制与表征网络，但行为层面的普遍优势仍需谨慎。","contested",2017],
["E401","E192","agreement","突触稳态假说为睡眠依赖的记忆巩固提供了细胞层面的解释框架。","supported",2014],
["E401","E409","agreement","慢波睡眠的电生理特征与突触下调假说相互支持：慢波强度反映睡眠压力与突触重整需求。","supported",2006],
["E401","E408","agreement","纺锤—慢波耦合被认为是突触重整与信息转移协调进行的电生理标志。","emerging",2013],
["E402","E189","agreement","程序性学习的自动化阶段与髓鞘化、网络重组的研究相互印证。","supported",2005],
["E403","E432","derivative","共情研究把镜像机制从动作层面延伸到情绪层面，但共享网络的解释仍需行为证据。","contested",2004],
["E403","E437","disagreement","里佐拉蒂主张镜像机制构成动作与语言理解的基础；希科克指出双流模型无需镜像神经元即可解释语音与语义加工。","contested",2009],
["E404","E209","agreement","奖赏预测误差是同一机制在不同条目中的表述：多巴胺信号驱动强化学习与动机。","established",1997],
["E404","E430","agreement","奖赏回路的发育研究以多巴胺预测误差为理论起点，解释青少年对奖赏线索的高反应。","supported",2006],
["E405","E424","agreement","默认模式网络的发现使走神研究从行为描述进入网络层面：任务无关思维对应特定网络配置。","supported",2016],
["E405","E190","disagreement","网络指标支持群体层面的发育差异；但小样本脑—行为关联效应膨胀，个体层面推断仍不可靠。","contested",2022],
["E406","E200","agreement","工作记忆的神经基础与执行功能三成分模型相互对应：刷新成分对应前额—顶叶控制网络。","established",2000],
["E407","E191","agreement","构建性记忆与编码—巩固—提取三阶段模型一致：提取是重建，因而受线索与图式影响。","established",2007],
["E407","E414","agreement","误信息效应是构建性记忆的经典行为证据：事后信息进入重建过程并改变报告。","established",1974],
["E408","E410","agreement","纺锤研究与程序性技能研究都指向 NREM 睡眠在巩固中的作用，但阶段特异性仍受质疑。","supported",2003],
["E409","E192","agreement","慢波睡眠是陈述性记忆巩固的主要睡眠阶段，两者在综述层面相互引用。","established",2006],
["E410","E192","agreement","程序性与陈述性记忆的睡眠依赖巩固共享同一理论框架，但阶段分工仍需检验。","supported",2003],
["E411","E197","agreement","昼夜节律研究与睡眠剥夺研究共同解释青少年睡眠债：相位后移叠加早课导致慢性不足。","established",2007],
["E412","E192","agreement","午睡研究是睡眠依赖巩固的日间版本：短时睡眠即可产生可测的记忆增益。","supported",2003],
["E413","E195","disagreement","遗忘的干扰—提取失败模型认为痕迹仍在；记忆抑制研究主张主动抑制可降低记忆本身的可及性。","contested",2001],
["E413","E196","agreement","主动抑制与再巩固都表明记忆不是固定档案：提取与抑制都能改变后续可及性。","supported",2001],
["E414","E194","disagreement","情绪唤醒增强记忆的主观强度与生动性；误信息研究显示这种增强并不保证准确性。","established",1994],
["E415","E194","disagreement","情绪记忆研究强调唤醒增强巩固；闪光灯记忆研究显示增强的是信心而非准确。","established",2018],
["E416","E417","derivative","负载理论是对早期与晚期选择之争的整合：选择阶段由可用资源决定，而非固定在某一点。","supported",1995],
["E418","E200","agreement","执行功能与学业成就的研究以三成分模型为测量框架，抑制与刷新预测成绩最稳定。","established",2007],
["E418","E206","disagreement","戴蒙德认为综合课程可广泛改善执行功能；欧文的证据显示训练效应多为任务特异，远迁移薄弱。","contested",2010],
["E419","E202","agreement","抑制控制的情境依赖与双系统模型一致：青少年的差异在情绪与同伴情境下最明显。","supported",2011],
["E420","E200","agreement","任务切换代价是转换成分的行为标志，两者在构念与测量上直接对应。","established",2000],
["E421","E205","disagreement","巴克利主张执行缺陷是 ADHD 的核心；索努加-巴克指出延迟厌恶构成独立通路，单一核心覆盖不足。","contested",2003],
["E422","E213","agreement","正念训练对注意与压力的效应在两条目中一致，均强调效应量为小到中等。","supported",2015],
["E423","E182","agreement","屏幕时间研究与儿童发展研究结论一致：内容、情境与替代活动比总时长更能解释差异。","supported",2019],
["E424","E204","agreement","走神的网络关联与默认模式网络研究是同一证据链的不同表述。","established",2015],
["E425","E065","agreement","认知负荷的神经影像证据服务于认知负荷理论，行为证据仍是其主要支撑。","supported",2011],
["E426","E194","disagreement","基本情绪论假设离散类别与固定回路；建构论与情绪记忆研究显示同一脑区参与多种情绪，类别边界依赖概念。","contested",2017],
["E427","E448","agreement","倒 U 形与数学焦虑研究都关注唤醒对复杂任务的影响：过高唤醒占用工作记忆并损害表现。","supported",2012],
["E428","E202","agreement","杏仁核—前额发育时序是双系统模型的神经发育基础，两者对青少年风险行为的解释一致。","supported",2010],
["E430","E202","agreement","奖赏回路的青春期敏感性与双系统模型的社会情绪系统早熟假设相互印证。","supported",2006],
["E431","E212","agreement","催产素研究与社会联结的神经内分泌研究共享同一分子通路，但外源给药效应需谨慎。","supported",2012],
["E431","E432","agreement","催产素与社会显著性、共情研究都指向社会线索的优先加工，效应均受情境调节。","contested",2012],
["E433","E208","agreement","慢性压力对海马的影响与毒性压力框架一致：长期皮质醇升高损害可塑性。","supported",2009],
["E434","E211","agreement","情绪调节训练与前额—杏仁核回路研究描述同一机制：自上而下的下调可被练习改变。","supported",2012],
["E435","E208","agreement","学校氛围研究与毒性压力研究共同强调不可控压力与支持性关系的交互。","supported",2016],
["E436","E181","agreement","语音范畴知觉研究为对话式阅读提供机制支持：丰富的面对面语言互动促进语音表征。","supported",2004],
["E437","E216","agreement","词汇学习的双流模型与阅读网络研究共享腹侧语义通路与背侧语音通路的架构。","supported",2012],
["E438","E214","agreement","句法加工的脑区研究延续了布洛卡区传统，并把额下回细分为句法与序列加工成分。","established",2011],
["E438","E159","disagreement","弗里德里奇主张存在相对专门的句法网络；生成语法与用法取向对句法的模块性判断不同，后者强调使用与统计学习。","contested",2011],
["E439","E217","agreement","阅读通路发育与阅读障碍研究都指向语音—字形映射网络的关键作用。","established",2015],
["E440","E217","agreement","早期预测研究以阅读障碍的语音缺陷机制为基础，把识别窗口前移到学前。","supported",2011],
["E441","E218","disagreement","双语控制研究确认语言管理调用执行网络；但双语优势的行为效应量小且不一致，不能作为教育承诺。","contested",2017],
["E442","E220","agreement","手语的半球组织与语言脑可塑性研究共同证明：语言区由功能需求决定，而非感觉通道。","established",1990],
["E443","E219","agreement","语言与音乐的共享加工建立在语音听觉通路研究之上，节奏与语音共享时间加工资源。","supported",2008],
["E444","E187","agreement","语言关键期的神经证据支持渐变敏感期而非硬性截止，与关键期证据限度的结论一致。","established",2002],
["E445","E221","agreement","顶内沟的数量选择性与近似数量系统的行为证据相互印证。","established",2003],
["E446","E225","agreement","数感训练研究以计算障碍的核心数量缺陷为干预靶点，迁移效应有限但方向一致。","supported",2011],
["E447","E222","agreement","事实提取网络与三重编码模型都主张符号算术需要语言与数量表征的协同。","supported",2011],
["E448","E223","agreement","数学焦虑的生理指标与工作记忆占用机制是同一循环的两个测量层面。","established",2012],
["E449","E225","agreement","计算障碍的亚型研究扩展了核心数量缺陷模型，指出需区分程序性与事实提取缺陷。","supported",2019],
["E450","E226","agreement","空间训练与 STEM 研究结论一致：空间能力可训练，但对数学的迁移效应较小。","supported",2013],
["E451","E222","agreement","符号数学的脑可塑性说明三重编码中的符号表征会随教育经验重组。","supported",2008],
["E452","E221","agreement","早期数量经验的具身基础为近似数量系统提供了发展起点，两者在婴儿研究中相互引用。","supported",2004],
["E453","E065","agreement","代数学习的负荷分析与认知负荷理论共享同一组设计原则：样例、分段与减少搜索。","established",2011],
["E454","E231","agreement","学习风格迷思是教师中神经迷思的典型代表，两条目使用同一批调查证据。","established",2012],
["E454","E030","disagreement","差异化教学按准备度与兴趣调整路径；学习风格匹配按感知偏好分组，后者缺乏证据，二者不应混同。","established",2008],
["E455","E227","agreement","左右脑迷思与裂脑研究的关系是误读：半球分工存在，但不能推出学习类型。","established",2014],
["E456","E229","agreement","关键期迷思与关键期绝对化迷思是同一错误在早教市场的两种表现。","established",1999],
["E457","E230","agreement","脑训练产业批评与健脑游戏宣称批评指向同一证据缺口：训练任务提升不等于远迁移。","established",2015],
["E457","E206","agreement","两条目都指出认知训练的远迁移证据薄弱，商业宣称常超出数据。","established",2010],
["E458","E232","agreement","神经科学误用与心智—脑—教育桥接的边界讨论同一问题：跨层级推论缺少中介。","established",2016],
["E458","E462","agreement","误用的根源是从机制到教学处方的推理跳跃，两者是同一批判的理论与实践两面。","established",2016],
["E459","E461","agreement","伦理边界与神经多样性都关注标签的社会后果：分类既提供资源，也可能固化低期待。","supported",2019],
["E460","E456","agreement","家长焦虑的营销与关键期迷思共享同一叙事结构：把渐变窗口改写为倒计时。","established",2002],
["E462","E232","agreement","从机制到教学处方的推理链，是心智—脑—教育桥接边界的具体化。","established",2016]
]);
