import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import matter from "gray-matter";

interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const PostsList = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Use import.meta.glob to get all markdown files
        const postModules = import.meta.glob('../posts/*.md', { as: 'raw' });
        const postPromises = Object.entries(postModules).map(async ([path, importFn]) => {
          const content = await importFn();
          const { data } = matter(content);
          const slug = path.split('/').pop()?.replace('.md', '') || '';
          
          return {
            slug,
            title: data.title,
            description: data.description,
            date: data.date,
            tags: data.tags || []
          };
        });

        const loadedPosts = await Promise.all(postPromises);
        // Sort by date (newest first)
        loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Failed to load posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 max-w-sm">
                <div className="w-full h-40 bg-muted rounded"></div>
              </div>
              <div className="h-4 bg-muted rounded w-full mb-2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">No posts available yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.slug} className="hover:shadow-card transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">
              <Link to={`/automation-vault/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription>{post.description}</CardDescription>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-muted rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {post.slug === 'youtube-scraper' && (
              <div className="mb-4 max-w-sm">
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
              </div>
            )}
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <Link to={`/automation-vault/${post.slug}`} className="text-primary hover:underline">
              Read post →
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostsList;