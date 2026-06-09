export interface NavLink {
  label: string;
  href: string;
}

interface RouteItem {
  title: string;
  label: string;
  text: string;
}

interface CompareRow {
  axis: string;
  botw: string;
  totk: string;
}

interface ThemePanel {
  label: string;
  title: string;
  image: string;
  alt: string;
  text: string;
}

interface VisualItem {
  kicker: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}

interface SceneItem {
  title: string;
  image: string;
  alt: string;
  smile: string;
  hook: string;
}

interface TitleText {
  title: string;
  text: string;
}

interface GuideStep {
  title: string;
  body: string;
}

interface GuideColumn {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  steps: GuideStep[];
}

interface CharacterItem {
  title: string;
  image: string;
  alt: string;
  text: string;
}

interface SpoilerBlock {
  summary: string;
  body: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface ChecklistGroup {
  title: string;
  items: string[];
}

interface LinkItem {
  name: string;
  href: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  nav: {
    brand: string;
    links: NavLink[];
    guideLink: string;
    ariaLabel: string;
    langLabel: string;
    menuLabel: string;
    closeLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    copy: string;
    primaryAction: string;
    secondaryAction: string;
    statsLabel: string;
    stats: { value: string; label: string }[];
    scroll: string;
    imageAlt: string;
  };
  route: {
    eyebrow: string;
    title: string;
    intro: string;
    items: RouteItem[];
  };
  compare: {
    eyebrow: string;
    title: string;
    tableLabel: string;
    headers: { axis: string; botw: string; totk: string };
    rows: CompareRow[];
  };
  themeDuel: {
    eyebrow: string;
    title: string;
    panels: ThemePanel[];
  };
  firstHours: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  visualAtlas: {
    eyebrow: string;
    title: string;
    intro: string;
    items: VisualItem[];
  };
  scenes: {
    eyebrow: string;
    title: string;
    intro: string;
    items: SceneItem[];
  };
  systems: {
    eyebrow: string;
    title: string;
    items: TitleText[];
  };
  essence: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  guides: {
    botw: GuideColumn;
    totk: GuideColumn;
  };
  characters: {
    eyebrow: string;
    title: string;
    intro: string;
    items: CharacterItem[];
  };
  story: {
    eyebrow: string;
    title: string;
    groups: TitleText[];
    figcaption: string;
    figureAlt: string;
    figureImage: string;
    spoilers: SpoilerBlock[];
  };
  emotion: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  veteran: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    items: FaqItem[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    artAlt: string;
    artImage: string;
    items: ChecklistGroup[];
  };
  finalCall: {
    eyebrow: string;
    title: string;
    body: string;
  };
  footer: {
    disclaimer: string;
    brandLead: string;
    brandTail: string;
    aiNote: string;
    sourcesLabel: string;
    sources: LinkItem[];
  };
}
