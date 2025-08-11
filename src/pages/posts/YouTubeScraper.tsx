import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const YouTubeScraper = () => {
  const title = "YouTube Scraper | Automation Vault";
  const description = "Beginner-friendly n8n workflow to analyze YouTube videos and generate high-engagement content ideas automatically.";
  const url = typeof window !== "undefined" ? window.location.origin + "/automation-vault/youtube-scraper" : "/automation-vault/youtube-scraper";

  useEffect(() => {
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
    link.setAttribute("href", url);

    // Structured data (Article)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "YouTube Scraper",
      description,
      datePublished: new Date().toISOString(),
      author: {
        "@type": "Person",
        name: "Mike Anthony",
      },
      url,
      mainEntityOfPage: url,
    };

    let script = document.getElementById("ld-article");
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-article";
      document.head.appendChild(script);
    }
    script.setAttribute("type", "application/ld+json");
    script.textContent = JSON.stringify(jsonLd);
  }, [url]);

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <div className="mb-6">
          <Link to="/automation-vault" className="text-primary hover:underline">← Back to Automation Vault</Link>
        </div>

        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">YouTube Scraper</h1>
        </header>

        <section className="mb-8">
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="w-full h-full rounded-md border border-border"
              src="https://www.youtube.com/embed/YKyQnPxzOO4"
              title="YouTube Scraper walkthrough video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </AspectRatio>
          <p className="mt-3 text-sm text-muted-foreground">Watch: YouTube Scraper walkthrough</p>
        </section>

        <section className="prose prose-sm sm:prose-base max-w-none dark:prose-invert">
          <p className="text-lg font-semibold text-foreground">🔥 Automated Video Idea Generator Workflow</p>
          <p>
            Grow your channel faster and boost engagement with far less effort. In this guide, I’ll walk you through a simple beginner-friendly automation you can build today.
          </p>
          <p>
            💡 This n8n-powered workflow analyzes top-performing YouTube videos and turns them into a steady stream of actionable content ideas—so you can spend less time researching and more time creating.
          </p>
          <p>
            It’s a complete, end-to-end system that extracts insights from successful videos, spots patterns that drive engagement, and generates fresh ideas tailored to your niche. Ideal for creators who want data-driven strategies without hours of manual digging.
          </p>

          <hr className="my-8 border-border" />
          <h2>What This Workflow Does</h2>
          <ul>
            <li>✓ Pulls detailed YouTube video data automatically</li>
            <li>✓ Processes full transcripts for deeper analysis</li>
            <li>✓ Uses AI to generate 10 unique, high-engagement video ideas</li>
            <li>✓ Saves everything neatly in Airtable</li>
            <li>✓ Pinpoints viral moments and recurring success patterns</li>
            <li>✓ Delivers polished, ready-to-use suggestions</li>
          </ul>

          <hr className="my-8 border-border" />
          <h2>🛠️ Tools Used</h2>
          <ul>
            <li>✅ n8n – Workflow automation platform</li>
            <li>✅ YouTube API – Video data extraction</li>
            <li>✅ RapidAPI YouTube Transcript Scraper – Transcript retrieval</li>
            <li>✅ OpenAI GPT-4 – Content analysis & idea generation</li>
            <li>✅ Airtable – Data storage & organization</li>
          </ul>

          <hr className="my-8 border-border" />
          <h2>Workflow Breakdown</h2>

          <h3>1. Manual Trigger & Video Input</h3>
          <p>Start the workflow manually</p>
          <p>Enter any YouTube video ID or URL for analysis</p>

          <h3>2. YouTube Data Extraction</h3>
          <ul>
            <li>Connect to YouTube API for full metadata</li>
            <li>Gather title, description, tags, views, likes, comments</li>
            <li>Capture thumbnails and engagement metrics</li>
          </ul>

          <h3>3. Transcript Processing</h3>
          <ul>
            <li>Use RapidAPI scraper to get the complete transcript</li>
            <li>Clean and format text for readability</li>
            <li>Remove unnecessary artifacts and normalize spacing</li>
          </ul>

          <h3>4. AI Content Analysis</h3>
          <ul>
            <li>Run transcript through OpenAI GPT-4 Mini</li>
            <li>Identify high-value moments, quotes, and themes</li>
            <li>Detect engagement gaps and viral triggers</li>
          </ul>

          <h3>5. Idea Generation Engine</h3>
          <ul>
            <li>Create 10 original YouTube video ideas</li>
            <li>Include compelling titles and actionable concepts</li>
            <li>Focus on proven hooks and formats</li>
          </ul>

          <h3>6. Organized Data Storage</h3>
          <ul>
            <li>Store all results in Airtable</li>
            <li>Keep metadata, transcripts, and ideas searchable</li>
            <li>Build a growing library of proven strategies</li>
          </ul>

          <h3>7. Polished Output</h3>
          <ul>
            <li>Beautify results with formatting and emojis</li>
            <li>Present insights in a clean, actionable format</li>
          </ul>

          <p>
            This workflow turns any high-performing YouTube video into a goldmine of new ideas—ready for execution. Just drop in a video ID and get instant, AI-powered inspiration based on what’s already working in your niche.
          </p>
        </section>
      </article>
    </main>
  );
};

export default YouTubeScraper;
