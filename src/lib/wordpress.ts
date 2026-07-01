const WP_API_URL = 'https://backend.spyblue.co/wp-json/wp/v2';

export interface WPPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
  };
}

export async function getPosts(): Promise<WPPost[]> {
  const res = await fetch(`${WP_API_URL}/posts?per_page=100&_embed`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);
  if (!res.ok) throw new Error('Failed to fetch post');
  const posts: WPPost[] = await res.json();
  return posts[0] || null;
}
