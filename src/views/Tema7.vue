<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Diagramación de la arquitectura	

    .row.justify-content-center.mb-5
      .col-lg-4.d-flex
        p.mb-0 La diagramación o maquetación, es el proceso mediante el cual se organizan textos, imágenes, en algunos casos medios audiovisuales, entre otros, dentro de un espacio determinado. <b >Estos elementos pueden ser organizados para productos impresos o electrónicos, como libros, revistas, diarios, entre otros.</b>  
      .col-lg-3(style="background-color:#FFF4C6")
        figure.mb-0
          img(src='@/assets/curso/tema7/img01.png') 
      .col-lg-5.d-flex.align-items-center.p-4(style="background-color:#E2F4F6")
        p.mb-0 En este paso es de importancia utilizar los flujogramas que ayudan a maquetar la representación de la estructura, partes, funcionamiento y comportamiento en general, del sitio a desarrollar, perfilado por una línea de diseño, basado en la organización y la estructuración visual de sus componentes.

    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1   Diseño, guion, <i>Storyboard</i>     

    .row.justify-content-center.mb-0(data-aos="zoom-in-up")
      .col-lg-6
        p.mb-4 El diseño en herramientas digitales, se basa en los pilares de la comunicación visual y el uso de herramientas de medios digitales. Se identifica como un elemento editorial de carácter creativo, el cual  no solo busca generar material de lectura, sino también incluir objetos visuales que facilitan y dinamizan la consulta de la información, a fin de comunicar y transmitir un mensaje claro y específico, para esto se debe tener en cuenta los siguientes factores que ayudan a simplificar y tener éxito en una publicación de carácter digital, a nivel comercial, y  ajustándose a las tendencias influenciadas por el diseño y la tecnología.
        p.mb-0 <b>Los elementos que se deberán tener en cuenta y que son parte fundamentas en el diseño, el cual será un elemento identificador en todos los proyectos a realizar son los siguientes:</b>
      .col-lg-6
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img02.png') 
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5%  ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%  ; right: ; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: -5%  ; right:  ; top: ; bottom: 15% ; width: 60px ")      

    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
            h3.mb-0.me-3 Tipografía
          


    p.mb-4 El texto se convierte en un recurso muy importante, en entornos digitales es importante tener presentes las siguientes características:             

    .row.justify-content-center.mb-5
      .col-lg-10
        .tema-7-info
          ImagenInfografica.color-acento-contenido.mb-5
            template(v-slot:imagen)
              figureya
                img(src='@/assets/curso/tema7/img26.png')               

            .tarjeta.color-acento-contenido.p-3(x="48%" y="19.5%" numero="1")            
              p.mb-0 Buen tamaño, que sea legible.       

            .tarjeta.color-acento-contenido.p-3(x="13.3%" y="41.8%" numero="2")            
              p.mb-0 Es importante crear contenidos con tipografías que sean claras, fáciles de leer y conseguir en la red, para que el consumidor no tenga dificultades.

            .tarjeta.color-acento-contenido.p-3(x="42.5%" y="48%" numero="3")            
              p.mb-0 El texto se convierte en un recurso muy importante en entornos digitales, debe ser adaptativo y su imagen comunicar el contenido de la publicación, la estética del sitio. 

            .tarjeta.color-acento-contenido.p-3(x="48%" y="77%" numero="4")            
              p.mb-0 La combinación de tipografías acorde al diseño. 

            .tarjeta.color-acento-contenido.p-3(x="70%" y="70%" numero="5")            
              p.mb-0 Considerar también los fondos sobre los cuales se van a situar los textos, ya que pueden dificultar la lectura y legibilidad, por eso será el color el siguiente tema. 

            .tarjeta.color-acento-contenido.p-3(x="85%" y="47%" numero="6")            
              p.mb-0 Las letras más usuales son Helvética, Calibri, Verona.  Evitar el uso de muchos elementos en su construcción, ya que dificultaría la lectura de los usuarios. 

    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
            h3.mb-0.me-3 Color
          

    p.mb-5 El color es uno de los elementos principales de cualquier tipo de diseño, a continuación algunos elementos para seleccionarlo. 

    .tema-7
      .tarjeta.tarjeta--azul.p-4.mb-5    
        SlyderA(tipo="b")
          .row.align-items-center
            .col-lg-6
              h4.mb-4.color-1 Color
              p.mb-4 El color puede ayudar a generar mayores ventas, ya que su impacto genera expectativa e interés. 
              p.mb-0 El color es uno de los elementos principales de cualquier tipo de diseño, ya que transmite, atrae y crea sensaciones en el espectador, para generar un buen impacto visual. 
            .col-lg-5
              .imagen-adornos-flotantes
                img(src='@/assets/curso/tema7/img04.png') 
                .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5%  ; top: ; bottom: 0% ; width: 90px ")
                .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 8%  ; right: ; top:12% ; bottom: ; width: 60px ")
                .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: -0%  ; right:  ; top: ; bottom: 3% ; width: 60px ")      
            .col-lg-1
          .row.align-items-center
            .col-lg-6
              h4.mb-4.color-1 Color
              p.mb-4 En la elección del color se debe tener en cuenta también la llamada psicología del color, que permite por medio de bases científicas, relacionar el color con sensaciones, sentimientos y emociones que generan en el individuo. 
              p.mb-0 La elección del color se puede realizar con base a las leyes compositivas y combinación de los mismos.
            .col-lg-5
              .imagen-adornos-flotantes
                img(src='@/assets/curso/tema7/img04.png') 
                .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5%  ; top: ; bottom: 0% ; width: 90px ")
                .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 8%  ; right: ; top:12% ; bottom: ; width: 60px ")
                .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: -0%  ; right:  ; top: ; bottom: 3% ; width: 60px ")      
            .col-lg-1
          .row.align-items-center
            .col-lg-6
              h4.mb-4.color-1 Color
              p.mb-4 Para escoger correctamente la paleta de colores, se debe revisar la información condensada en el <i>brief</i> y utilizar los colores propuestos en el proyecto. 
              p.mb-4 La psicología del color en este tipo de piezas es fundamental en el desarrollo de las mismas.  
              p.mb-0 El círculo cromático es una herramienta valiosa para realizar buenas elecciones de combinación y uso del color.
            .col-lg-5
              .imagen-adornos-flotantes
                img(src='@/assets/curso/tema7/img04.png') 
                .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5%  ; top: ; bottom: 0% ; width: 90px ")
                .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 8%  ; right: ; top:12% ; bottom: ; width: 60px ")
                .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: -0%  ; right:  ; top: ; bottom: 3% ; width: 60px ")      
            .col-lg-1
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-6
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img05.png') 
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%; right:   ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:   ; right: 5%; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:   ; right: -5% ; top: ; bottom: 15% ; width: 60px ")      
      .col-lg-6
        .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
            h3.mb-0.me-3 Imágenes
              
        p.mb-4 En diseño de publicaciones digitales que se distribuyen en la <i>web</i>, es de vital importancia el buen manejo y uso de las imágenes, en cuanto a su calidad y resolución. 
        p.mb-4 <b>El uso de formatos adecuados, una excelente resolución y calidad son de vital importancia, ya que con los avances y mejoras en HTML5 y CSS3 y su compatibilidad con diversos navegadores, permiten una mejor calidad y usabilidad de los componentes.</b>
        p.mb-0 La propuesta gráfica y los recursos deben mantener siempre el mismo estilo, de igual manera asegurar que la armonía entre contenido e imagen, correspondan con el producto editorial.   Las imágenes pueden ser de carácter propio, de galerías pagas, por las cuales se realiza un pago para su uso, o bancos de imágenes gratis autorizados.

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in") 
      .col-lg-6        
        .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
            h3.mb-0.me-3 Animación y videos
              
        p.mb-4 as animaciones, videos y demás elementos visuales con movimiento, hacen mucho más atractivo cualquier sitio <i>web</i>, sin embargo, representan algo de peso extra por sus características generales, se recomienda que no sobrepasen un 30 % ya que pueden causar saturación y lentitud, haciendo que la usabilidad de las páginas se reduzca y sean los usuarios los que decidan buscar otras opciones.
        p.mb-0 A continuación, algunos elementos de relevancia en el diseño como botones e íconos, retículas de diseño, columnas, <i>padding</i> y retícula <i>responsive</i>.
      .col-lg-6
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img06.png') 
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5%  ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%  ; right: ; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: -5%  ; right:  ; top: ; bottom: 15% ; width: 60px ")      

    .tema-7
      TabsA.color-acento-botones.mb-5        
        .tarjeta.color-acento-contenido.p-4(titulo="Botones e íconos")
          .row.align-items-center.justify-content-center
            .col-lg-7
              h4.mb-4 Botones e íconos
              p.mb-0 El uso de botones e íconos que sean visibles y atractivos, aumentan la facilidad y rapidez de conexión entre los elementos. 
            .col-lg-5
              figure.mb-0
                img(src='@/assets/curso/tema7/img07.svg')    
        .tarjeta.color-acento-contenido.p-4(titulo="Retículas de Diseño")
          .row.align-items-center.justify-content-center
            .col-lg-7
              h4.mb-4 Retículas de diseño
              p.mb-4 La retícula es un elemento esencial en el diseño que no se ve a simple vista, es la estructura principal sobre la cual se diseña. 
              p.mb-0 Esta cuadrícula invisible al espectador, permite realizar la distribución y diagramación de los elementos compositivos de cualquier diseño, es la base de la maquetación con la cual se logra obtener una estética armónica, correcta y ordenada.  <br>En diseño <i>web</i> posibilita plasmar la versión interactiva y navegable de la publicación, ajustándose a la realidad.
            .col-lg-5
              figure.mb-0
                img(src='@/assets/curso/tema7/img08.png')  
        .tarjeta.color-acento-contenido.p-4(titulo="Columnas")
          .row.align-items-center.justify-content-center
            .col-lg-7
              h4.mb-4 Columnas
              p.mb-0 En <i>web</i>, por lo general se utilizan retículas basadas en columnas por la estructura y manejo de la información y espacios. Los bloques de columnas más utilizados son en múltiplos de 3, hasta 12 columnas, el espacio entre cada columna se conoce como Gutter Width. 
            .col-lg-5
              figure.mb-0
                img(src='@/assets/curso/tema7/img09.png')  
        .tarjeta.color-acento-contenido.p-4(titulo="<i>Padding</i>")
          .row.align-items-center.justify-content-center
            .col-lg-7
              h4.mb-4 <i>Padding</i>
              p.mb-0 El <i>padding</i> es el espacio entre el borde de una columna y su contenido
            .col-lg-5
              figure.mb-0
                img(src='@/assets/curso/tema7/img10.png')  
        .tarjeta.color-acento-contenido.p-4(titulo="Retícula <i>Responsive</i>")
          .row.align-items-center.justify-content-center
            .col-lg-7
              h4.mb-4 Retícula <i>responsive</i>
              p.mb-0 El uso de nuevas tecnologías y sus diversos formatos, hacen que los elementos estéticos y de diseño se tengan que adaptar a su entorno y funcionalidad, esta retícula se adapta para conseguir una regularidad en las páginas <i>web</i>, aunque sean abiertas en diferentes dispositivos, con unas dimensiones de pantalla diferentes, que exigen un cambio estructural del diseño. A este cambio se le conoce como breakpoint (punto de ruptura).  
            .col-lg-5
              figure.mb-0
                img(src='@/assets/curso/tema7/img11.png')  

    p.mb-5 Abordadas las consideraciones respecto al diseño digital, es el momento de tratar aspectos generales del guion y <i>storyboard</i>.           
    
    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-up") 
      .col-lg-6        
        .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
            h3.mb-0.me-3 El guion literario
              
        p.mb-4 El guion literario es una herramienta secuencial en del desarrollo de productos multimedia, está enmarcada en el diseño mismo de aplicabilidad, en la creación y concepto del producto.  Se necesita un guion literario para describir paso a paso el contenido total de un proyecto, que exprese en forma detallada lo que se quiere transmitir, es decir el mensaje, por lo que es preciso investigar y preparar la historia. Describe las diversas situaciones, los diálogos, las acciones en la historia a contar. 
        p.mb-0 Este guion podrá ser de ficción o realidad, en esta última clasificación se encuentran los guiones informativos, los de formación y de opinión, los cuales sirven para evitar incongruencias, nerviosismo, titubeos, coletillas, etc.; enfocándose en el tema y logrando precisión en el desarrollo de la historia.
      .col-lg-6
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img12.png') 
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5%  ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%  ; right: ; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: -5%  ; right:  ; top: ; bottom: 15% ; width: 60px ")      

    .row.align-items-center.justify-content-center(data-aos="zoom-in") 
      .col-lg-6
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img13.png')
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%; right:   ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:   ; right: 5%; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:   ; right: -5% ; top: ; bottom: 15% ; width: 60px ")      
      .col-lg-6        
        .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
            h3.mb-0.me-3 <i>Storyboard</i>
              
        p.mb-4 El <i>storyboard</i> o guion gráfico son una serie de viñetas con diferentes ilustraciones o dibujos, que muestran el orden secuencial para entender las acciones requeridas en el desarrollo de una historia, de acuerdo con una narración previa, descrita con antelación.
        p.mb-4 Dentro del <i>storyboard</i> se puede encontrar el número de escenas, secuencia a desarrollar, diálogo o narración requerida en cada momento específico; es de gran importancia para llevar a cabo el orden sucesivo de las escenas. En las viñetas (cuadros que tiene un <i>storyboard</i>) se incluye información relevante de cada una de las escenas, diálogos y elementos que se consideren importantes dentro de cada momento.  
        p.mb-0 El <i>story</i> sirve principalmente para realizar un spot, guion de cine, anuncio o comercial.
       
    Separador

    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2 Pruebas

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-up") 
      .col-lg-6
        p.mb-4 Las pruebas de usabilidad de un sitio <i>web</i> hacen referencia a la facilidad con la cual los usuarios pueden utilizar y manejar los diferentes componentes y herramientas de uso.
        p.mb-4 Ventajas que presenta la usabilidad:
        ul.lista-ul--color.mb-4.ms-3               
          li 
            i.fas.fa-square 
            | Mejora la experiencia de uso del usuario.
          li 
            i.fas.fa-square 
            | Hay una mayor comunicación y retroalimentación con el cliente. 
          li 
            i.fas.fa-square 
            | Aumenta los tiempos de visita a un sitio.
          li 
            i.fas.fa-square 
            | Reduce el porcentaje de rebote de la página. 
          li 
            i.fas.fa-square 
            | Familiariza al usuario con el sitio y su manejo. 
          li 
            i.fas.fa-square 
            | Aumenta las visitas e ingresos percibidos.
        p.mb-0 Las pruebas por parte de los usuarios, son técnicas creadas para evaluar con los mismos usuarios, las opciones de accesibilidad, usabilidad y demás información pertinente que solo el usuario de las páginas <i>web</i> es posible y es capaz de analizar, es información que es analizada directamente por los usuarios en tiempo real; en contraste a otras metodologías donde expertos son los encargados de evaluar las interfaces.
      .col-lg-6
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img14.png')
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5%  ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%  ; right: ; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: -5%  ; right:  ; top: ; bottom: 15% ; width: 60px ")      
    
    p.mb-5 Las pruebas, como su nombre lo indica es la posibilidad que un usuario en vez de realizar preguntas de ¿cómo resolverlo? O ¿Cómo hacerlo? Sea el mismo el encargado de resolver su pregunta.
    
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
            h3.mb-0.me-3 Tipos
              
    p.mb-0 A continuación, los principales tipos de pruebas de usabilidad
    
    .tema-7
      PasosA.color-primario.mb-5(tipo="n")
        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure.mb-0
              img(src='@/assets/curso/tema7/img15.png')
          .col-md-8
            h4 Pasillo de Pruebas
            p.mb-4 Es una opción muy rápida y económica al momento de escoger las personas para el estudio en cuestión, ya que todas son escogidas al azar, permitiendo que la muestra realizada contemple una cantidad variada de individuos ya que sus perfiles, cualidades, percepciones, habilidad, etc.
            p.mb-0 Estas pruebas permiten analizar características generales para todos los perfiles, permitiendo identificar características como complicidad, usabilidad, etc.<br>Para tener logros más eficientes y verídicos, se debe asegurar que las muestras sean ajenas, pero si con un conocimiento básico general.
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Prueba de Usabilidad Remota
            p.mb-0 Dados los altos costos en el momento de pensar en reunir un grupo de prueba, en escenarios de usabilidad podemos encontrar que es habitual que encontremos usuarios de diferentes partes y zonas horarias, por lo que desde el punto de la logística se convierte en un reto. Estas pruebas también permiten que usuarios de diferentes lugares, con tecnologías, y contextos diferentes, creando inconvenientes y brechas que van desde la posibilidad de no comunicarse, hasta no saber exactamente quien es el usuario que realiza la prueba.            
          .col-md-4
            figure.mb-0
              img(src='@/assets/curso/tema7/img17.png')
        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure.mb-0
              img(src='@/assets/curso/tema7/img18.png')
          .col-md-8
            h4 Metodologías Asíncronas 
            p.mb-4 Es un registro automático que se obtiene al tener un usuario que realiza una navegación, mientras se conoce cómo fue su recorrido al igual que los clics realizados, consiguiendo a su vez una retroalimentación concisa al mostrar errores o incidentes mientras se interactuaba. 
            p.mb-0 Es una metodología basada en tareas, lo que permite medir tiempos, clics; datos que son vitales para las empresas y su compresión de lo que el usuario hace y cómo se desenvuelve al momento de navegar por un sitio <i>Web</i>.  
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 TEST A/B
            p.mb-4 Es una prueba aleatoria con dos (2) variantes, (A,B) siendo una la variante y la otra la que controla, la idea consiste en comparar dos (2) opciones, con leves cambios que afectan directamente en los comportamientos de los usuarios. Se utilizan dos (2) opciones exactas con un contenido diferente, donde se tendrá prioridad por alguno y se obtendrán resultados.
            p.mb-0 Se pueden encontrar variantes, donde la intención de la prueba es comparar y es mantiene una sola variante que controla, así  se obtienen más datos sobre las mismas pruebas, siendo más económico, pero sus resultados pueden ser sesgados. 
          .col-md-4
            figure.mb-0
              img(src='@/assets/curso/tema7/img19.png')


    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
        h3.mb-0.me-3 Indicadores de usabilidad
              
    p.mb-5 La usabilidad no solo se pone a prueba, generalmente se mide por indicadores que son tanto cuantificables como observables y desde los que se puede obtener resultados más visibles, dando resultados concretos que permitirán tomar las medidas necesarias. 

    .row.justify-content-center.mb-5
      .col-lg-10
        figure.mb-0
          img(src='@/assets/curso/tema7/img25.svg')

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in") 
      .col-lg-4
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img21.png')
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%; right:   ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:   ; right: 5%; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:   ; right: -8% ; top: ; bottom: 15% ; width: 60px ")      
      .col-lg-8
        p.mb-4 Pasos para determinar la usabilidad de un sitio:
        .texto-largo-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
            h3.mb-0.me-3 Determinar métricas y crear análisis de tareas
                  
        p.mb-5 Se delimitan las pruebas mediante el uso de métricas que midan los factores en pro y en contra referentes a la usabilidad, eficacia y eficiencia de los componentes de un proyecto.  Aquí hay medición de objetivos dirigidos al usuario, manejo de ruta y análisis de tareas de los componentes, entre otras.  Se construye un flujograma de tareas, con tiempos y acciones a trabajar.
        .texto-largo-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
            h3.mb-0.me-3 Identificar el mejor tipo de prueba
                  
        p.mb-4 Existen variadas formas en cuanto a las pruebas de usabilidad, la utilización de determinada forma de prueba depende del sitio <i>web</i> en cuanto a las métricas y a las tareas definidas en la primera etapa. Existen tres tipos de pruebas de usabilidad que son las más utilizadas:
        p.mb-0 Clasificación de tarjetas o el llamado <i>Card sorting</i>, es la prueba más fácil y rápida. Esta técnica se basa en la experiencia del usuario digital, para calificar la taxonomía del producto digital. En un punto anterior, se realizó una descripción más amplia de esta técnica. 
    
    .row.align-items-center.justify-content-center(data-aos="zoom-in-up") 
      .col-lg-7
        p.mb-4 Estudio de campo o investigación contextual, las pruebas de usabilidad necesitan más tiempo que la clasificación de tarjetas y consiste en ir directamente al contexto real de sus usuarios, es decir donde ellos probablemente usen su sitio <i>web</i> y mediante una entrevista no tan formal, se les pide que indiquen cómo realizan el proceso mientras interactúan con la pantalla. Hay retroalimentación directa del usuario lo cual es una gran ventaja; aunque en ocasiones el estudio de campo puede hacerse virtualmente, al aparecer resta espontaneidad al usuario.
        p.mb-0 El rastreo ocular, es una técnica que sirve para determinar dónde está mirando un usuario, la página que elige, en qué orden se desplaza y el tiempo durante el cual mira. Se puede determinar dónde y cuándo se conectan los usuarios digitales de su sitio <i>web</i>.  Entre más intenso y fuerte el color del mapa, es mayor el tiempo que el usuario mira ese sector de la pantalla. Por medio de este proceso es más fácil entender la usabilidad y eficacia del sitio <i>web</i>, es decir, el nivel de consecución de nuestras metas y objetivos de la página <i>web</i>. Con base en el rastreo ocular, los investigadores y especialistas en marketing han podido determinar que la mayoría de las personas utilizan el patrón de la Z y de la F al mover sus ojos y recorrer la pantalla.
      .col-lg-5
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img22.png')
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5%  ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%  ; right: ; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: -5%  ; right:  ; top: ; bottom: 15% ; width: 60px ")      

    Separador
    #t_7_3.titulo-segundo.color-acento-contenido
      h2 7.3 Validación de prototipo

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-up") 
      .col-lg-6
        p.mb-4 Un prototipo se conoce como un diseño de prueba y puede tomar la forma de un producto o modelo de negocio el cual se diseña y construye con el objeto de validar las ideas de manera fácil, rentable y efectiva, para verificar la viabilidad de producción o comercialización; lo cual permite corregir defectos antes de generar un producto final. En los procesos de innovación la construcción de un prototipo se convierte en una pieza fundamental para lograr medir y minimizar los riesgos. La validación se define como el proceso que determina la precisión con la cual el modelo computacional representa el modelo físico del mundo real. Existen diferentes tipos de prototipos los cuales se pueden evaluar de acuerdo con su estado de desarrollo.
        .tema2
          .cajon.color-acento-contenido.p-4       
            p.mb-0 Existen prototipos denominados de inspiración, los cuales constituyen el primer bosquejo de desarrollo de una idea, también existen prototipos de evolución, este tipo de prototipos se derivan de los mejores prototipos de inspiración y se caracterizan por que requieren una mayor cantidad de tiempo y recursos para su fabricación debido a que se requiere un estado de avance que permita demostrar sus funcionalidades y ventajas de cara a las necesidades del cliente.
      .col-lg-6
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img23.png')
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5%  ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%  ; right: ; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: -5%  ; right:  ; top: ; bottom: 15% ; width: 60px ")      

    .row.align-items-center.justify-content-center(data-aos="zoom-in") 
      .col-lg-6
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema7/img24.png')
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5%; right:   ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:   ; right: 5%; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:   ; right: -5% ; top: ; bottom: 15% ; width: 60px ")      
      .col-lg-6
        p.mb-4 Una prueba de concepto permite la validación de los prototipos, cuando estos son sometidos a condiciones reales de operación. El objetivo de esta prueba es valorar el concepto de un resultado de investigación que puede dar origen a un producto, proceso o servicio nuevo o significativamente mejorado, antes de comenzar su desarrollo a nivel industrial y, por ende, su posterior incursión en el mercado. 
        p.mb-0 El desarrollo de una prueba de concepto permite evaluar la utilidad, viabilidad y sostenibilidad de conocimientos e invenciones susceptibles de transferencia y capaces de impactar el desarrollo productivo. Permite reducir la incertidumbre y los riesgos asociados a la transferencia de conocimientos y de tecnologías, determinando el estado de desarrollo de los resultados de investigación y lo que estos deben superar para que estén listos desde la visión del mercado y las necesidades de la sociedad.
          
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema7',
  components: {
    BannerInterno,
  },
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
