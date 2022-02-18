<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 PreProducción

    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-7.d-flex.align-items-center
        div
          p.mb-4 Todo proyecto nace con la necesidad de resolver, generar o ejecutar una idea en particular. Este momento de creación es llamado preproducción y comprende en este caso la creación de diferentes componentes como el guion y el storyboard. <b class="color-1">Esta fase permite reconocer cuáles herramientas y recursos serán necesarios, para el desarrollo del proyecto en general.</b> 
          p.mb-0 La siguiente figura 1 presenta los pasos a seguir en preproducción, de un proyecto gráfico, desde el inicio del proyecto hasta las decisiones y acciones tomadas previas a su ejecución. 
      .col-lg-5.d-flex.align-items-center
        figure.mb-0
          img(src='@/assets/curso/tema4/img01.png') 

    figure.mb-5
      img(src='@/assets/curso/tema4/img02.png') 

    p.mb-5 Los pasos indicados en el esquema facilitan la comprensión de los requerimientos del proyecto, promoviendo el proceso creativo, la colaboración y trabajo en equipo, a continuación  se conocerá la descripción de cada uno de ellos.

    SlyderE(indicadores="derecha")
      .row.mb-0
        .col-lg-6
          h3.mb-5.color-1 Necesidad
          p.mb-0 La necesidad se encuentra enmarcada en la carencia o falta de algo, a partir de allí crear un nuevo proyecto editorial respondiendo a los interrogantes: <font class="color-1">¿qué?, ¿para quién?, ¿cuándo?, ¿cuánto?, ¿cómo?, ¿en qué medio?, etc.</font>
        .col-lg-6
          figure(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema4/img03.png') 
      .row.mb-0
        .col-lg-6
          h3.mb-5.color-1 Requerimientos
          p.mb-0 Impuestos a partir de las necesidades identificadas, y que son establecidas por parte del cliente, contexto, política, editorial u otra que demande el proyecto en particular. 
        .col-lg-6
          figure(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema4/img04.png') 
      .row.mb-0
        .col-lg-6
          h3.mb-5.color-1 Célula
          p.mb-0 Equipo de expertos interdisciplinarios para el desarrollo del proyecto en cada etapa de su diseño, ejecución y validación.
        .col-lg-6
          figure(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema4/img05.png') 
      .row.mb-0
        .col-lg-6
          h3.mb-5.color-1 Sesiones creativas
          p.mb-0 Las sesiones creativas son fundamentales para el desarrollo de nuevas ideas, estrategias, metodologías y puesta en marcha del proyecto. Allí confluye todo el equipo de expertos y nacen las mejores ideas. Para que estas sesiones sean productivas, es necesario implementar un planning con reuniones periódicas y actividades definidas para cada persona o grupos de trabajo. Una estrategia que se puede implementar es la lluvia de ideas.
        .col-lg-6
          figure(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema4/img06.png') 
      .row.mb-0
        .col-lg-6
          h3.mb-5.color-1 Brainstorming o lluvia o tormenta de ideas
          p.mb-0 Esta herramienta generalmente es utilizada cuando se busca llegar a consensos o tomar decisiones en grupo.<br><br>El brainstorming potencia los procesos creativos, y la generación de alternativas originales que ayudan en la resolución de una situación o problema.
        .col-lg-6
          figure(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema4/img07.png') 
      .row.mb-0
        .col-lg-6
          h3.mb-5.color-1 Software
          p.mb-0 Los programas y aplicaciones son de vital importancia en la creación de cualquier proyecto digital. Es necesario contar con programas de diseño, interfaces y el manejo de plataformas y formatos requeridos, para la ejecución de cada proyecto editorial.
        .col-lg-6
          figure
            img(src='@/assets/curso/tema4/img08.png') 
      .row.mb-0
        .col-lg-6
          h3.mb-5.color-1 Validación
          p.mb-4 La validación de un proyecto consiste en la aprobación y verificación de todos los pasos requeridos para la ejecución del mismo. Por lo general esta validación está aprobada por el cliente, un director de arte o diseño. 
          p.mb-4 La validación tiene las siguientes características:
          ul.lista-ul--color                  
            li 
              i.fas.fa-square 
              | Se mide por actividades estipuladas a cada equipo.
            li 
              i.fas.fa-square 
              | Valida plazos en los tiempos de ejecución de las tareas y labores estipuladas.
            li 
              i.fas.fa-square 
              | Determina la calidad de los componentes y las entregas ejecutadas.
            li 
              i.fas.fa-square 
              | Tiene en cuenta el feedbacks o retroalimentación de los clientes con la empresa y de los integrantes de los equipos de trabajo.
        .col-lg-6
          figure(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema4/img09.png') 
      .row.mb-0
        .col-lg-6
          h3.mb-5.color-1 Producción
          p.mb-0 La pre producción se puede decir que finaliza en este paso, es acá cuando la planificación y todos los pasos anteriores conjugan para que se puedan hacer las creaciones pactadas. Acá se establecen las últimas acciones para dar inicio a la fase de producción, y se prepara lo último para establecer y revisar los cronogramas, para tener buenos resultados.
        .col-lg-6
          figure(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema4/img10.png')     

    Separador

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
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
