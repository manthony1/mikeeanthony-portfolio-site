import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Linkedin, Github, FileText, Calendar } from "lucide-react";
import { useResumeDownload } from "@/hooks/useResumeDownload";
import { useContactForm } from "@/hooks/useContactForm";
import ResumeDownloadDialog from "@/components/ResumeDownloadDialog";
import ContactFormDialog from "@/components/ContactFormDialog";

const LinksSection = () => {
  const { isDialogOpen, setIsDialogOpen, showDownload, handleFormSubmit, downloadResume } = useResumeDownload();
  const { isDialogOpen: isContactDialogOpen, setIsDialogOpen: setIsContactDialogOpen, showSuccess, handleFormSubmit: handleContactFormSubmit } = useContactForm();
  
  const links = [
    {
      title: "LinkedIn Profile",
      description: "Connect with me professionally and view my complete work history",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/mikeeanthony/",
      category: "Professional"
    },
    {
      title: "GitHub Repository",
      description: "Explore my code projects and development work",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/manthony1",
      category: "Development"
    },
    {
      title: "Email Contact",
      description: "Get in touch for project inquiries and collaboration",
      icon: <Mail className="h-6 w-6" />,
      url: "mailto:mike@mikeeanthony.com",
      category: "Contact"
    },
    {
      title: "Resume Download",
      description: "Download my complete resume in PDF format",
      icon: <FileText className="h-6 w-6" />,
      url: "#",
      category: "Documents"
    },
    {
      title: "Schedule a Meeting",
      description: "Book a consultation to discuss your project needs",
      icon: <Calendar className="h-6 w-6" />,
      url: "#",
      category: "Contact"
    }
  ];

  return (
    <section id="links" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find me across various platforms or get in touch directly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {links.map((link, index) => {
            if (link.title === "Resume Download") {
              return (
                <div key={index} className="block">
                  <Card 
                    className="group hover:shadow-hover transition-smooth bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 cursor-pointer"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-primary group-hover:text-accent transition-smooth">
                          {link.icon}
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                        {link.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {link.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              );
            }
            
            if (link.title === "Schedule a Meeting") {
              return (
                <div 
                  key={index}
                  className="block cursor-pointer"
                  data-cal-link="mike-anthony/15min"
                  data-cal-namespace="15min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                >
                  <Card 
                    className="group hover:shadow-hover transition-smooth bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-primary group-hover:text-accent transition-smooth">
                          {link.icon}
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                        {link.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {link.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              );
            }
            
            if (link.title === "Email Contact") {
              return (
                <div key={index} className="block">
                  <Card 
                    className="group hover:shadow-hover transition-smooth bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 cursor-pointer"
                    onClick={() => setIsContactDialogOpen(true)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-primary group-hover:text-accent transition-smooth">
                          {link.icon}
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                        {link.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {link.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              );
            }
            
            return (
              <a 
                key={index}
                href={link.url} 
                target={link.url.startsWith('mailto:') ? '_self' : '_blank'} 
                rel={link.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="block"
              >
                <Card 
                  className="group hover:shadow-hover transition-smooth bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="text-primary group-hover:text-accent transition-smooth">
                        {link.icon}
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {link.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {link.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
            );
          })}
        </div>

        <ResumeDownloadDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          showDownload={showDownload}
          onFormSubmit={handleFormSubmit}
          onDownload={downloadResume}
        />

        <ContactFormDialog
          isOpen={isContactDialogOpen}
          onOpenChange={setIsContactDialogOpen}
          showSuccess={showSuccess}
          onFormSubmit={handleContactFormSubmit}
        />

      </div>
    </section>
  );
};

export default LinksSection;