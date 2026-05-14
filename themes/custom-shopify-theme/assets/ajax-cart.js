document.addEventListener('DOMContentLoaded', () => {
  bindCartButtons();
});

function bindCartButtons() {
  const buttons = document.querySelectorAll('.add-to-cart-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const variantId = button.dataset.variantId;

      if (!variantId) return;

      await addToCart(variantId);
      await refreshCart();
      openCartDrawer();
    });
  });
}

async function addToCart(variantId) {
  try {
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: variantId,
        quantity: 1
      })
    });
  } catch (error) {
    console.error('Cart add failed:', error);
  }
}

async function refreshCart() {
  try {
    const response = await fetch('/cart.js');
    const cart = await response.json();

    const cartContainer = document.getElementById('cart-items');

    if (!cartContainer) return;

    cartContainer.innerHTML = cart.items
      .map(
        (item) => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.product_title}" />
            <div>
              <h4>${item.product_title}</h4>
              <p>${item.quantity} × ${item.final_price / 100}</p>
            </div>
          </div>
        `
      )
      .join('');
  } catch (error) {
    console.error('Cart refresh failed:', error);
  }
}

function openCartDrawer() {
  const cartDrawer = document.getElementById('cart-drawer');

  if (cartDrawer) {
    cartDrawer.classList.remove('hidden');
  }
}