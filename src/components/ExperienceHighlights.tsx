import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const STATS = [
  { value: "30%", label: "faster reporting", badge: "Outcome" },
  { value: "8+", label: "automations shipped", meta: "n8n, ServiceNow" },
  { value: "100K", label: "annual savings", badge: "Ops" },
  { value: "15", label: "dashboards deployed", meta: "Tools: Power BI" },
  { value: "10K+", label: "records/day processed", meta: "with QA" },
  { value: "3", label: "enterprise integrations delivered", meta: "Tools: ServiceNow" }
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
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  {stat.meta && (
                    <div className="text-sm text-muted-foreground mb-3">
                      {stat.meta}
                    </div>
                  )}
                  {stat.badge && (
                    <Badge 
                      variant="secondary" 
                      className="absolute bottom-4 right-4 text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {stat.badge}
                    </Badge>
                  )}
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