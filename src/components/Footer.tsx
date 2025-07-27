import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Mike Anthony
            </h3>
            <p className="text-muted-foreground">
              Technical Project Manager & Process Improvement Analyst
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <Button variant="ghost" size="sm" className="hover:text-primary transition-smooth">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary transition-smooth">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary transition-smooth">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mike Anthony. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;