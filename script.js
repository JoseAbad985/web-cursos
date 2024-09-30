
const cursos = [
  {
    id: 1,
    nombre: 'Curso de HTML5',
    categoria: 'Programación',
    instructor: 'Juan Pérez',
    fechaInicio: '2023-11-01',
    duracion: 4,
    descripcionCorta: 'Aprende los fundamentos de HTML5 y construye páginas web semánticas.',
    descripcionLarga: `En este curso intensivo de HTML5, aprenderás desde los conceptos más básicos como etiquetas y atributos, hasta técnicas más avanzadas como la semántica web, accesibilidad y optimización de rendimiento. 
                        \n El curso incluye ejercicios prácticos para ayudarte a aplicar lo aprendido de inmediato en proyectos reales, y cuenta con el apoyo de instructores experimentados en el campo del desarrollo web. Ideal para principiantes y aquellos que deseen perfeccionar sus habilidades.`,
    imagen: 'assets/images/html5.png'
  },
  {
    id: 2,
    nombre: 'Curso de CSS3',
    categoria: 'Diseño',
    instructor: 'María García',
    fechaInicio: '2023-12-01',
    duracion: 6,
    descripcionCorta: 'Domina CSS3 y crea diseños responsivos y atractivos para la web.',
    descripcionLarga: `Este curso de CSS3 te guiará a través de las mejores prácticas en diseño web, desde flexbox, grid layout, hasta animaciones avanzadas y diseño responsivo.
                        \n Aprenderás cómo construir interfaces modernas y atractivas que funcionen en cualquier dispositivo. Los proyectos del curso están diseñados para que los estudiantes creen sitios web completos y adaptativos.`,
    imagen: 'assets/images/css3.png'
  },
  {
    id: 3,
    nombre: 'Curso de JavaScript',
    categoria: 'Programación',
    instructor: 'Carlos López',
    fechaInicio: '2024-01-10',
    duracion: 8,
    descripcionCorta: 'Conviértete en un experto en JavaScript y desarrolla aplicaciones web dinámicas.',
    descripcionLarga: `Este curso de JavaScript te enseñará todo lo necesario para dominar el lenguaje. Desde los fundamentos del lenguaje, manipulación del DOM, hasta promesas, async/await y el uso de frameworks como React.js. 
                        \n Ideal para aquellos que buscan dominar el frontend y backend con Node.js.`,
    imagen: 'assets/images/js.png'
  }
];


function mostrarCursos() {
  const cursosContainer = document.getElementById('course-grid');
  cursosContainer.innerHTML = '';

  cursos.forEach(curso => {
    const cursoDiv = document.createElement('div');
    cursoDiv.classList.add('course-card');

    cursoDiv.innerHTML = `
      <img src="${curso.imagen}" alt="${curso.nombre}">
      <h3>${curso.nombre}</h3>
      <p><strong>Instructor:</strong> ${curso.instructor}</p>
      <p><strong>Duración:</strong> ${curso.duracion} semanas</p>
      <button onclick="verDetalles(${curso.id})" class="btn">Ver detalles</button>
    `;

    cursosContainer.appendChild(cursoDiv);
  });
}


function verDetalles(id) {
  const cursoSeleccionado = cursos.find(curso => curso.id === id);
  const descripcionDiv = document.getElementById('course-description');

  if (cursoSeleccionado) {
    descripcionDiv.innerHTML = `
      <h2>${cursoSeleccionado.nombre}</h2>
      <img src="${cursoSeleccionado.imagen}" alt="${cursoSeleccionado.nombre}">
      <p><strong>Instructor:</strong> ${cursoSeleccionado.instructor}</p>
      <p><strong>Duración:</strong> ${cursoSeleccionado.duracion} semanas</p>
      <p><strong>Fecha de Inicio:</strong> ${cursoSeleccionado.fechaInicio}</p>
      <p><strong>Descripción:</strong> ${cursoSeleccionado.descripcionLarga}</p>
    `;
  }
}


document.addEventListener('DOMContentLoaded', mostrarCursos);