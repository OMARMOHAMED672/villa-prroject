const carousel = document.getElementById('carousel');
const buttons = document.querySelectorAll('[data-slide]');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateCarousel(index) {
  // Update active slide
  carousel.style.transform = `translateX(-${index * 100}%)`;

  // Update dot colors
  buttons.forEach(btn => btn.classList.replace('bg-orange-500', 'bg-gray-300'));
  buttons[index].classList.replace('bg-gray-300', 'bg-orange-500');
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + buttons.length) % buttons.length;
  updateCarousel(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % buttons.length;
  updateCarousel(currentIndex);
});

// Optional: Auto-slide functionality
setInterval(() => {
  currentIndex = (currentIndex + 1) % buttons.length;
  updateCarousel(currentIndex);
}, 3000);
