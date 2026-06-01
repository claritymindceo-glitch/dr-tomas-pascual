import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "./context";
import {
  LOCALES,
  LOCALE_FLAGS,
  LOCALE_LABELS,
  LOCALE_NAMES,
  type Locale,
} from "./types";

function Flag({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center text-base leading-none select-none ${className}`}
      aria-hidden="true"
    >
      {LOCALE_FLAGS[locale]}
    </span>
  );
}

export default function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const select = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 px-2.5 py-2 sm:px-3 border border-black/[0.08] text-[#5c5954] hover:text-[#1a1a18] hover:border-[#4a8499]/40 transition-all duration-200 cursor-pointer rounded-sm"
        aria-label="Seleccionar idioma"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Flag locale={locale} className="text-[15px] sm:text-base" />
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em]">
          {LOCALE_LABELS[locale]}
        </span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Idiomas disponibles"
          className="absolute right-0 top-full mt-1.5 min-w-[200px] bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.1)] z-[60] py-1 rounded-sm overflow-hidden"
        >
          {LOCALES.map((code) => {
            const active = code === locale;
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => select(code)}
                  className={`w-full flex items-center gap-2.5 text-left px-3 py-2.5 text-[11px] font-sans transition-colors cursor-pointer ${
                    active
                      ? "bg-[#4a8499]/10 text-[#1a1a18] font-medium"
                      : "text-[#5c5954] hover:bg-black/[0.03] hover:text-[#1a1a18]"
                  }`}
                >
                  <Flag locale={code} />
                  <span className="font-mono uppercase tracking-wider text-[#4a8499] shrink-0">
                    {LOCALE_LABELS[code]}
                  </span>
                  <span className="truncate">{LOCALE_NAMES[code]}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
