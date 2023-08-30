"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// rwd nav button
function navigateTo(url) {
  window.location.href = url;
}
var Hambuger = /*#__PURE__*/_createClass(function Hambuger() {
  _classCallCheck(this, Hambuger);
  window.pc = true;
  var shapePhilosophy = new mojs.Shape({
    parent: document.getElementById("hambugerBg"),
    shape: "circle",
    radius: window.pc ? 20 : 20,
    // angle: 30,
    fill: "#6e60f6",
    opacity: 1,
    isShowStart: true
  });
  var hambugerIcon = document.getElementsByClassName("hambuger__icon")[0];
  var lineTop = document.getElementsByClassName("line--top")[0];
  var lineBottom = document.getElementsByClassName("line--bottom")[0];
  var menuBody = document.getElementById("hambugerBody");
  var items = menuBody.querySelectorAll(".item");
  hambugerIcon.addEventListener("click", function () {
    hambugerIcon.classList.toggle("is-open");
    if (hambugerIcon.classList.contains("is-open")) {
      shapePhilosophy.then({
        scale: window.pc ? 80 : 40,
        duration: 600,
        // opacity: 1,
        easing: "expo.out"
      });
      menuBody.style.display = "block";
      TweenMax.staggerTo(items, 0.3, {
        opacity: 1,
        y: 0,
        delay: 0.2,
        ease: Power2.easeOut
      }, 0.075);
      TweenMax.to(lineTop, 0.4, {
        y: 2,
        ease: Power4.easeOut,
        onComplete: function onComplete() {
          TweenMax.to(lineTop, 0.4, {
            rotation: 45,
            transformOrigin: "center center",
            ease: Power4.easeOut
          });
        }
      });
      TweenMax.to(lineBottom, 0.4, {
        y: -2,
        transformOrigin: "left top",
        ease: Power4.easeOut,
        onComplete: function onComplete() {
          TweenMax.to(lineBottom, 0.4, {
            rotation: -45,
            transformOrigin: "center center",
            ease: Power4.easeOut
          });
        }
      });
      // 禁用捲軸
      document.body.style.overflow = "hidden";
    } else {
      shapePhilosophy.then({
        scale: 1,
        duration: 400,
        delay: 300,
        easing: "expo.out"
      });
      TweenMax.staggerTo(items, 0.2, {
        opacity: 0,
        y: "20px",
        onComplete: function onComplete() {
          menuBody.style.display = "none";
        }
      }, 0.01);
      TweenMax.to(lineTop, 0.4, {
        rotation: 0,
        transformOrigin: "center center",
        ease: Power4.easeOut,
        onComplete: function onComplete() {
          TweenMax.to(lineTop, 0.4, {
            y: 0,
            ease: Power4.easeOut
          });
        }
      });
      TweenMax.to(lineBottom, 0.4, {
        rotation: 0,
        transformOrigin: "center center",
        ease: Power4.easeOut,
        onComplete: function onComplete() {
          TweenMax.to(lineBottom, 0.4, {
            y: 0,
            transformOrigin: "left top",
            ease: Power4.easeOut
          });
        }
      });
      // 啟用捲軸
      document.body.style.overflow = "auto";
    }
    shapePhilosophy.play();
  });
});
new Hambuger();

//頁面停留字的變色
document.addEventListener("DOMContentLoaded", function () {
  var currentPath = window.location.pathname; // 獲取當前頁面的路徑
  console.log(currentPath);
  var hostelLink = document.getElementById("hostelLink");
  var driverLink = document.getElementById("driverLink");
  var photoLink = document.getElementById("photoLink");
  var shoppLink = document.getElementById("shoppLink");
  if (currentPath.includes("hostel.html")) {
    hostelLink.classList.add("active"); // 添加 .active 類別
  } else if (currentPath.includes("driver.html")) {
    driverLink.classList.add("active");
  } else if (currentPath.includes("photowall.html")) {
    photoLink.classList.add("active");
  } else if (currentPath.includes("shopping.html")) {
    shoppLink.classList.add("active");
  }
});

//滑鼠移到購物車上面的展示效果
document.addEventListener("DOMContentLoaded", function () {
  var shoopElement = document.querySelector(".shoop");
  var shoppingCartElement = document.querySelector(".shopping-cart");
  shoopElement.addEventListener("mouseenter", function () {
    shoppingCartElement.style.display = "block";
  });
  shoopElement.addEventListener("mouseleave", function () {
    shoppingCartElement.style.display = "none";
  });
});