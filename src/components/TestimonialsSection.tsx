import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Isabel Londoño",
      role: "VP of Operations",
      company: "Sphere Partners",
      content: "In a few short weeks I could feel the impact of his work. Mike understood the goals, developed actionable plans and executed quickly and expertly.",
      rating: 5
    },
    {
      name: "Peter de Rosa",
      role: "VP of Operations",
      company: "Cornerstone OnDemand",
      content: "I really enjoyed working with Mike at Saba Software. During his time, he showed me that his strength was leading technical digital marketing projects that needed to be rolled out to global teams. Mike is a 'go-getter' and a great team mate.",
      rating: 4
    },
    {
      name: "Greg Latson",
      role: "Director of Marketing",
      company: "Saba Software",
      content: "Mike was our go-to expert for building, integrating and analyzing our marketing reporting. Mike's attention to detail and the ability to grasp and integrate new and different MarTech have been a huge asset to our team. I'm confident that Mike can handle most any challenge presented.",
      rating: 5
    },
    {
      name: "Laura Fuller",
      role: "Director of Sales",
      company: "Lumesse",
      content: "Mike really understands what needs to be done to achieve goals and will focus on results. I really enjoy working with him.",
      rating: 5
    },         
    {
      name: "David Chen",
      role: "IT Director",
      company: "Global Technology Inc",
      content: "Working with Mike was a game-changer for our process improvement initiatives. His analytical approach and attention to detail resulted in significant efficiency gains across our organization.",
      rating: 5
    },
    {
      name: "Jennifer Martinez",
      role: "Senior Business Analyst",
      company: "Innovation Partners",
      content: "Mike's ability to bridge the gap between business requirements and technical solutions is remarkable. He's an excellent communicator and always delivers quality results.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Client <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-smooth bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 relative"
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/50 mb-4" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="h-4 w-4 text-primary fill-current" 
                    />
                  ))}
                </div>

                <div className="border-t border-border/50 pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;