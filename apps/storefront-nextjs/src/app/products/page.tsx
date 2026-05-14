import { fetchProducts } from '@/services/shopifyService';

export const revalidate = 300;

export default async function ProductsPage() {
  const data = await fetchProducts();

  const products =
    data?.data?.products?.edges || [];

  return (
    <div className="max-w-6xl mx-auto py-16">
      <h1 className="text-4xl mb-8">Products</h1>

      <div className="grid grid-cols-3 gap-6">
        {products.map((item: any) => (
          <div
            key={item.node.id}
            className="border p-4 rounded-xl"
          >
            {item.node.title}
          </div>
        ))}
      </div>
    </div>
  );
}