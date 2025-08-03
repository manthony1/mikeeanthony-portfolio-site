const MoreAboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      {/* Background Image - barely visible */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/2c6bf541-08eb-40ae-a079-1b3f6ce17d98.png')"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            More About Mike
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm wired for systems thinking and driven by curiosity. Whether integrating AI into feedback loops or streamlining processes across massive orgs, I build tools that simplify complexity and let humans do more of what matters.
            </p>
            
            <p>
              My journey in automation began with n8n and OpenAI APIs and evolved into a broader mission to find leverage in every workflow. I believe in iteration over perfection and I'm always learning, whether it's SQL, ServiceNow, or just how to ask better questions.
            </p>
            
            <p>
              If you're building something interesting, solving messy problems, or just want to swap ideas, reach out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutSection;