import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Download, Briefcase, GraduationCap } from "lucide-react";

const ResumeSection = () => {
  const experience = [
    {
      title: "Tax Examiner",
      company: "US Dept. of the Treasury, Internal Revenue Service",
      period: "Dec 2024 - Present",
      location: "Austin, TX",
      description: "Processing tax forms and maintaining system records in compliance with federal standards and IRS regulations.",
      achievements: [
        "Processed 460+ tax forms monthly, meeting strict federal standards",
        "Maintained system records in line with IRS regulations and privacy standards",
        "Applied project-level tracking to streamline intake and throughput"
      ]
    },
    {
      title: "Operations Manager",
      company: "Stage 4 Solutions @ VMware",
      period: "Apr 2023 - Nov 2023",
      location: "Remote",
      description: "Led large-scale platform integrations and coordinated cross-functional plans across multiple stakeholders.",
      achievements: [
        "Led 3 large-scale platform integrations; improved efficiency by 25%, saving $100K",
        "Coordinated cross-functional plans across 50+ stakeholders using ClickUp and Airtable",
        "Managed vendor deliverables and contracts, ensuring SLA compliance",
        "Created and maintained KPI dashboards for performance visibility"
      ]
    },
    {
      title: "Global Marketing Operations Manager",
      company: "Thales Group",
      period: "Jan 2022 - Jan 2023",
      location: "Austin, TX",
      description: "Managed agile-based improvements to global reporting processes and integrated PowerBI dashboards with BigQuery.",
      achievements: [
        "Managed agile-based improvements to global reporting process, cutting delays by 30%",
        "Integrated PowerBI dashboards with BigQuery to monitor campaign operations",
        "Conducted cross-team requirements gathering and implementation"
      ]
    },
    {
      title: "Marketing Ops & Digital Transformation",
      company: "Sphere Consulting",
      period: "Sep 2020 - Dec 2021",
      location: "Remote",
      description: "Delivered lead generation process improvements and platform migrations while managing SEO, analytics, and content operations.",
      achievements: [
        "Delivered lead gen process and platform migration within $100K budget",
        "Managed SEO, analytics, and content operations using Jira and Google Workspace",
        "Served as project lead on podcast production and reporting framework"
      ]
    }
  ];

  const education = [
    {
      degree: "M.S. Data Analytics (Coursework)",
      school: "Georgia Tech",
      period: "In Progress",
      details: "Courses: Python, Analytics Modeling, Lean Six Sigma, Data Privacy"
    },
    {
      degree: "M.B.A. Business Administration",
      school: "University of Redlands",
      period: "Completed",
      details: "Master of Business Administration"
    },
    {
      degree: "B.A. English",
      school: "Virginia Tech",
      period: "Completed",
      details: "Bachelor of Arts in English"
    }
  ];

  const skills = {
    "Project Management": ["PMP", "Agile 2.0", "Lean Six Sigma Green Belt", "SOPs", "KPI Dashboards"],
    "Technical": ["ServiceNow", "SQL", "PowerBI", "Oracle 23ai", "Python", "Flow Designer"],
    "Process & Automation": ["ServiceNow Flow Designer", "n8n", "NLP (OpenAI)", "Workflow Automation"],
    "Tools & Platforms": ["ClickUp", "Airtable", "Smartsheet", "Jira", "Google Workspace", "BigQuery"]
  };

  return (
    <section id="resume" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A track record of delivering successful projects and driving process improvements
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-smooth"
            onClick={() => {
              // Create a simple text-based resume for download
              const resumeContent = `Michael Anthony
Austin, TX | mikeeanthony@gmail.com | (512) 962-2047
PMP | MBA | Project & Program Management | ServiceNow | Workflow Automation | KPI Dashboards

CERTIFICATIONS
Project Management Professional (PMP), 2024
Lean Six Sigma Green Belt, 2024
ServiceNow Certified System Administrator (CSA), 2025
Associate ServiceNow Implementer (Badge), 2025
CompTIA Network+, Security+ (renewing 2025)

EXPERIENCE
US Dept. of the Treasury, Internal Revenue Service — Tax Examiner
Austin, TX | Dec 2024 – Present
- Processed 460+ tax forms monthly, meeting strict federal standards for accuracy and audit-readiness.
- Maintained system records in line with IRS regulations and privacy standards.
- Applied project-level tracking to streamline intake and throughput.

Stage 4 Solutions @ VMware — Operations Manager
Remote | Apr 2023 – Nov 2023
- Led 3 large-scale platform integrations; improved efficiency by 25%, saving $100K.
- Coordinated cross-functional plans across 50+ stakeholders using ClickUp and Airtable.
- Managed vendor deliverables and contracts, ensuring SLA compliance.
- Created and maintained KPI dashboards for performance visibility.

Thales Group — Global Marketing Operations Manager
Austin, TX | Jan 2022 – Jan 2023
- Managed agile-based improvements to global reporting process, cutting delays by 30%.
- Integrated PowerBI dashboards with BigQuery to monitor campaign operations.
- Conducted cross-team requirements gathering and implementation.

Sphere Consulting — Marketing Ops & Digital Transformation
Remote | Sep 2020 – Dec 2021
- Delivered lead gen process and platform migration within $100K budget.
- Managed SEO, analytics, and content operations using Jira and Google Workspace.
- Served as project lead on podcast production and reporting framework.

EDUCATION
Georgia Tech — M.S. Data Analytics (Coursework)
University of Redlands — M.B.A. Business Administration
Virginia Tech — B.A. English`;
              
              const blob = new Blob([resumeContent], { type: 'text/plain' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'Michael_Anthony_Resume.txt';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
            }}
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-primary">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">{job.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">{edu.school}</CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Core Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;