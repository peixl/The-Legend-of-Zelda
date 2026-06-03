import {
  BookOpen,
  ChevronDown,
  Compass,
  Crown,
  Flame,
  Hammer,
  Heart,
  MapPinned,
  Mountain,
  Route,
  Shield,
  Sparkles,
  Sword,
  Users,
} from "lucide-react";

const playerRoutes = [
  {
    title: "第一次踏进海拉鲁",
    label: "先玩旷野之息",
    text: "把塔、神庙、料理、潜行和环境互动摸熟。先不要追全收集，先让自己学会在雨、雷、夜晚和陌生地形里活下来。",
  },
  {
    title: "只想尽快燃起来",
    label: "王国之泪也能开局",
    text: "直接体验究极手、余料建造和天空岛，但建议把剧情节奏放慢：每解锁一个能力，就回地表找三种不同场景试错。",
  },
  {
    title: "老玩家回坑",
    label: "把习惯拆掉",
    text: "不要把王泪当资料片。先忘掉旧路线，用洞窟、井、天空落石和地底光根重新建立地图记忆。",
  },
  {
    title: "剧情党与考据党",
    label: "记忆优先",
    text: "旷野看照片记忆，王泪看龙泪顺序。两作最动人的地方，都藏在林克没有说出口、玩家自己补上的空白里。",
  },
];

const comparisonRows = [
  {
    axis: "核心感受",
    botw: "从失忆、荒芜和沉默里重新成为勇者。你先学会谦卑，再学会强大。",
    totk: "在天空、地表、地底三层世界里重组秩序。你不是找到答案，而是把答案造出来。",
  },
  {
    axis: "玩法动词",
    botw: "爬、滑翔、烹饪、潜行、利用天气、用炸弹和磁力解构环境。",
    totk: "究极手组装、余料建造、倒转乾坤、通天术、蓝图复现，把地图变成工程材料。",
  },
  {
    axis: "战斗理解",
    botw: "读招、盾反、林克时间、元素箭、地形优势。武器损耗逼你保持流动。",
    totk: "武器底材加素材决定上限。怪物营地不只是敌人，也是零件仓库和实验室。",
  },
  {
    axis: "探索奖励",
    botw: "神庙、呀哈哈、回忆、套装、马匹、村落任务，奖励你对地形的观察。",
    totk: "神庙、洞窟、井、地底光根、左纳乌装置、贤者线，奖励你对结构的想象。",
  },
];

const firstHours = [
  "先把开局高台/初始空岛当教学关反复咀嚼：每个能力都找三种非常规用法。",
  "优先开塔与驿站。塔给视野，驿站给马、谣言、支线和安全感。",
  "每到新区域先做一顿饭：耐寒、耐热、精力、攻击、防御各留一份。",
  "遇到强敌先标记，不急着打。海拉鲁的成熟玩家知道撤退也是路线规划。",
  "每晚找火堆或旅店整理背包：卖矿、补箭、升级套装、写下下一个目标。",
  "每完成一条主线，就回旧区域用新能力重走一遍，很多惊喜只奖励回头看的人。",
];

const botwGuide = [
  {
    title: "前期：别急着当英雄",
    body: "四神兽不是竞速目标。先找十几座神庙扩心心和精力，拿一套防寒/潜行/士兵类基础装备，熟悉盾反守护者激光。前期最重要的资源不是武器，是胆量边界。",
  },
  {
    title: "中期：让地图替你作战",
    body: "火药桶、金属箱、高地、雷雨、冰面、水域和夜晚骷髅都能参与战斗。你越少把战斗理解成正面对砍，旷野之息越早变成你的游乐场。",
  },
  {
    title: "后期：回忆比数值更重",
    body: "大师剑、英杰能力和套装升级会让你变强，但真正把结局垫高的是照片记忆、四英杰任务和每个村子的日常牵挂。",
  },
];

const totkGuide = [
  {
    title: "天空：学会从上往下读地图",
    body: "天空岛给你高度和方向。落下前先观察烟、塔、异色地形、圆形遗迹和洞窟入口，降落本身就是第一段路线规划。",
  },
  {
    title: "地表：不要只沿旧记忆走",
    body: "王泪的地表故意借你的旧经验开玩笑。熟悉的村庄、驿站和山路旁，多了洞窟、井、报社、调查队和新的危机现场。",
  },
  {
    title: "地底：恐惧管理课",
    body: "先点亮光根，再打怪挖矿。地底和地表有镜像关系，光根位置常能反推地表神庙。带足光亮花、向阳料理和撤退传送点。",
  },
];

const relationshipGroups = [
  {
    title: "林克与塞尔达",
    text: "两作都把情感放在行动背后。林克负责抵达，塞尔达负责承受时间；玩家负责把沉默读成陪伴。",
  },
  {
    title: "英杰与贤者",
    text: "旷野之息是悼念逝去的战友，王国之泪是把继承者推到台前。旧伤口和新责任在这里完成交接。",
  },
  {
    title: "希卡、依盖与技术",
    text: "古代技术既拯救也失控。希卡族留下系统，依盖队留下反讽：同一种力量，取决于人把它献给守护还是执念。",
  },
  {
    title: "加农与盖侬多夫",
    text: "灾厄是失控的怨念，魔王是有意志的支配。两作反派从灾害变成政治和欲望，让冲突更具体。",
  },
];

const anchors = [
  "第一次从高处跳下去听见风声",
  "雨天爬不上山时的无奈和绕路",
  "为一匹马取名后突然舍不得传送",
  "英杰主题响起时的旧友感",
  "发现塞尔达其实一直独自坚持",
  "王泪最终段那种把手伸出去的本能",
];

const checklist = [
  {
    title: "旷野之息完成度坐标",
    items: [
      "120 座本篇神庙与关键试炼路线",
      "900 个呀哈哈种子按区域慢慢清",
      "四神兽、照片记忆、大师剑与套装升级",
      "塔全开后再做村落支线，体验最顺",
    ],
  },
  {
    title: "王国之泪完成度坐标",
    items: [
      "152 座神庙与 120 个地底光根互相校验",
      "1000 个呀哈哈种子分天空、地表路线清",
      "洞窟、井、魔犹伊遗失物、贤者遗志",
      "左纳乌电池升级和蓝图收藏决定后期爽度",
    ],
  },
  {
    title: "两作通用背包习惯",
    items: [
      "每种环境料理至少留一份",
      "矿石卖钱，稀有素材优先留给升级",
      "箭永远不嫌多，盾牌永远要留一面普通盾",
      "遇到新敌先拍照、标记、撤退，不丢人",
    ],
  },
];

const veteranExperiments = [
  "不传送旅行：只用马、滑翔、落石和自制载具连接城市。",
  "摄影考古：给每个遗迹拍同角度照片，追踪灾厄前后的文明痕迹。",
  "低战斗路线：能偷就偷，能绕就绕，把海拉鲁当潜行生存游戏。",
  "厨师档案：每到一个村子只用当地食材做饭，记录地方风味。",
  "地底优先档：王泪开塔后立刻建立地底主干线，再反推地表神庙。",
];

const spoilerBlocks = [
  {
    summary: "旷野之息的冲突为什么动人",
    body: "它不是一个单纯打倒灾厄的故事，而是一个失败过的王国如何把最后一点希望交给玩家。四英杰已经不在，塞尔达用百年封印抵住灾厄，林克醒来后面对的是迟到的责任。正因为一切都晚了，玩家的每一步抵达才显得温柔。",
  },
  {
    summary: "王国之泪的冲突为什么升级",
    body: "王泪把敌人从怨念变成有姓名、有统治欲、有历史根源的盖侬多夫；也把塞尔达从等待救援的人变成主动穿越时间、承担代价的人。林克的冒险不只是找回公主，而是接住她跨越时间留下的托付。",
  },
];

const visualChapters = [
  {
    kicker: "野外手册",
    title: "料理、天气、路线与撤退",
    text: "当你把营地当成补给站，把山脊当成路线图，海拉鲁就会从巨大地图变成可亲近的生活现场。",
    image: "/guide-survival-camp.png",
    alt: "原创野外营地、料理锅、地图与远山场景",
  },
  {
    kicker: "工程笔记",
    title: "把天空岛变成工作台",
    text: "王国之泪最迷人的时刻，是你发现一堆木板、轮子和风扇比一把神兵更能改变旅程。",
    image: "/guide-sky-workshop.png",
    alt: "原创天空工坊、飞行装置与云海场景",
  },
  {
    kicker: "记忆档案",
    title: "人物关系藏在遗迹里",
    text: "两作都让玩家从碎片中拼回情感：不是被剧情推着哭，而是在路途中突然理解某个沉默。",
    image: "/guide-memory-archive.png",
    alt: "原创遗迹档案厅、记忆碎片与倒影池场景",
  },
  {
    kicker: "全收集桌",
    title: "把完成度变成旅行计划",
    text: "神庙、光根、洞窟、种子和素材都不是清单压力，而是让你重新认识每片区域的理由。",
    image: "/guide-completion-table.png",
    alt: "原创桌面地图、彩色标记与冒险收集物场景",
  },
];

const themePanels = [
  {
    label: "旷野之息",
    title: "探索：先承认世界比你大",
    image: "/character-exploration-duo.png",
    alt: "原创探索主题双人角色望向广阔王国",
    text: "旷野之息的底色是谦卑。你醒来时什么都没有，地图没有答案，山在那里，雨也在那里。玩家的成长不是数值膨胀，而是从“我能不能过去”变成“我想从哪里过去”。",
  },
  {
    label: "王国之泪",
    title: "创造：把世界重新接起来",
    image: "/character-creation-duo.png",
    alt: "原创创造主题双人角色组装飞行器",
    text: "王国之泪的底色是动手。天空、地表、地底被撕开后，玩家不再只是抵达地点，而是用木板、风扇、倒转、通天和蓝图把断裂的世界重新拼成路线。",
  },
];

const characterFocus = [
  {
    title: "林克：沉默不是空白，是玩家的手",
    image: "/character-exploration-duo.png",
    alt: "原创沉默探索者与学者角色",
    text: "林克最重要的特征不是台词，而是行动。他让玩家把观察、失败、练习和临场创造都投进角色里。你越少听他说话，越容易觉得“这一步是我走出来的”。",
  },
  {
    title: "塞尔达：知识、责任与时间的重量",
    image: "/guide-memory-archive.png",
    alt: "原创记忆档案厅与古代浮光",
    text: "塞尔达的动人之处在于她不是单一的被拯救对象。她研究、怀疑、承担、等待，也主动把自己交给漫长时间。她让冒险从“打赢”变成“理解她为何坚持”。",
  },
  {
    title: "四英杰与贤者：区域记忆被人点亮",
    image: "/character-guardians.png",
    alt: "原创四位区域守护者群像",
    text: "四英杰让旷野之息拥有悼念感，贤者让王国之泪拥有传承感。山、河、沙漠、天空不只是地貌，而是有人生活、有人牺牲、有人继承的地方。",
  },
  {
    title: "人马与盖侬：恐惧把技巧逼出来",
    image: "/character-threats.png",
    alt: "原创半人马式强敌与远方暗影君主",
    text: "人马式强敌是玩家技术的试金石，盖侬/盖侬多夫则是世界失序的源头。一个教你敬畏战斗规则，一个提醒你冒险不是旅游，而是在对抗吞噬自由的支配欲。",
  },
];

const signatureScenes = [
  {
    title: "雨天爬山失败学",
    image: "/scene-rain-climb.png",
    alt: "原创雨天攀岩滑落与岩棚营火场景",
    smile: "老玩家看到湿滑岩壁就会下意识叹气。",
    hook: "新玩家会马上明白：天气不是背景板，而是路线设计师。",
  },
  {
    title: "雪坡滑盾快乐学",
    image: "/scene-shield-surf.png",
    alt: "原创雪坡盾滑场景",
    smile: "能走路，但为什么不一路滑下去？",
    hook: "移动本身就是奖励，世界会把速度感还给你。",
  },
  {
    title: "雷雨丢装备求生学",
    image: "/scene-thunder-gear.png",
    alt: "原创雷雨中远离金属装备场景",
    smile: "背包里金属闪光的一刻，老玩家已经开始换装。",
    hook: "这里的自然规则会认真惩罚粗心，也认真奖励观察。",
  },
  {
    title: "机关乱解也能通学",
    image: "/scene-physics-puzzle.png",
    alt: "原创水车、圆石、木桥与机关连锁场景",
    smile: "答案不止一种，离谱方案有时更像正解。",
    hook: "谜题不是考说明书，是考你能不能看懂规则之间的关系。",
  },
  {
    title: "地底点灯壮胆学",
    image: "/scene-underground-light.png",
    alt: "原创地底洞窟点灯探路场景",
    smile: "光亮花一丢，心跳就慢半拍。",
    hook: "黑暗不是阻止探索，而是让你亲手创造安全路线。",
  },
  {
    title: "飞行器翻车创造学",
    image: "/scene-flying-fail.png",
    alt: "原创自制飞行载具摇晃飞行场景",
    smile: "能飞起来已经赢一半，能降落是另一款游戏。",
    hook: "失败不是打断体验，失败就是王泪创造乐趣的一部分。",
  },
];

const essencePoints = [
  "看见：远处的塔、山、烟、岛、洞口先勾住你。",
  "猜测：你开始问自己能不能过去、怎么过去、要带什么。",
  "试错：雨会让你滑落，雷会追着金属，怪会把你打回现实。",
  "理解：你不再背答案，而是看懂风、火、水、重量、高度和时间。",
  "创造：到了王泪，理解规则之后，你开始组合规则。",
  "回望：走过的路、认识的人、失败的夜晚，最后都变成自己的海拉鲁。",
];

const sources = [
  {
    name: "Nintendo: Breath of the Wild",
    href: "https://www.nintendo.com/us/store/products/the-legend-of-zelda-breath-of-the-wild-switch/",
  },
  {
    name: "Nintendo: Tears of the Kingdom",
    href: "https://www.nintendo.com/us/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/",
  },
  {
    name: "Nintendo Ask the Developer Vol. 9",
    href: "https://www.nintendo.com/us/whatsnew/ask-the-developer-vol-9-the-legend-of-zelda-tears-of-the-kingdom-part-1/",
  },
  {
    name: "Zelda Dungeon Interactive Maps",
    href: "https://www.zeldadungeon.net/tears-of-the-kingdom-interactive-map/",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-nav" aria-label="主导航">
        <a className="brand-mark" href="#top">
          <Crown aria-hidden="true" size={18} />
          荒野与王泪攻略书
        </a>
        <nav>
          <a href="#route">入坑路线</a>
          <a href="#compare">两作核心</a>
          <a href="#characters">人物谱系</a>
          <a href="#scenes">特色场景</a>
          <a href="#systems">玩法系统</a>
          <a href="#checklist">收集清单</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          alt="原创奇幻草原、天空岛与地底遗迹场景"
          className="hero-image"
          src="/hyrule-field-original.png"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">非官方粉丝深度攻略</p>
          <h1>塞尔达传说：旷野之息与王国之泪</h1>
          <p className="hero-copy">
            以老玩家视角，把两作拆成可玩的路线、可理解的系统、可回味的人物关系和情感锚点。新玩家从这里入坑，老玩家从这里重新听见海拉鲁的风。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#route">
              <Compass aria-hidden="true" size={18} />
              开始规划旅程
            </a>
            <a className="secondary-action" href="#story">
              <BookOpen aria-hidden="true" size={18} />
              读人物与冲突
            </a>
          </div>
          <dl className="hero-stats" aria-label="攻略覆盖范围">
            <div>
              <dt>2</dt>
              <dd>部核心作品</dd>
            </div>
            <div>
              <dt>3</dt>
              <dd>层世界结构</dd>
            </div>
            <div>
              <dt>8</dt>
              <dd>条游玩主题</dd>
            </div>
          </dl>
        </div>
        <a className="hero-scroll" href="#route" aria-label="继续探索入坑路线">
          <span>继续探索</span>
          <ChevronDown aria-hidden="true" size={18} />
        </a>
      </section>

      <section className="section intro-band" id="route">
        <div className="section-heading">
          <p className="eyebrow">先选你的入口</p>
          <h2>别问先玩哪部，先问你想被什么击中。</h2>
          <p>
            旷野之息像一场从零开始的荒野呼吸，王国之泪像一次把天地重新装配的工程冒险。两部都能入坑，但打开方式不一样。
          </p>
        </div>
        <div className="route-grid">
          {playerRoutes.map((route) => (
            <article className="info-card" key={route.title}>
              <span>{route.label}</span>
              <h3>{route.title}</h3>
              <p>{route.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="compare">
        <div className="section-heading">
          <p className="eyebrow">两作一眼看懂</p>
          <h2>旷野之息教你相信世界，王国之泪教你改造世界。</h2>
        </div>
        <div className="comparison-table" role="table" aria-label="两作核心对照">
          <div className="comparison-header" role="row">
            <span role="columnheader">维度</span>
            <span role="columnheader">旷野之息</span>
            <span role="columnheader">王国之泪</span>
          </div>
          {comparisonRows.map((row) => (
            <div className="comparison-row" role="row" key={row.axis}>
              <strong role="rowheader">{row.axis}</strong>
              <p role="cell">{row.botw}</p>
              <p role="cell">{row.totk}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section theme-duel">
        <div className="section-heading">
          <p className="eyebrow">两个游戏的主旨</p>
          <h2>一部让你走向世界，一部让你重写世界。</h2>
        </div>
        <div className="theme-grid">
          {themePanels.map((panel) => (
            <article className="theme-panel" key={panel.title}>
              <img alt={panel.alt} src={panel.image} />
              <div>
                <span>{panel.label}</span>
                <h3>{panel.title}</h3>
                <p>{panel.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">前 12 小时路线</p>
          <h2>前期别追完美，追可持续的好奇心。</h2>
          <p>
            这套路线不强迫你按固定顺序打主线，而是让你尽快拥有“看见目标、抵达目标、活着回来”的能力。
          </p>
        </div>
        <ol className="timeline-list">
          {firstHours.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section visual-atlas">
        <div className="section-heading">
          <p className="eyebrow">视觉索引</p>
          <h2>把攻略分成四本随身笔记：生存、建造、记忆、收集。</h2>
          <p>
            新玩家可以按图找主题，老玩家可以按主题回忆路线。每一张图都对应后面的实用章节，不只是好看。
          </p>
        </div>
        <div className="visual-grid">
          {visualChapters.map((chapter) => (
            <article className="visual-card" key={chapter.title}>
              <img alt={chapter.alt} src={chapter.image} />
              <div>
                <span>{chapter.kicker}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section signature-section" id="scenes">
        <div className="section-heading">
          <p className="eyebrow">老玩家会心一笑</p>
          <h2>塞尔达的特色，不在“能做什么”，而在“你居然真的可以这么做”。</h2>
          <p>
            这些场景是机制记忆：狼狈、灵光一闪、胡乱尝试、侥幸成功。新玩家会被惊艳，老玩家会想起自己第一次搞砸的样子。
          </p>
        </div>
        <div className="scene-grid">
          {signatureScenes.map((scene) => (
            <article className="scene-card" key={scene.title}>
              <img alt={scene.alt} src={scene.image} />
              <div>
                <h3>{scene.title}</h3>
                <p>{scene.smile}</p>
                <p>{scene.hook}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section systems-band" id="systems">
        <div className="section-heading">
          <p className="eyebrow">玩法核心</p>
          <h2>塞尔达真正的爽点，是系统愿意认真回应你的胡思乱想。</h2>
        </div>
        <div className="systems-grid">
          <article>
            <Mountain aria-hidden="true" />
            <h3>地形是第一件装备</h3>
            <p>
              高低差决定路线，天气改变策略，水火雷冰不是特效而是规则。先观察环境，再考虑拔剑。
            </p>
          </article>
          <article>
            <Hammer aria-hidden="true" />
            <h3>损耗逼出创造力</h3>
            <p>
              武器会坏不是惩罚，而是在提醒你别把自己锁死在一种打法。王泪的余料建造把这件事推到极致。
            </p>
          </article>
          <article>
            <Sparkles aria-hidden="true" />
            <h3>奖励不是只有数值</h3>
            <p>
              神庙给成长，呀哈哈给微笑，支线给村庄温度。真正的奖励常常是“我居然想到了”。
            </p>
          </article>
        </div>
      </section>

      <section className="section essence-section">
        <div className="section-heading">
          <p className="eyebrow">最底层的游玩体验</p>
          <h2>塞尔达不是把答案递给你，而是让你相信自己能发现答案。</h2>
        </div>
        <ol className="essence-list">
          {essencePoints.map((point, index) => (
            <li key={point}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{point}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section game-guides">
        <div className="guide-column botw">
          <div className="guide-title">
            <Shield aria-hidden="true" />
            <div>
              <p className="eyebrow">Breath of the Wild</p>
              <h2>旷野之息攻略骨架</h2>
            </div>
          </div>
          <img
            alt="原创野外营地攻略插图"
            className="guide-art"
            src="/guide-survival-camp.png"
          />
          {botwGuide.map((item) => (
            <article className="guide-step" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="guide-column totk">
          <div className="guide-title">
            <Sword aria-hidden="true" />
            <div>
              <p className="eyebrow">Tears of the Kingdom</p>
              <h2>王国之泪攻略骨架</h2>
            </div>
          </div>
          <img
            alt="原创天空工坊建造攻略插图"
            className="guide-art"
            src="/guide-sky-workshop.png"
          />
          {totkGuide.map((item) => (
            <article className="guide-step" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section character-section" id="characters">
        <div className="section-heading">
          <p className="eyebrow">人物谱系</p>
          <h2>人物不是设定表，他们是玩法与情感的锚。</h2>
          <p>
            林克、塞尔达、四英杰/贤者、人马、盖侬共同组成了海拉鲁的体验结构：行动、责任、传承、试炼与失序。
          </p>
        </div>
        <div className="character-grid">
          {characterFocus.map((character) => (
            <article className="character-card" key={character.title}>
              <img alt={character.alt} src={character.image} />
              <div>
                <h3>{character.title}</h3>
                <p>{character.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="story">
        <div className="section-heading">
          <p className="eyebrow">人物关系与事件冲突</p>
          <h2>海拉鲁的故事不是台词推着走，而是遗迹、记忆和选择推着走。</h2>
        </div>
        <div className="relationship-grid">
          {relationshipGroups.map((group) => (
            <article className="relation-card" key={group.title}>
              <Users aria-hidden="true" />
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </article>
          ))}
        </div>
        <figure className="story-art">
          <img alt="原创记忆档案厅插图" src="/guide-memory-archive.png" />
          <figcaption>
            剧情攻略的读法：先看冲突，再看人物选择，最后把碎片放回你自己的冒险路线里。
          </figcaption>
        </figure>
        <div className="spoiler-wrap">
          {spoilerBlocks.map((block) => (
            <details key={block.summary}>
              <summary>
                <Flame aria-hidden="true" size={18} />
                {block.summary}
              </summary>
              <p>{block.body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section emotion-section">
        <div className="section-heading">
          <p className="eyebrow">情感锚点</p>
          <h2>让老玩家忽然沉默的，往往不是大战，而是路边的小事。</h2>
        </div>
        <div className="anchor-cloud">
          {anchors.map((anchor) => (
            <span key={anchor}>
              <Heart aria-hidden="true" size={16} />
              {anchor}
            </span>
          ))}
        </div>
      </section>

      <section className="section veteran-section">
        <div className="section-heading">
          <p className="eyebrow">老玩家再发现</p>
          <h2>通关不是结束，是你终于可以用自己的规则玩。</h2>
        </div>
        <div className="experiment-list">
          {veteranExperiments.map((experiment) => (
            <article key={experiment}>
              <Route aria-hidden="true" />
              <p>{experiment}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section checklist-section" id="checklist">
        <div className="section-heading">
          <p className="eyebrow">收集与成长清单</p>
          <h2>全收集不该像上班，应该像把地图重新爱一遍。</h2>
        </div>
        <div className="collection-art">
          <img alt="原创全收集地图桌插图" src="/guide-completion-table.png" />
        </div>
        <div className="checklist-grid">
          {checklist.map((block) => (
            <article className="check-card" key={block.title}>
              <MapPinned aria-hidden="true" />
              <h3>{block.title}</h3>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-call">
        <div>
          <p className="eyebrow">一句老玩家建议</p>
          <h2>少查一点答案，多标一点地图；少急一点通关，多记一点路。</h2>
          <p>
            塞尔达最珍贵的攻略不是“最快怎么做”，而是“怎样让世界继续对你有意义”。当你学会把失败、绕路和偶遇都算进旅程，海拉鲁才真正开始。
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <p>
          非官方粉丝攻略站。The Legend of Zelda、Breath of the Wild、Tears of the Kingdom
          为 Nintendo 相关商标/作品；本站使用原创视觉与整理性攻略文字。
        </p>
        <div>
          {sources.map((source) => (
            <a href={source.href} key={source.href} rel="noreferrer" target="_blank">
              {source.name}
            </a>
          ))}
        </div>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const snapToHash = () => {
                const id = decodeURIComponent(window.location.hash.slice(1));
                if (!id) return;
                const target = document.getElementById(id);
                if (!target) return;
                target.scrollIntoView({ block: "start", inline: "nearest" });
              };

              const settle = () => {
                snapToHash();
                window.setTimeout(snapToHash, 120);
                window.setTimeout(snapToHash, 420);
              };

              window.addEventListener("hashchange", settle);
              window.addEventListener("load", settle);
              if (document.readyState !== "loading") {
                settle();
              } else {
                document.addEventListener("DOMContentLoaded", settle, { once: true });
              }
            })();
          `,
        }}
      />
    </main>
  );
}
