(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href === path) a.classList.add('active');
  });

  // Scroll-to-top button
  const topWrap = document.querySelector('.to-top');
  const onScroll = () => {
    if(!topWrap) return;
    if(window.scrollY > 500) topWrap.classList.add('show');
    else topWrap.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  const topBtn = document.querySelector('[data-to-top]');
  if(topBtn){
    topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  // Contact form: demo submit + mailto helper
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (form.querySelector('[name="name"]').value || '').trim();
      const email = (form.querySelector('[name="email"]').value || '').trim();
      const msg = (form.querySelector('[name="message"]').value || '').trim();

      const subject = encodeURIComponent('Website inquiry — Karbyshev Digital Agency');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n\n(Generated from the exam website contact form)`
      );

      const recipient = (document.querySelector('[data-email-placeholder]')?.textContent || '').trim();

      // If the user hasn't inserted corporate email yet, show a message
      const note = document.querySelector('#formNote');
      if(!recipient || recipient.includes('___')){
        if(note){
          note.innerHTML = '⚠️ Додайте корпоративну пошту в секції "Автор" на головній сторінці (замість <b>___@___</b>), щоб форма відкривала поштовий клієнт автоматично.';
        }
        return;
      }

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      if(note){
        note.innerHTML = '✅ Відкриваю ваш поштовий клієнт з заповненим листом (mailto).';
      }
      form.reset();
    });
  }
})();
