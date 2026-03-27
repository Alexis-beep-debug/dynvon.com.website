"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t, locale } = useLanguage();

  const stats = locale === "en"
    ? [
        { value: "10+", label: "Hours saved per week" },
        { value: "100%", label: "Error-free automation" },
        { value: "< 5 min", label: "Instead of 2 hours" },
      ]
    : [
        { value: "10+", label: "Stunden gespart pro Woche" },
        { value: "100%", label: "Fehlerfreie Automatisierung" },
        { value: "< 5 Min", label: "Statt 2 Stunden" },
      ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden grid-bg">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/6 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/8 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-sm text-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Business Process Automation Engineer
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
          {locale === "en" ? (
            <>
              I <span className="stat-highlight">Automate</span> Your
              <br className="hidden sm:block" />{" "}
              Business Processes
            </>
          ) : (
            <>
              Ich <span className="stat-highlight">automatisiere</span> Ihre
              <br className="hidden sm:block" />{" "}
              Geschäftsprozesse
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
            href="https://calendar.app.google/hnhhsonYaR6LrChw7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-lg"
          >
            {t.hero.cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="p-5 rounded-xl border border-border bg-surface/40 backdrop-blur-sm">
              <div className="text-3xl font-bold stat-highlight mb-1">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Python", "Railway", "Pipedrive", "Lexoffice", "Brevo", "Airtable", "Make.com", "LLM APIs"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-xs font-mono text-muted border border-border rounded-full bg-surface/30"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
