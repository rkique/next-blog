(function () {
  var PAGE_SIZE = 12;
  var currentPage = 0;
  var allPosts = [];

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.daily-blog');
    if (!container) return;

    fetch('posts-data.json')
      .then(function (r) { return r.json(); })
      .then(function (posts) {
        allPosts = posts;
        renderPage(0, container);
      })
      .catch(function (err) { console.error('Failed to load posts:', err); });
  });

  function renderPage(page, container) {
    currentPage = page;
    var start = page * PAGE_SIZE;
    var pagePosts = allPosts.slice(start, start + PAGE_SIZE);
    var totalPages = Math.ceil(allPosts.length / PAGE_SIZE);

    container.innerHTML = '';

    pagePosts.forEach(function (post) {
      var card = document.createElement('div');
      card.className = 'blog-card';

      var previewText = post.preview ? post.preview + '...' : '';
      var fullText = post.contentHtml || '';
      var expanded = false;

      var preview = document.createElement('div');
      preview.className = 'blog-card-preview';

      function setContent(showFull) {
        preview.innerHTML = showFull
          ? fullText
          : '<span class="blog-card-date">(' + post.displayDate + ')</span> ' + previewText;
      }

      setContent(false);
      card.appendChild(preview);

      card.addEventListener('click', function () {
        expanded = !expanded;
        setContent(expanded);
        card.classList.toggle('expanded', expanded);
      });

      container.appendChild(card);
    });

    if (totalPages > 1) {
      container.appendChild(buildPagination(container));
    }

  }

  function buildPagination(container) {
    var totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
    var nav = document.createElement('div');
    nav.className = 'blog-pagination';

    function pageBtn(label, page, disabled, active) {
      var btn = document.createElement('button');
      btn.textContent = label;
      btn.className = 'blog-page-btn' + (active ? ' active' : '');
      btn.disabled = disabled;
      if (!disabled) {
        btn.addEventListener('click', function () { renderPage(page, container); });
      }
      return btn;
    }

    nav.appendChild(pageBtn('‹', currentPage - 1, currentPage === 0, false));

    var windowSize = 7;
    var half = Math.floor(windowSize / 2);
    var startPage = Math.max(0, currentPage - half);
    var endPage = Math.min(totalPages - 1, startPage + windowSize - 1);
    if (endPage - startPage < windowSize - 1) {
      startPage = Math.max(0, endPage - windowSize + 1);
    }

    for (var i = startPage; i <= endPage; i++) {
      nav.appendChild(pageBtn(i + 1, i, false, i === currentPage));
    }

    nav.appendChild(pageBtn('›', currentPage + 1, currentPage === totalPages - 1, false));

    return nav;
  }
})();
