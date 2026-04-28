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

        {/* Google Rating Badge */}
        <div className="mt-14 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-surface/40 backdrop-blur-sm">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold">5.0</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-muted">{locale === "en" ? "on Google" : "auf Google"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
