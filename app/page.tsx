
import HeroSection from "./components/HeroSection";

import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";

import FAQSection from "./components/FAQSection";


import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen">

      <HeroSection />
      <ServicesSection />

      <AboutSection />

      <FAQSection />
      <TestimonialsSection />

    </main>
  );
}