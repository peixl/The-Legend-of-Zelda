/**
 * Shared shape for a single-game "get strong" walkthrough sub-page
 * (e.g. /[lang]/botw-guide, /[lang]/totk-guide). Both games map onto the same
 * structure — hero, route + stages, growth systems, combat drills + controls,
 * cooking, regional powers (Divine Beasts / Sages), tough enemies, checklist.
 * Growth-card icons are chosen per route in the page (lucide-react).
 */
export interface GuideDictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  nav: {
    brand: string;
    links: { label: string; href: string }[];
    /** Label other pages use when linking TO this guide (e.g. the sibling guide). */
    crossLabel: string;
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
