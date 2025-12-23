const form = document.querySelector('#contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = document.getElementById('successMsg');
    if (msg) {
      msg.style.display = 'block';
      msg.textContent = 'Запит надіслано!';
    }

    form.reset();

    // ховаємо повідомлення через 3 секунди (можеш прибрати, якщо не треба)
    setTimeout(() => {
      if (msg) msg.style.display = 'none';
    }, 3000);
  });
}
