const currentPage = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
const nav = document.querySelector('.nav-panel');
const toggle = document.querySelector('.menu-toggle');

document.querySelectorAll('.nav-panel a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === 'index.html' && href === './')) {
    link.classList.add('active');
  }
});

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
