import {swiperInit} from './modules/swiper';
import {searchInit} from './utils/searchInit';

window.addEventListener('DOMContentLoaded', () => {


  window.addEventListener('load', () => {
    swiperInit();
    searchInit();
  });
});
