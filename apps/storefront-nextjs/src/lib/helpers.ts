export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-');
}