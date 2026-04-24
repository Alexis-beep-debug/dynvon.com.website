import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — dynvon",
  description:
    "Praxiswissen für Reinigungsunternehmen und Hausverwaltungen: Kalkulation, Zeiterfassung, Mahnwesen, E-Rechnung und Automatisierung.",
  alternates: { canonical: "https://www.dynvon.com/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
