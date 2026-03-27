"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import BlogTeaser from "@/components/BlogTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <BlogTeaser />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
