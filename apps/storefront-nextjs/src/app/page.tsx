import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import FeaturedCollections from '@/components/home/FeaturedCollections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <FeaturedCollections />
    </>
  );
}