(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.daily-blog');
    if (!container) return;

    fetch('posts-data.json')
      .then(function (r) { return r.json(); })
      .then(function (posts) { renderCards(posts, container); })
      .catch(function (err) { console.error('Failed to load posts:', err); });
  });

  function renderCards(posts, container) {
    container.innerHTML = '';

    posts.forEach(function (post) {
      var card = document.createElement('div');
      card.className = 'blog-card';

      var previewText = post.preview ? post.preview + '...' : '';
      var fullText = post.contentHtml || '';
      var expanded = false;

      var preview = document.createElement('div');
      preview.className = 'blog-card-preview';

      function setPreviewContent(showFull) {
        preview.innerHTML = showFull
          ? fullText
          : '<span class="blog-card-date">(' + post.displayDate + ')</span> ' + previewText;
      }

      setPreviewContent(false);
      card.appendChild(preview);

      card.addEventListener('click', function () {
        expanded = !expanded;
        setPreviewContent(expanded);
        card.classList.toggle('expanded', expanded);
      });

      container.appendChild(card);
    });

    var prev = document.createElement('a');
    prev.href = 'daily.html';
    prev.textContent = 'previous';
    container.appendChild(prev);
  }
})();
