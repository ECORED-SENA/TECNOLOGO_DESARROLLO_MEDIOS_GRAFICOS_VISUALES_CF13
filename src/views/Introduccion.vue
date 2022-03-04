<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero        
        span
          i.fas.fa-info
      h1 Introducción

    .introduccion-div1.mb-5
      .row.justify-content-center.align-items-center        
        .col-lg-8.order-lg-2.order-sm-2
          p.mb-0.mt-2 La diagramación en el diseño es la encargada de optimizar y organizar un espacio con una cantidad de elementos o de contenidos como lo pueden ser textos, imágenes, fotografías, ilustraciones, audiovisuales y demás elementos necesarios para una publicación ya sea impresa o digital, en el siguiente <b>recurso se amplían elementos claves que se tendrán en cuenta para la conceptualización y metodologías EPUB.</b>
        .col-lg-1.col-md-3.order-lg-1.order-sm-1.d-flex.justify-content-center
          figure.introduccion-cubo.mb-0
            img(src='@/assets/curso/introduccion/img01.svg') 
        .col-lg-3.col-md-9.order-lg-3.order-sm-3.d-flex
          figure.introduccion-imagen.mb-0.d-flex
            img(src='@/assets/curso/introduccion/img02.png')

    figure
      .video
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/t0wvhkYZ-4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
