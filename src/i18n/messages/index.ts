import type { Locale, Messages } from "../types";
import { esAR } from "./es-AR";
import { en } from "./en";
import { pt } from "./pt";

export const messagesByLocale: Record<Locale, Messages> = {
  "es-AR": esAR,
  en,
  pt,
};

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}
