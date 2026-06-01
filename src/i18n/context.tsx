import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getMessages } from "./messages";
import type { Locale, Messages } from "./types";
import { LOCALE_HTML_LANG } from "./types";

const STORAGE_KEY = "dr-pascual-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "es-AR";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "es-AR" || stored === "en" || stored === "pt") return stored;
  return "es-AR";
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  m: Messages;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const m = useMemo(() => getMessages(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML_LANG[locale];
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, m }),
    [locale, setLocale, m]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

/** Reemplaza placeholders {key} en strings de traducción */
export function formatMessage(
  template: string,
  vars?: Record<string, string | number>
): string {
  if (!vars) return template;
  return Object.entries(vars).reduce(
    (acc, [key, val]) => acc.replace(new RegExp(`\\{${key}\\}`, "g"), String(val)),
    template
  );
}
