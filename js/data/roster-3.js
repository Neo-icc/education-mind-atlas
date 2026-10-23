/* ============================================================
   知识点花名册（三）：脑科学与学习
   ============================================================ */
window.ATLAS = window.ATLAS || {};

ATLAS.roster = (ATLAS.roster || []).concat([
/* ── 脑科学 · 可塑性与敏感期（8） ── */
["E183","赫布学习规则","Hebbian Learning Rule","brain","neuro-plasticity","hebb",1949,"mechanism","同时激活的神经元之间连接增强——「一起放电的细胞连在一起」。"],
["E184","长时程增强 LTP","Long-Term Potentiation","brain","neuro-plasticity","bliss_lomo",1973,"mechanism","高频刺激后突触传递效能持久增强，是学习与记忆最被接受的细胞模型。"],
["E185","突触修剪与发育窗口","Synaptic Pruning","brain","neuro-plasticity","huttenlocher",1979,"mechanism","先过度生成再按使用经验修剪，使神经网络由冗余走向高效。"],
["E186","敏感期与经验依赖可塑性","Sensitive Periods and Experience-Dependent Plasticity","brain","neuro-plasticity","hubel_wiesel",1963,"mechanism","特定经验在窗口期内对神经回路塑造作用最强，窗口后效率下降但非归零。"],
["E187","关键期的证据与限度","Evidence and Limits of Critical Periods","brain","neuro-plasticity","knudsen",2004,"theory","关键期并非全或无：多数系统呈「窗口内高效、窗口后仍可学」的渐变曲线。"],
["E188","成年神经发生","Adult Neurogenesis","brain","neuro-plasticity","gould",1999,"mechanism","海马齿状回在成年期仍产生新神经元，与学习、应激与情绪调节相关。"],
["E189","髓鞘化与技能自动化","Myelination and Automaticity","brain","neuro-plasticity","fields",2008,"mechanism","轴突髓鞘化提升传导速度与同步性，是技能由笨拙走向流畅的生理基础。"],
["E190","脑发育的个体差异","Individual Differences in Brain Development","brain","neuro-plasticity","giedd",1999,"mechanism","皮层成熟时序存在显著个体差异，同龄不等于同发育水平。"],
/* ── 脑科学 · 记忆与睡眠巩固（8） ── */
["E191","记忆的编码—巩固—提取","Encoding, Consolidation, Retrieval","brain","memory-sleep","mcgaugh",2000,"mechanism","记忆分三阶段，任一时段的干扰都会影响最终表现，教学需分别设计。"],
["E192","睡眠与记忆巩固","Sleep and Memory Consolidation","brain","memory-sleep","walker_m",2004,"mechanism","慢波睡眠巩固陈述性记忆，REM 参与程序性与情绪记忆整合。"],
["E193","系统巩固：海马到皮层","Systems Consolidation","brain","memory-sleep","squire",2004,"mechanism","记忆初始依赖海马，随时间转移到新皮层，形成不依赖海马的远程痕迹。"],
["E194","情绪记忆与杏仁核","Emotional Memory and the Amygdala","brain","memory-sleep","ledoux",1993,"mechanism","杏仁核调节情绪唤醒对记忆的增强，使高情绪事件记得更牢也更易被扭曲。"],
["E195","遗忘的机制","Mechanisms of Forgetting","brain","memory-sleep","wixted",2004,"mechanism","遗忘主要是提取失败与干扰，而非痕迹简单消失；线索匹配决定成败。"],
["E196","再巩固与记忆更新","Reconsolidation","brain","memory-sleep","nader",2000,"mechanism","提取后记忆短暂进入不稳定状态并可被修改，为错误概念的矫正提供窗口。"],
["E197","睡眠剥夺与学业表现","Sleep Deprivation and Academic Performance","brain","memory-sleep","lim",2008,"mechanism","睡眠不足损害注意、工作记忆与情绪调节，直接压低学习效率。"],
["E198","运动与脑健康","Exercise and Brain Health","brain","memory-sleep","hillman",2008,"mechanism","有氧运动提升脑源性神经营养因子与执行功能，对学业表现有小的正向效应。"],
/* ── 脑科学 · 注意与执行功能（8） ── */
["E199","注意网络","Attention Networks","brain","attention-exec","posner",1990,"mechanism","警觉、定向与执行控制三个网络各有独立神经基础，可分别训练。"],
["E200","执行功能三成分","Executive Function Components","brain","attention-exec","miyake",2000,"construct","抑制、工作记忆刷新与认知灵活转换三者相关但可分离。"],
["E201","前额叶发育与青少年","Prefrontal Development in Adolescence","brain","attention-exec","giedd",2004,"mechanism","前额叶成熟持续到二十多岁，其与皮层下系统的时序差解释青少年行为。"],
["E202","双系统模型","Dual Systems Model","brain","attention-exec","steinberg",2008,"theory","社会情绪系统早熟而认知控制系统后熟，二者张力在青春期达到峰值。"],
["E203","多任务与切换代价","Multitasking and Switch Costs","brain","attention-exec","monsell",2003,"mechanism","任务切换有固定时间代价，所谓并行处理实为快速交替，必然降低效率。"],
["E204","走神与默认模式网络","Mind Wandering and the Default Mode Network","brain","attention-exec","smallwood",2015,"mechanism","任务无关思维与默认网络活动相关，适度走神有助规划，过度则损害学习。"],
["E205","ADHD 的神经基础与教育支持","ADHD: Neural Basis and Support","brain","attention-exec","barkley",1997,"theory","核心缺陷在行为抑制与执行功能而非「不努力」，需环境调整与技能训练并行。"],
["E206","认知训练的迁移限度","Limits of Cognitive Training Transfer","brain","attention-exec","owen",2010,"critique","脑训练可提升训练任务成绩，但向一般认知与学业的远迁移证据薄弱。"],
/* ── 脑科学 · 情绪与应激（7） ── */
["E207","恐惧回路与杏仁核","Fear Circuitry and the Amygdala","brain","emotion-brain","ledoux",1996,"mechanism","威胁信息可经皮层下通路快速到达杏仁核，形成先反应后评估的恐惧学习。"],
["E208","毒性压力与应激生理","Toxic Stress and Stress Physiology","brain","emotion-brain","shonkoff",2012,"mechanism","长期不可控压力持续升高皮质醇，损害海马与前额叶，影响学习与健康。"],
["E209","奖赏预测误差与多巴胺","Reward Prediction Error and Dopamine","brain","emotion-brain","schultz",1997,"mechanism","多巴胺编码「结果好于预期」的误差信号，驱动强化学习与动机。"],
["E210","体感标记假说","Somatic Marker Hypothesis","brain","emotion-brain","damasio",1994,"theory","情绪体验以身体状态标记选项价值，参与现实决策；情绪缺失并非更理性。"],
["E211","情绪调节的前额叶—杏仁核回路","Prefrontal–Amygdala Regulation Circuit","brain","emotion-brain","davidson",2002,"mechanism","前额叶自上而下抑制杏仁核，是认知重评生效的神经通路。"],
["E212","依恋的神经内分泌基础","Neuroendocrine Basis of Attachment","brain","emotion-brain","feldman",2007,"mechanism","催产素与皮质醇系统共同调节照护行为与应激反应，构成依恋的生理底座。"],
["E213","正念与注意调节","Mindfulness and Attention Regulation","brain","emotion-brain","tang",2015,"mechanism","正念训练与前扣带、前额叶活动变化相关，对压力与注意有小到中等效应。"],
/* ── 脑科学 · 语言与阅读脑（7） ── */
["E214","布洛卡区与言语产出","Broca's Area and Speech Production","brain","language-brain","broca",1861,"mechanism","左侧额下回病变导致表达性失语，确立语言功能的脑区定位传统。"],
["E215","韦尼克区与言语理解","Wernicke's Area and Comprehension","brain","language-brain","wernicke",1874,"mechanism","左侧颞上回后部损伤导致理解障碍与流畅但无意义的言语。"],
["E216","阅读的神经网络","The Reading Network","brain","language-brain","dehaene",2009,"mechanism","阅读复用视觉词形区、语音与语义网络，需通过教育「神经元再利用」形成。"],
["E217","阅读障碍的脑机制","Neural Basis of Dyslexia","brain","language-brain","gabrieli",2009,"mechanism","语音—字形映射相关脑区活动异常，支持显式语音与解码教学。"],
["E218","双语脑与执行控制","Bilingual Brain and Executive Control","brain","language-brain","bialystok",2012,"mechanism","长期管理两种语言强化抑制与切换，但优势效应的大小仍有争议。"],
["E219","语音加工的听觉通路","Auditory Pathways for Speech","brain","language-brain","hickok",2012,"mechanism","背侧通路支持音—动作映射，腹侧通路支持语音到语义的转换。"],
["E220","手语与语言脑可塑性","Sign Language and Language Plasticity","brain","language-brain","bellugi",1989,"mechanism","手语使用左侧语言区，证明语言脑区由语言功能而非感觉通道决定。"],
/* ── 脑科学 · 数感与数学脑（6） ── */
["E221","近似数量系统","Approximate Number System","brain","math-brain","feigenson",2004,"mechanism","无需符号即可粗略估计数量，其精度与后续符号数学成就相关。"],
["E222","数感与符号数学的衔接","Number Sense and Symbolic Math","brain","math-brain","dehaene",1997,"mechanism","符号数字通过「三重编码」与数量、言语、视觉表征相连，是算术的基础。"],
["E223","数学焦虑的机制","Math Anxiety Mechanisms","brain","math-brain","lyons",2012,"mechanism","数学焦虑占用工作记忆资源并激活威胁回路，形成回避与成绩下降的循环。"],
["E224","工作记忆与数学问题解决","Working Memory and Math Problem Solving","brain","math-brain","geary",2004,"mechanism","多步算术与文字题高度依赖工作记忆，容量限制是常见错误来源。"],
["E225","计算障碍","Dyscalculia","brain","math-brain","butterworth",2005,"theory","核心缺陷在数量表征而非一般智力，需针对数感与事实提取的专门干预。"],
["E226","空间能力与 STEM","Spatial Ability and STEM","brain","math-brain","uttal",2013,"mechanism","空间可视化能力预测 STEM 成就，且可通过训练提升并部分迁移。"],
/* ── 脑科学 · 神经迷思与转化边界（6） ── */
["E227","左右脑分工迷思","The Left-Brain / Right-Brain Myth","brain","neuromyth","gazzaniga",1967,"critique","裂脑研究显示分工存在于特定加工，但「左脑人/右脑人」的学习主张无依据。"],
["E228","「10% 大脑」迷思","The 10% Brain Myth","brain","neuromyth","howard_jones",2014,"critique","几乎全部脑区在日常活动中都被使用，「只用了 10%」是长期误传。"],
["E229","关键期绝对化迷思","The Absolute Critical Period Myth","brain","neuromyth","goswami",2006,"critique","把敏感期简化为「错过即永久失败」，会误导早教投资与对后期干预的放弃。"],
["E230","脑训练与健脑游戏宣称","Brain Training Claims","brain","neuromyth","owen",2010,"critique","商业脑训练多只能提升训练任务本身，对学业与日常认知的迁移证据不足。"],
["E231","神经迷思在教师中的流行","Neuromyths Among Teachers","brain","neuromyth","dekker",2012,"critique","大量教师相信学习风格、左右脑等迷思，说明「神经」话语易被误用为权威。"],
["E232","心智—脑—教育桥接的边界","Mind–Brain–Education Bridging","brain","neuromyth","bruer",1997,"critique","从神经机制到教学处方跨越多个层级，需经认知与课堂研究中介，不可直接跳跃。"],
]);
