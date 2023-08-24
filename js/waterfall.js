"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _default = {
  props: ["items"],
  template: "\n  <div class=\"waterfall-container\">\n      <div v-for=\"(column, columnIndex) in columns\" :key=\"column.id\" class=\"waterfall-column\">\n        <div v-for=\"item in column\" :key=\"item.id\" class=\"waterfall-item\" >\n          <!-- \u5716\u7247\u672C\u9AD4 -->\n\n          <img :src=\"item.image\" @load=\"onImageLoad(item)\" @click=\"toggleLightbox(item)\" alt=\"Item Image\">\n\n          <!-- \u5716\u7247\u5E95\u90E8\u7528\u6236\u982D\u50CF\u8207\u529F\u80FD\u5340\u584A -->\n\n          <div class=\"fallBottom\">\n            <div class=\"postIcon\">\n              <img :src=\"item.icon\">\n            </div>\n            <div class=\"function_btn_group\">\n              <div class=\"more\">\n                <img src=\"./images/icon/photowall-icon/love-circle.svg\">\n              </div>\n              <div class=\"more\"  @click=\"toggleLightbox2(item)\">\n                <img src=\"./images/icon/photowall-icon/bb-circle.svg\">\n              </div>\n            </div>\n\n            <!-- \u529F\u80FD\u5340\u584A -->\n            <!-- \u4F7F\u7528 item.lightboxOpen \u5C6C\u6027\u4F86\u63A7\u5236\u6BCF\u500B\u9805\u7684 Lightbox \u72C0\u614B -->\n            <!-- \u71C8\u7BB1 \u653E\u5927\u5716\u7247 -->\n            \n\n            <div v-if=\"item.lightboxOpen === true\" class=\"lightbox\" @click=\"toggleLightbox(item)\">\n              <div class=\"loginpage_base\" @click.stop>\n                <div class=\"close fallTop\">\n                  <div class=\"icon\" @click=\"toggleLightbox(item)\">\n                    <img src=\"./images/icon/components-icon/close-line.svg\" alt=\"close\" />\n                  </div>\n                </div>\n                <div class=\"loginPage waterFallStyle fallBody\">\n                  <div>\n                    <img :src=\"item.image\" alt=\"Item Image\">\n                  </div>\n                  <div class=\"fallBottom\">\n                    <div class=\"postIcon\">\n                      <img :src=\"item.icon\">\n                    </div>\n                    <div class=\"function_btn_group\">\n                      <div class=\"more\">\n                        <img src=\"./images/icon/photowall-icon/love-circle.svg\">\n                      </div>\n                      <div class=\"more\" @click=\"toggleLightbox2(item)\">\n                        <img src=\"./images/icon/photowall-icon/bb-circle.svg\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div> \n\n            <!-- \u71C8\u7BB1 \u6AA2\u8209\u8CBC\u6587 -->\n\n            <div v-if=\"item.lightboxReport === true\" class=\"lightbox\">\n              <div class=\"loginpage_base\">\n                <div class=\"close\">\n                  <div class=\"icon\" @click=\"toggleLightbox2(item)\">\n                    <img src=\"./images/icon/components-icon/close-line.svg\" alt=\"close\" />\n                  </div>\n                </div>\n                <div class=\"loginPage\">\n                  <div class=\"pageIsideContainer\">\n                    <h5>\u6AA2\u8209\u8CBC\u6587</h5>\n                  </div>\n                  <form action=\"#\" class=\"pwReport\">\n                    <div class=\"pwCb_group\">\n                      <input type=\"checkbox\" name=\"report1\" id=\"report1\">\n                      <label for=\"report1\">\u88F8\u9732\u3001\u8272\u60C5\u6216\u6027\u76F8\u95DC\u5167\u5BB9</label>\n                    </div>\n                    <div class=\"pwCb_group\">\n                      <input type=\"checkbox\" name=\"report2\" id=\"report2\">\n                      <label for=\"report2\">\u8650\u5F85\u52D5\u7269</label>\n                    </div>\n                    <div class=\"pwCb_group\">\n                      <input type=\"checkbox\" name=\"report3\" id=\"report3\">\n                      <label for=\"report3\">\u81EA\u6B98</label>\n                    </div>\n                    <div class=\"pwCb_group\">\n                      <input type=\"checkbox\" name=\"report4\" id=\"report4\">\n                      <label for=\"report4\">\u4EC7\u6068\u6D3B\u52D5</label>\n                    </div>\n                    <div class=\"pwCb_group\">\n                      <input type=\"checkbox\" name=\"report5\" id=\"report5\">\n                      <label for=\"report5\">\u5371\u96AA\u7269\u54C1</label>\n                    </div>\n                    <div class=\"pwCb_group\">\n                      <input type=\"checkbox\" name=\"report6\" id=\"report6\">\n                      <label for=\"report6\">\u4FB5\u72AF\u96B1\u79C1</label>\n                    </div>\n                    <div class=\"pwCb_group\">\n                      <input type=\"checkbox\" name=\"report7\" id=\"report7\">\n                      <label for=\"report7\">\u4FB5\u6B0A</label>\n                    </div>\n                  </form>\n                  <button class=\"btn_5\" @click=\"ignore_list(item.id),toggleLightbox2(item)\">\u9001\u51FA</button>\n                </div>\n              </div>\n            </div> \n          </div>\n        </div>\n      </div>\n    </div>\n    ",
  data: function data() {
    return {
      // ignoreList: [],
      columns: [[], [], []]
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.updateColumns();
    setTimeout(function () {
      _this.updateColumns();
    }, 150);

    //RWD監聽
    var self = this;
    window.addEventListener('resize', window._.debounce(function () {
      self.updateColumns();
    }, 150));
    // 滾動監聽
    // window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    loadItems: function loadItems() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _iterator, _step, item, shortestColumn;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(_this2.items);
              _context.prev = 1;
              _iterator.s();
            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 11;
                break;
              }
              item = _step.value;
              _context.next = 7;
              return _this2.loadImage(item);
            case 7:
              shortestColumn = _this2.getShortestColumn();
              shortestColumn.push(item);
            case 9:
              _context.next = 3;
              break;
            case 11:
              _context.next = 16;
              break;
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              _iterator.e(_context.t0);
            case 16:
              _context.prev = 16;
              _iterator.f();
              return _context.finish(16);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 13, 16, 19]]);
      }))();
    },
    // handleScroll() {
    //   const distanceToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);
    //   if (distanceToBottom < 500) {
    //     this.loadItems();
    //   }
    // },
    updateColumns: function updateColumns() {
      // Update columns based on screen width
      if (window.innerWidth < 700) {
        this.columns = [[], []];
      } else {
        this.columns = [[], [], []];
      }
      this.loadItems(); // Reload items into columns
    },
    loadImage: function loadImage(item) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                var img = new Image();
                img.src = item.image;
                img.onload = function () {
                  item.height = img.height; // 設置項目的高度
                  resolve();
                };
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onImageLoad: function onImageLoad(item) {
      var img = event.target;
      item.height = img.height; // 設置項目的實際高度
    },
    getShortestColumn: function getShortestColumn() {
      return this.columns.reduce(function (acc, column) {
        return column.reduce(function (sum, currItem) {
          return sum + currItem.height;
        }, 0) < acc.reduce(function (sum, currItem) {
          return sum + currItem.height;
        }, 0) ? column : acc;
      }, this.columns[0]);
    },
    toggleLightbox: function toggleLightbox(item) {
      // 在點擊時設定當前項目lightbox的狀態
      item.lightboxOpen = !item.lightboxOpen;
    },
    toggleLightbox2: function toggleLightbox2(item) {
      // 在點擊時設定當前項目lightboxReport的狀態
      item.lightboxReport = !item.lightboxReport;
    },
    ignore_list: function ignore_list(item) {
      var storedIgnoreList = localStorage.getItem('ignoreList');
      this.ignoreList = storedIgnoreList ? JSON.parse(storedIgnoreList) : [];
      if (!this.ignoreList.includes(item)) {
        this.ignoreList.push(item);
        localStorage.setItem('ignoreList', JSON.stringify(this.ignoreList));
      }
    }
  }
};
exports["default"] = _default;