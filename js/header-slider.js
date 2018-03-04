"use strict";

var container = document.querySelector(".page-header__slide-bg");
var slides = document.querySelectorAll(".page-header__slide");

var intervalID = setInterval(changeSlide, 3000);

function changeSlide() {
  var newSlideIndex = Number(container.dataset.currentSlide) % 2 + 1;

  Array.prototype.forEach.call(slides, function(slide) {
    slide.classList.remove("page-header__slide--shown");
    if (Number(slide.dataset.slide) === newSlideIndex) {
      container.dataset.currentSlide = newSlideIndex;
      slide.classList.add("page-header__slide--shown");
    }
  });
}
