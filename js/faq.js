"use strict";

// banner
window.addEventListener("scroll", function () {
  var parallaxBg = document.querySelector(".parallax-bg");
  var scrollValue = window.scrollY;
  parallaxBg.style.transform = "translateY(".concat(scrollValue * 0.7, "px)");
});

//頭部篩選
var faq = Vue.createApp({
  data: function data() {
    return {
      faq_index: 1,
      qAnda: [{
        name: 11,
        answer: 11
      }]
    };
  },
  mounted: function mounted() {
    this.setupAccordion();
  },
  methods: {
    faq_changePage: function faq_changePage(index) {
      this.faq_index = index;
    },
    setupAccordion: function setupAccordion() {
      var items = document.querySelectorAll(".accordion button");
      function toggleAccordion() {
        var itemToggle = this.getAttribute("aria-expanded");
        for (var i = 0; i < items.length; i++) {
          items[i].setAttribute("aria-expanded", "false");
        }
        if (itemToggle == "false") {
          this.setAttribute("aria-expanded", "true");
        }
      }
      items.forEach(function (item) {
        return item.addEventListener("click", toggleAccordion);
      });
    }
  }
});

//手風琴效果
var vm_faq = faq.mount("#faq");
var faqItems = document.querySelectorAll(".faq_list");
faqItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // 移除所有項目的 active 類
    faqItems.forEach(function (item) {
      item.classList.remove("active");
    });
    // 將點擊的項目添加 active 類
    this.classList.add("active");
  });
});

// 預設開頁面執行一次

// 預設展開第一個手風琴區塊
var firstAccordionButton = document.querySelector(".accordion button");
firstAccordionButton.setAttribute("aria-expanded", "true");