import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("links");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-primary">
                <img 
                  src="/lovable-uploads/028f791c-c045-4d42-bad9-39e47ec72585.png" 
                  alt="Mike Anthony" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Mike
              </span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground space-y-2">
              <p className="font-semibold text-foreground">Technical Project Manager</p>
              <p>Process Improvement (Workflow) Analyst</p>
              <p>Code & AI Proficient</p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-card border border-border/50">
              <p className="mb-4">
                <span className="text-primary font-semibold">Project Management Professional (PMP)</span>
              </p>
              <p className="mb-4">
                <span className="text-primary font-semibold">ServiceNow Certified System Administrator (CSA)</span>
              </p>
              <p>
                <span className="text-accent font-semibold">ServiceNow Certified Implementation Specialist - IT Service Management (CIS - ITSM)</span>
                <span className="text-muted-foreground"> - In progress</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="group bg-gradient-primary hover:shadow-glow-primary transition-smooth"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-smooth" />
            </Button>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:shadow-hover transition-smooth"
                onClick={scrollToContact}
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:shadow-hover transition-smooth"
                onClick={() => window.open('https://www.linkedin.com/in/mikeeanthony/', '_blank')}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:shadow-hover transition-smooth"
                onClick={() => window.open('https://github.com/manthony1', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;