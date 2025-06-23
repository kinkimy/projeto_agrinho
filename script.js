// CARROSSEL 
const track = document.querySelector('.carousel-track');
let slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');

let index = 1;
const slideWidth = slides[0].getBoundingClientRect().width;

// CLONAGEM PARA EFEITO INFINITO
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

slides = Array.from(track.children);
track.style.transform = `translateX(-${slideWidth * index}px)`;

// REPOSICIONAMENTO AO CHEGAR NOS CLONES
track.addEventListener('transitionend', () => {
  if (slides[index].id === 'first-clone') {
    track.style.transition = 'none';
    index = 1;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }
  if (slides[index].id === 'last-clone') {
    track.style.transition = 'none';
    index = slides.length - 2;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }
});

// BOTÕES DO CARROSSEL
nextBtn.addEventListener('click', () => {
  if (index >= slides.length - 1) return;
  index++;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${slideWidth * index}px)`;
});

prevBtn.addEventListener('click', () => {
  if (index <= 0) return;
  index--;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${slideWidth * index}px)`;
});

// CARROSSEL AUTOMÁTICO
setInterval(() => {
  if (index >= slides.length - 1) return;
  index++;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}, 5000);