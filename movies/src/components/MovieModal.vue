<template>
  <div class="modal" v-if="showModal">
    <button @click="closeModal"><i class="fa fa-close"></i></button>
    <div class="modal-content">
      <img :src="getMoviePosterUrl(selectedMovie.poster_path)" :alt="selectedMovie.title" class="movie-poster" />

      <div class="text-modal">
        <h2>{{ selectedMovie.title }}</h2>
        <div class="movie-rating-modal">
          <i class="fa fa-star" style="font-size: 15px; color: #f0a61d;"></i>
          <span class="movie-avg">{{ selectedMovie.vote_average }}</span>
          <p>Rating</p>
        </div>
      </div>

      <div class="text-overview">
        <p>{{ selectedMovie.overview }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    selectedMovie: Object,
  },
  methods: {
    getMoviePosterUrl(posterPath) {
      if (!posterPath) return 'URL_DE_LA_IMAGEN_DE_MARCADOR_DE_POSICIÓN';
      const baseUrl = 'https://image.tmdb.org/t/p/w500';
      return `${baseUrl}${posterPath}`;
    },
    closeModal() { this.$emit("close-modal"); },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.modal-content {
  display: flex;
  background-color: #fff;
  padding: 0em;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: start;
  max-width: 80%;
  position: relative;
}

/* Estilos para el póster de la película en el lado izquierdo */
.movie-poster {
  max-width: 50%;
  margin-right: 20px;
}

.movie-details {
  flex-grow: 1;
  text-align: left;
}

.movie-rating-modal {
  margin-left: 5%;
  margin-bottom: 5%;
}

.movie-avg {
  margin-left: 5%;
  font-family: 'Roboto', sans-serif;
}

.text-modal {
  background: aliceblue;
  height: fit-content;
  width: 50%;
  position: absolute;
  left: 15rem;
  top: 3rem;
}

.text-modal h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  margin-left: 5%;
}

.text-modal p {
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  margin-left: 5%;
}

.text-overview {
  position: absolute;
  top: 9rem;
  left: 35%;
  padding-left: 18%;
  padding-right: 5%;
  text-align: justify;
}

.text-overview p {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  margin-left: 5%;
  margin-top: 12%;
}


@media (max-width: 768px) {
  .text-modal {
    background: aliceblue;
    height: fit-content;
    width: 50%;
    position: absolute;
    left: 11rem;
    top: 1rem;
  }

  .text-overview p {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    margin-left: 5%;
    margin-top: 0%;
  }
}
</style>

