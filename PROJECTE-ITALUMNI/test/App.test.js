/**
 * Tests unitarios para utils.js (Xlumni)
 */

const {
  normalize,
  matches,
  formatDate,
  favKey,
  getFavorites,
  isFavorite,
  toggleFavorite
} = require('../scripts/Utils'); 

describe('normalize()', () => {
  test('convierte a minúsculas', () => {
    expect(normalize('HOLA')).toBe('hola');
  });

  test('elimina acentos', () => {
    expect(normalize('camí')).toBe('cami');
  });

  test('devuelve string vacío si recibe null o undefined', () => {
    expect(normalize(null)).toBe('');
    expect(normalize(undefined)).toBe('');
  });

  test('convierte números a string', () => {
    expect(normalize(123)).toBe('123');
  });
});

describe('matches()', () => {
  const alumni = {
    name: 'Marc Camí',
    role: 'Developer',
    skills: ['JavaScript', 'React']
  };

  test('devuelve true si la query está vacía', () => {
    expect(matches(alumni, '', ['name'])).toBe(true);
  });

  test('encuentra coincidencia ignorando acentos y mayúsculas', () => {
    expect(matches(alumni, 'CAMI', ['name'])).toBe(true);
  });

  test('busca dentro de arrays (skills)', () => {
    expect(matches(alumni, 'react', ['skills'])).toBe(true);
  });

  test('devuelve false si no hay coincidencia en ningún campo', () => {
    expect(matches(alumni, 'python', ['name', 'role', 'skills'])).toBe(false);
  });
});

describe('formatDate()', () => {
  test('formatea una fecha ISO a formato catalán', () => {
    const result = formatDate('2026-03-15');
    // el format exacte depèn de l'entorn, comprovem que conté l'any
    expect(result).toContain('2026');
  });
});

describe('favKey()', () => {
  test('genera la clave de localStorage correcta', () => {
    expect(favKey('alumni')).toBe('xlumni_fav_alumni');
    expect(favKey('jobs')).toBe('xlumni_fav_jobs');
  });
});

describe('Favoritos (localStorage)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('getFavorites devuelve [] si no hay nada guardado', () => {
    expect(getFavorites('alumni')).toEqual([]);
  });

  test('getFavorites devuelve [] si el JSON guardado está corrupto', () => {
    localStorage.setItem(favKey('alumni'), '{json-invalido');
    expect(getFavorites('alumni')).toEqual([]);
  });

  test('toggleFavorite añade un id si no estaba', () => {
    const result = toggleFavorite('alumni', '123');
    expect(result).toBe(true);
    expect(getFavorites('alumni')).toEqual(['123']);
  });

  test('toggleFavorite elimina un id si ya estaba', () => {
    toggleFavorite('alumni', '123'); // lo añade
    const result = toggleFavorite('alumni', '123'); // lo quita
    expect(result).toBe(false);
    expect(getFavorites('alumni')).toEqual([]);
  });

  test('isFavorite refleja el estado correctamente', () => {
    expect(isFavorite('jobs', '99')).toBe(false);
    toggleFavorite('jobs', '99');
    expect(isFavorite('jobs', '99')).toBe(true);
  });

  test('favoritos de distintos tipos no se mezclan', () => {
    toggleFavorite('alumni', '1');
    toggleFavorite('jobs', '1');
    expect(getFavorites('alumni')).toEqual(['1']);
    expect(getFavorites('jobs')).toEqual(['1']);
    expect(isFavorite('events', '1')).toBe(false);
  });
});