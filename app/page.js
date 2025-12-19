"use client";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      <HeroSection />
      <AboutSection />
      <Services />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
