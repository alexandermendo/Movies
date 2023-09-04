import { ref, onMounted, computed } from 'vue';

/**
 * Clave de API utilizada para acceder a la base de datos de películas de The Movie Database (TMDb).
 * Reemplaza 'b2418a66f53ad930cfde7200a241256b' con tu propia clave de API si es necesario.
 * @type {string}
 */
const apiKey = 'b2418a66f53ad930cfde7200a241256b';

/**
 * URL de la API de TMDb utilizada para obtener datos de películas populares.
 * Esta URL se utiliza en una solicitud de fetch para recuperar la lista de películas populares.
 * @type {string}
 */
export const responseURL = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);


/**
 * Obtiene la URL del póster de una película en función de su ruta de póster.
 *
 * @param {string} posterPath - La ruta del póster de la película.
 * @returns {string} La URL completa del póster de la película.
 *
 * @example
 * const posterPath = '/example_poster.jpg';
 * const posterUrl = getMoviePoster(posterPath);
 * // Devuelve 'https://image.tmdb.org/t/p/w500/example_poster.jpg'
 */
export const getMoviePoster = (posterPath) => {
  if (!posterPath) return 'URL_DE_LA_IMAGEN_DE_MARCADOR_DE_POSICIÓN';
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  return `${baseUrl}${posterPath}`;
};


/**
 * Referencia a una matriz que contendrá datos de películas.
 * @type {Ref<Array>}
 * @example
 * // Uso:
 * movieDataRef.value = [...];
 */
export const movieDataRef = ref([]);


/**
 * Referencia a un valor seleccionado, como la calificación de una película.
 * @type {Ref<number>}
 * @example
 * // Uso:
 * selected.value = 5.6;
 */
export const selected = ref(5.6);


/**
 * Filtra las películas en función de la calificación mínima.
 *
 * @param {number} minRating - La calificación mínima para filtrar las películas.
 * @param {Array} movieData - La matriz de películas para filtrar.
 * @returns {Array} - Una nueva matriz de películas que cumplen con el criterio de calificación mínima.
 *
 * @example
 * // Filtrar películas con una calificación mínima de 7.
 * const filteredMovies = filteredMovie(7, movieData);
 */
export const filteredMovie = computed(() => {
  if (!selected.value) return movieDataRef.value;
  else {
    const minRating = parseFloat(selected.value);
    return movieDataRef.value.filter(movie => movie.vote_average >= minRating);
  }
});