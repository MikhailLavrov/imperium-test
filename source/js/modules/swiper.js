import Swiper, {Navigation} from 'swiper';

// init Swiper:
const swiperInit = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    autoHeight: false,
    touchRatio: 2,
    speed: 1000,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export {swiperInit};
