import type { Locale } from "./config";
import type { GuideDictionary } from "./guide-types";

export const totkGuideZh: GuideDictionary = {
  meta: {
    title: "王国之泪练强攻略：把林克练成天地深渊无所不造的左纳乌工程师 | 荒野与王泪攻略书",
    description:
      "一份照着走就能变强的《塞尔达传说：王国之泪》成长路线图——空岛拿齐究极手与余料建造，开天望塔、点光根、堆精力与电池，再用余料、贤者、盾反和左纳乌装置把天地深渊全部踏平。",
    keywords: [
      "王国之泪攻略",
      "TOTK 攻略",
      "王国之泪新手攻略",
      "究极手",
      "余料建造",
      "左纳乌",
      "天望塔",
      "光根",
      "贤者",
      "大师剑",
    ],
    ogAlt: "王国之泪练强路线图封面：天空岛、光之龙与左纳乌纹章",
  },
  nav: {
    brand: "TOTK 练强攻略",
    links: [
      { label: "路线", href: "#route" },
      { label: "余料实验室", href: "#fuse" },
      { label: "变强", href: "#growth" },
      { label: "战斗", href: "#combat" },
      { label: "料理", href: "#food" },
      { label: "五贤者", href: "#beasts" },
      { label: "强敌", href: "#enemies" },
      { label: "清单", href: "#checklist" },
    ],
    crossLabel: "王国之泪攻略",
    home: "← 主攻略",
    ariaLabel: "攻略章节导航",
    langLabel: "Language",
    menuLabel: "打开菜单",
    closeLabel: "关闭菜单",
  },
  hero: {
    kicker: "从始之空岛醒来，到城堡深渊决战加侬多夫",
    titleLead: "王国之泪练强攻略：",
    titleMain: "把林克练成天地深渊无所不造的",
    titleEm: "左纳乌工程师",
    lead: "旷野之息教你读懂世界，王国之泪让你动手重组世界。这份路线图陪你拆解三层海拉鲁：空岛先拿齐究极手、余料建造、通天术和倒转乾坤，落地开天望塔、下潜点光根，稳定堆精力、电池和防具，再用余料、贤者之力和左纳乌装置，把天上、地表、深渊一层层拼回你的脚下。",
    imageAlt: "王国之泪练强路线图英雄图：天空岛、光之龙与左纳乌纹章",
    panelTitle: "优先级速记",
    stats: [
      { value: "2圈", label: "前期先把精力堆到两圈——爬空岛、跳伞、下深渊全靠它，回收大师剑也正好卡在两圈。" },
      { value: "4光", label: "每 4 个光之祝福，到女神像换 1 颗心心或 1 段精力。" },
      { value: "余料", label: "余料建造才是真实攻击力：再烂的棍子，融上银怪角或龙角也能脱胎换骨。" },
      { value: "电池", label: "左纳乌电池槽越多，载具和机关跑得越久——优先下深渊找左纳乌矿换大电池。" },
    ],
  },
  route: {
    eyebrow: "天地深渊三线走",
    title: "别急着追主线，先把天、地、深渊这三层世界都变成你的素材库。",
    note: "《王国之泪》的强度不写在等级条上，而藏在你的脑洞和素材里。天望塔、神庙、光根、左纳乌装置和余料素材收得越全，林克能造的东西就越离谱。",
    cards: [
      {
        tag: "01 / 初期",
        title: "始之空岛拿齐 4 大能力，再落地",
        text: "在始之空岛把究极手、余料建造、通天术、倒转乾坤一次性拿全，别急着跳下去。落地后直奔监视堡(Lookout Landing)接主线、领滑翔伞。",
        points: ["4 个能力每个都先想三种用法。", "空岛顺手做神庙、捡左纳乌装置。", "落地先去监视堡，地图和主线都从这里铺开。"],
      },
      {
        tag: "02 / 中期",
        title: "开天望塔，地表＋深渊双线推进",
        text: "每进一个区域先弹射天望塔开图，再沿路做神庙；同时从地面的深穴下到地底，点亮光根照路。地表神庙和地底光根的位置常常互为镜像。",
        points: ["天望塔弹上高空，顺手滑翔扫神庙。", "地底先点光根，再战斗、再采矿。", "攒左纳乌矿，去交换商那儿换电池。"],
      },
      {
        tag: "03 / 成型",
        title: "5 贤者、电池扩容、回收大师剑",
        text: "按舒服的顺序集齐贤者之力，把电池扩到两三行；精力满两圈后，去追光之龙、从龙头上回收大师剑，再准备海拉鲁城堡与其下方深渊的决战。",
        points: ["风之贤者丘栗优先，机动性质变。", "学会用银怪角、龙角做高伤余料武器。", "精力满两圈，追光之龙拔大师剑。"],
      },
    ],
    stageLabel: "选择游戏阶段",
    stages: [
      {
        id: "early",
        name: "前 10 小时",
        small: "空岛打基础",
        panel: {
          title: "始之空岛：先学会“解决问题”这件事",
          intro:
            "这个阶段不追神装，追的是把 4 大能力玩明白，并活着落地。究极手搭桥、余料建造续命、通天术抄近路、倒转乾坤救场——每个都先在空岛练熟。",
          goalsLabel: "本阶段目标",
          goals: [
            "在空岛拿齐究极手、余料建造、通天术、倒转乾坤。",
            "每个能力都逼自己找出三种非常规用法。",
            "落地监视堡，接主线、拿滑翔伞、开第一座天望塔。",
          ],
          avoidLabel: "少踩这些坑",
          avoid: [
            "别急着跳下空岛——4 个能力没拿全，落地会很难受。",
            "别忽视左纳乌装置——风扇、火炎放出器早早就能改变战局。",
            "别死磕单一解法，王泪的谜题往往有好几个歪门答案。",
          ],
        },
      },
      {
        id: "mid",
        name: "10 到 50 小时",
        small: "三线成型",
        panel: {
          title: "10 到 50 小时：靠神庙、光根、贤者三线成型",
          intro:
            "开始系统地开天望塔、清神庙、点光根、收贤者。地表负责资源和贤者，地底负责电池和矿，天空负责素材和视野——三层一起推，探索半径才会真的变大。",
          goalsLabel: "本阶段目标",
          goals: [
            "精力至少两圈，心心慢慢补到 10 颗以上。",
            "常用防具升 2 星，备好攻击、防御、抗瘴三类料理。",
            "至少拿到风、水两位贤者，机动和续航都质变。",
          ],
          avoidLabel: "少踩这些坑",
          avoid: [
            "别裸武器作战——任何武器都该融一个余料再用。",
            "别在深渊裸跑——没光根、没耐瘴装备会被瘴气蚕食。",
            "别一锅乱炖多种效果，料理效果会互相覆盖。",
          ],
        },
      },
      {
        id: "late",
        name: "后期探索",
        small: "刷强度",
        panel: {
          title: "后期探索：大师剑、贤者全开、深渊与城堡扫荡",
          intro:
            "这时你已经不缺基本生存力，可以开始追大师剑、最强余料武器、电池满槽、自动制造蓝图，以及城堡和其下方深渊的高价值资源。",
          goalsLabel: "本阶段目标",
          goals: [
            "精力满两圈，追光之龙回收大师剑。",
            "刷白银、人马素材，做出攻击力爆表的余料武器。",
            "集齐 5 贤者，电池扩到两三行，存几套自动制造蓝图。",
          ],
          avoidLabel: "少踩这些坑",
          avoid: [
            "别只靠一套打法，王泪奖励的是临场拼装的脑洞。",
            "别让贤者糊一脸——必要时把贤者收起来再放出来。",
            "别忽视耐瘴装备和初虹花种子，深渊后期全靠它们。",
          ],
        },
      },
    ],
  },
  growth: {
    eyebrow: "六条工程线",
    title: "林克变强的 6 个入口，每个都比裸捡一把新武器更值。",
    note: "王泪里武器照样会坏，但“余料建造”让任何垃圾都能回炉重造。真正的战斗力来自素材循环：精力带你去更远，电池让机关转更久，余料和贤者让伤害和容错一起起飞。",
    cards: [
      {
        badge: "Shrine",
        title: "神庙与光根：心心、精力与地图",
        steps: [
          "看见神庙先标记，能做就立刻做。",
          "每 4 个光之祝福，到女神像换心心或精力。",
          "下深渊点光根照路，位置常和地表神庙互为镜像。",
        ],
      },
      {
        badge: "Armor",
        title: "防具：容错与抗瘴的核心",
        steps: [
          "先升爬行套、潜行套，深渊备耐瘴系装备。",
          "找大妖精乐团复活妖精，用素材强化。",
          "常用套装至少 2 星，关键套装冲 4 星。",
        ],
      },
      {
        badge: "Cooking",
        title: "料理与药：最稳的“外挂”",
        steps: [
          "同类效果一起煮，别混效果。",
          "深渊用阳光料理回满被瘴气吃掉的心心。",
          "出门常备补血、精力、抗瘴、环境抗性四类。",
        ],
      },
      {
        badge: "Fuse",
        title: "余料建造：你真正的攻击力",
        steps: [
          "武器融怪物素材：银怪角、龙角、人马素材伤害爆表。",
          "盾牌融弹簧能弹反起跳，融矿车能盾滑赶路。",
          "箭融蝙蝠眼珠＝自动追踪，融朽木果＝烟雾掩护。",
        ],
      },
      {
        badge: "Zonai",
        title: "左纳乌装置与电池：把脑洞变载具",
        steps: [
          "深渊找左纳乌矿，去交换商扩电池槽。",
          "风扇＋操纵杆＝飞行器，火炎放出器＝清场。",
          "解锁自动制造，把好用的载具存成蓝图。",
        ],
      },
      {
        badge: "Map",
        title: "三层世界：天、地、深渊一起开",
        steps: [
          "新区域先弹天望塔，居高临下标点。",
          "从深穴下到地底，先点光根再行动。",
          "赶路时顺手收矿、素材、左纳乌装置和呀哈哈。",
        ],
      },
    ],
  },
  combat: {
    eyebrow: "拼装出来的战斗力",
    title: "从“被瘴气之手追着跑”到“主动上门刷人马角”。",
    note: "王泪战斗的核心是“余料＋闪避＋装置”。锁定、闪避、盾反照样要练，但真正拉开差距的是：你给武器、盾、箭融了什么，以及你能不能临场用地形和左纳乌装置把强敌碾过去。",
    drills: [
      {
        summary: "完美闪避(林克时间)：最先该练的核心技",
        intro: "练习对象：波克布林、蜥蜴战士、莫力布林。",
        steps: [
          "按住 ZL 锁定敌人。",
          "敌人横扫时往后跳，直刺或冲锋时往侧面跳。",
          "画面慢下来后连按 Y，打满整套林克时间。",
          "练到能连续触发 3 次，再去碰更强的敌人。",
        ],
      },
      {
        summary: "余料武器与弓箭：把“捡垃圾”变成“造神兵”",
        intro: "这是王泪最大的战力来源。长按 L 选余料建造，对准素材：武器按 Y 融、盾牌按 ZR 融。",
        steps: [
          "武器融银怪角、龙角、人马素材，伤害成倍上涨。",
          "拉弓时按上方向键给箭融素材：蝙蝠眼珠＝追踪。",
          "怕浪费就先融便宜素材练手，别囤着舍不得。",
          "盾牌融弹簧能盾反弹起，融矿车能盾滑赶路。",
        ],
      },
      {
        summary: "盾反与盾牌余料：弹反加起跳",
        intro: "王泪没有了守护者，但盾反照样能弹回箭矢和能量弹，还能配合盾牌余料玩出花。",
        steps: [
          "按住 ZL 举盾正对目标。",
          "在攻击命中的瞬间按 A，成功会把它弹回去。",
          "盾融弹簧：盾反同时把自己弹上天，接弓箭爆头。",
          "坏了也别心疼，留几面普通盾专门练时机。",
        ],
      },
      {
        summary: "瘴气之手与强敌：用装置和地形碾过去",
        intro: "瘴气之手会缠死你，清掉后还会召唤幻影加侬。别站着挨打，用范围和高度压制。",
        steps: [
          "先用炸弹花、火炎放出器或贤者能力做范围输出。",
          "站高处或浮空石上拉弓，瘴气之手够不到你。",
          "手清掉后幻影加侬出现，用闪避＋林克时间收掉。",
          "实在难受就直接跑——王泪里撤退也是策略。",
        ],
      },
    ],
    controlsTitle: "常用操作速查（Switch）",
    keys: [
      { key: "ZL", desc: "锁定、举盾、拉弓瞄准" },
      { key: "ZR", desc: "射箭；融合盾牌时也按它" },
      { key: "X", desc: "跳跃，配合方向触发闪避" },
      { key: "Y", desc: "攻击；融合武器时选这个" },
      { key: "A", desc: "互动、究极手抓取；举盾时按下＝盾反" },
      { key: "B", desc: "冲刺奔跑、翻滚取消" },
      { key: "L", desc: "长按打开能力盘：究极手/余料/通天术/倒转乾坤/自动制造" },
      { key: "↑十字键", desc: "拉弓时给箭融合素材" },
    ],
  },
  food: {
    eyebrow: "深渊里的补给学",
    title: "会做饭、会调药的林克，比只会挥棍的林克强太多。",
    note: "每次出门，身上至少带补血、精力、攻击或防御、抗瘴/环境抗性四类。深渊尤其要带阳光料理——只有它能补回被瘴气吃掉的心心。",
    recipes: [
      {
        badge: "补命",
        title: "生命黄心料理",
        text: "探索和打 Boss 前最稳的保险。黄心能把低心心阶段的暴毙风险直接抹平。",
        materials: "推荐：生命榴莲、生命松露、生命萝卜。同类越多，临时黄心越多。",
      },
      {
        badge: "输出",
        title: "攻击力料理",
        text: "打人马、三头龙、神殿 Boss 时吃。高攻余料武器配攻击料理，战斗时间会短一大截。",
        materials: "推荐：大剑香蕉、大剑蘑菇、大剑鲷鱼。别和防御材料混煮。",
      },
      {
        badge: "抗瘴",
        title: "阳光料理（回瘴气心心）",
        text: "深渊的命脉。被瘴气锁掉的心心普通补血补不回来，只有用太阳花煮的阳光料理能解。",
        materials: "推荐：太阳花(Sundelion)。耐瘴上限主要靠装备和初虹花照明撑。",
      },
      {
        badge: "探索",
        title: "精力与环境抗性料理",
        text: "爬空岛、滑翔、下深渊，以及寒冷、炎热、电击区域全靠它。别因为少一件衣服就停下脚步。",
        materials: "推荐：精力蘑菇、精力鲈鱼、暖暖草果、冰冷蘑菇、电击果。",
      },
    ],
  },
  beasts: {
    eyebrow: "五贤者的继承",
    title: "推荐先拿能改变机动和容错的贤者之力。",
    note: "新一代五贤者从前代英杰与古代左纳乌手中继承了秘石与意志。贤者没有绝对顺序，但新手按这条线会舒服很多；每位贤者的能力要靠近他、按 A 才能触发；雷之神殿和魂之神殿更靠后，建议装备、料理和余料都成熟后再去。",
    cards: [
      {
        order: "1",
        badge: "利特村",
        title: "风之神殿 · 丘栗",
        text: "能力：丘栗的突风。在你脚下刮起一阵上升风，跳伞、赶路、空中拉弓全面起飞，王泪版的“力巴尔的勇猛”。",
        points: ["前置要扛过利特村的暴风雪，备好抗寒。", "机动性优先，几乎所有人都推荐第一个做。", "拿到后回头扫一遍神庙和天空岛。"],
      },
      {
        order: "2",
        badge: "卓拉领地",
        title: "水之神殿 · 希多",
        text: "能力：希多给武器裹上水盾，既加伤又能挡下一次攻击，容错很高。",
        points: ["前置要先清掉卓拉领地上空的污泥。", "备好上升手段（究极手搭台、通天术）。", "拿到后更适合去练强敌。"],
      },
      {
        order: "3",
        badge: "鼓隆城",
        title: "火之神殿 · 阿沅",
        text: "能力：让阿沅化作炮弹冲撞，撞碎矿石和重甲敌人特别好用。",
        points: ["火山区备好防火装备或耐火药。", "别穿木制装备，会直接烧起来。", "沿路留意矿点，顺手赚卢比。"],
      },
      {
        order: "4",
        badge: "格鲁德小镇",
        title: "雷之神殿 · 露珠",
        text: "能力：露珠召唤落雷，配合金属武器或导电箭，对成群敌人和金属甲怪是范围爆发。",
        points: ["前置要扛过格鲁德的沙尘暴。", "备好抗电料理或橡胶套。", "雨天和水面会放大雷的效果。"],
      },
      {
        order: "5",
        badge: "魂之神殿 / 深渊",
        title: "魂之神殿 · 米涅鲁",
        text: "能力：驾驶米涅鲁的左纳乌构造体格斗，配合余料能打出一台“机甲”。",
        points: ["要先在深渊集齐构造体的部件。", "靠后再做，前面先攒够电池和素材。", "构造体能扛能打，攻坚和过深渊都好用。"],
      },
    ],
  },
  enemies: {
    eyebrow: "行走的素材提款机",
    title: "最难的敌人，也是最好的余料素材提款机。",
    note: "别第一次见就硬上。先观察招式、带足盾和料理，用低成本方式试错。打赢一次你就会发现：它们身上的角、爪、鳞，正是你下一把神兵的余料。",
    cards: [
      {
        badge: "Lynel",
        title: "人马",
        text: "练闪避、爆头和骑乘。它的角是全游戏顶级余料素材，骑在背上输出不掉耐久——刷角＝刷神兵。",
        points: ["横扫后跳，突刺侧跳，触发林克时间。", "弓箭爆头打硬直，靠近按 A 骑乘。", "白银人马的角融上武器，伤害爆表。"],
      },
      {
        badge: "Gleeok",
        title: "古栗欧克（三头龙）",
        text: "王泪最帅也最硬的野外强敌，火/冰/雷三种属性。打掉三个头的血条它就会坠地，趁机猛攻。",
        points: ["弓箭打头，属性相克的箭伤害更高。", "武器融浮游石往天上扔，造个空中立足点。", "站浮游石上用通天术＋俯冲，做“林克时间永动机”。"],
      },
      {
        badge: "Gloom Hands",
        title: "瘴气之手 → 幻影加侬",
        text: "一坨乱爬的瘴气手，缠住就很难脱身，清掉后还会召唤幻影加侬。处理它靠范围和高度，别站着挨。",
        points: ["用炸弹花、火炎放出器或贤者做范围伤害。", "站高处或浮空石上拉弓，手够不到你。", "幻影加侬出现后闪避＋林克时间收掉，掉落不错的剑。"],
      },
    ],
  },
  checklist: {
    eyebrow: "今天造点什么",
    title: "不知道今天玩什么，就照这个循环推进。",
    note: "勾选状态会存在你的浏览器本地。每次开游戏前看一眼，挑 3 到 5 个小目标，林克就会稳定变强。",
    groups: [
      {
        title: "开局到中期",
        tasks: [
          { id: "skyisland", label: "在始之空岛拿齐究极手、余料建造、通天术、倒转乾坤。" },
          { id: "landing", label: "落地监视堡，接主线、拿滑翔伞。" },
          { id: "tower1", label: "解锁附近天望塔，弹上高空打开地图。" },
          { id: "stamina2", label: "用光之祝福把精力升到两圈。" },
          { id: "lightroot1", label: "下到地底，点亮第一批光根，开始攒左纳乌矿。" },
        ],
      },
      {
        title: "成型到通关",
        tasks: [
          { id: "windtemple", label: "先做风之神殿，拿到丘栗的突风。" },
          { id: "battery", label: "在交换商处把左纳乌电池扩到两三行。" },
          { id: "fuse", label: "学会用银怪角、龙角做高伤余料武器。" },
          { id: "mastersword", label: "精力满两圈，追光之龙回收大师剑。" },
          { id: "castle", label: "探索海拉鲁城堡与其下方深渊，准备最终决战。" },
        ],
      },
    ],
  },
  footer: {
    note: "这份攻略按普通新手的体验来组织，重点是让你把天、地、深渊三层世界，和究极手、余料、贤者这套系统真正盘活。王泪没有唯一解——卡住了就去做神庙、点光根、扩电池、调料理，然后带着新脑洞回来。",
    disclaimer:
      "非官方粉丝攻略。《塞尔达传说》《王国之泪》均为任天堂的商标/作品；本页使用原创视觉与编辑文案。",
  },
};

export const totkGuideEn: GuideDictionary = {
  meta: {
    title: "Tears of the Kingdom Walkthrough: Build Link Into a Sky-to-Depths Zonai Engineer | Wild & Tears Field Guide",
    description:
      "A follow-along growth route for The Legend of Zelda: Tears of the Kingdom — grab Ultrahand and Fuse on the Great Sky Island, raise Skyview Towers, light Lightroots, bank stamina and batteries, then use Fuse, the Sages, parries, and Zonai devices to flatten the sky, surface, and Depths.",
    keywords: [
      "Tears of the Kingdom walkthrough",
      "TOTK guide",
      "TOTK beginner guide",
      "Ultrahand",
      "Fuse",
      "Zonai devices",
      "Skyview Tower",
      "Lightroots",
      "Sages",
      "Master Sword",
    ],
    ogAlt: "Tears of the Kingdom growth-route cover: sky islands, the Light Dragon, and a Zonai emblem",
  },
  nav: {
    brand: "TOTK Walkthrough",
    links: [
      { label: "Route", href: "#route" },
      { label: "The Fuse bench", href: "#fuse" },
      { label: "Get strong", href: "#growth" },
      { label: "Combat", href: "#combat" },
      { label: "Cooking", href: "#food" },
      { label: "Five Sages", href: "#beasts" },
      { label: "Tough foes", href: "#enemies" },
      { label: "Checklist", href: "#checklist" },
    ],
    crossLabel: "TOTK guide",
    home: "← Main guide",
    ariaLabel: "Walkthrough sections",
    langLabel: "语言",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
  },
  hero: {
    kicker: "From waking on the Great Sky Island to the Ganondorf showdown beneath the castle",
    titleLead: "Tears of the Kingdom walkthrough: ",
    titleMain: "build Link into a sky-to-Depths ",
    titleEm: "Zonai engineer",
    lead: "Breath of the Wild taught you to read the world; Tears of the Kingdom lets you rebuild it. This route helps you take apart all three layers of Hyrule: grab Ultrahand, Fuse, Ascend, and Recall on the sky island, then land and raise Skyview Towers, dive to light Lightroots, bank stamina, batteries, and armor — and use Fuse, the Sages, and Zonai devices to reassemble the sky, surface, and Depths under your feet.",
    imageAlt: "Tears of the Kingdom growth-route hero art: sky islands, the Light Dragon, and a Zonai emblem",
    panelTitle: "Priorities at a glance",
    stats: [
      { value: "2 wheels", label: "Bank two stamina wheels early — sky islands, gliding, and Depths dives lean on it, and it's exactly what the Master Sword needs." },
      { value: "4 lights", label: "Every 4 Lights of Blessing trade for one heart or stamina vessel at a Goddess Statue." },
      { value: "Fuse", label: "Fuse is your real attack stat: any junk stick transforms once you fuse a silver horn or a dragon part." },
      { value: "Batteries", label: "More Zonai battery cells = longer-running vehicles and machines — dive the Depths for Zonaite to grow it." },
    ],
  },
  route: {
    eyebrow: "Sky, surface, Depths",
    title: "Don't chase the main quest yet — first turn all three layers (sky, surface, Depths) into your parts bin.",
    note: "In Tears of the Kingdom, power isn't an XP bar — it's your imagination and your materials. The more Skyview Towers, shrines, Lightroots, Zonai devices, and Fuse materials you gather, the more absurd the things Link can build.",
    cards: [
      {
        tag: "01 / Early",
        title: "Grab all 4 abilities on the Great Sky Island, then land",
        text: "Get Ultrahand, Fuse, Ascend, and Recall on the Great Sky Island before you drop. Then land and head straight to Lookout Landing for the main quest and your Paraglider.",
        points: ["Find three uses for each ability first.", "Clear sky shrines and grab Zonai devices on the way.", "Land at Lookout Landing — the map and story open from there."],
      },
      {
        tag: "02 / Mid",
        title: "Raise Skyview Towers, push surface + Depths together",
        text: "In each region, launch a Skyview Tower to open the map, then clear shrines; meanwhile drop through chasms into the Depths and light Lightroots. Surface shrines and Depths Lightroots often mirror each other.",
        points: ["Launch a tower, then glide and scope shrines.", "In the Depths, light Lightroots first, then fight and mine.", "Bank Zonaite and trade it for batteries at a Forge Construct."],
      },
      {
        tag: "03 / Online",
        title: "Five Sages, battery expansion, the Master Sword",
        text: "Collect the Sage vows in whatever order feels good and grow your battery to two or three rows. With two full stamina wheels, chase the Light Dragon and pull the Master Sword from her head, then prep the showdown at Hyrule Castle and the chasm beneath it.",
        points: ["Tulin (Wind) first — traversal transforms.", "Learn to Fuse silver horns and dragon parts for big damage.", "Two full stamina wheels → chase the Light Dragon for the Master Sword."],
      },
    ],
    stageLabel: "Pick a game stage",
    stages: [
      {
        id: "early",
        name: "First 10 hours",
        small: "Sky-island base",
        panel: {
          title: "Great Sky Island: just learn to solve problems",
          intro:
            "This stage isn't about godly gear — it's about truly understanding the four abilities and landing alive. Ultrahand bridges, Fuse keeps you swinging, Ascend cuts corners, Recall bails you out — drill each one up here first.",
          goalsLabel: "Goals this stage",
          goals: [
            "Grab Ultrahand, Fuse, Ascend, and Recall on the sky island.",
            "Force yourself to find three unconventional uses for each.",
            "Land at Lookout Landing; take the main quest and Paraglider, raise your first Skyview Tower.",
          ],
          avoidLabel: "Mistakes to skip",
          avoid: [
            "Don't drop too early — landing without all four abilities is rough.",
            "Don't ignore Zonai devices — fans and flame emitters change fights from the start.",
            "Don't fixate on one solution; TOTK puzzles usually have several janky answers.",
          ],
        },
      },
      {
        id: "mid",
        name: "10 to 50 hours",
        small: "Coming together",
        panel: {
          title: "10 to 50 hours: come together via shrines, Lightroots, and Sages",
          intro:
            "Start raising towers, clearing shrines, lighting Lightroots, and recruiting Sages systematically. Surface gives resources and Sages, the Depths give batteries and ore, the sky gives materials and sightlines — push all three and your radius really grows.",
          goalsLabel: "Goals this stage",
          goals: [
            "At least two stamina wheels; ease hearts past 10.",
            "Main armor to 2 stars; stock attack, defense, and gloom-recovery meals.",
            "Get at least Tulin (Wind) and Sidon (Water) — traversal and survivability transform.",
          ],
          avoidLabel: "Mistakes to skip",
          avoid: [
            "Don't fight with bare weapons — Fuse something onto everything.",
            "Don't run the Depths bare — without Lightroots and gear, gloom eats you alive.",
            "Don't toss mixed effects in one pot — buffs overwrite each other.",
          ],
        },
      },
      {
        id: "late",
        name: "Late exploration",
        small: "Grind power",
        panel: {
          title: "Late exploration: Master Sword, all Sages, the Depths and castle sweep",
          intro:
            "Basic survival is handled, so chase the Master Sword, top-tier Fuse weapons, full battery rows, Autobuild blueprints, and the high-value loot in the castle and the chasm beneath it.",
          goalsLabel: "Goals this stage",
          goals: [
            "Two full stamina wheels, then chase the Light Dragon for the Master Sword.",
            "Farm silver and Lynel parts for monstrously high-damage Fuse weapons.",
            "Collect all five Sages, expand the battery to 2–3 rows, save a few Autobuild blueprints.",
          ],
          avoidLabel: "Mistakes to skip",
          avoid: [
            "Don't lean on one playstyle — TOTK rewards on-the-fly contraptions.",
            "Don't let Sages crowd your view — dismiss and resummon when needed.",
            "Don't skimp on gloom-resist gear and Brightbloom Seeds; the late Depths demand them.",
          ],
        },
      },
    ],
  },
  growth: {
    eyebrow: "Six engineering lines",
    title: "Six ways Link gets stronger — every one beats grabbing one more bare weapon.",
    note: "Weapons still break in TOTK, but Fuse lets any piece of junk be reforged. Real power comes from the material loop: stamina takes you farther, batteries keep machines running, and Fuse plus the Sages send damage and survivability up together.",
    cards: [
      {
        badge: "Shrine",
        title: "Shrines & Lightroots: hearts, stamina, map",
        steps: [
          "Spot a shrine, mark it, clear it when you can.",
          "Trade every 4 Lights of Blessing at a Goddess Statue.",
          "Light Lightroots in the Depths — they mirror surface shrines.",
        ],
      },
      {
        badge: "Armor",
        title: "Armor: error margin and gloom resist",
        steps: [
          "Climbing and Stealth sets first; gloom-resist gear for the Depths.",
          "Find the Great Fairies (via the troupe) and upgrade with materials.",
          "Main sets to 2 stars, key sets to 4.",
        ],
      },
      {
        badge: "Cooking",
        title: "Cooking & elixirs: the most reliable “cheat”",
        steps: [
          "Cook same-effect ingredients together — never mix.",
          "In the Depths, Sunny meals restore gloom-locked hearts.",
          "Pack healing, stamina, gloom-recovery, and environment resist.",
        ],
      },
      {
        badge: "Fuse",
        title: "Fuse: your actual attack stat",
        steps: [
          "Fuse monster parts to weapons — silver horns, dragon parts, Lynel parts hit huge.",
          "Fuse a spring to a shield to bounce-launch; a cart to shield-surf.",
          "Fuse a Keese eyeball to arrows for homing; a Puffshroom for cover.",
        ],
      },
      {
        badge: "Zonai",
        title: "Zonai devices & batteries: build your ideas",
        steps: [
          "Mine Zonaite in the Depths; expand battery cells at a Forge Construct.",
          "Fan + steering stick = aircraft; flame emitter = crowd control.",
          "Unlock Autobuild and save your best rigs as blueprints.",
        ],
      },
      {
        badge: "Map",
        title: "Three layers: sky, surface, Depths together",
        steps: [
          "New region? Launch the Skyview Tower and mark from above.",
          "Drop through a chasm; light Lightroots before anything else.",
          "While traveling, grab ore, materials, Zonai devices, and Koroks.",
        ],
      },
    ],
  },
  combat: {
    eyebrow: "Combat you assemble",
    title: "From “running from Gloom Hands” to “hunting Lynels for their horns”.",
    note: "TOTK combat is Fuse + dodging + devices. You still drill lock-on, dodges, and parries — but the real gap is what you fused onto your weapon, shield, and arrows, and whether you can grind an elite down with terrain and a Zonai device on the fly.",
    drills: [
      {
        summary: "Flurry Rush: the first skill to drill",
        intro: "Good sparring partners: Bokoblins, Lizalfos, Moblins.",
        steps: [
          "Hold ZL to lock on.",
          "Backflip when they sweep; sidehop when they thrust or charge.",
          "When time slows, mash Y for the full Flurry Rush.",
          "Chain it 3 times in a row before facing tougher foes.",
        ],
      },
      {
        summary: "Fuse weapons & arrows: turn junk into legendary gear",
        intro: "This is TOTK's biggest power source. Hold L, pick Fuse, aim at a material, then press Y for weapons or ZR for shields.",
        steps: [
          "Fuse silver horns, dragon parts, or Lynel parts for multiplied damage.",
          "While aiming a bow, press Up to fuse the arrow — Keese eyeball = homing.",
          "Practice on cheap materials first; don't hoard the good ones forever.",
          "Fuse a spring to a shield to parry-launch, a cart to shield-surf.",
        ],
      },
      {
        summary: "Parry & shield Fuse: deflect, then launch",
        intro: "No more Guardians, but parrying still reflects arrows and energy blasts — and shield Fuse turns it into a toolkit.",
        steps: [
          "Hold ZL to raise the shield, facing the target.",
          "Press A the instant the hit lands to reflect it.",
          "Spring shield: a parry launches you skyward — follow with a bow headshot.",
          "Keep a few plain shields just for timing practice.",
        ],
      },
      {
        summary: "Gloom Hands & elites: bury them with devices and terrain",
        intro: "Gloom Hands swarm and pin you, then summon Phantom Ganon. Don't stand and trade — control with area and height.",
        steps: [
          "Open with bomb flowers, a flame emitter, or a Sage for AoE.",
          "Shoot from high ground or a floating stone — the hands can't reach you.",
          "When Phantom Ganon appears, dodge into Flurry Rush to finish it (good sword drop).",
          "If it's ugly, just run — retreating is a strategy in TOTK too.",
        ],
      },
    ],
    controlsTitle: "Quick control reference (Switch)",
    keys: [
      { key: "ZL", desc: "Lock on, raise shield, aim bow" },
      { key: "ZR", desc: "Fire arrows; also Fuse to a shield" },
      { key: "X", desc: "Jump; add a direction to dodge" },
      { key: "Y", desc: "Attack; Fuse to a weapon" },
      { key: "A", desc: "Interact, Ultrahand grab; press while guarding to parry" },
      { key: "B", desc: "Sprint; roll to cancel" },
      { key: "L", desc: "Hold for the ability wheel: Ultrahand / Fuse / Ascend / Recall / Autobuild" },
      { key: "D-Pad ↑", desc: "Fuse a material to your arrow while aiming" },
    ],
  },
  food: {
    eyebrow: "Supply lines for the Depths",
    title: "A Link who cooks and brews beats a Link who only swings a stick.",
    note: "Heading out, carry four kinds: healing, stamina, attack or defense, and gloom/environment resist. The Depths especially demand Sunny meals — only they restore hearts the gloom has eaten.",
    recipes: [
      {
        badge: "Heal",
        title: "Hearty (yellow heart) meals",
        text: "The safest insurance before exploring or a boss. Yellow hearts erase the early risk of a small heart bar.",
        materials: "Try: Hearty Durian, Hearty Truffle, Hearty Radish. More of the same = more temporary hearts.",
      },
      {
        badge: "Damage",
        title: "Attack-up (Mighty) meals",
        text: "Eat these for Lynels, Gleeoks, and Temple bosses. A high-attack Fuse weapon plus an attack meal slashes fight length.",
        materials: "Try: Mighty Bananas, Razorshroom, Mighty Porgy. Never mix with defense ingredients.",
      },
      {
        badge: "Gloom",
        title: "Sunny meals (restore gloom hearts)",
        text: "The Depths' lifeline. Hearts the gloom locks away can't be healed normally — only Sunny dishes cooked with Sundelion bring them back.",
        materials: "Try: Sundelion. Gloom resistance itself comes from armor and Brightbloom lighting.",
      },
      {
        badge: "Explore",
        title: "Stamina & resistance meals",
        text: "Climbing sky islands, gliding, diving the Depths, and cold/heat/shock zones all come down to these. Don't stop exploring over one missing outfit.",
        materials: "Try: Stamella Shroom, Staminoka Bass, Warm Safflina, Chillshroom, Voltfruit.",
      },
    ],
  },
  beasts: {
    eyebrow: "Inheritance of five Sages",
    title: "Grab the Sage vows that change traversal and survivability first.",
    note: "The new generation of five Sages inherited their secret stones and resolve from the past Champions and the ancient Zonai. There's no fixed order, but this line is friendlier for new players; each Sage's power triggers when you get close and press A; the Lightning and Spirit Temples come later — go once your gear, meals, and Fuse are solid.",
    cards: [
      {
        order: "1",
        badge: "Rito Village",
        title: "Wind Temple · Tulin",
        text: "Ability: Tulin's Gust — a burst of updraft under your feet. Gliding, traveling, and aerial archery all take off. TOTK's answer to Revali's Gale.",
        points: ["Push through the Rito blizzard lead-in; pack cold-resist.", "Traversal-defining — almost everyone takes it first.", "After it, sweep shrines and sky islands again."],
      },
      {
        order: "2",
        badge: "Zora's Domain",
        title: "Water Temple · Sidon",
        text: "Ability: Sidon's water shield — wraps your weapon to add damage and block one hit. Very forgiving.",
        points: ["Clear the sludge over Zora's Domain first.", "Bring ways up high (Ultrahand platforms, Ascend).", "After it you're far readier to train elites."],
      },
      {
        order: "3",
        badge: "Goron City",
        title: "Fire Temple · Yunobo",
        text: "Ability: Yunobo's charge — fires Yunobo as a cannonball, great for smashing ore and heavy-armored foes.",
        points: ["Pack fire-proof gear or elixirs for the volcano.", "No wooden gear here — it bursts into flame.", "Watch for ore along the way for easy rupees."],
      },
      {
        order: "4",
        badge: "Gerudo Town",
        title: "Lightning Temple · Riju",
        text: "Ability: Riju's lightning — calls down a bolt; with a metal weapon or conductive arrows it's huge AoE on packs and metal-armored foes.",
        points: ["Push through the Gerudo sand shroud first.", "Pack shock-resist meals or the Rubber set.", "Rain and water amplify the lightning."],
      },
      {
        order: "5",
        badge: "Spirit Temple / Depths",
        title: "Spirit Temple · Mineru",
        text: "Ability: pilot Mineru's Zonai construct — Fuse it out and you've got a walking tank.",
        points: ["Gather the construct's parts in the Depths first.", "Save it for later, once batteries and materials are stocked.", "The construct tanks and brawls — great for the Depths and bosses."],
      },
    ],
  },
  enemies: {
    eyebrow: "Walking material ATMs",
    title: "The hardest enemies are also your best Fuse-material ATMs.",
    note: "Don't go in swinging on sight. Read the moveset, pack shields and meals, and fail cheaply. Win once and you'll see their horns, claws, and scales are the Fuse parts for your next masterpiece weapon.",
    cards: [
      {
        badge: "Lynel",
        title: "Lynel",
        text: "Drill dodging, headshots, and mounting. Its horn is a top-tier Fuse material game-wide, and riding its back costs no durability — farm horns, forge gods.",
        points: ["Backflip the sweep, sidehop the thrust for Flurry Rush.", "Headshot to stagger, then press A to mount.", "Fuse a silver Lynel horn onto a weapon for absurd damage."],
      },
      {
        badge: "Gleeok",
        title: "Gleeok (three-headed dragon)",
        text: "TOTK's coolest and tankiest field elite, with fire, ice, and shock heads. Down all three head bars and it crashes — then go to town.",
        points: ["Bow the heads; opposite-element arrows hit harder.", "Fuse a floating stone to an arrow and shoot it skyward for a perch.", "Stand on it, Ascend + dive for a near-endless Flurry Rush loop."],
      },
      {
        badge: "Gloom Hands",
        title: "Gloom Hands → Phantom Ganon",
        text: "A crawling clump of gloom hands that pins you, then summons Phantom Ganon once cleared. Beat it with area and height, not a stand-up fight.",
        points: ["AoE with bomb flowers, a flame emitter, or a Sage.", "Shoot from high ground or a floating stone — the hands can't reach.", "When Phantom Ganon appears, Flurry Rush it down for a solid sword drop."],
      },
    ],
  },
  checklist: {
    eyebrow: "What to build today",
    title: "Not sure what to play today? Just run this loop.",
    note: "Your ticks are saved in this browser. Glance here before each session, pick 3 to 5 small goals, and Link gets steadily stronger.",
    groups: [
      {
        title: "Early to mid game",
        tasks: [
          { id: "skyisland", label: "Grab Ultrahand, Fuse, Ascend, and Recall on the Great Sky Island." },
          { id: "landing", label: "Land at Lookout Landing; take the main quest and Paraglider." },
          { id: "tower1", label: "Raise a nearby Skyview Tower and launch up to open the map." },
          { id: "stamina2", label: "Spend Lights of Blessing to reach two stamina wheels." },
          { id: "lightroot1", label: "Drop into the Depths, light your first Lightroots, start banking Zonaite." },
        ],
      },
      {
        title: "Coming together to the finale",
        tasks: [
          { id: "windtemple", label: "Clear the Wind Temple for Tulin's Gust." },
          { id: "battery", label: "Expand your Zonai battery to two or three rows at a Forge Construct." },
          { id: "fuse", label: "Learn to Fuse silver horns and dragon parts for high-damage weapons." },
          { id: "mastersword", label: "Hit two full stamina wheels and chase the Light Dragon for the Master Sword." },
          { id: "castle", label: "Explore Hyrule Castle and the chasm beneath it, and prep for the finale." },
        ],
      },
    ],
  },
  footer: {
    note: "This walkthrough is organized around a typical new player's experience — the goal is to get all three layers (sky, surface, Depths) and the Ultrahand/Fuse/Sage systems truly flowing. TOTK has no single answer: when you're stuck, go clear shrines, light Lightroots, expand batteries, and cook, then come back with a new idea.",
    disclaimer:
      "Unofficial fan guide. The Legend of Zelda and Tears of the Kingdom are trademarks/works of Nintendo; this page uses original visuals and editorial text.",
  },
};

const guides: Record<Locale, GuideDictionary> = {
  zh: totkGuideZh,
  en: totkGuideEn,
};

export function getTotkGuide(locale: Locale): GuideDictionary {
  return guides[locale] ?? guides.zh;
}
