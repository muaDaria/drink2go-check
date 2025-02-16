const navMain = document.querySelector('.header');
const navToggle = document.querySelector('.header__toggle');

//navMain.classList.remove('main-header--nojs');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('header--closed');
  navMain.classList.toggle('header--opened');
});

