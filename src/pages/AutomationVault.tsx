import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PostsList from "@/components/PostsList";

const AutomationVault = () => {
  useEffect(() => {
    const title = "Automation Vault | AI Automation Blog";
    const description = "Automation Vault: tutorials on n8n, AI automation, workflows, and process optimization.";

    document.title = title;

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);

    // Structured data (Blog)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Automation Vault",
      description,
      url: window.location.origin + "/automation-vault",
    };

    let script = document.getElementById("ld-blog");
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-blog";
      document.head.appendChild(script);
    }
    script.setAttribute("type", "application/ld+json");
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
      <header className="pt-24 pb-8 border-b border-border bg-gradient-to-b from-background to-background/80">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Automation Vault</h1>
          <p className="mt-3 text-muted-foreground">
            Deep dives on n8n, AI automation, workflows, and process optimization.
          </p>
        </div>
      </header>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <PostsList />
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default AutomationVault;
