const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;

export async function shopifyFetch(query: string, variables = {}) {
  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN || ''
      },
      body: JSON.stringify({
        query,
        variables
      }),
      next: {
        revalidate: 300
      }
    }
  );

  return response.json();
}