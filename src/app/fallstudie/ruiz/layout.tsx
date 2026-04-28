import type { Metadata } from "next";

const SITE_URL = "https://www.dynvon.com";
const PAGE_URL = `${SITE_URL}/fallstudie/ruiz`;

export const metadata: Metadata = {
  title: "Fallstudie: Ruiz Gebäudereinigung Hamburg — 10h/Woche eingespart",
  description:
    "Wie Ruiz Gebäudereinigung mit dynvon die Angebotserstellung von 90 Minuten auf 5 Minuten reduziert und 10 Stunden Buchhaltung pro Woche eingespart hat.",
  keywords: [
    "Fallstudie Gebäudereinigung",
    "Ruiz Gebäudereinigung Hamburg",
    "Buchhaltung automatisieren Reinigung",
    "Angebotserstellung automatisieren",
    "Prozessautomatisierung Reinigungsunternehmen",
    "Büroreinigung Hamburg",
    "Automatisierung Fallstudie",
  ],
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "dynvon",
    title: "Fallstudie: Ruiz Gebäudereinigung Hamburg — 10h/Woche eingespart",
    description:
      "Wie Ruiz Gebäudereinigung mit dynvon die Angebotserstellung von 90 Minuten auf 5 Minuten reduziert und 10 Stunden Buchhaltung pro Woche eingespart hat.",
    images: [
      {
        url: "/fallstudie/ruiz/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fallstudie: Ruiz Gebäudereinigung Hamburg — 90 Min auf 5 Min",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fallstudie: Ruiz Gebäudereinigung — 10h/Woche eingespart",
    description:
      "Angebotserstellung von 90 Min auf 5 Min. 10h Buchhaltung pro Woche eingespart.",
    images: ["/fallstudie/ruiz/opengraph-image"],
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
    "Wie Ruiz Gebäudereinigung 10 Stunden pro Woche einspart",
  description:
    "Fallstudie: Automatisierung von Angebotserstellung, Rechnungslegung und Zahlungsverfolgung für Ruiz Gebäudereinigung Hamburg.",
  datePublished: "2025-04-21",
  dateModified: "2025-04-21",
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
    name: "Ruiz Gebäudereinigung Hamburg",
    url: "https://xn--broreinigung-ruiz-22b.de/",
    founder: {
      "@type": "Person",
      name: "Jonathan Ruiz",
      jobTitle: "Inhaber & Geschäftsführer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hamburg",
      addressCountry: "DE",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 20,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "29",
      bestRating: "5",
    },
  },
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  image: `${SITE_URL}/fallstudie/ruiz/opengraph-image`,
};

export default function RuizCaseStudyLayout({
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
