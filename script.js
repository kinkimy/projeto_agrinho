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