<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema9
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Agua
   
    .fondo1
      p.mb-5 En las explotaciones pecuarias, como en cualquier actividad humana, el recurso hídrico es fundamental para el desarrollo de todo tipo de actividades, desde la limpieza y la desinfección de equipos e instalaciones hasta el consumo de los animales y el personal que labora al interior de la empresa. 
  
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Figura 9.</b> <i>Factores a considerar en la gestión del recurso hídrico </i>      

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-8.col-12 
          img.mb-5(src="@/assets/curso/tema9/img01.svg")

      div.subtitulo.py-2.px-3.mb-4(style="width: 154px")
        h4.text-center.mb-0 Normatividad
      p.mb-5 La normatividad existente en relación con el uso racional del agua es bastante amplia, pues este, al igual que los demás recursos naturales, es un bien de interés público que requiere especial protección de parte del Estado. 

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-6.col-12 
          .cajon.color-acento-contenido.p-4.mb-3            
            p.mb-0 Para el establecimiento de cualquier proyecto productivo es importante considerar la normatividad existente en relación con el acceso a este bien, desde el punto de vista jurídico. Además de la normatividad nacional, es importante analizar la reglamentación local en lo relacionado con el Esquema de Ordenamiento Territorial (EOT) o el Plan Básico de Ordenamiento Territorial (PBOT) con el fin de identificar la situación del predio respecto a los usos permitidos y zonas de alto riesgo. 
          p.mb-lg-0.mb-3 Dentro del componente normativo, es igualmente importante revisar la necesidad de tramitar una concesión de aguas la cual otorga el derecho de usar o aprovechar las aguas de uso público para el abastecimiento doméstico, el regadío, la industria o la acuicultura entre otros usos. 

        .col-lg-6.col-8  
          img.mb-0(src="@/assets/curso/tema9/img02.png")

      div.subtitulo.py-2.px-3.mb-4(style="width: 178px")
        h4.text-center.mb-0 Calidad del agua
      p.mb-5 El segundo aspecto que se debe tener en cuenta para el establecimiento de cualquier proyecto productivo agropecuario es el de la calidad del agua, pues en algunas ocasiones esta no es apta para el consumo humano, de los animales o para la agricultura. Los principales parámetros que se deben analizar para determinar la calidad del agua son los siguientes: sabor, color, olor, conductividad, dureza, pH, calidad físico-química y calidad microbiológica. Respecto a las características del agua para consumo humano según la Resolución 2115 de 2007 los parámetros recomendados son los siguientes:

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Tabla 9.</b> <i>Características del agua para consumo humano</i> 

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8.col-12      
          .tabla-b.color-acento-contenido.mb-5            
            table
              tr
                th.br(style="background-color: #a3314f;")
                  h4.mb-0.text-center.text-white Características físicas
                th(style="background-color: #a3314f")
                  h4.mb-0.text-center.text-white Valor máximo aceptable
              tr
                td.text-center.br  Color aparente
                td.text-center 15
              tr
                td.text-center.br  Olor y sabor
                td.text-center Aceptable
              tr
                td.text-center.br  Turbiedad 
                td.text-center 2
              tr
                th.br(style="background-color: #a3314f;")
                  h4.mb-0.text-center.text-white Características químicas
                th(style="background-color: #a3314f")
                  h4.mb-0.text-center.text-white Valor máximo aceptable
              tr
                td.text-center.br Cloro residual
                td.text-center 0,3 – 2,0
              tr
                td.text-center.br pH
                td.text-center 6,5 – 9,0
              tr
                td.text-center.br Carbono orgánico total
                td.text-center 5,0
              tr
                td.text-center.br image.png
                td.text-center 0,1
              tr
                td.text-center.br Nitratos
                td.text-center 10
              tr
                td.text-center.br Alcalinidad total
                td.text-center 200
              tr
                td.text-center.br Cloruros
                td.text-center 250
              tr
                td.text-center.br Aluminio
                td.text-center 0,2
              tr
                td.text-center.br Dureza total
                td.text-center 300
              tr
                td.text-center.br Hierro total
                td.text-center 0,3
              tr
                td.text-center.br Manganeso
                td.text-center 0,1
              tr
                td.text-center.br Sulfatos
                td.text-center 250
              tr
                td.text-center.br Mercurio
                td.text-center 0,001
              tr
                td.text-center.br Cianuro libre y disociable
                td.text-center 0,05
              tr
                th.br(style="background-color: #a3314f;")
                  h4.mb-0.text-center.text-white Características microbiológicas
                th(style="background-color: #a3314f")
                  h4.mb-0.text-center.text-white Valor máximo aceptable
              tr
                td.text-center.br Coliformes totales
                td.text-center 0 UFC/100 cm³
              tr
                td.text-center.br Coliformes fecales
                td.text-center 0 UFC/100 cm³
              tr
                td.text-center.br Escherichia coli
                td.text-center 0
              tr
                td.text-center.br Mesófilos
                td.text-center ≤ 100
          p.mb-0.text-center Nota. Tomada del Ministerio de la Protección Social (2007).
      
      div.subtitulo.py-2.px-3.mb-4(style="width: 130px")
        h4.text-center.mb-0 Demanda
      p.mb-5 Buena parte del éxito de la explotación pecuaria consiste en la identificación de las necesidades de recursos del sistema, pues a partir de allí se dan todos los procesos de planificación de la unidad productiva, por lo que determinar la demanda de agua es una tarea que requiere de tiempo y a la cual se le debe invertir bastante energía. 

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-12 
          .cajon.color-acento-contenido.p-4.mb-3            
            p.mb-0 De acuerdo con el Ideam (2010) la demanda de agua de los sistemas agrícola, acuícola y pecuario ascendió en el año 2008 a 24.190 millones de metros cúbicos que equivalen al 67,4% del consumo total de agua en el país, lo cual pone de manifiesto la importancia que tiene este recurso para el desarrollo de las labores productivas. Del total del consumo de agua nacional de estos tres sectores el componente pecuario fue responsable del consumo de 2.220 millones de metros cúbicos. 
          p.mb-lg-0.mb-3 De acuerdo con el mismo documento, el consumo de agua de los principales sistemas pecuarios, en las fases de cría y levante, es el siguiente:

        .col-lg-6.col-8  
          img.mb-0(src="@/assets/curso/tema9/img03.png")    

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8.col-12      
          .tabla-b.tabla2.color-acento-contenido.mb-5            
            table
              tr
                th.b3(style="background-color: #a3314f")
                  h4.mb-0.text-center.text-white Especie
                th.b3(style="background-color: #a3314f")
                  h4.mb-0.text-center.text-white Litros
                th(style="background-color: #a3314f")
                  h4.mb-0.text-center.text-white Referencia
              tr
                td.b1 Pollos y gallinas
                td.b1.text-center 240  
                td.b2.text-center(rowspan=4) Litros / 100 animales  
              tr
                td.b1 Patos
                td.b1.text-center   370 
              tr
                td.b1 Pavos
                td.b1.text-center650 
              tr
                td.b1 Codornices
                td.b1.text-center   58 
              tr
                td.b1 Cerdas madres
                td.b1.text-center   18
                td.b2.text-center(rowspan=9) Litros / 100 animales
              tr
                td.b1 Cerdas reposición
                td.b1.text-center18
              tr
                td.b1 Cerdos ceba
                td.b1.text-center8
              tr
                td.b1 Cerdos levante
                td.b1.text-center 5
              tr
                td.b1 Reproductores
                td.b1.text-center 19
              tr
                td.b1 Bovinos 0 – 12 meses
                td.b1.text-center 20 – 30 
              tr
                td.b1 Bovinos 12 – 24 meses
                td.b1.text-center 45 
              tr
                td.b1 Bovinos 24 – 36 
                td.b1.text-center 80 – 110 
              tr
                td.b1 Mayores a 36 meses
                td.b1.text-center 80 – 115 
          p.mb-0.text-center Nota. Tomada de Ideam (2010).   
      p.mb-5 Con base en los parámetros descritos anteriormente, es posible establecer la demanda de agua aproximada para el proyecto productivo que se desee implementar, con lo cual es posible analizar su viabilidad y las adecuaciones necesarias para asegurar la disponibilidad permanente de este importante recurso.   

    .fondo2
      div.subtitulo.py-2.px-3.mb-4(style="width: 175px")
        h4.text-center.mb-0 Disponibilidad

      .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-9.col-12
            .row.justify-content-center.mb-4
              .col-lg-8.col-12.d-flex
                .cajon.color-acento-contenido.d-flex.align-items-center.p-4.mb-lg-0.mb-3
                  p.mb-0 El cuarto elemento que se debe considerar al momento de planificar una explotación pecuaria es el de la disponibilidad del agua, pues cualquier iniciativa productiva demanda un mínimo necesario para poderla llevar a cabo. Para determinar la disponibilidad de agua, es posible realizar aforos en los cuerpos de agua de la unidad productiva, los cuales dan una idea general de la cantidad de litros por minuto de los que se dispondría para garantizar este líquido vital a los animales y al personal de la granja. Para analizar la disponibilidad de agua se recomienda lo siguiente:               
              .col-lg-4.col-10
                img.mb-0(src="@/assets/curso/tema9/img04.png")                    
            ul.lista-ul--color.mb-lg-0.mb-3
              li.mb-4
                i.fas.fa-check
                | Revisar la distribución de las precipitaciones en la región los cuales se pueden consultar fácilmente en la página del Ideam u otras páginas especializadas en el tema. 
              li.mb-4
                i.fas.fa-check
                | Visitar la unidad productiva en diferentes épocas del año para determinar una media de la disponibilidad de agua y de los caudales de fuentes superficiales. 
              li.mb-4
                i.fas.fa-check
                | Inspeccionar la disponibilidad de fuentes de agua adicionales como reservorios, acueductos, pozos o aljibes. Referente a las instalaciones de almacenamiento de agua es importante tomar las medidas de capacidad y realizar un inventario de su estado, para identificar si hay lugar a reparaciones locativas.
              li.mb-4
                i.fas.fa-check
                | Verificar pendientes, accidentes geográficos, distancias entre las instalaciones y las fuentes de agua y estado de tuberías de conducción para identificar si es necesario implementar sistemas de bombeo o si es posible utilizar la gravedad. 
              li.mb-0
                i.fas.fa-check
                | En lo posible, tomar una muestra de agua para realizar un análisis completo de agua para identificar sus propiedades físico-químicas y microbiológicas. 

          .col-lg-3.col-8
            img.mb-0(src="@/assets/curso/tema9/img05.png")

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema9/img06.png')})`}"
        )
        .bloque-texto-g__texto.p-4.py-5
          h4 Protección del agua 
          br
          br
          p.mb-0  En todo proceso productivo es necesario establecer acciones enfocadas en la protección y cuidado de las fuentes hídricas, ya que los impactos que tienen las actividades humanas sobre el entorno son cada vez más evidentes. Igualmente, en todos los procesos que tengan lugar al interior de la unidad productiva, se deben definir protocolos para hacer un uso racional de este líquido y establecer mecanismos para reducir los niveles de contaminación de las aguas servidas que se generen en el desarrollo de las actividades pecuarias. 
</template>

<script>
export default {
  name: 'Tema9',
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
