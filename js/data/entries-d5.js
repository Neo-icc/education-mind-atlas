/* ============================================================
   脑科学与学习 · 详解条目（E183–E232）
   科学口径：区分机制证据与教学推论，标注证据限度。
   ============================================================ */
window.ATLAS = window.ATLAS || {};
ATLAS.details = Object.assign(ATLAS.details || {}, {

E183: {
  definition: "赫布学习规则由加拿大心理学家唐纳德·赫布（Donald Hebb）1949 年在《行为的组织》中提出：当突触前神经元反复或持续地参与激活突触后神经元时，该突触的连接效能会增强。它给出了「经验如何改变神经连接」的第一个可检验假设。",
  claims: ["学习在细胞层面表现为突触效能的改变", "同时激活是连接增强的关键条件", "记忆分布于神经元集群 而非单个位置", "神经回路可因经验而重组"],
  agreements: ["突触可塑性是学习与记忆的细胞基础", "赫布规则能解释联结学习与经典条件作用的生理机制", "长时程增强被视为赫布规则的实现形式之一"],
  disagreements: [
    { topic: "赫布规则的充分性", sides: [{ who: "hebb", view: "同时激活即可增强连接，足以解释联结学习" }, { who: "bliss_lomo", view: "真实突触还需时序、调质与抑制参与，规则过于简化" }], stake: "单一规则能否解释真实神经网络中的选择性学习" }
  ],
  evidence: [{ text: "Hebb《行为的组织》（1949）提出细胞联合假设", doi: null }, { text: "Bliss 与 Lømo（1973）在海马发现长时程增强，提供生理对应", doi: null }],
  applications: ["设计需要「同时激活」的多通道学习活动", "把新旧知识放在同一任务中反复共同激活", "用联结式练习建立自动化基础，但避免只停留于此"],
  terms: [{ t: "赫布规则", en: "Hebbian rule", d: "同时激活的神经元之间连接增强" }, { t: "细胞联合", en: "cell assembly", d: "由共同激活形成的功能神经元群" }, { t: "突触效能", en: "synaptic efficacy", d: "信号跨突触传递的强度" }, { t: "长时程增强", en: "LTP", d: "高频刺激后突触效能持久增强" }]
},
E184: {
  definition: "长时程增强（LTP）指高频或配对刺激后，突触传递效能持久提升的现象，1973 年由布利斯（Tim Bliss）与勒莫（Terje Lømo）在兔海马首次系统报告。它具备输入特异性、协同性与持久性，被视为学习记忆最有力的细胞模型。",
  claims: ["LTP 具有输入特异性，只增强被激活的通路", "LTP 需要协同激活与去极化达到阈值", "NMDA 受体是触发 LTP 的关键分子开关", "LTP 可维持数小时到数周，与记忆时程匹配"],
  agreements: ["LTP 是学习记忆的重要细胞机制", "NMDA 受体在 LTP 诱导中不可替代", "LTP 与 LTD 共同构成双向可塑性"],
  disagreements: [
    { topic: "LTP 与学习的因果性", sides: [{ who: "bliss_lomo", view: "LTP 是记忆形成的核心机制，二者高度对应" }, { who: "wixted", view: "相关不等于因果，LTP 更可能是必要非充分条件" }], stake: "阻断 LTP 是否必然阻断学习，反之是否成立" }
  ],
  evidence: [{ text: "Bliss 与 Lømo（1973）兔海马穿通纤维高频刺激实验", doi: null }, { text: "Morris 等（1986）NMDA 受体阻断损害空间学习", doi: null }],
  applications: ["避免用「一次性灌输」替代需要重复激活的学习", "把练习分散到多次以支持持久化", "理解睡眠与间隔对巩固的作用"],
  terms: [{ t: "长时程增强", en: "LTP", d: "持续数小时以上的突触效能提升" }, { t: "长时程抑制", en: "LTD", d: "低频刺激导致的突触效能下降" }, { t: "NMDA 受体", en: "NMDA receptor", d: "兼具配体与电压门控的谷氨酸受体" }, { t: "输入特异性", en: "input specificity", d: "只有被激活的通路被增强" }]
},
E185: {
  definition: "突触修剪指发育早期突触大量过度生成，随后依据使用经验选择性消除多余连接的过程。胡滕洛赫尔（Peter Huttenlocher）1979 年的定量研究显示，人脑皮层突触密度在出生后上升、青春期前回落至成人水平。",
  claims: ["发育早期突触数量远超成人", "修剪依据活动依赖的选择机制", "修剪使神经网络由冗余转为高效", "不同脑区修剪时序不同，前额叶最晚"],
  agreements: ["突触修剪是正常发育的必要环节", "经验影响哪些连接被保留", "修剪异常与多种神经发育障碍相关"],
  disagreements: [
    { topic: "修剪的被动与主动", sides: [{ who: "huttenlocher", view: "修剪主要由不用则退的被动竞争决定" }, { who: "giedd", view: "修剪受主动的胶质与免疫信号调控，具程序性" }], stake: "修剪是竞争淘汰还是基因编排的主动过程" }
  ],
  evidence: [{ text: "Huttenlocher（1979）人脑皮层突触密度终身变化", doi: null }, { text: "Huttenlocher 与 Dabholkar（1997）前额叶修剪延至青春期", doi: null }],
  applications: ["为儿童提供丰富但不过载的经验环境", "理解青少年前额叶功能尚未成熟", "避免把「用进废退」误读为越早越多训练越好"],
  terms: [{ t: "突触修剪", en: "synaptic pruning", d: "按使用经验消除多余突触" }, { t: "过度生成", en: "overproduction", d: "发育早期突触数量超出成人" }, { t: "活动依赖", en: "activity-dependent", d: "由神经活动决定保留或消除" }, { t: "皮层成熟时序", en: "cortical maturation", d: "不同脑区先后成熟的顺序" }]
},
E186: {
  definition: "敏感期指某些经验在特定发育窗口内对神经回路塑造作用最强的时期；经验依赖可塑性则指回路按个体实际经验调整。休伯尔与威塞尔 1963 年的视觉剥夺实验证明，单眼遮蔽会导致视皮层眼优势柱不可逆重组。",
  claims: ["视觉、听觉与语言系统存在经验敏感窗口", "窗口内经验塑造效应最强，窗口后效率下降", "可塑性并非在窗口关闭后消失", "剥夺与丰富经验都能改变回路结构"],
  agreements: ["早期感觉经验对回路形成至关重要", "敏感期存在跨物种与跨系统的普遍性", "窗口后仍保留一定程度可塑性"],
  disagreements: [
    { topic: "窗口的刚性", sides: [{ who: "hubel_wiesel", view: "关键期一旦关闭，相应功能难以恢复" }, { who: "knudsen", view: "多数系统是渐变窗口，后期干预仍有效只是效率低" }], stake: "「关键期」应理解为硬性截止还是概率下降" }
  ],
  evidence: [{ text: "Hubel 与 Wiesel（1963）猫单眼剥夺实验", doi: null }, { text: "Knudsen（2004）敏感期经济学的跨系统综述", doi: null }],
  applications: ["重视早期听觉与语言经验的质量", "对错过窗口的儿童仍应提供系统干预", "避免用敏感期制造家长焦虑"],
  terms: [{ t: "敏感期", en: "sensitive period", d: "经验塑造效应最强的发育窗口" }, { t: "经验依赖可塑性", en: "experience-dependent plasticity", d: "按个体经验调整回路" }, { t: "眼优势柱", en: "ocular dominance column", d: "视皮层中按输入眼分化的柱状结构" }, { t: "剥夺实验", en: "deprivation paradigm", d: "通过去除经验检验其必要性" }]
},
E187: {
  definition: "关键期研究在视觉、听觉、语言与依恋等领域积累了大量证据，但近二十年综述强调：绝大多数系统并非「全或无」的截止，而是呈现窗口内效率最高、随后逐渐下降的渐变曲线，且受经验类型与个体差异调节。",
  claims: ["严格意义上的硬性关键期仅见于少数系统", "多数系统表现为渐变的敏感期", "窗口后学习需要更多努力与不同策略", "证据多来自剥夺与晚期干预研究"],
  agreements: ["早期经验重要但非唯一决定因素", "语言与视觉系统的窗口证据最强", "晚期干预仍能产生实质改善"],
  disagreements: [
    { topic: "关键期话语的使用", sides: [{ who: "knudsen", view: "应保留关键期概念以描述强窗口现象" }, { who: "goswami", view: "教育语境滥用关键期会造成误导与资源错配" }], stake: "科学概念如何在不失真的前提下进入教育话语" }
  ],
  evidence: [{ text: "Newport（1990）第二语言起始年龄与最终语法水平", doi: null }, { text: "Knudsen（2004）敏感期机制综述", doi: null }],
  applications: ["早期提供高质量语言与感官经验", "对晚期学习者设计更显性、更密集的支持", "在政策沟通中避免「错过即失败」的表述"],
  terms: [{ t: "关键期", en: "critical period", d: "经验不可或缺的严格时间窗" }, { t: "渐变窗口", en: "graded window", d: "效率随年龄平滑下降的敏感期" }, { t: "晚期干预", en: "late intervention", d: "窗口后实施的补偿性训练" }, { t: "经验期待", en: "experience-expectant", d: "期待物种典型经验的可塑性" }]
},
E188: {
  definition: "成年神经发生指成年个体海马齿状回仍持续产生新神经元。古尔德（Elizabeth Gould）等 1999 年的研究在灵长类中报告了这一现象，挑战了「成年后不再产生新神经元」的教条，但其在人类中的规模与功能仍有争议。",
  claims: ["啮齿类与部分灵长类成年海马存在神经发生", "新生神经元参与模式分离与情绪调节", "应激与运动可调节神经发生速率", "人类成年神经发生的证据仍在争论"],
  agreements: ["动物模型中的成年神经发生已被确认", "神经发生与学习、应激存在功能关联", "环境丰富化可促进神经发生"],
  disagreements: [
    { topic: "人类成年神经发生", sides: [{ who: "gould", view: "人类成年海马持续产生新神经元且具功能意义" }, { who: "sorrells", view: "人类成年后神经发生迅速下降，近乎停滞" }], stake: "方法学差异导致结论相反，人类样本证据尚不稳固" }
  ],
  evidence: [{ text: "Gould 等（1999）成年猕猴海马神经发生", doi: null }, { text: "Sorrells 等（2018）人类海马神经发生随年龄急剧下降", doi: null }],
  applications: ["把运动与睡眠作为支持脑健康的基础条件", "谨慎对待「增长脑细胞」类商业宣称", "理解情绪与压力对学习状态的影响"],
  terms: [{ t: "神经发生", en: "neurogenesis", d: "新神经元的产生过程" }, { t: "齿状回", en: "dentate gyrus", d: "海马中持续产生新神经元的区域" }, { t: "模式分离", en: "pattern separation", d: "区分相似记忆表征的能力" }, { t: "环境丰富化", en: "environmental enrichment", d: "提供更复杂刺激与活动的生活条件" }]
},
E189: {
  definition: "髓鞘化指少突胶质细胞包裹轴突形成髓鞘，提升动作电位传导速度与放电同步性。这一过程从出生持续到成年早期，是技能由笨拙走向流畅、由有意识控制走向自动化的生理基础之一。",
  claims: ["髓鞘化提升传导速度与 timing 精度", "髓鞘化随经验与练习继续到成年", "同步放电支持网络整合", "不同通路的髓鞘化时序不同"],
  agreements: ["髓鞘化是技能自动化的重要基础", "练习可影响相关通路的髓鞘形成", "髓鞘损伤导致传导与功能缺陷"],
  disagreements: [
    { topic: "髓鞘化的经验依赖性", sides: [{ who: "fields", view: "活动可驱动少突胶质细胞前体分化，髓鞘化具经验依赖" }, { who: "giedd", view: "髓鞘化主要由遗传时序驱动，经验作用有限" }], stake: "训练能否改变白质结构，效应有多大" }
  ],
  evidence: [{ text: "Fields（2008）白质可塑性综述", doi: null }, { text: "Bengtsson 等（2005）钢琴练习与白质结构变化", doi: null }],
  applications: ["给技能练习足够的重复量以支持自动化", "理解青少年反应时与抑制控制的成熟过程", "把复杂技能分解为可反复练习的单元"],
  terms: [{ t: "髓鞘", en: "myelin sheath", d: "包裹轴突的脂质结构" }, { t: "少突胶质细胞", en: "oligodendrocyte", d: "中枢神经系统中形成髓鞘的胶质细胞" }, { t: "传导速度", en: "conduction velocity", d: "动作电位沿轴突传播的速率" }, { t: "白质", en: "white matter", d: "富含髓鞘化轴突的神经组织" }]
},
E190: {
  definition: "脑发育的个体差异指皮层厚度、白质结构与网络连接的成熟轨迹在同龄儿童间存在显著离散。吉德（Jay Giedd）等基于纵向 MRI 的研究显示，前额叶成熟可跨越十余年，且个体间差异远大于群体平均曲线所暗示的程度。",
  claims: ["同龄儿童的脑成熟水平差异显著", "皮层厚度呈倒 U 形发展轨迹", "成熟时序与行为与学业能力相关", "群体平均曲线不能代表个体"],
  agreements: ["脑发育存在显著个体差异", "前额叶与颞叶成熟持续到二十多岁", "发育轨迹受遗传与环境共同影响"],
  disagreements: [
    { topic: "用脑龄推断个体", sides: [{ who: "giedd", view: "脑成熟指标可辅助理解个体差异" }, { who: "dehaene", view: "个体脑指标误差大，不宜用于教育分流或诊断" }], stake: "群体统计规律能否下推到个体决策" }
  ],
  evidence: [{ text: "Giedd 等（1999）儿童青少年脑发育纵向 MRI", doi: null }, { text: "Gogtay 等（2004）皮层成熟时序的纵向成像", doi: null }],
  applications: ["避免用「脑龄」给学生贴标签", "按实际表现而非年龄假设提供支持", "理解同一班级内的发展差异是常态"],
  terms: [{ t: "皮层厚度", en: "cortical thickness", d: "灰质皮层的厚度指标" }, { t: "倒 U 形轨迹", en: "inverted-U trajectory", d: "先增厚后变薄的发育曲线" }, { t: "纵向成像", en: "longitudinal imaging", d: "对同一批个体多次扫描" }, { t: "脑龄", en: "brain age", d: "由影像估计的脑成熟程度" }]
},
E191: {
  definition: "记忆通常被分为编码、巩固与提取三个阶段：编码把经验转化为神经表征，巩固在离线期稳定并整合痕迹，提取则依线索重建记忆。麦高（James McGaugh）2000 年的综述强调，三阶段各自受不同因素调节，干扰任一阶段都会影响最终表现。",
  claims: ["编码质量取决于注意与加工深度", "巩固需要时间与离线加工", "提取是重建而非读取", "情绪唤醒主要调节巩固阶段"],
  agreements: ["记忆是三阶段而非单一过程", "注意与加工深度影响编码", "巩固依赖时间与睡眠"],
  disagreements: [
    { topic: "提取的性质", sides: [{ who: "mcgaugh", view: "提取是依线索的再激活过程" }, { who: "wixted", view: "提取失败主要源于干扰与线索不足，而非痕迹消失" }], stake: "遗忘是存储问题还是提取问题" }
  ],
  evidence: [{ text: "McGaugh（2000）记忆巩固与情绪唤醒综述", doi: null }, { text: "Craik 与 Lockhart（1972）加工深度与保持", doi: null }],
  applications: ["保证编码阶段的注意与意义加工", "为巩固安排间隔与睡眠", "用多样化线索练习提取而非反复阅读"],
  terms: [{ t: "编码", en: "encoding", d: "把经验转化为神经表征" }, { t: "巩固", en: "consolidation", d: "离线期稳定并整合记忆痕迹" }, { t: "提取", en: "retrieval", d: "依线索重建记忆" }, { t: "加工深度", en: "depth of processing", d: "对材料意义加工的深入程度" }]
},
E192: {
  definition: "睡眠与记忆巩固研究显示，慢波睡眠对陈述性记忆的巩固尤为关键，REM 睡眠则参与程序性与情绪记忆的整合。沃克（Matthew Walker）等 2004 年的实验表明，睡眠中的海马—皮层重放与学习后成绩提升相关。",
  claims: ["睡眠促进陈述性记忆巩固", "慢波睡眠与海马重放相关", "REM 参与程序性与情绪记忆", "睡眠剥夺削弱编码与巩固"],
  agreements: ["睡眠对记忆巩固有因果性贡献", "不同睡眠阶段服务不同记忆类型", "学习后睡眠能提升保持"],
  disagreements: [
    { topic: "阶段特异性", sides: [{ who: "walker_m", view: "慢波与 REM 分工明确，分别服务陈述性与程序性记忆" }, { who: "wixted", view: "阶段分工被过度简化，多数效应来自整体睡眠而非特定阶段" }], stake: "是否需要针对睡眠阶段做精准干预" }
  ],
  evidence: [{ text: "Walker 与 Stickgold（2004）睡眠依赖的记忆巩固", doi: null }, { text: "Rasch 与 Born（2013）睡眠中的记忆重放综述", doi: null }],
  applications: ["保证学生充足睡眠而非压缩睡眠补习", "把重要学习安排在睡眠前", "避免用熬夜作为应考策略"],
  terms: [{ t: "慢波睡眠", en: "slow-wave sleep", d: "以低频高幅脑电为特征的深睡" }, { t: "REM 睡眠", en: "REM sleep", d: "快速眼动睡眠阶段" }, { t: "记忆重放", en: "replay", d: "睡眠中海马重复激活白天序列" }, { t: "睡眠依赖巩固", en: "sleep-dependent consolidation", d: "依赖睡眠的记忆稳定过程" }]
},
E193: {
  definition: "系统巩固理论认为，新记忆最初依赖海马，随时间推移逐渐转移到新皮层，形成不依赖海马的远程记忆痕迹。斯奎尔（Larry Squire）等基于遗忘症患者与动物实验提出了这一标准模型。",
  claims: ["新异记忆初始依赖海马", "重复激活促成皮层表征的形成", "远程记忆可脱离海马独立提取", "巩固过程以年为单位持续"],
  agreements: ["海马在记忆初始形成中不可替代", "时间与重复促进皮层化", "遗忘症患者呈现时间梯度性遗忘"],
  disagreements: [
    { topic: "海马是否永久必要", sides: [{ who: "squire", view: "远程记忆最终可脱离海马" }, { who: "nadel", view: "海马始终参与情景记忆的细节提取，标准模型过度简化" }], stake: "海马在远程记忆中是暂时支架还是长期参与者" }
  ],
  evidence: [{ text: "Squire（2004）记忆系统与巩固综述", doi: null }, { text: "Scoville 与 Milner（1957）H.M. 病例", doi: null }],
  applications: ["用间隔与重复促进长期保持", "把新知识与已有网络关联以支持皮层整合", "理解情景细节与概括知识的不同保持曲线"],
  terms: [{ t: "系统巩固", en: "systems consolidation", d: "记忆从海马转移到皮层的长期过程" }, { t: "远程记忆", en: "remote memory", d: "形成已久、较不依赖海马的记忆" }, { t: "时间梯度", en: "temporal gradient", d: "越久远记忆受损越轻的现象" }, { t: "情景记忆", en: "episodic memory", d: "关于具体事件与情境的记忆" }]
},
E194: {
  definition: "情绪记忆与杏仁核研究表明，杏仁核通过调节海马与其他脑区的巩固过程，使高情绪唤醒的事件记得更强。勒杜（Joseph LeDoux）的恐惧条件化工作揭示了杏仁核在情绪学习中的核心地位。",
  claims: ["杏仁核调节情绪唤醒对记忆的增强", "恐惧可经皮层下通路快速习得", "情绪唤醒主要作用于巩固而非编码", "高唤醒记忆更强但也更易被重构扭曲"],
  agreements: ["杏仁核是情绪学习的关键枢纽", "情绪唤醒增强记忆巩固", "恐惧学习可发生在意识之外"],
  disagreements: [
    { topic: "情绪记忆的准确性", sides: [{ who: "ledoux", view: "情绪增强记忆的强度与生动性" }, { who: "wixted", view: "增强的是主观确信而非客观准确，闪光灯记忆常出错" }], stake: "强度与准确性是否同步提升" }
  ],
  evidence: [{ text: "LeDoux（1996）情绪脑", doi: null }, { text: "Cahill 与 McGaugh（1998）杏仁核与情绪记忆调节", doi: null }],
  applications: ["用适度情绪投入提升学习记忆", "避免用恐惧与羞辱作为课堂管理手段", "对创伤性经验提供情绪支持与重构机会"],
  terms: [{ t: "杏仁核", en: "amygdala", d: "处理威胁与情绪显著性的关键脑区" }, { t: "情绪唤醒", en: "emotional arousal", d: "情绪激活的生理强度" }, { t: "恐惧条件化", en: "fear conditioning", d: "中性线索与威胁配对形成恐惧" }, { t: "闪光灯记忆", en: "flashbulb memory", d: "对重大事件生动但未必准确的记忆" }]
},
E195: {
  definition: "遗忘的机制存在两条主线：痕迹消退与干扰/提取失败。威克斯特德（John Wixted）2004 年的综述指出，大量证据支持遗忘主要是提取失败与相似表征间的干扰，而非记忆痕迹简单消失；线索匹配因此成为关键。",
  claims: ["遗忘主要是提取失败而非痕迹消失", "前摄与倒摄干扰是主要来源", "线索匹配决定提取成败", "再学习速度快于初学说明痕迹仍存"],
  agreements: ["干扰是遗忘的主要机制之一", "提取线索对保持至关重要", "遗忘曲线可由干扰解释"],
  disagreements: [
    { topic: "消退与干扰", sides: [{ who: "ebbinghaus", view: "遗忘随时间自然消退，呈指数曲线" }, { who: "wixted", view: "曲线形状可由干扰与线索竞争解释，未必是消退" }], stake: "时间是直接原因还是干扰累积的代理变量" }
  ],
  evidence: [{ text: "Wixted（2004）遗忘心理学与神经科学综述", doi: null }, { text: "Ebbinghaus（1885）遗忘曲线", doi: null }],
  applications: ["用多样化线索与情境练习提取", "把相似内容分开学习以减少干扰", "定期复习并配合再学习"],
  terms: [{ t: "前摄干扰", en: "proactive interference", d: "旧学习干扰新学习" }, { t: "倒摄干扰", en: "retroactive interference", d: "新学习干扰旧保持" }, { t: "提取失败", en: "retrieval failure", d: "痕迹仍在但线索不足" }, { t: "再学习节省", en: "savings", d: "重学比初学更快，说明痕迹残留" }]
},
E196: {
  definition: "再巩固指已巩固的记忆在被提取后短暂进入不稳定状态，需要重新稳定化，期间可被修改。纳德（Karim Nader）2000 年的实验显示，提取后阻断蛋白质合成可消除恐惧记忆，挑战了「巩固后即固定」的观点。",
  claims: ["提取可使记忆重新变得不稳定", "再巩固窗口内记忆可被更新", "再巩固具有边界条件与时程限制", "该机制为错误概念矫正提供窗口"],
  agreements: ["记忆并非一次巩固后永久固定", "再巩固在动物模型中证据充分", "再巩固与巩固共享部分分子机制"],
  disagreements: [
    { topic: "人类再巩固的稳健性", sides: [{ who: "nader", view: "人类记忆同样存在可操作的再巩固窗口" }, { who: "wixted", view: "人类再巩固效应不稳定，受边界条件严格限制" }], stake: "能否据此设计临床与教学干预" }
  ],
  evidence: [{ text: "Nader 等（2000）提取后阻断蛋白质合成消除恐惧记忆", doi: null }, { text: "Schiller 等（2010）人类恐惧记忆的再巩固干预", doi: null }],
  applications: ["在纠正错误概念前先激活它", "利用提取后的窗口提供正确反馈", "对创伤记忆干预保持谨慎与伦理审查"],
  terms: [{ t: "再巩固", en: "reconsolidation", d: "提取后记忆重新稳定的过程" }, { t: "不稳定窗口", en: "lability window", d: "记忆可被修改的短暂时期" }, { t: "边界条件", en: "boundary conditions", d: "效应成立所需的前提" }, { t: "恐惧消退", en: "fear extinction", d: "新学习抑制旧恐惧反应" }]
},
E197: {
  definition: "睡眠剥夺研究显示，睡眠不足会显著损害注意持续、工作记忆与情绪调节，并降低学习效率与学业成绩。林（June Lim）与丁格斯（David Dinges）2008 年的综述指出，慢性部分剥夺的累积效应常被个体低估。",
  claims: ["睡眠剥夺损害持续注意与警觉", "慢性部分剥夺的效应会累积", "睡眠不足削弱记忆巩固", "个体对自身受损程度普遍低估"],
  agreements: ["睡眠不足损害认知表现", "青少年普遍存在睡眠不足", "推迟上学时间可改善出勤与成绩"],
  disagreements: [
    { topic: "补觉能否完全补偿", sides: [{ who: "lim", view: "补觉可部分恢复警觉，但巩固损失难以完全弥补" }, { who: "walker_m", view: "关键期错过的巩固窗口不可追溯，补偿有限" }], stake: "周末补觉是否足以抵消周内亏欠" }
  ],
  evidence: [{ text: "Lim 与 Dinges（2008）睡眠剥夺与认知功能综述", doi: null }, { text: "Dewald 等（2010）推迟上学时间与青少年睡眠", doi: null }],
  applications: ["把睡眠纳入学习计划而非对立面", "避免考前熬夜", "学校层面考虑推迟早晨上课时间"],
  terms: [{ t: "睡眠剥夺", en: "sleep deprivation", d: "睡眠时间不足或质量受损" }, { t: "持续注意", en: "sustained attention", d: "长时间维持警觉的能力" }, { t: "睡眠债", en: "sleep debt", d: "累积的睡眠亏欠" }, { t: "昼夜节律", en: "circadian rhythm", d: "约 24 小时的内源生理周期" }]
},
E198: {
  definition: "运动与脑健康研究显示，有氧运动可提升脑源性神经营养因子（BDNF）、改善执行功能与情绪状态。希尔曼（Charles Hillman）等 2008 年的研究在儿童样本中发现，体适能与认知控制及学业表现呈正相关。",
  claims: ["有氧运动提升 BDNF 与神经可塑性", "运动改善执行功能与注意", "体适能与学业表现呈小到中等正相关", "单次运动即可短暂提升认知状态"],
  agreements: ["规律运动对脑与认知有益", "运动改善情绪与睡眠", "儿童体适能与认知存在关联"],
  disagreements: [
    { topic: "对学业成绩的效应量", sides: [{ who: "hillman", view: "运动干预能实质提升认知与学业表现" }, { who: "hattie", view: "对学业成绩的平均效应较小，不宜作为主要干预" }], stake: "运动应被视为学业干预还是健康基础" }
  ],
  evidence: [{ text: "Hillman 等（2008）儿童体适能与执行控制", doi: null }, { text: "Ericsson 与 Kramer（2009）有氧运动与认知综述", doi: null }],
  applications: ["把体育活动纳入日常课表", "用课间运动改善后续注意状态", "把运动定位为健康与学习状态的基础而非提分工具"],
  terms: [{ t: "BDNF", en: "brain-derived neurotrophic factor", d: "支持神经元存活与可塑性的蛋白" }, { t: "执行功能", en: "executive function", d: "抑制、刷新与转换等高阶控制" }, { t: "体适能", en: "physical fitness", d: "心肺、力量与灵活性等身体能力" }, { t: "认知控制", en: "cognitive control", d: "目标导向行为的调控能力" }]
},
E199: {
  definition: "注意网络理论由波斯纳（Michael Posner）于 1990 年代提出，把注意分为警觉、定向与执行控制三个相对独立的网络，各有不同的神经基础与神经调质，并可通过专门任务分别测量。",
  claims: ["注意由三个可分离的网络构成", "警觉网络维持整体唤醒水平", "定向网络负责空间与特征选择", "执行控制网络解决冲突与抑制干扰"],
  agreements: ["注意不是单一能力而是多成分系统", "三个网络有可分离的神经基础", "注意能力可通过训练部分改善"],
  disagreements: [
    { topic: "网络的独立性", sides: [{ who: "posner", view: "三网络在行为与神经层面均可分离" }, { who: "miyake", view: "实际任务中三网络高度交互，独立划分有简化风险" }], stake: "分离是测量便利还是真实架构" }
  ],
  evidence: [{ text: "Posner 与 Petersen（1990）注意系统综述", doi: null }, { text: "Fan 等（2002）注意网络测验（ANT）", doi: null }],
  applications: ["区分是警觉不足还是抑制困难", "针对具体注意成分设计训练", "减少课堂中无关干扰以保护定向资源"],
  terms: [{ t: "警觉网络", en: "alerting network", d: "维持唤醒与警觉状态的系统" }, { t: "定向网络", en: "orienting network", d: "选择空间与特征信息的系统" }, { t: "执行控制", en: "executive control", d: "解决冲突与抑制分心的系统" }, { t: "注意网络测验", en: "ANT", d: "分离测量三种注意成分的任务" }]
},
E200: {
  definition: "三成分模型由三宅（Akira Miyake）等 2000 年提出，通过潜变量分析把执行功能分为抑制、工作记忆刷新与认知灵活转换三个可分离但相关的成分，成为该领域最常用的理论框架。",
  claims: ["执行功能可分离为三个成分", "抑制控制压制优势反应", "刷新持续更新工作记忆内容", "转换在任务规则间灵活切换"],
  agreements: ["三成分结构得到多项验证", "执行功能预测学业与社会适应", "各成分发展轨迹不同"],
  disagreements: [
    { topic: "是否存在统一执行资源", sides: [{ who: "miyake", view: "三成分可分离，但共享部分共同变异" }, { who: "diamond", view: "实际干预中三成分高度耦合，分离的实践意义有限" }], stake: "训练一个成分能否迁移到其他成分" }
  ],
  evidence: [{ text: "Miyake 等（2000）执行功能统一性与多样性", doi: null }, { text: "Diamond（2013）执行功能年度综述", doi: null }],
  applications: ["把复杂任务拆解以降低刷新负荷", "用规则切换游戏训练灵活性", "为抑制困难学生提供外部提示与结构"],
  terms: [{ t: "抑制控制", en: "inhibitory control", d: "压制自动化或优势反应" }, { t: "刷新", en: "updating", d: "持续替换工作记忆中的内容" }, { t: "认知转换", en: "shifting", d: "在任务或规则间灵活切换" }, { t: "潜变量分析", en: "latent variable analysis", d: "从多指标中提取共同成分" }]
},
E201: {
  definition: "前额叶发育研究显示，前额叶皮层及其与皮层下结构的连接持续成熟到二十多岁。吉德（Jay Giedd）等纵向成像研究发现，前额叶灰质体积呈倒 U 形变化，白质连接则持续增强。",
  claims: ["前额叶成熟持续到二十多岁", "灰质体积呈先增后减的倒 U 形", "白质连接随年龄持续增强", "前额叶与皮层下成熟时序不同步"],
  agreements: ["前额叶是最后成熟的脑区之一", "青少年抑制与规划能力仍在发展", "成熟时序存在个体差异"],
  disagreements: [
    { topic: "成熟与责任的对应", sides: [{ who: "giedd", view: "脑成熟数据可支持对青少年能力的理解" }, { who: "steinberg", view: "脑成熟不应直接用于法律与政策划线，需结合行为证据" }], stake: "神经发育证据能否直接支撑年龄界限" }
  ],
  evidence: [{ text: "Giedd 等（1999）儿童青少年脑发育纵向 MRI", doi: null }, { text: "Gogtay 等（2004）皮层成熟时序", doi: null }],
  applications: ["为青少年提供外部结构与明确边界", "把长期规划任务分解为短期步骤", "理解风险行为的发育背景而非简单归因于态度"],
  terms: [{ t: "前额叶皮层", en: "prefrontal cortex", d: "负责规划、抑制与决策的脑区" }, { t: "灰质", en: "gray matter", d: "以神经元胞体为主的组织" }, { t: "白质", en: "white matter", d: "以髓鞘化轴突为主的组织" }, { t: "倒 U 形", en: "inverted-U", d: "先升后降的变化曲线" }]
},
E202: {
  definition: "双系统模型由斯坦伯格（Laurence Steinberg）2008 年系统提出：社会情绪系统在青春期早期迅速激活，而认知控制系统成熟较晚，二者发育时程的错配使青少年在情绪唤醒与同伴在场时更易冒险。",
  claims: ["社会情绪系统早于认知控制系统成熟", "两系统张力在青春期中期达到峰值", "同伴在场显著提高青少年风险偏好", "风险行为随年龄呈倒 U 形"],
  agreements: ["青少年风险行为有发育基础", "同伴影响在青春期尤其强", "认知控制仍在发展"],
  disagreements: [
    { topic: "双系统的解释力", sides: [{ who: "steinberg", view: "时程错配能解释青少年冒险的峰值模式" }, { who: "casey", view: "单一时程错配过度简化，需考虑网络整合与情境" }], stake: "双系统是机制解释还是描述性框架" }
  ],
  evidence: [{ text: "Steinberg（2008）青少年风险的双系统模型", doi: null }, { text: "Gardner 与 Steinberg（2005）同伴在场与风险决策", doi: null }],
  applications: ["减少高情绪唤醒情境下的即时决策要求", "用同伴正向影响设计活动", "为青少年提供延迟与冷却策略"],
  terms: [{ t: "双系统模型", en: "dual systems model", d: "情绪系统与控制系统成熟不同步" }, { t: "社会情绪系统", en: "socioemotional system", d: "处理奖赏与情绪线索的网络" }, { t: "认知控制系统", en: "cognitive control system", d: "负责抑制与规划的前额网络" }, { t: "同伴在场效应", en: "peer presence effect", d: "他人在场提高冒险倾向" }]
},
E203: {
  definition: "多任务研究显示，人脑并不真正并行处理需要同一资源的两项任务，而是在任务间快速切换，每次切换都产生可测量的时间代价并提高错误率。蒙塞尔（Stephen Monsell）2003 年的研究系统刻画了切换代价。",
  claims: ["任务切换存在稳定的时间代价", "所谓多任务实为快速交替", "切换代价随任务相似性变化", "频繁切换降低学习质量"],
  agreements: ["切换代价是可重复的实验现象", "媒体多任务与注意控制存在负相关", "深度工作需要减少切换"],
  disagreements: [
    { topic: "媒体多任务者的能力", sides: [{ who: "monsell", view: "频繁多任务者并未表现出更强的并行能力" }, { who: "oakley", view: "部分熟练者在特定任务组合上可接近并行，但代价仍存在" }], stake: "训练能否消除切换代价" }
  ],
  evidence: [{ text: "Monsell（2003）任务切换综述", doi: null }, { text: "Ophir 等（2009）媒体多任务与注意控制", doi: null }],
  applications: ["学习时关闭通知与多标签", "把同类任务批量处理以减少切换", "在课堂中安排单任务深度时段"],
  terms: [{ t: "切换代价", en: "switch cost", d: "任务切换导致的时间与错误增加" }, { t: "媒体多任务", en: "media multitasking", d: "同时使用多种媒体设备" }, { t: "任务集重构", en: "task-set reconfiguration", d: "切换时重建任务规则的过程" }, { t: "深度工作", en: "deep work", d: "长时间无干扰的专注工作" }]
},
E204: {
  definition: "走神指注意从当前任务转向任务无关思维。斯莫尔伍德（Jonathan Smallwood）等 2015 年的综述把它与默认模式网络活动联系起来，并区分有助于未来规划的适应性走神与损害当下表现的破坏性走神。",
  claims: ["走神与默认模式网络活动相关", "走神可分为适应性与破坏性两类", "走神频率高时与负性情绪相关", "正念训练可降低破坏性走神"],
  agreements: ["走神是普遍的心理现象", "默认模式网络参与自我相关思维", "走神会损害外部任务表现"],
  disagreements: [
    { topic: "走神的功能价值", sides: [{ who: "smallwood", view: "适度走神支持规划、创造与自我反思" }, { who: "pashler", view: "在课堂与学习中走神主要是资源竞争导致的损失" }], stake: "走神应被视为功能还是缺陷" }
  ],
  evidence: [{ text: "Smallwood 与 Schooler（2015）走神的科学与功能", doi: null }, { text: "Killingsworth 与 Gilbert（2010）走神与幸福感体验采样", doi: null }],
  applications: ["用短时段与明确目标降低走神", "在长任务中安排有意的休息", "用元认知提示帮助学生察觉走神"],
  terms: [{ t: "走神", en: "mind wandering", d: "注意转向任务无关思维" }, { t: "默认模式网络", en: "default mode network", d: "静息时活跃的自我相关网络" }, { t: "适应性走神", en: "adaptive mind wandering", d: "有助于规划与创造的走神" }, { t: "体验采样", en: "experience sampling", d: "在自然情境中即时报告心理状态" }]
},
E205: {
  definition: "注意缺陷多动障碍（ADHD）的核心缺陷被巴克利（Russell Barkley）等归为行为抑制与执行功能受损，而非动机不足或教养失败。其神经基础涉及前额叶—纹状体—小脑回路的连接与调质差异。",
  claims: ["核心缺陷在抑制与执行功能", "神经基础涉及前额—纹状体回路", "症状具有跨情境持续性", "环境调整与技能训练应并行"],
  agreements: ["ADHD 有明确的神经生物学基础", "遗传因素贡献显著", "药物与行为干预均有效"],
  disagreements: [
    { topic: "诊断边界", sides: [{ who: "barkley", view: "ADHD 是明确的神经发育障碍，应早期识别干预" }, { who: "dekker", view: "诊断易受情境与期望影响，需警惕过度诊断与标签化" }], stake: "如何平衡识别不足与过度诊断" }
  ],
  evidence: [{ text: "Barkley（1997）ADHD 与执行功能", doi: null }, { text: "Shaw 等（2007）ADHD 皮层成熟延迟的纵向成像", doi: null }],
  applications: ["提供清晰指令与分段任务", "用视觉提示与即时反馈支持工作记忆", "把座位与活动安排纳入环境调整"],
  terms: [{ t: "ADHD", en: "attention-deficit/hyperactivity disorder", d: "以注意与抑制困难为核心的神经发育障碍" }, { t: "行为抑制", en: "behavioral inhibition", d: "压制不适当反应的能力" }, { t: "执行功能", en: "executive function", d: "目标导向的高阶控制能力" }, { t: "跨情境持续性", en: "cross-situational persistence", d: "症状在多种场景中持续出现" }]
},
E206: {
  definition: "认知训练研究检验「练习工作记忆或注意任务能否提升一般认知与学业」。欧文（Adrian Owen）等 2010 年对大规模在线训练数据的分析发现，训练成绩提升明显，但未迁移到未经训练的任务。",
  claims: ["训练任务成绩可显著提升", "对未训练任务的近迁移有限", "对学业与日常认知的远迁移证据薄弱", "期望与动机可解释部分效应"],
  agreements: ["认知训练能提升训练任务表现", "远迁移证据不足", "商业宣称常超出证据"],
  disagreements: [
    { topic: "是否存在可行迁移", sides: [{ who: "owen", view: "现有证据不支持广泛迁移，应降低期望" }, { who: "diamond", view: "结合身体活动与真实任务的综合干预可能产生小效应迁移" }], stake: "迁移为零还是效应小到难以检测" }
  ],
  evidence: [{ text: "Owen 等（2010）脑训练对认知的迁移", doi: null }, { text: "Melby-Lervåg 与 Hulme（2013）工作记忆训练元分析", doi: null }],
  applications: ["不把脑训练游戏当作学业干预", "优先投资于学科学习与教学改进", "若使用训练，明确目标是任务本身"],
  terms: [{ t: "近迁移", en: "near transfer", d: "迁移到高度相似的任务" }, { t: "远迁移", en: "far transfer", d: "迁移到结构不同的任务" }, { t: "工作记忆训练", en: "working memory training", d: "反复练习更新与保持任务" }, { t: "效应量", en: "effect size", d: "干预效果的标准化强度指标" }]
},
E207: {
  definition: "恐惧回路研究揭示，威胁信息可经丘脑到杏仁核的快速皮层下通路引发即时反应，同时经皮层通路进行精细评估。勒杜（Joseph LeDoux）的动物实验分离了这两条通路，说明情绪反应可先于意识评估。",
  claims: ["存在快速皮层下恐惧通路", "杏仁核是恐惧学习的关键节点", "皮层通路负责精细评估与调节", "恐惧反应可先于意识觉察"],
  agreements: ["杏仁核在恐惧学习中不可替代", "存在快速与慢速双通路", "恐惧消退是新学习而非抹除"],
  disagreements: [
    { topic: "杏仁核与恐惧体验", sides: [{ who: "ledoux", view: "杏仁核主要负责威胁检测与防御反应，不等同于主观恐惧" }, { who: "damasio", view: "情绪体验与身体反应不可截然二分，主观感受具功能作用" }], stake: "防御反应与主观恐惧是否应分离" }
  ],
  evidence: [{ text: "LeDoux（1996）情绪脑", doi: null }, { text: "LeDoux（2000）情绪回路与杏仁核", doi: null }],
  applications: ["建立可预测的课堂常规以降低威胁感", "用渐进暴露而非强制面对处理考试焦虑", "避免用羞辱与突然惩罚制造恐惧联结"],
  terms: [{ t: "杏仁核", en: "amygdala", d: "威胁检测与恐惧学习的关键脑区" }, { t: "皮层下通路", en: "subcortical pathway", d: "不经皮层直达杏仁核的快速通路" }, { t: "恐惧消退", en: "fear extinction", d: "新学习抑制旧恐惧反应" }, { t: "威胁检测", en: "threat detection", d: "识别潜在危险刺激的过程" }]
},
E208: {
  definition: "毒性压力概念由肖恩科夫（Jack Shonkoff）等提出，区分积极压力、可容忍压力与毒性压力。长期、严重且缺乏支持性关系的压力会持续升高皮质醇，影响海马与前额叶，进而损害学习、注意与健康。",
  claims: ["压力效应取决于强度、时长与支持", "毒性压力改变应激反应系统", "慢性压力损害海马与前额叶", "稳定的支持性关系可缓冲压力"],
  agreements: ["慢性不可控压力对发展有害", "支持性关系是关键缓冲因素", "早期逆境与长期健康相关"],
  disagreements: [
    { topic: "皮质醇与损害的因果", sides: [{ who: "shonkoff", view: "皮质醇长期升高是神经损害的重要通路" }, { who: "gunnar", view: "皮质醇模式高度依赖情境，单一指标不足以推断损害" }], stake: "生物指标能否作为个体层面的损害证据" }
  ],
  evidence: [{ text: "Shonkoff 等（2012）儿童早期发展的生态与生物嵌入", doi: null }, { text: "Lupien 等（2009）应激对脑的影响", doi: null }],
  applications: ["优先建立安全稳定的师生关系", "减少不可预测的惩罚与公开批评", "为逆境儿童提供结构化支持与资源"],
  terms: [{ t: "毒性压力", en: "toxic stress", d: "强烈持久且缺乏支持的应激" }, { t: "可容忍压力", en: "tolerable stress", d: "有支持时可恢复的应激" }, { t: "皮质醇", en: "cortisol", d: "应激反应的主要糖皮质激素" }, { t: "缓冲因素", en: "buffering factor", d: "减轻风险效应的保护条件" }]
},
E209: {
  definition: "奖赏预测误差指实际结果与预期结果之间的差值。舒尔茨（Wolfram Schultz）等 1997 年的电生理研究发现，中脑多巴胺神经元的活动编码这一误差信号，而非奖赏本身，为强化学习提供了神经基础。",
  claims: ["多巴胺神经元编码奖赏预测误差", "未预期的奖赏引发强反应", "预期奖赏被省略时活动下降", "该信号可用于更新价值估计"],
  agreements: ["多巴胺参与奖赏学习", "预测误差是强化学习的核心变量", "奖赏预期会改变神经反应"],
  disagreements: [
    { topic: "多巴胺的通用角色", sides: [{ who: "schultz", view: "多巴胺主要编码奖赏预测误差" }, { who: "berridge", view: "多巴胺更多与「想要」的动机显著性相关，而非「喜欢」的愉悦" }], stake: "多巴胺是学习信号还是动机信号" }
  ],
  evidence: [{ text: "Schultz 等（1997）多巴胺与奖赏预测", doi: null }, { text: "Schultz（2016）多巴胺奖赏预测误差综述", doi: null }],
  applications: ["用不可预期的正向反馈增强学习", "避免让奖赏完全可预测而失去信息量", "把反馈聚焦于进步而非固定奖励"],
  terms: [{ t: "奖赏预测误差", en: "reward prediction error", d: "实际结果与预期的差值" }, { t: "多巴胺", en: "dopamine", d: "参与奖赏学习与动机的神经调质" }, { t: "强化学习", en: "reinforcement learning", d: "依结果反馈更新行为价值" }, { t: "价值估计", en: "value estimation", d: "对选项预期收益的内部表征" }]
},
E210: {
  definition: "体感标记假说由达马西奥（Antonio Damasio）1994 年提出：情绪体验以身体状态标记不同选项的价值，在决策中提供快速偏向。腹内侧前额叶损伤患者智力正常但现实决策严重受损，支持这一假说。",
  claims: ["情绪以身体状态标记选项价值", "情绪缺失不等于更理性", "腹内侧前额叶参与体感标记整合", "决策依赖情绪与认知的共同参与"],
  agreements: ["情绪在决策中具功能作用", "腹内侧前额叶损伤损害现实决策", "纯粹理性的决策模型不充分"],
  disagreements: [
    { topic: "体感标记的必要性", sides: [{ who: "damasio", view: "体感信号是现实决策的必要组成" }, { who: "ledoux", view: "决策可由多种平行系统支持，体感标记只是其中之一" }], stake: "情绪是决策的必要条件还是辅助线索" }
  ],
  evidence: [{ text: "Damasio（1994）笛卡尔的错误", doi: null }, { text: "Bechara 等（1994）腹内侧前额叶损伤与决策", doi: null }],
  applications: ["承认情绪在判断中的作用而非压制", "用情境模拟帮助学生练习价值权衡", "把反思情绪反应纳入决策教学"],
  terms: [{ t: "体感标记", en: "somatic marker", d: "以身体状态表征选项价值" }, { t: "腹内侧前额叶", en: "ventromedial prefrontal cortex", d: "整合情绪与价值的关键脑区" }, { t: "现实决策", en: "real-life decision making", d: "涉及个人与社会后果的选择" }, { t: "价值权衡", en: "value trade-off", d: "在冲突目标间做取舍" }]
},
E211: {
  definition: "情绪调节的神经模型强调前额叶对杏仁核的自上而下调控。戴维森（Richard Davidson）等 2002 年的研究显示，认知重评与腹外侧及背外侧前额叶活动增强、杏仁核活动下降相关，为「重评优于抑制」提供了神经证据。",
  claims: ["前额叶对杏仁核实施自上而下调控", "认知重评依赖前额叶控制网络", "表达抑制的神经代价更高", "调节能力可通过训练改变"],
  agreements: ["前额叶参与情绪调节", "重评与抑制的神经机制不同", "调节训练可改变脑活动模式"],
  disagreements: [
    { topic: "重评的普遍优势", sides: [{ who: "davidson", view: "重评在多数情境中优于抑制" }, { who: "gross", view: "策略优劣取决于情境与目标，不存在绝对最优" }], stake: "是否存在跨情境最优的调节策略" }
  ],
  evidence: [{ text: "Davidson 等（2002）情绪调节的神经基础", doi: null }, { text: "Ochsner 等（2002）认知重评的脑成像研究", doi: null }],
  applications: ["教授重评的具体步骤而非只要求「别激动」", "为高焦虑学生提供重新解释情境的练习", "把情绪调节纳入常规课程而非危机时才处理"],
  terms: [{ t: "认知重评", en: "cognitive reappraisal", d: "重新解释情境以改变情绪" }, { t: "表达抑制", en: "expressive suppression", d: "压制情绪的外部表达" }, { t: "自上而下调控", en: "top-down control", d: "前额叶对皮层下结构的抑制" }, { t: "腹外侧前额叶", en: "ventrolateral PFC", d: "参与情绪与反应控制的区域" }]
},
E212: {
  definition: "依恋的神经内分泌研究表明，催产素与皮质醇系统共同调节照护行为与应激反应。费尔德曼（Ruth Feldman）等 2007 年的研究显示，父母催产素水平与敏感照护行为相关，构成依恋的生理底座。",
  claims: ["催产素促进 affiliative 与照护行为", "皮质醇调节应激与照护的平衡", "早期照护经验影响应激反应系统", "生理指标与行为观察互为印证"],
  agreements: ["催产素参与社会联结", "早期照护影响应激调节", "依恋具有生理基础"],
  disagreements: [
    { topic: "催产素的效应大小", sides: [{ who: "feldman", view: "催产素是社会联结的核心调节者" }, { who: "dekker", view: "催产素效应高度依赖情境与个体，不宜简化为「爱的荷尔蒙」" }], stake: "单一神经肽能否解释复杂社会行为" }
  ],
  evidence: [{ text: "Feldman 等（2007）亲子依恋的神经内分泌基础", doi: null }, { text: "Heinrichs 等（2009）催产素与应激缓冲", doi: null }],
  applications: ["把稳定、敏感的照护作为早期支持核心", "减少照护者的慢性压力以保护互动质量", "谨慎对待「催产素喷雾改善社交」类宣称"],
  terms: [{ t: "催产素", en: "oxytocin", d: "参与社会联结与照护的神经肽" }, { t: "皮质醇", en: "cortisol", d: "应激反应的主要激素" }, { t: "敏感照护", en: "sensitive caregiving", d: "及时准确回应儿童信号" }, { t: "应激调节", en: "stress regulation", d: "维持应激反应在适应范围" }]
},
E213: {
  definition: "正念训练的神经研究显示，规律练习与前扣带、前额叶及岛叶的活动或结构变化相关，并对压力、注意与情绪调节产生小到中等效应。唐（Yi-Yuan Tang）等 2015 年的综述强调效应量与研究方法仍有限制。",
  claims: ["正念训练改变注意相关脑网络活动", "对压力与情绪有小到中等效应", "效应依赖练习剂量与持续性", "研究质量与主动对照仍待加强"],
  agreements: ["正念对压力与情绪有可测效应", "练习剂量与效果相关", "对注意有部分改善"],
  disagreements: [
    { topic: "效应是否被夸大", sides: [{ who: "tang", view: "正念对压力与注意的效应稳健且可重复" }, { who: "van_dam", view: "主动对照下效应显著缩小，部分结果受期望与发表偏倚影响" }], stake: "效应是特异于正念还是来自一般放松与期待" }
  ],
  evidence: [{ text: "Tang 等（2015）正念神经科学综述", doi: null }, { text: "Van Dam 等（2018）正念研究的批判性评估", doi: null }],
  applications: ["把正念作为压力管理的可选工具而非万能方案", "使用短时、规律、有指导的练习", "以学生实际感受与数据评估效果"],
  terms: [{ t: "正念", en: "mindfulness", d: "以非评判方式觉察当下经验" }, { t: "前扣带皮层", en: "anterior cingulate cortex", d: "参与冲突监控与注意调节" }, { t: "岛叶", en: "insula", d: "参与内感受与身体状态表征" }, { t: "主动对照", en: "active control", d: "与有效替代干预比较以控制期望" }]
},
E214: {
  definition: "布洛卡区位于左侧额下回后部，1861 年布洛卡（Paul Broca）报告该区损伤患者能理解语言但言语产出严重受损，首次把特定语言功能定位到具体脑区，奠定了语言功能定位的传统。",
  claims: ["布洛卡区损伤导致表达性失语", "言语产出与言语理解可分离", "语言功能在左半球具优势", "脑区定位是理解语言组织的起点"],
  agreements: ["布洛卡区参与言语产出", "语言功能存在左半球优势", "失语症可分离为不同类型"],
  disagreements: [
    { topic: "定位的精确性", sides: [{ who: "broca", view: "言语产出功能定位于特定脑区" }, { who: "hickok", view: "语言由分布式网络实现，单区定位过度简化" }], stake: "功能是局部模块还是网络涌现" }
  ],
  evidence: [{ text: "Broca（1861）失语症病例报告", doi: null }, { text: "Hickok 与 Poeppel（2007）语言脑的双流模型", doi: null }],
  applications: ["理解表达困难与理解困难的区别", "对言语产出困难提供替代沟通方式", "避免把语言问题简单归因于智力"],
  terms: [{ t: "布洛卡区", en: "Broca's area", d: "左侧额下回后部的言语产出区" }, { t: "表达性失语", en: "expressive aphasia", d: "理解相对保留而产出受损" }, { t: "左半球优势", en: "left-hemisphere dominance", d: "语言功能多偏向左脑" }, { t: "功能定位", en: "localization", d: "把功能对应到特定脑区" }]
},
E215: {
  definition: "韦尼克区位于左侧颞上回后部，1874 年韦尼克（Carl Wernicke）报告该区损伤患者言语流畅但内容无意义、理解严重受损，与布洛卡区形成双重分离，支持语言功能的分区组织。",
  claims: ["韦尼克区损伤导致理解性失语", "言语流畅性与理解可分离", "语言加工存在前后分工", "失语类型支持网络化模型"],
  agreements: ["韦尼克区参与言语理解", "前后语言区功能可分", "失语评估需区分理解与产出"],
  disagreements: [
    { topic: "前后分工的严格性", sides: [{ who: "wernicke", view: "理解位于后部、产出位于前部，分工清晰" }, { who: "hickok", view: "前后区均参与多个环节，分工是概率性的" }], stake: "解剖分区能否对应功能模块" }
  ],
  evidence: [{ text: "Wernicke（1874）失语症的症状复合体", doi: null }, { text: "Hickok 与 Poeppel（2007）言语加工双流模型", doi: null }],
  applications: ["区分「听不懂」与「说不出」的不同支持", "为理解困难学生提供视觉与语境支持", "用多模态输入降低语言负荷"],
  terms: [{ t: "韦尼克区", en: "Wernicke's area", d: "左侧颞上回后部的言语理解区" }, { t: "理解性失语", en: "receptive aphasia", d: "言语流畅但理解严重受损" }, { t: "双重分离", en: "double dissociation", d: "两种功能可相互独立受损" }, { t: "双流模型", en: "dual-stream model", d: "腹侧语义与背侧语音通路" }]
},
E216: {
  definition: "阅读的神经网络研究表明，阅读并非天生脑区，而是复用视觉、语音与语义系统形成的「神经元再利用」。德阿纳（Stanislas Dehaene）等 2009 年的研究识别出左侧枕颞的视觉词形区及其与语音、语义网络的连接。",
  claims: ["阅读依赖视觉词形区与语音语义网络", "阅读是文化习得而非先天模块", "神经元再利用解释阅读的脑基础", "阅读教学需建立形音义联结"],
  agreements: ["阅读由分布式网络支持", "视觉词形区在熟练阅读中关键", "形音对应是习得阅读的核心"],
  disagreements: [
    { topic: "阅读通路的普适性", sides: [{ who: "dehaene", view: "不同文字系统的阅读收敛到相似网络" }, { who: "gabrieli", view: "文字系统差异导致通路权重不同，普适性有限" }], stake: "跨语言阅读是否存在统一神经签名" }
  ],
  evidence: [{ text: "Dehaene（2009）阅读脑", doi: null }, { text: "Dehaene 等（2010）阅读习得的神经变化", doi: null }],
  applications: ["系统教授字形与语音的对应规则", "把阅读理解与口语语义网络连接", "为阅读困难提供多感官形音训练"],
  terms: [{ t: "视觉词形区", en: "visual word form area", d: "识别书面词形的左侧枕颞区" }, { t: "神经元再利用", en: "neuronal recycling", d: "文化技能复用既有神经回路" }, { t: "形音对应", en: "grapheme–phoneme mapping", d: "字形与语音的对应规则" }, { t: "语义网络", en: "semantic network", d: "存储词义知识的分布式系统" }]
},
E217: {
  definition: "阅读障碍的脑机制研究显示，其核心缺陷多在语音加工与形音映射环节，相关脑区（左侧颞顶与枕颞）活动或连接异常。加布里埃利（John Gabrieli）2009 年的综述强调，这为显式语音教学提供了机制层面支持。",
  claims: ["阅读障碍的核心在语音加工", "相关脑区活动与连接存在差异", "显式语音教学是最有效干预", "阅读障碍与智力无必然关联"],
  agreements: ["语音缺陷是阅读障碍的核心", "显式语音教学有效", "早期识别能改善结果"],
  disagreements: [
    { topic: "缺陷的单一性", sides: [{ who: "gabrieli", view: "语音缺陷是核心且具因果性" }, { who: "stein", view: "还存在视觉大细胞与注意等多重缺陷亚型" }], stake: "阅读障碍是同质还是异质群体" }
  ],
  evidence: [{ text: "Gabrieli（2009）阅读障碍的生物学", doi: null }, { text: "Shaywitz 等（2004）阅读障碍的神经系统", doi: null }],
  applications: ["尽早筛查语音意识", "提供系统、累积的语音与解码教学", "配合多感官与重复练习而非仅增加阅读量"],
  terms: [{ t: "阅读障碍", en: "dyslexia", d: "语音与解码困难为主的阅读障碍" }, { t: "语音意识", en: "phonological awareness", d: "觉察与操作语音单位的能力" }, { t: "颞顶区", en: "temporoparietal region", d: "参与形音映射的左侧脑区" }, { t: "显式教学", en: "explicit instruction", d: "明确示范规则与步骤的教学" }]
},
E218: {
  definition: "双语脑研究关注长期管理两种语言对执行控制的影响。比亚韦斯托克（Ellen Bialystok）等 2012 年的综述认为，双语经验与抑制控制、认知灵活性的优势相关，但效应大小与可重复性近十年受到质疑。",
  claims: ["双语者需持续抑制非目标语言", "双语经验与执行控制相关", "优势效应受年龄与使用情境调节", "效应量可能小于早期估计"],
  agreements: ["双语管理需要执行控制参与", "双语对元语言意识有正向作用", "效应受语言使用模式影响"],
  disagreements: [
    { topic: "双语优势的可重复性", sides: [{ who: "bialystok", view: "双语经验带来可测的执行控制优势" }, { who: "paap", view: "控制混杂后优势不稳定，可能存在发表偏倚" }], stake: "优势是真实效应还是样本与测量artifact" }
  ],
  evidence: [{ text: "Bialystok 等（2012）双语与执行控制综述", doi: null }, { text: "Paap 等（2015）双语优势的批判性检验", doi: null }],
  applications: ["把双语视为文化与认知资源而非提分工具", "在课堂中允许并鼓励使用母语", "不夸大专为「双语提升大脑」的宣传"],
  terms: [{ t: "抑制控制", en: "inhibitory control", d: "压制非目标语言与反应" }, { t: "元语言意识", en: "metalinguistic awareness", d: "对语言本身结构与规则的觉察" }, { t: "语言切换", en: "language switching", d: "在两种语言间转换" }, { t: "发表偏倚", en: "publication bias", d: "阳性结果更易被发表" }]
},
E219: {
  definition: "语音加工的听觉通路研究提出双流模型：背侧通路把声音映射到发音动作，支持语音复述与工作记忆；腹侧通路把语音映射到语义，支持理解。希科克（Greg Hickok）与波佩尔（David Poeppel）2012 年系统阐述了这一框架。",
  claims: ["语音加工分为背侧与腹侧通路", "背侧通路支持音—动作映射", "腹侧通路支持语音到语义转换", "两条通路共同支持口语加工"],
  agreements: ["语音加工由多通路网络完成", "背侧通路与语音工作记忆相关", "腹侧通路与语义理解相关"],
  disagreements: [
    { topic: "通路的解剖边界", sides: [{ who: "hickok", view: "双流模型能较好解释失语与语音加工" }, { who: "friederici", view: "句法与语义网络的分工需更细的多通路模型" }], stake: "双流是否足以涵盖句法与语篇加工" }
  ],
  evidence: [{ text: "Hickok 与 Poeppel（2007）言语加工皮层组织", doi: null }, { text: "Hickok（2012）语音加工的计算与神经架构", doi: null }],
  applications: ["语音训练结合发音动作可增强效果", "理解困难与语音记忆困难需不同支持", "用复述与跟读支持语音表征建立"],
  terms: [{ t: "背侧通路", en: "dorsal stream", d: "声音到发音动作的映射通路" }, { t: "腹侧通路", en: "ventral stream", d: "语音到语义的映射通路" }, { t: "语音工作记忆", en: "phonological working memory", d: "短时保持语音信息的能力" }, { t: "语音表征", en: "phonological representation", d: "对语音单位的内部编码" }]
},
E220: {
  definition: "手语研究显示，手语使用者的语言功能同样定位于左半球语言区，与口语者高度一致。贝鲁吉（Ursula Bellugi）等 1989 年的研究证明，语言脑区由语言功能而非感觉通道决定，对「语言=声音」的假设构成挑战。",
  claims: ["手语由左半球语言区加工", "语言脑区不依赖听觉通道", "手语具备完整语言结构", "语言习得的敏感期同样适用于手语"],
  agreements: ["语言功能具有通道独立性", "手语是完整语言而非手势系统", "早期手语暴露对语言发展关键"],
  disagreements: [
    { topic: "通道对组织的影响", sides: [{ who: "bellugi", view: "手语与口语共享核心语言网络" }, { who: "hickok", view: "通道差异仍会重塑部分感觉运动通路" }], stake: "语言网络的哪些部分是通道独立的" }
  ],
  evidence: [{ text: "Bellugi 等（1989）手语的脑组织", doi: null }, { text: "Newport 与 Supalla（2000）手语习得的敏感期", doi: null }],
  applications: ["为聋童尽早提供可及的语言输入", "把手语视为合法语言而非替代手段", "在多模态课堂中提供视觉语言支持"],
  terms: [{ t: "手语", en: "sign language", d: "以视觉—手势通道实现的完整语言" }, { t: "通道独立性", en: "modality independence", d: "语言功能不依赖特定感觉通道" }, { t: "语言区", en: "language areas", d: "左半球支持语言加工的脑区" }, { t: "语言暴露", en: "language exposure", d: "接触可及语言输入的机会" }]
},
E221: {
  definition: "近似数量系统（ANS）指无需符号与计数即可粗略估计数量的能力，存在于婴儿与多种动物。费根森（Lisa Feigenson）等 2004 年的研究显示，ANS 辨别精度的个体差异可预测后续符号数学成就。",
  claims: ["ANS 是不依赖符号的数量估计系统", "ANS 精度存在稳定个体差异", "精度与符号数学成就相关", "ANS 在婴儿期即已运作"],
  agreements: ["ANS 是数量加工的进化基础", "ANS 精度与数学能力相关", "ANS 可通过训练部分改善"],
  disagreements: [
    { topic: "ANS 与数学成就的因果", sides: [{ who: "feigenson", view: "ANS 精度是数学学习的认知基础" }, { who: "butterworth", view: "相关较弱，符号数与教育经验的作用更大" }], stake: "训练 ANS 能否提升学校数学" }
  ],
  evidence: [{ text: "Feigenson 等（2004）核心知识系统", doi: null }, { text: "Halberda 等（2008）ANS 精度与数学成就", doi: null }],
  applications: ["在符号教学前提供数量估算经验", "用点阵比较游戏培养数感", "不把 ANS 训练当作数学补救的唯一手段"],
  terms: [{ t: "近似数量系统", en: "ANS", d: "粗略估计数量的非符号系统" }, { t: "数感", en: "number sense", d: "对数量大小与关系的直觉" }, { t: "韦伯分数", en: "Weber fraction", d: "衡量数量辨别精度的指标" }, { t: "符号数学", en: "symbolic math", d: "使用数字符号的数学活动" }]
},
E222: {
  definition: "三重编码模型由德阿纳（Stanislas Dehaene）1997 年提出：数字在脑中以视觉阿拉伯符号、听觉言语词与近似数量三种编码表征，分别支持不同算术任务，儿童学习数学需建立三者之间的联结。",
  claims: ["数字存在三种编码形式", "近似数量编码支持估算与比较", "言语编码支持乘法口诀等事实提取", "视觉符号编码支持书面计算"],
  agreements: ["数字加工涉及多表征系统", "不同算术任务依赖不同编码", "符号与数量的联结是学习关键"],
  disagreements: [
    { topic: "编码的数量", sides: [{ who: "dehaene", view: "三重编码足以解释主要数学认知" }, { who: "butterworth", view: "还需空间与序列表征，模型不完整" }], stake: "三编码是否覆盖数学认知的核心" }
  ],
  evidence: [{ text: "Dehaene（1997）数字感", doi: null }, { text: "Dehaene 等（1999）数字加工的脑成像", doi: null }],
  applications: ["把符号、口语与数量经验同时呈现", "用数轴与实物建立空间—数量映射", "口诀与估算训练分别针对不同编码"],
  terms: [{ t: "三重编码", en: "triple code", d: "符号、言语与数量三种数字表征" }, { t: "近似数量编码", en: "analog magnitude code", d: "对数量的近似内部表征" }, { t: "事实提取", en: "fact retrieval", d: "直接从长时记忆取出算术事实" }, { t: "数轴", en: "number line", d: "数量的空间化表征" }]
},
E223: {
  definition: "数学焦虑指面对数学任务时产生的紧张与回避反应。莱昂斯（Ian Lyons）等 2012 年的研究显示，高数学焦虑者在预期数学任务时杏仁核激活增强、前额叶调控减弱，同时工作记忆资源被焦虑占用，形成成绩下降的循环。",
  claims: ["数学焦虑占用工作记忆资源", "焦虑与威胁回路激活相关", "焦虑导致回避与练习减少", "形成焦虑—成绩下降的循环"],
  agreements: ["数学焦虑与较低数学成绩相关", "焦虑占用工作记忆", "干预可降低焦虑并改善成绩"],
  disagreements: [
    { topic: "焦虑的因果方向", sides: [{ who: "lyons", view: "焦虑通过认知资源损害成绩，具因果性" }, { who: "geary", view: "低数学能力也可引发焦虑，因果可能双向" }], stake: "干预焦虑能否单独提升成绩" }
  ],
  evidence: [{ text: "Lyons 与 Beilock（2012）数学焦虑的脑基础", doi: null }, { text: "Ramirez 等（2013）写表达与考试焦虑", doi: null }],
  applications: ["考前写下令自己担忧的想法以释放工作记忆", "减少公开计时与排名带来的威胁感", "把错误重新框定为学习过程的一部分"],
  terms: [{ t: "数学焦虑", en: "math anxiety", d: "面对数学时的紧张与回避" }, { t: "工作记忆占用", en: "working memory load", d: "焦虑挤占有限认知资源" }, { t: "威胁回路", en: "threat circuitry", d: "杏仁核为主的威胁反应系统" }, { t: "表达性写作", en: "expressive writing", d: "写下担忧以降低认知负荷" }]
},
E224: {
  definition: "工作记忆与数学问题解决研究显示，多步算术、文字题与心算高度依赖工作记忆的保持与更新能力。吉尔里（David Geary）等 2004 年的研究区分了数学学习困难中的工作记忆缺陷与事实提取缺陷。",
  claims: ["多步问题依赖工作记忆保持中间结果", "文字题额外增加语言与更新负荷", "工作记忆缺陷是数学困难的重要来源", "事实提取自动化可释放工作记忆资源"],
  agreements: ["工作记忆与数学表现相关", "自动化的事实提取降低负荷", "工作记忆缺陷与数学困难相关"],
  disagreements: [
    { topic: "缺陷的定位", sides: [{ who: "geary", view: "数学困难多源于工作记忆与事实提取缺陷" }, { who: "butterworth", view: "核心缺陷在数量表征而非一般工作记忆" }], stake: "应训练工作记忆还是数量表征" }
  ],
  evidence: [{ text: "Geary（2004）数学困难与学习障碍", doi: null }, { text: "Raghubar 等（2010）工作记忆与数学综述", doi: null }],
  applications: ["提供纸笔与步骤模板以降低保持负荷", "把多步问题分解为可检查的小步", "通过反复练习实现基础事实自动化"],
  terms: [{ t: "工作记忆", en: "working memory", d: "短时保持并操作信息的系统" }, { t: "事实提取", en: "fact retrieval", d: "直接取出算术事实" }, { t: "认知负荷", en: "cognitive load", d: "任务施加于工作记忆的负担" }, { t: "数学学习困难", en: "math learning difficulty", d: "数学成就显著低于预期" }]
},
E225: {
  definition: "计算障碍（dyscalculia）指在一般智力正常的情况下，数量加工与算术学习出现持续显著困难。巴特沃斯（Brian Butterworth）2005 年提出核心缺陷在于「数字模块」即近似数量表征的损伤，而非一般认知或教学不足。",
  claims: ["核心缺陷在数量表征而非一般智力", "表现为数感弱与事实提取困难", "需专门的数量与算术干预", "与阅读障碍可双重分离"],
  agreements: ["计算障碍是特定的学习障碍", "数量表征缺陷是重要成因", "专门干预优于一般补课"],
  disagreements: [
    { topic: "缺陷的单一性", sides: [{ who: "butterworth", view: "核心是先天数量模块缺陷" }, { who: "geary", view: "更多是工作记忆与策略缺陷的组合，异质性高" }], stake: "是否存在统一的核心缺陷" }
  ],
  evidence: [{ text: "Butterworth（2005）计算障碍导论", doi: null }, { text: "Butterworth 等（2011）计算障碍的纵向研究", doi: null }],
  applications: ["用具体物与数轴重建数量表征", "提供事实提取与计算策略的显式教学", "配合焦虑管理避免回避循环"],
  terms: [{ t: "计算障碍", en: "dyscalculia", d: "特定性的算术学习障碍" }, { t: "数量表征", en: "magnitude representation", d: "对数量大小的内部编码" }, { t: "事实提取", en: "fact retrieval", d: "直接取出算术事实" }, { t: "双重分离", en: "double dissociation", d: "两种障碍可相互独立出现" }]
},
E226: {
  definition: "空间能力与 STEM 的研究显示，心理旋转、空间可视化与空间关系能力能预测数学与科学成就。乌塔尔（David Uttal）等 2013 年的元分析指出，空间训练可提升空间能力，并对部分 STEM 任务产生近迁移。",
  claims: ["空间能力预测 STEM 成就", "空间能力可通过训练提升", "手势与图示能外化空间推理", "空间训练对部分 STEM 任务有近迁移"],
  agreements: ["空间能力与 STEM 成就相关", "空间能力具可塑性", "空间表征支持问题解决"],
  disagreements: [
    { topic: "迁移范围", sides: [{ who: "uttal", view: "空间训练能迁移到部分 STEM 学习" }, { who: "owen", view: "迁移多限于相似任务，远迁移证据有限" }], stake: "空间训练是通用增益还是任务特异" }
  ],
  evidence: [{ text: "Uttal 等（2013）空间训练元分析", doi: null }, { text: "Wai 等（2009）空间能力与 STEM 成就", doi: null }],
  applications: ["在数学与科学中使用图示、模型与手势", "安排积木、折纸与三维建模活动", "把空间语言（旋转、投影、比例）纳入教学"],
  terms: [{ t: "空间可视化", en: "spatial visualization", d: "在头脑中操作空间关系" }, { t: "心理旋转", en: "mental rotation", d: "想象物体旋转后的形态" }, { t: "空间语言", en: "spatial language", d: "描述方位、形状与变换的词汇" }, { t: "近迁移", en: "near transfer", d: "迁移到相似任务" }]
},
E227: {
  definition: "左右脑分工迷思源于对裂脑研究与功能偏侧化的误读。加扎尼加（Michael Gazzaniga）等 1967 年的裂脑研究确实发现特定加工存在半球优势，但「左脑理性、右脑创造」并据此设计教学的说法缺乏证据。",
  claims: ["特定加工存在半球优势", "多数任务由两半球协同完成", "「左脑型/右脑型学习者」缺乏证据", "偏侧化不等于功能专属"],
  agreements: ["语言多在左半球具优势", "半球间通过胼胝体高度整合", "把学生分为左右脑型无科学依据"],
  disagreements: [
    { topic: "偏侧化的教育含义", sides: [{ who: "gazzaniga", view: "偏侧化是真实但有限的实验室现象" }, { who: "dekker", view: "教育界把偏侧化夸大为学习类型，属典型神经迷思" }], stake: "实验室发现能否转化为教学分类" }
  ],
  evidence: [{ text: "Gazzaniga 等（1967）裂脑患者的知觉", doi: null }, { text: "Dekker 等（2012）教师中的神经迷思", doi: null }],
  applications: ["不按「左右脑型」分组或设计课程", "用全脑参与的 multisensory 活动替代", "在教师培训中澄清偏侧化的真实含义"],
  terms: [{ t: "偏侧化", en: "lateralization", d: "功能在两半球间的相对优势" }, { t: "裂脑研究", en: "split-brain research", d: "切断胼胝体后的半球独立观察" }, { t: "胼胝体", en: "corpus callosum", d: "连接两半球的巨大白质束" }, { t: "神经迷思", en: "neuromyth", d: "对神经科学的误解性应用" }]
},
E228: {
  definition: "「人类只用了 10% 大脑」是流传最广的神经迷思之一，可追溯到 20 世纪初的通俗读物。现代成像研究显示，几乎所有脑区在日常活动中都有代谢活动，且局部损伤几乎总会带来功能后果。",
  claims: ["绝大多数脑区在日常活动中被使用", "脑区损伤通常带来可测的功能缺陷", "「10%」说法无实证来源", "迷思常被用于推销脑训练产品"],
  agreements: ["该说法是明确的科学错误", "脑区功能高度分工且互补", "教育材料不应重复该说法"],
  disagreements: [
    { topic: "迷思为何持久", sides: [{ who: "howard_jones", view: "早期通俗表述被反复引用而固化为常识" }, { who: "dekker", view: "迷思因迎合「潜能无限」的期待而具吸引力" }], stake: "纠正迷思应靠知识普及还是批判性思维训练" }
  ],
  evidence: [{ text: "Howard-Jones（2014）神经迷思与教育", doi: null }, { text: "Dekker 等（2012）教师信念中的神经迷思", doi: null }],
  applications: ["在课程中直接澄清该说法", "用脑成像代谢证据做反例教学", "对「开发未使用脑区」类产品保持警惕"],
  terms: [{ t: "神经迷思", en: "neuromyth", d: "对脑科学的错误理解与误用" }, { t: "代谢活动", en: "metabolic activity", d: "脑区消耗葡萄糖与氧的水平" }, { t: "功能定位", en: "functional localization", d: "特定功能与脑区的对应" }, { t: "科学素养", en: "scientific literacy", d: "识别与评估科学主张的能力" }]
},
E229: {
  definition: "关键期绝对化迷思指把敏感期简化为「错过即永久失败」。戈斯瓦米（Usha Goswami）2006 年的综述指出，多数发展窗口是渐变的，晚期干预仍能产生实质改善；绝对化表述会误导早教投资并放弃后期支持。",
  claims: ["多数敏感期是渐变而非全或无", "晚期干预仍可产生实质改善", "绝对化表述会误导资源分配", "窗口长度因系统与经验类型而异"],
  agreements: ["早期经验重要但非唯一决定", "后期干预有效但需更多支持", "教育政策应避免制造焦虑"],
  disagreements: [
    { topic: "早教投资的优先级", sides: [{ who: "goswami", view: "早期重要，但不应以牺牲后期干预为代价" }, { who: "shonkoff", view: "早期逆境的生物嵌入效应强，早期投入回报最高" }], stake: "资源应在早期与后期之间如何分配" }
  ],
  evidence: [{ text: "Goswami（2006）神经科学与教育", doi: null }, { text: "Knudsen（2004）敏感期机制", doi: null }],
  applications: ["早期提供高质量经验但不制造焦虑", "对晚期学习者设计强化与补偿课程", "政策沟通使用「窗口内更高效」而非「错过即失败」"],
  terms: [{ t: "敏感期", en: "sensitive period", d: "经验效应最强的发育窗口" }, { t: "绝对化迷思", en: "absolute critical period myth", d: "把窗口误解为硬性截止" }, { t: "补偿性干预", en: "compensatory intervention", d: "针对已错过窗口的支持" }, { t: "生物嵌入", en: "biological embedding", d: "早期经验写入生理系统" }]
},
E230: {
  definition: "脑训练与健脑游戏宣称指商业产品声称能提升记忆、注意乃至智力。欧文（Adrian Owen）等 2010 年的大样本研究发现，训练成绩提升但未迁移到未训练任务；后续元分析也显示远迁移证据薄弱。",
  claims: ["训练任务成绩可显著提升", "对未训练任务的迁移有限", "对学业与日常认知的远迁移证据不足", "营销宣称常超出研究证据"],
  agreements: ["训练能提升训练任务本身", "远迁移证据不足", "消费者应警惕夸大宣传"],
  disagreements: [
    { topic: "是否存在有效变体", sides: [{ who: "owen", view: "现有商业产品缺乏迁移证据" }, { who: "diamond", view: "结合运动与真实任务的综合方案可能有小效应" }], stake: "应否定整类产品还是改进设计" }
  ],
  evidence: [{ text: "Owen 等（2010）脑训练对认知的迁移", doi: null }, { text: "Simons 等（2016）脑训练宣称的共识声明", doi: null }],
  applications: ["不把脑训练游戏纳入正式课程", "把资源优先投向教学与睡眠运动", "教学生识别「科学背书」的营销话术"],
  terms: [{ t: "远迁移", en: "far transfer", d: "迁移到结构不同的任务" }, { t: "健脑游戏", en: "brain training game", d: "声称提升认知的商业游戏" }, { t: "效应量", en: "effect size", d: "干预效果的标准化强度" }, { t: "共识声明", en: "consensus statement", d: "多位学者联合的立场文件" }]
},
E231: {
  definition: "神经迷思在教师中的流行由德克尔（Sanne Dekker）等 2012 年的调查系统揭示：大量教师相信学习风格匹配、左右脑分工、10% 大脑等说法。研究建议在教师教育中显式处理这些信念，而非假定其自然消退。",
  claims: ["大量教师持有至少一项神经迷思", "迷思与教龄和培训背景相关", "迷思会影响教学决策与资源分配", "显式纠正比单纯科普更有效"],
  agreements: ["神经迷思在教师群体中普遍", "迷思可能转化为不当教学实践", "教师培训需包含迷思澄清"],
  disagreements: [
    { topic: "迷思的实践危害", sides: [{ who: "dekker", view: "迷思直接导致无效甚至有害的教学安排" }, { who: "howard_jones", view: "部分迷思的危害被夸大，重点应放在提升整体科学素养" }], stake: "应优先纠正具体迷思还是建设一般批判能力" }
  ],
  evidence: [{ text: "Dekker 等（2012）教师中的神经迷思", doi: null }, { text: "Howard-Jones（2014）神经科学与教育综述", doi: null }],
  applications: ["在教师培训中设置迷思辨析模块", "用「证据—推论—边界」框架评估神经主张", "把迷思清单纳入校本教研议题"],
  terms: [{ t: "神经迷思", en: "neuromyth", d: "对脑科学的误解性应用" }, { t: "学习风格", en: "learning styles", d: "按感知偏好分类学习者的说法" }, { t: "教师信念", en: "teacher beliefs", d: "教师关于学习与教学的隐性假设" }, { t: "证据边界", en: "evidence boundary", d: "结论可外推的范围" }]
},
E232: {
  definition: "心智—脑—教育桥接的边界问题由布鲁尔（John Bruer）1997 年提出：从神经机制到教学处方跨越多个解释层级，需经认知科学与课堂研究中介。直接以脑成像结果推导教学法，往往产生过度简化或错误建议。",
  claims: ["神经证据不能直接推出教学处方", "需经认知与课堂研究的中介层级", "跨层级推论易产生过度简化", "教育神经科学应是双向协作而非单向应用"],
  agreements: ["脑科学与教学之间存在解释层级差", "直接推论常导致神经迷思", "需多学科协作与课堂验证"],
  disagreements: [
    { topic: "桥接的可能性", sides: [{ who: "bruer", view: "短期应主要依靠认知心理学中介，脑科学作用有限" }, { who: "dehaene", view: "脑机制能提供约束条件与新的教学假设，不应低估" }], stake: "脑科学在教育研究中应扮演何种角色" }
  ],
  evidence: [{ text: "Bruer（1997）教育与脑科学的桥接", doi: null }, { text: "Dehaene（2009）阅读脑", doi: null }],
  applications: ["以课堂效果而非神经机制作为教学决策依据", "把神经证据定位为假设来源与约束条件", "要求教育产品披露可复现的行为证据"],
  terms: [{ t: "解释层级", en: "levels of explanation", d: "从分子到行为到社会的不同描述层" }, { t: "教育神经科学", en: "educational neuroscience", d: "连接脑机制与教育实践的研究领域" }, { t: "中介变量", en: "mediating variable", d: "连接机制与结果的中间过程" }, { t: "双向协作", en: "bidirectional collaboration", d: "研究者与实践者共同定义问题" }]
}
});

