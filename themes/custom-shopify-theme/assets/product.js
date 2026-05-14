document.addEventListener('DOMContentLoaded', () => {
  initializeVariantSelection();
  initializeImageGallery();
});

function initializeVariantSelection() {
  const variantSelect = document.querySelector('[data-variant-select]');

  if (!variantSelect) return;

  variantSelect.addEventListener('change', (event) => {
    const selected = event.target.value;
    updateVariantPrice(selected);
  });
}

function updateVariantPrice(variantId) {
  const priceNode = document.querySelector('[data-product-price]');

  if (!priceNode) return;

  priceNode.dataset.variant = variantId;
}

function initializeImageGallery() {
  const thumbnails = document.querySelectorAll('.product-thumbnail');
  const mainImage = document.querySelector('.product-main-image');

  if (!mainImage) return;

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      mainImage.src = thumb.dataset.image;
    });
  });
}