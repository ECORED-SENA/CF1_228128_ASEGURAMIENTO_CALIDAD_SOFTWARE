<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')                                                   

    .row.justify-content-center.align-items-center.bg1.p-3(data-aos="flip-down")           
      .col-lg-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')       
      .col
        p(data-aos="fade-down").mb-0 En este componente formativo, se estudiarán los conceptos básicos sobre la ingeniería de requisitos, sus fases técnicas y las herramientas necesarias para la gestión y especificación de los requisitos.




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
