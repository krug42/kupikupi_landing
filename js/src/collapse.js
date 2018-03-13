"use strict";

var collapsers = document.querySelectorAll('.collapse');

Array.prototype.forEach.call(collapsers, function (node) {
  node.addEventListener('click', handleClick);
});

function handleClick(e) {
  var target = event.target;
  while (!target.matches('.collapse-item')) {
    if (target.matches('.collapse-item__header')) {
      target.parentNode.classList.toggle('collapse-item--active');
      return;
    }
    target = target.parentNode;
  }
}