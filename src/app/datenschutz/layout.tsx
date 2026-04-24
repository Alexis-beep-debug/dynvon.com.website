import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — dynvon",
  description:
    "Datenschutzerklärung von dynvon. Informationen zur Datenverarbeitung, Reichweitenmessung und Ihren Rechten nach DSGVO.",
  alternates: { canonical: "https://www.dynvon.com/datenschutz" },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
