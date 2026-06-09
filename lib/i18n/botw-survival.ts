import type { Locale } from "./config";

/**
 * BOTW's signature module: "Laws of the Wild". Breath of the Wild's core idea
 * is that the world itself is the route designer — weather and terrain are
 * rules, not decoration. Each entry reads omen → rule → your move, the way a
 * field notebook would. This is intentionally NOT shared with TOTK.
 */
export interface SurvivalLaw {
  /** lucide icon name chosen in the component. */
  icon: "CloudRain" | "Zap" | "Snowflake" | "Flame" | "Moon" | "Mountain";
  title: string;
  omen: string;
  ruleLabel: string;
  rule: string;
  moveLabel: string;
  move: string;
}

export interface BotwSurvival {
  eyebrow: string;
  title: string;
  note: string;
  laws: SurvivalLaw[];
}

const zh: BotwSurvival = {
  eyebrow: "荒野法则",
  title: "在海拉鲁，天气和地形不是背景板，而是替你设计路线的人。",
  note: "老玩家最先学会的，不是某把武器，而是“读天”。下面六条法则把环境从“随机的麻烦”变成“可利用的工具”——看懂征兆，世界就开始为你让路。",
  laws: [
    {
      icon: "CloudRain",
      title: "雨：让岩壁变成滑梯",
      omen: "乌云压顶、远处传来闷雷。",
      ruleLabel: "世界的规则",
      rule: "雨天攀爬会周期性下滑，陡坡几乎爬不上去。",
      moveLabel: "你的应对",
      move: "绕到缓坡、找台阶式岩架分段爬，或干脆生堆篝火“坐到天晴”。",
    },
    {
      icon: "Zap",
      title: "雷：金属是催命符",
      omen: "雷雨中，身上的金属武器开始闪蓝光。",
      ruleLabel: "世界的规则",
      rule: "落雷会精准劈向最高的金属物，连铁箱、铁门都导电。",
      moveLabel: "你的应对",
      move: "立刻卸下金属装备；反过来，把铁箱丢到敌群里，让天替你清场。",
    },
    {
      icon: "Snowflake",
      title: "寒与热：先穿对，再出发",
      omen: "呼出白气、或屏幕边缘泛起热浪。",
      ruleLabel: "世界的规则",
      rule: "没有抗性会持续掉血，硬闯雪山火山就是慢性自杀。",
      moveLabel: "你的应对",
      move: "抗寒/抗热料理与对应套装二选一备齐；举火把、吃辣椒果都能临时续命。",
    },
    {
      icon: "Flame",
      title: "火与风：草地会自己造电梯",
      omen: "一片连绵的草坡，风往山上吹。",
      ruleLabel: "世界的规则",
      rule: "点燃草地会形成上升气流，热空气把滑翔伞往上托。",
      moveLabel: "你的应对",
      move: "火箭点草、冲进气流开伞，瞬间拔高一大截，再在空中拉弓爆头。",
    },
    {
      icon: "Moon",
      title: "夜：危险与机会同时上线",
      omen: "天色转暗，远处亮起诡异的蓝色火苗。",
      ruleLabel: "世界的规则",
      rule: "夜里会刷新斯塔尔骷髅怪，但星光也让潜行和采集更安静。",
      moveLabel: "你的应对",
      move: "穿潜行套做暗杀和采萤火虫；想跳过夜晚，就在篝火旁“等到天明”。",
    },
    {
      icon: "Mountain",
      title: "高度：每一座山都是观景台",
      omen: "看见一座没去过的塔、峰或炊烟。",
      ruleLabel: "世界的规则",
      rule: "海拉鲁奖励抬头看的人——制高点几乎总藏着下一个目标。",
      moveLabel: "你的应对",
      move: "先爬上去用望远镜标点，再决定怎么下山：滑翔、滚石还是顺坡盾滑。",
    },
  ],
};

const en: BotwSurvival = {
  eyebrow: "Laws of the Wild",
  title: "In Hyrule, weather and terrain aren't a backdrop — they're the level designer.",
  note: "The first thing veterans master isn't a weapon — it's reading the sky. These six laws turn the environment from random nuisance into a tool: learn the omen, and the world starts clearing a path for you.",
  laws: [
    {
      icon: "CloudRain",
      title: "Rain: cliffs become slides",
      omen: "Clouds gather; distant thunder rolls in.",
      ruleLabel: "The world's rule",
      rule: "Climbing in rain makes you slip on a cycle — steep faces are near-impossible.",
      moveLabel: "Your move",
      move: "Detour to gentle slopes, climb ledge-by-ledge, or light a fire and sit out the storm.",
    },
    {
      icon: "Zap",
      title: "Lightning: metal is a death sentence",
      omen: "In a storm, your metal weapon starts glowing blue.",
      ruleLabel: "The world's rule",
      rule: "Bolts strike the tallest metal object — even crates and gates conduct.",
      moveLabel: "Your move",
      move: "Unequip metal instantly; or hurl a metal crate into a mob and let the sky clear it.",
    },
    {
      icon: "Snowflake",
      title: "Cold & heat: dress first, then go",
      omen: "Your breath fogs, or heat-haze ripples the screen edge.",
      ruleLabel: "The world's rule",
      rule: "No resistance means a steady drain — charging a snowfield or volcano is slow suicide.",
      moveLabel: "Your move",
      move: "Carry a resist meal or the matching set; a torch or a Spicy Pepper buys time in a pinch.",
    },
    {
      icon: "Flame",
      title: "Fire & wind: grass builds its own elevator",
      omen: "A long grassy slope with wind blowing uphill.",
      ruleLabel: "The world's rule",
      rule: "Burning grass makes an updraft — hot air lifts your paraglider.",
      moveLabel: "Your move",
      move: "Fire-arrow the grass, glide into the updraft to shoot up fast, then bow-snipe from the air.",
    },
    {
      icon: "Moon",
      title: "Night: danger and opportunity clock in together",
      omen: "The sky darkens; eerie blue flames flicker in the distance.",
      ruleLabel: "The world's rule",
      rule: "Stalfos respawn at night, but starlight also makes sneaking and gathering quieter.",
      moveLabel: "Your move",
      move: "Wear Stealth to assassinate and catch fireflies; or sit by a fire to skip to morning.",
    },
    {
      icon: "Mountain",
      title: "Height: every mountain is a lookout",
      omen: "You spot an unvisited tower, peak, or column of smoke.",
      ruleLabel: "The world's rule",
      rule: "Hyrule rewards looking up — a high point almost always hides your next goal.",
      moveLabel: "Your move",
      move: "Climb it, scope and mark from the top, then choose your descent: glide, boulder, or shield-surf.",
    },
  ],
};

const data: Record<Locale, BotwSurvival> = { zh, en };

export function getBotwSurvival(locale: Locale): BotwSurvival {
  return data[locale] ?? data.zh;
}
