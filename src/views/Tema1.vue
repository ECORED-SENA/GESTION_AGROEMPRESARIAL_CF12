<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema1

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Especie animal
   
    .fondo1
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-12.d-none.d-lg-block
          div.p-0.position-relative
            figure
              img(src="@/assets/curso/tema1/img01.png")
            div.py-3.px-4.w-100.position-absolute(style="bottom: 0%; height:120px;  background-color: rgba(225, 228, 168, 0.89)")
              p.mb-0 En los sistemas productivos pecuarios existe diversidad de especies con las que es posible desarrollar iniciativas viables desde el punto de vista socioeconómico, financiero y ambiental, las cuales se han convertido en sustento para millones de familias que habitan entornos rurales y periurbanos alrededor del mundo, por lo que es difícil determinar un número exacto de especies empleadas en la producción animal. En Colombia, de acuerdo con el volumen de producción registrado para el año 2020, se tiene que las principales explotaciones pecuarias son las siguientes:
        .col-lg-12.d-lg-none        
            div.p-3.w-100(style="background-color: rgba(255, 228, 168, 0.89)")
              p.mb-0 En los sistemas productivos pecuarios existe diversidad de especies con las que es posible desarrollar iniciativas viables desde el punto de vista socioeconómico, financiero y ambiental, las cuales se han convertido en sustento para millones de familias que habitan entornos rurales y periurbanos alrededor del mundo, por lo que es difícil determinar un número exacto de especies empleadas en la producción animal. En Colombia, de acuerdo con el volumen de producción registrado para el año 2020, se tiene que las principales explotaciones pecuarias son las siguientes:
    
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Tabla 1.</b> <i>Principales sistemas productivos pecuarios en Colombia año 2020 </i>

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-7.col-12
          .tabla-b.color-acento-contenido.mb-lg-0.mb-3                
            table
              tr
                th.border-tabla(style="background-color: #a3314f;")
                  h4.mb-0.text-center(style="color: white") Especie productiva
                th(style="background-color: #ced371")
                  h4.mb-0.text-center Porcentaje de participación sobre la producción total
              tr
                td.text-center.border-tabla <b>Avicultura carne</b> 
                td.text-center 31,85%
              tr
                td.text-center.border-tabla <b>Bovino leche</b>
                td.text-center 21,25%
              tr
                td.text-center.border-tabla <b>Avicultura huevo</b>
                td.text-center 19,32%
              tr
                td.text-center.border-tabla <b>Bovina carne</b>
                td.text-center 14,63%
              tr
                td.text-center.border-tabla <b>Porcicultura carne</b>
                td.text-center 8,64%
              tr
                td.text-center.border-tabla <b>Piscicultura</b>
                td.text-center 3,94%
              tr
                td.text-center.border-tabla <b>Bufalina carne</b>
                td.text-center 0,14%
              tr
                td.text-center.border-tabla <b>Acuicultura Camarón</b>
                td.text-center 0,13%
              tr
                td.text-center.border-tabla <b>Miel de abejas</b>
                td.text-center 0,08%
              tr
                td.text-center.border-tabla <b>Ovina carne</b>
                td.text-center 0,01%
              tr
                td.text-center.border-tabla <b>Caprina carne</b>
                td.text-center 0,01%
            
            p.mb-0.text-center Nota. Con base en el Ministerio de Agricultura y Desarrollo Rural (2021).
              

        .col-lg-5.col-8
          img(src="@/assets/curso/tema1/img02.png")

      p.mb-5 Para entenderlo mejor se recomienda ver la siguiente figura.

      .titulo-sexto.color-acento-contenido
        p.titulo <b>Figura 1.</b> <i> Porcentaje de participación sobre la producción total </i>

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8.col-12
          img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img03.svg")
        .col-lg-4.col-8
          img(src="@/assets/curso/tema1/img04.png")

      p.mb-0 Además de las anteriores especies, también existen otros sistemas productivos que se desarrollan a menor escala, pero no por ello dejan de ser de importancia en la generación de alimentos y materias primas. Entre ellos están la producción de conejos, cuyes, codornices, algunos tipos de reptiles, el lombricultivo, pavos, patos, gansos, avestruces y chigüiros entre otras. También existen explotaciones dedicadas a la cría de animales para diversos usos, entre los cuales destacan los équidos (caballos, mulas, asnos), alpacas y llamas. 
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Características

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-6.col-12
        .cajon.color-acento-contenido.p-4.mb-3
          p.mb-0 Para agrupar las especies pecuarias se han utilizado varias denominaciones, pero la más reconocida es la que las clasifica por su tamaño en especies mayores (por ejemplo, bovinos, bufalinos, équidos) y menores (como ovinos, caprinos, aves). Además de estos se deben tener en cuenta las explotaciones acuícolas, piscícolas y hasta las de insectos. 
        p.mb-lg-0.mb-3 Para efectos prácticos, los sistemas pecuarios se han agrupado en “familias” de especies, lo cual facilita su abordaje y comprensión. Estos grupos, a su vez, se subdividen en especies animales de importancia para la obtención de alimento o materias primas u otros servicios. <b style="color: #A3314F">Los principales grupos de especies pecuarias son los que se presentan a continuación:</b> 
      .col-lg-6.col-10
        img(src="@/assets/curso/tema1/img05.png")

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      p.titulo <b>Figura 2.</b> <i>Principales especies pecuarias en explotaciones productivas</i>
    img.mb-5(src="@/assets/curso/tema1/img06.png")

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-8.col-12.d-flex.flex-column(style="position: relative;")
        div
          p.mb-4 Las especies animales más empleadas en la producción pecuaria poseen características que los diferencian entre sí y que definen el tipo de explotación en el que se pueden emplear.      
        #carouselExampleIndicators.carousel.slide.fondo2.mb-lg-0.mb-3(data-bs-ride='carousel' style='flex-grow : 1')
            .carousel-indicators
              button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 8')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='8' aria-label='Slide 9')
            .carousel-inner(style="padding-left: 61px; padding-right: 61px")
              .carousel-item.active.p-5          
                p.t17.mb-4 1. Bovinos
                .row.justify-content-center.h-100
                  .col-lg-8.col-12 
                    p.mb-lg-0.mb-3 Adaptación a diversos pisos térmicos. Generan varios productos en una misma explotación, como la producción de carne y leche.                  
                  .col-lg-4.col-8
                    img(src="@/assets/curso/tema1/img08.png")
              .carousel-item.p-5          
                p.t17.mb-4 2. Equinos
                .row.justify-content-center.h-100
                  .col-lg-8.col-12 
                    p.mb-lg-0.mb-3 Empleados en diversas tareas dentro de la unidad productiva.<br>También tienen uso recreativo.<br>Gran capacidad de adaptación.
                  .col-lg-4.col-8
                    img(src="@/assets/curso/tema1/img09.png")
              .carousel-item.p-5          
                p.t17.mb-4 3. Bufalos 
                .row.justify-content-center.h-100
                  .col-lg-8.col-12 
                    p.mb-lg-0.mb-3 Empleados en diversas tareas dentro de la unidad productiva.<br>También tienen uso recreativo.<br>Gran capacidad de adaptación.
                  .col-lg-4.col-8
                    img(src="@/assets/curso/tema1/img10.png")
              .carousel-item.p-5          
                p.t17.mb-4 4. Ovinos 
                .row.justify-content-center.h-100
                  .col-lg-8.col-12 
                    p.mb-lg-0.mb-3 Principalmente para la producción de carne y lana.<br>Se adaptan a diversos pisos térmicos. 
                  .col-lg-4.col-8
                    img(src="@/assets/curso/tema1/img11.png")
              .carousel-item.p-5          
                p.t17.mb-4 5. Caprinos 
                .row.justify-content-center.h-100
                  .col-lg-8.col-12 
                    p.mb-lg-0.mb-3 Utilizados para la producción de carne, principalmente. <br>Se adaptan a diversos pisos térmicos. <br>Gran fuente de proteína a bajo costo. 
                  .col-lg-4.col-8
                    img(src="@/assets/curso/tema1/img12.png")
              .carousel-item.p-5          
                p.t17.mb-4 6. Aves 
                .row.justify-content-center.h-100
                  .col-lg-8.col-12 
                    p.mb-lg-0.mb-3 Son los sistemas productivos más empleados en el mundo. <br>Tienen fácil adaptación a diversos pisos térmicos. <br>Producción de huevo y carne, fuente de proteína a bajo costo. 
                  .col-lg-4.col-8
                    img(src="@/assets/curso/tema1/img13.png")
              .carousel-item.p-5          
                p.t17.mb-4 7. Peces
                .row.justify-content-center.h-100
                  .col-lg-8.col-12 
                    p.mb-lg-0.mb-3 Gran capacidad de adaptación a diversos pisos térmicos. <br>Fuente de proteína de calidad. <br>Diversidad de sistemas productivos. 
                  .col-lg-4.col-8
                    img(src="@/assets/curso/tema1/img14.png")
              .carousel-item.p-5          
                p.t17.mb-4 8. Porcinos 
                .row.justify-content-center.h-100
                  .col-lg-8.col-12 
                    p.mb-lg-0.mb-3 Adaptación a diversos pisos térmicos. <br>Desarrollo precoz. <br>Gran variedad de fuentes de alimentación para los animales.
                  .col-lg-4.col-8
                    img(src="@/assets/curso/tema1/img15.png")
              .carousel-item.p-5          
                p.t17.mb-4 9. Otras especies menores
                .row.justify-content-center.h-100
                  .col-lg-8.col-12 
                    p.mb-lg-0.mb-3 Fuente económica de proteína. <br>Explotaciones que requieren poco espacio. <br>Baja demanda de recursos para explotaciones productivas. 
                  .col-lg-4.col-8
                    img(src="@/assets/curso/tema1/img16.png")
            
            button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
              span.carousel-control-prev-icon(aria-hidden='true')
              span.visually-hidden Previous
            button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
              span.carousel-control-next-icon(aria-hidden='true')
              span.visually-hidden Next
      .col-lg-4.col-8
        img.mb-0(src="@/assets/curso/tema1/img07.png")

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Manejo

    p.mb-5 El manejo de las especies pecuarias se refiere a todas las actividades y labores que se realizan al interior de la unidad productiva para garantizar su funcionamiento de manera segura, para los animales y los manejadores, lograr su rentabilidad y generar su sostenibilidad. Las actividades de manejo varían de acuerdo con la especie, la etapa de desarrollo en que se encuentren, el sistema de explotación y el destino de la producción, entre otros factores, pero siempre tomando como principio el bienestar animal. 

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      p.titulo <b>Tabla 2.</b> <i>Principales labores de manejo pecuario</i>

    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-right")                
      table
        tr
          th.border-tabla(colspan=3 style="background-color: #a3314f;")
            h4.mb-0.text-center.text-white Categoría
          th(colspan=9 style="background-color: #a3314f")
            h4.mb-0.text-center.text-white Descripción
        tr
          td.text-center.border-tabla(colspan=3) <b>Movilización </b> 
          td(colspan=9) Transporte de los animales dentro o fuera del predio, bien sea desplazándose por sí mismos o utilizando cualquier otro medio. 
        tr
          td.text-center.border-tabla(colspan=3) <b>Sujeción</b> 
          td(colspan=9) Inmovilización del animal para la realización de algún procedimiento. 
        tr
          td.text-center.border-tabla(colspan=3) <b>Aislamiento</b> 
          td(colspan=9) Consiste en separar del resto de los animales a aquellos individuos que presenten enfermedades o lesiones que puedan poner en riesgo su integridad o la de los demás. 
        tr
          td.text-center.border-tabla(colspan=3) <b>Tratamiento </b> 
          td(colspan=9) Realización de cualquier procedimiento para atender una lesión o enfermedad.
        tr
          td.text-center.border-tabla(colspan=3) <b>Reproducción asistida</b> 
          td(colspan=9) Labores relacionadas con la inseminación artificial o la colecta de semen. 
        tr
          td.text-center.border-tabla(colspan=3) <b>Reproducción natural controlada</b> 
          td(colspan=9) Se refiere a las prácticas en las cuales se requiere la presencia de un macho reproductor para realizar la cubrición de las hembras en ambientes controlados. 
        tr
          td.text-center.border-tabla(colspan=3) <b>Apero</b> 
          td(colspan=9) Colocar los aperos a los animales para desarrollar trabajos propios de la especie en la unidad productiva (tracción, carga, monta).
        tr
          td.text-center.border-tabla(colspan=3) <b>Herraje</b> 
          td(colspan=9) En equinos, revisar y mantener las herraduras y los cascos. 
        tr
          td.text-center.border-tabla(colspan=3) <b>Identificación</b> 
          td(colspan=9) Marcaje y etiquetado de individuos. 
        tr
          td.text-center.border-tabla(colspan=3) <b>Alimentación </b> 
          td(colspan=9) Todas las actividades relacionadas con la nutrición de los animales: preparar raciones, disponer el alimento. 
        tr
          td.text-center.border-tabla(colspan=3) <b>Zootécnicas</b> 
          td(colspan=9) Son prácticas comunes que se realizan básicamente para facilitar el trabajo con los animales, evitar que se causen daño entre ellos o mejorar los parámetros productivos. Entre estas prácticas están: destete, castración, descorne, ordeño (bovinos); descole y descolmille (cerdos); corte de pezuñas, corte de cola, esquilado (ovinos y caprinos); corrección del pico (si es estrictamente necesario y bajo supervisión), sacrificio humanitario (aves de corral). 
        
    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-lg-6.col-10
        img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img17.png")
      .col-lg-6.col-12
        .cajon.color-acento-contenido.p-4.mb-3
          p.mb-0 Todas las actividades de manejo animal se deben realizar por parte de personal formado y calificado, de tal forma que se garantice el bienestar del animal sin causarle ningún tipo de angustia o sufrimiento. Cada una de las especies tiene sus propias características, por lo que se debe diseñar un plan de manejo que esté acorde con sus necesidades y les brinde la mejor atención. 
        p.mb-0 En todas las prácticas de manejo de los animales, se deben incluir los criterios de bienestar animal establecidos por la OIE (Organización Mundial de Sanidad Animal) a fin de evitar dolor, estrés, angustia, sufrimiento, miedo o todo aquello que pueda ser entendido como una acción de maltrato (Instituto Colombiano Agropecuario, 2020). 
      
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Bienestar

    .fondo3.mb-4
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-9.col-12
          .row.justify-content-center.mb-4
            .col-lg-8.col-12
              p.mb- El bienestar animal es un término relativamente nuevo en los procesos productivos pecuarios, se relaciona con:
              div.mb-lg-0.mb-3.p-4(style="background-color:#e1e4a8") la calidad de vida de los animales que hacen parte de este tipo de explotaciones e incluye la generación de acciones a través de las cuales se les brinde a estos un trato ético que optimice su salud, la producción y mejore los parámetros de calidad e inocuidad de los productos que se deriven de estas actividades (Ministerio de Agricultura y Desarrollo Rural, 2020).
            .col-lg-4.col-10
              img.mb-0(src="@/assets/curso/tema1/img19.png")

          p.mb-4 De acuerdo con la Resolución 136 de 2020 del Ministerio de Agricultura y Desarrollo Rural, el bienestar animal es el modo en que este afronta las condiciones de su entorno. Se dice que un animal está en buenas condiciones de bienestar si está sano, cómodo, bien alimentado y seguro; si puede expresar formas innatas de comportamiento y si no padece sensaciones desagradables de dolor, miedo o desasosiego. 
          p.mb-lg-0.mb-3 El bienestar animal se basa en cinco principios, los cuales se presentan a continuación :
        .col-lg-3.col-10
          img.mb-0(src="@/assets/curso/tema1/img18.png")

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-8.col-12
          img.mb-0(src="@/assets/curso/tema1/img20.svg")

    p.mb-4 Las Resoluciones 136 y 253 de 2020, del Ministerio de Agricultura y Desarrollo Rural, abordan el tema del bienestar animal y definen los aspectos que se deben tener en cuenta para garantizar esta condición en las principales explotaciones pecuarias, elementos que son transferibles a todos los procesos productivos que involucren el trabajo con animales.
    p.mb-5 Dentro de los elementos que se deben tener en cuenta para garantizar el bienestar animal se encuentran los siguientes:

    .fondo4
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Figura 3.</b> <i>Principales elementos del bienestar animal</i>

      img.mb-0(src="@/assets/curso/tema1/img21.png")
</template>

<script>
export default {
  name: 'Tema1',
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
