import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const STATS = [
  { 
    value: "$100K", 
    label: "annual savings", 
    skills: ["Ops", "Cost Reduction"],
    overlay: "Streamlined vendor workflows and platform usage to cut annual costs by over $100K."
  },
  { 
    value: "+25%", 
    label: "efficiency gain", 
    skills: ["Process Improvement", "Integrations"],
    overlay: "Improved workflows across 3 enterprise integrations, increasing team efficiency by 25%."
  },
  { 
    value: "30%", 
    label: "faster reporting", 
    skills: ["Reporting", "Analytics"],
    overlay: "Optimized reporting processes to deliver actionable insights 30% faster."
  },
  { 
    value: "30%", 
    label: "fewer discrepancies", 
    skills: ["Governance", "QA"],
    overlay: "Implemented QA governance to reduce reporting errors and discrepancies by 30%."
  },
  { 
    value: "20%", 
    label: "faster reviews", 
    skills: ["Excel", "Automation"],
    overlay: "Developed an Excel tracker that cut document review time by 20%."
  },
  { 
    value: "460+", 
    label: "submissions/month", 
    skills: ["Compliance", "Federal Standards"],
    overlay: "Processed 460+ submissions monthly while maintaining strict federal compliance standards."
  }
];

const ExperienceHighlights = () => {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveOverlay(activeOverlay === index ? null : index);
  };

  const handleCardLeave = () => {
    setActiveOverlay(null);
  };

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
              <Card 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-smooth cursor-pointer group"
                onClick={() => handleCardClick(index)}
                onMouseLeave={handleCardLeave}
              >
                <CardContent className="p-6 relative overflow-hidden">
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
                  
                  {/* Hover Overlay */}
                  <div className={`
                    absolute inset-0 bg-black/80 flex items-center justify-center p-4 rounded-lg 
                    transition-opacity duration-300 delay-1000
                    ${activeOverlay === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    md:group-hover:opacity-100
                  `}>
                    <p className="text-white text-center text-sm leading-relaxed">
                      {stat.overlay}
                    </p>
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