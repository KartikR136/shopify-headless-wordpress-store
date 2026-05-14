import { shopifyFetch } from '@/lib/shopify';

const PRODUCTS_QUERY = `
query Products {
  products(first: 8) {
    edges {
      node {
        id
        title
        handle
      }
    }
  }
}
`;

export async function fetchProducts() {
  return shopifyFetch(PRODUCTS_QUERY);
}