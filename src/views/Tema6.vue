<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema6
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Higienización  

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-left")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.png')})`}"
            )
            .bloque-texto-g__texto.p-4.py-5            
              p.mb-0  La base fundamental de los protocolos de bioseguridad es la correcta higiene de las instalaciones, del personal, de los equipos, utensilios y herramientas con que se cuenta al interior de la unidad productiva, pues en condiciones de poca higiene y suciedad es más probable que proliferen organismos patógenos que pueden afectar la salud de los animales. En los procesos de higienización que se deben dar al interior de la unidad productiva intervienen una serie de elementos los cuales se presentan a continuación.
    
    .fondo1.mb-5
      Separador

      #t_6_1.titulo-segundo.color-acento-contenido
        h2 6.1 Productos, concentraciones y preparación

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-12.d-flex.align-items-center
          div
            p.mb-4 Para realizar las labores de higienización en las unidades pecuarias, actualmente en el mercado existen múltiples alternativas las cuales son empleadas para controlar diversos agentes patógenos. 
            p.mb-lg-0.mb-3 La clasificación general que recoge buena parte de los productos empleados para la desinfección en unidades productivas pecuarias es la siguiente:
        .col-lg-6.col-8
          img.mb-lg-0.mb-3(src="@/assets/curso/tema6/img02.png")

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Tabla 4.</b> <i>Principales grupos de productos desinfectantes en la industria pecuaria </i>

      .tabla-b.color-acento-contenido.mb-5(data-aos="fade-right")                
        table
          tr
            th.border-tabla(colspan=2 style="background-color: #a3314f;")
              h4.mb-0.text-center.text-white Grupo desinfectante
            th(style="background-color: #a3314f")
              h4.mb-0.text-center.text-white Código
            th.border-tabla(colspan=5 style="background-color: #a3314f;")
              h4.mb-0.text-center.text-white Descripción
            th.border-tabla(colspan=2 style="background-color: #a3314f;")
              h4.mb-0.text-center.text-white Presentación
          tr
            td.text-center.border-tabla(colspan=2) <b>Jabones y detergentes </b> 
            td.text-center.br <b>1</b>          
            td.br(colspan=5) Jabón y detergente comercial.
            td(colspan=2) Sólida o líquida
          tr.fb
            td.fb.text-center.border-tabla(colspan=2 rowspan=3) <b>Agentes oxidantes </b> 
            td.fb.text-center.br.bb <b>2a</b>          
            td.fb.br.bb(colspan=5) Hipoclorito de sodio NaOCl.
            td.fb.bb(colspan=2) Líquida 
          tr            
            td.fb.bb.text-center.br <b>2b</b>          
            td.fb.br.bb(colspan=5) Hipoclorito de calcio Ca(OCl)<sub>2</sub>.
            td.fb.bb(colspan=2) Sólida 
          tr            
            td.fb.text-center.br <b>2c</b>          
            td.fb.br(colspan=5) Virkon® Bis (peroximonosulfato) bis (sulfato) de pentapotasio.
            td.fb(colspan=2) Polvo 
          tr.fg
            td.fg.text-center.border-tabla(colspan=2 rowspan=3) <b>Álcalis</b> 
            td.fg.text-center.br.bb <b>3a</b>          
            td.fg.br.bb(colspan=5) Hidróxido de sodio (soda cáustica).
            td.fg.bb(colspan=2) Pellets 
          tr.fg            
            td.fg.text-center.br(rowspan=2) <b>3b</b>          
            td.fg.br.bb(colspan=5) Carbonato de sodio Na<sub>2</sub>CO<sub>3</sub>.
            td.fg.bb(colspan=2) Polvo
          tr.fg                        
            td.fg.br(colspan=5) Carbonato de sodio decahidratado Na<sub>2</sub>CO<sub>3</sub>.10H<sub>2</sub>O.
            td.fg(colspan=2) Cristales
          tr.fb
            td.fb.text-center.border-tabla(colspan=2 rowspan=2) <b>Ácidos</b> 
            td.fb.br.bb.text-center <b>4a</b>          
            td.fb.br.bb(colspan=5) Ácido clorhídrico.
            td.fb.bb(colspan=2) Concentración ácida 
          tr            
            td.fb.br.text-center <b>4b</b>          
            td.fb.br(colspan=5) Ácido cítrico.
            td.fb(colspan=2) Polvo 
          tr.fg
            td.fg.text-center.border-tabla(colspan=2 rowspan=3) <b>Aldehídos</b> 
            td.fg.br.bb.text-center <b>5a</b>          
            td.fg.br.bb(colspan=5) Glutaraldehído.
            td.fg.bb(colspan=2) Concentración en la solución 
          tr.fg            
            td.fg.text-center.br.bb <b>5b</b>          
            td.fg.br.bb(colspan=5) Formalina.
            td.fg.bb(colspan=2) 40 % Formaldehído
          tr.fg            
            td.fg.text-center.br <b>5c</b>          
            td.fg.br(colspan=5) Gas formaldehído.
            td.fg(colspan=2) Se requiere una generación específica

      p.text-center Nota. Adaptada de ICA (2017).

    .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-5.col-8       
          img.mb-lg-0.mb-3(src="@/assets/curso/tema6/img03.png")
        .col-lg-7.col-12
          AcordionA.mb-0(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Agentes oxidantes")
              p.mb-0 Son altamente recomendados en la mayoría de los procesos de desinfección, aunque su eficacia disminuye notablemente en la presencia de materia orgánica. Estos compuestos no son químicamente estables pues se degradan a medida que se alcanzan temperaturas por encima de los 15 °C.
            div(titulo="Álcalis")
              p.mb-0 Son desinfectantes que están disponibles en grandes cantidades y a bajo costo además que funcionan muy bien en presencia de materia orgánica, por lo que son ideales para descontaminar alojamientos, pisos y drenajes. 
            div(titulo="Ácidos")
              p.mb-0 Tienen diversidad de aplicaciones con una alta acción viricida, por lo que dependiendo del tipo de elemento y de la concentración pueden ser empleados incluso para la desinfección del personal y la ropa de una manera segura. 
            div(titulo="Aldehídos")
              p.mb-0 Son compuestos altamente eficaces frente a distintas clases de microorganismos, por lo que son muy utilizados en concentraciones del 1 al 2 %. Son químicamente estables en presencia de materia orgánica y ligeramente corrosivos para los metales.  
    
    div.px-5.py-3(style="background-color:#e1e4a8" data-aos="fade-right")
      .row.justify-content-center
        .col-lg-2.col-6.d-flex.justify-content-center.align-items-center
          img.mb-lg-0.mb-3(style="width:90px" src="@/assets/curso/tema6/img04.svg")
        .col-lg-10.col-12.d-flex.justify-content-center.align-items-center
          p.mb-0 Es importante recordar que la utilización de estos elementos requiere de la utilización de equipos de protección personal por lo que es importante consultar las fichas técnicas de seguridad. Otros productos empleados en labores de limpieza y desinfección en unidades pecuarias son la cal (carbonato de calcio CaCO<sub>3</sub>) y los productos a base de amonio cuaternario. 

    .fondo2
      .row.justify-content-center.mb-5.mt-5(data-aos="fade-right")
        .col-lg-6.col-12          
          AcordionA.mb-lg-0.mb-3(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Cal viva")
              p.mb-0 Es un desinfectante de bajo costo que resulta útil para la oxidación de los agentes orgánicos causantes de enfermedades. Esta se puede emplear directamente sobre las superficies teniendo cuidado de agregar agua posteriormente para lograr su hidratación. 
            div(titulo="Amonio cuaternario")
              p.mb-0 Este es un producto ampliamente empleado para la desinfección de equipos y superficies, seguro y que no genera olor. Estos compuestos inciden directamente sobre la estructura de la membrana citoplasmática de las bacterias y la membrana plasmática de las levaduras y otros microorganismos. https://basicfarm.com/blog/que-es-amonio-cuaternario-usos/  
        .col-lg-6.col-8       
          img.mb-0(src="@/assets/curso/tema6/img05.png")
    
      p.mb-5 De acuerdo con sus características, estos desinfectantes pueden tener los siguientes usos:

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Tabla 5.</b> <i>Usos recomendados para las sustancias desinfectantes</i>

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8.col-12  
          .tabla-b.color-acento-contenido.mb-5
            table
              tr
                th.border-tabla(style="background-color: #a3314f;")
                  h4.mb-0.text-center.text-white Elemento para desinfectar
                th(style="background-color: #a3314f")
                  h4.mb-0.text-center.text-white Desinfectante de elección                
              tr
                td.text-center.border-tabla <b>Alojamiento de animales </b> 
                td.text-center 1, 2a, 2b, 2c, 3 
              tr
                td.text-center.border-tabla <b>Equipos</b> 
                td.text-center  1, 2a, 2b, 2c, 3
              tr
                td.text-center.border-tabla <b>Seres humanos</b> 
                td.text-center  1
              tr
                td.text-center.border-tabla <b>Equipo eléctrico</b> 
                td.text-center  5c
              tr
                td.text-center.border-tabla <b>Vivienda humana</b> 
                td.text-center  1, 2a, 2b, 2c
              tr
                td.text-center.border-tabla <b>Maquinaria y vehículos</b> 
                td.text-center 1, 3 
              tr
                td.text-center.border-tabla <b>Ropa</b> 
                td.text-center  1. 2a, 2b, 2c, 3
              tr
                td.text-center.border-tabla <b>Instalaciones</b> 
                td.text-center  1, 2c
          p.mb-5.text-center   Nota. Adaptada de ICA (2017).
                             
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-6.col-12 
          .cajon.color-acento-contenido.p-4.mb-3
            h4.mb-4 Concentraciones 
            p.mb-0 En lo relacionado con las concentraciones de estos elementos desinfectantes vale la pena mencionar que estas se dan de acuerdo con el uso que se le vaya a dar y el tipo de explotación. En explotaciones avícolas, por ejemplo, este tipo de elementos se utilizan a menudo para la desinfección de galpones, previamente al ingreso de los animales.
          p.mb-lg-0.mb-3 De acuerdo con el Instituto Colombiano Agropecuario, en su Resolución 30292 de 2017 en la cual se establecen medidas sanitarias para el control y erradicación de la enfermedad de Newcastle las concentraciones de algunos productos para la desinfección son las siguientes:

        .col-lg-6.col-8  
          img.mb-0(src="@/assets/curso/tema6/img06.png")
    
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Tabla 6.</b> <i>Concentraciones recomendadas para los principales agentes desinfectantes</i>
     
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-right")
      table
        tr
          th.border-tabla(colspan=5 rowspan=2 style="background-color: #a3314f;")
            h4.mb-0.text-center.text-white Producto
          th.bb(colspan=4  style="background-color: #a3314f")
            h4.mb-0.text-center.text-white Concentración recomendada    
          th.border-tabla(colspan=2 rowspan=2 style="background-color: #a3314f;")
            h4.mb-0.text-center.text-white Tiempo de contacto en minutos   
        tr
          th.border-tabla(colspan=2 style="background-color: #a3314f;")
            h4.mb-0.text-center.text-white Dilución inicial 
          th.border-tabla(colspan=2 style="background-color: #a3314f;")
            h4.mb-0.text-center.text-white Concentración final  
        tr
          td.br(colspan=5) Jabón y detergente comercial
          td.br.text-center(colspan=2) De acuerdo con la necesidad
          td.br.text-center(colspan=2) -
          td.text-center(colspan=2) 10
        tr
          td.br(colspan=5) Hipoclorito de sodio NaOCl
          td.br.text-center(colspan=2) 1:5
          td.br.text-center(colspan=2) 2 – 3 % de cloro disponible
          td.text-center(colspan=2) 10 – 30
        tr
          td.br(colspan=5) Hipoclorito de calcio Ca(OCl)<sub>2</sub>
          td.br.text-center(colspan=2) 30 g/ litro
          td.br.text-center(colspan=2) -
          td.text-center(colspan=2) 10 – 30
        tr
          td.br(colspan=5) Virkon® Bis (peroximonosulfato) bis (sulfato) de Pentapotasio
          td.br.text-center(colspan=2) 30 g/ litro
          td.br.text-center(colspan=2) 2 – 3 % de cloro disponible
          td.text-center(colspan=2) 10
        tr
          td.br(colspan=5) Hidróxido de sodio (soda cáustica)
          td.br.text-center(colspan=2) 20 g/ litro
          td.br.text-center(colspan=2) 2 % peso/volumen
          td.text-center(colspan=2) 10
        tr
          td.br(colspan=5) Carbonato de sodio Na<sub>2</sub>CO<sub>3</sub>
          td.br.text-center(colspan=2) 40 g/ litro
          td.br.text-center(colspan=2) 4 % peso/volumen
          td.text-center(colspan=2) 10
        tr
          td.br(colspan=5) Carbonato de sodio decahidratado Na<sub>2</sub>CO<sub>3</sub>.10H<sub>2</sub>O
          td.br.text-center(colspan=2) 100 g/ litro
          td.br.text-center(colspan=2) 10 % peso/volumen
          td.text-center(colspan=2) 30
        tr
          td.br(colspan=5) Ácido clorhídrico 
          td.br.text-center(colspan=2) 1:50
          td.br.text-center(colspan=2) 2 % peso/volumen
          td.text-center(colspan=2) 10
        tr
          td.br(colspan=5) Ácido cítrico
          td.br.text-center(colspan=2) 2 g/ litro
          td.br.text-center(colspan=2) 0,2 % peso/volumen
          td.text-center(colspan=2) 30
        tr
          td.br(colspan=5) Glutaraldehído
          td.br.text-center(colspan=2) Como sea apropiado
          td.br.text-center(colspan=2) 2 % peso/volumen
          td.text-center(colspan=2) 10 – 30
        tr
          td.br(colspan=5) Formalina
          td.br.text-center(colspan=2) 1:12
          td.br.text-center(colspan=2) 8 % peso/volumen
          td.text-center(colspan=2) 10 – 20
        tr
          td.br(colspan=5) Gas formaldehído
          td.br.text-center(colspan=2) -
          td.br.text-center(colspan=2) -
          td.text-center(colspan=2) 15 – 24 horas

    .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-6.col-12           
          p.mb-4 Además de los anteriores, existen algunos otros ejemplos de agentes desinfectantes, con nombre comercial, los cuales se recomiendan para procesos de desinfección en todo tipo de predios.
          .cajon.color-acento-contenido.p-4.mb-lg-0.mb-3            
            p.mb-0 La efectividad de los agentes desinfectantes depende en gran medida de una correcta preparación, pues es necesario conocer las recomendaciones del fabricante en lo relacionado con las diluciones, tipos de mezclas y calidad del agua empleada. Generalmente, este tipo de sustancias son solubles en agua, lo cual facilita su empleo en cualquier unidad productiva. En términos generales, las recomendaciones que se deben tener en cuenta para realizar una buena preparación son las siguientes:
        .col-lg-6.col-8  
          img.mb-0(src="@/assets/curso/tema6/img07.png")
        
    .fondo3(data-aos="fade-right")
      img.mt-5.mb-5(src="@/assets/curso/tema6/img08.png")
      p.mb-5 Para determinar la cantidad de producto a preparar, es importante consultar su ficha técnica, pues allí se especifica qué cantidad de mezcla se utiliza para determinada superficie. 
      div.px-5.py-3(style="background-color:#e1e4a8")
        .row.justify-content-center
          .col-lg-2.col-6.d-flex.justify-content-center.align-items-center
            img.mb-lg-0.mb-3(style="width:90px" src="@/assets/curso/tema6/img04.svg")
          .col-lg-10.col-12.d-flex.justify-content-center.align-items-center
            p.mb-0 Por ejemplo, en la ficha del agente oxidante Virkon® S se especifica que 1 litro de la solución alcanza para, aproximadamente, 4 m² de superficie. Con este dato de vital importancia, es posible establecer, con una regla de tres, la cantidad de producto que se requiere para tratar determinada área.  


      Separador

      #t_6_2.titulo-segundo.color-acento-contenido
        h2 6.2 Métodos, frecuencia y periodicidad

      p.mb-5 Los métodos de aplicación de los productos para la higienización son variados y dependen principalmente del tipo de área o elemento a desinfectar, de las características del producto, de la disponibilidad de equipos y del tipo de limpieza, es decir, si es rutinaria o es profunda. Es así como los principales métodos de aplicación y sus características son los siguientes:
    img.mb-5(src="@/assets/curso/tema6/img09.png")
    
    .titulo-segundo.color-acento-contenido
      h2 Frecuencia 

    p.mb-5 La frecuencia con la que se deben realizar las actividades de limpieza y desinfección están determinadas por la especie animal, el sistema productivo, el tipo de instalaciones, la densidad de animales y si existe algún tipo de alerta epidemiológica. A continuación, se presentan las principales labores de higienización que tienen lugar en la explotación pecuaria y la frecuencia con la que se recomienda realizarlas. 

    div.py-5.px-4.mb-5(style="background-color: #dfdfdf; border-radius:15px" data-aos="fade-left")
      SlyderB.mb-0(:datos="datosSlyder1")

    p.mb-0 En los protocolos de limpieza y desinfección siempre se debe establecer la frecuencia con la que se realizarán cada una de las labores y dejar constancia de ello en los respectivos formatos, indicando la fecha en la que se realizó la actividad, el o los responsables, si hubo novedades en la implementación del protocolo y demás observaciones que se consideren pertinentes. 
    Separador

    .fondo4
      #t_6_3.titulo-segundo.color-acento-contenido
        h2 6.3 Fichas técnicas, responsables

      p.mb-5 Algunos de los principios para el manejo eficaz de los planes de bioseguridad es la definición clara y concreta de los objetivos del plan y de las responsabilidades, tanto colectivas como individuales, del personal vinculado a la empresa pecuaria, lo cual es verificable a través del manejo adecuado de los registros y la sistematización de la información. 
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Figura 8.</b> <i>Ejemplo de registro de limpieza y desinfección</i>      
      .row.justify-content-center.mb-5
        .col-lg-10.col-12
          img(src="@/assets/curso/tema6/img15.png")
      p.mb-5 Cada vez que se realice alguna actividad de limpieza y desinfección, se deben dejar documentados todos los asuntos relacionados con esta labor, indicando claramente la fecha en que se realizó, el responsable (s), el nombre del producto utilizado, la dosis empleada, el lugar donde se realizó el procedimiento y las observaciones, si hubiese lugar a ellas. 

      .row.justify-content-center(data-aos="fade-right")        
        .col-lg-5.col-12.d-flex
          .cajon.color-acento-contenido.p-4.mb-lg-0.mb-3.d-flex.align-items-center(style="background-color: #e1e4a8")
            p.mb-0 Es importante que el personal vinculado a la empresa agropecuaria esté familiarizado con los registros, que cuente con la suficiente preparación para diligenciarlos y que tenga siempre la disposición de consignar en ellos información veraz que dé cuenta de las actividades realizadas. 
        .col-lg-7.col-10
          img.mb-0(src="@/assets/curso/tema6/img17.png")
    Separador

    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4 Cronograma de actividades higienización

    p.mb-5 Como todas las demás actividades que tienen lugar en la unidad productiva, es importante que se establezca un cronograma donde se especifique en qué momento tendrán lugar las labores relacionadas con la higienización de instalaciones y equipos, especificando, de ser posible, el lugar exacto en la que se llevará a cabo el proceso. 
  
    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Figura 9.</b> <i>Ejemplo de registro de limpieza y desinfección</i>      

    div.px-lg-5.px-0
      img.mb-5(src="@/assets/curso/tema6/img19.svg")

    div.px-5.py-3(style="background-color:#e1e4a8" data-aos="fade-right")
        .row.justify-content-center
          .col-lg-2.col-6.d-flex.justify-content-center.align-items-center
            img.mb-lg-0.mb-3(style="width:90px" src="@/assets/curso/tema6/img18.svg")
          .col-lg-10.col-12.d-flex.justify-content-center.align-items-center
            p.mb-0 El cronograma de actividades es una herramienta fundamental de planeación que permite al equipo de trabajo llevar un control muy preciso de las labores por realizar en la unidad productiva, al tiempo que facilita el proceso de seguimiento en campo. Es recomendable mantener el cronograma en un lugar visible de manera que todo el personal esté familiarizado con las labores pendientes y con las responsabilidades asignadas para el cumplimiento de las metas de la organización. 
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Desinfección de reservorios de agua:',
        texto:
          'En lugares donde sea necesario establecer reservorios de agua se recomienda hacerlo por lo menos cada 20 días con el fin de mantener la calidad del líquido y evitar la proliferación de enfermedades. ',
        imagen: require('@/assets/curso/tema6/img10.png'),
      },
      {
        titulo:
          'Lavado de tanques y tuberías; desinfección de galpones, equipos e instalaciones:',
        texto:
          'Se recomienda realizarlo cada vez que se cambie una parvada para evitar la propagación de enfermedades debido a los patógenos que pueden llegar a permanecer por largos periodos en el material de la cama. ',
        imagen: require('@/assets/curso/tema6/img11.png'),
      },
      {
        titulo: 'Limpieza de comederos:',
        texto:
          'De acuerdo con la disponibilidad de tiempo y recursos, en explotaciones avícolas se recomienda hacer este procedimiento de manera semanal. En el caso de los porcinos, bovinos o caprinos esta es una labor que se realiza de forma diaria.',
        imagen: require('@/assets/curso/tema6/img12.png'),
      },
      {
        titulo: 'Limpieza de vehículos, calzado y trabajadores:',
        texto:
          'La desinfección de vehículos y trabajadores se realiza de manera diaria debido al riesgo constante que existe de que por este medio ingresen a la unidad productiva agentes patógenos que pueden afectar seriamente la unidad productiva. Igualmente, el lavado de manos y la desinfección de utensilios de uso personal son procedimientos que deben realizarse incluso varias veces al día. ',
        imagen: require('@/assets/curso/tema6/img13.png'),
      },
      {
        titulo: 'Desinfección de corrales y equipos de ordeño:',
        texto:
          'Debido a que son equipos e instalaciones susceptibles a focos de contaminación y a que tienen relación con las materias primas, es recomendable establecer protocolos de limpieza y desinfección con una frecuencia diaria, una vez se culminen las labores.  ',
        imagen: require('@/assets/curso/tema6/img14.png'),
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
