"use strict";

var click_el = document.getElementById("showPopLogin");
click_el.addEventListener("click", function () {
  var ModalPage_el = document.getElementById("ModalPage");
  vm.ispop = true;
  vm.changePage(4);
});