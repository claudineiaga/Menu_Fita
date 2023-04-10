'use strict';

var RbMenu = function(elmId) {
  var elm = document.querySelector(elmId);
  console.log(elm);
  var target = document.querySelector(elm.getAttribute('rb-target'));

  elm.addEventListener('click', function(evt) {
    if (target.classList.contains('active') === true) {
      target.classList.remove('active');
    }
    else {
      target.classList.add('active');
    }
  });
}
RbMenu('#rb_menu_toggle');
