const articles = document.querySelectorAll('article');

for (const article of articles) {
  const header = article.querySelector('header');

  const aside = document.createElement('aside');
  aside.textContent = '👍 ';
  aside.classList.add('like');
  header.append(aside);

  const countEl = document.createElement('span');
  aside.append(countEl);
  countEl.textContent = "…";

  const id = article.id;
  loadLikeCount(id, countEl);

  aside.addEventListener('click', async () => {
    await fetch(`/api/likes/${id}`, { method: 'POST' });
    loadLikeCount(id, countEl);
  });
}

async function loadLikeCount(id, target) {
  const response = await fetch(`/api/likes/${id}`);
  const count = await response.json();
  target.textContent = count;
}
