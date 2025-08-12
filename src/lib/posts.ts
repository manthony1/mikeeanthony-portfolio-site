import matter from "gray-matter";

export type PostCard = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  canonical?: string;
  excerpt?: string;
  coverUrl?: string;
  media?: { youtubeId?: string | null };
};

export const listPosts = async (): Promise<PostCard[]> => {
  try {
    // Use import.meta.glob to get all markdown files
    const postModules = import.meta.glob('../posts/*.md', { as: 'raw' });
    const postPromises = Object.entries(postModules).map(async ([path, importFn]) => {
      const content = await importFn();
      const { data, content: body } = matter(content);
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      // Extract YouTube ID from embeds
      const youtubeMatch = body.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
      const youtubeId = youtubeMatch?.[1] || null;
      
      // Generate excerpt from body (strip markdown, limit to ~160-200 chars)
      const plainText = body
        .replace(/---[\s\S]*?---/, '') // Remove frontmatter
        .replace(/#+\s/g, '') // Remove headers
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
        .replace(/\*(.*?)\*/g, '$1') // Remove italic
        .replace(/`(.*?)`/g, '$1') // Remove inline code
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
        .replace(/\s+/g, ' ') // Collapse whitespace
        .trim();
      
      const excerpt = plainText.length > 200 
        ? plainText.substring(0, 197) + '...'
        : plainText;
      
      // Determine cover URL
      let coverUrl = data.cover;
      if (!coverUrl && youtubeId) {
        coverUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      }
      
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        canonical: data.canonical,
        excerpt,
        coverUrl,
        media: { youtubeId }
      };
    });

    const posts = await Promise.all(postPromises);

    // Sort by date (newest first)
    return posts.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Failed to load posts:', error);
    return [];
  }
};