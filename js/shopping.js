"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var app = Vue.createApp({
  data: function data() {
    return {
      currentStep: 0,
      steps: ["查看購物車", "填寫資料", "完成付款"],
      checked: false,
      checkedNames: [],
      member_data: {
        name: "王緯育",
        email: "service@tibame.com",
        phone: "0912345678"
      },
      spOrderName: "",
      spOrderEmail: "",
      spOrderPhone: "",
      sameMemberChecked: false,
      havePoints: 100,
      usePoints: 0,
      usePointsCheck: true,
      nowDate: null,
      orderID: "PT0004",
      spReadyName: "",
      spReadyEmail: "",
      spReadyPhone: "",
      cardNumber: ["", "", "", ""],
      cardDate: ["", ""],
      cardCVC: "",
      isStepTwoValid: false,
      validationErrors: [],
      shoppingItems: [{
        id: "Car",
        type: "spDriver",
        pictureSrc_m: "./images/pic/shop/goShop01_m.png",
        pictureSrc: "./images/pic/shop/goShop01.png",
        product: "寵物接送",
        listType: "轎車",
        spStepper: false,
        spPrice: 300,
        BuyNum: 1,
        listDate_S: "2023/8/17",
        listDate_E: "2023/8/17",
        listDate_T: "16:00"
      }, {
        id: "Hostel1",
        type: "spHostel",
        pictureSrc_m: "./images/pic/shop/goShop02_m.png",
        pictureSrc: "./images/pic/shop/goShop02.png",
        product: "快樂寵物旅館",
        listType: "狗套房",
        dogSize: "小型犬",
        spStepper: true,
        spPrice: 800,
        BuyNum: 1,
        listDate_S: "2023/8/17",
        listDate_E: "2023/8/20",
        listDate_T: "16:00"
      }, {
        id: "Hostel2",
        type: "spHostel",
        pictureSrc_m: "./images/pic/shop/goShop03_m.png",
        pictureSrc: "./images/pic/shop/goShop03.png",
        product: "快樂寵物旅館",
        listType: "貓套房",
        spStepper: true,
        spPrice: 800,
        BuyNum: 1,
        listDate_S: "2023/8/17",
        listDate_E: "2023/8/20",
        listDate_T: "16:00"
      }]
    };
  },
  // 預設全選。
  mounted: function mounted() {
    this.checked = true;
    this.checkedNames = this.shoppingItems.map(function (item) {
      return item.id;
    });
    var nextButton = document.getElementById("Go_index");
    nextButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    this.nowDate = new Date().toLocaleDateString("zh-TW", options);
  },
  methods: {
    sameMember: function sameMember() {
      if (this.sameMemberChecked === true) {
        this.spOrderName = this.member_data.name;
        this.spOrderEmail = this.member_data.email;
        this.spOrderPhone = this.member_data.phone;
      }
    },
    caculate_point: function caculate_point() {
      if (this.havePoints < this.totalPrice * 0.2) {
        this.usePoints = this.havePoints;
      } else {
        this.usePoints = this.totalPrice * 0.2;
      }
    },
    setCurrentStep: function setCurrentStep(index) {
      this.currentStep = index;
    },
    // 切換全選狀態。如果checked為true，則將checkedNames設置為所有購物項目的ID，否則將其清空。
    allChecked: function allChecked() {
      if (this.checked) {
        this.checkedNames = this.shoppingItems.map(function (item) {
          return item.id;
        });
      } else {
        this.checkedNames = [];
      }
    },
    // 格式化日期資訊，顯示成特定的格式
    useDate: function useDate(item) {
      if (item.spStepper) {
        item.listDate_D = Math.round((new Date(item.listDate_E) - new Date(item.listDate_S)) / (1000 * 60 * 60 * 24));
        var formattedStartDate = this.formatDate(item.listDate_S);
        var formattedEndDate = this.formatDate(item.listDate_E);
        return "".concat(formattedStartDate, " - ").concat(formattedEndDate, " (").concat(item.listDate_D, "\u665A)");
      } else {
        var formattedDate = this.formatDate(item.listDate_S);
        return "".concat(formattedDate, " \uFF5C ").concat(item.listDate_T);
      }
    },
    updateSubtotal: function updateSubtotal(item) {
      if (item.spStepper) {
        item.listDate_D = Math.round((new Date(item.listDate_E) - new Date(item.listDate_S)) / (1000 * 60 * 60 * 24));
        item.spSubtotal = item.spPrice * item.BuyNum * item.listDate_D;
      } else {
        item.listDate_D = 1;
        item.spSubtotal = item.spPrice * item.BuyNum * item.listDate_D;
      }
    },
    // 計算小計(單價、數量和天數)
    countSubtotal: function countSubtotal(item) {
      console.log(item);
      // const listDate_E = item.listDate_E
      // const listDate_S = item.listDate_S
      // const listDate_E = '2023/08/20'
      // const listDate_S = '2023/08/17'
      if (item.spStepper) {
        item.listDate_D = Math.round((new Date(item.listDate_E) - new Date(item.listDate_S)) / (1000 * 60 * 60 * 24));
        return item.spPrice * item.BuyNum * item.listDate_D;
      } else {
        item.listDate_D = 1;
        return item.spPrice * item.BuyNum * item.listDate_D;
      }
    },
    // 更新數量，更新小計。
    updateAmount: function updateAmount(item, change) {
      if (item.BuyNum < 9) {
        item.BuyNum = Math.max(1, item.BuyNum + change);
      } else if (item.BuyNum >= 9) {
        item.BuyNum = 8;
        item.BuyNum = Math.max(1, item.BuyNum + change);
      }
      this.updateSubtotal(item);
    },
    // 限制輸入在1～9之間
    handleInput: function handleInput(item) {
      if (item.BuyNum < 1) {
        item.BuyNum = 1;
      } else if (item.BuyNum > 9) {
        item.BuyNum = 9;
      }
      this.updateSubtotal(item);
    },
    // 格式化日期
    formatDate: function formatDate(dateStr) {
      var _dateStr$split = dateStr.split("/"),
        _dateStr$split2 = _slicedToArray(_dateStr$split, 2),
        month = _dateStr$split2[0],
        day = _dateStr$split2[1];
      return "".concat(Number(month), "\u6708").concat(Number(day), "\u65E5");
    },
    // 確認是否移除
    confirmDelete: function confirmDelete(index) {
      var isConfirmed = confirm("確認移除嗎？");
      if (isConfirmed) {
        // 點擊後刪除當前.spCard
        this.shoppingItems.splice(index, 1);
        // 引用整理索引
        this.updateIndex();
      }
    },
    // 重新整理索引值
    updateIndex: function updateIndex() {
      this.shoppingItems.forEach(function (item, index) {
        item.index = index;
      });
    },
    goToIndex: function goToIndex() {
      window.location.href = "index.html";
    },
    //信用卡焦點改變
    handleCC: function handleCC(index, lengthToCheck) {
      var inputElement = this.$refs["input".concat(index)];
      var inputValue = inputElement.value;
      var pattern = /^[0-9]*$/;
      if (!pattern.test(inputValue)) {
        inputElement.value = "";
        return;
      }
      if (inputValue.length === lengthToCheck && index < 7) {
        this.$refs["input".concat(index + 1)].focus();
      } else if (inputValue.length === 0 && index > 1) {
        this.$refs["input".concat(index - 1)].focus();
      }
    },
    // checkform() {
    //     this.validationErrors = [];
    //     if (this.spOrderName.trim() === "") {
    //         alert("姓名欄位不可為空值");
    //     } else if (!this.validateEmail(this.spOrderEmail)) {
    //         alert("請輸入正確的E-mail格式，例:XXX@XXX.XXX");
    //     } else if (!this.validatePhoneNumber(this.spOrderPhone)) {
    //         alert("請輸入正確的行動電話格式，例:09XXXXXXXX");
    //     } else if (this.cardNumber[0].trim() === "") {
    //         alert("信用卡欄位不可為空值");
    //     } else {
    //         this.currentStep++;
    //     }
    // },
    checkform: function checkform() {
      this.validationErrors = [];
      if (this.spOrderName.trim() === "") {
        alert("姓名欄位不可為空值");
      } else if (!this.validateEmail(this.spOrderEmail)) {
        alert("請輸入正確的E-mail格式，例:XXX@XXX.XXX");
      } else if (!this.validatePhoneNumber(this.spOrderPhone)) {
        alert("請輸入正確的行動電話格式，例:09XXXXXXXX");
      } else if (this.cardNumber[0].trim() === "") {
        alert("信用卡欄位不可為空值");
      } else {
        this.currentStep++;
      }
    },
    validateEmail: function validateEmail(email) {
      var emailRegex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      return emailRegex.test(email);
    },
    validatePhoneNumber: function validatePhoneNumber(phone) {
      var phoneRegex = /^09\d{8}$/;
      return phoneRegex.test(phone);
    },
    resetSameMemberChecked: function resetSameMemberChecked() {
      this.sameMemberChecked = false;
    }
  },
  computed: {
    // 計算總價格。
    totalPrice: function totalPrice() {
      var _this = this;
      return this.shoppingItems.reduce(function (total, item) {
        if (_this.checkedNames.includes(item.id)) {
          return total + _this.countSubtotal(item);
        }
        return total;
      }, 0);
    },
    canUsePoints: function canUsePoints() {
      var max = this.countSubtotal(this.shoppingItems[0]) * 0.2;
      return this.havePoints <= max ? this.havePoints : max;
    },
    payPrice: function payPrice() {
      return this.totalPrice - this.usePoints;
    },
    // 過濾勾選商品
    selectedItems: function selectedItems() {
      var _this2 = this;
      return this.shoppingItems.filter(function (item) {
        return _this2.checkedNames.includes(item.id);
      });
    }
  },
  watch: {
    // 監視checkedNames的變化。若所有都被選，checked為true，否為false。
    checkedNames: function checkedNames(val) {
      this.checked = val.length === this.shoppingItems.length;
    }
  }
});
app.mount("#spApp");