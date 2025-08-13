import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tim DiSabatino",
      role: "Director",
      company: "VMware",
      content: " I worked with him on a very complex technology project that involved interfacing with multiple teams across a large, global organization. I was impressed by his ability to make sense of our complicated lead flow and tracking systems. Michael was a fast learner and was able to understand systems that many people who have been at the company for years don't even understand.",
      rating: 5
    },
        {
      name: "Liz Fleming",
      role: "Enterprise & Field Marketing Operations Director",
      company: "VMware",
      content: "Michael's strong technical background and ability to translate business challenges into technical requirements enabled him to come up to speed very quickly while in role. He was pivotal in getting our Field Marketing teams trained and enabled on key technologies and worked with them to troubleshoot any challenges they faced. His dedication and desire to do what was best for the business were truly commendable.",
      rating: 5
    },
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