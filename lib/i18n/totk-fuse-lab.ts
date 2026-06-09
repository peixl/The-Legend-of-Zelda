import type { Locale } from "./config";

/**
 * TOTK's signature module: an interactive "Fuse & Zonai bench". Tears of the
 * Kingdom's core idea is creation — Fuse turns junk into gear, and Zonai
 * devices turn ideas into machines. The bench lets the reader pick a base
 * (weapon / shield / arrow) and see what to fuse and why, plus a row of Zonai
 * device combos. This is intentionally NOT shared with BOTW.
 */
export interface FuseRecipe {
  material: string;
  materialNote: string;
  effect: string;
}

export interface FuseBase {
  id: string;
  name: string;
  small: string;
  /** One-line note on how this base behaves once fused. */
  base: string;
  recipes: FuseRecipe[];
}

export interface ZonaiCombo {
  title: string;
  text: string;
}

export interface TotkFuseLab {
  eyebrow: string;
  title: string;
  note: string;
  baseLabel: string;
  bases: FuseBase[];
  zonaiLabel: string;
  zonai: ZonaiCombo[];
}

const zh: TotkFuseLab = {
  eyebrow: "余料实验室",
  title: "在王国之泪，攻击力不写在武器上，而写在你给它融了什么。",
  note: "试试看：选一个底座（武器 / 盾牌 / 箭），看该融什么、为什么。一根烂树枝＋一只银怪角，就能变成削铁如泥的神兵——这就是王泪最爽的瞬间。",
  baseLabel: "选择底座",
  bases: [
    {
      id: "weapon",
      name: "武器",
      small: "长按 L 选余料 → Y",
      base: "武器融素材＝直接叠加攻击力和特效。一把基础剑，决定下限；融什么，决定上限。",
      recipes: [
        { material: "银/白银怪物的角", materialNote: "波克布林、莫力布林、人马", effect: "攻击力暴涨，是前中期最稳的伤害来源" },
        { material: "三种龙角", materialNote: "欧根、菲罗妮、纳尔",  effect: "顶级攻击＋属性，且融上去永不损耗" },
        { material: "怪物的牙 / 爪", materialNote: "随处可捡", effect: "便宜大碗，练手和日常清怪足够用" },
        { material: "岩石章鱼 / 圆形石", materialNote: "野外常见", effect: "做出大锤手感，专砸矿石和重甲" },
      ],
    },
    {
      id: "shield",
      name: "盾牌",
      small: "长按 L 选余料 → ZR",
      base: "盾牌融素材＝把“防御”变成一整套工具：弹射、滑行、放电、喷火都行。",
      recipes: [
        { material: "弹簧", materialNote: "左纳乌装置", effect: "盾反同时把自己弹上天，接空中弓箭爆头" },
        { material: "矿车 / 盾板", materialNote: "左纳乌 / 木板", effect: "盾滑赶路更顺，长下坡能滑很远" },
        { material: "怪物素材 / 火炎果", materialNote: "依属性而定", effect: "盾反时附带属性反击，破甲又破防" },
        { material: "角 / 尖刺素材", materialNote: "强敌掉落", effect: "把盾变成带刺武器，撞击也能造成伤害" },
      ],
    },
    {
      id: "arrow",
      name: "箭",
      small: "拉弓时按 ↑ 融合",
      base: "箭融素材＝即时改变这一发的效果，是王泪最灵活的“法术系统”。",
      recipes: [
        { material: "蝙蝠（无翼蝙蝠）的眼珠", materialNote: "夜间常见", effect: "自动追踪，几乎指哪打哪" },
        { material: "宝石（红 / 黄 / 蓝）", materialNote: "矿点开采", effect: "火 / 电 / 冰属性箭，按敌人弱点切换" },
        { material: "朽木果 / 爆弹花", materialNote: "野外采集", effect: "烟雾掩护偷袭，或范围爆破清场" },
        { material: "明亮花种子", materialNote: "深渊必备", effect: "射出去就是一盏灯，给深渊照亮安全路线" },
      ],
    },
  ],
  zonaiLabel: "顺手再学几个左纳乌组合",
  zonai: [
    { title: "风扇 ＋ 操纵杆", text: "最简飞行器：一片木板加两个风扇，就能飞越峡谷和上天空岛。" },
    { title: "火炎放出器 ＋ 长杆", text: "手持喷火棍，清草、点上升气流、烧成群小怪都好用。" },
    { title: "大炮 ＋ 推车", text: "可移动炮台，远程拆掉营地和强敌，安全又解压。" },
    { title: "气球 ＋ 篝火", text: "热气球：靠上升的热气垂直拔高，懒人版“起飞键”。" },
    { title: "轮子 ＋ 操纵杆", text: "简易小车，深渊和长草原赶路神器，省精力又省时间。" },
    { title: "光源 ＋ 任意载具", text: "给载具挂个灯，深渊夜路不再两眼一抹黑。" },
  ],
};

const en: TotkFuseLab = {
  eyebrow: "The Fuse bench",
  title: "In Tears of the Kingdom, attack power isn't on the weapon — it's on what you fused to it.",
  note: "Try it: pick a base (weapon / shield / arrow) and see what to fuse and why. A rotten branch plus one silver horn becomes a blade that cuts iron — that's TOTK's best feeling, on demand.",
  baseLabel: "Pick a base",
  bases: [
    {
      id: "weapon",
      name: "Weapon",
      small: "Hold L → Fuse → Y",
      base: "Fusing to a weapon stacks raw attack and effects. The base sets the floor; what you fuse sets the ceiling.",
      recipes: [
        { material: "Silver monster horns", materialNote: "Bokoblin, Moblin, Lynel", effect: "Attack skyrockets — the most reliable early/mid damage" },
        { material: "The three dragon horns", materialNote: "Dinraal, Farosh, Naydra", effect: "Top-tier attack + element, and never wears down once fused" },
        { material: "Monster fangs / claws", materialNote: "Found everywhere", effect: "Cheap and plentiful — fine for practice and clearing mobs" },
        { material: "Rock Octorok / round stone", materialNote: "Common in the field", effect: "Crusher feel — great for smashing ore and heavy armor" },
      ],
    },
    {
      id: "shield",
      name: "Shield",
      small: "Hold L → Fuse → ZR",
      base: "Fusing to a shield turns \"defense\" into a toolkit: launch, surf, shock, or torch.",
      recipes: [
        { material: "Spring", materialNote: "Zonai device", effect: "A parry launches you skyward — follow with a bow headshot" },
        { material: "Cart / shield board", materialNote: "Zonai / wood plank", effect: "Smoother shield-surfing; long downhills carry far" },
        { material: "Monster part / fire fruit", materialNote: "Depends on element", effect: "Elemental counter on parry — breaks armor and guard" },
        { material: "Horns / spiky parts", materialNote: "Elite drops", effect: "A spiked shield that deals damage on a bash" },
      ],
    },
    {
      id: "arrow",
      name: "Arrow",
      small: "Aim, press ↑ to Fuse",
      base: "Fusing an arrow changes just this shot's effect — TOTK's most flexible \"spell system.\"",
      recipes: [
        { material: "Keese eyeball", materialNote: "Common at night", effect: "Homing — it lands almost wherever you point" },
        { material: "Gems (ruby / topaz / sapphire)", materialNote: "Mined from deposits", effect: "Fire / shock / ice arrows — swap to the enemy's weakness" },
        { material: "Puffshroom / bomb flower", materialNote: "Foraged in the field", effect: "Smokescreen for a sneakstrike, or an AoE blast" },
        { material: "Brightbloom seed", materialNote: "Depths essential", effect: "Fires a lamp — lights a safe route through the Depths" },
      ],
    },
  ],
  zonaiLabel: "Pick up a few Zonai combos while you're here",
  zonai: [
    { title: "Fan + steering stick", text: "The simplest aircraft: one board, two fans, and you clear canyons and reach sky islands." },
    { title: "Flame emitter + long pole", text: "A handheld torch-staff — burn grass, spark updrafts, and roast packs of mobs." },
    { title: "Cannon + cart", text: "A mobile turret to dismantle camps and elites from range — safe and satisfying." },
    { title: "Balloon + campfire", text: "A hot-air balloon: rising heat lifts you straight up — the lazy person's launch button." },
    { title: "Wheels + steering stick", text: "A simple car — a lifesaver for the Depths and long plains, saving stamina and time." },
    { title: "Light + any vehicle", text: "Bolt a lamp to your rig so the Depths at night isn't a black void." },
  ],
};

const data: Record<Locale, TotkFuseLab> = { zh, en };

export function getTotkFuseLab(locale: Locale): TotkFuseLab {
  return data[locale] ?? data.zh;
}
