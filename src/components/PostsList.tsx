import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PostCard } from "@/lib/posts";
import { Play } from "lucide-react";

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
            {post.coverUrl && (
              <div className="mb-6 w-full max-w-xs">
                <AspectRatio ratio={16 / 9}>
                  <Link to={`/automation-vault/${post.slug}`} className="relative w-full h-full block group">
                    <img
                      src={post.coverUrl}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-md border border-border group-hover:opacity-90 transition-opacity"
                      loading="lazy"
                    />
                    {post.media?.youtubeId && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-md">
                        <div className="bg-black/70 rounded-full p-2">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </Link>
                </AspectRatio>
              </div>
            )}
            <CardDescription className="mb-4 text-sm leading-relaxed">
              {post.description || post.excerpt}
            </CardDescription>
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