# Plataforma de Gestión de Cursos

Este proyecto consiste en el desarrollo de una plataforma web para la gestión de cursos. Está diseñado utilizando HTML5, CSS3 y JavaScript, con el objetivo de ofrecer una interfaz atractiva, intuitiva y dinámica para gestionar una lista de cursos. Además, incluye funcionalidad dinámica para agregar y visualizar cursos sin recargar la página, utilizando localStorage para almacenar los datos de manera persistente en el navegador.

## Características del Proyecto:

### 1. Estructura y diseño de la página (HTML5 y CSS3)
- Se ha creado la estructura básica de la página utilizando **HTML5**, con las siguientes secciones:
  - Encabezado: Barra de navegación con enlaces a las secciones **Inicio**, **Cursos**, **Agregar Curso** y **Contacto**.
  - Sección principal: Página para la **gestión de cursos**, donde se muestran los cursos agregados.
  - Pie de página: Contiene la información de derechos reservados.

- El diseño se ha realizado utilizando **CSS3**, aplicando estilos para crear una interfaz atractiva y responsiva.
  - Se ha incorporado una barra de navegación fija con transiciones suaves y resaltado de secciones al pasar el mouse.
  - Se han aplicado animaciones CSS en botones y campos de entrada para mejorar la interactividad con el usuario.

### 2. Sección de gestión de cursos
- La página de **Cursos** muestra una lista de cursos con la siguiente información:
  - **Nombre del curso**, **instructor**, **fecha de inicio** y **duración**.
  - Un botón **"Ver más detalles"** en cada curso que despliega una descripción más completa del curso, sin necesidad de recargar la página, utilizando JavaScript para manipular el DOM.

### 3. Formulario de registro de cursos
- Se ha creado un **formulario** para agregar nuevos cursos, con los siguientes campos:
  - Nombre del curso, nombre del instructor, fecha de inicio, duración y descripción.
  - Además, se incluye la URL de la imagen asociada al curso.

- El formulario incluye **validaciones** con **JavaScript** para asegurarse de que todos los campos sean completados correctamente (ej. campos obligatorios y formato de fechas).

- Al enviar el formulario, los datos del curso se agregan dinámicamente a la lista de cursos, que se almacena en `localStorage`. De esta manera, los datos persisten incluso después de cerrar el navegador.

### 4. Interacción con el DOM y funcionalidad dinámica
- Se ha implementado **JavaScript** para manejar todas las interacciones del usuario, incluyendo:
  - **Agregar cursos** a la lista y mostrar más información sobre un curso específico.
  - **Manipulación del DOM** para actualizar dinámicamente la lista de cursos, sin recargar la página.
  - Incorporación de **animaciones CSS** para mejorar la interactividad en la interfaz, como resaltado de campos y transiciones suaves al agregar o eliminar cursos.

### 5. Documentación y control de versiones
- El proyecto se encuentra versionado en **Git**, donde se ha documentado el proceso de desarrollo y las decisiones de diseño mediante commits y mensajes descriptivos.
- Se han realizado commits frecuentes para mantener un registro claro de los cambios realizados en el código fuente.

### 6. Integración y publicación
- El proyecto integra todas las funcionalidades mencionadas, asegurando que trabajen de manera conjunta.
- El sitio ha sido publicado en **GitHub Pages**, facilitando el acceso público a la plataforma.

## Cómo usar este proyecto

### Requisitos previos
- Un navegador moderno compatible con HTML5 y CSS3.
- No se necesita ninguna configuración del servidor ya que es una página estática.

### Instalación y ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/JoseAbad985/web-cursos.git
