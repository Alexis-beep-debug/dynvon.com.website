"use client";

const RUIZ_URL = "https://xn--broreinigung-ruiz-22b.de/";

const testimonials = [
  {
    quote:
      "Die Angebotserstellung hat sich komplett verändert — was früher 90 Minuten gedauert hat, ist jetzt in 5 Minuten erledigt. Und die Buchhaltung läuft im Hintergrund, ohne dass ich mich darum kümmern muss. Das hat uns enorm entlastet.",
    name: "Jonathan Ruiz",
    title: "Inhaber & Geschäftsführer",
    company: "Ruiz Gebäudereinigung Hamburg",
    companyUrl: RUIZ_URL,
    initials: "JR",
    stars: 5,
    googleRating: true,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
            Kundenstimmen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Das sagen unsere Kunden
          </h2>
        </div>

        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 sm:p-10 rounded-2xl border border-border bg-surface/60 hover:border-accent/20 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Quotation mark */}
                <div className="shrink-0">
                  <svg
                    className="w-10 h-10 text-accent/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>
                </div>

                <div className="flex-1">
                  {/* Quote */}
                  <p className="text-lg leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-light font-bold text-lg shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-bold">{t.name}</div>
                        <div className="text-sm text-muted">
                          {t.title},{" "}
                          <a
                            href={t.companyUrl}
                            target="_blank"
                            rel="noopener"
                            className="text-accent-light hover:underline"
                          >
                            {t.company}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <StarRating count={t.stars} />
                      {t.googleRating && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-light border border-border text-xs font-medium text-muted">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                          </svg>
                          Google Bewertung
                        </span>
                      )}
                    </div>
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
