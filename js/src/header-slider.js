"use strict";

var container = document.querySelector(".page-header");
var bgs = container.querySelectorAll(".page-header__slide-bg");
var contents = container.querySelectorAll(".page-header__slide");

var intervalID = setInterval(changeSlide, 5000);

function changeSlide() {
  var newSlideIndex = Number(container.dataset.currentSlide) % 2 + 1;

  filterNodes(bgs, "page-header__slide-bg--shown", newSlideIndex);
  filterNodes(contents, "page-header__slide--shown", newSlideIndex);
  container.dataset.currentSlide = newSlideIndex;
}

function filterNodes(nodes, className, slideIndex) {
  Array.prototype.forEach.call(nodes, function(node) {
    node.classList.remove(className);
    if (Number(node.dataset.slide) === slideIndex) {
      node.classList.add(className);
    }
  });
}
