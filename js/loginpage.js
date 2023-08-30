"use strict";

function removeLogin123Class() {
  setTimeout(function () {
    var modalPage = document.getElementById("ModalPage");
    if (modalPage) {
      modalPage.classList.remove("login123");
    }
  }, 10);
}
removeLogin123Class();
var ModalPage = Vue.createApp({
  data: function data() {
    return {
      text: "Hello World!",
      returnStatus: "",
      index: 0,
      ispop: false,
      account: "",
      password: "",
      success: false
    };
  },
  methods: {
    changePage: function changePage(newIndex) {
      this.index = newIndex;
    },
    handleSubmit: function handleSubmit() {
      // 執行表單提交的處理
      fetch("/php/login.php", {
        method: "POST",
        mode: "cors",
        body: new URLSearchParams({
          account: this.account,
          password: this.password
        })
      }).then(function (response) {
        return response.json();
      }) // 解析 JSON 回應
      .then(function (data) {
        if (data.status === "success") {
          // 如果回應為成功，執行頁面跳轉
          window.open("member.html", "_self");
        } else if (data.status === "error") {
          // 如果回應為錯誤，處理無效認證的情況
          console.log(data.message);
        }
      })["catch"](function (error) {
        console.error("Error:", error);
      });
    }
  }
});
var vm = ModalPage.mount("#ModalPage");