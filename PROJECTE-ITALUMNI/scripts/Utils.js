/* 
   UTILS.JS — Funcions pures (Xlumni)
   - Sense dependències del DOM
   - 100% testejables amb Jest sense mocks
    */

(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    // Entorn Node / Jest
    module.exports = factory();
  } else {
    // Entorn navegador
    root.XlumniUtils = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /* ---------- Utilitats de cerca ---------- */

  function normalize(str) {
    return (str || '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // treu accents per cercar "cami" == "camí"
  }

  function matches(item, query, fields) {
    if (!query) return true;
    const q = normalize(query);
    return fields.some(field => {
      const value = item[field];
      if (Array.isArray(value)) {
        return value.some(v => normalize(v).includes(q));
      }
      return normalize(value).includes(q);
    });
  }

  function formatDate(isoDate) {
    const d = new Date(isoDate);
    return d.toLocaleDateString('ca-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  /* ---------- Favorits (localStorage) ---------- */

  function favKey(type) {
    return `xlumni_fav_${type}`;
  }

  function getFavorites(type) {
    try {
      const raw = localStorage.getItem(favKey(type));
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Error llegint favorits de localStorage', e);
      return [];
    }
  }

  function isFavorite(type, id) {
    return getFavorites(type).includes(id);
  }

  function toggleFavorite(type, id) {
    const favs = getFavorites(type);
    const strId = String(id); 
    const idx = favs.indexOf(strId);
    if (idx === -1) {
      favs.push(strId);
    } else {
      favs.splice(idx, 1);
    }
    localStorage.setItem(favKey(type), JSON.stringify(favs));
    return favs.includes(strId);
  }

  return {
    normalize,
    matches,
    formatDate,
    favKey,
    getFavorites,
    isFavorite,
    toggleFavorite
  };
}));