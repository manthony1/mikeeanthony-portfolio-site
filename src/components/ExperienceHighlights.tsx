import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const STATS = [
  { value: "$100K", label: "annual savings", skills: ["Ops", "Cost Reduction"] },
  { value: "+25%", label: "efficiency gain", skills: ["Process Improvement", "Integrations"] },
  { value: "30%", label: "faster reporting", skills: ["Reporting", "Analytics"] },
  { value: "30%", label: "fewer discrepancies", skills: ["Governance", "QA"] },
  { value: "20%", label: "faster reviews", skills: ["Excel", "Automation"] },
  { value: "460+", label: "submissions/month", skills: ["Compliance", "Federal Standards"] }
];

const ExperienceHighlights = () => {
  return (
    <section 
      id="experience-highlights" 
      aria-labelledby="experience-highlights" 
      className="py-20 bg-gradient-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience <span className="bg-gradient-primary bg-clip-text text-transparent">Highlights</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {STATS.map((stat, index) => (
            <li key={index}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-smooth cursor-pointer">
                <CardContent className="p-6 relative">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-3">
                    {stat.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stat.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <a 
            href="#timeline" 
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Click to view timeline
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;