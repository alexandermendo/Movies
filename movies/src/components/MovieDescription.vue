<template>
  <div class="movie-description-modal">
    <div class="modal-content">
      <span class="close" @click="closeDescription">&times;</span>
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  methods: {
    closeDescription() {
      this.$emit("closeDescription");
    },
  },
};
</script>

<style scoped>
/* Estilos para el modal */
.movie-description-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}
</style>
