import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PostCard } from "@/lib/posts";

interface PostsListProps {
  posts: PostCard[];
}

const PostsList = ({ posts }: PostsListProps) => {

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
            {post.description && <CardDescription>{post.description}</CardDescription>}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {post.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
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
            {post.description && <p className="text-muted-foreground mb-4">{post.description}</p>}
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