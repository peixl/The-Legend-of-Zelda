import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { zh } from "./zh";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = { zh, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.zh;
}

export type { Dictionary };
export * from "./config";
