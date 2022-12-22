import {swiperInit} from './modules/swiper';
import {searchInit} from './utils/searchInit';
import {navMenuOpen} from './utils/mobileNav';

window.addEventListener('DOMContentLoaded', () => {


  window.addEventListener('load', () => {
    swiperInit();
    searchInit();
    navMenuOpen();
  });
});
