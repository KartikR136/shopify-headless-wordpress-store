import { wordpressFetch } from '@/lib/wordpress';

export async function fetchPosts() {
  return wordpressFetch('posts');
}

export async function fetchPostBySlug(slug: string) {
  return wordpressFetch(`posts?slug=${slug}`);
}