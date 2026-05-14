import { fetchPostBySlug } from '@/services/wordpressService';

export default async function BlogDetailPage({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const post = await fetchPostBySlug(params.slug);

  return (
    <article className="max-w-4xl mx-auto py-16">
      <h1>{post?.[0]?.title?.rendered}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: post?.[0]?.content?.rendered || ''
        }}
      />
    </article>
  );
}