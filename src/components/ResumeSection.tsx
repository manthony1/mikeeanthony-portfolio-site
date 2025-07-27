import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Download, Briefcase, GraduationCap } from "lucide-react";

const ResumeSection = () => {
  const experience = [
    {
      title: "Senior Technical Project Manager",
      company: "Enterprise Technology Solutions",
      period: "2022 - Present",
      location: "Remote",
      description: "Leading cross-functional teams in ServiceNow implementations and process improvement initiatives. Managed $2M+ projects with 99% on-time delivery rate.",
      achievements: [
        "Implemented ServiceNow ITSM for 5,000+ users",
        "Reduced incident resolution time by 40%",
        "Led digital transformation initiatives"
      ]
    },
    {
      title: "Project Manager / Process Analyst",
      company: "Technology Consulting Group",
      period: "2020 - 2022",
      location: "Hybrid",
      description: "Specialized in workflow automation and business process optimization. Collaborated with stakeholders to identify improvement opportunities.",
      achievements: [
        "Automated 15+ manual workflows",
        "Achieved 60% reduction in processing time",
        "Managed portfolio of 8 concurrent projects"
      ]
    },
    {
      title: "IT Business Analyst",
      company: "Corporate Solutions Inc",
      period: "2018 - 2020",
      location: "On-site",
      description: "Analyzed business requirements and translated them into technical solutions. Supported software development lifecycle and testing processes.",
      achievements: [
        "Gathered requirements for 20+ projects",
        "Improved user satisfaction by 35%",
        "Documented 100+ business processes"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "State University",
      period: "2014 - 2018",
      details: "Concentration in Project Management and Systems Analysis"
    }
  ];

  const skills = {
    "Project Management": ["PMP", "Agile/Scrum", "Risk Management", "Stakeholder Management"],
    "Technical": ["ServiceNow", "Python", "SQL", "Power Platform", "REST APIs"],
    "Process Improvement": ["ITIL", "Lean Six Sigma", "Business Analysis", "Workflow Design"],
    "Tools": ["Jira", "Confluence", "MS Project", "Visio", "PowerBI"]
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
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-smooth">
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