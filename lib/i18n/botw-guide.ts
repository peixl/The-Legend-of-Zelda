import type { Locale } from "./config";

/**
 * Self-contained dictionary for the BOTW walkthrough sub-page
 * (`/[lang]/botw-guide`). Kept separate from the main `Dictionary` so the
 * homepage type stays focused. Icons for the growth cards are chosen in the
 * page (lucide-react), so they live there, not here.
 */
export interface BotwGuideDictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  nav: {
    brand: string;
    links: { label: string; href: string }[];
    home: string;
    ariaLabel: string;
    langLabel: string;
    menuLabel: string;
    closeLabel: string;
  };
  hero: {
    kicker: string;
    titleLead: string;
    titleMain: string;
    titleEm: string;
    lead: string;
    imageAlt: string;
    panelTitle: string;
    stats: { value: string; label: string }[];
  };
  route: {
    eyebrow: string;
    title: string;
    note: string;
    cards: { tag: string; title: string; text: string; points: string[] }[];
    stageLabel: string;
    stages: {
      id: string;
      name: string;
      small: string;
      panel: {
        title: string;
        intro: string;
        goalsLabel: string;
        goals: string[];
        avoidLabel: string;
        avoid: string[];
      };
    }[];
  };
  growth: {
    eyebrow: string;
    title: string;
    note: string;
    cards: { badge: string; title: string; steps: string[] }[];
  };
  combat: {
    eyebrow: string;
    title: string;
    note: string;
    drills: { summary: string; intro: string; steps: string[] }[];
    controlsTitle: string;
    keys: { key: string; desc: string }[];
  };
  food: {
    eyebrow: string;
    title: string;
    note: string;
    recipes: { badge: string; title: string; text: string; materials: string }[];
  };
  beasts: {
    eyebrow: string;
    title: string;
    note: string;
    cards: { order: string; badge: string; title: string; text: string; points: string[] }[];
  };
  enemies: {
    eyebrow: string;
    title: string;
    note: string;
    cards: { badge: string; title: string; text: string; points: string[] }[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    note: string;
    groups: { title: string; tasks: { id: string; label: string }[] }[];
  };
  footer: {
    note: string;
    disclaimer: string;
  };
}

export const botwGuideZh: BotwGuideDictionary = {
  meta: {
    title: "旷野之息练强攻略：把林克练成海拉鲁狠人 | 荒野与王泪攻略书",
    description:
      "一份照着走就能变强的《塞尔达传说：旷野之息》成长路线图——先开塔做神庙、堆精力与防具，再用料理、闪避、盾反和英杰之诗，把战斗难度一点点压下来。",
    keywords: [
      "旷野之息攻略",
      "BOTW 攻略",
      "塞尔达旷野之息",
      "旷野之息新手攻略",
      "神庙",
      "大师剑",
      "盾反",
      "林克时间",
      "英杰之诗",
      "大妖精之泉",
    ],
    ogAlt: "旷野之息练强路线图封面：海拉鲁山脉、神庙与希卡之塔",
  },
  nav: {
    brand: "BOTW 练强攻略",
    links: [
      { label: "路线", href: "#route" },
      { label: "变强", href: "#growth" },
      { label: "战斗", href: "#combat" },
      { label: "料理", href: "#food" },
      { label: "神兽", href: "#beasts" },
      { label: "强敌", href: "#enemies" },
      { label: "清单", href: "#checklist" },
    ],
    home: "← 主攻略",
    ariaLabel: "攻略章节导航",
    langLabel: "Language",
    menuLabel: "打开菜单",
    closeLabel: "关闭菜单",
  },
  hero: {
    kicker: "从初始台地到海拉鲁城堡",
    titleLead: "旷野之息练强攻略：",
    titleMain: "把林克练成真正的",
    titleEm: "海拉鲁狠人",
    lead: "一份可以照着走的成长路线图：先开塔、做神庙，稳定堆精力和防具，再用料理、闪避、盾反和英杰之诗，把战斗难度一点点压下来。",
    imageAlt: "旷野之息练强路线图英雄图：海拉鲁山脉、神庙与希卡之塔",
    panelTitle: "优先级速记",
    stats: [
      { value: "2圈", label: "前期先把精力堆到两圈，爬山、滑翔、探索效率立刻起飞。" },
      { value: "13心", label: "拔大师剑需要 13 颗真实心心，临时黄心不算数。" },
      { value: "4证", label: "每 4 个试炼之证，到女神像换 1 颗心心或 1 段精力。" },
      { value: "4泉", label: "解锁更多大妖精之泉，防具强化上限就越高。" },
    ],
  },
  route: {
    eyebrow: "路线总纲",
    title: "别急着冲最终 Boss，先把整个海拉鲁变成你的补给站。",
    note: "《旷野之息》的强度不写在等级条上，而藏在探索里。地图、高塔、神庙、材料点、驿站和大妖精之泉开得越多，林克就越自由。",
    cards: [
      {
        tag: "01 / 初期",
        title: "出台地后先去卡卡利科村",
        text: "跟着主线找英帕，路上见塔就开、见神庙就做。到卡卡利科买下潜行套，并解锁附近第一座大妖精之泉。",
        points: ["路上别和守护者硬刚。", "顺手多捡苹果、蘑菇、肉和昆虫。", "试炼之证优先拿去换精力。"],
      },
      {
        tag: "02 / 中期",
        title: "去哈特诺村修好希卡之石",
        text: "照相机、图鉴和希卡感应器升级后，找材料、神庙和装备都会轻松很多。之后按区域开塔、沿路清神庙。",
        points: ["给常用材料一一拍照。", "攒卢比买基础套装。", "找齐攀登套，爬山手感质变。"],
      },
      {
        tag: "03 / 成型",
        title: "神兽、13 心、大师剑",
        text: "先拿能提升探索和容错的英杰之诗，再把真实心心堆到 13 颗去克洛格森林拔大师剑。打城堡、神兽和守护者时它都很可靠。",
        points: ["风之神兽或水之神兽优先。", "常用防具至少升到 2 星。", "开始练人马和盾反。"],
      },
    ],
    stageLabel: "选择游戏阶段",
    stages: [
      {
        id: "early",
        name: "前 10 小时",
        small: "打基础",
        panel: {
          title: "前 10 小时：先把“活下去”解决掉",
          intro:
            "这个阶段不追神装，追的是地图感、补给和基础操作——别再因为缺精力、缺料理、缺防具而频繁暴毙。",
          goalsLabel: "本阶段目标",
          goals: [
            "出初始台地后直奔卡卡利科村，沿路顺手做神庙。",
            "解锁第一座大妖精之泉，强化海利亚套或潜行套。",
            "到哈特诺村修好希卡之石，给材料和神庙拍照。",
          ],
          avoidLabel: "少踩这些坑",
          avoid: [
            "别前期就硬刚人马和成群守护者。",
            "别把古代核心、星星碎片这类稀有材料随手卖掉。",
            "别只顾加心心——精力不够，整段探索都会很拖。",
          ],
        },
      },
      {
        id: "mid",
        name: "10 到 40 小时",
        small: "成型",
        panel: {
          title: "10 到 40 小时：靠神庙、防具和神兽成型",
          intro:
            "开始按区域开塔、系统性清神庙、收集套装，并准备第一到第二只神兽。目标只有一个：让探索半径越来越大。",
          goalsLabel: "本阶段目标",
          goals: [
            "精力至少两圈，心心慢慢补到 10 到 13 颗。",
            "常用防具升到 2 星，备好攻击、防御、精力三类料理。",
            "优先挑战风之神兽或水之神兽，拿到起飞或复活能力。",
          ],
          avoidLabel: "少踩这些坑",
          avoid: [
            "别用高级武器砍矿——炸弹或大锤更划算。",
            "别在雨天硬爬陡坡，绕路或等天晴更省时间。",
            "别一锅乱炖多种效果，料理效果会互相覆盖。",
          ],
        },
      },
      {
        id: "late",
        name: "后期探索",
        small: "刷强度",
        panel: {
          title: "后期探索：大师剑、人马、城堡与全图扫荡",
          intro:
            "这时你已经不缺基本生存力，可以开始追高阶武器、套装 4 星、呀哈哈扩容和城堡里的资源。",
          goalsLabel: "本阶段目标",
          goals: [
            "真实心心到 13 后，去克洛格森林拔大师剑。",
            "刷低阶人马，稳定拿到兽神弓、强力近战武器和盾。",
            "摸熟海拉鲁城堡，规划好最终战前的补给路线。",
          ],
          avoidLabel: "少踩这些坑",
          avoid: [
            "别只靠古代箭解决所有强敌，材料成本太高。",
            "别忽视盾牌库存，练盾反是要消耗品的。",
            "别让背包长期塞满低价值武器，及时换新。",
          ],
        },
      },
    ],
  },
  growth: {
    eyebrow: "成长系统",
    title: "林克变强的 6 个入口，每个都比单纯捡武器更重要。",
    note: "武器迟早会坏，所以真正的战斗力来自资源循环：精力让你去到更多地方，材料做出更强料理，防具强化让你吃得住失误。",
    cards: [
      {
        badge: "Shrine",
        title: "神庙：心心与精力的来源",
        steps: [
          "看见神庙先标记，能做就立刻做。",
          "每 4 个试炼之证，到女神像兑换。",
          "前期精力先到两圈，再把心心补到 10～13。",
        ],
      },
      {
        badge: "Armor",
        title: "防具：容错率的核心",
        steps: [
          "卡卡利科先买潜行套，打不动就配士兵套。",
          "找到大妖精之泉，用材料强化。",
          "常用套装至少 2 星，关键套装冲 4 星。",
        ],
      },
      {
        badge: "Cooking",
        title: "料理：最稳的“外挂”",
        steps: [
          "同类效果材料一起煮，别混效果。",
          "生命系做黄心，攻击系堆输出。",
          "出门前备好补血、精力、抗寒抗热三类。",
        ],
      },
      {
        badge: "Gear",
        title: "武器：分级使用",
        steps: [
          "小怪用普通武器，别拿好剑去砍矿。",
          "强敌上高攻武器，配属性箭控场。",
          "背包满了就清低攻武器，别舍不得。",
        ],
      },
      {
        badge: "Map",
        title: "地图：先开塔再扫荡",
        steps: [
          "进新区域先找高塔和驿站。",
          "塔顶用望远镜标神庙、村庄和可疑地形。",
          "赶路时顺手收矿、木柴、昆虫和呀哈哈。",
        ],
      },
      {
        badge: "Skill",
        title: "战斗：林克时间决定上限",
        steps: [
          "锁定敌人，看清横扫、突刺、跳砸。",
          "横扫后跳、突刺侧跳，触发林克时间。",
          "守护者用盾反练时机，先拿普通盾试错。",
        ],
      },
    ],
  },
  combat: {
    eyebrow: "战斗训练",
    title: "从“被追着跑”到“主动找人马练手”。",
    note: "战斗别只会按攻击键。锁定、闪避、盾反、偷袭、环境杀是五个核心动作，把它们练熟，装备差一点也能打得漂亮。",
    drills: [
      {
        summary: "完美闪避：最先该练的核心技",
        intro: "练习对象：波克布林、蜥蜴战士、莫力布林。",
        steps: [
          "按住 ZL 锁定敌人。",
          "敌人横扫时往后跳，直刺或冲锋时往侧面跳。",
          "画面慢下来后连按 Y，打满整套林克时间。",
          "练到能连续触发 3 次，再去碰更强的敌人。",
        ],
      },
      {
        summary: "完美防御（盾反）：守护者激光的答案",
        intro: "先用普通盾练，坏了也不心疼。对守护者时距离越近，声音和蓝光节奏越好判断。",
        steps: [
          "按住 ZL 举盾正对目标。",
          "听到激光蓄力音、看到光束离开炮口的瞬间按 A。",
          "成功会把攻击弹回去；失败就换盾接着练。",
          "熟练后，步行守护者可以先砍腿打硬直。",
        ],
      },
      {
        summary: "偷袭与营地清理：前期最省武器",
        intro: "夜晚、潜行套、潜行料理能大幅降低被发现概率。营地里有爆炸桶时，优先用箭或炸弹引爆。",
        steps: [
          "蹲下从背后靠近睡觉或巡逻的敌人。",
          "出现偷袭提示后按 Y，暴击伤害很高。",
          "先点掉法师、弓手和哨兵，再处理近战。",
          "站高处拉弓进入慢动作，先爆头控场。",
        ],
      },
      {
        summary: "环境杀：少消耗、多收益",
        intro: "海拉鲁不是竞技场，而是你的工具箱。",
        steps: [
          "用磁力抓起铁箱砸向敌人。",
          "炸弹把怪推下悬崖，或顺便炸开矿点。",
          "雷箭打拿金属武器的敌人，雨天效果更猛。",
          "火箭点燃草地造上升气流，再空中拉弓爆头。",
        ],
      },
    ],
    controlsTitle: "常用操作速查（Switch）",
    keys: [
      { key: "ZL", desc: "锁定、举盾、拉弓瞄准" },
      { key: "ZR", desc: "射箭，瞄准时配合 ZL" },
      { key: "X", desc: "跳跃，配合方向触发闪避" },
      { key: "Y", desc: "攻击，林克时间里连击" },
      { key: "A", desc: "互动、骑乘；举盾时按下＝盾反" },
      { key: "B", desc: "冲刺奔跑、翻滚取消" },
      { key: "L", desc: "使用希卡之石符文" },
      { key: "R", desc: "投掷武器、炸弹或铁箱" },
    ],
  },
  food: {
    eyebrow: "料理与资源",
    title: "会做饭的林克，比只会挥剑的林克强太多。",
    note: "每次出门，身上至少带补血、精力、攻击或防御、环境抗性四类料理。材料足时，同一效果 5 个一起煮最省心。",
    recipes: [
      {
        badge: "补命",
        title: "生命黄心料理",
        text: "探索和打 Boss 前最稳的保险。黄心能把前期低心心的暴毙风险直接抹平。",
        materials: "推荐：生命榴莲、生命松露、生命萝卜。同类越多，临时黄心越多。",
      },
      {
        badge: "输出",
        title: "攻击力料理",
        text: "打人马、神兽 Boss、竞技场怪物时吃。高攻武器配攻击料理，战斗时间会短一大截。",
        materials: "推荐：大剑香蕉、大剑蘑菇、大剑鲷鱼。别和防御材料混煮。",
      },
      {
        badge: "硬抗",
        title: "防御力料理",
        text: "还不熟敌人招式时优先吃防御，比攻击更适合新手稳扎稳打。",
        materials: "推荐：铠甲南瓜、铠甲蘑菇、铠甲鲤鱼。配高防具更稳。",
      },
      {
        badge: "探索",
        title: "精力与抗性料理",
        text: "爬山、滑翔，以及寒冷、炎热、电击区域全靠它。别因为少一件衣服就停下脚步。",
        materials: "推荐：精力蘑菇、精力鲈鱼、暖暖草果、冰冷蘑菇、电击果。",
      },
    ],
  },
  beasts: {
    eyebrow: "神兽顺序",
    title: "推荐先拿能改变探索和容错的英杰之诗。",
    note: "神兽没有绝对顺序，但新手按这条线会舒服很多。雷之神兽 Boss 更难，建议装备、料理、闪避都成熟后再去。",
    cards: [
      {
        order: "1",
        badge: "利特村",
        title: "风之神兽（鸟神兽）",
        text: "能力：力巴尔的勇猛。原地起飞，爬山、赶路、开图的体验直接质变。",
        points: ["备好抗寒衣或抗寒料理。", "多带箭，空中战会用到。", "拿到能力后回头扫一遍神庙。"],
      },
      {
        order: "2",
        badge: "卓拉领地",
        title: "水之神兽（象神兽）",
        text: "能力：米法的祈福。倒地自动复活，给新手极高容错。",
        points: ["备好雷箭和补血料理。", "Boss 战留意冰块和冲刺。", "拿到后更适合去练强敌。"],
      },
      {
        order: "3",
        badge: "鼓隆城",
        title: "火之神兽（蜥神兽）",
        text: "能力：达尔克尔的守护。自动挡下关键一击，打守护者和强敌更稳。",
        points: ["买防火装备或备好耐火药。", "火山区别穿木制装备，会烧。", "沿路留意矿点，顺手赚卢比。"],
      },
      {
        order: "4",
        badge: "格鲁德",
        title: "雷之神兽（驼神兽）",
        text: "能力：乌尔波扎的愤怒。范围爆发极强，但前置和 Boss 都更考验操作。",
        points: ["备好抗电料理或橡胶套。", "先练好盾反和侧跳。", "带高防具和大量补给。"],
      },
    ],
  },
  enemies: {
    eyebrow: "强敌打法",
    title: "最难的敌人，其实也是最好的陪练。",
    note: "别第一次见就硬上。先观察招式、带足盾和料理，用低成本方式试错。打赢一次你就会发现：它们都是高级装备的提款机。",
    cards: [
      {
        badge: "Lynel",
        title: "人马",
        text: "练闪避、爆头和骑乘攻击。骑在背上输出不掉武器耐久，是刷伤害的关键。",
        points: ["横扫后跳，突刺侧跳。", "弓箭爆头打出硬直。", "靠近按 A 骑乘，落地后再拉开距离。"],
      },
      {
        badge: "Guardian",
        title: "守护者",
        text: "前期绕开，中期练盾反，后期用古代套、古代箭和大师剑稳定解决。",
        points: ["先拿普通盾练激光弹反。", "步行守护者可先砍腿。", "飞行守护者交给古代箭。"],
      },
      {
        badge: "Talus",
        title: "石巨人",
        text: "赚钱好目标。找背上或头上的矿石弱点，爬上去用大锤、双手武器或炸弹敲。",
        points: ["绕到侧面躲开砸地。", "爬上身体猛攻矿点。", "掉的矿石卖钱，或留作强化材料。"],
      },
    ],
  },
  checklist: {
    eyebrow: "可勾选清单",
    title: "不知道今天玩什么，就照这个循环推进。",
    note: "勾选状态会存在你的浏览器本地。每次开游戏前看一眼，挑 3 到 5 个小目标，林克就会稳定变强。",
    groups: [
      {
        title: "开局到中期",
        tasks: [
          { id: "kakariko", label: "到卡卡利科村，见英帕，买下潜行套。" },
          { id: "fairy1", label: "解锁第一座大妖精之泉，强化常用防具。" },
          { id: "hateno", label: "到哈特诺村，修好希卡之石功能。" },
          { id: "stamina2", label: "用试炼之证把精力升到两圈。" },
          { id: "climb", label: "集齐攀登套，提升爬山效率。" },
        ],
      },
      {
        title: "成型到通关",
        tasks: [
          { id: "beast1", label: "完成风或水神兽，拿到探索或复活能力。" },
          { id: "hearts13", label: "把真实心心升到 13 颗。" },
          { id: "master", label: "进克洛格森林，拔出大师剑。" },
          { id: "lynel", label: "打赢一只低阶人马，开始刷高级装备。" },
          { id: "castle", label: "探索海拉鲁城堡，准备最终决战。" },
        ],
      },
    ],
  },
  footer: {
    note: "这份攻略按普通新手的体验来组织，重点是让探索、战斗和资源循环顺起来。条条大路通海拉鲁——遇到打不过的敌人，先去做神庙、升防具、做料理，再回头复仇。",
    disclaimer:
      "非官方粉丝攻略。《塞尔达传说》《旷野之息》均为任天堂的商标/作品；本页使用原创视觉与编辑文案。",
  },
};

export const botwGuideEn: BotwGuideDictionary = {
  meta: {
    title: "Breath of the Wild Walkthrough: Turn Link Into a True Hyrule Powerhouse | Wild & Tears Field Guide",
    description:
      "A follow-along growth route for The Legend of Zelda: Breath of the Wild — open towers and clear shrines, bank stamina and armor, then use cooking, Flurry Rush, parries, and Champion abilities to crush the difficulty.",
    keywords: [
      "Breath of the Wild walkthrough",
      "BOTW guide",
      "BOTW beginner guide",
      "shrines",
      "Master Sword",
      "Flurry Rush",
      "Perfect Guard parry",
      "Champion abilities",
      "Lynel",
      "Divine Beasts",
    ],
    ogAlt: "Breath of the Wild growth-route cover: Hyrule mountains, a shrine, and a Sheikah tower",
  },
  nav: {
    brand: "BOTW Walkthrough",
    links: [
      { label: "Route", href: "#route" },
      { label: "Get strong", href: "#growth" },
      { label: "Combat", href: "#combat" },
      { label: "Cooking", href: "#food" },
      { label: "Divine Beasts", href: "#beasts" },
      { label: "Tough foes", href: "#enemies" },
      { label: "Checklist", href: "#checklist" },
    ],
    home: "← Main guide",
    ariaLabel: "Walkthrough sections",
    langLabel: "语言",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
  },
  hero: {
    kicker: "From the Great Plateau to Hyrule Castle",
    titleLead: "Breath of the Wild walkthrough: ",
    titleMain: "turn Link into a real ",
    titleEm: "Hyrule powerhouse",
    lead: "A growth route you can simply follow: open towers and clear shrines, steadily bank stamina and armor, then use cooking, dodges, parries, and Champion abilities to grind the difficulty down.",
    imageAlt: "Breath of the Wild growth-route hero art: Hyrule mountains, a shrine, and a Sheikah tower",
    panelTitle: "Priorities at a glance",
    stats: [
      { value: "2 wheels", label: "Push stamina to two wheels first — climbing, gliding, and exploring instantly take off." },
      { value: "13 hearts", label: "The Master Sword needs 13 real hearts; temporary yellow hearts don't count." },
      { value: "4 orbs", label: "Every 4 Spirit Orbs trade for one heart or one stamina chunk at a Goddess Statue." },
      { value: "4 fountains", label: "Unlock more Great Fairy Fountains and your armor-upgrade ceiling climbs." },
    ],
  },
  route: {
    eyebrow: "Route overview",
    title: "Don't rush the final boss — first turn Hyrule itself into your supply depot.",
    note: "In Breath of the Wild, power isn't an XP bar — it's exploration. The more towers, shrines, material spots, stables, and Great Fairy Fountains you open, the freer Link becomes.",
    cards: [
      {
        tag: "01 / Early",
        title: "Leave the Plateau, head to Kakariko Village",
        text: "Follow the main quest to Impa, opening every tower and clearing every shrine on the way. At Kakariko, buy the Stealth set and unlock the nearby first Great Fairy Fountain.",
        points: ["Don't brawl with Guardians on the road.", "Grab apples, mushrooms, meat, and bugs as you go.", "Spend Spirit Orbs on stamina first."],
      },
      {
        tag: "02 / Mid",
        title: "Fix the Sheikah Slate at Hateno Village",
        text: "Camera, Compendium, and Sensor+ upgrades make hunting materials, shrines, and gear far easier. After that, open towers region by region and clear shrines along the way.",
        points: ["Photograph every material you use often.", "Save rupees for a few basic armor sets.", "Get the Climbing set — it transforms climbing."],
      },
      {
        tag: "03 / Online",
        title: "Divine Beasts, 13 hearts, Master Sword",
        text: "Grab the Champion abilities that boost exploration and survivability first, then bank 13 real hearts and pull the Master Sword in Korok Forest. It's rock-solid against the castle, beasts, and Guardians.",
        points: ["Vah Medoh (wind) or Vah Ruta (water) first.", "Upgrade your main armor to at least 2 stars.", "Start practicing Lynels and parries."],
      },
    ],
    stageLabel: "Pick a game stage",
    stages: [
      {
        id: "early",
        name: "First 10 hours",
        small: "Build the base",
        panel: {
          title: "First 10 hours: just solve “staying alive”",
          intro:
            "This stage isn't about godly gear — it's about map sense, supplies, and fundamentals. Stop dying over and over to missing stamina, meals, or armor.",
          goalsLabel: "Goals this stage",
          goals: [
            "Leave the Great Plateau straight for Kakariko, clearing shrines en route.",
            "Unlock your first Great Fairy Fountain and upgrade the Hylian or Stealth set.",
            "Reach Hateno, fix the Sheikah Slate, and photograph materials and shrines.",
          ],
          avoidLabel: "Mistakes to skip",
          avoid: [
            "Don't brawl Lynels or packs of Guardians this early.",
            "Don't sell off rare materials like Ancient Cores or Star Fragments.",
            "Don't pour everything into hearts — low stamina drags out the whole game.",
          ],
        },
      },
      {
        id: "mid",
        name: "10 to 40 hours",
        small: "Coming together",
        panel: {
          title: "10 to 40 hours: come together via shrines, armor, and beasts",
          intro:
            "Start opening towers by region, clearing shrines systematically, collecting sets, and prepping your first one or two Divine Beasts. One goal: a bigger and bigger exploration radius.",
          goalsLabel: "Goals this stage",
          goals: [
            "At least two stamina wheels; ease hearts up to 10–13.",
            "Upgrade main armor to 2 stars; stock attack, defense, and stamina meals.",
            "Take Vah Medoh (wind) or Vah Ruta (water) first for flight or revival.",
          ],
          avoidLabel: "Mistakes to skip",
          avoid: [
            "Don't mine ore with good weapons — bombs or a hammer pay off more.",
            "Don't force steep climbs in the rain; detour or wait for clear skies.",
            "Don't toss mixed effects in one pot — buffs overwrite each other.",
          ],
        },
      },
      {
        id: "late",
        name: "Late exploration",
        small: "Grind power",
        panel: {
          title: "Late exploration: Master Sword, Lynels, the castle, and a full sweep",
          intro:
            "Basic survival is handled now, so chase high-end weapons, 4-star sets, Korok-seed expansions, and the castle's loot.",
          goalsLabel: "Goals this stage",
          goals: [
            "With 13 real hearts, pull the Master Sword in Korok Forest.",
            "Farm low-tier Lynels for Savage Lynel bows, crushers, and shields.",
            "Learn Hyrule Castle and map your pre-finale supply run.",
          ],
          avoidLabel: "Mistakes to skip",
          avoid: [
            "Don't solve every elite with Ancient Arrows — they're pricey.",
            "Don't ignore your shield stock; parry practice burns through them.",
            "Don't let your pack stay full of low-power weapons — keep refreshing.",
          ],
        },
      },
    ],
  },
  growth: {
    eyebrow: "Growth systems",
    title: "Six ways Link gets stronger — every one beats just picking up weapons.",
    note: "Weapons break, so real combat power comes from the resource loop: stamina takes you to more places, materials cook into stronger meals, and armor upgrades let you survive your own mistakes.",
    cards: [
      {
        badge: "Shrine",
        title: "Shrines: hearts and stamina",
        steps: [
          "Spot a shrine, mark it, and clear it when you can.",
          "Trade every 4 Spirit Orbs at a Goddess Statue.",
          "Two stamina wheels first, then hearts to 10–13.",
        ],
      },
      {
        badge: "Armor",
        title: "Armor: your margin for error",
        steps: [
          "Buy the Stealth set at Kakariko; add the Soldier set if fights feel hard.",
          "Find Great Fairy Fountains and upgrade with materials.",
          "Main sets to 2 stars, key sets to 4.",
        ],
      },
      {
        badge: "Cooking",
        title: "Cooking: the most reliable “cheat”",
        steps: [
          "Cook same-effect ingredients together — never mix effects.",
          "Hearty for yellow hearts, Mighty for damage.",
          "Pack healing, stamina, and cold/heat resist before you leave.",
        ],
      },
      {
        badge: "Gear",
        title: "Weapons: use them by tier",
        steps: [
          "Plain weapons for mobs — don't swing a great blade at ore.",
          "Elites get high-attack weapons and elemental arrows.",
          "Pack full? Dump low-damage weapons without regret.",
        ],
      },
      {
        badge: "Map",
        title: "Map: towers first, then sweep",
        steps: [
          "New region? Find the tower and stable first.",
          "From the top, scope shrines, villages, and odd terrain.",
          "While traveling, grab ore, wood, bugs, and Koroks.",
        ],
      },
      {
        badge: "Skill",
        title: "Combat: Flurry Rush sets your ceiling",
        steps: [
          "Lock on and read the sweep, thrust, and slam.",
          "Backflip a sweep, sidehop a thrust — trigger Flurry Rush.",
          "Practice Guardian parries with a plain shield first.",
        ],
      },
    ],
  },
  combat: {
    eyebrow: "Combat training",
    title: "From “getting chased” to “hunting Lynels for fun”.",
    note: "Combat is more than the attack button. Lock-on, dodging, parrying, sneakstrikes, and environmental kills are the five core moves. Drill them and you'll fight clean even with mediocre gear.",
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
        summary: "Perfect Guard (parry): the answer to Guardian lasers",
        intro: "Practice with a plain shield — no loss if it breaks. Up close to a Guardian, the sound and blue-light rhythm are easier to read.",
        steps: [
          "Hold ZL to raise the shield, facing the target.",
          "On the laser's charge-up sound, press A as the beam leaves the barrel.",
          "A clean parry reflects it back; if you miss, swap shields and keep going.",
          "Once solid, stagger Decayed Guardians by hacking a leg first.",
        ],
      },
      {
        summary: "Sneakstrikes and camp clearing: save weapons early",
        intro: "Night, the Stealth set, and sneaky meals sharply cut your detection. If a camp has explosive barrels, pop them with an arrow or bomb first.",
        steps: [
          "Crouch and approach sleeping or patrolling enemies from behind.",
          "On the Sneakstrike prompt, press Y for big bonus damage.",
          "Drop wizards, archers, and lookouts first, then the melee.",
          "From high ground, draw your bow for slow-mo headshots.",
        ],
      },
      {
        summary: "Environmental kills: less cost, more payoff",
        intro: "Hyrule isn't an arena — it's your toolbox.",
        steps: [
          "Magnesis a metal crate and slam it into enemies.",
          "Bomb foes off cliffs, or blast open ore deposits.",
          "Shock-arrow enemies holding metal — even better in the rain.",
          "Fire-arrow grass to make an updraft, then bow-snipe from the air.",
        ],
      },
    ],
    controlsTitle: "Quick control reference (Switch)",
    keys: [
      { key: "ZL", desc: "Lock on, raise shield, aim bow" },
      { key: "ZR", desc: "Fire arrows (aim with ZL)" },
      { key: "X", desc: "Jump; add a direction to dodge" },
      { key: "Y", desc: "Attack; combo during Flurry Rush" },
      { key: "A", desc: "Interact, mount; press while guarding to parry" },
      { key: "B", desc: "Sprint; roll to cancel" },
      { key: "L", desc: "Use the equipped Sheikah rune" },
      { key: "R", desc: "Throw a weapon, bomb, or crate" },
    ],
  },
  food: {
    eyebrow: "Cooking & resources",
    title: "A Link who cooks is far stronger than a Link who only swings a sword.",
    note: "Every time you head out, carry four kinds of meal: healing, stamina, attack or defense, and an environment resist. When materials are plentiful, five of one effect in a pot is the no-brainer.",
    recipes: [
      {
        badge: "Heal",
        title: "Hearty (yellow heart) meals",
        text: "The safest insurance before exploring or a boss. Yellow hearts erase the early-game risk of a small heart bar.",
        materials: "Try: Hearty Durian, Hearty Truffle, Hearty Radish. More of the same = more temporary hearts.",
      },
      {
        badge: "Damage",
        title: "Attack-up (Mighty) meals",
        text: "Eat these for Lynels, Divine Beast bosses, and arena fights. A high-attack weapon plus an attack meal slashes fight length.",
        materials: "Try: Mighty Bananas, Razorshroom, Mighty Porgy. Never mix with defense ingredients.",
      },
      {
        badge: "Tank",
        title: "Defense-up (Tough) meals",
        text: "When you don't know a moveset yet, defense beats attack — friendlier for learning fights.",
        materials: "Try: Fortified Pumpkin, Ironshroom, Armored Carp. Even better with high armor.",
      },
      {
        badge: "Explore",
        title: "Stamina & resistance meals",
        text: "Climbing, gliding, and cold, heat, or shock zones all come down to these. Don't stop exploring just because you're missing one outfit.",
        materials: "Try: Stamella Shroom, Staminoka Bass, Warm Safflina, Chillshroom, Voltfruit.",
      },
    ],
  },
  beasts: {
    eyebrow: "Divine Beast order",
    title: "Grab the Champion abilities that change exploration and survivability first.",
    note: "There's no fixed order, but this line is much friendlier for new players. Vah Naboris (thunder) has the hardest boss — go once your gear, meals, and dodging are solid.",
    cards: [
      {
        order: "1",
        badge: "Rito Village",
        title: "Vah Medoh — Divine Beast of Wind",
        text: "Ability: Revali's Gale. An instant updraft to launch from — a massive upgrade to climbing, traveling, and mapping.",
        points: ["Pack cold-resist gear or meals.", "Bring plenty of arrows for the aerial fight.", "Once you have the ability, sweep nearby shrines."],
      },
      {
        order: "2",
        badge: "Zora's Domain",
        title: "Vah Ruta — Divine Beast of Water",
        text: "Ability: Mipha's Grace. Auto-revive on death — huge survivability for new players.",
        points: ["Pack Shock Arrows and healing meals.", "Mind the ice blocks and charges in the boss fight.", "Afterward you're far readier to train elites."],
      },
      {
        order: "3",
        badge: "Goron City",
        title: "Vah Rudania — Divine Beast of Fire",
        text: "Ability: Daruk's Protection. Auto-blocks key hits — steadier against Guardians and elites.",
        points: ["Buy fire-proof gear or carry Fireproof Elixirs.", "No wooden gear in volcano zones — it burns.", "Watch for ore along the way for easy rupees."],
      },
      {
        order: "4",
        badge: "Gerudo",
        title: "Vah Naboris — Divine Beast of Thunder",
        text: "Ability: Urbosa's Fury. A huge AoE burst, but the lead-up and boss demand more skill.",
        points: ["Pack shock-resist meals or the Rubber set.", "Drill parries and sidehops first.", "Bring high armor and a big stack of supplies."],
      },
    ],
  },
  enemies: {
    eyebrow: "Beating tough foes",
    title: "The hardest enemies are also your best teachers.",
    note: "Don't go in swinging on sight. Read the moveset, pack shields and meals, and fail cheaply. Win once and you'll see they're ATMs for high-end gear.",
    cards: [
      {
        badge: "Lynel",
        title: "Lynel",
        text: "Drill dodging, headshots, and mounted attacks. Riding its back deals damage without spending weapon durability — the key to farming.",
        points: ["Backflip the sweep, sidehop the thrust.", "Headshot with a bow to stagger.", "Press A up close to mount, then back off on landing."],
      },
      {
        badge: "Guardian",
        title: "Guardian",
        text: "Avoid them early, parry them mid-game, then handle them cleanly late with the Ancient set, Ancient Arrows, and the Master Sword.",
        points: ["Learn the laser parry with a plain shield.", "Hack a leg off a Decayed Guardian first.", "Skywatchers go down fast to Ancient Arrows."],
      },
      {
        badge: "Talus",
        title: "Stone Talus",
        text: "A great payday. Find the ore weak point on its back or head, climb up, and hit it with a hammer, two-hander, or bombs.",
        points: ["Circle to the side to dodge its slam.", "Climb the body and wail on the ore.", "Sell the dropped ore, or save it for upgrades."],
      },
    ],
  },
  checklist: {
    eyebrow: "Tickable checklist",
    title: "Not sure what to play today? Just run this loop.",
    note: "Your ticks are saved in this browser. Glance here before each session, pick 3 to 5 small goals, and Link gets steadily stronger.",
    groups: [
      {
        title: "Early to mid game",
        tasks: [
          { id: "kakariko", label: "Reach Kakariko, meet Impa, buy the Stealth set." },
          { id: "fairy1", label: "Unlock the first Great Fairy Fountain; upgrade your main armor." },
          { id: "hateno", label: "Reach Hateno Village and fix the Sheikah Slate." },
          { id: "stamina2", label: "Spend Spirit Orbs to reach two stamina wheels." },
          { id: "climb", label: "Collect the Climbing set to climb faster." },
        ],
      },
      {
        title: "Coming together to the finale",
        tasks: [
          { id: "beast1", label: "Clear Vah Medoh or Vah Ruta for flight or revival." },
          { id: "hearts13", label: "Bank 13 real hearts." },
          { id: "master", label: "Enter Korok Forest and pull the Master Sword." },
          { id: "lynel", label: "Beat a low-tier Lynel and start farming high-end gear." },
          { id: "castle", label: "Explore Hyrule Castle and prep for the finale." },
        ],
      },
    ],
  },
  footer: {
    note: "This walkthrough is organized around a typical new player's experience — the goal is to get exploration, combat, and the resource loop flowing. Every road leads through Hyrule: when an enemy walls you, go clear shrines, upgrade armor, and cook, then come back for revenge.",
    disclaimer:
      "Unofficial fan guide. The Legend of Zelda and Breath of the Wild are trademarks/works of Nintendo; this page uses original visuals and editorial text.",
  },
};

const guides: Record<Locale, BotwGuideDictionary> = {
  zh: botwGuideZh,
  en: botwGuideEn,
};

export function getBotwGuide(locale: Locale): BotwGuideDictionary {
  return guides[locale] ?? guides.zh;
}
