"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t, locale } = useLanguage();

  const stats = locale === "en"
    ? [
        { value: "10+", label: "Hours saved per week" },
        { value: "0", label: "Errors in bookkeeping" },
        { value: "95%", label: "Faster proposals" },
      ]
    : [
        { value: "10+", label: "Stunden gespart pro Woche" },
        { value: "0", label: "Fehler in der Buchhaltung" },
        { value: "95%", label: "Schnellere Angebote" },
      ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-sm text-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
          Business Process Automation Engineer
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 break-words">
          {locale === "en" ? (
            <>
              Stop <span className="stat-highlight">Wasting Hours</span> on
              <br className="hidden sm:block" />{" "}
              Repetitive Tasks
            </>
          ) : (
            <>
              Schluss mit
              <br className="sm:hidden" />{" "}
              <span className="stat-highlight">Zeitverschwendung</span>
              <br className="hidden sm:block" />{" "}
              für Routinearbeit
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="https://calendar.app.google/qJnC2hS15NJ1XxVcA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-lg"
          >
            {t.hero.cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-xl hover:bg-surface-light transition-all"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats — business results, not tech */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="p-5 rounded-xl border border-border bg-surface/40 backdrop-blur-sm">
              <div className="text-3xl font-bold stat-highlight mb-1">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
