import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2, Database, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Oracle SQL Portfolio",
      description: "Built complex SQL queries aligned to 1Z0-171 using Oracle 23ai. Topics included joins, nested queries, views, and data conversions. Used DBeaver and Oracle SQL Developer for modeling and testing.",
      technologies: ["Oracle SQL", "DBeaver", "Oracle SQL Developer", "1Z0-171"],
      category: "Database Development",
      icon: <Database className="h-6 w-6" />,
      status: "Completed"
    },
    {
      title: "Workflow Automation Suite",
      description: "Designed and implemented automated workflow solutions reducing manual processing time by 60% across multiple business units.",
      technologies: ["Python", "Power Automate", "REST APIs", "SQL"],
      category: "Process Improvement",
      icon: <Code2 className="h-6 w-6" />,
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TypeScript, featuring dark mode and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      category: "Development",
      icon: <Globe className="h-6 w-6" />,
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in project management, process improvement, and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-smooth bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 flex flex-col h-full"
            >
              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-primary">{project.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 hover:shadow-hover transition-smooth">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 hover:shadow-hover transition-smooth">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:shadow-hover transition-smooth">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;