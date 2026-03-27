"use client";

import { useLanguage } from "@/lib/LanguageContext";

// Tool logos as inline SVGs for each case study
const caseToolLogos: { name: string; color: string }[][] = [
  // Case 1: Accounting & Dunning
  [
    { name: "Python", color: "#3776AB" },
    { name: "Railway", color: "#0B0D0E" },
    { name: "Enable Banking", color: "#00B4D8" },
    { name: "Google Workspace", color: "#4285F4" },
    { name: "Lexoffice", color: "#E85D04" },
  ],
  // Case 2: Proposal Generation
  [
    { name: "Python", color: "#3776AB" },
    { name: "Pipedrive", color: "#25292C" },
    { name: "Lexoffice", color: "#E85D04" },
    { name: "Google Drive", color: "#0F9D58" },
    { name: "Brevo", color: "#0B996E" },
  ],
  // Case 3: Email & CRM
  [
    { name: "Brevo", color: "#0B996E" },
    { name: "Lemlist", color: "#6C5CE7" },
    { name: "Pipedrive", color: "#25292C" },
    { name: "Python", color: "#3776AB" },
  ],
];

export default function CaseStudies() {
  const { t, locale } = useLanguage();
  const problemLabel = locale === "en" ? "Challenge" : "Herausforderung";
  const solutionLabel = locale === "en" ? "Solution" : "Lösung";
  const resultLabel = locale === "en" ? "Result" : "Ergebnis";

  // Flowchart image only for Case 2 (Proposal), smaller
  const caseImages: (string | null)[] = [
    null,                   // Case 1: no screenshot
    "/case-proposal.png",   // Case 2: Proposal Flowchart
    null,                   // Case 3: no screenshot
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

              {/* Case Body */}
              <div className="p-6 sm:p-8">
                {/* 3 columns: Problem / Solution / Result */}
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

                {/* Flowchart image (smaller, max-width limited) */}
                {caseImages[index] && (
                  <div className="mt-6 flex justify-center">
                    <div className="max-w-md rounded-xl border border-border overflow-hidden bg-surface/20">
                      <img
                        src={caseImages[index]!}
                        alt={caseStudy.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}

                {/* Tool Logos + Tech Tags */}
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider mb-3 block">
                    {locale === "en" ? "Tools Used" : "Eingesetzte Tools"}
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {caseToolLogos[index]?.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface/30 hover:border-accent/20 transition-colors"
                      >
                        <span
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{ backgroundColor: tool.color }}
                        />
                        <span className="text-sm font-medium text-foreground">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
