import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MoreAboutSection from "@/components/MoreAboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import CertificationsSection from "@/components/CertificationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LinksSection from "@/components/LinksSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling when navigating from other pages
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Use setTimeout to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MoreAboutSection />
      <ProjectsSection />
      <ResumeSection />
      <CertificationsSection />
      <TestimonialsSection />
      <LinksSection />
      <Footer />
    </div>
  );
};

export default Index;
