import matter from "gray-matter";

export type PostCard = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  canonical?: string;
};

export const listPosts = (): PostCard[] => {
  try {
    // Use import.meta.glob to get all markdown files
    const postModules = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });
    const posts = Object.entries(postModules).map(([path, content]) => {
      const { data } = matter(content);
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        canonical: data.canonical
      };
    });

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