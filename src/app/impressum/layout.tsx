import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — dynvon",
  description:
    "Impressum und Anbieterkennzeichnung von dynvon, Alexis Bethke-Pittadakis, Nürnberg.",
  alternates: { canonical: "https://www.dynvon.com/impressum" },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
