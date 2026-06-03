import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Wild & Tears Field Guide | The Legend of Zelda BOTW & TOTK Companion",
    description:
      "An unofficial, in-depth fan guide to The Legend of Zelda: Breath of the Wild and Tears of the Kingdom — core systems, story conflicts, character relationships, emotional beats, and full-completion routes. Made by IFQ.AI.",
    keywords: [
      "The Legend of Zelda",
      "Breath of the Wild guide",
      "Tears of the Kingdom guide",
      "Zelda walkthrough",
      "BOTW guide",
      "TOTK guide",
      "shrines",
      "Korok seeds",
      "Lightroots",
      "Ultrahand",
      "Fuse",
      "Hyrule map",
      "100% completion",
      "Nintendo Switch",
      "IFQ.AI",
    ],
    ogAlt: "In-depth guide to The Legend of Zelda: Breath of the Wild and Tears of the Kingdom",
  },
  nav: {
    brand: "Wild & Tears Field Guide",
    links: [
      { label: "Where to start", href: "#route" },
      { label: "Two games", href: "#compare" },
      { label: "Characters", href: "#characters" },
      { label: "Signature moments", href: "#scenes" },
      { label: "Systems", href: "#systems" },
      { label: "FAQ", href: "#faq" },
      { label: "Checklists", href: "#checklist" },
    ],
    ariaLabel: "Primary navigation",
    langLabel: "语言",
  },
  hero: {
    eyebrow: "Unofficial in-depth fan guide",
    title: "The Legend of Zelda: Breath of the Wild & Tears of the Kingdom",
    copy: "From a veteran's point of view, both games are broken down into playable routes, understandable systems, and character bonds worth revisiting. New players start their journey here; returning players hear the wind of Hyrule again.",
    primaryAction: "Plan your journey",
    secondaryAction: "Read characters & conflict",
    statsLabel: "Guide coverage",
    stats: [
      { value: "2", label: "core titles" },
      { value: "3", label: "world layers" },
      { value: "8", label: "play themes" },
    ],
    scroll: "Keep exploring",
    imageAlt: "Original fantasy scene of grasslands, sky islands, and underground ruins",
  },
  route: {
    eyebrow: "Choose your entry point",
    title: "Don't ask which to play first — ask what you want to be moved by.",
    intro:
      "Breath of the Wild feels like a fresh breath of wilderness from zero. Tears of the Kingdom feels like an engineering adventure that reassembles the world. Either is a great start, but they open differently.",
    items: [
      {
        title: "First steps into Hyrule",
        label: "Start with Breath of the Wild",
        text: "Get comfortable with towers, shrines, cooking, stealth, and environmental interaction. Don't chase 100% yet — first learn to survive in rain, lightning, night, and unfamiliar terrain.",
      },
      {
        title: "I just want to be hooked fast",
        label: "Tears of the Kingdom also works",
        text: "Jump straight into Ultrahand, Fuse, and the sky islands — but slow down the story pace: each time you unlock an ability, return to the surface and try it in three different situations.",
      },
      {
        title: "Returning veterans",
        label: "Unlearn your habits",
        text: "Don't treat Tears of the Kingdom as DLC. Forget your old routes and rebuild your mental map using caves, wells, falling sky rocks, and underground Lightroots.",
      },
      {
        title: "Lore & story lovers",
        label: "Memories first",
        text: "In BOTW, follow the photo memories; in TOTK, follow the order of the Dragon's Tears. The most moving moments of both games hide in the silences Link never speaks — the blanks players fill in themselves.",
      },
    ],
  },
  compare: {
    eyebrow: "Both games at a glance",
    title: "Breath of the Wild teaches you to trust the world; Tears of the Kingdom teaches you to remake it.",
    tableLabel: "Core comparison of the two games",
    headers: { axis: "Dimension", botw: "Breath of the Wild", totk: "Tears of the Kingdom" },
    rows: [
      {
        axis: "Core feeling",
        botw: "Become a hero again out of amnesia, ruin, and silence. You learn humility first, then strength.",
        totk: "Reassemble order across sky, surface, and depths. You don't find the answer — you build it.",
      },
      {
        axis: "Core verbs",
        botw: "Climb, paraglide, cook, sneak, exploit weather, and deconstruct the environment with bombs and magnesis.",
        totk: "Ultrahand assembly, Fuse crafting, Recall, Ascend, and Autobuild — turning the map into engineering material.",
      },
      {
        axis: "Combat thinking",
        botw: "Read attacks, parry, Flurry Rush, elemental arrows, terrain advantage. Weapon durability keeps you mobile.",
        totk: "Base weapon plus material defines your ceiling. Enemy camps aren't just foes — they're parts depots and labs.",
      },
      {
        axis: "Exploration reward",
        botw: "Shrines, Koroks, memories, armor sets, horses, and village quests reward your eye for terrain.",
        totk: "Shrines, caves, wells, Lightroots, Zonai devices, and the Sage questlines reward your imagination for structure.",
      },
    ],
  },
  themeDuel: {
    eyebrow: "The thesis of each game",
    title: "One sends you out into the world; the other lets you rewrite it.",
    panels: [
      {
        label: "Breath of the Wild",
        title: "Exploration: first admit the world is bigger than you",
        image: "/character-exploration-duo.webp",
        alt: "Original exploration-themed duo gazing at a vast kingdom",
        text: "The base note of Breath of the Wild is humility. You wake with nothing, the map holds no answers, the mountain is there and so is the rain. Growth isn't stat inflation — it's going from \"can I get across?\" to \"where do I want to cross from?\"",
      },
      {
        label: "Tears of the Kingdom",
        title: "Creation: stitch the world back together",
        image: "/character-creation-duo.webp",
        alt: "Original creation-themed duo assembling a flying machine",
        text: "The base note of Tears of the Kingdom is hands-on building. After sky, surface, and depths are torn apart, you no longer just arrive at places — you reassemble a broken world into routes with planks, fans, Recall, Ascend, and blueprints.",
      },
    ],
  },
  firstHours: {
    eyebrow: "First 12 hours",
    title: "Early on, don't chase perfection — chase sustainable curiosity.",
    intro:
      "This route doesn't force a fixed main-quest order. It just gets you the ability to \"spot a goal, reach it, and come back alive\" as fast as possible.",
    items: [
      "Treat the opening plateau / starting sky island as a tutorial you chew on repeatedly: find three unconventional uses for every ability.",
      "Prioritize towers and stables. Towers give vision; stables give horses, rumors, side quests, and a sense of safety.",
      "Cook a meal whenever you reach a new region: keep one each for cold resistance, heat resistance, stamina, attack, and defense.",
      "Mark strong enemies first; don't rush the fight. Seasoned Hyrule players know retreating is also route planning.",
      "Every night, sort your pack at a campfire or inn: sell ore, restock arrows, upgrade armor, and write down your next goal.",
      "After each main objective, return to old regions and re-walk them with new abilities — many surprises only reward those who look back.",
    ],
  },
  visualAtlas: {
    eyebrow: "Visual index",
    title: "Four pocket notebooks: survival, building, memory, and collection.",
    intro:
      "New players can find a theme by its picture; veterans can recall a route by its theme. Each image maps to a practical chapter below — not just decoration.",
    items: [
      {
        kicker: "Field manual",
        title: "Cooking, weather, routes, and retreat",
        text: "Treat camps as supply stations and ridgelines as route maps, and Hyrule turns from a huge map into an approachable living place.",
        image: "/guide-survival-camp.webp",
        alt: "Original scene of a wilderness camp, cooking pot, map, and distant mountains",
      },
      {
        kicker: "Engineering notes",
        title: "Turn the sky islands into a workbench",
        text: "The most magical moment in Tears of the Kingdom is realizing a pile of planks, wheels, and fans can change your journey more than any legendary blade.",
        image: "/guide-sky-workshop.webp",
        alt: "Original scene of a sky workshop, flying device, and sea of clouds",
      },
      {
        kicker: "Memory archive",
        title: "Character bonds hide in the ruins",
        text: "Both games let you reassemble emotion from fragments: not pushed to tears by cutscenes, but suddenly understanding a silence mid-journey.",
        image: "/guide-memory-archive.webp",
        alt: "Original scene of a ruined archive hall, memory shards, and a reflecting pool",
      },
      {
        kicker: "Completion desk",
        title: "Turn completion into a travel plan",
        text: "Shrines, Lightroots, caves, seeds, and materials aren't checklist pressure — they're reasons to get to know each region again.",
        image: "/guide-completion-table.webp",
        alt: "Original scene of a desk map, colored markers, and adventure collectibles",
      },
    ],
  },
  scenes: {
    eyebrow: "Veterans' knowing smile",
    title: "Zelda's signature isn't \"what you can do\" — it's \"wait, you can really do that?\"",
    intro:
      "These scenes are mechanical memories: the fumbling, the flash of insight, the wild attempts, the lucky wins. New players are amazed; veterans remember the first time they botched it.",
    items: [
      {
        title: "Climbing in the rain 101",
        image: "/scene-rain-climb.webp",
        alt: "Original scene of slipping while climbing in the rain near a ledge campfire",
        smile: "Veterans sigh instinctively at the sight of a slick rock face.",
        hook: "New players immediately get it: weather isn't a backdrop — it's the route designer.",
      },
      {
        title: "Shield-surfing snowy slopes 101",
        image: "/scene-shield-surf.webp",
        alt: "Original scene of shield surfing down a snowy slope",
        smile: "You could walk — but why not just slide all the way down?",
        hook: "Movement itself is the reward; the world gives your sense of speed back to you.",
      },
      {
        title: "Dropping metal gear in a thunderstorm 101",
        image: "/scene-thunder-gear.webp",
        alt: "Original scene of moving away from metal gear during a thunderstorm",
        smile: "The instant metal glints in the pack, veterans are already swapping gear.",
        hook: "Nature's rules punish carelessness in earnest — and reward observation just as seriously.",
      },
      {
        title: "Solving puzzles the wrong way still works 101",
        image: "/scene-physics-puzzle.webp",
        alt: "Original scene of a water wheel, boulder, wooden bridge, and chained contraptions",
        smile: "There's more than one answer; the absurd solution is sometimes the real one.",
        hook: "Puzzles don't test the manual — they test whether you can read the relationships between rules.",
      },
      {
        title: "Lighting the depths for courage 101",
        image: "/scene-underground-light.webp",
        alt: "Original scene of lighting the way through an underground cave",
        smile: "Toss one Brightbloom seed and your heartbeat slows half a step.",
        hook: "Darkness doesn't stop exploration — it lets you build the safe route with your own hands.",
      },
      {
        title: "Crashing homemade aircraft 101",
        image: "/scene-flying-fail.webp",
        alt: "Original scene of a wobbly homemade flying vehicle",
        smile: "Getting airborne is half the win; landing is a whole other game.",
        hook: "Failure doesn't interrupt the experience — failure is part of how TOTK's creativity is fun.",
      },
    ],
  },
  systems: {
    eyebrow: "Core gameplay",
    title: "Zelda's real thrill is a system that genuinely answers your wild ideas.",
    items: [
      {
        title: "Terrain is your first piece of gear",
        text: "Elevation decides routes, weather changes strategy, and water/fire/lightning/ice are rules, not effects. Observe the environment first, then think about drawing your sword.",
      },
      {
        title: "Durability forces creativity",
        text: "Weapons breaking isn't punishment — it reminds you not to lock yourself into one playstyle. TOTK's Fuse crafting pushes this to the extreme.",
      },
      {
        title: "Rewards aren't only stats",
        text: "Shrines give growth, Koroks give a smile, side quests give villages warmth. The real reward is often \"I can't believe I thought of that.\"",
      },
    ],
  },
  essence: {
    eyebrow: "The deepest layer of play",
    title: "Zelda doesn't hand you the answer — it makes you believe you can find it.",
    items: [
      "See: a distant tower, mountain, smoke, island, or cave mouth hooks you first.",
      "Guess: you start asking whether you can get there, how, and what to bring.",
      "Try & fail: rain makes you slip, lightning chases metal, monsters knock you back to reality.",
      "Understand: you stop memorizing answers and start reading wind, fire, water, weight, height, and time.",
      "Create: by TOTK, once you understand the rules, you begin combining them.",
      "Look back: the roads walked, the people met, the failed nights — all become your own Hyrule.",
    ],
  },
  guides: {
    botw: {
      eyebrow: "Breath of the Wild",
      title: "BOTW guide skeleton",
      image: "/guide-survival-camp.webp",
      imageAlt: "Original wilderness camp guide illustration",
      steps: [
        {
          title: "Early: don't rush to be a hero",
          body: "The four Divine Beasts aren't a speed goal. First clear a dozen-plus shrines to expand hearts and stamina, grab a basic cold-resist/stealth/soldier set, and get used to parrying Guardian lasers. The most important early resource isn't weapons — it's the edge of your courage.",
        },
        {
          title: "Mid: let the map fight for you",
          body: "Powder kegs, metal crates, high ground, thunderstorms, ice, water, and night-time Stalf(skeletons) can all join the fight. The less you treat combat as a head-on duel, the sooner Breath of the Wild becomes your playground.",
        },
        {
          title: "Late: memories outweigh stats",
          body: "The Master Sword, Champion abilities, and armor upgrades make you stronger, but what truly raises the ending are the photo memories, the four Champion quests, and the everyday attachments in every village.",
        },
      ],
    },
    totk: {
      eyebrow: "Tears of the Kingdom",
      title: "TOTK guide skeleton",
      image: "/guide-sky-workshop.webp",
      imageAlt: "Original sky workshop building guide illustration",
      steps: [
        {
          title: "Sky: learn to read the map top-down",
          body: "Sky islands give you height and direction. Before you drop, observe smoke, towers, oddly colored terrain, circular ruins, and cave entrances — the descent itself is your first leg of route planning.",
        },
        {
          title: "Surface: don't just follow old memories",
          body: "TOTK's surface deliberately toys with your old experience. Beside familiar villages, stables, and mountain paths, you'll now find caves, wells, the newspaper office, survey teams, and fresh crisis sites.",
        },
        {
          title: "Depths: a class in managing fear",
          body: "Light the Lightroots first, then fight and mine. The depths mirror the surface, so Lightroot positions often reverse-engineer surface shrines. Pack plenty of Brightbloom seeds, sunny meals, and a retreat warp point.",
        },
      ],
    },
  },
  characters: {
    eyebrow: "Character map",
    title: "Characters aren't a stat sheet — they're the anchors of gameplay and emotion.",
    intro:
      "Link, Zelda, the Champions/Sages, the Lynels, and Ganon together form Hyrule's experience structure: action, responsibility, inheritance, trial, and disorder.",
    items: [
      {
        title: "Link: silence isn't a blank — it's the player's hand",
        image: "/character-exploration-duo.webp",
        alt: "Original silent explorer and scholar characters",
        text: "Link's defining trait isn't dialogue — it's action. He lets players pour observation, failure, practice, and on-the-spot invention into the character. The less you hear him speak, the more it feels like \"I made this step myself.\"",
      },
      {
        title: "Zelda: knowledge, responsibility, and the weight of time",
        image: "/guide-memory-archive.webp",
        alt: "Original memory archive hall with ancient light",
        text: "Zelda is moving because she isn't merely someone to be rescued. She researches, doubts, bears burdens, waits, and willingly gives herself to long stretches of time. She turns the adventure from \"winning\" into \"understanding why she persists.\"",
      },
      {
        title: "Champions & Sages: regional memory lit by people",
        image: "/character-guardians.webp",
        alt: "Original group portrait of four regional guardians",
        text: "The Champions give Breath of the Wild its sense of mourning; the Sages give Tears of the Kingdom its sense of inheritance. Mountains, rivers, deserts, and skies aren't just terrain — they're places where people lived, sacrificed, and inherited.",
      },
      {
        title: "Lynels & Ganon: fear forces skill out of you",
        image: "/character-threats.webp",
        alt: "Original Lynel-like elite enemy and a distant shadow lord",
        text: "Lynel-type elites are the touchstone of player skill; Ganon/Ganondorf is the source of the world's disorder. One teaches you to respect combat's rules; the other reminds you that adventure isn't tourism — it's resisting a domination that devours freedom.",
      },
    ],
  },
  story: {
    eyebrow: "Relationships & conflict",
    title: "Hyrule's story isn't pushed by dialogue — it's pushed by ruins, memories, and choices.",
    groups: [
      {
        title: "Link & Zelda",
        text: "Both games place emotion behind action. Link is responsible for arriving; Zelda is responsible for enduring time; the player is responsible for reading silence as companionship.",
      },
      {
        title: "Champions & Sages",
        text: "Breath of the Wild mourns fallen comrades; Tears of the Kingdom pushes their successors to the front. Old wounds and new responsibilities are handed over here.",
      },
      {
        title: "Sheikah, Yiga & technology",
        text: "Ancient tech both saves and spirals out of control. The Sheikah leave a system; the Yiga leave the irony: the same power depends on whether people devote it to protection or obsession.",
      },
      {
        title: "Calamity Ganon & Ganondorf",
        text: "The Calamity is malice run wild; the Demon King is domination with will. The two villains shift from disaster to politics and desire, making the conflict more concrete.",
      },
    ],
    figcaption:
      "How to read the story guide: look at the conflict first, then the characters' choices, then place the fragments back into your own adventure route.",
    figureAlt: "Original memory archive hall illustration",
    figureImage: "/guide-memory-archive.webp",
    spoilers: [
      {
        summary: "Why BOTW's conflict is moving",
        body: "It isn't simply a story of defeating the Calamity — it's how a kingdom that already failed hands its last bit of hope to the player. The four Champions are gone, Zelda holds back the Calamity with a century-long seal, and Link wakes to face a responsibility that arrived too late. Precisely because everything is late, each step the player takes to arrive feels tender.",
      },
      {
        summary: "Why TOTK's conflict escalates",
        body: "TOTK turns the enemy from malice into Ganondorf — named, hungry for rule, rooted in history. It also turns Zelda from someone waiting for rescue into someone who actively crosses time and pays the price. Link's adventure isn't just to find the princess — it's to catch the trust she left across time.",
      },
    ],
  },
  emotion: {
    eyebrow: "Emotional anchors",
    title: "What suddenly silences veterans is rarely the big battle — it's the small things on the roadside.",
    items: [
      "Hearing the wind the first time you leap from a height",
      "The helplessness and detours when you can't climb a mountain in the rain",
      "Naming a horse and suddenly not wanting to fast-travel",
      "The old-friend feeling when a Champion's theme plays",
      "Realizing Zelda has been holding on alone all along",
      "That instinct to reach out a hand in TOTK's final stretch",
    ],
  },
  veteran: {
    eyebrow: "Veteran rediscovery",
    title: "Beating the game isn't the end — it's when you finally get to play by your own rules.",
    items: [
      "No-fast-travel runs: connect cities using only horses, paragliding, falling rocks, and homemade vehicles.",
      "Photo archaeology: shoot every ruin from the same angle to trace civilization before and after the Calamity.",
      "Low-combat routes: steal when you can, detour when you can, treat Hyrule as a stealth-survival game.",
      "Chef's log: at each village, cook only with local ingredients and record regional flavors.",
      "Depths-first save: in TOTK, build a depths main line right after unlocking the towers, then reverse-engineer surface shrines.",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "The questions new players ask most, answered clearly in one place.",
    intro:
      "These answers are also structured facts prepared for AI and agents: directly quotable, verifiable, and a native source of truth for Zelda guidance.",
    items: [
      {
        q: "Should I play Breath of the Wild or Tears of the Kingdom first?",
        a: "We recommend Breath of the Wild first. Its pacing is more restrained and lets you build map memory and survival instinct from scratch; Tears of the Kingdom then adds Ultrahand and building on top, for a smoother experience. That said, either game works as a standalone entry point.",
      },
      {
        q: "Can I play Tears of the Kingdom without having played Breath of the Wild?",
        a: "Yes. Tears of the Kingdom is a standalone story and teaches the new abilities up front. Some place names, characters, and emotional echoes simply land harder if you've played the previous game.",
      },
      {
        q: "How many shrines and Koroks are in Breath of the Wild?",
        a: "120 shrines in the base game (plus DLC trials), and 900 Korok seeds total. Shrines grant Spirit Orbs for heart and stamina vessels; Koroks expand weapon, bow, and shield slots.",
      },
      {
        q: "How many shrines and Lightroots are in Tears of the Kingdom?",
        a: "152 shrines, 1000 Korok seeds, and about 120 Lightroots in the Depths. Lightroot positions often mirror surface shrines, so each can help locate the other.",
      },
      {
        q: "What should new players do first?",
        a: "Prioritize towers for vision and stables for supplies and warp points, and always keep cold-resist, heat-resist, healing, and stamina meals ready. Mark strong enemies and retreat first — you don't have to fight everything head-on.",
      },
      {
        q: "Why do weapons break, and how should I deal with it?",
        a: "Durability exists to push you to keep changing playstyles and to use the environment and terrain. Carry multiple weapons and restock at enemy camps; in Tears of the Kingdom, use Fuse to attach materials to weapons for better performance.",
      },
      {
        q: "Is this site an official Nintendo guide?",
        a: "No. This is an unofficial fan guide made by IFQ.AI and maintained by peixl, using original visuals and editorial text. The Legend of Zelda, Breath of the Wild, and Tears of the Kingdom are trademarks and works of Nintendo.",
      },
    ],
  },
  checklist: {
    eyebrow: "Collection & growth checklists",
    title: "100% shouldn't feel like a day job — it should feel like loving the map all over again.",
    artAlt: "Original full-collection map desk illustration",
    artImage: "/guide-completion-table.webp",
    items: [
      {
        title: "BOTW completion coordinates",
        items: [
          "120 base-game shrines and key trial routes",
          "900 Korok seeds cleared region by region",
          "Four Divine Beasts, photo memories, Master Sword, and armor upgrades",
          "Open all towers first, then do village side quests for the smoothest flow",
        ],
      },
      {
        title: "TOTK completion coordinates",
        items: [
          "152 shrines and 120 Lightroots cross-checked against each other",
          "1000 Korok seeds cleared along sky and surface routes",
          "Caves, wells, Misko's lost items, and the Sages' wills",
          "Zonai battery upgrades and Autobuild blueprints decide late-game fun",
        ],
      },
      {
        title: "Inventory habits for both games",
        items: [
          "Keep at least one meal for each environment",
          "Sell ore for cash; save rare materials for upgrades first",
          "You can never have too many arrows; always keep one plain shield",
          "Photograph, mark, and retreat from new enemies — no shame in it",
        ],
      },
    ],
  },
  finalCall: {
    eyebrow: "One veteran's advice",
    title: "Look up fewer answers, mark the map more; rush the ending less, remember the road more.",
    body: "Zelda's most precious guide isn't \"the fastest way to do it\" — it's \"how to keep the world meaningful to you.\" Once you count failures, detours, and chance encounters as part of the journey, Hyrule truly begins.",
  },
  footer: {
    disclaimer:
      "Unofficial fan guide. The Legend of Zelda, Breath of the Wild, and Tears of the Kingdom are trademarks/works of Nintendo; this site uses original visuals and editorial guide text.",
    brandLead: "Made by",
    brandTail: "· Author",
    aiNote: "Friendly to AI & agents:",
    sourcesLabel: "Sources",
    sources: [
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
    ],
  },
};
