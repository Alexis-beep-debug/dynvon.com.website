import type { Metadata } from "next";

const SITE_URL = "https://www.dynvon.com";
const PAGE_URL = `${SITE_URL}/fallstudie/gc-facility`;

export const metadata: Metadata = {
  title: "Fallstudie: GC Facility GmbH — Angebote per Klick, kein Lead verloren",
  description:
    "Wie GC Facility GmbH mit dynvon die Angebotserstellung von 2 Stunden auf einen Klick reduziert und durch CRM-Synchronisation keine Leads mehr verliert.",
  keywords: [
    "Fallstudie Gebäudereinigung",
    "GC Facility GmbH",
    "GC Facility Berlin",
    "Angebotserstellung automatisieren",
    "CRM Synchronisation",
    "Prozessautomatisierung Reinigungsunternehmen",
    "Gebäudereinigung Berlin",
    "Automatisierung Fallstudie",
  ],
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "dynvon",
    title: "Fallstudie: GC Facility GmbH — Angebote per Klick, kein Lead verloren",
    description:
      "Wie GC Facility GmbH mit dynvon die Angebotserstellung von 2 Stunden auf einen Klick reduziert und durch CRM-Synchronisation keine Leads mehr verliert.",
    images: [
      {
        url: "/fallstudie/gc-facility/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fallstudie: GC Facility GmbH — 2h auf 1 Klick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fallstudie: GC Facility GmbH — Angebote per Klick",
    description:
      "Angebotserstellung von 2h auf 1 Klick. CRM-E-Mail-Sync in Echtzeit. 0 verlorene Leads.",
    images: ["/fallstudie/gc-facility/opengraph-image"],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}/#article`,
  headline:
    "Wie GC Facility Angebote per Klick erstellt und kein Lead mehr verliert",
  description:
    "Fallstudie: Automatisierung von Angebotserstellung und CRM-Synchronisation für GC Facility GmbH Berlin.",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  author: {
    "@type": "Person",
    name: "Alexis Bethke-Pittadakis",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "dynvon",
    url: SITE_URL,
  },
  about: {
    "@type": "Organization",
    name: "GC Facility GmbH",
    url: "https://gc-facility.de/",
    founder: {
      "@type": "Person",
      name: "Ewgeni Jussufov",
      jobTitle: "Geschäftsführer",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Warmbrunner Str. 4",
      postalCode: "14193",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
    },
  },
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  image: `${SITE_URL}/fallstudie/gc-facility/opengraph-image`,
};

export default function GCFacilityCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
