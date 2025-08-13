import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";
import { useContactForm } from "@/hooks/useContactForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDialogOpen, setIsDialogOpen, showSuccess, handleFormSubmit } = useContactForm();

  return (
    <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row - Credentials */}
        <div className="text-center mb-8">
          <p className="text-lg text-foreground light:text-muted-foreground">
            MBA | PMP | Lean Six Sigma
          </p>
        </div>

        {/* Centered divider */}
        <div className="flex justify-center mb-8">
          <div className="w-1/2 h-px bg-border"></div>
        </div>

        {/* Bottom row - Two columns */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Left column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-reenie text-[rgb(241,242,243)] light:text-muted-foreground">
              Turning chaos into systems
            </h3>
          </div>

          {/* Right column */}
          <div className="text-center md:text-right">
            {/* Row 1: Social icons */}
            <div className="flex items-center justify-center md:justify-end space-x-4 mb-3">
              <Button variant="ghost" size="sm" className="hover:text-primary transition-smooth" asChild>
                <a href="https://www.linkedin.com/in/mikeeanthony/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary transition-smooth" asChild>
                <a href="https://github.com/manthony1" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:text-primary transition-smooth" 
                onClick={() => setIsDialogOpen(true)}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Row 2: Copyright */}
            <p className="text-sm text-muted-foreground mb-1">
              © {currentYear} Mike Anthony. All rights reserved.
            </p>

            {/* Row 3: Tech stack */}
            <p className="text-xs text-muted-foreground mb-1">
              Built with React & Tailwind CSS
            </p>

            {/* Row 4: Privacy Policy */}
            <p className="text-xs text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <ContactFormDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        showSuccess={showSuccess}
        onFormSubmit={handleFormSubmit}
      />
    </footer>
  );
};

export default Footer;