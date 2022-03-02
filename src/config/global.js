export default {
  global: {
    componenteFormativo: 'Conceptualización y Metodologías EPUB',
    descripcionCurso:
      'El diseño editorial no solo se enfoca en la creación de contenidos impresos, sino que ha evolucionado a digitales, que se adaptan para posibilitar la lectura en diversos dispositivos; por ello es de gran utilidad comprender en qué consiste la diagramación, que dependerá de los diferentes tipos de productos.  El EPUB es uno de los formatos más utilizados para la publicación de libros electrónicos y es importante entender las diferencias y las características de cada uno.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Evolución histórica del libro',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipología EPUB',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de EPUB y características',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '<i>Ebooks</i>, <i>emagazines</i>, presentaciones, catálogos, <i>ecards</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Preproducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Arquitectura de la Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Evaluación heurística o usabilidad',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Flujogramas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Metodología UX y UI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Experiencia de usuario: UX',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Diseño UI',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Investigación',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Organización y planificación de la información ',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Gestión de contenidos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Diagramación de la arquitectura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Diseño, guion, <i>storyboard</i>',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Pruebas',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Validación de prototipo',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Agencia Yerro, (2014)     Todos los formatos de libros electrónicos',
      link:
        'https://www.comunidadbaratz.com/blog/todos-los-formatos-de-libros-electronicos/',
    },
    {
      referencia:
        'Castillo Castro, Y. (2020).     Accesibilidad WEB, Nuevas herramientas para PICTOS.',
      link:
        'https://wiki.ead.pucv.cl/images/7/75/Memoria_de_Titulo_Accesibilidad_Web_-_Raquel_Cataldo_y_Yorka_Castillo.pdf',
    },
    {
      referencia:
        'Diaz, M. (2017).     UX y UI: Diferencias entre la experiencia y la interfaz del usuario.',
      link:
        'https://www.fuegoyamana.com/blog/ux-y-ui-experiencia-interfaz-de-usuario/',
    },
    {
      referencia:
        'González Cam, C. (2003).     Arquitectura de la información: diseño e implementación.',
      link: 'http://eprints.rclis.org/8471/1/Arquitectura.pdf',
    },
    {
      referencia:
        'Ingeniovirtual. (s.f). Las extensiones de archivos para formato eBook y sus características.',
      link:
        'https://www.ingeniovirtual.com/extensiones-de-archivos-para-formato-ebook/',
    },
    {
      referencia:
        'López, B. (2018). Evaluación heurística, la metodología más utilizada en UX para medir la usabilidad de una interfaz.',
      link:
        'https://www.mtp.es/blog/experiencia-de-usuario-blog/evaluacion-heuristica-la-usabilidad-una-interfaz',
    },
    {
      referencia:
        'Torresburriel. (2017). <i>Card Sorting</i> para mejorar la arquitectura de información de un producto digital.',
      link:
        'https://www.torresburriel.com/weblog/2017/12/15/card-sorting-para-mejorar-la-arquitectura-de-informacion-de-un-producto-digital/',
    },
    {
      referencia:
        'Xavier, T. (2019)    ¿Qué es la arquitectura de la información? Entender el concepto y sus aplicaciones',
      link: 'https://rockcontent.com/es/blog/arquitectura-de-la-informacion/',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Es la capacidad de disponer y utilizar productos o servicios en las mismas condiciones de los demás.',
    },
    {
      termino: 'DRM (Digital Rights Management)',
      significado:
        'O Gestión de Derechos Digitales, es una forma de protección para EPUB y otros contenidos que vinculan las compras hechas por un usuario, este elemento podrá ser leído por los dispositivos autorizados por el usuario.  ',
    },
    {
      termino: 'Hipermedia',
      significado:
        'Hace referencia a la convergencia de diversos medios (textos, imágenes, sonidos, videos), permitiendo estructurar la información de una manera no secuencial, a través de nodos interconectados por enlaces.',
    },
    {
      termino: 'Hipertexto',
      significado:
        'Conjuntos estructurados de textos, gráficos, imágenes, etc., unidos entre sí por enlaces y conexiones lógicas.',
    },
    {
      termino: 'Interfaz',
      significado:
        'RAE, Conexión o frontera común entre dos o más elementos o sistemas independientes, enlace de comunicaciones. ',
    },
    {
      termino: 'Look and Feel',
      significado:
        'Traducción de mirar y sentir, expresión utilizada en marketing para referirse a la forma de ver la marca, sus colores, formas, elementos, etc.',
    },
    {
      termino: 'Navegabilidad',
      significado:
        'Cualidad de navegable, hace referencia a la facilidad con la que el usuario se desplaza entre las páginas que conforman contenido <i>web</i>.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Paso siguiente al wareframe, donde se plantea un boceto visual con referencias visuales y estructura, detallando más el contenido y la organización.',
    },
    {
      termino: 'Test A/B',
      significado:
        'Prueba de dos variantes para comparar la elección con pequeñas variaciones del producto.',
    },
    {
      termino: 'Wireframes',
      significado:
        'Es un esquema básico donde se presenta una página <i>web</i>, no se tiene en cuenta la parte gráfica, ni los colores, ni el contenido, simplemente una distribución visual. ',
    },
  ],
  complementario: [
    {
      texto: 'Hey Jaime (2021) Psicología del color en el diseño gráfico.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-kP-p_42SoA',
    },
    {
      texto:
        'SmartDraw, (S.F.) Lista de Símbolos utilizados en los flujogramas.',
      tipo: 'Página Web',
      link:
        'https://www.smartdraw.com/flowchart/simbolos-de-diagramas-de-flujo.htm',
    },
    {
      texto:
        'IDA Chile (2019). Usabilidad y accesibilidad, ¿en qué se diferencian?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ek9rYHWHKZk',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño <i>web</i>',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
