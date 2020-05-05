const navEl = document.currentScript.parentElement;

navEl.textContent = 'Loading…';

async function loadNav() {
  const response = await fetch('/nav.frag.html');
  const text = await response.text();
  navEl.innerHTML = text;

  const currentPath = window.location.pathname;
  for (const link of navEl.children) {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) link.classList.add('active');
  }
}

loadNav();
