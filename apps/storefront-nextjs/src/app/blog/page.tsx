import { fetchPosts } from '@/services/wordpressService';

export const revalidate = 600;

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div className="max-w-5xl mx-auto py-16">
      <h1 className="text-4xl mb-8">Blog</h1>

      <div className="space-y-6">
        {posts.slice(0, 5).map((post: any) => (
          <article
            key={post.id}
            className="border p-6 rounded-xl"
          >
            <h2>{post.title.rendered}</h2>
          </article>
        ))}
      </div>
    </div>
  );
}