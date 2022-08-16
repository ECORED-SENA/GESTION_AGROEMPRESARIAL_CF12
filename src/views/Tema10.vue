<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema10
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Normativa seguridad y salud en el Trabajo 
   
    Separador

    #t_10_1.titulo-segundo.color-acento-contenido
      h2 10.1 Características

    Separador

    #t_10_2.titulo-segundo.color-acento-contenido
      h2 10.2 Características

    Separador

    #t_10_3.titulo-segundo.color-acento-contenido
      h2 10.3 Características

    Separador

    #t_10_4.titulo-segundo.color-acento-contenido
      h2 10.4 Características

    Separador
  
</template>

<script>
export default {
  name: 'Tema10',
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
