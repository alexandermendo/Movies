<template>
  <div>
    <div class="footer">
      <!-- Logotipo a la izquierda -->
      <div class="footer-logo">
        <img src="https://www.nicepng.com/png/detail/193-1934674_imdb-icon-imdb-icon.png" alt="Logo de tu sitio" />
      </div>

      <!-- Iconos de redes sociales en el centro -->
      <div class="footer-social-icons">
        <a href="#" class="social-icon"><i class="fa fa-twitter"></i></a>
        <a href="#" class="social-icon"><i class="fa fa-facebook"></i></a>
        <a href="#" class="social-icon"><i class="fa fa-instagram"></i></a>
      </div>

      <!-- Información del sitio web a la derecha -->
      <div class="footer-info">
        <p>1990-2023 IMDB.COM, INC</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para el footer */
.footer {
  color: #333;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Divide el contenido en tres secciones */
}

/* Estilos para el logotipo */
.footer-logo img {
  width: 100px;
  /* Tamaño del logotipo */
}

/* Estilos para los íconos de redes sociales */
.footer-social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  font-size: 24px;
  color: #333;
  text-decoration: none;
}

.social-icon:hover {
  color: #f0a61d;
  /* Cambia el color al pasar el mouse */
}

/* Estilos para la información del sitio web */
.footer-info {
  text-align: right;
}

.footer-info p {
  margin: 0;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    /* Apila los elementos en pantallas pequeñas */
    text-align: center;
  }

  .footer-logo img {
    margin-bottom: 10px;
  }

  .footer-info p {
    margin-top: 10%;
  }
}
</style>