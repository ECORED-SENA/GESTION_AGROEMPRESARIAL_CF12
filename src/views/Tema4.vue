<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Insumos 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-7.col-10
        img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img01.png")
      .col-lg-5.col-12.d-flex
        .cajon.color-acento-contenido.p-4.mb-0(style="background-color: #e1e4a8")
          p.mb-0 Todos los procesos productivos pecuarios requieren de cierta cantidad de insumos para poder desarrollarse plenamente y alcanzar los niveles de productividad y rentabilidad esperados, pues es muy difícil que en la misma unidad productiva se encuentren todos los elementos necesarios para el sostenimiento de los animales y la atención de sus necesidades básicas. 

    p.mb-5 En vista de lo anterior, se hace necesario la consecución de insumos de diferente tipo, los cuales tienen diversas funciones al interior de la explotación pecuaria. Entre los principales grupos de insumos que se pueden encontrar en estos sistemas productivos, de acuerdo con su uso, están los siguientes:
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-7.col-12
        AcordionA.mb-lg-0.mb-3(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Protección y manejo animal")
            p.mb-0.ps-lg-5 Hace referencia a los medicamentos veterinarios los cuales son sustancias que pueden ser aplicadas o administradas a los animales, con fines terapéuticos, profilácticos, inmunológicos, de diagnóstico o para modificar las funciones fisiológicas y de comportamiento (Oirsa, 2013). Hacen parte de este grupo los antiparasitarios, antibióticos, relajantes musculares, anestésicos y vacunas entre otros. 
          div(titulo="Adecuación y construcción")
            p.mb-0.ps-lg-5 Forman parte de este grupo los elementos necesarios para adelantar las labores de construcción y/o adecuación de infraestructura productiva entre los cuales se encuentran cemento, ladrillo, arena, madera, guadua y tejas de zinc entre otros productos. 
          div(titulo="Aseo y desinfección")
            p.mb-0.ps-lg-5 Son los materiales empleados en la limpieza y desinfección de instalaciones, como galpones, bodegas, alojamientos, unidades sanitarias, corrales y camas; equipos y utensilios (comederos, bebederos, fumigadoras) y la desinfección del calzado a la entrada de cada área. Entre los materiales más comunes que se pueden encontrar en este grupo están cal, amonio cuaternario, detergentes, desinfectantes fenólicos e hipoclorito de sodio.
          div(titulo="Alimentación")
            p.mb-0.ps-lg-5 Se refiere a todos los productos empleados para satisfacer las necesidades nutricionales de los animales de la unidad productiva, generalmente denominados “concentrados” y sales. Estos son ricos en principios nutritivos y se emplean como suplemento de ensilados, granos, pastos y demás productos que consumen los animales de forma natural. 
          div(titulo="Manejo de praderas")  
            p.mb-0.ps-lg-5 Son todos los insumos que se tengan en la unidad productiva para el sostenimiento de las praderas o pasturas naturales que sirven como fuente primaria de alimento para las especies pecuarias. Dentro de estos insumos es posible encontrar acondicionadores de suelo, fertilizantes, herbicidas y demás productos empleados para este propósito. 
          div(titulo="Manejo de plagas")
            p.mb-0.ps-lg-5 En muchas de las actividades pecuarias es común la presencia de plagas (especialmente roedores e insectos) los cuales además de deteriorar la calidad de los elementos almacenados en la unidad productiva, son vectores con la capacidad de transmitir diferentes enfermedades. En vista de lo anterior, el control de plagas es una de las actividades clave para mantener los principios de bioseguridad. Dentro de los insumos que se encuentran al interior de la unidad productiva para el manejo de plagas están los insecticidas, repelentes, cebos tóxicos y raticidas entre otros.   

      .col-lg-5.col-8
        img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img02.png")
    
    div.px-md-5.px-3.py-4(style="background-color:#e1e4a8")
      p.mb-0 El manejo y utilización de estos insumos debe ser supervisado siempre, por lo que es necesario establecer protocolos para realizar estas labores e, igualmente, dejar trazabilidad cada vez que se haga uso de ellos. Por otro lado, es importante almacenar estos elementos de forma adecuada, debidamente rotulados y en las condiciones establecidas por el fabricante en la etiqueta y en la ficha técnica. La bodega donde se almacenen estos elementos debe estar bajo llave, debidamente ventilada y construida con materiales que faciliten su aseo y desinfección y además aseguren la estabilidad de los ingredientes activos. 
    Separador 

    .fondo1
      #t_4_1.titulo-segundo.color-acento-contenido
        h2 4.1 Ficha técnica 

      p.mb-5 <b style="color:#A3314F">Todos los productos que se empleen en la industria pecuaria deben estar debidamente registrados por la autoridad correspondiente</b>. En el caso de los medicamentos, alimentos y demás insumos empleados para el manejo de los animales, <b style="color:#A3314F">estos productos deben tener, obligatoriamente, el registro ICA</b>. 

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-5.col-12
          p.mb-4 Para garantizar la seguridad del personal encargado de la manipulación de los insumos y que se les dé un correcto uso, cada uno de ellos tiene lo que se conoce como la ficha técnica que consiste en un documento que da información importante al usuario sobre las características y propiedades del producto, así como de los posibles riesgos y las recomendaciones que se deben tener en cuenta para su empleo de forma correcta. 
          i.fas.fa-angle-right.d-inline(style="color:#A3314F")
          p.mb-4.d-inline.ms-4 <b>Contenido de la ficha técnica</b>
          br
          br
          p.mb-4.d-block(style="color:#A3314F") <b>Toda ficha técnica, de cualquier producto, debe contener al menos la siguiente información:</b>
          img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img03.png")
        .col-lg-7.col-12
          AcordionA.mb-0(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Nombre comercial del producto")
              p.mb-0 Se debe indicar claramente el nombre comercial del producto, tal como aparece en el registro ICA. 
            div(titulo="Ingredientes activos")
              p.mb-0 Mencionar los ingredientes activos que componen el producto.
            div(titulo="Composición")
              p.mb-0 Expresar de manera clara de qué está hecho el producto y los contenidos exactos de cada uno de los ingredientes activos, especificando con detalle, el número de unidades por determinada cantidad de producto comercial. 
            div(titulo="Mecanismo de acción")
              p.mb-0 Describir detalladamente la forma como el producto realiza el proceso para el cual es utilizado. En el caso de los desinfectantes, por ejemplo, en la ficha técnica se especificará si la acción se efectúa lesionando los ácidos nucleicos, lesionando la membrana celular o inactivando las proteínas de los microorganismos.
            div(titulo="Características")  
              p.mb-0 Se describen las propiedades más relevantes del producto de manera que orienten al usuario final sobre lo que puede esperar con su utilización. 
            div(titulo="Instrucciones para uso y dosificación")
              p.mb-0 Se presentan de manera las pautas para la preparación del producto, el tipo de aplicación y las dosis recomendadas de acuerdo con el uso. Es muy importante especificar claramente las unidades en las que se manejarán las dosis para evitar efectos adversos o pérdidas de efectividad de la aplicación.  

      .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-lg-2.col-6.d-flex.justify-content-center
            img.mb-lg-0.mb-3(style="width:85px" src="@/assets/curso/tema4/img04.svg")
          .col-10
            .row.justify-content-center.align-items-center
              .col-lg-9.col-12.d-flex.align-items-center
                div
                  h4.mb-1 Ficha técnica para productos pecuarios 
                  p.mb-lg-0.mb-3 Lo invitamos a consultar el siguiente recurso que muestra el ejemplo de la ficha técnica para productos pecuarios 
              .col-lg-3.col-6.d-flex.justify-content-center
                a.boton.color-acento-botones(style="width:125px" :href="obtenerLink('downloads/ficha.pdf')" target="_blank")
                  span(style="color:#12263F") Descargar
                  i.fas.fa-file-download(style="color:#12263F")

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-7.col-12
          AcordionA.mb-lg-0.mb-3(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Precauciones")
              p.mb-0 Es importante que en la ficha se den recomendaciones frente a las precauciones que se deben tener al momento de utilizar el producto, los usos no permitidos y los elementos de protección que se deben emplear para su utilización de manera segura. 
            div(titulo="Presentación")
              p.mb-0 En este punto se especifican las presentaciones comerciales en las cuales es posible conseguir el producto.
            div(titulo="Registro sanitario")
              p.mb-0 Es sumamente importante que en la ficha técnica del producto se indique el número de registro sanitario expedido por el ICA, pues en las explotaciones pecuarias no es permitido el uso de productos comerciales sin el visto bueno del Instituto Colombiano Agropecuario.  
        .col-lg-5.col-8       
          img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img05.png")
        
      p.mb-5 En productos que tengan principios fungicidas e insecticidas, además de lo anterior, por lo general la ficha técnica incluye la siguiente información:

    .row.justify-content-center.mb-0(data-aos="fade-right")
        .col-lg-5.col-8       
          img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img06.png")
        .col-lg-7.col-12
          AcordionA.mb-0(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Grado de toxicidad")
              p.mb-0 En la actualidad existen 4 categorías toxicológicas en los productos agroquímicos: Categoría IA – IB Extremadamente tóxico, color rojo. Categoría II altamente tóxicos, color amarillo. Categoría III medianamente tóxicos, color azul. Categoría IV ligeramente tóxicos color verde. 
            div(titulo="Posible antídoto")
              p.mb-0 Presenta alternativas al personal médico para el manejo de eventuales intoxicaciones. 
            div(titulo="Periodo de carencia")
              p.mb-0 Se define como el tiempo que debe transcurrir entre la última aplicación del producto agroquímico y la cosecha del producto. 
            div(titulo="Periodo de reingreso")
              p.mb-0 Hace referencia al tiempo que debe transcurrir entre la aplicación del producto y el ingreso de personas o animales al área tratada con el producto. 

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Protocolo 
   
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-12
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #e1e4a8")
          p.mb-0 Un protocolo se define como un conjunto de medidas, instrucciones o procedimientos que permiten orientar y controlar el desarrollo de una acción específica. Un protocolo se convierte en una guía que indica a un grupo de personas cómo actuar frente a determinada situación, de manera articulada y secuencial, evitando la toma de decisiones a título personal y de manera improvisada.
        p.mb-4 En relación con la bioseguridad, <b style="color:#A3314F">es de suma importancia apegarse a los protocolos establecidos para el manejo de las explotaciones pecuarias</b>, ya que a través de ellos se definen la periodicidad de las labores de limpieza y desinfección, el control de ingreso y el tipo de insumos que se deben emplear para las labores de mantenimiento de la unidad productiva, entre otras acciones. 
        p.mb-0 <b style="color:#A3314F">Los protocolos más comunes usados en los sistemas pecuarios son los siguientes:</b>
      .col-lg-6.col-8
        img(src="@/assets/curso/tema4/img07.png")
  
    .fondo2
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10.col-12
          img(src="@/assets/curso/tema4/img08.svg")

      p.mb-5 Para la construcción de un protocolo, sin importar su área de acción, se deben tener en cuenta los siguientes elementos:

      SlyderF.mb-5(columnas="col-12 col-xl-4")
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema4/img09.svg' alt='AvatarTop')
          h4.text-center 1. Encabezado
          p.text-center Se define nombre del protocolo, fecha de elaboración y responsables de elaboración, revisión y aprobación.  

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema4/img10.svg' alt='AvatarTop')
          h4.text-center 2. Objeto
          p.text-center Se expresa cuál es el fin del protocolo, es decir, qué se pretende con su implementación. 

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema4/img11.svg' alt='AvatarTop')
          h4.text-center 3. Alcance
          p.text-center Se delimita la escala de aplicación del protocolo: si aplica en un área de la empresa, en toda la empresa o un área geográfica definida.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema4/img12.svg' alt='AvatarTop')
          h4.text-center 4. Definiciones
          p.text-center Se incluye un glosario de términos para centrar al lector sobre el contenido del protocolo. 

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema4/img13.svg' alt='AvatarTop')
          h4.text-center 5. Condiciones generales
          p.text-center Se expresan las disposiciones que se deben seguir para garantizar el cumplimiento del objeto del protocolo como lavado de manos, desinfección de superficies, uso de equipos de protección personal, entre otras. 

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema4/img14.svg' alt='AvatarTop')
          h4.text-center 6. Contenido
          p.text-center Se definen uno a uno los procedimientos que se deben realizar para el cumplimiento de los objetivos del protocolo, expresando las actividades de manera secuencial y clara. 

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema4/img15.svg' alt='AvatarTop')
          h4.text-center 7. Control de cambios
          p.text-center Se registran todos los ajustes que han sufrido el protocolo y los procedimientos. Se deja trazabilidad de estos cambios


      p.mb-0 Es posible incluir anexos a los protocolos de limpieza los cuales permitirán al lector obtener información detallada sobre los implementos a emplear, los artículos e insumos. Algunos ejemplos de anexos son las fichas técnicas de los productos de limpieza, el manual de uso de los equipos de protección personal o los manuales de operación de cualquier otro equipo empleado en alguno de los procesos y procedimientos. 

</template>

<script>
export default {
  name: 'Tema4',
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
