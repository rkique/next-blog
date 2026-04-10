(function () {
  var PAGE_SIZE = 20;
  var currentPage = 0;
  var allNotes = [];
  var filteredNotes = [];
  var currentSubject = null;

  var SUBJECTS = [
    'distributed-systems', 'networks', 'nlp', 'linguistics', 'machine-learning',
    'programming-languages', 'algorithms', 'information-theory',
    'evolution-of-language', 'differential-geometry', 'systems', 'phonology'
  ];

  var LABELS = {
    'distributed-systems': 'distributed systems',
    'networks': 'networks',
    'nlp': 'NLP',
    'linguistics': 'linguistics',
    'machine-learning': 'machine learning',
    'programming-languages': 'programming languages',
    'algorithms': 'algorithms',
    'information-theory': 'information theory',
    'evolution-of-language': 'evolution of language',
    'differential-geometry': 'differential geometry',
    'systems': 'systems',
    'phonology': 'phonology'
  };

  function getSubjectFromURL() {
    var params = new URLSearchParams(window.location.search);
    return params.get('subject');
  }

  document.addEventListener('DOMContentLoaded', function () {
    fetch('notes-data.json')
      .then(function (r) { return r.json(); })
      .then(function (notes) {
        allNotes = notes;
        currentSubject = getSubjectFromURL();
        renderPills();
        filterAndRender();
      })
      .catch(function (err) { console.error('Failed to load notes:', err); });
  });

  function renderPills() {
    var container = document.getElementById('notes-pills');
    container.innerHTML = '';

    var allBtn = document.createElement('button');
    allBtn.className = 'notes-pill' + (!currentSubject ? ' active' : '');
    allBtn.textContent = 'all';
    allBtn.addEventListener('click', function () {
      currentSubject = null;
      history.replaceState(null, '', 'notes.html');
      renderPills();
      filterAndRender();
    });
    container.appendChild(allBtn);

    // Only show subjects that have notes
    var subjectCounts = {};
    allNotes.forEach(function (n) {
      subjectCounts[n.subject] = (subjectCounts[n.subject] || 0) + 1;
    });

    SUBJECTS.forEach(function (subj) {
      if (!subjectCounts[subj]) return;
      var btn = document.createElement('button');
      btn.className = 'notes-pill' + (currentSubject === subj ? ' active' : '');
      btn.textContent = LABELS[subj] || subj;
      btn.addEventListener('click', function () {
        currentSubject = subj;
        history.replaceState(null, '', 'notes.html?subject=' + subj);
        renderPills();
        filterAndRender();
      });
      container.appendChild(btn);
    });
  }

  function filterAndRender() {
    if (currentSubject) {
      filteredNotes = allNotes.filter(function (n) { return n.subject === currentSubject; });
      document.getElementById('notes-title').textContent = LABELS[currentSubject] || currentSubject;
    } else {
      filteredNotes = allNotes;
      document.getElementById('notes-title').textContent = 'Notes';
    }
    document.getElementById('note-count').textContent = filteredNotes.length + ' notes';
    renderPage(0);
  }

  function toDisplayDate(isoDate) {
    var parts = isoDate.split('-');
    return parseInt(parts[1]) + '.' + parseInt(parts[2]) + '.' + parts[0];
  }

  function renderPage(page) {
    currentPage = page;
    var container = document.getElementById('notes-container');
    var start = page * PAGE_SIZE;
    var pageNotes = filteredNotes.slice(start, start + PAGE_SIZE);
    var totalPages = Math.ceil(filteredNotes.length / PAGE_SIZE);

    container.innerHTML = '';

    pageNotes.forEach(function (note) {
      var card = document.createElement('div');
      card.className = 'note-card';

      var expanded = false;
      var preview = document.createElement('div');
      preview.className = 'note-card-preview';

      var dateStr = toDisplayDate(note.date);
      var previewText = note.preview ? note.preview + '...' : '';

      function setContent(showFull) {
        if (showFull) {
          var rendered = '';
          try {
            rendered = marked.parse(note.contentHtml || '');
          } catch (e) {
            rendered = '<pre>' + (note.contentHtml || '') + '</pre>';
          }
          preview.innerHTML =
            '<span class="note-card-date">(' + dateStr + ')</span> ' +
            '<span class="note-card-title">' + (note.title || '') + '</span>' +
            '<div class="note-card-full">' + rendered + '</div>';
        } else {
          preview.innerHTML =
            '<span class="note-card-date">(' + dateStr + ')</span> ' +
            '<span class="note-card-title">' + (note.title || '') + '</span> ' +
            previewText;
        }
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
      container.appendChild(buildPagination());
    }
  }

  function buildPagination() {
    var totalPages = Math.ceil(filteredNotes.length / PAGE_SIZE);
    var nav = document.createElement('div');
    nav.className = 'notes-pagination';

    function pageBtn(label, page, disabled, active) {
      var btn = document.createElement('button');
      btn.textContent = label;
      btn.className = 'notes-page-btn' + (active ? ' active' : '');
      btn.disabled = disabled;
      if (!disabled) {
        btn.addEventListener('click', function () { renderPage(page); });
      }
      return btn;
    }

    nav.appendChild(pageBtn('\u2039', currentPage - 1, currentPage === 0, false));

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

    nav.appendChild(pageBtn('\u203a', currentPage + 1, currentPage === totalPages - 1, false));

    return nav;
  }
})();
