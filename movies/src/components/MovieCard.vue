<template>
  <div class="movie-card-container">
    <div class="movie-card" @click="showMovieDetails">
      <img :src="getMoviePoster(movie.poster_path)" :alt="movie.title" class="movie-poster" />
      <h2 class="movie-title">{{ movie.title }}</h2>
      <div class="movie-rating">
        <i class="fa fa-star" style="font-size: 15px;"></i>
        <span class="movie-vote-avg">{{ movie.vote_average }}</span>
      </div>
      <div class="top-rate"><i class="fa fa-star" style="font-size: 15px; color: aliceblue;"></i></div>
    </div>
    <MovieModal :showModal="showModal" :selectedMovie="selectedMovie" @close-modal="closeModal" />
  </div>
</template>

<script>
import MovieModal from './MovieModal.vue';
import { getMoviePoster } from '../../../common/utils';

export default {
  components: {
    MovieModal
  },
  props: {
    movie: Object, // La película que se va a mostrar en la tarjeta
  },
  data() {
    return {
      showModal: false, // Inicialmente, el modal está oculto
      selectedMovie: null, // Película seleccionada para mostrar en el modal
    };
  },
  methods: {
    getMoviePoster,
    showMovieDetails() {
      this.showModal = true;
      this.selectedMovie = this.movie;
    },
    closeModal() {
      this.showModal = false;
      this.selectedMovie = null;
    },
  },

};
</script>

<style scoped>
/* Estilos CSS para el contenedor de la tarjeta de película */
.movie-card-container {
  width: calc(33.33% - 16px);
  margin-top: 2%;
  display: inline-block;
  vertical-align: top;
  padding: 16px;
  box-sizing: border-box;
}

/* Estilos CSS para la tarjeta de película */
.movie-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  cursor: pointer;
  padding: 3%;
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
  margin-bottom: 5%;
  font-size: 1.0rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-align: start;
}

.movie-rating {
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 5%;
}

.movie-rating i {
  margin-right: 4px;
  color: #f0a61d;
}

.movie-vote-avg {
  font-size: .9em;
}

.top-rate {
  background-color: #f0a61d;
  position: relative;
  margin-left: 70%;
}

/* Media query para pantallas más pequeñas */
@media (max-width: 768px) {
  .movie-card-container {
    width: calc(50% - 16px);
    /* Cambia el ancho para mostrar dos películas en una fila */
  }
}
</style>
