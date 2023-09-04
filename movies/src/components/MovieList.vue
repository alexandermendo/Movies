<template>
  <div class="movie-list">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" @showDescription="showDescription" />
    <MovieDescription v-if="selectedMovie" :movie="selectedMovie" @closeDescription="closeDescription" />
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import MovieDescription from "./MovieDescription.vue";

export default {
  data() {
    return {
      movies: [], // Aquí debes cargar tus datos de películas desde la API
      selectedMovie: null,
    };
  },
  methods: {
    showDescription(movie) {
      this.selectedMovie = movie;
    },
    closeDescription() {
      this.selectedMovie = null;
    },
  },
  components: {
    MovieCard,
    MovieDescription,
  },
};
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* Distribuye las tarjetas de película uniformemente */
}

/* Estilos opcionales para ajustar el diseño de las tarjetas de película */
.movie-card {
  flex: 0 0 calc(33.333% - 16px);
  /* Calcula el ancho de las tarjetas de película para 3 columnas, con margen */
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  cursor: pointer;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-poster {
  max-width: 100%;
  height: auto;
}

.movie-title {
  margin-top: 8px;
  font-size: 1.2rem;
}
</style>





