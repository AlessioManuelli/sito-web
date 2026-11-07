document.addEventListener('DOMContentLoaded', () => {
  // 1. Slideshow automatico
  const slides = document.querySelectorAll('.hero-slider .slide');
  let currentSlide = 0;
  const slideInterval = 5000; // cambia ogni 5 secondi

  if (slides.length > 1) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, slideInterval);
  }

  // 2. Menu mobile toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // 3. Anno dinamico nel footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});