const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.js-toggle-button');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('nav--closed');
  navMain.classList.toggle('nav--opened');
});
