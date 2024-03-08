<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Fase de definición de requisitos

    .row.justify-content-center  
      .col-lg-8.my-3
        p(data-aos="fade-down") En esta primera fase del ciclo de vida del #[i software], #[b.tb también llamada fase de análisis], se recopila, se examina y se formulan los requisitos del cliente, así como la verificación de las posibles restricciones que se puedan aplicar.

        .bg2.p-4.brad(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Por eso, la etapa de análisis en el ciclo de vida del #[i software] corresponde al proceso a través del cual se intenta descubrir qué es lo que realmente se necesita y se llega a una comprensión adecuada de los requerimientos del sistema (las características que el sistema debe poseer).        
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')


    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')      

      .col-lg-7.my-3
        p(data-aos="fade-down") La etapa de análisis es esencial, debido a que sin esta no se sabe con precisión qué es lo que se necesita y ningún proceso de desarrollo permitirá obtenerlo. El problema que comúnmente se presenta al inicio de la etapa de desarrollo, es que el cliente no sepa exactamente que necesita, por tanto, se debe averiguar con ayuda de diferentes técnicas.    
        .row.justify-content-center.align-items-center.bg3.brad           
          .col-md-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg', alt='')
          .col.my-3
            p(data-aos="fade-down").mb-0 Por otra parte, la inestabilidad de los requerimientos de un sistema es inevitable, porque se estima que el 25 % de los requerimientos iniciales de un sistema, cambian antes que el sistema comience a utilizarse. Por ello, muchas prácticas resultan efectivas para gestionar adecuadamente los requerimientos de un sistema y, en cierto modo, controlar su evolución.         

    p(data-aos="fade-down").mb-5 En la siguiente tabla, se describen las actividades y los artefactos que se realizan en la fase de definición de requisitos.

    .row.justify-content-center
      .col-lg-12(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          span #[b Tabla 1.]  Actividades y artefactos de la fase de definición de requisitos
        .tabla-a.color-acento-contenido(data-aos="fade-left") 
          table
            thead.bgh    
              tr
                th Fase
                th Actividades
                th Artefactos
            tbody.bgt
              tr
                td(rowspan='5') Análisis (definición de requisitos).
                td Definición del alcance del proyecto.
                td 
              tr
                td Identificación del negocio.
                td Modelo del negocio.
              tr
                td Toma de requerimientos.
                td Análisis y realización de casos de uso.
              tr
                td Estudio de procesos de negocio.
                td Modelo de procesos y actividades de negocio.
              tr
                td Calendarización del proyecto.
                td Cronograma del proyecto.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
