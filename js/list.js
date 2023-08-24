"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: ["tasks"],
  template: "\n<li class=\"accordion\" v-for=\"(task, index) in tasks\" :key=\"index\">\n\n      <!-- first list box1 -->\n    <div class=\"ol-header jcSb\">\n        <div class=\"ol-headText\">\n            <p>\u8A02\u55AE\u65E5\u671F\uFF1A{{ task.OrderDate }}</p>\n            <p>\u8A02\u55AE\u7DE8\u865F\uFF1A{{ task.OrderId }}</p>\n        </div>\n        <div class=\"ol-button\">\n            <div v-if=\"!isOpen[index]\">\n              <span>NT$ {{ task.OrderList.map(o => +o.price).reduce((p, c) => p + c).toLocaleString('en-US') }}</span>\n            </div>\n            <div class=\"arrowIcon\" @click=\"open(index)\" :class=\"{ active_arrow: isOpen[index] }\">\n              <img src=\"./images/icon/components-icon/faqbt-circle.svg\" alt=\"button\">\n            </div>\n        </div>\n    </div>\n\n    <div v-if=\"isOpen[index]\">\n          <!-- \u6E05\u55AE\u90E8\u5206 -->\n        <div class=\"ol-content\">\n            <div v-for=\"(Order, index) in task.OrderList\" class=\"listContent\"><!-- li -->\n                <div class=\"ol-contentBox mb_24\"> \n                    <img :src=\"Order.image\" alt=\"driveDog\"> \n                    <div class=\"ol-ContText\">\n                        <h6 class=\"mb_16\"> {{ Order.name }} </h6>\n                        <p>{{ Order.date }}</p>\n                        <div class=\"ol-info jcSb\">\n                            <p>{{ Order.product }}</p>    \n                            <p>NT$ <span>{{ Order.price.toLocaleString('en-US') }}</span></p>\n                        </div>\n                    </div>\n                </div>\n\n                \n            </div>\n\n            <!-- \u6298\u6263\u90E8\u5206 -->\n            <div class=\"ol-money mb_24\">\n                <div class=\"ol-count mb_16 jcSb\">\n                    <p>{{ task.OrderList.length }}\u4EF6\u5408\u8A08</p>\n                    <span>NT$ <span>{{ task.OrderList.map(o => +o.price).reduce((p, c) => p + c).toLocaleString('en-US') }}</span></span>\n                </div>\n                <div class=\"ol-count jcSb\">\n                    <p>Pet Points \u6298\u62B5</p>\n                    <span>-NT$ {{ task.reduce.toLocaleString('en-US') }}</span>\n                </div>\n            </div>\n\n            <div class=\"ol-total\">\n                <div class=\"ol-count jcSb\">\n                    <p>\u7E3D\u8A08</p>\n                    <span>NT$ {{ (task.OrderList.map(o => +o.price).reduce((p, c) => p + c) - task.reduce).toLocaleString('en-US') }}</span>\n                </div>\n                <p><img src=\"./images/icon/member-icon/black-points.svg\" alt=\"points-icon\">\u5DF2\u7372\u5F97 Pet Points <span>50</span> \u9EDE</p>  \n                <button v-if=\"index === 0\" class=\"btn_4_border cancel-btn\">\u53D6\u6D88\u9810\u7D04</button>\n            </div>\n        </div>\n    </div>\n</li>  \n    ",
  data: function data() {
    return {
      isOpen: [true].concat(new Array(this.tasks.length - 1).fill(false))
    };
  },
  methods: {
    open: function open(index) {
      this.isOpen[index] = !this.isOpen[index];
    },
    getTotalPrice: function getTotalPrice(orderList) {
      return orderList.map(function (o) {
        return +o.price;
      }).reduce(function (p, c) {
        return p + c;
      }, 0);
    },
    calculateTotal: function calculateTotal(orderList, reduction) {
      return this.getTotalPrice(orderList) - reduction;
    }
  }
};
exports["default"] = _default;