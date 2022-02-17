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
      .row.justify-content-center
        .col-lg-1
        .col-lg-9.p-5          
          p.mb-0.mt-2 La diagramación en el diseño es la encargada de optimizar y organizar un espacio con una cantidad de elementos o de contenidos como lo pueden ser textos, imágenes, fotografías, ilustraciones, audiovisuales y demás elementos necesarios para una publicación ya sea impresa o digital, en el siguiente <b style="color: #F57C00">recurso se amplían elementos claves que se tendrán en cuenta para la conceptualización y metodologías EPUB.</b>
        .col-lg-2

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
