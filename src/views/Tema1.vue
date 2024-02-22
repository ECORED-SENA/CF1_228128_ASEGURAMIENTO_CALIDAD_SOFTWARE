<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Ciclo de vida del <i>software</i>

    p(data-aos="fade-down").mb-5 También conocido como (SDLC o Systems Development Life Cycle), es el proceso que se sigue para construir y hacer evolucionar un determinado #[i software]. El ciclo de vida permite iniciar una serie de fases mediante las cuales se procede a la validación y al desarrollo del #[i software] garantizando que se cumplan los requisitos para la aplicación y verificación de los procedimientos de desarrollo; para ello, se utilizan métodos del ciclo del #[i software], que indican distintos pasos a seguir para el desarrollo de un producto.       

    .row.justify-content-center.align-items-center.bg11.px-3(data-aos="fade-left")
      .col-lg-12
        .row.justify-content-center.align-items-center.bg10.pb-0 
          .col-lg-3.p-0.ps-5
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/21.png')     
          .col-lg-9(data-aos="fade-down") 
            p(data-aos="fade-down") Si bien existen diferentes ciclos de desarrollo de #[i software], la normativa ISO/IEC/IEEE 12207:2017 establece que: 
            h5(data-aos="fade-down").px-4.j Es un marco común para los procesos del ciclo de vida de los programas informáticos, con una terminología bien definida, a la que pueda remitirse la industria del #[i software]. Contiene procesos, actividades y tareas aplicables durante la adquisición, el suministro, el desarrollo, el funcionamiento, el mantenimiento o la eliminación de sistemas, productos y servicios informáticos. Estos procesos del ciclo de vida se llevan a cabo mediante la participación de los interesados, con el objetivo final de lograr la satisfacción del cliente (s.p.).  

    p(data-aos="fade-down").my-5 A continuación, se indican cuáles son los elementos que integran un ciclo de vida:

    .row.justify-content-center.mb-5 
      .col-lg-5(data-aos="fade-left")
        .bg8.text-white.brad.h-100.p-4
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')

          h4(data-aos="fade-down") #[mark.px-2.t5 Fases]           
          p(data-aos="fade-down") Una fase es un conjunto de actividades relacionadas con un objetivo en el desarrollo del proyecto. Se construye agrupando tareas (actividades elementales) que pueden compartir un tramo determinado del tiempo de vida de un proyecto. La agrupación temporal de tareas impone requisitos temporales correspondientes a la asignación de recursos (humanos, financieros o materiales).                       
      .col-lg-5(data-aos="fade-right")
        .bg8.text-white.brad.h-100.p-4
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')

          h4(data-aos="fade-down") #[mark.px-2.t5 Entregables]           
          p(data-aos="fade-down") Son los productos intermedios que generan las fases. Pueden ser materiales o inmateriales (documentos, #[i software]). Los entregables permiten evaluar la marcha del proyecto mediante comprobaciones de su adecuación o no a los requisitos funcionales y de condiciones de realización previamente establecido.      


    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1  Fases                     
      
    p(data-aos="fade-down").mb-5 Las fases del modelo de ciclo del #[i software] son: planificación, análisis, diseño, implementación, pruebas y mantenimiento, las cuales se describen a continuación.    

    .row.bg12.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center.my-4           
          .col-lg-12
            .tarjeta.tarjeta--gris1.p-4(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t3.mb-4 FASE PLANIFICACIÓN: 
                      p En esta primera fase se realiza el planteamiento del problema, se definen alcances y objetivos del #[i software].

                      p Objetivos: estudio de viabilidad, realizar planificación detallada.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/26_1.png') 
     
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t3.mb-4 FASE ANÁLISIS (definición de requisitos): 
                      p Esta fase busca definir los requisitos que son los que dirigirán el desarrollo del proyecto de #[i software]. 

                      p Objetivos: conocer los requisitos, asegurar que los requisitos son alcanzables, formalizar acuerdo con el cliente.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/27.png') 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t3.mb-4 FASE DISEÑO:  
                      p En esta fase se estudian posibles opciones de implementación para el #[i software] que hay que construir, estructura general del mismo.

                      p Objetivos: identificar soluciones tecnológicas, asignar recursos materiales, proponer identificar y seleccionar, establecer métodos de validación, ajustar especificaciones.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/28.png') 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t3.mb-4 FASE PRUEBAS: 
                      p Esta fase busca detectar fallos cometidos en las etapas anteriores para corregirlos.

                      p Objetivos: realizar los ajustes necesarios para corregir posibles errores o inconsistencias.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/29.png') 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t3.mb-4 FASE MANTENIMIENTO:  
                      p En esta fase se realizan tres puntos referenciados: mantenimiento correctivo, mantenimiento adaptativo y mantenimiento perfectivo.

                      p Objetivos: operación asegurar que el uso del proyecto es el que se pretendía, mantenimiento.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/30.png') 
                                                                         
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2  Paradigmas de los modelos de ciclo de vida del #[i software]
                       
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3
        p(data-aos="fade-down") Con la finalidad de proporcionar una metodología común entre el cliente y la empresa de #[i software], se utilizan los modelos de ciclos de vida o paradigmas de desarrollo de #[i software] para plasmar las etapas y la documentación necesaria, de manera que cada fase se valide antes de continuar con la siguiente.  
        .row.justify-content-center.align-items-center.bg2          
          .col-md-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')
          .col.my-3
            p(data-aos="fade-down").mb-0 Un modelo de ciclo de vida de #[i software] es una vista de las actividades que ocurren durante el desarrollo de #[i software] e intenta determinar el orden de las etapas involucradas y los criterios de transición asociados entre estas.  
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')   

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')      
      .col-lg-9.my-3
        p(data-aos="fade-down") Según la norma 1074 IEEE se define al ciclo de vida del #[i software] como “una aproximación lógica a la adquisición, el suministro, el desarrollo, la explotación y el mantenimiento del #[i software]”.

        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p Un marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotación y el mantenimiento de un producto de #[em software], abarcando la vida del sistema desde la definición de los requisitos hasta la finalización de su uso (2008).
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 La #[em ISO/IEC 12207 Information Technology / Software Life Cycle Processes] señala que es: 

    .row.justify-content-center.mb-4
      .col-lg-5.my-3
        .bg13.p-3.h-100.brad(data-aos="fade-left")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')        
          h4(data-aos="fade-down") #[mark.px-2.t1 Paradigma tradicional]
          p(data-aos="fade-down") Los paradigmas tradicionales se identifican, fundamentalmente, por ser lineales, es decir, se trata de completar cada proceso de principio a fin, hasta que quede listo para avanzar a la segunda fase del ciclo del software.

          p(data-aos="fade-down") Si bien es verdad que las metodologías actuales están basadas en lo que fueron los paradigmas tradicionales, hoy en día se ha evolucionado, sin embargo, los paradigmas tradicionales se mantienen. 

          h5(data-aos="fade-down") Desventaja:

          p(data-aos="fade-down") Pérdida de tiempo si se encuentran errores en una fase avanzada, porque al devolverse, se debe pasar nuevamente por todas las fases y reestructurar, de acuerdo con las modificaciones.
                     
      .col-lg-7.my-3
        .bg14.p-3.mb-4.brad(data-aos="fade-down")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/39.png', alt='')        
          h4(data-aos="fade-down") #[mark.px-2.t1 Paradigma orientado a objetos]
          p(data-aos="fade-down") Las etapas de desarrollo de software en el paradigma orientado a objetos, se conforma principalmente por la creación de clases, análisis de requisitos y el diseño. Con este paradigma se pretende que el código fuente sea reutilizable para otros proyectos.                     
        .bg15.p-3.brad(data-aos="fade-right")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/40.png', alt='')        
          h4(data-aos="fade-down") #[mark.px-2.t1 Paradigma de desarrollo ágil]
          p(data-aos="fade-down") El objetivo de este paradigma es el desarrollo de proyectos en poco tiempo, se simplifican procesos tediosos, se agilizan las fases del desarrollo y las interacciones se hacen en corto tiempo.

          p(data-aos="fade-down") Una de las principales diferencias con los paradigmas anteriores, es que el cliente se ve involucrado en el proyecto durante el desarrollo de este, así, el cliente sugiere mejoras, propone ideas y se mantiene al tanto del desarrollo del producto, a diferencia del paradigma tradicional y el orientado objeto, donde el cliente únicamente está al principio.                     


    p(data-aos="fade-down").mb-5 A continuación, se revisan los modelos del paradigma tradicional más utilizados.

    TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-4.py-md-5(titulo="Modelo en cascada" :icono="require('@/assets/curso/temas/41.png')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 #[mark.px-2.t1 Modelo en cascada]
            p Uno de los primeros modelos de ciclo de vida del desarrollo fue establecido por W. Royce en 1970 y es conocido como el “modelo de cascada” (waterfall model). 

            p En su concepción básica, cada una de las actividades genera, como salidas, productos y modelos que son utilizados como entradas para el proceso subsiguiente; esto supone que una actividad debe terminarse (por lo menos, en algún grado) para empezar la siguiente.        
          .col-lg-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 1. 
              span Modelo de cascada del ciclo de vida del desarrollo         
            img.img-a.img-t(src='@/assets/curso/temas/45.svg', alt='Imagen que presenta el modelo de cascada del ciclo de vida del desarrollo.')      

      .py-4.py-md-5(titulo="Modelo espiral" :icono="require('@/assets/curso/temas/42.png')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 #[mark.px-2.t1 Modelo espiral]
            p Fue diseñado por Boehm en el año 1988 y se basa en una serie de ciclos repetitivos para ir ganando madurez en el producto final. El espiral se repite las veces que sea necesario hasta que el cliente o el usuario obtenga la satisfacción de sus necesidades.

            p En este modelo hay 4 actividades que envuelven a las etapas: planificación, análisis de riesgo, implementación y evaluación. Una de sus principales ventajas es que los riesgos van disminuyendo conforme avanzan los ciclos o interacciones.        
          .col-lg-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 2. 
              span Modelo espiral del ciclo de vida del desarrollo       
            img.img-mov(src='@/assets/curso/temas/46.svg', alt='Imagen que presenta el modelo espiral del ciclo de vida del desarrollo.')
            figcaption Nota. Adaptada de Boehm (2018).   

      .py-4.py-md-5(titulo="Modelo interactivo o por prototipos" :icono="require('@/assets/curso/temas/43.png')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 #[mark.px-2.t1 Modelo iterativo o por prototipos]
            p Este modelo consiste en un procedimiento que permite al equipo de desarrollo diseñar y analizar una aplicación que represente el sistema que será implementado (McCracken y Jackson, 1982).

            h5 Objetivos 

            ul.lista-ul.fa-ul.ps-2.mb-0
              li 
                i.far.fa-file-code.color2
                | Son un medio eficaz para aclarar los requisitos de los usuarios e identificar las características de un sistema que deben cambiarse o añadirse. 
              li 
                i.far.fa-file-code.color2
                | Mediante el prototipo se puede verificar la viabilidad del diseño de un sistema.     

            p Las etapas del modelo son:

            ol.lista-ol--cuadro.fa-ul
              li 
                .lista-ol--cuadro__vineta.t5
                  span 1
                | Colecta y refinamiento de los requerimientos y proyecto rápido.
              ul.lista-ul.fa-ul.mb-0.ps-4
                li 
                  i.far.fa-file-code.color2
                  | Análisis.
                li 
                  i.far.fa-file-code.color2
                  | Especificación del prototipo.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 2
                | Diseño rápido.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 3
                | Construcción del prototipo.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 4
                | Evaluación del prototipo por el cliente.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 5
                | Refinamiento del prototipo.
              ul.lista-ul.fa-ul.mb-0.ps-4
                li 
                  i.far.fa-file-code.color2
                  | Diseño técnico.
                li 
                  i.far.fa-file-code.color2
                  | Programación y test.
                li 
                  i.far.fa-file-code.color2
                  | Operación y mantenimiento.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 6
                | Producto de ingeniería.
                              
          .col-lg-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 3. 
              span Modelo iterativo o por prototipos         
            img.img-mov(src='@/assets/curso/temas/47.svg', alt='Imagen que presenta las etapas del modelo iterativo o por prototipos.') 

    p(data-aos="fade-down").mb-5 Con respecto a los modelos del ciclo de vida del paradigma ágil, estos se caracterizan por estar basados en etapas del ciclo de vida del software tradicional, pero combinándolas con algunas técnicas, al respecto se pueden revisar los siguientes: 

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")(data-aos="fade-left")
      div(titulo="Modelo Scrum") 
        p Este modelo se basa en el desarrollo incremental, es decir conforme pasen las fases y la iteración mayor será el tamaño del proyecto que se está desarrollando.

        p Los procesos que utiliza son: 
        ol.lista-ol--cuadro.fa-ul
          li 
            .lista-ol--cuadro__vineta.t5
              span 1
            | Product Backlog.
          li 
            .lista-ol--cuadro__vineta.t5
              span 2
            | Sprint Backlog.
          li 
            .lista-ol--cuadro__vineta.t5
              span 3
            | Sprint Planning Meeting.
          li 
            .lista-ol--cuadro__vineta.t5
              span 4
            | Daily Scrum.
          li 
            .lista-ol--cuadro__vineta.t5
              span 5
            | Sprint Review.
          li 
            .lista-ol--cuadro__vineta.t5
              span 6
            | Sprint Retrospective.

        p El Scrum consiste en realizar un análisis de los requerimientos del sistema (Product Backlog), señalar cuáles serán los objetivos a corto o mediano plazo dentro de un sprint, o sea, la fase de desarrollo. Posteriormente, los desarrolladores harán lo suyo, se realizarán algunas pruebas y se retroalimentará de acuerdo con lo conseguido al terminar la última fase.
        h5 Ventajas
        ul.lista-ul.fa-ul.mb-0.ps-4
          li 
            i.far.fa-file-code.color2
            | Gestión regular de las expectativas del usuario: los usuarios participan y proponen soluciones.
          li 
            i.far.fa-file-code.color2
            | Resultados anticipados: no es necesario esperar hasta el final para ver resultados.
          li 
            i.far.fa-file-code.color2
            | Flexibilidad y adaptación: se adapta a cualquier contexto, área o sector.
          li 
            i.far.fa-file-code.color2
            | Gestión sistemática de riesgos: los problemas son gestionados en el mismo momento de su aparición.               
        .row.justify-content-center.mt-5
          .col-lg-auto
            .titulo-sexto.color-acento-contenido
              h5 Figura 4. 
              span Modelo ágil Scrum
            img.img-a.img-t(src='@/assets/curso/temas/50.svg', alt='Imagen que presenta el modeo ágil Scrum.')

      div(titulo="Modelo Kanban")
        .row.justify-content-center
          .col-lg-5       
            p David J. Anderson (reconocido como el líder de pensamiento de la adopción del Lean/Kanban para el trabajo de conocimiento), formuló el método Kanban como una aproximación al proceso evolutivo e incremental y al cambio de sistemas para las organizaciones de trabajo. El método está enfocado en llevar a cabo las tareas pendientes y los principios más importantes pueden ser divididos en cuatro principios básicos y seis prácticas.

            p El modelo Kanban es uno de los modelos más visuales de las metodologías ágiles; este consiste en la creación de un tablero con etiquetas, donde se seccionan cada una de las fases de su desarrollo, además se clasifican de acuerdo con los equipos de trabajo y se les asignan objetivos a corto, mediano y largo plazo.

            p Mediante la metodología japonesa Kanban se:

            p Características principales de la programación extrema:

            ol.lista-ol--cuadro.fa-ul
              li 
                .lista-ol--cuadro__vineta.t5
                  span 1
                | Define el flujo de trabajo.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 2
                | Establecen las fases del ciclo de producción.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 3
                | Stop Starting, start finishing.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 4
                | Tiene un control.                
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              h5 Figura 5. 
              span Modelo ágil Kanban     
            img.img-mov(src='@/assets/curso/temas/49.svg', alt='Imagen que presenta el modelo ágil Kanban')
            figcaption Nota. Adaptada de Anderson.    

      div(titulo="Modelo XP o programación extrema")
        p La programación extrema o eXtreme Programming (XP) es un enfoque de la ingeniería de software, formulado por Kent Beck, autor del primer libro sobre este tema: Extreme Programming Explained: Embrace Change (1999). Esta metodología es adaptable según las necesidades y requerimientos a implementar, además, el cliente se encuentra involucrado en el proceso de desarrollo, lo que hace que el producto pueda ser terminado en un menor tiempo. 
        .row.justify-content-center
          .col-lg-5 
            p Características principales de la programación extrema:

            ol.lista-ol--cuadro.fa-ul
              li 
                .lista-ol--cuadro__vineta.t5
                  span 1
                | Tipo de desarrollo iterativo e incremental.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 2
                | Pruebas unitarias.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 3
                | Trabajo en equipo.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 4
                | Trabajo junto al cliente.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 5
                | Corrección de errores.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 6
                | Reestructuración del código.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 7
                | El código es de todos.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 8
                | El código simple es la clave.                                         
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              h5 Figura 6. 
              span Modelo XP     
            img.img-mov(src='@/assets/curso/temas/48.svg', alt='Imagen que presenta el modelo XP.')
            figcaption Nota. Adaptada de Muradas (2020).


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
