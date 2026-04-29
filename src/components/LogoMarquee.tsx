"use client";

import { useState } from "react";

type Logo = {
  src: string;
  alt: string;
  fallbackText?: string;
};

const LOGOS: Logo[] = [
  {
    src: "https://xn--broreinigung-ruiz-22b.de/wp-content/uploads/2021/03/Ruiz-Gebaeudereinigung-Hamburg-Logo-1.webp",
    alt: "Ruiz Gebäudereinigung Hamburg",
  },
  {
    src: "https://www.marketing-gruender.de/images/logos/logo-dark.svg",
    alt: "Gründer Marketing",
    fallbackText: "Gründer Marketing",
  },
  {
    src: "/partner/kanzlei-lotsen.png",
    alt: "Kanzlei Lotsen",
  },
  {
    src: "https://gc-facility.de/wp-content/uploads/2026/02/Group-2-4.png",
    alt: "GC Facility GmbH",
  },
];

function LogoItem({ logo }: { logo: Logo }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="shrink-0 w-28 h-14 rounded-xl bg-white/5 border border-border/50 flex items-center justify-center p-3 opacity-50 hover:opacity-100 transition-opacity">
      {failed && logo.fallbackText ? (
        <span className="text-xs font-semibold text-muted whitespace-nowrap">{logo.fallbackText}</span>
      ) : (
        <img
          src={logo.src}
          alt={logo.alt}
          width={80}
          height={40}
          loading="lazy"
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function LogoMarquee() {
  const items = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-muted uppercase tracking-widest text-center mb-8">
          Partner
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-16 animate-marquee">
          {items.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
