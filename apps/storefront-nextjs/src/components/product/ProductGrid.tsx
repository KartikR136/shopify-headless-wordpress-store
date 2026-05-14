import ProductCard from './ProductCard';

const products = [
  { title: 'Premium Headphones', price: '$149' },
  { title: 'Smart Watch', price: '$249' },
  { title: 'Mechanical Keyboard', price: '$129' }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );
}