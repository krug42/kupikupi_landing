"use strict";

var rangePicker = document.querySelector('.range-picker');
var input = rangePicker.querySelector('.range-picker__input');
var progress = rangePicker.querySelector('.range-picker__progress');
var initialWidth = progress.offsetWidth;
var THUMB_WIDTH = 16;

input && input.addEventListener('input', change);
input && input.addEventListener('change', change);

function change(e) {
  var value = e ? e.target.value : input.value;

  if (progress) {
    progress.style.width = ((initialWidth * value / 60) - (THUMB_WIDTH * value / 60)) + 'px';
  };
}

change();