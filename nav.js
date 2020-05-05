const navEl = document.currentScript.parentElement;

navEl.textContent = 'Loading…';

async function loadNav() {
  const response = await fetch('/nav.json');
  const links = await response.json();

  navEl.textContent = '';
  const currentPath = window.location.pathname;
  for (const link of links) {
    const linkEl = document.createElement('a');
    linkEl.href = link.href;
    linkEl.textContent = link.name;
    if (link.href === currentPath) linkEl.classList.add('active');
    navEl.append(linkEl, ' ');
  }
}

loadNav();
