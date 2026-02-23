import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
        <WhySection />
        <ClientsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;