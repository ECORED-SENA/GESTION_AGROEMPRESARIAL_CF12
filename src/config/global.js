export default {
  global: {
    componenteFormativo: 'Aspectos de bioseguridad en la producción pecuaria',
    descripcionCurso:
      'Con el estudio de este componente el aprendiz se apropiará de los aspectos y medidas de bioseguridad que protegen la salud animal y del personal que labora en las unidades productivas; sabrá aplicar mecanismos que eviten enfermedades, contagios, proliferación de agentes patológicos y alcanzará herramientas conceptuales y operativas para garantizar a los consumidores finales productos de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
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
        titulo: 'Especie animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manejo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Bienestar',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Programa, protocolos y procedimientos ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Buenas prácticas  ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Instalaciones y aplicación de medidas de bioseguridad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas de producción ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Ficha técnica ',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Protocolo ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Equipos y utensilios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Características ',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Manual de operación',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Higienización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Productos, concentraciones y preparación',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Métodos, frecuencia y periodicidad',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Fichas técnicas, responsables',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Cronograma de actividades higienización',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Control de plagas y vectores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Medidas de prevención',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Métodos de control',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Periodicidad de aplicación',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Filtros sanitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Clases y características',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Equipos',
            hash: 't_8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo: 'Protocolos',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Normativa seguridad y salud en el Trabajo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Clases de riesgo',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Peligros ',
            hash: 't_10_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.3',
            titulo: 'Medidas de protección',
            hash: 't_10_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.4',
            titulo: 'Elementos de protección personal ',
            hash: 't_10_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
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
        'Agri-Avi. (2018). Termonebulizador H600. Manual de instrucción. Agri-Avi.',
      link: 'http://www.agriavi.com/pdf/Termo%20H600%20Manual%20Esp.pdf',
    },
    {
      referencia:
        'Caterpillar. (2007). Manual de operación y mantenimiento manipulador telescópico TH580B. Caterpillar.',
      link:
        'https://csapps.jlg.com/CAGDocuments/MenuDocuments/8C56BD70-FCC4-4391-AFE3-5CECD20379CCSPANISH_TH580B_31200322-C_OMM.pdf',
    },
    {
      referencia:
        'Fenavi. (2020). Manejo integrado de plagas en avicultura. Fenavi.',
      link:
        'https://fenavi.org/wp-content/uploads/2020/06/Cartilla_Manejo_Integrado_plagas_Mosca_Junio2020.pdf',
    },
    {
      referencia: 'Ideam. (2010). Estimación de la demanda de agua. Ideam. ',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/021888/CAP5.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2020). Resolución del ICA 365 de 2020. ICA.',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2017). Resolución del ICA 30292 de 2017. ICA.',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2014). Resolución del ICA 3651 de 2014. ICA. ',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2014). Resolución del ICA 3652 de 2014. ICA.',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2016). Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Guía técnica de implementación para Mipymes. Ministerio del Trabajo.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/51963/Guia+tecnica+de+implementacion+del+SG+SST+para+Mipymes.pdf/e1acb62b-8a54-0da7-0f24-8f7e6169c178',
    },
    {
      referencia:
        'Organismo Internacional Regional de Sanidad Agropecuaria – Oirsa. (2013). Buenas prácticas de uso de medicamentos veterinarios y productos afines. Oirsa. ',
    },
    {
      referencia:
        'Porkcolombia. (2013). La desinfección en el transporte, factor clave para el control de la diarrea epidémica porcina PEDv. Porkcolombia.',
      link:
        'https://porkcolombia.co/wp-content/uploads/2018/05/4.-Bolet%C3%ADn-PED-III-Desinfectantes.pdf',
    },
    {
      referencia:
        'Resolución 136 de 2020. [Ministerio de Agricultura y Desarrollo Rural]. Por la cual se adopta el Manual de condiciones de bienestar animal propias de cada una de las especies de producción en el sector agropecuario para las especies équidas, porcinas, ovinas y caprinas.  Junio 3 de 2020.',
    },
    {
      referencia:
        'Resolución 253 de 2020. [Ministerio de Agricultura y Desarrollo Rural]. Por la cual se adopta el Manual de condiciones de bienestar animal propias de cada una de las especies de producción en el sector agropecuario; bovina, bufalina, aves de corral y animales acuáticos. Octubre 29 de 2020.',
      link:
        'https://fenavi.org/wp-content/uploads/2020/10/RESOLUCION-0253-DE-2020.pdf',
    },
    {
      referencia:
        'Resolución 2115 de 2007. [Ministerio de la Protección Social, Ministerio de Ambiente, Vivienda y  Desarrollo Territorial]. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. Junio 22 de 2007. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_2115_de_2007.pdf',
    },
    {
      referencia:
        'Swingtec GmbH. (2019). Manual de instrucciones. Swingtec GmbH. ',
      link:
        'https://www.swingtec.de/wp-content/uploads/2019/03/SN_spanisch.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acondicionador de suelos',
      significado:
        'Material de origen orgánico o inorgánico que tienen la propiedad de mejorar las propiedades físicas del suelo. ',
    },
    {
      termino: 'Biocontrolador',
      significado:
        'Insecto que se alimenta de otros insectos, usualmente empleado para ejercer control de poblaciones de plagas en cultivos y unidades pecuarias. ',
    },
    {
      termino: 'Contaminante',
      significado:
        'Es toda sustancia introducida directa o indirectamente en la atmósfera por la actividad humana, cuya presencia puede tener efectos nocivos o que impliquen molestia grave o riesgo para la salud de las personas o el medio ambiente en su conjunto.',
    },
    {
      termino: 'Desasosiego',
      significado: 'Intranquilidad, angustia.',
    },
    {
      termino: 'Etológico',
      significado:
        'Se refiere a todo lo concerniente al comportamiento animal. ',
    },
    {
      termino: 'Patógeno',
      significado:
        'Cualquier organismo, bien sea virus, hongos o bacterias capaces de enfermar a otro ser vivo. ',
    },
    {
      termino: 'Viricida',
      significado: 'Producto empleado para controlar virus. ',
    },
  ],
  complementario: [
    {
      tema: 'Métodos de control',
      referencia:
        'Fenavi. (2020). Manejo integrado de plagas en avicultura. Fenavi.',
      tipo: 'Cartilla web',
      descarga:
        '/downloads/Cartilla_Manejo_Integrado_plagas_Mosca_Junio2020.pdf',
    },
    {
      tema: 'Normativa de seguridad y salud en el trabajo',
      referencia:
        'FENAVI – FONAV. (2020). La hora de la sostenibilidad avícola - Normativa ambiental vigente en el sector avícola [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WNm9oJGcjtY',
    },
    {
      tema: 'Higienización',
      referencia:
        'Federación Nacional de Avicultores de Colombia. (s.f.). Guía rápida. Alternativas para el manejo de residuos sólidos ordinarios en granja. Fenavi. ',
      tipo: 'Documento guía',
      descarga: '/downloads/Guia_Rapida_Ambiental_Manejo_Residuos_Solidos.pdf',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Karly Julieth Cediel Martínez',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
