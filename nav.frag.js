async function main() {
  const parentNavEl = document.currentScript.parentElement;

  parentNavEl.textContent = 'Loading navigation…';

  // load the fragment
  const response = await fetch('nav.frag.html');
  if (!response.ok) {
    parentNavEl.textContent = 'error loading navigation 8-(';
    return;
  }

  // put it in parentNavEl
  const fragText = await response.text();
  parentNavEl.innerHTML = fragText;

  const currentPath = window.location.pathname;
  for (const linkEl of parentNavEl.children) {
    if (linkEl.href.endsWith(currentPath)) {
      linkEl.classList.add('active');
    }
  }
}

main();
