<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Requisitos

    .row.justify-content-center.align-items-center           
      .col-md-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='')
      .col.my-3
        p(data-aos="fade-down") Un requisito es una #[mark.t1 “condición o capacidad que necesita el usuario para resolver un problema o conseguir un objetivo determinado” (IEEE, 1990)]. 

        p(data-aos="fade-down").mb-0 Los requisitos comunican las expectativas de los consumidores de productos #[i software]; de otra parte, los requisitos pueden ser obvios o estar ocultos, conocidos o desconocidos, esperados o inesperados, desde el punto de vista del cliente. 

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1  Importancia de los requisitos 

    p(data-aos="fade-down").mb-5 Los requisitos cobran importancia dentro del ciclo de vida del #[i software], porque:

    .row.bg5.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-12
            .row.justify-content-center.align-items-center.bg4.pb-0 
              .col-lg-3.p-0.ps-5
                img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/7.png')     
              .col-lg-9(data-aos="fade-down")
                ul.lista-ul.fa-ul.px-5.py-4.mb-0
                  li 
                    i.far.fa-file-code
                    | Establecen el alcance del trabajo subsecuente, pueden definir estrategias de desarrollo, riesgos, tomar decisiones de negocio (viabilidad de negocio), de proyecto (tiempo, recursos), de sistema (arquitectura).

                  li 
                    i.far.fa-file-code
                    | Indican al equipo del proyecto qué requieren los usuarios (necesidades de negocio).

                  li.mb-0 
                    i.far.fa-file-code
                    | El éxito o fracaso de un proyecto está altamente influenciado por la calidad de los requisitos y el proceso para gestionarlos durante el desarrollo de un producto.  

        p(data-aos="fade-down").mb-5 A continuación, se pueden revisar las características que los requisitos deben cumplir, de acuerdo con Pfleeger (2002).

        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/11.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Necesario
                      p Si se tiene alguna duda acerca de la necesidad del requerimiento, se puede preguntar “¿Qué sería lo peor de no incluirlo?” Si no se encuentra una respuesta o cualquier consecuencia, entonces es probable que no sea un requerimiento necesario.


                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/54.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Completo 
                      p Un requerimiento está completo si no necesita ampliar detalles en su redacción, es decir, si se proporciona la información suficiente para su comprensión.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/55.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Consistente 
                      p Un requerimiento es consistente si no es contradictorio con otro requerimiento.

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/56.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Correcto 
                      p Acuerdo entre dos partes. Contiene una sola idea.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/57.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Factible
                      p El requerimiento deberá de ser totalmente factible y dentro de presupuesto, calendario y otras restricciones, si se tiene alguna duda de su factibilidad, hay que investigar, generar pruebas de concepto para saber su complejidad y factibilidad, si aun así el requerimiento es no factible, hay que revisar la visión del sistema y replantear el requerimiento.  

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/58.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Modificable 
                      p Los cambios en los requisitos deben hacerse de manera sistemática, y debe tenerse en cuenta su impacto en otros requisitos.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/59.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                  
                      h4.t3.mb-4 Priorizado 
                      p Categorizar el requerimiento nos ayuda a saber el grado de necesidad del mismo: esencial/crítico, deseado, opcional verificable.

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/60.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                  
                      h4.t3.mb-4 Verificable
                      p Si un requerimiento no se puede comprobar, entonces, ¿cómo se sabe si se cumplió con él o no? Debe ser posible verificarlo ya sea por inspección, análisis de prueba o demostración. Cuando se escriba un requerimiento, se deberán determinar los criterios de aceptación.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/61.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5
                      h4.t3.mb-4 Rastreable 
                      p La especificación se debe organizar de tal forma que cada función del sistema se pueda rastrear hasta su conjunto de requerimientos correspondiente. Facilita las pruebas y la validación del diseño.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/62.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Claro 
                      p Un requerimiento es conciso si es fácil de leer y entender, su redacción debe ser simple y clara para quienes lo consulten en un futuro.                                                              

        Separador 
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
          h2 3.2  Clasificación

        .row.justify-content-center.mb-5           
          .col-lg-4
            p(data-aos="fade-down") Los requerimientos se pueden definir de distintas maneras, la primera clasificación se encuentra relacionada con el nivel de descripción con la que cuentan estos y dentro de este tipo de clasificación se encuentran:
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')            
          .col-lg-4(data-aos="fade-right")
            .bg6.brad.h-100.p-4
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')

              h4(data-aos="fade-down") #[mark.px-2.t1 Requerimientos de usuario]           
              p(data-aos="fade-down") Son declaraciones, en lenguaje natural y en diagramas, de los servicios que se espera que el sistema proporcione y de las restricciones bajo las cuales debe funcionar.                        
          .col-lg-4(data-aos="fade-right")
            .bg6.brad.h-100.p-4
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')

              h4(data-aos="fade-down") #[mark.px-2.t1 Requerimientos de sistema]           
              p(data-aos="fade-down") Estos requerimientos establecen con detalle las funciones, servicios y restricciones operativas del sistema. El documento de requerimientos del sistema deberá ser preciso, y definir exactamente lo que se va a desarrollar. 

        p(data-aos="fade-down").mb-5 En la siguiente clasificación se observa la que se da a los requerimientos del sistema, la cual se encuentra dividida con base en lo que se va a describir. Las clasificaciones son:  

        .row.justify-content-center.mb-5 
          .col-lg-4(data-aos="fade-left")
            .bg7.brad.h-100.p-4
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')

              h4(data-aos="fade-down") #[mark.px-2.t4 Requerimientos funcionales]           
              p(data-aos="fade-down") Son declaraciones de los servicios que debe proporcionar el sistema, de la manera en que este debe reaccionar a entradas particulares, o también pueden declarar explícitamente lo que el sistema no debe hacer.                        
          .col-lg-4(data-aos="fade-left")
            .bg7.brad.h-100.p-4
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')

              h4(data-aos="fade-down") #[mark.px-2.t4 Requerimientos no funcionales]           
              p(data-aos="fade-down") Son restricciones de los servicios o funciones ofrecidos por el sistema. Incluyen restricciones de tiempo, sobre el proceso de desarrollo y estándares. Dentro de estos requerimientos se encuentra todo lo referente a la fiabilidad, el tiempo de respuesta y la capacidad de almacenamiento.
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='') 

    p(data-aos="fade-down").mb-5 En la siguiente tabla se presentan algunos ejemplos sobre requisitos funcionales y no funcionales.            
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          span #[b Tabla 2.] Requisitos
        .tabla-a.color-acento-contenido.text-center(data-aos="fade-left") 
          table
            thead.bgh    
              tr
                th Funcionales
                th No funcionales
            tbody.bgt
              tr
                td Se debe ingresar cédula, nombre y teléfono de cada cliente.
                td Las consultas deben resolverse en menos de 3 segundos.
              tr
                td Se requiere un listado de clientes por zona.
                td El lenguaje de programación debe ser Java. 
              tr
                td(colspan='2') Se puede ampliar el tema de requisitos funcionales y no funcionales en los videos que se proponen dentro del material complementario.
                                    
</template>

<script>
export default {
  name: 'Tema3',
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
