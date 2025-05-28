// DEFAULT LANGUAGE CONFIG

import type { Locale } from "@/types/CountryImpl";

export const DEFAULT_LANG: string = "en";
export const DEFAULT_LOCAL: string = "US";
export const SUPPORTED_LANGS: string[] = ["fr", "de"];

export const SUPPORTED_LOCALES: Locale[] = [
  { language: "en-US", currency: "USD" },
  { language: "de-DE", currency: "EUR" },
  { language: "fr-FR", currency: "EUR" },
  { language: "en-DE", currency: "EUR" },
  { language: "en-FR", currency: "EUR" },
  { language: "de-US", currency: "USD" },
  { language: "fr-US", currency: "USD" },
  { language: "de-FR", currency: "EUR" },
  { language: "fr-DE", currency: "EUR" },
];

// JOKE API

export const API_BASE: string = "https://v2.jokeapi.dev/";

export const _AVAILABLE_CATEGORIES: string[] = [
  "Programming",
  "Misc",
  "Christmas",
  "Halloween",
  "Miscellaneous",
  "Pun",
  "Dark",
];

export const _AVAILABLE_FLAGS: string[] = [
  "nsfw",
  "religious",
  "political",
  "racist",
  "sexist",
  "explicit",
];
