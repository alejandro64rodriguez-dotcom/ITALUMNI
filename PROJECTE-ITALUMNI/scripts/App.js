

(function () {
  'use strict';

  const {
    normalize,
    matches,
    formatDate,
    favKey,
    getFavorites,
    isFavorite,
    toggleFavorite
  } = (typeof module !== 'undefined' && module.exports)
    ? require('./utils')
    : window.XlumniUtils;

  /* ---------- Renderitzat de targetes ---------- */

  function favoriteButtonHTML(type, id) {
    const active = isFavorite(type, id);
    return `<button type="button" class="favorite-btn${active ? ' is-active' : ''}"
              data-fav-type="${type}" data-fav-id="${id}"
              aria-pressed="${active}" aria-label="Marca com a favorit">${active ? '★' : '☆'}</button>`;
  }

  function renderAlumniCard(alumni) {
    return `
      <article class="feature-card" data-id="${alumni.id}">
        ${favoriteButtonHTML('alumni', alumni.id)}
        <div class="feature-card__image feature-card__image--networking"></div>
        <h3 class="feature-card__title">${alumni.name}</h3>
        <p class="feature-card__text">${alumni.role} · ${alumni.company}<br>${alumni.location}</p>
        <p class="feature-card__text">${alumni.skills.join(', ')}</p>
      </article>`;
  }

  function renderJobCard(job) {
    return `
      <article class="feature-card" data-id="${job.id}">
        ${favoriteButtonHTML('jobs', job.id)}
        <div class="feature-card__image feature-card__image--jobs"></div>
        <h3 class="feature-card__title">${job.title}</h3>
        <p class="feature-card__text">${job.company} · ${job.location}<br>${job.type}</p>
        <p class="feature-card__text">${job.tags.join(', ')}</p>
      </article>`;
  }

  function renderEventCard(event) {
    return `
      <article class="feature-card" data-id="${event.id}">
        ${favoriteButtonHTML('events', event.id)}
        <div class="feature-card__image feature-card__image--networking"></div>
        <h3 class="feature-card__title">${event.title}</h3>
        <p class="feature-card__text">${formatDate(event.date)} · ${event.location}<br>${event.category}</p>
        <p class="feature-card__text">${event.description}</p>
      </article>`;
  }

  /* ---------- Configuració per pàgina ----------
     Cada pàgina (identificada per body[data-page]) es mapeja
     amb la seva font de dades, el tipus de favorit, els camps
     on cercar i la funció de renderitzat de targeta.
  */
  const PAGE_CONFIG = {
    networking: { data: () => ALUMNI_DATA, type: 'alumni', fields: ['name', 'role', 'company', 'location', 'skills'], render: renderAlumniCard },
    jobs:       { data: () => JOBS_DATA,   type: 'jobs',   fields: ['title', 'company', 'location', 'type', 'tags'],   render: renderJobCard },
    events:     { data: () => EVENTS_DATA, type: 'events', fields: ['title', 'location', 'category', 'description'],   render: renderEventCard }
  };

  let onlyFavorites = false;

  function renderList(config, query) {
    const list = document.getElementById('list');
    if (!list) return;

    const items = config.data().filter(item => {
      const matchesQuery = matches(item, query, config.fields);
      const matchesFav = !onlyFavorites || isFavorite(config.type, item.id);
      return matchesQuery && matchesFav;
    });

    if (items.length === 0) {
      list.innerHTML = `<p class="feature-card__text">No s'han trobat resultats.</p>`;
      return;
    }

    list.innerHTML = items.map(config.render).join('');
  }

  function initListPage(pageKey) {
    const config = PAGE_CONFIG[pageKey];
    if (!config) return;

    const searchInput = document.getElementById('search');
    const clearBtn = document.getElementById('clear');
    const favToggle = document.getElementById('favToggle'); // opcional, veure nota al xat
    const list = document.getElementById('list');

    renderList(config, '');

    if (searchInput) {
      searchInput.addEventListener('input', () => renderList(config, searchInput.value));
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        onlyFavorites = false;
        if (favToggle) favToggle.classList.remove('is-active');
        renderList(config, '');
      });
    }

    if (favToggle) {
      favToggle.addEventListener('click', () => {
        onlyFavorites = !onlyFavorites;
        favToggle.classList.toggle('is-active', onlyFavorites);
        renderList(config, searchInput ? searchInput.value : '');
      });
    }

    // Delegació d'events: un sol listener per a tots els botons de favorits
    if (list) {
      list.addEventListener('click', event => {
        const btn = event.target.closest('.favorite-btn');
        if (!btn) return;
        const type = btn.dataset.favType;
        const id = btn.dataset.favId;
        const active = toggleFavorite(type, id);
        btn.classList.toggle('is-active', active);
        btn.textContent = active ? '★' : '☆';
        btn.setAttribute('aria-pressed', active);

        // Si estem filtrant "només favorits" i se'n desmarca un, cal re-renderitzar
        if (onlyFavorites && !active) {
          renderList(config, searchInput ? searchInput.value : '');
        }
      });
    }
  }

  /* ---------- Formulari d'inscripció  ---------- */

  function initSignupPage() {
    const form = document.getElementById('signupForm');
    const toast = document.getElementById('toast');
    if (!form) return;

    form.addEventListener('submit', event => {
      event.preventDefault();
      // MVP sense backend: es simula l'enviament amb un toast de confirmació.
      if (toast) {
        toast.classList.add('is-visible');
        setTimeout(() => toast.classList.remove('is-visible'), 3000);
      }
      form.reset();
    });
  }

  /* ---------- Inicialització ---------- */

  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;

    if (PAGE_CONFIG[page]) {
      initListPage(page);
    }
    if (page === 'signup') {
      initSignupPage();
    }
  });
})();

// Tanca qualsevol menú desplegable (mobile o desktop) si es fa clic
// fora d'ell. No substitueix el botó X: aquest segueix funcionant només,
// perquè el toggle natiu del checkbox no es toca aquí.

document.addEventListener('click', function (event) {
  document
    .querySelectorAll('.menu-toggle-checkbox:checked')
    .forEach(function (checkbox) {
      // Contenedor que agrupa: input checkbox + label(hamburger) + nav(dropdown)
      // .app-header envuelve el menú mobile, .navbar__menu el de escritorio.
      const wrapper = checkbox.closest('.app-header, .navbar__menu');

      if (wrapper && !wrapper.contains(event.target)) {
        checkbox.checked = false;
      }
    });
});
// Marca com a actiu l'enllaç (del navbar o de la bottom-nav) la
// data-page del qual coincideix amb la data-page del <body> de la pàgina actual.
// Així mai no cal escriure "is-active" a mà: si copies el bloc
// de navegació tal com està a una altra pàgina, es corregeix sol.

(function () {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  document.querySelectorAll('a[data-page]').forEach(function (link) {
    link.classList.toggle('is-active', link.dataset.page === currentPage);
  });
})();