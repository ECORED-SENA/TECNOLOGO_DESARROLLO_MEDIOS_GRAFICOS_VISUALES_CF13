<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Arquitectura de la Información

    .row.justify-content-center.mb-5
      .col-lg-4.d-flex
        div
          p.mb-4 La arquitectura de la información va muy ligada al concepto <font class="color-1"><b>UX</b></font> (<i>User Expirence</i> en inglés, o experiencia de usuario ) y se puede definir como la organización de todas las partes de algo, para que sea lo más comprensible posible. 
          p.mb-0.color-1 La arquitectura de la información busca básicamente el ordenamiento de todos los datos disponibles para que el usuario de manera lógica y ordenada realice la búsqueda de forma más rápida, fácil, ágil y dinámica.
      .col-lg-3(style="background-color:#FFF4C6")
        figure.mb-0
          img(src='@/assets/curso/tema5/img01.svg') 
      .col-lg-5.d-flex.align-items-center(style="background-color:#E2F4F6")
        p.mb-0 Un ejemplo claro de cómo funciona la arquitectura de información, es compararlo con el manejo de una biblioteca, donde cada libro pertenece a una categoría específica, y se dispone en un espacio delimitado para ser ubicado de manera sencilla; los libros de historia se encuentran en una estantería delimitada, los de cocina en otra, los de política en un lugar diferente y así sucesivamente; estos tomos pueden ser ordenados de acuerdo con su importancia, su volumen o tamaño; de la misma manera pasa en la arquitectura de la información, busca que los datos presente una estructura fácil y comprensible para todo el público o para su gran mayoría. 

    .row(style="position:relative" data-aos="zoom-in-up").p-0.mb-5
      .row.justify-content-start(style="position:relative; width:103%; height:100%;")
        .col-lg-5
          .imagen-adornos-flotantes
            img(src='@/assets/curso/tema5/img02.png')   
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:; right:  0% ; top: ; bottom: 0% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:  0% ; right:; top:0% ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:  -5% ; right: ; top: ; bottom: -5% ; width: 60px ")      

      .row.justify-content-end.m-0.px-0(style="position:absolute; top:0px; height:100%; width:100%; ")        
        .col-lg-8.d-flex.align-items-center.m-0.px-0
          div.py-4.px-3.mt-3(style="background-color: rgba(226, 244, 246, 0.8)")
            p.mb-0 Este ordenamiento se puede realizar por medio de categorías de productos, contenidos, palabras clave etc.  Es fundamental que la información que se contenga, esté estructurada y sea comprensible, que tenga una lógica de lectura, que permita identificar elementos y sus reacciones, y que puedan tener en cuenta las interacciones y usabilidad de los usuarios.

    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-7
        p.mb-4 Se puede afirmar que cuando se habla de la arquitectura de la información se debe pensar en jerarquías, categorías y todos los elementos que puedan estar a beneficio de los usuarios, de su buena navegación e interactividad; es importante que se aprecie como un recurso indispensable, ya que a primera vista podría parecer un tema sin mucha relevancia, y su importancia va más allá de una simple organización. 
        p.mb-4 Según Steven Krug autor del libro <b class="color-1">“No me Hagas Pensar”</b>; existen cuatro preguntas que el usuario continuamente hace al momento de ingresar a un sitio
        figure.mb-0
          img(src='@/assets/curso/tema5/img04.svg') 
      .col-lg-5
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema5/img03.png') 
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:; right:  0% ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:  0% ; right:; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:  -5% ; right: ; top: ; bottom: -5% ; width: 60px ")      

    p.mb-4 Son estas preguntas las que se deben empezar a responder, desde la parte de diseño y funcionalidad, dándole al usuario la posibilidad de orientarse y a su vez ofrecer la mejor calidad al momento de navegar y usar la página o el documento electrónico. 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-5
        figure.mb-0
          img(src='@/assets/curso/tema5/img05.svg') 
      .col-lg-7.d-flex.align-items-center
        div
          p.mb-4 De esta forma se evitan daños como las migraciones de usuarios insatisfechos o quejas por reclamos de fallas en funcionalidades o malas interconexiones, esto no solo genera un mal concepto de marca, sino que genera confusión y duda sobre sus acciones, generando y asociando sensaciones negativas que desestiman y desvalorizan la compañía.
          p.color-1.mb-4 <b>Teniendo en cuenta las preguntas a las que se debe reaccionar se deben entender estos conceptos que ayudarán a enfatizar los esfuerzos requeridos en cada uno de los campos a reaccionar, estos conceptos serán pilares que variarán según las necesidades, el negocio o los logros a alcanzar.</b>
          p.mb-0 Por tanto, se pueden resumir estos tres grandes temas que hacen parte de la IA (<i>Information Architecture</i>, por sus siglas en inglés) o Arquitectura de la información.

    //- .row.justify-content-center.mb-5
    //-   .col-lg-4.d-flex
    //-     .tema5-avatar1
    //-       .tarjeta-avatar
    //-         img(src='@/assets/curso/tema5/img06.svg')          
    //-         .tarjeta.color-primario
    //-           .p-5
    //-             h4.text-center Contenido
    //-             p.mb-0.text-center Textos, imágenes, gráficos, contenido en audio, etc.<br>Mapeo de las páginas o pantallas.<br>Estructura.<br>Taxonomía.<br>Volumen de información.

    //-   .col-lg-4.d-flex
    //-     .tarjeta-avatar
    //-       img(src='@/assets/curso/tema5/img07.svg')          
    //-       .tarjeta.color-primario
    //-         .p-5
    //-           h4.text-center.text-white Usuarios
    //-           p.mb-0.text-center.text-white Personalidad.<br>Necesidades.<br>Comportamiento de búsqueda de la información.<br>Experiencia de uso.<br>Tareas que desean ejecutar en tu aplicación.
    //-   .col-lg-4.d-flex
    //-     .tema5-avatar1
    //-       .tarjeta-avatar
    //-         img(src='@/assets/curso/tema5/img08.svg')          
    //-         .tarjeta.color-primario
    //-           .p-5
    //-             h4.text-center Contexto
    //-             p.mb-0.text-center Modelo de negocios.<br>Objetivos del proyecto.<br>Tecnologías y metodologías de desarrollo.<br>Recursos (capital, personas, equipos, entre otros).<br>Restricciones.


    .row.justify-content-center.mb-5
      .col-lg-4
        .crd_container
          .crd_container__icon
            img(src='@/assets/curso/tema5/img06.svg').iconCustom
          .crd_container__body
            h5 Contenido
            p Textos, imágenes, gráficos,<br>contenido en audio, etc.<br>Mapeo de las páginas o pantallas.<br>Estructura.<br>Taxonomía.<br>Volumen de información.
      .col-lg-4
        .crd_container
          .crd_container__icon
            img(src='@/assets/curso/tema5/img07.svg').iconCustom
          .crd_container__body
            h5 Usuarios
            p Personalidad.<br>Necesidades.<br>Comportamiento de búsqueda de la información.<br>Experiencia de uso.<br>Tareas que desean ejecutar en tu aplicación.
      .col-lg-4
        .crd_container
          .crd_container__icon
            img(src='@/assets/curso/tema5/img08.svg').iconCustom
          .crd_container__body
            h5 Contexto
            p Modelo de negocios.<br>Objetivos del proyecto.<br>Tecnologías y metodologías de desarrollo.<br>Recursos (capital, personas, equipos, entre otros).<br>Restricciones.
    
    p.mb-5 Realizado el ejercicio anterior y entendida la definición de IA, se enfocarán en estos tres pasos que serán fundamentales para ayudar a los usuarios a responder las preguntas anteriormente planteadas.

    .tema-5
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-end(titulo="a. Realizar un inventario")
          .col-lg-8.ps-5
            div
              p.mb-4 El primer paso, será identificar todos los elementos que se quieren incluir, partiendo del contenido de cada sección como las funcionalidades que se quieren ofrecer.
              p.mb-4 Para saber cuál será el contenido a incluir, será necesario basarse en las investigaciones y el conocimiento obtenido sobre los usuarios al igual que toda la información del sitio <i>web</i>, de la aplicación o del elemento digital, es importante escuchar siempre al cliente y saber cuales son sus demandas y sus expectativas frente al proyecto. 
              p.mb-0 Cada proyecto posee una IA distinto, dado que su contenido y objetivos son diferentes, así que será importante conocer las diferentes metodologías, para ajustar el proyecto a la que más se adapte.
          .col-lg-4
            figure.mb-0(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema5/img09.png') 
        .row.justify-content-center(titulo="b. Agrupar las tarjetas (<i>Card Sorting</i>)")
          .col-lg-8.ps-5
            div
              p.mb-4 En este paso se establecen las relaciones entre los ítems inventariados anteriormente, en este paso se deciden cuales se agrupan en secciones o menús y estos si están en otros grupos sucesivamente.
              p.mb-4 La clave es poder definir un camino para poder llevar a los usuarios cuando quieren ir de un punto A, a un punto B, o C, etc.
              p.mb-4 Una buena idea, es realizar preguntas o hacer una encuesta para saber y entender como el usuario o público objetivo interactúa y utilizan de alguna u otra forma un producto determinado. 
              p.mb-0 Una buena técnica para poder hacer esa selección es el poder simular cada momento inventariado anteriormente en una tarjeta, las cuales después de tener todos y cada uno los elementos inventariados, se puedan colocar en una mesa y con ayuda de varios asistentes, pedirles que realicen sus agrupaciones según sus procesos mentales; cada uno de estos procesos serán diferentes y darán resultados que ayudarán a comprender otros puntos de vista de usuarios que no se tenían presupuestados; finalmente se encontrarán los patrones adecuados para poder encajar a todos y poder satisfacer de la mejor manera al usuario. 
          .col-lg-4
            figure.mb-0(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema5/img10.png') 
        .row.justify-content-center(titulo="c. Definir el mapa")
          .col-lg-8.ps-5
            div
              p.mb-4 Esta tercera etapa, consiste en ubicar todos los elementos anteriormente inventariadas y agrupas, en un mapa que permitirá ver y reflejar las relaciones y agrupaciones establecidas entre todos los contenidos y elementos.
              p.mb-0 En algunas ocasiones será necesario renombrar o re categorizar algunas, o por el contrario cambiar de posición, todo por encontrar lo mejor al momento de pensar en la usabilidad de los usuarios.  
          .col-lg-4
            figure.mb-0(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema5/img11.png') 

    p.mb-4 Entre las metodologías aplicadas en la arquitectura de la información se puede encontrar:
    .tema-5.mb-5
      .row.justify-content-center
        .col-lg-7
          LineaTiempoD.color-acento-botones
            div(numero="1" titulo="Estructura Jerárquica")
              p.mb-4  Es de las estructuras más utilizadas, tiene forma de árbol y desde su raíz descienden todos sus elementos, su principal beneficio para los usuarios es poder saber siempre donde está ubicado, permitiendo recrear mapas mentales de las estructuras de los sitios, en este tipo de estructuras en natural que los usuarios deban navegar sobre sus pasos para llegar a las cabezas de los menús, lo que no permite la libre navegación de los sitios.  
              .row.justify-content-center
                .col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/tema5/img13.svg')

            div(numero="2" titulo="Navegación Hipertexto")
              p.mb-4  En este tipo de estructura, la información se organiza de forma lineal, la información está conectada por cualquier tipo de asociación, sea jerárquica o no; la flexibilidad de sus estructuras, permiten realizar más relaciones entre otros elementos y menús, siendo a la larga un dolor de cabeza para muchos usuarios que son nuevos en las páginas, ya que la complejidad de sus recorridos hace que mucha información se pierda si no se trata con el adecuado cuidado. 
              .row.justify-content-center
                .col-lg-9
                  figure.mb-0
                    img(src='@/assets/curso/tema5/img14.svg')

            div(numero="3" titulo="Navegación lineal o plana")
              p.mb-4 Es la estructura más simple, donde de un bloque pasa otro o al anterior y así las veces que necesite, es especial si necesitamos que el usuario haga un avance obligado por todas las páginas, sin que ningún otro bloque le cause distracción y solo se presenten estas oportunidades al final o al inicio de cada una.  
              .row.justify-content-center
                .col-lg-5
                  figure.mb-0
                    img(src='@/assets/curso/tema5/img15.svg')
        .col-lg-5
          .imagen-adornos-flotantes
            img(src='@/assets/curso/tema5/img12.png') 
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:; right:  0% ; top: ; bottom: 0% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:  0% ; right:; top:0% ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:  -5% ; right: ; top: ; bottom: -5% ; width: 60px ")      

    .row.justify-content-start.mb-0(data-aos="zoom-in-up")
      .col-lg-6        
        .row.justify-content-start.mb-4
          .col-lg-5.py-0.border(style="background-color: #FDD835")            
            .row.justify-content-start.my-1
              .col-lg-10
                h3.mb-0 Implementación
              .col-lg-2.p-0(style="position:relative; height:10px")
                figure.p-0.m-0.cubo-titulo
                  img.m-0(src='@/assets/curso/cubo.svg') 
        
        p.mb-4 La IA concluye con la documentación que permite la detallar la estructura ya reflejada para su posterior desarrollo e implementación, en muchos casos, se utilizan <i>software</i> especializados que dependerán del presupuesto y la infraestructura del proyecto; muchas de estas implementaciones se delegan a equipos de trabajo lo cuales tendrán las herramientas óptimas para la prueba y desarrollo de cada una. 
        p.mb-4 <font class="color-1">A su vez, se deben trabajar las documentaciones de los procesos y las descripciones específicas de cada uno, donde se encontrarán las implementaciones y toda la documentación técnica de flujogramas y descripciones de procesos.</font>        
        p.mb-0 Cada proceso tendrá su propio flujo de interacciones y evaluará la correcta funcionalidad y usabilidad del proyecto. 
      .col-lg-6.d-flex.align-items-center
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema5/img16.png') 
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:; right:  0% ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:  0% ; right:; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:  -5% ; right: ; top: ; bottom: 10% ; width: 60px ")      

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Evaluación heurística o usabilidad

    .row.justify-content-start.mb-0(data-aos="zoom-in-up")
      .col-lg-6        
        p.mb-5 Luego de la implementación de la arquitectura de información por medio del uso de tarjetas, el proceso de evaluación heurística o metodología de inspección en experiencia de usuario busca identificar y resolver aquellas problemáticas presentes en la usabilidad de los componentes de un producto, teniendo como principal objetivo medir la facilidad de uso, que se centra en el conocimiento del diseño y la experiencia de usuario. 
        .row.justify-content-start.mb-4
          .col-lg-12.py-0.border(style="background-color: #FDD835")            
            .row.justify-content-start.my-1
              .col-lg-10
                h3.mb-0 El decálogo de principios heurísticos de Jakob Nielsen
              .col-lg-2.p-0(style="position:relative; height:10px")
                figure.p-0.m-0.cubo-titulo
                  img.m-0(src='@/assets/curso/cubo.svg') 
        
        p.mb-0 Este decálogo desarrollado por Jakob Nielsen, reconocido experto mundial en usabilidad de la <i>web</i>, da diez principios heurísticos, centrados en mejorar la experiencia de usuario, en el desarrollo de posible resolución de problemas.        
      .col-lg-6.d-flex.align-items-center
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema5/img17.png') 
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:; right:  0% ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:  0% ; right:; top:0% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:  -5% ; right: ; top: ; bottom: 10% ; width: 60px ")      
    
    p.mb-5.color-1 Las heurísticas o el conjunto de técnicas o métodos para resolver un problema” del griego “hallar, inventar”, son una serie de elementos a tener en cuenta al momento de evaluar el diseño de las interfaces de usuario, recopiladas por el ingeniero Jakob Nielsen:

    .row.justify-content-start.mb-5(data-aos="zoom-in-up")
      .col-lg-4
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema5/img18.png') 
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:; right:  0% ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:  0% ; right:; top:20% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:  -5% ; right: ; top: ; bottom: 10% ; width: 60px ")      
      .col-lg-8
        ul.lista-ul--color.mb-4               
          li 
            i.fas.fa-square 
            | Visibilidad del estado del sistema.
          li 
            i.fas.fa-square 
            | Utilizar el lenguaje de los usuarios.
          li 
            i.fas.fa-square 
            | Control y libertad para el usuario. 
          li 
            i.fas.fa-square 
            | Consistencia y estándares.
          li 
            i.fas.fa-square 
            | Prevención de errores.
          li 
            i.fas.fa-square 
            | Minimizar la carga de la memoria del usuario.
          li 
            i.fas.fa-square 
            | Flexibilidad y eficiencia de uso.
          li 
            i.fas.fa-square 
            | Diagnósticos estéticos y diseño minimalista.
          li 
            i.fas.fa-square 
            | Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de los errores. 
          li 
            i.fas.fa-square 
            | Ayuda y documentación.
        
        p.mb-0 Para aplicar de manera objetiva los principios de usabilidad, se debe dar una calificación o medida a cada uno de los componentes; por ejemplo, aquellos que no cumplen con las necesidades requeridas se califican con 0, los que van en proceso, pero aún tienen falencias se califican con un valor de tres ( 3), y los que cumplen con todos los estándares de calidad con cinco (5), esto con el objetivo de realizar las mejoras respectivas. 

    .row.justify-content-start.mb-4
      .col-lg-6.py-0.border(style="background-color: #FDD835")            
        .row.justify-content-start.my-1
              .col-lg-10
                h3.mb-0 Ventajas e inconvenientes de la evaluación heurística
              .col-lg-2.p-0(style="position:relative; height:10px")
                figure.p-0.m-0.cubo-titulo
                  img.m-0(src='@/assets/curso/cubo.svg') 
    
    p.mb-5 Como cualquier metodología, la evaluación heurística posee ventajas y desventajas.

    div.mb-5(data-aos="zoom-in")
      .row.justify-content-center.py-5(style="background-color: #E2F4F6")
        .col-lg-4
          h4.mb-5.text-center Ventajas
          div.p-0
            ul.lista-ul--color.mb-4               
              li 
                i.fas.fa-square 
                | Es un método económico que no requiere de usuarios presentes.
              li 
                i.fas.fa-square 
                | Se pueden aplicar desde etapas tempranas, incluso en prototipos para detectar posibles problemas. 
            figure.mb-0
              img(src='@/assets/curso/tema5/img19.png') 
        .col-lg-1.tema-5-borde1
        .col-lg-1
        .col-lg-4
          h4.mb-5.text-center Desventajas
          ul.lista-ul--color.mb-4               
            li 
              i.fas.fa-square 
              | Es indispensable contar con un grupo de expertos para llevar a cabo evaluaciones correctas y pertinentes.
            li 
              i.fas.fa-square 
              | No hay evaluación de usabilidad, por usuarios. 
          figure.mb-0
            img(src='@/assets/curso/tema5/img20.png') 

    p.mb-4 Con el fin de ampliar el concepto a continuación se presenta el video “Los decálogos de Nielsen” y sus principios de usabilidad.            
    figure
      .video        
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/_lzG-OPbPDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador

    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Flujogramas

    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-4.d-flex
        p.mb-0 Los flujogramas o diagramas de flujo, es un esquema o una representación gráfica de un proceso, en el cual se muestran el orden y estructura del mismo, son muy importantes en la elaboración de guiones de productos multimedia ya que permiten una proyección de la estructura y la organización del producto o aplicación; la relación de todos sus elementos facilita comprender cada una de las partes y sus componentes, de acuerdo con el grado de importancia y jerarquía que poseen. 
      .col-lg-3(style="background-color:#E2F4F6")
        figure.mb-0
          img(src='@/assets/curso/tema5/img21.png') 
      .col-lg-5.d-flex.align-items-center(style="background-color:#E2F4F6")
        div 
          p.mb-4 Existen diferentes tipos de flujogramas, se encuentran en formato vertical, horizontal, panorámico, arquitectónico y de bloques. Las principales ventajas de este tipo de elementos es que ayudan a conectar diversas ideas en torno a la productividad del proyecto a ejecutar, al ser un elemento tan visual, es de mejor entendimiento para el equipo de producción. 
          p.mb-0.color-1 En su realización se van presentando los problemas y oportunidades y conexiones que surgen a partir del proceso de observación, los que serán ubicados en estos diagramas.
    
    p.mb-5.text-center Los flujogramas utilizan símbolos y convenciones para su mayor entendimiento y uso, ver tabla 3.
    
    .row.justify-content-start
      .col-lg-8
        div.BorTit.mb-3         
          p.mb-0 <b>Tabla 3</b> Símbolos frecuentes utilizados
    .tabla-b.color-acento-contenido.mb-5      
      table   
        tr(style="background-color: #F57C00")  
          td.text-center.td-borde1  
            b.text-white SÍMBOLO 
          td.text-center.td-borde1     
            b.text-white NOMBRE
          td.text-center
            b.text-white USO
        tr
          td.td-borde1 
            .row.align-items-center.justify-content-center
              .col-lg-6
                figure.mb-0
                  img(src='@/assets/curso/tema5/img22.svg') 
          td.td-borde1.text-center Línea de flujo
          td La flecha sirve para indicar la próxima indicación a seguir o el sentido del proceso.
        tr
          td.td-borde1
            .row.align-items-center.justify-content-center
              .col-lg-6
                figure.mb-0
                  img(src='@/assets/curso/tema5/img24.svg') 
          td.td-borde1.text-center Terminal
          td Esta forma es usada para indicar el inicio y final de un proceso.
        tr
          td.td-borde1 
            .row.align-items-center.justify-content-center
              .col-lg-6
                figure.mb-0
                  img(src='@/assets/curso/tema5/img23.svg') 
          td.td-borde1.text-center Actividad
          td Representa la actividad llevada en el proceso.
        tr
          td.td-borde1
            .row.align-items-center.justify-content-center
              .col-lg-6
                figure.mb-0
                  img(src='@/assets/curso/tema5/img25.svg') 
          td.td-borde1.text-center Documento
          td Representa un documento presente en el proceso.
        tr
          td.td-borde1
            .row.align-items-center.justify-content-center
              .col-lg-6
                figure.mb-0
                  img(src='@/assets/curso/tema5/img26.svg') 
          td.td-borde1.text-center Decisión
          td Sirve para evaluar cualquier tipo de información con un criterio de verdadero o falso.
        tr
          td.td-borde1
            .row.align-items-center.justify-content-center
              .col-lg-3
                figure.mb-0
                  img(src='@/assets/curso/tema5/img27.svg') 
          td.td-borde1.text-center Inspección o firma
          td Es la etapa del proceso donde se requiere una acción que requiere una supervisión.
        tr
          td.td-borde1
            .row.align-items-center.justify-content-center
              .col-lg-6
                figure.mb-0
                  img(src='@/assets/curso/tema5/img28.svg') 
          td.td-borde1.text-center Entrada
          td Indica en el proceso la etapa para hacer ingreso o entrada de datos.

    p.mb-5 Existen otros símbolos que ayudarán a mostrar otras conexiones y procesos, y que permitirá representar con más exactitud estos pasos, para poder conocer más, se adjunta en el material complementario, incluido al final de este documento, un <i>link</i>, para que se conozca todos los símbolos utilizados en los flujogramas. 
    p.mb-5 En la siguiente figura 2 se visualiza un el proceso de análisis para estudiar la usabilidad en el desarrollo de una pieza:
    
    div.p-0.mb-5      
      .row.justify-content-center.tema2-div1  
        .col-lg-6
          .row.justify-content-start
            .col-lg-8
              div.BorTit.mb-3         
                p.mb-0 <b>Figura 2</b> Proceso de análisis
          figure.mb-0
            img(src='@/assets/curso/tema5/img29.svg') 
        .col-lg-6
          div
            p.mb-5 Una de las bases y características de los diagramas de flujo, es su sencillez y claridad al momento de simplificar y comprender los elementos a incluir, aunque estas tareas no son fáciles de encontrar y muchas veces tienden a confundir, por esto se deben tener en cuentas las siguientes recomendaciones al momento de realizar un flujograma.
            .row.justify-content-center.mb-5
              .col-md-11
                SlyderF(columnas="col-12")
                  .tarjeta.color-primario.py-5.px-4(style="height:100%")
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema5/img30.svg' alt='AvatarTop')
                    h4.text-center.text-white.mb-4 Planificación
                    p.text-center.text-white.bm-0 Para poder crear una imagen o mapa que detalle un plan o una acción a seguir, es importante tener claro todas las situaciones y pasos que se darán, siendo lo más detallado posible.<br><br><br><br><br>

                  .tarjeta.color-primario.py-5.px-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema5/img31.svg' alt='AvatarTop')
                    h4.text-center.text-white.mb-4 Elección
                    p.text-center.text-white.bm-0 Una vez entendido los elementos, las acciones, sus interacciones y toda la información pertinente, es importante seleccionar el mejor y más atractivo diseño al momento de ubicar las acciones, como se van a representar y las acciones más de más validez para los usuarios finales, es igual de importante decidir el grado de detalle, esto ayudará a tener análisis mejor referenciado.

                  .tarjeta.color-primario.py-5.px-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema5/img32.svg' alt='AvatarTop')
                    h4.text-center.text-white.mb-4 Ejecución
                    p.text-center.text-white.bm-0 La creación y la lógica es el paso más importante al momento de la creación de los diagramas y hacer las conexiones correctas.<br><br><br><br><br><br>

                  .tarjeta.color-primario.py-5.px-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema5/img33.svg' alt='AvatarTop')
                    h4.text-center.text-white.mb-4 Comprobación y mejora
                    p.text-center.text-white.bm-0 Con toda acción hecha por el hombre, es posible su mejora; así que antes de cualquier publicación es importante hacer un sondeo y tener segundas opiniones, ya que estos modelos serán los encargados de hacer y dar marcha a los proyectos por eso la importancia de su claridad y su entendimiento. <br><br><br>

    p.mb-5 Es así como los diagramas ayudan a organizar e identificar los procesos y sus interconexiones, en este sentido se pueden distinguir ciertas ventajas:
    
    .row.justify-content-center
      .col-lg-4
        .imagen-adornos-flotantes
          img(src='@/assets/curso/tema5/img34.png') 
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 0% ; right:  ; top: ; bottom: 0% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left:   ; right: 0%; top:20% ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left:   ; right: -5% ; top: ; bottom: 10% ; width: 60px ")      
      .col-lg-8
        ul.lista-ul--color.mb-4               
          li 
            i.fas.fa-square 
            | Ofrece una compresión del proceso e identifica relaciones e incidencias difíciles de percibir, es así como estos diagramas ayudan a centrarse en aspectos más específicos y de las conexiones y vínculos con otros procesos.
          li 
            i.fas.fa-square 
            | Define y se comprenden mejor los límites de los procesos, que no están bien definidos y que pude involucrar actores externos como proveedores o los mismos clientes, acá se pueden entender mejor estas relaciones indicando hasta donde llegan algunos eslabones de la cadena.
          li 
            i.fas.fa-square 
            | Es más sencillo la identificación de las necesidades y satisfacciones de los clientes.
          li 
            i.fas.fa-square 
            | Estimula poder estudiar procesos que no se tienen contemplados y se generan otras alternativas más favorables.
          li 
            i.fas.fa-square 
            | Introduciendo otros elementos de las cadenas de producción es posible encontrar métodos de comunicación más asertivos y directos entre los mismos grupos.
          li 
            i.fas.fa-square 
            | Identifica y aporta actividades a los procesos, identificando por el contrario cuales son innecesarios, cuales toman más tiempo y cuales mayores costes.
          li 
            i.fas.fa-square 
            | Introduce medios de control, convirtiendo el flujo en una herramienta que establece los objetivos y las metas a tratar.
          li 
            i.fas.fa-square 
            | Facilita y mejora tiempos y acciones, lo que desencadena en mejora de costes, eficiencia y eficacia de los procesos.

    
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema5',
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
