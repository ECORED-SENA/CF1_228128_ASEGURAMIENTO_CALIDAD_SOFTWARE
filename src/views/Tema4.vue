<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Ingeniería de requisitos
    
    .row.justify-content-center.mb-4           
      .col-lg-4.my-3(data-aos="fade-left")
        .bloque-texto-b.bg8.brad.p-4.h-100
          .bloque-texto-b__texto    
            i.fas.fa-quote-left
            p.text-white La ingeniería de requisitos es la disciplina para desarrollar una especificación completa, consistente y no ambigua, la cual servirá como base para acuerdos comunes entre todas las partes involucradas y en dónde se describen las funciones que realizará el sistema. 
            h4.text-end.t3 (Boehm, 1979).
            i.fas.fa-quote-right      
      .col-lg-4.my-3(data-aos="fade-down")
        .bloque-texto-b.bg8.brad.p-4.h-100
          .bloque-texto-b__texto    
            i.fas.fa-quote-left
            p.text-white La ingeniería de requisitos es el proceso de estudiar las necesidades del usuario para llegar a una definición de requisitos de sistema, #[em hardware] o #[em software]. 
            h4.text-end.t3 (IEEE, 1990).
            i.fas.fa-quote-right       
      .col-lg-4.my-3(data-aos="fade-right")
        .bloque-texto-b.bg8.brad.p-4.h-100
          .bloque-texto-b__texto    
            i.fas.fa-quote-left
            p.text-white La ingeniería de requisitos puede considerarse como un proceso de descubrimiento y comunicación de las necesidades de clientes y usuarios y la gestión de los cambios de dichas necesidades. 
            h4.text-end.t3 (Amador, 2000).
            i.fas.fa-quote-right       

    .row.justify-content-center.mb-4           
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='')  

      .col-lg-8.my-3
        p(data-aos="fade-down") El término IR “ingeniería de requisitos” ha surgido para englobar los procesos de desarrollo y gestión de requisitos en el ciclo de vida del software, el primer término (ingeniería), se enfoca en las actividades de obtención, análisis, especificación y validación de los requisitos que permitirá alcanzar los objetivos del negocio y el segundo (requisitos), está centrado en la administración de los mismos y tiene como propósito central, la gestión de los cambios y la trazabilidad, de esta forma la IR proporciona el mecanismo apropiado para:

        ul.lista-ul.fa-ul.mb-0.ps-5
          li 
            i.far.fa-file-code.color1
            | Entender lo que el cliente quiere.
          li 
            i.far.fa-file-code.color1
            | Analizar las necesidades.
          li 
            i.far.fa-file-code.color1
            | Evaluar la factibilidad.
          li 
            i.far.fa-file-code.color1
            | Negociar una solución razonable.
          li 
            i.far.fa-file-code.color1
            | Especificar la solución sin ambigüedades.
          li 
            i.far.fa-file-code.color1
            | Validar la especificación.
          li 
            i.far.fa-file-code.color1
            | Administrar los requisitos conforme éstos se transforman en un sistema operacional.         

    .row.justify-content-center.mb-4
      .col-lg-7.my-3(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg9")
          div(titulo="Etapas de la ingeniería de requisitos")
            p Existen cuatro (4) etapas en un proceso usual de ingeniería de requisitos y que son utilizadas para el desarrollo de un producto único: elicitación, análisis, especificación y validación de los requisitos. 
          div(titulo="Elicitación")
            p Actividad involucrada en el descubrimiento de los requisitos del sistema. Aquí los analistas deben trabajar junto con el cliente para descubrir el problema que el sistema debe resolver, los diferentes servicios que el sistema debe prestar y las restricciones que se pueden presentar. 

            p Los principales objetivos que se deben alcanzar son los siguientes:
            ul.lista-ul.fa-ul.mb-0
              li 
                i.far.fa-file-code.color1
                | Conocer el dominio del problema, de forma tal que los analistas puedan entenderse con los clientes y usuarios y sean capaces de transmitir dicho conocimiento al resto del equipo.
              li 
                i.far.fa-file-code.color1
                | Descubrir necesidades reales entre clientes y usuarios, haciendo énfasis en aquellas que la mayor parte de las veces se asumen y toman por implícitas.
              li 
                i.far.fa-file-code.color1
                | Consensuar los requisitos entre los propios clientes y usuarios hasta obtener una visión común de los mismos.           
          div(titulo="Análisis")
            p Sobre la base de la obtención realizada previamente, comienza esta fase, la cual tiene como propósito, descubrir problemas con los requisitos del sistema identificados hasta el momento, para ello se basa en los siguientes objetivos: 
            ul.lista-ul.fa-ul.mb-0
              li 
                i.far.fa-file-code.color1
                | Detectar conflicto en los requisitos que suelen provenir de distintas fuentes y presentar contradicciones o ambigüedades debido a su naturaleza informal.
              li 
                i.far.fa-file-code.color1
                | Profundizar en el conocimiento del dominio del problema puede facilitar el proceso de construir un producto útil para clientes y usuarios (Durán, 2000). 
            p En esta fase, el analista proporciona un sistema de retroalimentación que refina el entendimiento conseguido en la etapa de obtención. 
              
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png', alt='')  

    .row.justify-content-center.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')      
      .col-lg-7.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg9")
          div(titulo="Especificación")
            p Aquí se documentan los requisitos acordados con el cliente, en un nivel apropiado de detalle. En la práctica, esta etapa se realiza conjuntamente con el análisis, por lo que se puede decir que la especificación es el “pasar en limpio” el análisis realizado previamente aplicando técnicas y/o estándares de documentación, como la notación UML (Lenguaje de Modelado Unificado), que es un estándar para el modelado orientado a objetos, por lo que los casos de uso y la obtención de requisitos basada en los casos de uso se utilizan cada vez más para la obtención de requisitos. 
          div(titulo="Validación")
            p Por último, la validación garantiza que los requisitos, una vez analizados y resueltos los posibles conflictos, correspondan realmente a las necesidades de clientes y usuarios, para evitar que, a pesar de que el producto final sea técnicamente correcto, no sea satisfactorio. La validación puede llevar al analista a reescribir algunas especificaciones de requisitos y, en otros casos, a obtener nuevos, producto de la aparición de necesidades que hasta entonces estaban ocultas, para volver a evaluar el análisis inicial, o para corregir y perfeccionar el conjunto de requisitos documentados.  

              

</template>

<script>
export default {
  name: 'Tema4',
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
