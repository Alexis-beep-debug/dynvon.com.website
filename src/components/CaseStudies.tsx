"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function CaseStudies() {
  const { t, locale } = useLanguage();
  const problemLabel = locale === "en" ? "Challenge" : "Herausforderung";
  const solutionLabel = locale === "en" ? "Solution" : "Lösung";
  const resultLabel = locale === "en" ? "Result" : "Ergebnis";

  // Images for each case study (by index)
  const caseImages: (string | null)[] = [
    "/case-accounting.png", // Case 1: Accounting
    null,                   // Case 2: Proposal (no image yet)
    null,                   // Case 3: Email (no image yet)
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/30 to-background" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
            {locale === "en" ? "Portfolio" : "Portfolio"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {t.projects.title}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-10">
          {t.projects.cases.map((caseStudy, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-background/80 backdrop-blur-sm overflow-hidden hover:border-accent/20 transition-colors duration-300"
            >
              {/* Case Header */}
              <div className="p-6 sm:p-8 border-b border-border bg-surface/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="inline-block text-xs font-mono text-accent-light uppercase tracking-wider mb-2 px-3 py-1 bg-accent/10 rounded-full">
                      {locale === "en" ? "Case Study" : "Fallstudie"} #{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {caseStudy.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Case Body — 3 columns */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Problem */}
                  <div className="relative pl-5 border-l-2 border-red-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="text-sm font-bold uppercase tracking-wide text-red-400">
                        {problemLabel}
                      </span>
                    </div>
                    <p className="text-[15px] text-muted leading-relaxed">
                      {caseStudy.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="relative pl-5 border-l-2 border-accent/30">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-light" />
                      <span className="text-sm font-bold uppercase tracking-wide text-accent-light">
                        {solutionLabel}
                      </span>
                    </div>
                    <p className="text-[15px] text-muted leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="relative pl-5 border-l-2 border-green-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <span className="text-sm font-bold uppercase tracking-wide text-green-400">
                        {resultLabel}
                      </span>
                    </div>
                    <p className="text-[15px] text-foreground leading-relaxed font-medium">
                      {caseStudy.result}
                    </p>
                  </div>
                </div>

                {/* Screenshot */}
                {caseImages[index] && (
                  <div className="mt-8 rounded-xl border border-border overflow-hidden bg-surface/20">
                    <img
                      src={caseImages[index]!}
                      alt={caseStudy.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Tech Tags */}
                <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-2">
                  {caseStudy.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-mono text-accent-light bg-accent/8 border border-accent/15 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
