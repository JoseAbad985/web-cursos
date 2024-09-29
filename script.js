// Cursos de ejemplo
const cursos = [
    {
      id: 1,
      nombre: 'Curso de HTML5',
      categoria: 'Programación',
      instructor: 'Juan Pérez',
      fechaInicio: '2023-11-01',
      duracion: 4,
      descripcion: 'Aprende los fundamentos de HTML5 y construye páginas web semánticas.',
      imagen: 'assets/images/html5.jpg'
    },
    {
      id: 2,
      nombre: 'Curso de CSS3',
      categoria: 'Diseño',
      instructor: 'María García',
      fechaInicio: '2023-12-01',
      duracion: 6,
      descripcion: 'Domina CSS3 y crea diseños responsivos y atractivos para la web.',
      imagen: 'assets/images/css3.jpg'
    },
    {
      id: 3,
      nombre: 'Curso de JavaScript',
      categoria: 'Programación',
      instructor: 'Carlos López',
      fechaInicio: '2024-01-10',
      duracion: 8,
      descripcion: 'Conviértete en un experto en JavaScript y desarrolla aplicaciones web dinámicas.',
      imagen: 'assets/images/js.jpg'
    }
  ];
  
  // Función para mostrar los cursos en la página de cursos
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
        <a href="detalle_curso.html?id=${curso.id}">Ver detalles</a>
      `;
  
      cursosContainer.appendChild(cursoDiv);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('course-grid')) {
      mostrarCursos();
    }
  });