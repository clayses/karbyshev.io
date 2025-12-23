(function () {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  // Active state in navigation
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });

  // Contact form: show "Запит надіслано!" (no backend)
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const msgEl = document.getElementById('successMsg');
      if (msgEl) {
        msgEl.style.display = 'block';
        msgEl.textContent = 'Запит надіслано!';
      }

      form.reset();

      // Auto-hide after a few seconds (optional)
      setTimeout(() => {
        if (msgEl) msgEl.style.display = 'none';
      }, 3000);
    });
  }
})();
