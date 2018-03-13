"use strict";

var reviewsSlider = document.querySelector('.reviews-slider');

var reviewsSwiper = new Swiper(reviewsSlider, {
  speed: 400,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  loopedSlides: 3,
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  pagination: {
    el: '.reviews-slider__pagination',
    type: 'bullets',
    bulletClass: 'reviews-slider__pagination-bullet',
    bulletActiveClass: 'reviews-slider__pagination-bullet--active',
  },
})