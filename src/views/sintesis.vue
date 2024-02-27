<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-5
        figure
          img(data-aos="zoom-in")(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama representa un esquema de la ingeniería de requisitos que define los requisitos como condiciones o capacidades necesarias para resolver problemas o alcanzar objetivos. Detalla el ciclo de vida del software como un proceso de construcción y evolución y divide los elementos del desarrollo en fases de planificación, análisis, diseño, pruebas y mantenimiento. Además, compara diferentes paradigmas de desarrollo de software, desde el tradicional hasta metodologías ágiles como Scrum y Kanban.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
