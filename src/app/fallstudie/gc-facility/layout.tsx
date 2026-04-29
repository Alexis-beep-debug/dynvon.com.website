import type { Metadata } from "next";

const SITE_URL = "https://www.dynvon.com";
const PAGE_URL = `${SITE_URL}/fallstudie/gc-facility`;

export const metadata: Metadata = {
  title: "Fallstudie: G+C Facility GmbH Berlin — Angebote in 1 Klick statt 2 Stunden",
  description:
    "Wie G+C Facility mit dynvon die Angebotserstellung automatisiert und CRM mit E-Mail-Marketing verknüpft hat. 2 Stunden auf 1 Klick reduziert.",
  keywords: [
    "Fallstudie Gebäudereinigung",
    "G+C Facility Berlin",
    "Angebotserstellung automatisieren",
    "Pipedrive Automatisierung",
    "CRM Brevo Integration",
    "Prozessautomatisierung Reinigungsunternehmen",
    "Lead-Anreicherung KI",
    "Gebäudereinigung Berlin",
  ],
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "dynvon",
    title: "Fallstudie: G+C Facility GmbH — Angebote in 1 Klick statt 2 Stunden",
    description:
      "Wie G+C Facility mit dynvon die Angebotserstellung automatisiert und CRM mit E-Mail-Marketing verknüpft hat.",
    images: [
      {
        url: "/fallstudie/gc-facility/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fallstudie: G+C Facility GmbH Berlin — Angebote automatisiert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fallstudie: G+C Facility — Angebote in 1 Klick statt 2 Stunden",
    description:
      "Angebotserstellung von 2 Stunden auf 1 Klick. CRM und E-Mail-Marketing automatisch synchronisiert.",
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
    "Wie G+C Facility GmbH Angebote in 1 Klick statt 2 Stunden erstellt",
  description:
    "Fallstudie: Automatisierung von Angebotserstellung, Lead-Anreicherung und CRM-E-Mail-Marketing-Synchronisierung für G+C Facility GmbH Berlin.",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
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
    name: "G+C Facility GmbH",
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
