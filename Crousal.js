

const container = document.getElementById('carousel-container');
const content = document.getElementById('carousel-content');
const cardWidth = document.querySelector('.card').offsetWidth;
let currentIndex = 0;

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + 6) % 6;
  updateCarousel();
}

function updateCarousel() {
  const translateX = -currentIndex * cardWidth;
  content.style.transform = `translateX(${translateX}px)`;
}