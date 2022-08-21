<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema8
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Filtros sanitarios  

    .fondo1
      .row.justify-content-center.mb-0(data-aos="fade-left")
        .col-lg-6.col-8  
          img.mb-lg-0.mb-3(src="@/assets/curso/tema8/img01.png")
        .col-lg-6.col-12                     
          .cajon.color-acento-contenido.p-4.mb-4            
            p.mb-0 De acuerdo con la Resolución 20033 de 2016 del Instituto Colombiano Agropecuario, un filtro sanitario es una instalación ubicada antes de ingresar a las áreas de producción, que cuenta con un área para cambio de ropa del personal, un sistema para la desinfección del calzado y un lavamanos provisto con agua potable, jabón, solución desinfectante y elementos higiénicos para el secado de manos. 
          p.mb-3 El filtro sanitario debe:
          .ms-4.ul.lista-ul--color
            li.mb-0
              i.fas.fa-check
              | Estar ubicado en el sitio de ingreso a las áreas de producción.
            li.mb-0
              i.fas.fa-check
              | Estar construido con materiales que faciliten su aseo y desinfección.
            li.mb-0
              i.fas.fa-check
              | Contar con vestier, sanitario y lavamanos con capacidad para el número trabajadores.
            li.mb-0
              i.fas.fa-check
              | Tener, en lo posible, un área de ingreso (área sucia), un área intermedia (ducha) y un área limpia donde se encuentre la dotación usará el operario dentro de la explotación productiva. 

      Separador
    
      #t_8_1.titulo-segundo.color-acento-contenido
          h2 8.1 Clases y características

      .row.justify-content-center(data-aos="fade-right")
        .col-lg-6.col-12        
          p.mb-4 Los filtros sanitarios cumplen una función bastante importante al evitar el paso de agentes contaminantes externos hacia el interior de la unidad productiva e, igualmente, previenen la contaminación entre las zonas de trabajo dentro de la explotación pecuaria.              
          .cajon.color-acento-contenido.p-4.mb-lg-0.mb-3          
            p.mb-0 Estos filtros pueden emplear una o varias barreras para impedir el paso de los agentes contaminantes y poseer diversos niveles de complejidad, de acuerdo con el tipo de explotación, la especie pecuaria y el destino de la producción. Por ejemplo, los filtros sanitarios de las explotaciones dedicadas a la producción de material genético tienen muchas más barreras que aquellos instalados en las explotaciones de pollo de engorde o producción de huevo. 
        .col-lg-6.col-8  
          img(src="@/assets/curso/tema8/img02.png")
    

    Separador

    .fondo2
      #t_8_2.titulo-segundo.color-acento-contenido
          h2 8.2 Equipos

      .row.justify-content-center(data-aos="fade-right")
        .col-lg-6.col-12    
          p.mb-4 Para la construcción de los filtros sanitarios se pueden emplear desde equipos muy sencillos con un nivel muy bajo de tecnificación hasta sistemas complejos que emplean de forma simultánea dos o más mecanismos de limpieza y desinfección. En el caso de las explotaciones porcícolas, por ejemplo, la normatividad recomienda emplear duchas, lavamanos, vestier, elementos para secar las manos y sanitario. Sin embargo, algunos sistemas más sencillos solo emplean pediluvios, lavamanos o puntos de sanitización de manos. Entre los equipos que a menudo se utilizan en los filtros sanitarios están los siguientes:
          img.mb-lg-0.mb-3(src="@/assets/curso/tema8/img03.png")
        .col-lg-6.col-12    
          .titulo-sexto.color-acento-contenido(data-aos="fade-left")
            p.titulo <b>Figura 10.</b> <i>Elementos y equipos más empleados en filtros sanitarios. </i>      
          SlyderC.mb-0(:datos="datosSlyder")
    
      Separador

    .fondo3
      #t_8_3.titulo-segundo.color-acento-contenido
        h2 8.3 Protocolos

      p.mb-5 Un protocolo es un conjunto de medidas, instrucciones o procedimientos que orientan y controlan cómo se deben llevar a cabo determinadas actividades al interior de la unidad pecuaria. En el caso de la bioseguridad, estos protocolos permiten al personal organizar en un orden lógico las actividades que conllevarán a la mitigación de los riesgos asociados al ingreso de agentes patógenos. Dentro de los protocolos para la implementación de los filtros sanitarios se deben incluir disposiciones que eviten la entrada y dispersión de organismos potencialmente peligrosos.
        
      SlyderF.mb-5(columnas="col-12 col-xl-4")
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema8/img13.svg' alt='AvatarTop')
          h4.text-center 1. Filtro sanitario de ingreso
          p.text-center Definir la ubicación del filtro sanitario de ingreso a la unidad productiva.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema8/img14.svg' alt='AvatarTop')
          h4.text-center 2. Filtros sanitarios internos
          p.text-center Definir la ubicación y el número de filtros sanitarios internos para evitar la propagación de patógenos al interior de la unidad productiva.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema8/img15.svg' alt='AvatarTop')
          h4.text-center 3. Plano general
          p.text-center Establecer en un plano la ubicación de los filtros sanitarios dentro de la unidad productiva. 
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema8/img16.svg' alt='AvatarTop')
          h4.text-center 4. Equipos y sustancias desinfectantes
          p.text-center Determinar el tipo de equipos que estarán en cada filtro y las sustancias desinfectantes que se utilizarán con su ficha técnica correspondiente. 
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema8/img17.svg' alt='AvatarTop')
          h4.text-center 5. Protocolos de limpieza y desinfección 
          p.text-center Establecer los procedimientos de limpieza y desinfección para el paso por cada uno de los filtros sanitarios de la unidad productiva. 
        .tarjeta.color-acento-botones.p-4 
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema8/img18.svg' alt='AvatarTop')
          h4.text-center 6.Responsables 
          p.text-center Identificar los responsables de verificar el funcionamiento de los filtros sanitarios y del diligenciamiento de los registros de ingreso. 

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Lavabotas',
        imagen: require('@/assets/curso/tema8/img04.png'),
      },
      {
        titulo: 'Pediluvios',
        imagen: require('@/assets/curso/tema8/img05.png'),
      },
      {
        titulo: 'Lavamanos automático',
        imagen: require('@/assets/curso/tema8/img06.png'),
      },
      {
        titulo: 'Dispensador de toallas',
        imagen: require('@/assets/curso/tema8/img07.png'),
      },
      {
        titulo: 'Secador de manos automático',
        imagen: require('@/assets/curso/tema8/img08.png'),
      },
      {
        titulo: 'Arco sanitario',
        imagen: require('@/assets/curso/tema8/img09.png'),
      },
      {
        titulo: 'Rodiluvio',
        imagen: require('@/assets/curso/tema8/img10.png'),
      },
      {
        titulo: 'Filtros sanitarios integrados',
        imagen: require('@/assets/curso/tema8/img11.png'),
      },
      {
        titulo: 'Sistema de higiene integrado',
        imagen: require('@/assets/curso/tema8/img12.png'),
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
