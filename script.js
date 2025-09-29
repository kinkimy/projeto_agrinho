// =========================
// QUIZ
// =========================
const quizForm = document.querySelector('.quiz-form');
const quizResult = document.querySelector('.quiz-result');

quizForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let score = 0;
  const questions = quizForm.querySelectorAll('.quiz-question');

  questions.forEach((question, index) => {
    const selected = question.querySelector('input:checked');
    let correctAnswerText;

    // Define as respostas corretas
    switch(index) {
      case 0:
        correctAnswerText = "Com o desenvolvimento de novas máquinas e fertilizantes para uma melhor produção agrícola.";
        break;
      case 1:
        correctAnswerText = "Reduziu o número de trabalhadores rurais.";
        break;
      case 2:
        correctAnswerText = "Não, pois muitas pessoas que trabalhavam no campo tiveram que ir embora por não saber mexer com as novas máquinas.";
        break;
      case 3:
        correctAnswerText = "Fortaleceu os laços entre eles fazendo com que trabalhassem em conjunto.";
        break;
      case 4:
        correctAnswerText = "Máquinas e fertilizantes para uma melhor produção, além de mercado para produtos agrícolas.";
        break;
      default:
        correctAnswerText = "";
    }

    // Cria ou atualiza feedback
    let feedback = question.querySelector('.quiz-feedback');
    if(!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'quiz-feedback';
      question.appendChild(feedback);
    }

    if(selected) {
      const selectedText = selected.parentElement.textContent.trim();
      if(selectedText === correctAnswerText) {
        feedback.textContent = "✔ Correto!";
        feedback.className = "quiz-feedback correct";
        score++;
      } else {
        feedback.textContent = `✖ Incorreto! Resposta certa: ${correctAnswerText}`;
        feedback.className = "quiz-feedback incorrect";
      }
    } else {
      feedback.textContent = `✖ Nenhuma resposta selecionada. Resposta certa: ${correctAnswerText}`;
      feedback.className = "quiz-feedback incorrect";
    }
  });

  quizResult.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
  quizResult.style.display = "block";
});

// =========================
// CARROSSEL
// =========================
const carouselImages = document.querySelector('.carousel-images');
const carouselImgs = carouselImages.querySelectorAll('img');
let currentIndex = 0;
const totalImages = carouselImgs.length;

// Atualiza a posição do carrossel
function updateCarousel() {
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;

  carouselImgs.forEach((img, idx) => {
    if(idx === currentIndex) {
      img.style.filter = 'none';
    } else if(idx === (currentIndex + 1) % totalImages) {
      img.style.filter = 'blur(4px)';
    } else {
      img.style.filter = 'none';
    }
  });
}

// Botões de navegação
document.querySelectorAll('.control-next').forEach(btn => {
  btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });
});

document.querySelectorAll('.control-prev').forEach(btn => {
  btn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });
});

// Inicializa o carrossel
updateCarousel();

// Autoplay
const playCheckbox = document.getElementById('carousel-play');
if(playCheckbox.checked) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }, 5000); // 5 segundos
}
