let bodyElement = document.body;
let pageWrapperElement = bodyElement.querySelector('.wrapper');
let navButtonElement = bodyElement.querySelector('.header__menu-button');
let headerElement = bodyElement.querySelector('.header');

const closeNavigation = ({target}) => {
  if (!target.closest('.header__content')) {
    // headerElement.classList.remove('header--opened');

    document.removeEventListener('click', closeNavigation);
  }
};

const closeOnResize = () => {
  if (document.body.offsetWidth > '767') {
    headerElement.classList.remove('header--opened');
  }
};

// Mobile menu toggle
const navMenuOpen = () => {
  if (pageWrapperElement.classList.contains('wrapper--nojs')) {
    pageWrapperElement.classList.remove('wrapper--nojs');
  }

  if (navButtonElement) {
    navButtonElement.addEventListener('click', function () {
      headerElement.classList.toggle('header--opened');

      document.addEventListener('click', closeNavigation);
    });
    window.addEventListener('resize', closeOnResize);
  }
};

export {navMenuOpen};
