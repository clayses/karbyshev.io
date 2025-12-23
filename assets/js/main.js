(function () {
  // Active navigation
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach((a) => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === current) a.classList.add('active');
  });

  // Contact form: show success message (no backend)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const msg = document.getElementById('successMsg');
      if (msg) {
        msg.style.display = 'block';
        msg.textContent = 'Запит надіслано!';
      }

      form.reset();

      setTimeout(() => {
        if (msg) msg.style.display = 'none';
      }, 3000);
    });
  }
})();