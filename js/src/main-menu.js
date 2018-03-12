"use strict";

var pageheader = document.querySelector(".page-header");
var menutoggle = document.querySelector(".toggle");
var mainnav = document.querySelector(".main-nav");
var icon = document.querySelector(".toggle__icon");

mainnav.classList.remove("page-header__nav--nojs");

mainnav.classList.remove("main-nav--opened");
mainnav.classList.add("main-nav--closed");

menutoggle.addEventListener("click", function() {
  if (mainnav.classList.contains("main-nav--closed")) {
    mainnav.classList.remove("main-nav--closed");
    mainnav.classList.add("main-nav--opened");
    icon.classList.add("toggle__icon--active");
  } else {
    mainnav.classList.remove("main-nav--opened");
    mainnav.classList.add("main-nav--closed");
    icon.classList.remove("toggle__icon--active");
  }
});
