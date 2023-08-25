"use strict";

var _waterfall = _interopRequireDefault(require("./waterfall.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app2 = Vue.createApp({
  data: function data() {
    return {
      ignoreList: [],
      show: false,
      items: [],
      previewImage: null,
      db_items: [{
        id: "a_1",
        image: './images/pic/photoWall/photoWall01.png',
        icon: './images/pic/user1.png'
      }, {
        id: "a_2",
        image: './images/pic/photoWall/photoWall02.png',
        icon: './images/pic/user2.png'
      }, {
        id: "a_3",
        image: './images/pic/photoWall/photoWall03.png',
        icon: './images/pic/user1.png'
      }, {
        id: "a_4",
        image: './images/pic/photoWall/photoWall04.png',
        icon: './images/pic/user3.png'
      }, {
        id: "a_5",
        image: './images/pic/photoWall/photoWall05.png',
        icon: './images/pic/user3.png'
      }, {
        id: "a_6",
        image: './images/pic/photoWall/photoWall06.png',
        icon: './images/pic/user4.png'
      }, {
        id: "a_7",
        image: './images/pic/photoWall/photoWall07.png',
        icon: './images/pic/user5.png'
      }, {
        id: "a_8",
        image: './images/pic/photoWall/photoWall08.png',
        icon: './images/pic/user4.png'
      }, {
        id: "a_9",
        image: './images/pic/photoWall/photoWall09.png',
        icon: './images/pic/user3.png'
      }, {
        id: "a_10",
        image: './images/pic/photoWall/photoWall10.png',
        icon: './images/pic/user6.png'
      }, {
        id: "a_11",
        image: './images/pic/photoWall/photoWall11.png',
        icon: './images/pic/user2.png'
      }, {
        id: "a_12",
        image: './images/pic/photoWall/photoWall12.png',
        icon: './images/pic/user3.png'
      }, {
        id: "a_13",
        image: './images/pic/photoWall/photoWall13.png',
        icon: './images/pic/user4.png'
      }, {
        id: "a_14",
        image: './images/pic/photoWall/photoWall14.png',
        icon: './images/pic/user2.png'
      }, {
        id: "a_15",
        image: './images/pic/photoWall/photoWall15.png',
        icon: './images/pic/user4.png'
      }, {
        id: "a_16",
        image: './images/pic/photoWall/photoWall16.png',
        icon: './images/pic/user3.png'
      }]
    };
  },
  mounted: function mounted() {
    var my_tasks = JSON.parse(localStorage.getItem("ignoreList"));
    if (my_tasks) {
      this.ignoreList = my_tasks;
    }
    this.items = this.ignore(this.db_items, this.ignoreList);
  },
  methods: {
    handleDrop: function handleDrop(event) {
      var _this = this;
      event.preventDefault(); //用來防止圖片拖進瀏覽器的預設事件

      var file = event.dataTransfer.files[0];
      if (file && file.type.startsWith('./image/')) {
        var reader = new FileReader();
        reader.onload = function () {
          _this.previewImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
      ;
    },
    ignore: function ignore(input, _ignore) {
      var output = input.filter(function (item) {
        return !_ignore.includes(item.id);
      });
      // console.log(output);
      return output;
    },
    triggerFileInput: function triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileSelect: function handleFileSelect(event) {
      var _this2 = this;
      var file = event.target.files[0];
      if (file && file.type.startsWith('./image/')) {
        var reader = new FileReader();
        reader.onload = function () {
          _this2.previewImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    uploadImage: function uploadImage() {
      console.log("上傳圖片:", this.previewImage);
    }
  }
});
app2.component("PhotoFall", _waterfall["default"]);
app2.mount('#photofall');