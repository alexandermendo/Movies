<template>
  <div>
    <h1>Lista de Películas</h1>
    <MovieList :movies="movieData" />
    <div class="movie-card-list">
      <MovieFilter/>
      <MovieCard v-for="movie in movieData" :key="movie.id" :movie="movie" />
    </div>
    <MovieFooter />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import MovieList from './components/MovieList.vue';
import MovieCard from './components/MovieCard.vue';
import MovieFooter from './components/MovieFooter.vue';
import MovieFilter from './components/MovieFilter.vue';
import { getMoviePoster, responseURL, movieDataRef, filteredMovie } from '../../common/utils';

export default {
  components: {
    MovieList,
    MovieCard,
    MovieFooter,
    MovieFilter,
},
  setup() {
    const movieData = movieDataRef;
    const getMoviePosterUrl = getMoviePoster;

    onMounted(async () => {
      try {
        const response = responseURL;
        if (response.ok) {
          const data = await response.json();
          movieData.value = data.results; 
        } else { console.error('Error al cargar los datos de películas:', response.status, response.statusText); }
      } catch (error) { console.error('Error al cargar los datos de películas:', error); }
    });

    const filteredMovies = filteredMovie;

    return {
      movieData: filteredMovies,
      getMoviePosterUrl, 
    };
  },
};
</script>

<style scoped>
.movie-card-list {
  background-color: rgb(236, 236, 236);
  flex-wrap: wrap;
  justify-content: center;
  /* Centra horizontalmente los elementos */
  align-items: flex-start;
  padding: 5%;
}

h1,
p {
  font-family: 'Roboto', sans-serif;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.select {
  position: relative;
}

.filter-container {
  font-family: 'Roboto', sans-serif;
}


/* Estilos opcionales para ajustar el diseño de las tarjetas de película */
@media (max-width: 768px) {
  .movie-list {
    justify-content: center;
  }
}
</style>