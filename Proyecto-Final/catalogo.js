
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
const carousel = document.getElementById("carousel");
const previewContainer = document.getElementById("preview-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const images = Array.from(document.querySelectorAll(".carousel-image"));

let currentIndex = 0;

// Crea las miniaturas dinámicamente
images.forEach((image, index) => {
  const preview = document.createElement("img");
  preview.src = image.src;
  preview.classList.add("preview-image");
  if (index === currentIndex) preview.classList.add("active");

  // Añade el evento de clic para cambiar de imagen
  preview.addEventListener("click", () => {
    currentIndex = index; // Cambia al índice correspondiente
    updateCarousel();
  });

  previewContainer.appendChild(preview);
});

// Función para actualizar el carrusel y las miniaturas
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  const previews = document.querySelectorAll(".preview-image");

  // Actualiza la clase activa en las miniaturas
  previews.forEach((preview, index) => {
    preview.classList.toggle("active", index === currentIndex);
  });

  // Desplaza las miniaturas según la posición actual
  const start = Math.max(0, currentIndex - 3);
  previews.forEach((preview, index) => {
    preview.style.display = index >= start && index < start + 4 ? "block" : "none";
  });
}

// Eventos de las flechas
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// Inicializa la vista
updateCarousel();
