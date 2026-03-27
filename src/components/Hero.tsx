"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[128px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 text-sm text-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Business Process Automation Engineer
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          {t.hero.title.split(" ").map((word, i) => {
            const highlightWords = ["Automate", "automatisiere"];
            if (highlightWords.includes(word)) {
              return (
                <span key={i} className="text-accent-light">
                  {word}{" "}
                </span>
              );
            }
            return <span key={i}>{word} </span>;
          })}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            {t.hero.cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-surface-light transition-all"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {["Python", "Railway", "Pipedrive", "Lexoffice", "Brevo", "Airtable", "Make.com"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-muted border border-border rounded-full"
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
