import ProductGallery from '@/components/product/ProductGallery';
import AddToCartButton from '@/components/product/AddToCartButton';

export default function ProductDetailPage() {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <ProductGallery />
      <AddToCartButton />
    </div>
  );
}