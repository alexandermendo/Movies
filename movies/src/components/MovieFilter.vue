<template>
  <div>
    <div class="filter-container">
      <label for="ratingFilter">Filtrar por Calificación:</label>
      <input type="range" id="ratingFilter" min="0" max="10" step="0.1" v-model="selectedRating" />
      <span class="selected-rating">{{ selectedRating }}</span>
    </div>
  </div>
</template>

<script>
import { selected, filteredMovie } from '../../../common/utils';

export default {
  setup() {
    const selectedRating = selected;
    const filteredMovies = filteredMovie;
    return {
      selectedRating,
      filteredMovies
    }
  }
}
</script>

<style>
.filter-container {
  font-family: 'Roboto', sans-serif;
}
</style>