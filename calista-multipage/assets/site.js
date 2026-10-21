(() => {
  const body = document.body;
  const nav = document.querySelector('.nav-links');
  const toggle = document.querySelector('.menu-toggle');
  const toast = document.querySelector('.toast');
  let timer;

  function showMessage(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  if (nav) {
    const current = body.dataset.page;
    nav.querySelectorAll('[data-page-link]').forEach(link => {
      if (link.dataset.pageLink === current) link.setAttribute('aria-current', 'page');
    });
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      showMessage(form.dataset.success || 'Ďakujeme. Formulár je súčasťou vizuálneho návrhu.');
      form.reset();
    });
  });
})();
