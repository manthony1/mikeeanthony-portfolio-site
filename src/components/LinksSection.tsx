import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Linkedin, Github, FileText, Calendar } from "lucide-react";

const LinksSection = () => {
  const links = [
    {
      title: "LinkedIn Profile",
      description: "Connect with me professionally and view my complete work history",
      icon: <Linkedin className="h-6 w-6" />,
      url: "#",
      category: "Professional"
    },
    {
      title: "GitHub Repository",
      description: "Explore my code projects and development work",
      icon: <Github className="h-6 w-6" />,
      url: "#",
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
          {links.map((link, index) => (
            <Card 
              key={index} 
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
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Quick Contact</CardTitle>
              <CardDescription>
                Send me a message and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow-primary transition-smooth">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;