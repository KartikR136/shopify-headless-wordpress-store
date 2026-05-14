document.addEventListener('DOMContentLoaded', () => {
  initializeCartDrawer();
  initializeAnnouncementBar();
  initializeProductInteractions();
});

function initializeCartDrawer() {
  const closeBtn = document.getElementById('close-cart');
  const cartDrawer = document.getElementById('cart-drawer');

  if (closeBtn && cartDrawer) {
    closeBtn.addEventListener('click', () => {
      cartDrawer.classList.add('hidden');
    });
  }
}

function initializeAnnouncementBar() {
  const announcement = document.querySelector('.announcement-bar');

  if (!announcement) return;

  setTimeout(() => {
    announcement.classList.add('visible');
  }, 400);
}

function initializeProductInteractions() {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });
}