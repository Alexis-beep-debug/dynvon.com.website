"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import IndustryFocus from "@/components/IndustryFocus";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import BlogTeaser from "@/components/BlogTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <IndustryFocus />
        <About />
        <CaseStudies />
        <Testimonials />
        <BlogTeaser />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
