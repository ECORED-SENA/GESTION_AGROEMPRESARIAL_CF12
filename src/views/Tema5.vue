<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Equipos y utensilios  

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.png')})`}"
            )
            .bloque-texto-g__texto.p-4.py-5            
              p.mb-0  Los animales están expuestos a múltiples riesgos en especial por la acción de agentes contaminantes como hongos, virus y bacterias los cuales pueden llegar a afectar seriamente la productividad, por lo que es absolutamente necesario implementar protocolos de aseo y desinfección para reducir estas amenazas. Para el desarrollo de los procesos de sanitización, limpieza y desinfección de las instalaciones pecuarias se requiere de equipos, utensilios y herramientas las cuales además de facilitar el trabajo aumentan la eficiencia de las actividades. 

    .fondo1   
      Separador

      #t_5_1.titulo-segundo.color-acento-contenido
        h2 5.1 Características 

      p.mb-4 Los principales elementos empleados en la limpieza y desinfección de instalaciones pecuarias se pueden agrupar en las siguientes categorías: para remoción, transporte y disposición de residuos, para lavado general, para aplicación de sustancias desinfectantes, para desinfección física. 
      p.mb-5 Estos son los equipos y utensilios para remoción, transporte y disposición de residuos:

      div.fondo2.mb-5.py-5.px-4(data-aos="fade-right")
        SlyderB.mb-0(:datos="datosSlyder1")
      p.mb-5 Para el lavado general se recomiendan estos elementos que pueden ser análogos o un poco más industrializados llegando inclusive a tener herramientas programables y con alta tecnología:

    div.fondo3.mb-5.py-5.px-4(data-aos="fade-left")
      SlyderB.mb-0(:datos="datosSlyder2")
    p.mb-5 Por el lado de la desinfección que es tan importante en los procesos de cuidado pecuario es necesario tener los siguientes elementos de apoyo a la hora de aplicar algunos de los químicos desinfectantes, se debe tener cuidado con su control y manipulación por parte de los humanos y animales:

    div.fondo4.py-5.px-4(data-aos="fade-right")
      SlyderB.mb-0(:datos="datosSlyder3")

    .fondo5.mb-4(data-aos="fade-left") 
      p.mb-5.mt-5 Adicionalmente se recomienda tener un flameador como elemento de desinfección profunda.
      .row.justify-content-center
        .col-lg-6.col-12
          img.mb-lg-0.mb-3(src="@/assets/curso/tema5/img14.png")
        .col-lg-6.col-12
          .cajon.color-acento-contenido.p-4.mb-3(style="background-color:#dfdfdf")
            h4.mb-4 Flameador
            p.mb-0 Este equipo funciona generalmente a gas y permite aplicar calor directamente sobre las superficies que se deseen desinfectar. Es altamente eficiente en explotaciones avícolas, principalmente. 
          p.mb-0 El tipo de utensilio, equipo o herramienta a emplear en los procesos de limpieza y desinfección depende principalmente de la clase de explotación en la que se requiera desarrollar el proceso. En sistemas productivos intensivos, es más común el uso de equipos más sofisticados, pues el área de las instalaciones y el volumen de trabajo son mucho mayores. 

      Separador

      #t_5_2.titulo-segundo.color-acento-contenido
        h2 5.2 Manual de operación 

      p.mb-0 Al igual que ocurre con los equipos empleados en otros procesos que tienen lugar en las explotaciones agropecuarias, los equipos empleados en la limpieza y desinfección de instalaciones pecuarias siempre están acompañados de sus respectivos manuales de operación. Es una labor fundamental del administrador de la unidad pecuaria tener a la mano los manuales de operación de todos los equipos, instruir al personal para que los estudie, realizar jornadas de inducción y reinducción sobre la operación de los aparatos y disponer de una lista de contactos de proveedores y almacenes técnicos en los que sea posible encontrar respuestas ante situaciones de mal funcionamiento o dudas en la operación de los elementos.
  
    .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-12
          p.mb-4 El estudio del manual de operación permitirá un uso más eficiente del equipo, alargará su vida útil y proporcionará información importante sobre su almacenamiento, ensamble, cuidados durante la operación, recomendaciones de seguridad y mantenimiento.
          p.mb-4 <b style="color:#A3314F">En términos generales, un manual de operación contiene la siguiente información:</b>
          AcordionA.mb-lg-0.mb-3(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Identificación")
              p.mb-0 Se indica la marca del equipo, el nombre, el modelo y la referencia, ya que el manual es único e intransferible para cada equipo. No es homologable con equipos similares. 
            div(titulo="Información de seguridad")
              p.mb-0 Allí se presentan las precauciones básicas que se deben tener en cuenta, así como un listado de las etiquetas de advertencia que se encuentran en el equipo. Igualmente se definen los equipos de protección que se deben emplear durante la operación de la máquina. 
        .col-lg-6.col-8       
          img.mb-lg-0.mb-3(src="@/assets/curso/tema5/img15.png")

    .fondo6
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Figura 5.</b> <i>Advertencia de seguridad manual de operación termo-nebulizador</i>
      .row.justify-content-center.mb-5
        .col-lg-10.col-12
          img(src="@/assets/curso/tema5/img17.png")

      p.mb-5 <b>Componentes del equipo</b>: se presenta un diagrama en cual se describen las partes del equipo y su ubicación, lo cual es absolutamente necesario para proceder con la operación del aparato.  

      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        p.titulo <b>Figura 6.</b> <i>Esquema de componentes de un equipo termo-nebulizador</i>
      .row.justify-content-center.mb-5
        .col-lg-10.col-12
          img(src="@/assets/curso/tema5/img18.png")

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-12          
          AcordionA.mb-lg-0.mb-3(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Operación")
              p.mb-0 Esta sección generalmente incluye una explicación de los medidores, los interruptores y controles del equipo; funcionamiento de los accesorios y la información básica para el transporte del aparato. 
            div(titulo="Mantenimiento")
              p.mb-0 Se dan recomendaciones, paso a paso, de la forma como se debe hacer le mantenimiento del equipo, la periodicidad, los elementos de protección que se requieren y las herramientas necesarias. Igualmente se expresa en qué casos será necesario acudir al servicio técnico. Las actividades de mantenimiento de los equipos siempre están acompañadas de diagramas que presentan de forma secuencial cómo realizar estas labores.  
        .col-lg-6.col-12 
          img.mb-lg-0.mb-3(src="@/assets/curso/tema5/img19.png")

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Figura 7.</b> <i>Ejemplo de esquema de sección de mantenimiento de equipos</i>
      .row.justify-content-center.mb-5
        .col-lg-10.col-12
          img(src="@/assets/curso/tema5/img20.png")

    div.mb-5.px-5.py-3(style="background-color:#e1e4a8")
      .row.justify-content-center
        .col-lg-2.col-6.d-flex.justify-content-center.align-items-center
          img.mb-lg-0.mb-3(style="width:90px" src="@/assets/curso/tema5/img21.svg")
        .col-lg-10.col-12.d-flex.justify-content-center.align-items-center
          p.mb-0 Es importante insistir al personal en la necesidad de mantenerse informados sobre el funcionamiento de los equipos y las recomendaciones que se establecen en el manual de operación, ya que su desconocimiento puede llevar a accidentes y daños irreversibles en las máquinas. 

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Azadón',
        texto:
          'Se utiliza para amontonar y recoger los residuos, especialmente de las camas de galpones.',
        imagen: require('@/assets/curso/tema5/img02.png'),
      },
      {
        titulo: 'Pala',
        texto: 'Para recoger los residuos, formar pilas, llenar la carretilla.',
        imagen: require('@/assets/curso/tema5/img03.png'),
      },
      {
        titulo: 'Carretilla',
        texto:
          'Para el transporte de los residuos hasta los sitios de disposición.',
        imagen: require('@/assets/curso/tema5/img04.png'),
      },
      {
        titulo: 'Rastrillo',
        texto:
          'Para amontonar y separar materiales gruesos de la capa de residuos. ',
        imagen: require('@/assets/curso/tema5/img05.png'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Manguera',
        texto:
          'Para la conducción del agua hasta el sitio que se desea lavar y desinfectar. Una buena presión de agua es recomendable para remover buena parte de los residuos.',
        imagen: require('@/assets/curso/tema5/img06.png'),
      },
      {
        titulo: 'Escoba',
        texto:
          'Para restregar y remover los residuos que estén adheridos a las superficies.',
        imagen: require('@/assets/curso/tema5/img07.png'),
      },
      {
        titulo: 'Cepillo',
        texto:
          'Para restregar y remover los residuos que estén adheridos a las superficies.',
        imagen: require('@/assets/curso/tema5/img08.png'),
      },
    ],
    datosSlyder3: [
      {
        titulo: 'Fumigadora de espalda',
        texto:
          'Es un equipo manual en el cual por medio de la presión de aire se aplica el producto desinfectante. ',
        imagen: require('@/assets/curso/tema5/img09.png'),
      },
      {
        titulo: 'Fumigadora de motor',
        texto:
          'Por medio de la fuerza del motor se aplica una solución desinfectante a alta presión. Es ideal para lugares de difícil acceso. ',
        imagen: require('@/assets/curso/tema5/img10.png'),
      },
      {
        titulo: 'Nebulizador',
        texto:
          'Es especial para impregnar superficies con la sustancia desinfectante debido a que pulveriza las gotas de agua.  ',
        imagen: require('@/assets/curso/tema5/img11.png'),
      },
      {
        titulo: 'Termonebulizador',
        texto:
          'Por medio de la acción del calor las gotas de agua de la solución desinfectante se convierten en niebla que se adhiere fácilmente a las superficies.',
        imagen: require('@/assets/curso/tema5/img12.png'),
      },
      {
        titulo: 'Aplicador de espuma',
        texto:
          'Algunas sustancias desinfectantes se aplican en forma de espuma, por lo que este implemento resulta de bastante utilidad. ',
        imagen: require('@/assets/curso/tema5/img13.png'),
      },
    ],
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
