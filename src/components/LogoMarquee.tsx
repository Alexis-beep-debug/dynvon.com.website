"use client";

const LOGOS = [
  {
    src: "https://xn--broreinigung-ruiz-22b.de/wp-content/uploads/2021/03/Ruiz-Gebaeudereinigung-Hamburg-Logo-1.webp",
    alt: "Ruiz Gebäudereinigung Hamburg",
  },
  // Add more partner logos here as they come in
];

export default function LogoMarquee() {
  // Duplicate logos for seamless infinite scroll
  const items = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-muted uppercase tracking-widest text-center mb-8">
          Partner
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex items-center gap-16 animate-marquee">
          {items.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 w-24 h-14 rounded-xl bg-white/5 border border-border/50 flex items-center justify-center p-3 opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={40}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
