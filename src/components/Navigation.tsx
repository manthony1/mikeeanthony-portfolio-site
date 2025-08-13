import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Apply light mode class to document root
    if (isLightMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLightMode]);

  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience-highlights", label: "Impact" },
    { id: "certifications", label: "Certifications" },
    { id: "testimonials", label: "Testimonials" },
    { id: "automation-vault", label: "Automation Vault", route: "/automation-vault" },
    { id: "links", label: "Links" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const isOnHomePage = location.pathname === "/";
    
    if (isOnHomePage) {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home page and then scroll to section
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setIsOpen(false);
  };

  const handleRouteNavigation = (route: string) => {
    navigate(route);
    setIsOpen(false);
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-4xl font-reenie bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-smooth cursor-pointer">
                Mike Anthony
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <div className="flex items-baseline space-x-2">
                {sections.map((section) => (
                section.route ? (
                  <Button
                    key={section.id}
                    variant="ghost"
                    onClick={() => handleRouteNavigation(section.route!)}
                    className={`transition-smooth ${
                      activeSection === section.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </Button>
                ) : (
                  <Button
                    key={section.id}
                    variant="ghost"
                     onClick={() => handleSectionClick(section.id)}
                    className={`transition-smooth ${
                      activeSection === section.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </Button>
                )
                ))}
              </div>
              <div className="ml-4 flex items-center space-x-2">
                <Switch
                  checked={isLightMode}
                  onCheckedChange={setIsLightMode}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="default"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 shadow-card">
              {sections.map((section) => (
                section.route ? (
                  <Button
                    key={section.id}
                    variant="ghost"
                    onClick={() => handleRouteNavigation(section.route!)}
                    className={`w-full justify-start transition-smooth ${
                      activeSection === section.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {section.label}
                  </Button>
                ) : (
                  <Button
                    key={section.id}
                    variant="ghost"
                    onClick={() => handleSectionClick(section.id)}
                    className={`w-full justify-start transition-smooth ${
                      activeSection === section.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {section.label}
                  </Button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;