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
