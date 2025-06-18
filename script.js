let currentFontSize = 16;

const increaseFont = () => {
  currentFontSize += 2;
  document.documentElement.style.fontSize = `${currentFontSize}px`;
};

const decreaseFont = () => {
  currentFontSize = Math.max(12, currentFontSize - 2);
  document.documentElement.style.fontSize = `${currentFontSize}px`;
};

const toggleContrast = () => {
  document.body.classList.toggle('high-contrast');
};

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const accessibilityBtn = document.getElementById('accessibility-btn');
const accessibilityMenu = document.getElementById('accessibility-menu');

accessibilityBtn.addEventListener('click', () => {
  accessibilityMenu.classList.toggle('hidden');
});

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// CARROSSEL
const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index = 0;
const totalSlides = track.children.length / 2; // como duplicamos

function updateCarousel() {
  const slideWidth = track.children[0].offsetWidth;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Auto-play infinito
function startAutoPlay() {
  setInterval(() => {
    index++;
    const slideWidth = track.children[0].offsetWidth;

    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    // Quando chega ao final da duplicação, volta ao início
    if (index >= totalSlides) {
      setTimeout(() => {
        track.style.transition = 'none';
        index = 0;
        track.style.transform = `translateX(0px)`;
      }, 500); // mesma duração da transição
    }
  }, 3000); // 3 segundos entre slides
}

nextButton.addEventListener('click', () => {
  index++;
  if (index >= totalSlides) index = 0;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  index--;
  if (index < 0) index = totalSlides - 1;
  updateCarousel();
});

// Inicia carrossel
updateCarousel();
startAutoPlay();