// Datos de ejemplo
let cursos = [
    {
      id: 1,
      nombre: 'Curso de HTML5',
      categoria: 'programming',
      instructor: 'Juan Pérez',
      fechaInicio: '2023-11-01',
      duracion: 4,
      descripcion: 'Aprende los fundamentos de HTML5 y construye páginas web semánticas y accesibles.',
      imagen: 'assets/images/html5.jpg'
    },
    {
      id: 2,
      nombre: 'Curso de CSS3',
      categoria: 'design',
      instructor: 'María García',
      fechaInicio: '2023-12-01',
      duracion: 6,
      descripcion: 'Domina CSS3 y crea diseños responsivos y atractivos para tus sitios web.',
      imagen: 'assets/images/css3.jpg'
    },
    {
      id: 3,
      nombre: 'Curso de JavaScript',
      categoria: 'programming',
      instructor: 'Carlos López',
      fechaInicio: '2024-01-10',
      duracion: 8,
      descripcion: 'Conviértete en un experto en JavaScript y desarrolla aplicaciones web interactivas.',
      imagen: 'assets/images/js.jpg'
    }
  ];
  
  // Función para obtener parámetros de la URL
  function obtenerParametroURL(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
  }
  
  // Función para mostrar los cursos
  function mostrarCursos(listaCursos) {
    const courseGrid = document.getElementById('course-grid');
    courseGrid.innerHTML = '';
  
    // Obtener cursos de localStorage y combinar con los existentes
    let cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    let todosLosCursos = cursos.concat(cursosGuardados);
  
    listaCursos = listaCursos || todosLosCursos;
  
    listaCursos.forEach(curso => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
  
      courseCard.innerHTML = `
        <img src="${curso.imagen}" alt="${curso.nombre}">
        <h3>${curso.nombre}</h3>
        <p><strong>Instructor:</strong> ${curso.instructor}</p>
        <p><strong>Inicio:</strong> ${curso.fechaInicio}</p>
        <a href="detalle_curso.html?id=${curso.id}">Ver Detalles</a>
      `;
  
      courseGrid.appendChild(courseCard);
    });
  }
  
  // Función para filtrar y buscar cursos
  function filtrarCursos() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filterSelect = document.getElementById('filter').value;
  
    let cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    let todosLosCursos = cursos.concat(cursosGuardados);
  
    let cursosFiltrados = todosLosCursos.filter(curso => {
      const coincideBusqueda = curso.nombre.toLowerCase().includes(searchInput);
      const coincideFiltro = filterSelect === 'all' || curso.categoria === filterSelect;
      return coincideBusqueda && coincideFiltro;
    });
  
    mostrarCursos(cursosFiltrados);
  }
  
  // Mostrar detalles del curso
  function mostrarDetalleCurso() {
    const idCurso = obtenerParametroURL('id');
    let cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    let todosLosCursos = cursos.concat(cursosGuardados);
    const curso = todosLosCursos.find(curso => curso.id == idCurso);
  
    if (curso) {
      const courseDetail = document.getElementById('course-detail');
      courseDetail.innerHTML = `
        <img src="${curso.imagen}" alt="${curso.nombre}">
        <h2>${curso.nombre}</h2>
        <p><strong>Instructor:</strong> ${curso.instructor}</p>
        <p><strong>Fecha de Inicio:</strong> ${curso.fechaInicio}</p>
        <p><strong>Duración:</strong> ${curso.duracion} semanas</p>
        <p>${curso.descripcion}</p>
        <a href="#" class="btn" id="btn-inscribirse">Inscribirse</a>
      `;
  
      // Evento para el botón de inscripción
      document.getElementById('btn-inscribirse').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Te has inscrito exitosamente en el curso.');
      });
    } else {
      const courseDetail = document.getElementById('course-detail');
      courseDetail.innerHTML = '<p>El curso seleccionado no existe.</p>';
    }
  }
  
  // Inicializar en detalle_curso.html
  if (document.getElementById('course-detail')) {
    document.addEventListener('DOMContentLoaded', mostrarDetalleCurso);
  }
  
  // Eventos de búsqueda y filtrado
  if (document.getElementById('search') && document.getElementById('filter')) {
    document.getElementById('search').addEventListener('input', filtrarCursos);
    document.getElementById('filter').addEventListener('change', filtrarCursos);
  
    // Inicializar
    document.addEventListener('DOMContentLoaded', () => {
      mostrarCursos();
    });
  }
  
  // Manejo del formulario para agregar cursos
  const courseForm = document.getElementById('course-form');
  
  if (courseForm) {
    courseForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Obtener valores
      const courseName = document.getElementById('course-name').value.trim();
      const category = document.getElementById('category').value;
      const instructorName = document.getElementById('instructor-name').value.trim();
      const startDate = document.getElementById('start-date').value;
      const duration = parseInt(document.getElementById('duration').value);
      const description = document.getElementById('description').value.trim();
      const imageUrl = document.getElementById('image-url').value.trim();
  
      // Validaciones básicas
      if (!courseName || !category || !instructorName || !startDate || !duration || !description || !imageUrl) {
        alert('Por favor, complete todos los campos.');
        return;
      }
  
      if (duration <= 0) {
        alert('La duración debe ser mayor a cero.');
        return;
      }
  
      // Crear objeto curso
      const nuevoCurso = {
        id: Date.now(),
        nombre: courseName,
        categoria: category,
        instructor: instructorName,
        fechaInicio: startDate,
        duracion: duration,
        descripcion: description,
        imagen: imageUrl
      };
  
      // Guardar en localStorage
      let cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
      cursosGuardados.push(nuevoCurso);
      localStorage.setItem('cursos', JSON.stringify(cursosGuardados));
  
      // Limpiar formulario
      courseForm.reset();
  
      alert('Curso agregado exitosamente.');
    });
  }
  
  // Manejo del formulario de contacto
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Obtener valores
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Validaciones básicas
      if (!name || !email || !message) {
        alert('Por favor, complete todos los campos.');
        return;
      }
  
      // Simulación de envío
      alert('Gracias por contactarnos, te responderemos pronto.');
  
      // Limpiar formulario
      contactForm.reset();
    });
  }