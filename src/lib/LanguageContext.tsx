"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { translations, type Locale, type Translations } from "./i18n";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("dynvon-lang");
    if (stored === "de" || stored === "en") return stored;
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  // Load saved language on mount
  useEffect(() => {
    setLocale(getInitialLocale());
    setMounted(true);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "de" : "en";
      localStorage.setItem("dynvon-lang", next);
      return next;
    });
  }, []);

  const t = translations[locale];

  // Prevent flash of wrong language
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: "en", t: translations["en"], toggleLocale }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
