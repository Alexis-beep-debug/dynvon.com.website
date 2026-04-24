"use client";

import { useLanguage } from "@/lib/LanguageContext";

type Industry = {
  href: string;
  title: { de: string; en: string };
  description: { de: string; en: string };
};

const INDUSTRIES: Industry[] = [
  {
    href: "/reinigung",
    title: {
      de: "Gebäudereinigungsunternehmen",
      en: "Cleaning companies",
    },
    description: {
      de: "Automatisierte Buchhaltung, Angebotserstellung und Mahnwesen — zugeschnitten auf Betriebe mit 1–50 Mitarbeitern.",
      en: "Automated accounting, quoting, and dunning — tailored for cleaning businesses with 1–50 employees.",
    },
  },
  {
    href: "/hausverwaltung",
    title: {
      de: "Hausverwaltungen",
      en: "Property management",
    },
    description: {
      de: "Rechnungsverarbeitung, Nebenkostenabrechnungen, DATEV-Export und Hausgeld-Mahnwesen automatisiert — für WEG- und Mietverwaltungen.",
      en: "Invoice processing, service charge statements, DATEV export and dunning — automated for property management firms.",
    },
  },
];

export default function IndustryFocus() {
  const { locale } = useLanguage();
  const isDe = locale === "de";

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
            {isDe ? "Branchenlösungen" : "Industry Solutions"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {isDe ? "Spezialisiert für Ihre Branche" : "Specialized for your industry"}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            {isDe
              ? "Für bestimmte Branchen habe ich dedizierte Lösungen entwickelt — mit branchenspezifischen Workflows, Integrationen und Ergebnissen."
              : "For specific industries I've built dedicated solutions — with industry-specific workflows, integrations, and results."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRIES.map((ind) => (
            <a
              key={ind.href}
              href={ind.href}
              className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-surface/60 hover:bg-surface-light hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold group-hover:text-accent-light transition-colors">
                  {ind.title[isDe ? "de" : "en"]}
                </h3>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              <p className="text-muted text-[15px] leading-relaxed">
                {ind.description[isDe ? "de" : "en"]}
              </p>
            </a>
          ))}

          <div className="p-6 sm:p-8 rounded-2xl border border-dashed border-border bg-surface/20 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-accent/5 text-muted flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="font-semibold text-base mb-4">
              {isDe ? "Ihre Branche fehlt?" : "Your industry missing?"}
            </h3>
            <a
              href="#contact"
              className="text-sm font-medium text-accent-light hover:text-accent transition-colors"
            >
              {isDe ? "Gespräch starten →" : "Start a conversation →"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
