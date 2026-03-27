"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function CaseStudies() {
  const { t, locale } = useLanguage();
  const problemLabel = locale === "en" ? "Problem" : "Problem";
  const solutionLabel = locale === "en" ? "Solution" : "Lösung";
  const resultLabel = locale === "en" ? "Result" : "Ergebnis";

  return (
    <section id="projects" className="py-24 sm:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t.projects.title}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-8">
          {t.projects.cases.map((caseStudy, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-background/50 overflow-hidden"
            >
              {/* Case Header */}
              <div className="p-6 sm:p-8 border-b border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono text-accent-light uppercase tracking-wider">
                      {locale === "en" ? "Case Study" : "Fallstudie"} #{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-1">
                      {caseStudy.title}
                    </h3>
                  </div>
                  <span className="text-xs text-muted px-3 py-1 border border-border rounded-full whitespace-nowrap self-start">
                    {caseStudy.role}
                  </span>
                </div>
              </div>

              {/* Case Body */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-sm font-semibold uppercase tracking-wide text-red-400">
                      {problemLabel}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-accent-light" />
                    <span className="text-sm font-semibold uppercase tracking-wide text-accent-light">
                      {solutionLabel}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Result */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm font-semibold uppercase tracking-wide text-green-400">
                      {resultLabel}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed font-medium">
                    {caseStudy.result}
                  </p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-accent-light bg-accent/10 border border-accent/20 rounded-full"
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
