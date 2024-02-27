<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center  
      .col-lg-6.my-3    
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')                                                   
      .col-lg-6.my-3
        p(data-aos="fade-down") Bienvenidos al estudio del presente componente formativo, en el cual se estudiará la ingeniería de requisitos, entendiéndola como el conjunto de actividades y tareas del proceso de desarrollo de sistemas #[i software], donde se definen que las características de un sistema #[i software] satisfagan las necesidades de negocio de clientes y usuarios y que se integre con éxito en el entorno en el que se trabaje.
        .row.justify-content-center.align-items-center.bg1.p-3.my-3(data-aos="flip-down")           
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')       
          .col
            p(data-aos="fade-down").mb-0 Igualmente, gestiona las líneas base y las peticiones de cambios que se vayan produciendo en la especificación de requisitos, manteniendo la trazabilidad entre los requisitos y otros productos del desarrollo.
        p(data-aos="fade-down") Por este motivo, estudiaremos el ciclo de vida del #[i software], sus fases y los diferentes paradigmas de los modelos de vida del #[i software], haciendo énfasis en los requisitos, su importancia y clasificación.

        p(data-aos="fade-down").mb-0 Muchos éxitos en esta experiencia de aprendizaje.




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
