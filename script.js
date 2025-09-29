// ========== ANIMAÇÃO DE ROLAGEM ==========
document.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// ========== QUIZ ==========
const quizForm = document.querySelector(".quiz-form");
const quizResult = document.querySelector(".quiz-result");

if (quizForm) {
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const respostas = {
      q1: 0, // primeira alternativa correta
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0
    };

    let score = 0;
    const questions = quizForm.querySelectorAll(".quiz-question");

    questions.forEach((question, index) => {
      const radios = question.querySelectorAll("input[type='radio']");
      const correctIndex = respostas[`q${index + 1}`];

      radios.forEach((radio, i) => {
        const label = radio.parentElement;
        label.style.background = "none";
        label.style.color = "inherit";

        if (radio.checked) {
          if (i === correctIndex) {
            score++;
            label.style.background = "#4caf50";
            label.style.color = "white";
          } else {
            label.style.background = "#f44336";
            label.style.color = "white";
          }
        } else if (i === correctIndex) {
          label.style.background = "#4caf50";
          label.style.color = "white";
        }
      });
    });

    quizResult.style.display = "block";
    quizResult.innerHTML = `<p>Você acertou <strong>${score}/5</strong> questões!</p>`;
  });
}

// ========== CARROSSEL ==========
const carouselImages = document.querySelector(".carousel-images");
const carouselWrapper = document.querySelector(".carousel-wrapper");
const images = carouselImages ? carouselImages.querySelectorAll("img") : [];
let currentIndex = 0;
let autoPlay = false;
let interval;

// Preview desfocado
const preview = document.createElement("div");
preview.classList.add("carousel-preview");
carouselWrapper?.appendChild(preview);

function updateCarousel() {
  if (!carouselImages) return;
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;

  // atualizar preview
  const nextIndex = (currentIndex + 1) % images.length;
  preview.innerHTML = `<img src="${images[nextIndex].src}" alt="preview">`;
}

// Botões
const prevButtons = document.querySelectorAll(".control-prev");
const nextButtons = document.querySelectorAll(".control-next");

prevButtons.forEach(btn =>
  btn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  })
);

nextButtons.forEach(btn =>
  btn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  })
);

// Play/Pause automático
const playButton = document.querySelector("[for='carousel-play']");
if (playButton) {
  playButton.addEventListener("click", () => {
    autoPlay = !autoPlay;
    if (autoPlay) {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
      }, 3000);
    } else {
      clearInterval(interval);
    }
  });
}

// Inicializar
updateCarousel();