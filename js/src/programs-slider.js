"use strict";

var programsSlider = document.querySelector('.programs-slider__swiper')
var breakpoint = 1125;
var programsSwiper;

checkWidth();
window.addEventListener('resize', checkWidth)

function checkWidth() {
  if (document.documentElement.clientWidth >= breakpoint) {
    if (programsSwiper && programsSwiper.initialized) programsSwiper.destroy();
  } else if (!programsSwiper || !programsSwiper.initialized) {
    programsSwiper = new Swiper(programsSlider, {
      speed: 400,
      slidesPerView: 'auto',
      centeredSlides: true,
      watchOverflow: true,
      loop: true,
      loopedSlides: 8,
      navigation: {
        nextEl: '.slider-buttons__button--next',
        prevEl: '.slider-buttons__button--prev',
      }
    })
  }
}