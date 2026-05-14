const WORDPRESS_API = process.env.WORDPRESS_API_URL;

export async function wordpressFetch(endpoint: string) {
  const response = await fetch(`${WORDPRESS_API}/${endpoint}`, {
    next: {
      revalidate: 600
    }
  });

  return response.json();
}