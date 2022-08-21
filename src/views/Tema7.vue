<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema7
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Control de plagas y vectores  

    .fondo1(data-aos="fade-left")
      p.mb-5 Un vector es un elemento vivo o inerte que lleva consigo alguna contaminación no usual, en el siguiente video se verá a detalle esta información: 
      figure
        .video        
          iframe(width="972" height="547" src="https://www.youtube.com/embed/7e3ALeJzGs0" title="Bioseguridad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      Separador 

    #t_7_1.titulo-segundo.color-acento-contenido
        h2 7.1 Medidas de prevención

    .fondo2
      img.mb-0(src="@/assets/curso/tema7/img01.svg")

    Separador

    #t_7_2.titulo-segundo.color-acento-contenido
        h2 7.2 Métodos de control

    p.mb-5 Además de las medidas de prevención, es importante diseñar estrategias que permitan hacer un manejo eficiente e integrado de los problemas de plagas, para lo cual es importante conocer sus hábitos, su comportamiento y su biología. En el siguiente cuadro se presentan algunos de los métodos más empleados en el manejo de plagas en explotaciones pecuarias. 

    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-lg-2.col-6.d-flex.justify-content-center
            img.mb-lg-0.mb-3(style="width:85px" src="@/assets/curso/tema4/img04.svg")
          .col-10
            .row.justify-content-center.align-items-center
              .col-lg-9.col-12.d-flex.align-items-center
                div
                  h4.mb-lg-0.mb-3 Se recomienda ver el Manual de control de plagas en avicultura de Fenavi (2020)                   
              .col-lg-3.col-6.d-flex.justify-content-center
                a.boton.color-acento-botones(style="width:125px" :href="obtenerLink('downloads/Cartilla_Manejo_Integrado_plagas_Mosca_Junio2020.pdf')" target="_blank")
                  span(style="color:#12263F") Descargar
                  i.fas.fa-file-download(style="color:#12263F")

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Tabla 7.</b> <i>Principales métodos de control de plagas en industrias pecuarias </i>

    .tabla-b.color-acento-contenido(data-aos="fade-right")
      table
        tr
          th.br(style="background-color: #ffcd0d;")
            h4.mb-0.text-center Tipo de control
          th.br(style="background-color: #ffcd0d")
            h4.mb-0.text-center Características    
          th.br(style="background-color: #ffcd0d;")
            h4.mb-0.text-center Ventajas  
          th(style="background-color: #ffcd0d;")
            h4.mb-0.text-center Desventajas  
        tr
          td.br.text-center <b>Control biológico</b>
          td.br Se utilizan enemigos naturales de las plagas para reducir los niveles de infestación.
          td.br Protección del entorno y la biodiversidad.<br>Alta sostenibilidad
          td Alto costo de inversión inicial.
        tr
          td.br.text-center <b>Control etológico</b>
          td.br Se realiza con base en los comportamientos naturales de la plaga. Atrayentes, cebos tóxicos.
          td.br Protección del entorno y la biodiversidad.<br>Baja inversión inicial.<br>100 % natural.
          td Bajos niveles de efectividad.
        tr
          td.br.text-center <b>Control químico</b>
          td.br Utilización de compuestos de síntesis química para controlar los organismos plaga.
          td.br Alta efectividad.<br>Control eficiente en términos de tiempo.
          td Contaminación del entorno.<br>Daños colaterales en organismos benéficos.

        tr
          td.br.text-center <b>Control físico</b>
          td.br Funcionan mediante la captura de los individuos o su eliminación al alterar las condiciones de su entorno. Trampas, riego por aspersión, destrucción de hábitats.
          td.br Protección de suelos y aguas.<br>100 % natural.<br>Aplicable en cualquier época del año.
          td Mayor inversión de tiempo para realizar controles.
        tr
          td.br.text-center <b>Control cultural</b>
          td.br Implementación de prácticas que modifican el entorno de las especies plaga; control de malezas, destrucción de hábitats de plagas, volteo y compostaje de excretas.
          td.br Bajo costo.<br>100 % natural.<br>Se puede realizar en cualquier momento.
          td Demanda mayor cantidad de mano de obra.
    Separador

    #t_7_3.titulo-segundo.color-acento-contenido
        h2 7.3 Periodicidad de aplicación
    p.mb-5 Uno de los principales aspectos que se debe tener en cuenta para el manejo integrado de las plagas de las explotaciones pecuarias, es el ciclo de vida de los individuos, pues no en todas las etapas de desarrollo están en capacidad de causar afectaciones a los animales y materias primas. Con base en esta información, es posible identificar las épocas más propicias para desarrollar las medidas de control. 

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.titulo <b>Tabla 8.</b> <i>Periodicidad de las actividades de manejo de plagas </i>
  
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-right")
      table
        tr
          th.br(style="background-color: #a3314f;")
            h4.mb-0.text-center.text-white Tipo de control
          th(colspan=3 style="background-color: #a3314f")
            h4.mb-0.text-center.text-white Características             
        tr          
          td.br.text-center Control biológico
          td(colspan=3) Liberación de biocontroladores cada 15 días inicialmente. Luego la frecuencia se puede ampliar hasta los dos o tres meses. 
        tr          
          td.br.text-center Control etológico
          td(colspan=3) Permanente.
        tr          
          td.br.text-center Control químico
          td(colspan=3) Aplicaciones cada 15 días en horas de poca actividad biológica. Temprano en la mañana o al final de la tarde. 
        tr          
          td.br.text-center Control físico y cultural
          td(colspan=3) Permanente.

    .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-6.col-12                     
          .cajon.color-acento-contenido.p-4.mb-4            
            p.mb-0 En el caso de los insectos, la implementación periódica de medidas de manejo es importante para romper los ciclos de vida y de esta forma reducir significativamente las poblaciones. Igualmente, en el caso de los roedores, la combinación de la utilización de cebos tóxicos con la destrucción de los hábitats propicios para su reproducción es una forma altamente eficiente de combatir el problema.
          p.mb-lg-0.mb-3 Para el manejo químico de las infestaciones de plagas de insectos, es importante rotar los ingredientes activos, ya que si se usan frecuentemente los mismos compuestos químicos es posible que con el tiempo se genere resistencia.
        .col-lg-6.col-8  
          img.mb-0(src="@/assets/curso/tema7/img02.png")
</template>

<script>
export default {
  name: 'Tema7',
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
