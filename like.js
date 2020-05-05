function main() {
  const articles = document.querySelectorAll('article');

  for (const article of articles) {
    const headerEl = article.querySelector('header');

    // create an element like this:
    // <aside class="like">👍<span class="likecount">…</span></aside>

    const likeEl = document.createElement('aside');
    likeEl.classList.add('like');
    likeEl.textContent = '👍';
    const countEl = document.createElement('span');
    countEl.textContent = '…';
    likeEl.append(countEl);

    // put it in the header
    headerEl.append(likeEl);

    const articleId = article.id;

    loadLikeCount(articleId, countEl);

    likeEl.addEventListener('click', async () => {
      console.log('foo');
      await fetch(`/api/likes/${articleId}`, {
        method: 'POST',
      });
      loadLikeCount(articleId, countEl);
    })
  }
}

async function loadLikeCount(articleId, targetEl) {
  const response = await fetch(`/api/likes/${articleId}`);
  const count = await response.json();
  targetEl.textContent = count;
}

main();
