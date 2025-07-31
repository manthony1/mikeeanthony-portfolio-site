import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pmpLogo from "@/assets/pmp-logo.png";
import comptiaNetworkLogo from "@/assets/comptia-network-logo.png";
import comptiaSecurityLogo from "@/assets/comptia-security-logo.png";
import serviceNowLogo from "@/assets/servicenow-logo.png";
import serviceNowLogoITSM from "@/assets/servicenow-logo-itsm.png";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute (PMI)",
      logo: pmpLogo,
      status: "Certified",
      description: "Global standard for project management excellence, demonstrating proven experience and competency in leading teams and delivering results.",
      year: "2024"
    },
    {
      title: "CompTIA Network+",
      issuer: "CompTIA",
      logo: comptiaNetworkLogo,
      status: "Certified",
      description: "Validates networking knowledge and skills needed to troubleshoot, configure, and manage networks.",
      year: "2003"
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      logo: comptiaSecurityLogo,
      status: "Expired", 
      description: "Industry-leading cybersecurity certification covering essential security concepts and practices.",
      year: "2018"
    },
    {
      title: "ServiceNow CSA",
      issuer: "ServiceNow",
      logo: serviceNowLogo,
      status: "In Progress",
      description: "ServiceNow Certified System Administrator - demonstrates platform administration and configuration expertise.",
      year: "2025"
    },
    {
      title: "ServiceNow CIS - ITSM",
      issuer: "ServiceNow",
      logo: serviceNowLogoITSM,
      status: "In Progress",
      description: "ServiceNow Certified Implementation Specialist for IT Service Management - advanced implementation expertise.",
      year: "2025"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-smooth bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 bg-background rounded-lg flex items-center justify-center shadow-card">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.title} logo`}
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant={cert.status === "Certified" ? "default" : "secondary"}
                    className={
                      cert.status === "Certified" 
                        ? "bg-gradient-primary" 
                        : cert.status === "In Progress" 
                        ? "bg-green-500 text-white hover:bg-green-500" 
                        : ""
                    }
                  >
                    {cert.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{cert.year}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;