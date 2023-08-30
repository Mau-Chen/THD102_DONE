"use strict";

//刪除myPost
document.addEventListener("DOMContentLoaded", function () {
  var postDetail = document.querySelectorAll(".post-detail");
  postDetail.forEach(function (post_detail) {
    var postDelete = post_detail.querySelector(".post-delete");
    postDelete.addEventListener("click", function () {
      var isConfirmed = confirm('確定要刪除此貼文嗎？');
      // console.log("Hello, it's me");
      if (isConfirmed) {
        post_detail.style.display = 'none';
      }
      ;
    });
  });
});

//切換tab
document.addEventListener('DOMContentLoaded', function () {
  var sideBarLinks = document.querySelectorAll("[data-target]");
  sideBarLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // 防止默認事件（不導航）
      event.preventDefault();

      // 隱藏所有頁面
      var orders = document.querySelectorAll('[id^="order"]');
      orders.forEach(function (order) {
        order.style.display = "none";
      });

      // 顯示被點擊的連結對應的頁面
      var targetId = event.currentTarget.getAttribute("data-target");
      var targetOrder = document.getElementById(targetId);
      if (targetOrder) {
        targetOrder.style.display = "block";
      }
    });
  });
});

//讓出生日期只能選今天以前
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("myDateInput").setAttribute("max", today);
document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('order'); // 假設父元素的ID為 "order"
  var emptyMessage = document.getElementById('order5'); // 假設無訂單訊息的ID為 "order5"

  function checkIfEmpty() {
    if (container.children.length === 0) {
      emptyMessage.style.display = 'block';
    }
  }

  // 初始檢查
  checkIfEmpty();
  if (container) {
    container.addEventListener('click', function (event) {
      if (event.target.classList.contains('cancel-btn')) {
        var isConfirmed = confirm('確定要取消此預約嗎？');
        if (isConfirmed) {
          var liElement = event.target.closest('li.accordion');
          if (liElement) {
            liElement.parentNode.removeChild(liElement);
          }
          // 再次檢查是否為空
          checkIfEmpty();
        }
      }
    });
  }
});