import ProductGrid from '@/components/product/ProductGrid';

export default function FeaturedProducts() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl mb-8">Featured Products</h2>
      <ProductGrid />
    </section>
  );
}