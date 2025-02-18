const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');

const backgrounds = [
  'rgba(243, 235, 225, 1)',
  'rgba(234, 230, 252, 1)',
  'rgba(229, 230, 232, 1)',
];

const slides = Array.from(slider.querySelectorAll('.slider__wrapper'));
const slideCount = slides.length;
let slideIndex = 0;

const paginationButtons = Array.from(document.querySelectorAll('.slider__pagination-button'));

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideIndex = index;
    updateSlider();
  });
});

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  slider.style.backgroundColor = backgrounds[slideIndex];

  prevButton.disabled = slideIndex === 0;
  nextButton.disabled = slideIndex === slideCount - 1;

  paginationButtons.forEach((button, index) => {
    button.classList.toggle('slider__pagination-button--current', index === slideIndex);
  });
}

updateSlider();
