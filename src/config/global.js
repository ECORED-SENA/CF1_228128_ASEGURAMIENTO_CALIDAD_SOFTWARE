export default {
  global: {
    componenteFormativo: 'Ingeniería de requisitos',
    descripcionCurso:
      'En este componente formativo se abordan los saberes de ingeniería de requisitos: ciclo de vida del <i>software</i> fases y objetivos, modelos, características, caracterización de la fase de definición de requisitos y herramientas para el uso de captura de requisitos que se usan para el desarrollo del <i>software</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ciclo de vida del <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fases ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Paradigmas de los modelos de ciclo de vida del <i>software</i>',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fase de definición de requisitos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Importancia de los requisitos.',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ingeniería de requisitos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ingeniería del <i>software</i>: un enfoque práctico',
      referencia:
        'Pressman, R. (1993). <i>Ingeniería del software: un enfoque práctico</i>. McGraw-Hill Inc. ',
      tipo: 'Libro',
      link:
        'https://doku.pub/documents/ingenieria-de-software-un-enfoque-practico6thedicion-rogerpressman1-p6lkgywex804',
    },
    {
      tema: 'Ingeniería del <i>software</i> - Ciclo de vida',
      referencia:
        'Universidad Católica de Murcia. (2015). <i>Ingeniería del software - Ciclo de vida - Raquel Martínez.</i> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4tWmULUzVdE&t=199s',
    },
    {
      tema: 'Tipos de requerimientos',
      referencia:
        'Itunes U – UAEH. (2019). <i>Tipos de requerimientos.</i> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PUyfzEzSUSg',
    },
    {
      tema: 'Requisitos funcionales y no funcionales',
      referencia:
        'CavernaTech. (2019). <i>Requisitos funcionales y no funcionales.</i> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Lv7XbZtnQ6A',
    },
  ],
  glosario: [
    {
      termino: 'Ágil',
      significado:
        'comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.',
    },
    {
      termino: 'Ciclo de vida de <i>software</i>',
      significado:
        'aplicación de metodologías para el desarrollo del sistema <i>software</i> [AECC, 1986].',
    },
    {
      termino: 'Método',
      significado:
        'indica cómo construir técnicamente el <i>software</i>. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado: 'colección de métodos para resolver un tipo de problema.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'se refiere a la petición que se hace de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'condición que debe cumplir algo, en general el requisito cumple con lo que se requiere con el requerimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boehm, B. W. (1979). A Spiral Model of Software Development and Enhancement. <i>ACM Software Engineering Notes, 11</i>(4), 22-42. ',
    },
    {
      referencia:
        'Durán, A., y Bernárdez, B. (2001). <i>Metodología para el análisis de requisitos de sistemas software</i>.',
    },
    {
      referencia:
        'Pantaleo, G., y Rinaudo, L. (2018). <i>Ingeniería de software</i>. Alfaomega.',
    },
    {
      referencia:
        'Pantaleo, G., y Rinaudo, L. (2018). <i>Ingeniería de software</i>. Alfaomega.',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:12207:ed-2:v1:en',
    },
    {
      referencia:
        'McCracken, D., y Jackson, M. A. (1981). “A Minority Dissenting Opinion”. En W. W. Cotterman, J. D. Couger, N. L. Enger, F. Harold (Eds.). <i>Systems Analysis and Design: A Foundation for the 1980s</i> (pp. 551-553). Elsevier.',
    },
    {
      referencia:
        'Penzenstadler, B. (s. f.). Requirements Engineering. CSU Long Beach.',
      link:
        'http://www.foss2serve.org/index.php/Requirements_Engineering,_CSU_Long_Beach,_Penzenstadler',
    },
    {
      referencia:
        'Pfleeger, Sh. (2002). <i>Ingeniería del software. Teoría y práctica</i>. Prentice Hall. ',
    },
    {
      referencia:
        'Porfirio, C. (s. f.). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades. <i>atSistemas - Consultoría it blog</i>. ',
      link:
        'https://www.knowmadmood.com/es/blog/tcnicas-de-priorizacin-el-desafo-de-conseguir-un-orden-para-las-funcionalidades',
    },
    {
      referencia:
        'Rivadeneira, M., S. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. <i>Informes Científicos Técnicos - UNPA, 5</i>(1), 1-29. ',
      link: 'https://doi.org/10.22305/ict-unpa.v5i1.66 ',
    },
    {
      referencia:
        'Sommerville I. (2011). <i>Ingeniería del software</i>. Addison-Wesley. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Casteñanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta temática',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'CCentro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Bogotá',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria y la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
