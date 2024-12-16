
/* -------------------------------------------------------------------------*/
  
  /* Barra de navegación */

// Selecciona el botón de menú y los enlaces de navegación
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Agrega un evento para alternar la clase 'show' cuando se haga clic en el botón
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

/* -------------------------------------------------------------------------*/

 /* Carousel Imagenes */

let currentIndex = 0;

function moveSlide(direction) {
    const imagesContainer = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    // Actualiza el índice, asegurándote de que sea cíclico
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Calcula la posición para mostrar solo la imagen actual
    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* -------------------------------------------------------------------------*/