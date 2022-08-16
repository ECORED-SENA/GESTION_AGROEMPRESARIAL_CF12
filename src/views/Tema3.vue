<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema3

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de producción 
  
    .fondo1.mb-0
      p.mb-5 Cada una de las explotaciones que tienen lugar en los entornos rurales y que utilizan animales para la generación de ingresos, o con fines de autoabastecimiento, reciben el nombre de sistemas productivos. No existe una cifra exacta sobre la cantidad de sistemas productivos agropecuarios que existen en el mundo debido a que estos son tan diversos como las especies animales y vegetales que se utilizan para la alimentación y la industria. A grandes rasgos los siguientes son los dos sistemas de producción más comunes:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-8.col-12
          img(src="@/assets/curso/tema3/img01.svg")

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-3.col-10
          img.mb-lg-0.mb-3(src="@/assets/curso/tema3/img02.png")
        .col-lg-9.col-12
          .row.justify-content-center.mb-4
            .col-lg-4.col-10
                img.mb-lg-0.mb-3(src="@/assets/curso/tema3/img03.png")
            .col-lg-8.col-12    
              .cajon.color-acento-contenido.p-4.mb-0
                p.mb-0 Los sistemas de producción agrícolas son aquellos en los cuales se utilizan especies vegetales para la producción de alimentos y materias primas, tales como el café, palma de aceite, el arroz, yuca o caña de azúcar, entre otros. Por su parte los sistemas de producción pecuaria son aquellos en los que la especie central es una especie animal, como el caso del ganado bovino, ganado ovino, caprino, peces o aves. Incluso existen algunos sistemas productivos donde en un mismo espacio se pueden cultivar especies animales y vegetales, como es el caso de los sistemas silvopastoriles. 

          p.mb-lg-0.mb-3 La principal clasificación de los sistemas productivos agropecuarios se da con el tipo de explotación que se desarrolla, por lo que se tienen <b style="color:#A3314F">sistemas productivos intensivos, semintensivos y extensivos</b>. Estos se aplican para diversas especies pecuarias, desde las explotaciones de ganado bovino hasta los montajes con especies menores. <b style="color:#A3314F">Algunas de sus principales características son las siguientes</b>:
          
      .tema3.tarjetas1.mb-5(data-aos="fade-left")
        .row.justify-content-center.align-items-center        
              .col-12.col-lg-4
                .TFcontainer.mb-3.p-0
                  img.TFimage(src='@/assets/curso/tema3/img04.png')
                  .TFoverlay.p-4.pt-5
                    h4 1. Sistemas extensivos
                    p.mb-0 Cría de animales en grandes extensiones de tierra. Son sistemas con baja demanda de mano de obra, equipos e insumos. Se caracterizan por sus bajos costos de producción. Los tiempos para el sacrificio de los animales son mucho mayores que con los otros sistemas. Generalmente poseen una baja rentabilidad. En especies menores se denominan también sistemas de traspatio. 
              .col-12.col-lg-4
                .TFcontainer.mb-3
                  img.TFimage(src='@/assets/curso/tema3/img05.png')
                  .TFoverlay.p-4.pt-5
                    h4 2. Sistemas semintensivos
                    p.mb-0 Es uno de los más empleados en el mundo entero. Los animales son criados y alimentados en campo pero además reciben un refuerzo alimenticio o una suplementación. Utilizan una mayor cantidad de mano de obra y recursos que los sistemas extensivos. Por lo general se hace necesario el uso de instalaciones para el resguardo y manejo de los animales. 
              .col-12.col-lg-4
                .TFcontainer.mb-3
                  img.TFimage(src='@/assets/curso/tema3/img06.png')
                  .TFoverlay.p-4.pt-5
                    h4 3. Sistemas intensivos
                    p.mb-0 Son sistemas altamente dependientes de la tecnología y tienen una demanda considerable de recursos y mano de obra. Generalmente requieren de grandes inversiones para su instalación. Los niveles de rentabilidad en este tipo de explotaciones a menudo son  mayores. Se emplean las mayores densidades de animales por metro cuadrado posible, siempre respetando el bienestar animal. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/img07.png')})`}"
        )
        .bloque-texto-g__texto.p-4.py-5
          h4 Sistemas productivos y bioseguridad
          br
          br
          p.mb-0  Independientemente del sistema de producción que se emplee, es necesario implementar los protocolos de bioseguridad para la protección de los animales tanto de la unidad productiva como de las granjas circundantes. Generalmente, en los sistemas de producción extensivos o traspatio los productores tienden a ser menos rigurosos con los parámetros de bioseguridad, por lo que es importante que las recomendaciones relacionadas con la protección de la salud de los animales sean implementadas independientemente de esta condición. 
</template>

<script>
export default {
  name: 'Tema3',
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
