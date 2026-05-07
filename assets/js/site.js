const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a => { if (a.getAttribute('href') === here || (here === 'index.html' && a.getAttribute('href') === './')) a.classList.add('active'); });
