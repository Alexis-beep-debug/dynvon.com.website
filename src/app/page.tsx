"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import BlogTeaser from "@/components/BlogTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <BlogTeaser />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
