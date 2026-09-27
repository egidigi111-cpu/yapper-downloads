// Theme Toggle + kleine Extras
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('yapper-theme');
if (saved === 'light') document.body.classList.add('light');

toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
toggle.onclick = () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('yapper-theme', isLight ? 'light' : 'dark');
  toggle.textContent = isLight ? '☀️' : '🌙';
};

document.getElementById('toTop').onclick = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Fake-Erfolg für lokale Vorschau (auf Netlify übernimmt Netlify Forms)
document.querySelector('form[name="kontakt"]')?.addEventListener('submit', (e) => {
  if (window.location.hostname === '' || window.location.protocol === 'file:') {
    e.preventDefault();
    document.getElementById('formNote').textContent = '✅ Vorschau: Auf Netlify wird das automatisch versendet!';
  }
});
