"use strict";

var _excluded = ["openOnTop", "internalModelValue", "arrMapValues"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var VueDatePicker = function (n) {
  "use strict";

  function Vt() {
    return n.openBlock(), n.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [n.createElementVNode("path", {
      d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
    }), n.createElementVNode("path", {
      d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), n.createElementVNode("path", {
      d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), n.createElementVNode("path", {
      d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
    })]);
  }
  function Yr() {
    return n.openBlock(), n.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [n.createElementVNode("path", {
      d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
    }), n.createElementVNode("path", {
      d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })]);
  }
  function xn() {
    return n.openBlock(), n.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [n.createElementVNode("path", {
      d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })]);
  }
  function Vn() {
    return n.openBlock(), n.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [n.createElementVNode("path", {
      d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
    })]);
  }
  function Yn() {
    return n.openBlock(), n.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [n.createElementVNode("path", {
      d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
    }), n.createElementVNode("path", {
      d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    })]);
  }
  function Rn() {
    return n.openBlock(), n.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [n.createElementVNode("path", {
      d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })]);
  }
  function In() {
    return n.openBlock(), n.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      "class": "dp__icon"
    }, [n.createElementVNode("path", {
      d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })]);
  }
  function Fe(t) {
    return Fe = typeof Symbol == "function" && _typeof(Symbol.iterator) == "symbol" ? function (a) {
      return _typeof(a);
    } : function (a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : _typeof(a);
    }, Fe(t);
  }
  function ae(t) {
    if (t === null || t === !0 || t === !1) return NaN;
    var a = Number(t);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  function Q(t, a) {
    if (a.length < t) throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + a.length + " present");
  }
  function oe(t) {
    Q(1, arguments);
    var a = Object.prototype.toString.call(t);
    return t instanceof Date || Fe(t) === "object" && a === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || a === "[object Number]" ? new Date(t) : ((typeof t == "string" || a === "[object String]") && (typeof console === "undefined" ? "undefined" : _typeof(console)) < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
  }
  function Ze(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = ae(a);
    return isNaN(e) ? new Date(NaN) : (e && r.setDate(r.getDate() + e), r);
  }
  function Ke(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = ae(a);
    if (isNaN(e)) return new Date(NaN);
    if (!e) return r;
    var o = r.getDate(),
      i = new Date(r.getTime());
    i.setMonth(r.getMonth() + e + 1, 0);
    var l = i.getDate();
    return o >= l ? i : (r.setFullYear(i.getFullYear(), i.getMonth(), o), r);
  }
  function Un(t, a) {
    if (Q(2, arguments), !a || Fe(a) !== "object") return new Date(NaN);
    var r = a.years ? ae(a.years) : 0,
      e = a.months ? ae(a.months) : 0,
      o = a.weeks ? ae(a.weeks) : 0,
      i = a.days ? ae(a.days) : 0,
      l = a.hours ? ae(a.hours) : 0,
      u = a.minutes ? ae(a.minutes) : 0,
      p = a.seconds ? ae(a.seconds) : 0,
      y = oe(t),
      D = e || r ? Ke(y, e + r * 12) : y,
      k = i || o ? Ze(D, i + o * 7) : D,
      f = u + l * 60,
      v = p + f * 60,
      I = v * 1e3,
      Y = new Date(k.getTime() + I);
    return Y;
  }
  function Rr(t, a) {
    Q(2, arguments);
    var r = oe(t).getTime(),
      e = ae(a);
    return new Date(r + e);
  }
  var Ir = {};
  function qe() {
    return Ir;
  }
  function st(t, a) {
    var r, e, o, i, l, u, p, y;
    Q(1, arguments);
    var D = qe(),
      k = ae((r = (e = (o = (i = a == null ? void 0 : a.weekStartsOn) !== null && i !== void 0 ? i : a == null || (l = a.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && o !== void 0 ? o : D.weekStartsOn) !== null && e !== void 0 ? e : (p = D.locale) === null || p === void 0 || (y = p.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && r !== void 0 ? r : 0);
    if (!(k >= 0 && k <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = oe(t),
      v = f.getDay(),
      I = (v < k ? 7 : 0) + v - k;
    return f.setDate(f.getDate() - I), f.setHours(0, 0, 0, 0), f;
  }
  function Yt(t) {
    return Q(1, arguments), st(t, {
      weekStartsOn: 1
    });
  }
  function Ur(t) {
    Q(1, arguments);
    var a = oe(t),
      r = a.getFullYear(),
      e = new Date(0);
    e.setFullYear(r + 1, 0, 4), e.setHours(0, 0, 0, 0);
    var o = Yt(e),
      i = new Date(0);
    i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
    var l = Yt(i);
    return a.getTime() >= o.getTime() ? r + 1 : a.getTime() >= l.getTime() ? r : r - 1;
  }
  function Wr(t) {
    Q(1, arguments);
    var a = Ur(t),
      r = new Date(0);
    r.setFullYear(a, 0, 4), r.setHours(0, 0, 0, 0);
    var e = Yt(r);
    return e;
  }
  function Rt(t) {
    var a = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return a.setUTCFullYear(t.getFullYear()), t.getTime() - a.getTime();
  }
  function Wn(t) {
    Q(1, arguments);
    var a = oe(t);
    return a.setHours(0, 0, 0, 0), a;
  }
  var Fr = 864e5;
  function Lr(t, a) {
    Q(2, arguments);
    var r = Wn(t),
      e = Wn(a),
      o = r.getTime() - Rt(r),
      i = e.getTime() - Rt(e);
    return Math.round((o - i) / Fr);
  }
  function Fn(t, a) {
    Q(2, arguments);
    var r = ae(a);
    return Ke(t, r * 12);
  }
  var Xt = 6e4,
    Zt = 36e5,
    Hr = 1e3;
  function Ln(t) {
    return Q(1, arguments), t instanceof Date || Fe(t) === "object" && Object.prototype.toString.call(t) === "[object Date]";
  }
  function Mt(t) {
    if (Q(1, arguments), !Ln(t) && typeof t != "number") return !1;
    var a = oe(t);
    return !isNaN(Number(a));
  }
  function Hn(t, a) {
    var r;
    Q(1, arguments);
    var e = t || {},
      o = oe(e.start),
      i = oe(e.end),
      l = i.getTime();
    if (!(o.getTime() <= l)) throw new RangeError("Invalid interval");
    var u = [],
      p = o;
    p.setHours(0, 0, 0, 0);
    var y = Number((r = a == null ? void 0 : a.step) !== null && r !== void 0 ? r : 1);
    if (y < 1 || isNaN(y)) throw new RangeError("`options.step` must be a number greater than 1");
    for (; p.getTime() <= l;) u.push(oe(p)), p.setDate(p.getDate() + y), p.setHours(0, 0, 0, 0);
    return u;
  }
  function zr(t, a) {
    var r, e, o, i, l, u, p, y;
    Q(1, arguments);
    var D = qe(),
      k = ae((r = (e = (o = (i = a == null ? void 0 : a.weekStartsOn) !== null && i !== void 0 ? i : a == null || (l = a.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && o !== void 0 ? o : D.weekStartsOn) !== null && e !== void 0 ? e : (p = D.locale) === null || p === void 0 || (y = p.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && r !== void 0 ? r : 0);
    if (!(k >= 0 && k <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = oe(t),
      v = f.getDay(),
      I = (v < k ? -7 : 0) + 6 - (v - k);
    return f.setDate(f.getDate() + I), f.setHours(23, 59, 59, 999), f;
  }
  function zn(t, a) {
    Q(2, arguments);
    var r = ae(a);
    return Rr(t, -r);
  }
  var Kr = 864e5;
  function qr(t) {
    Q(1, arguments);
    var a = oe(t),
      r = a.getTime();
    a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
    var e = a.getTime(),
      o = r - e;
    return Math.floor(o / Kr) + 1;
  }
  function gt(t) {
    Q(1, arguments);
    var a = 1,
      r = oe(t),
      e = r.getUTCDay(),
      o = (e < a ? 7 : 0) + e - a;
    return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
  }
  function Kn(t) {
    Q(1, arguments);
    var a = oe(t),
      r = a.getUTCFullYear(),
      e = new Date(0);
    e.setUTCFullYear(r + 1, 0, 4), e.setUTCHours(0, 0, 0, 0);
    var o = gt(e),
      i = new Date(0);
    i.setUTCFullYear(r, 0, 4), i.setUTCHours(0, 0, 0, 0);
    var l = gt(i);
    return a.getTime() >= o.getTime() ? r + 1 : a.getTime() >= l.getTime() ? r : r - 1;
  }
  function jr(t) {
    Q(1, arguments);
    var a = Kn(t),
      r = new Date(0);
    r.setUTCFullYear(a, 0, 4), r.setUTCHours(0, 0, 0, 0);
    var e = gt(r);
    return e;
  }
  var Gr = 6048e5;
  function qn(t) {
    Q(1, arguments);
    var a = oe(t),
      r = gt(a).getTime() - jr(a).getTime();
    return Math.round(r / Gr) + 1;
  }
  function ut(t, a) {
    var r, e, o, i, l, u, p, y;
    Q(1, arguments);
    var D = qe(),
      k = ae((r = (e = (o = (i = a == null ? void 0 : a.weekStartsOn) !== null && i !== void 0 ? i : a == null || (l = a.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && o !== void 0 ? o : D.weekStartsOn) !== null && e !== void 0 ? e : (p = D.locale) === null || p === void 0 || (y = p.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && r !== void 0 ? r : 0);
    if (!(k >= 0 && k <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = oe(t),
      v = f.getUTCDay(),
      I = (v < k ? 7 : 0) + v - k;
    return f.setUTCDate(f.getUTCDate() - I), f.setUTCHours(0, 0, 0, 0), f;
  }
  function Jt(t, a) {
    var r, e, o, i, l, u, p, y;
    Q(1, arguments);
    var D = oe(t),
      k = D.getUTCFullYear(),
      f = qe(),
      v = ae((r = (e = (o = (i = a == null ? void 0 : a.firstWeekContainsDate) !== null && i !== void 0 ? i : a == null || (l = a.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && e !== void 0 ? e : (p = f.locale) === null || p === void 0 || (y = p.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
    if (!(v >= 1 && v <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var I = new Date(0);
    I.setUTCFullYear(k + 1, 0, v), I.setUTCHours(0, 0, 0, 0);
    var Y = ut(I, a),
      R = new Date(0);
    R.setUTCFullYear(k, 0, v), R.setUTCHours(0, 0, 0, 0);
    var A = ut(R, a);
    return D.getTime() >= Y.getTime() ? k + 1 : D.getTime() >= A.getTime() ? k : k - 1;
  }
  function Qr(t, a) {
    var r, e, o, i, l, u, p, y;
    Q(1, arguments);
    var D = qe(),
      k = ae((r = (e = (o = (i = a == null ? void 0 : a.firstWeekContainsDate) !== null && i !== void 0 ? i : a == null || (l = a.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && o !== void 0 ? o : D.firstWeekContainsDate) !== null && e !== void 0 ? e : (p = D.locale) === null || p === void 0 || (y = p.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && r !== void 0 ? r : 1),
      f = Jt(t, a),
      v = new Date(0);
    v.setUTCFullYear(f, 0, k), v.setUTCHours(0, 0, 0, 0);
    var I = ut(v, a);
    return I;
  }
  var Xr = 6048e5;
  function jn(t, a) {
    Q(1, arguments);
    var r = oe(t),
      e = ut(r, a).getTime() - Qr(r, a).getTime();
    return Math.round(e / Xr) + 1;
  }
  function ge(t, a) {
    for (var r = t < 0 ? "-" : "", e = Math.abs(t).toString(); e.length < a;) e = "0" + e;
    return r + e;
  }
  var Zr = {
    y: function y(a, r) {
      var e = a.getUTCFullYear(),
        o = e > 0 ? e : 1 - e;
      return ge(r === "yy" ? o % 100 : o, r.length);
    },
    M: function M(a, r) {
      var e = a.getUTCMonth();
      return r === "M" ? String(e + 1) : ge(e + 1, 2);
    },
    d: function d(a, r) {
      return ge(a.getUTCDate(), r.length);
    },
    a: function a(_a2, r) {
      var e = _a2.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (r) {
        case "a":
        case "aa":
          return e.toUpperCase();
        case "aaa":
          return e;
        case "aaaaa":
          return e[0];
        case "aaaa":
        default:
          return e === "am" ? "a.m." : "p.m.";
      }
    },
    h: function h(a, r) {
      return ge(a.getUTCHours() % 12 || 12, r.length);
    },
    H: function H(a, r) {
      return ge(a.getUTCHours(), r.length);
    },
    m: function m(a, r) {
      return ge(a.getUTCMinutes(), r.length);
    },
    s: function s(a, r) {
      return ge(a.getUTCSeconds(), r.length);
    },
    S: function S(a, r) {
      var e = r.length,
        o = a.getUTCMilliseconds(),
        i = Math.floor(o * Math.pow(10, e - 3));
      return ge(i, r.length);
    }
  };
  var ot = Zr;
  var vt = {
      am: "am",
      pm: "pm",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    Jr = {
      G: function G(a, r, e) {
        var o = a.getUTCFullYear() > 0 ? 1 : 0;
        switch (r) {
          case "G":
          case "GG":
          case "GGG":
            return e.era(o, {
              width: "abbreviated"
            });
          case "GGGGG":
            return e.era(o, {
              width: "narrow"
            });
          case "GGGG":
          default:
            return e.era(o, {
              width: "wide"
            });
        }
      },
      y: function y(a, r, e) {
        if (r === "yo") {
          var o = a.getUTCFullYear(),
            i = o > 0 ? o : 1 - o;
          return e.ordinalNumber(i, {
            unit: "year"
          });
        }
        return ot.y(a, r);
      },
      Y: function Y(a, r, e, o) {
        var i = Jt(a, o),
          l = i > 0 ? i : 1 - i;
        if (r === "YY") {
          var u = l % 100;
          return ge(u, 2);
        }
        return r === "Yo" ? e.ordinalNumber(l, {
          unit: "year"
        }) : ge(l, r.length);
      },
      R: function R(a, r) {
        var e = Kn(a);
        return ge(e, r.length);
      },
      u: function u(a, r) {
        var e = a.getUTCFullYear();
        return ge(e, r.length);
      },
      Q: function Q(a, r, e) {
        var o = Math.ceil((a.getUTCMonth() + 1) / 3);
        switch (r) {
          case "Q":
            return String(o);
          case "QQ":
            return ge(o, 2);
          case "Qo":
            return e.ordinalNumber(o, {
              unit: "quarter"
            });
          case "QQQ":
            return e.quarter(o, {
              width: "abbreviated",
              context: "formatting"
            });
          case "QQQQQ":
            return e.quarter(o, {
              width: "narrow",
              context: "formatting"
            });
          case "QQQQ":
          default:
            return e.quarter(o, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      q: function q(a, r, e) {
        var o = Math.ceil((a.getUTCMonth() + 1) / 3);
        switch (r) {
          case "q":
            return String(o);
          case "qq":
            return ge(o, 2);
          case "qo":
            return e.ordinalNumber(o, {
              unit: "quarter"
            });
          case "qqq":
            return e.quarter(o, {
              width: "abbreviated",
              context: "standalone"
            });
          case "qqqqq":
            return e.quarter(o, {
              width: "narrow",
              context: "standalone"
            });
          case "qqqq":
          default:
            return e.quarter(o, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      M: function M(a, r, e) {
        var o = a.getUTCMonth();
        switch (r) {
          case "M":
          case "MM":
            return ot.M(a, r);
          case "Mo":
            return e.ordinalNumber(o + 1, {
              unit: "month"
            });
          case "MMM":
            return e.month(o, {
              width: "abbreviated",
              context: "formatting"
            });
          case "MMMMM":
            return e.month(o, {
              width: "narrow",
              context: "formatting"
            });
          case "MMMM":
          default:
            return e.month(o, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      L: function L(a, r, e) {
        var o = a.getUTCMonth();
        switch (r) {
          case "L":
            return String(o + 1);
          case "LL":
            return ge(o + 1, 2);
          case "Lo":
            return e.ordinalNumber(o + 1, {
              unit: "month"
            });
          case "LLL":
            return e.month(o, {
              width: "abbreviated",
              context: "standalone"
            });
          case "LLLLL":
            return e.month(o, {
              width: "narrow",
              context: "standalone"
            });
          case "LLLL":
          default:
            return e.month(o, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      w: function w(a, r, e, o) {
        var i = jn(a, o);
        return r === "wo" ? e.ordinalNumber(i, {
          unit: "week"
        }) : ge(i, r.length);
      },
      I: function I(a, r, e) {
        var o = qn(a);
        return r === "Io" ? e.ordinalNumber(o, {
          unit: "week"
        }) : ge(o, r.length);
      },
      d: function d(a, r, e) {
        return r === "do" ? e.ordinalNumber(a.getUTCDate(), {
          unit: "date"
        }) : ot.d(a, r);
      },
      D: function D(a, r, e) {
        var o = qr(a);
        return r === "Do" ? e.ordinalNumber(o, {
          unit: "dayOfYear"
        }) : ge(o, r.length);
      },
      E: function E(a, r, e) {
        var o = a.getUTCDay();
        switch (r) {
          case "E":
          case "EE":
          case "EEE":
            return e.day(o, {
              width: "abbreviated",
              context: "formatting"
            });
          case "EEEEE":
            return e.day(o, {
              width: "narrow",
              context: "formatting"
            });
          case "EEEEEE":
            return e.day(o, {
              width: "short",
              context: "formatting"
            });
          case "EEEE":
          default:
            return e.day(o, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      e: function e(a, r, _e2, o) {
        var i = a.getUTCDay(),
          l = (i - o.weekStartsOn + 8) % 7 || 7;
        switch (r) {
          case "e":
            return String(l);
          case "ee":
            return ge(l, 2);
          case "eo":
            return _e2.ordinalNumber(l, {
              unit: "day"
            });
          case "eee":
            return _e2.day(i, {
              width: "abbreviated",
              context: "formatting"
            });
          case "eeeee":
            return _e2.day(i, {
              width: "narrow",
              context: "formatting"
            });
          case "eeeeee":
            return _e2.day(i, {
              width: "short",
              context: "formatting"
            });
          case "eeee":
          default:
            return _e2.day(i, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      c: function c(a, r, e, o) {
        var i = a.getUTCDay(),
          l = (i - o.weekStartsOn + 8) % 7 || 7;
        switch (r) {
          case "c":
            return String(l);
          case "cc":
            return ge(l, r.length);
          case "co":
            return e.ordinalNumber(l, {
              unit: "day"
            });
          case "ccc":
            return e.day(i, {
              width: "abbreviated",
              context: "standalone"
            });
          case "ccccc":
            return e.day(i, {
              width: "narrow",
              context: "standalone"
            });
          case "cccccc":
            return e.day(i, {
              width: "short",
              context: "standalone"
            });
          case "cccc":
          default:
            return e.day(i, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      i: function i(a, r, e) {
        var o = a.getUTCDay(),
          i = o === 0 ? 7 : o;
        switch (r) {
          case "i":
            return String(i);
          case "ii":
            return ge(i, r.length);
          case "io":
            return e.ordinalNumber(i, {
              unit: "day"
            });
          case "iii":
            return e.day(o, {
              width: "abbreviated",
              context: "formatting"
            });
          case "iiiii":
            return e.day(o, {
              width: "narrow",
              context: "formatting"
            });
          case "iiiiii":
            return e.day(o, {
              width: "short",
              context: "formatting"
            });
          case "iiii":
          default:
            return e.day(o, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      a: function a(_a3, r, e) {
        var o = _a3.getUTCHours(),
          i = o / 12 >= 1 ? "pm" : "am";
        switch (r) {
          case "a":
          case "aa":
            return e.dayPeriod(i, {
              width: "abbreviated",
              context: "formatting"
            });
          case "aaa":
            return e.dayPeriod(i, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "aaaaa":
            return e.dayPeriod(i, {
              width: "narrow",
              context: "formatting"
            });
          case "aaaa":
          default:
            return e.dayPeriod(i, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      b: function b(a, r, e) {
        var o = a.getUTCHours(),
          i;
        switch (o === 12 ? i = vt.noon : o === 0 ? i = vt.midnight : i = o / 12 >= 1 ? "pm" : "am", r) {
          case "b":
          case "bb":
            return e.dayPeriod(i, {
              width: "abbreviated",
              context: "formatting"
            });
          case "bbb":
            return e.dayPeriod(i, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "bbbbb":
            return e.dayPeriod(i, {
              width: "narrow",
              context: "formatting"
            });
          case "bbbb":
          default:
            return e.dayPeriod(i, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      B: function B(a, r, e) {
        var o = a.getUTCHours(),
          i;
        switch (o >= 17 ? i = vt.evening : o >= 12 ? i = vt.afternoon : o >= 4 ? i = vt.morning : i = vt.night, r) {
          case "B":
          case "BB":
          case "BBB":
            return e.dayPeriod(i, {
              width: "abbreviated",
              context: "formatting"
            });
          case "BBBBB":
            return e.dayPeriod(i, {
              width: "narrow",
              context: "formatting"
            });
          case "BBBB":
          default:
            return e.dayPeriod(i, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      h: function h(a, r, e) {
        if (r === "ho") {
          var o = a.getUTCHours() % 12;
          return o === 0 && (o = 12), e.ordinalNumber(o, {
            unit: "hour"
          });
        }
        return ot.h(a, r);
      },
      H: function H(a, r, e) {
        return r === "Ho" ? e.ordinalNumber(a.getUTCHours(), {
          unit: "hour"
        }) : ot.H(a, r);
      },
      K: function K(a, r, e) {
        var o = a.getUTCHours() % 12;
        return r === "Ko" ? e.ordinalNumber(o, {
          unit: "hour"
        }) : ge(o, r.length);
      },
      k: function k(a, r, e) {
        var o = a.getUTCHours();
        return o === 0 && (o = 24), r === "ko" ? e.ordinalNumber(o, {
          unit: "hour"
        }) : ge(o, r.length);
      },
      m: function m(a, r, e) {
        return r === "mo" ? e.ordinalNumber(a.getUTCMinutes(), {
          unit: "minute"
        }) : ot.m(a, r);
      },
      s: function s(a, r, e) {
        return r === "so" ? e.ordinalNumber(a.getUTCSeconds(), {
          unit: "second"
        }) : ot.s(a, r);
      },
      S: function S(a, r) {
        return ot.S(a, r);
      },
      X: function X(a, r, e, o) {
        var i = o._originalDate || a,
          l = i.getTimezoneOffset();
        if (l === 0) return "Z";
        switch (r) {
          case "X":
            return Qn(l);
          case "XXXX":
          case "XX":
            return ct(l);
          case "XXXXX":
          case "XXX":
          default:
            return ct(l, ":");
        }
      },
      x: function x(a, r, e, o) {
        var i = o._originalDate || a,
          l = i.getTimezoneOffset();
        switch (r) {
          case "x":
            return Qn(l);
          case "xxxx":
          case "xx":
            return ct(l);
          case "xxxxx":
          case "xxx":
          default:
            return ct(l, ":");
        }
      },
      O: function O(a, r, e, o) {
        var i = o._originalDate || a,
          l = i.getTimezoneOffset();
        switch (r) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + Gn(l, ":");
          case "OOOO":
          default:
            return "GMT" + ct(l, ":");
        }
      },
      z: function z(a, r, e, o) {
        var i = o._originalDate || a,
          l = i.getTimezoneOffset();
        switch (r) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + Gn(l, ":");
          case "zzzz":
          default:
            return "GMT" + ct(l, ":");
        }
      },
      t: function t(a, r, e, o) {
        var i = o._originalDate || a,
          l = Math.floor(i.getTime() / 1e3);
        return ge(l, r.length);
      },
      T: function T(a, r, e, o) {
        var i = o._originalDate || a,
          l = i.getTime();
        return ge(l, r.length);
      }
    };
  function Gn(t, a) {
    var r = t > 0 ? "-" : "+",
      e = Math.abs(t),
      o = Math.floor(e / 60),
      i = e % 60;
    if (i === 0) return r + String(o);
    var l = a || "";
    return r + String(o) + l + ge(i, 2);
  }
  function Qn(t, a) {
    if (t % 60 === 0) {
      var r = t > 0 ? "-" : "+";
      return r + ge(Math.abs(t) / 60, 2);
    }
    return ct(t, a);
  }
  function ct(t, a) {
    var r = a || "",
      e = t > 0 ? "-" : "+",
      o = Math.abs(t),
      i = ge(Math.floor(o / 60), 2),
      l = ge(o % 60, 2);
    return e + i + r + l;
  }
  var ea = Jr;
  var Xn = function Xn(a, r) {
      switch (a) {
        case "P":
          return r.date({
            width: "short"
          });
        case "PP":
          return r.date({
            width: "medium"
          });
        case "PPP":
          return r.date({
            width: "long"
          });
        case "PPPP":
        default:
          return r.date({
            width: "full"
          });
      }
    },
    Zn = function Zn(a, r) {
      switch (a) {
        case "p":
          return r.time({
            width: "short"
          });
        case "pp":
          return r.time({
            width: "medium"
          });
        case "ppp":
          return r.time({
            width: "long"
          });
        case "pppp":
        default:
          return r.time({
            width: "full"
          });
      }
    },
    ta = function ta(a, r) {
      var e = a.match(/(P+)(p+)?/) || [],
        o = e[1],
        i = e[2];
      if (!i) return Xn(a, r);
      var l;
      switch (o) {
        case "P":
          l = r.dateTime({
            width: "short"
          });
          break;
        case "PP":
          l = r.dateTime({
            width: "medium"
          });
          break;
        case "PPP":
          l = r.dateTime({
            width: "long"
          });
          break;
        case "PPPP":
        default:
          l = r.dateTime({
            width: "full"
          });
          break;
      }
      return l.replace("{{date}}", Xn(o, r)).replace("{{time}}", Zn(i, r));
    },
    na = {
      p: Zn,
      P: ta
    };
  var en = na;
  var ra = ["D", "DD"],
    aa = ["YY", "YYYY"];
  function Jn(t) {
    return ra.indexOf(t) !== -1;
  }
  function er(t) {
    return aa.indexOf(t) !== -1;
  }
  function It(t, a, r) {
    if (t === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
  var oa = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
      },
      xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
      },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
      },
      xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
      },
      aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
      },
      xHours: {
        one: "1 hour",
        other: "{{count}} hours"
      },
      xDays: {
        one: "1 day",
        other: "{{count}} days"
      },
      aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
      },
      xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
      },
      aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
      },
      xMonths: {
        one: "1 month",
        other: "{{count}} months"
      },
      aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
      },
      xYears: {
        one: "1 year",
        other: "{{count}} years"
      },
      overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
      },
      almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
      }
    },
    la = function la(a, r, e) {
      var o,
        i = oa[a];
      return typeof i == "string" ? o = i : r === 1 ? o = i.one : o = i.other.replace("{{count}}", r.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + o : o + " ago" : o;
    };
  var ia = la;
  function tn(t) {
    return function () {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        r = a.width ? String(a.width) : t.defaultWidth,
        e = t.formats[r] || t.formats[t.defaultWidth];
      return e;
    };
  }
  var sa = {
      full: "EEEE, MMMM do, y",
      "long": "MMMM do, y",
      medium: "MMM d, y",
      "short": "MM/dd/yyyy"
    },
    ua = {
      full: "h:mm:ss a zzzz",
      "long": "h:mm:ss a z",
      medium: "h:mm:ss a",
      "short": "h:mm a"
    },
    ca = {
      full: "{{date}} 'at' {{time}}",
      "long": "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      "short": "{{date}}, {{time}}"
    },
    da = {
      date: tn({
        formats: sa,
        defaultWidth: "full"
      }),
      time: tn({
        formats: ua,
        defaultWidth: "full"
      }),
      dateTime: tn({
        formats: ca,
        defaultWidth: "full"
      })
    };
  var fa = da;
  var ma = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P"
    },
    ha = function ha(a, r, e, o) {
      return ma[a];
    };
  var ya = ha;
  function Pt(t) {
    return function (a, r) {
      var e = r != null && r.context ? String(r.context) : "standalone",
        o;
      if (e === "formatting" && t.formattingValues) {
        var i = t.defaultFormattingWidth || t.defaultWidth,
          l = r != null && r.width ? String(r.width) : i;
        o = t.formattingValues[l] || t.formattingValues[i];
      } else {
        var u = t.defaultWidth,
          p = r != null && r.width ? String(r.width) : t.defaultWidth;
        o = t.values[p] || t.values[u];
      }
      var y = t.argumentCallback ? t.argumentCallback(a) : a;
      return o[y];
    };
  }
  var pa = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"]
    },
    ga = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    va = {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    wa = {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      "short": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    ka = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      }
    },
    ba = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      }
    },
    Da = function Da(a, r) {
      var e = Number(a),
        o = e % 100;
      if (o > 20 || o < 10) switch (o % 10) {
        case 1:
          return e + "st";
        case 2:
          return e + "nd";
        case 3:
          return e + "rd";
      }
      return e + "th";
    },
    Ta = {
      ordinalNumber: Da,
      era: Pt({
        values: pa,
        defaultWidth: "wide"
      }),
      quarter: Pt({
        values: ga,
        defaultWidth: "wide",
        argumentCallback: function argumentCallback(a) {
          return a - 1;
        }
      }),
      month: Pt({
        values: va,
        defaultWidth: "wide"
      }),
      day: Pt({
        values: wa,
        defaultWidth: "wide"
      }),
      dayPeriod: Pt({
        values: ka,
        defaultWidth: "wide",
        formattingValues: ba,
        defaultFormattingWidth: "wide"
      })
    };
  var Ca = Ta;
  function Nt(t) {
    return function (a) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        e = r.width,
        o = e && t.matchPatterns[e] || t.matchPatterns[t.defaultMatchWidth],
        i = a.match(o);
      if (!i) return null;
      var l = i[0],
        u = e && t.parsePatterns[e] || t.parsePatterns[t.defaultParseWidth],
        p = Array.isArray(u) ? Pa(u, function (k) {
          return k.test(l);
        }) : Ma(u, function (k) {
          return k.test(l);
        }),
        y;
      y = t.valueCallback ? t.valueCallback(p) : p, y = r.valueCallback ? r.valueCallback(y) : y;
      var D = a.slice(l.length);
      return {
        value: y,
        rest: D
      };
    };
  }
  function Ma(t, a) {
    for (var r in t) if (t.hasOwnProperty(r) && a(t[r])) return r;
  }
  function Pa(t, a) {
    for (var r = 0; r < t.length; r++) if (a(t[r])) return r;
  }
  function Na(t) {
    return function (a) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        e = a.match(t.matchPattern);
      if (!e) return null;
      var o = e[0],
        i = a.match(t.parsePattern);
      if (!i) return null;
      var l = t.valueCallback ? t.valueCallback(i[0]) : i[0];
      l = r.valueCallback ? r.valueCallback(l) : l;
      var u = a.slice(o.length);
      return {
        value: l,
        rest: u
      };
    };
  }
  var $a = /^(\d+)(th|st|nd|rd)?/i,
    Sa = /\d+/i,
    _a = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i
    },
    Oa = {
      any: [/^b/i, /^(a|c)/i]
    },
    Ba = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    Aa = {
      any: [/1/i, /2/i, /3/i, /4/i]
    },
    Ea = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    xa = {
      narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
      any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    Va = {
      narrow: /^[smtwf]/i,
      "short": /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    Ya = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    Ra = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    Ia = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
      }
    },
    Ua = {
      ordinalNumber: Na({
        matchPattern: $a,
        parsePattern: Sa,
        valueCallback: function valueCallback(a) {
          return parseInt(a, 10);
        }
      }),
      era: Nt({
        matchPatterns: _a,
        defaultMatchWidth: "wide",
        parsePatterns: Oa,
        defaultParseWidth: "any"
      }),
      quarter: Nt({
        matchPatterns: Ba,
        defaultMatchWidth: "wide",
        parsePatterns: Aa,
        defaultParseWidth: "any",
        valueCallback: function valueCallback(a) {
          return a + 1;
        }
      }),
      month: Nt({
        matchPatterns: Ea,
        defaultMatchWidth: "wide",
        parsePatterns: xa,
        defaultParseWidth: "any"
      }),
      day: Nt({
        matchPatterns: Va,
        defaultMatchWidth: "wide",
        parsePatterns: Ya,
        defaultParseWidth: "any"
      }),
      dayPeriod: Nt({
        matchPatterns: Ra,
        defaultMatchWidth: "any",
        parsePatterns: Ia,
        defaultParseWidth: "any"
      })
    },
    Wa = {
      code: "en-US",
      formatDistance: ia,
      formatLong: fa,
      formatRelative: ya,
      localize: Ca,
      match: Ua,
      options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }
    };
  var tr = Wa;
  var Fa = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    La = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Ha = /^'([^]*?)'?$/,
    za = /''/g,
    Ka = /[a-zA-Z]/;
  function dt(t, a, r) {
    var e, o, i, l, u, p, y, D, k, f, v, I, Y, R, A, U, J, ne;
    Q(2, arguments);
    var x = String(a),
      W = qe(),
      q = (e = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : W.locale) !== null && e !== void 0 ? e : tr,
      X = ae((i = (l = (u = (p = r == null ? void 0 : r.firstWeekContainsDate) !== null && p !== void 0 ? p : r == null || (y = r.locale) === null || y === void 0 || (D = y.options) === null || D === void 0 ? void 0 : D.firstWeekContainsDate) !== null && u !== void 0 ? u : W.firstWeekContainsDate) !== null && l !== void 0 ? l : (k = W.locale) === null || k === void 0 || (f = k.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
    if (!(X >= 1 && X <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var re = ae((v = (I = (Y = (R = r == null ? void 0 : r.weekStartsOn) !== null && R !== void 0 ? R : r == null || (A = r.locale) === null || A === void 0 || (U = A.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && Y !== void 0 ? Y : W.weekStartsOn) !== null && I !== void 0 ? I : (J = W.locale) === null || J === void 0 || (ne = J.options) === null || ne === void 0 ? void 0 : ne.weekStartsOn) !== null && v !== void 0 ? v : 0);
    if (!(re >= 0 && re <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!q.localize) throw new RangeError("locale must contain localize property");
    if (!q.formatLong) throw new RangeError("locale must contain formatLong property");
    var ue = oe(t);
    if (!Mt(ue)) throw new RangeError("Invalid time value");
    var E = Rt(ue),
      C = zn(ue, E),
      w = {
        firstWeekContainsDate: X,
        weekStartsOn: re,
        locale: q,
        _originalDate: ue
      },
      B = x.match(La).map(function (S) {
        var V = S[0];
        if (V === "p" || V === "P") {
          var P = en[V];
          return P(S, q.formatLong);
        }
        return S;
      }).join("").match(Fa).map(function (S) {
        if (S === "''") return "'";
        var V = S[0];
        if (V === "'") return qa(S);
        var P = ea[V];
        if (P) return !(r != null && r.useAdditionalWeekYearTokens) && er(S) && It(S, a, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && Jn(S) && It(S, a, String(t)), P(C, S, q.localize, w);
        if (V.match(Ka)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + V + "`");
        return S;
      }).join("");
    return B;
  }
  function qa(t) {
    var a = t.match(Ha);
    return a ? a[1].replace(za, "'") : t;
  }
  function ja(t, a) {
    if (t == null) throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    return t;
  }
  function Ga(t) {
    Q(1, arguments);
    var a = oe(t),
      r = a.getDay();
    return r;
  }
  function Qa(t) {
    Q(1, arguments);
    var a = oe(t),
      r = a.getFullYear(),
      e = a.getMonth(),
      o = new Date(0);
    return o.setFullYear(r, e + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
  }
  function Je(t) {
    Q(1, arguments);
    var a = oe(t),
      r = a.getHours();
    return r;
  }
  var Xa = 6048e5;
  function Za(t) {
    Q(1, arguments);
    var a = oe(t),
      r = Yt(a).getTime() - Wr(a).getTime();
    return Math.round(r / Xa) + 1;
  }
  function et(t) {
    Q(1, arguments);
    var a = oe(t),
      r = a.getMinutes();
    return r;
  }
  function ke(t) {
    Q(1, arguments);
    var a = oe(t),
      r = a.getMonth();
    return r;
  }
  function wt(t) {
    Q(1, arguments);
    var a = oe(t),
      r = a.getSeconds();
    return r;
  }
  function Ja(t, a) {
    var r, e, o, i, l, u, p, y;
    Q(1, arguments);
    var D = oe(t),
      k = D.getFullYear(),
      f = qe(),
      v = ae((r = (e = (o = (i = a == null ? void 0 : a.firstWeekContainsDate) !== null && i !== void 0 ? i : a == null || (l = a.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && e !== void 0 ? e : (p = f.locale) === null || p === void 0 || (y = p.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
    if (!(v >= 1 && v <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var I = new Date(0);
    I.setFullYear(k + 1, 0, v), I.setHours(0, 0, 0, 0);
    var Y = st(I, a),
      R = new Date(0);
    R.setFullYear(k, 0, v), R.setHours(0, 0, 0, 0);
    var A = st(R, a);
    return D.getTime() >= Y.getTime() ? k + 1 : D.getTime() >= A.getTime() ? k : k - 1;
  }
  function eo(t, a) {
    var r, e, o, i, l, u, p, y;
    Q(1, arguments);
    var D = qe(),
      k = ae((r = (e = (o = (i = a == null ? void 0 : a.firstWeekContainsDate) !== null && i !== void 0 ? i : a == null || (l = a.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && o !== void 0 ? o : D.firstWeekContainsDate) !== null && e !== void 0 ? e : (p = D.locale) === null || p === void 0 || (y = p.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && r !== void 0 ? r : 1),
      f = Ja(t, a),
      v = new Date(0);
    v.setFullYear(f, 0, k), v.setHours(0, 0, 0, 0);
    var I = st(v, a);
    return I;
  }
  var to = 6048e5;
  function no(t, a) {
    Q(1, arguments);
    var r = oe(t),
      e = st(r, a).getTime() - eo(r, a).getTime();
    return Math.round(e / to) + 1;
  }
  function be(t) {
    return Q(1, arguments), oe(t).getFullYear();
  }
  function $t(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = oe(a);
    return r.getTime() > e.getTime();
  }
  function St(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = oe(a);
    return r.getTime() < e.getTime();
  }
  function ft(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = oe(a);
    return r.getTime() === e.getTime();
  }
  function nr(t, a) {
    (a == null || a > t.length) && (a = t.length);
    for (var r = 0, e = new Array(a); r < a; r++) e[r] = t[r];
    return e;
  }
  function ro(t, a) {
    if (t) {
      if (typeof t == "string") return nr(t, a);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nr(t, a);
    }
  }
  function rr(t, a) {
    var r = (typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (!r) {
      if (Array.isArray(t) || (r = ro(t)) || a && t && typeof t.length == "number") {
        r && (t = r);
        var e = 0,
          o = function o() {};
        return {
          s: o,
          n: function n() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            };
          },
          e: function e(y) {
            throw y;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var i = !0,
      l = !1,
      u;
    return {
      s: function s() {
        r = r.call(t);
      },
      n: function n() {
        var y = r.next();
        return i = y.done, y;
      },
      e: function e(y) {
        l = !0, u = y;
      },
      f: function f() {
        try {
          !i && r["return"] != null && r["return"]();
        } finally {
          if (l) throw u;
        }
      }
    };
  }
  function H(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function nn(t, a) {
    return nn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, o) {
      return e.__proto__ = o, e;
    }, nn(t, a);
  }
  function me(t, a) {
    if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(a && a.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), a && nn(t, a);
  }
  function Ut(t) {
    return Ut = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, Ut(t);
  }
  function ao() {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (_unused) {
      return !1;
    }
  }
  function oo(t, a) {
    if (a && (Fe(a) === "object" || typeof a == "function")) return a;
    if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return H(t);
  }
  function he(t) {
    var a = ao();
    return function () {
      var e = Ut(t),
        o;
      if (a) {
        var i = Ut(this).constructor;
        o = Reflect.construct(e, arguments, i);
      } else o = e.apply(this, arguments);
      return oo(this, o);
    };
  }
  function ce(t, a) {
    if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function");
  }
  function lo(t, a) {
    if (Fe(t) !== "object" || t === null) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var e = r.call(t, a || "default");
      if (Fe(e) !== "object") return e;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(t);
  }
  function ar(t) {
    var a = lo(t, "string");
    return Fe(a) === "symbol" ? a : String(a);
  }
  function or(t, a) {
    for (var r = 0; r < a.length; r++) {
      var e = a[r];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, ar(e.key), e);
    }
  }
  function de(t, a, r) {
    return a && or(t.prototype, a), r && or(t, r), Object.defineProperty(t, "prototype", {
      writable: !1
    }), t;
  }
  function F(t, a, r) {
    return a = ar(a), a in t ? Object.defineProperty(t, a, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = r, t;
  }
  var io = 10,
    lr = function () {
      function t() {
        ce(this, t), F(this, "priority", void 0), F(this, "subPriority", 0);
      }
      return de(t, [{
        key: "validate",
        value: function value(r, e) {
          return !0;
        }
      }]), t;
    }(),
    so = function (t) {
      me(r, t);
      var a = he(r);
      function r(e, o, i, l, u) {
        var p;
        return ce(this, r), p = a.call(this), p.value = e, p.validateValue = o, p.setValue = i, p.priority = l, u && (p.subPriority = u), p;
      }
      return de(r, [{
        key: "validate",
        value: function value(o, i) {
          return this.validateValue(o, this.value, i);
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return this.setValue(o, i, this.value, l);
        }
      }]), r;
    }(lr),
    uo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", io), F(H(e), "subPriority", -1), e;
      }
      return de(r, [{
        key: "set",
        value: function value(o, i) {
          if (i.timestampIsSet) return o;
          var l = new Date(0);
          return l.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), l.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), l;
        }
      }]), r;
    }(lr),
    pe = function () {
      function t() {
        ce(this, t), F(this, "incompatibleTokens", void 0), F(this, "priority", void 0), F(this, "subPriority", void 0);
      }
      return de(t, [{
        key: "run",
        value: function value(r, e, o, i) {
          var l = this.parse(r, e, o, i);
          return l ? {
            setter: new so(l.value, this.validate, this.set, this.priority, this.subPriority),
            rest: l.rest
          } : null;
        }
      }, {
        key: "validate",
        value: function value(r, e, o) {
          return !0;
        }
      }]), t;
    }(),
    co = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 140), F(H(e), "incompatibleTokens", ["R", "u", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "G":
            case "GG":
            case "GGG":
              return l.era(o, {
                width: "abbreviated"
              }) || l.era(o, {
                width: "narrow"
              });
            case "GGGGG":
              return l.era(o, {
                width: "narrow"
              });
            case "GGGG":
            default:
              return l.era(o, {
                width: "wide"
              }) || l.era(o, {
                width: "abbreviated"
              }) || l.era(o, {
                width: "narrow"
              });
          }
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return i.era = l, o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    _e = {
      month: /^(1[0-2]|0?\d)/,
      date: /^(3[0-1]|[0-2]?\d)/,
      dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
      week: /^(5[0-3]|[0-4]?\d)/,
      hour23h: /^(2[0-3]|[0-1]?\d)/,
      hour24h: /^(2[0-4]|[0-1]?\d)/,
      hour11h: /^(1[0-1]|0?\d)/,
      hour12h: /^(1[0-2]|0?\d)/,
      minute: /^[0-5]?\d/,
      second: /^[0-5]?\d/,
      singleDigit: /^\d/,
      twoDigits: /^\d{1,2}/,
      threeDigits: /^\d{1,3}/,
      fourDigits: /^\d{1,4}/,
      anyDigitsSigned: /^-?\d+/,
      singleDigitSigned: /^-?\d/,
      twoDigitsSigned: /^-?\d{1,2}/,
      threeDigitsSigned: /^-?\d{1,3}/,
      fourDigitsSigned: /^-?\d{1,4}/
    },
    je = {
      basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
      basic: /^([+-])(\d{2})(\d{2})|Z/,
      basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
      extended: /^([+-])(\d{2}):(\d{2})|Z/,
      extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
    };
  function Oe(t, a) {
    return t && {
      value: a(t.value),
      rest: t.rest
    };
  }
  function Me(t, a) {
    var r = a.match(t);
    return r ? {
      value: parseInt(r[0], 10),
      rest: a.slice(r[0].length)
    } : null;
  }
  function Ge(t, a) {
    var r = a.match(t);
    if (!r) return null;
    if (r[0] === "Z") return {
      value: 0,
      rest: a.slice(1)
    };
    var e = r[1] === "+" ? 1 : -1,
      o = r[2] ? parseInt(r[2], 10) : 0,
      i = r[3] ? parseInt(r[3], 10) : 0,
      l = r[5] ? parseInt(r[5], 10) : 0;
    return {
      value: e * (o * Zt + i * Xt + l * Hr),
      rest: a.slice(r[0].length)
    };
  }
  function ir(t) {
    return Me(_e.anyDigitsSigned, t);
  }
  function Pe(t, a) {
    switch (t) {
      case 1:
        return Me(_e.singleDigit, a);
      case 2:
        return Me(_e.twoDigits, a);
      case 3:
        return Me(_e.threeDigits, a);
      case 4:
        return Me(_e.fourDigits, a);
      default:
        return Me(new RegExp("^\\d{1," + t + "}"), a);
    }
  }
  function Wt(t, a) {
    switch (t) {
      case 1:
        return Me(_e.singleDigitSigned, a);
      case 2:
        return Me(_e.twoDigitsSigned, a);
      case 3:
        return Me(_e.threeDigitsSigned, a);
      case 4:
        return Me(_e.fourDigitsSigned, a);
      default:
        return Me(new RegExp("^-?\\d{1," + t + "}"), a);
    }
  }
  function rn(t) {
    switch (t) {
      case "morning":
        return 4;
      case "evening":
        return 17;
      case "pm":
      case "noon":
      case "afternoon":
        return 12;
      case "am":
      case "midnight":
      case "night":
      default:
        return 0;
    }
  }
  function sr(t, a) {
    var r = a > 0,
      e = r ? a : 1 - a,
      o;
    if (e <= 50) o = t || 100;else {
      var i = e + 50,
        l = Math.floor(i / 100) * 100,
        u = t >= i % 100;
      o = t + l - (u ? 100 : 0);
    }
    return r ? o : 1 - o;
  }
  function ur(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
  }
  var fo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 130), F(H(e), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          var u = function u(y) {
            return {
              year: y,
              isTwoDigitYear: i === "yy"
            };
          };
          switch (i) {
            case "y":
              return Oe(Pe(4, o), u);
            case "yo":
              return Oe(l.ordinalNumber(o, {
                unit: "year"
              }), u);
            default:
              return Oe(Pe(i.length, o), u);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i.isTwoDigitYear || i.year > 0;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          var u = o.getUTCFullYear();
          if (l.isTwoDigitYear) {
            var p = sr(l.year, u);
            return o.setUTCFullYear(p, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          }
          var y = !("era" in i) || i.era === 1 ? l.year : 1 - l.year;
          return o.setUTCFullYear(y, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    mo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 130), F(H(e), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          var u = function u(y) {
            return {
              year: y,
              isTwoDigitYear: i === "YY"
            };
          };
          switch (i) {
            case "Y":
              return Oe(Pe(4, o), u);
            case "Yo":
              return Oe(l.ordinalNumber(o, {
                unit: "year"
              }), u);
            default:
              return Oe(Pe(i.length, o), u);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i.isTwoDigitYear || i.year > 0;
        }
      }, {
        key: "set",
        value: function value(o, i, l, u) {
          var p = Jt(o, u);
          if (l.isTwoDigitYear) {
            var y = sr(l.year, p);
            return o.setUTCFullYear(y, 0, u.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), ut(o, u);
          }
          var D = !("era" in i) || i.era === 1 ? l.year : 1 - l.year;
          return o.setUTCFullYear(D, 0, u.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), ut(o, u);
        }
      }]), r;
    }(pe),
    ho = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 130), F(H(e), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i) {
          return Wt(i === "R" ? 4 : i.length, o);
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          var u = new Date(0);
          return u.setUTCFullYear(l, 0, 4), u.setUTCHours(0, 0, 0, 0), gt(u);
        }
      }]), r;
    }(pe),
    yo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 130), F(H(e), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i) {
          return Wt(i === "u" ? 4 : i.length, o);
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    po = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 120), F(H(e), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "Q":
            case "QQ":
              return Pe(i.length, o);
            case "Qo":
              return l.ordinalNumber(o, {
                unit: "quarter"
              });
            case "QQQ":
              return l.quarter(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.quarter(o, {
                width: "narrow",
                context: "formatting"
              });
            case "QQQQQ":
              return l.quarter(o, {
                width: "narrow",
                context: "formatting"
              });
            case "QQQQ":
            default:
              return l.quarter(o, {
                width: "wide",
                context: "formatting"
              }) || l.quarter(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.quarter(o, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 1 && i <= 4;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCMonth((l - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    go = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 120), F(H(e), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "q":
            case "qq":
              return Pe(i.length, o);
            case "qo":
              return l.ordinalNumber(o, {
                unit: "quarter"
              });
            case "qqq":
              return l.quarter(o, {
                width: "abbreviated",
                context: "standalone"
              }) || l.quarter(o, {
                width: "narrow",
                context: "standalone"
              });
            case "qqqqq":
              return l.quarter(o, {
                width: "narrow",
                context: "standalone"
              });
            case "qqqq":
            default:
              return l.quarter(o, {
                width: "wide",
                context: "standalone"
              }) || l.quarter(o, {
                width: "abbreviated",
                context: "standalone"
              }) || l.quarter(o, {
                width: "narrow",
                context: "standalone"
              });
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 1 && i <= 4;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCMonth((l - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    vo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), F(H(e), "priority", 110), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          var u = function u(y) {
            return y - 1;
          };
          switch (i) {
            case "M":
              return Oe(Me(_e.month, o), u);
            case "MM":
              return Oe(Pe(2, o), u);
            case "Mo":
              return Oe(l.ordinalNumber(o, {
                unit: "month"
              }), u);
            case "MMM":
              return l.month(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.month(o, {
                width: "narrow",
                context: "formatting"
              });
            case "MMMMM":
              return l.month(o, {
                width: "narrow",
                context: "formatting"
              });
            case "MMMM":
            default:
              return l.month(o, {
                width: "wide",
                context: "formatting"
              }) || l.month(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.month(o, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 0 && i <= 11;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCMonth(l, 1), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    wo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 110), F(H(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          var u = function u(y) {
            return y - 1;
          };
          switch (i) {
            case "L":
              return Oe(Me(_e.month, o), u);
            case "LL":
              return Oe(Pe(2, o), u);
            case "Lo":
              return Oe(l.ordinalNumber(o, {
                unit: "month"
              }), u);
            case "LLL":
              return l.month(o, {
                width: "abbreviated",
                context: "standalone"
              }) || l.month(o, {
                width: "narrow",
                context: "standalone"
              });
            case "LLLLL":
              return l.month(o, {
                width: "narrow",
                context: "standalone"
              });
            case "LLLL":
            default:
              return l.month(o, {
                width: "wide",
                context: "standalone"
              }) || l.month(o, {
                width: "abbreviated",
                context: "standalone"
              }) || l.month(o, {
                width: "narrow",
                context: "standalone"
              });
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 0 && i <= 11;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCMonth(l, 1), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe);
  function ko(t, a, r) {
    Q(2, arguments);
    var e = oe(t),
      o = ae(a),
      i = jn(e, r) - o;
    return e.setUTCDate(e.getUTCDate() - i * 7), e;
  }
  var bo = function (t) {
    me(r, t);
    var a = he(r);
    function r() {
      var e;
      ce(this, r);
      for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
      return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 100), F(H(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), e;
    }
    return de(r, [{
      key: "parse",
      value: function value(o, i, l) {
        switch (i) {
          case "w":
            return Me(_e.week, o);
          case "wo":
            return l.ordinalNumber(o, {
              unit: "week"
            });
          default:
            return Pe(i.length, o);
        }
      }
    }, {
      key: "validate",
      value: function value(o, i) {
        return i >= 1 && i <= 53;
      }
    }, {
      key: "set",
      value: function value(o, i, l, u) {
        return ut(ko(o, l, u), u);
      }
    }]), r;
  }(pe);
  function Do(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = ae(a),
      o = qn(r) - e;
    return r.setUTCDate(r.getUTCDate() - o * 7), r;
  }
  var To = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 100), F(H(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "I":
              return Me(_e.week, o);
            case "Io":
              return l.ordinalNumber(o, {
                unit: "week"
              });
            default:
              return Pe(i.length, o);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 1 && i <= 53;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return gt(Do(o, l));
        }
      }]), r;
    }(pe),
    Co = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Mo = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Po = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 90), F(H(e), "subPriority", 1), F(H(e), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "d":
              return Me(_e.date, o);
            case "do":
              return l.ordinalNumber(o, {
                unit: "date"
              });
            default:
              return Pe(i.length, o);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          var l = o.getUTCFullYear(),
            u = ur(l),
            p = o.getUTCMonth();
          return u ? i >= 1 && i <= Mo[p] : i >= 1 && i <= Co[p];
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCDate(l), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    No = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 90), F(H(e), "subpriority", 1), F(H(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "D":
            case "DD":
              return Me(_e.dayOfYear, o);
            case "Do":
              return l.ordinalNumber(o, {
                unit: "date"
              });
            default:
              return Pe(i.length, o);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          var l = o.getUTCFullYear(),
            u = ur(l);
          return u ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCMonth(0, l), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe);
  function an(t, a, r) {
    var e, o, i, l, u, p, y, D;
    Q(2, arguments);
    var k = qe(),
      f = ae((e = (o = (i = (l = r == null ? void 0 : r.weekStartsOn) !== null && l !== void 0 ? l : r == null || (u = r.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && i !== void 0 ? i : k.weekStartsOn) !== null && o !== void 0 ? o : (y = k.locale) === null || y === void 0 || (D = y.options) === null || D === void 0 ? void 0 : D.weekStartsOn) !== null && e !== void 0 ? e : 0);
    if (!(f >= 0 && f <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var v = oe(t),
      I = ae(a),
      Y = v.getUTCDay(),
      R = I % 7,
      A = (R + 7) % 7,
      U = (A < f ? 7 : 0) + I - Y;
    return v.setUTCDate(v.getUTCDate() + U), v;
  }
  var $o = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 90), F(H(e), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "E":
            case "EE":
            case "EEE":
              return l.day(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.day(o, {
                width: "short",
                context: "formatting"
              }) || l.day(o, {
                width: "narrow",
                context: "formatting"
              });
            case "EEEEE":
              return l.day(o, {
                width: "narrow",
                context: "formatting"
              });
            case "EEEEEE":
              return l.day(o, {
                width: "short",
                context: "formatting"
              }) || l.day(o, {
                width: "narrow",
                context: "formatting"
              });
            case "EEEE":
            default:
              return l.day(o, {
                width: "wide",
                context: "formatting"
              }) || l.day(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.day(o, {
                width: "short",
                context: "formatting"
              }) || l.day(o, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 0 && i <= 6;
        }
      }, {
        key: "set",
        value: function value(o, i, l, u) {
          return o = an(o, l, u), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    So = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 90), F(H(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l, u) {
          var p = function p(D) {
            var k = Math.floor((D - 1) / 7) * 7;
            return (D + u.weekStartsOn + 6) % 7 + k;
          };
          switch (i) {
            case "e":
            case "ee":
              return Oe(Pe(i.length, o), p);
            case "eo":
              return Oe(l.ordinalNumber(o, {
                unit: "day"
              }), p);
            case "eee":
              return l.day(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.day(o, {
                width: "short",
                context: "formatting"
              }) || l.day(o, {
                width: "narrow",
                context: "formatting"
              });
            case "eeeee":
              return l.day(o, {
                width: "narrow",
                context: "formatting"
              });
            case "eeeeee":
              return l.day(o, {
                width: "short",
                context: "formatting"
              }) || l.day(o, {
                width: "narrow",
                context: "formatting"
              });
            case "eeee":
            default:
              return l.day(o, {
                width: "wide",
                context: "formatting"
              }) || l.day(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.day(o, {
                width: "short",
                context: "formatting"
              }) || l.day(o, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 0 && i <= 6;
        }
      }, {
        key: "set",
        value: function value(o, i, l, u) {
          return o = an(o, l, u), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    _o = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 90), F(H(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l, u) {
          var p = function p(D) {
            var k = Math.floor((D - 1) / 7) * 7;
            return (D + u.weekStartsOn + 6) % 7 + k;
          };
          switch (i) {
            case "c":
            case "cc":
              return Oe(Pe(i.length, o), p);
            case "co":
              return Oe(l.ordinalNumber(o, {
                unit: "day"
              }), p);
            case "ccc":
              return l.day(o, {
                width: "abbreviated",
                context: "standalone"
              }) || l.day(o, {
                width: "short",
                context: "standalone"
              }) || l.day(o, {
                width: "narrow",
                context: "standalone"
              });
            case "ccccc":
              return l.day(o, {
                width: "narrow",
                context: "standalone"
              });
            case "cccccc":
              return l.day(o, {
                width: "short",
                context: "standalone"
              }) || l.day(o, {
                width: "narrow",
                context: "standalone"
              });
            case "cccc":
            default:
              return l.day(o, {
                width: "wide",
                context: "standalone"
              }) || l.day(o, {
                width: "abbreviated",
                context: "standalone"
              }) || l.day(o, {
                width: "short",
                context: "standalone"
              }) || l.day(o, {
                width: "narrow",
                context: "standalone"
              });
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 0 && i <= 6;
        }
      }, {
        key: "set",
        value: function value(o, i, l, u) {
          return o = an(o, l, u), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe);
  function Oo(t, a) {
    Q(2, arguments);
    var r = ae(a);
    r % 7 === 0 && (r = r - 7);
    var e = 1,
      o = oe(t),
      i = o.getUTCDay(),
      l = r % 7,
      u = (l + 7) % 7,
      p = (u < e ? 7 : 0) + r - i;
    return o.setUTCDate(o.getUTCDate() + p), o;
  }
  var Bo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 90), F(H(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          var u = function u(y) {
            return y === 0 ? 7 : y;
          };
          switch (i) {
            case "i":
            case "ii":
              return Pe(i.length, o);
            case "io":
              return l.ordinalNumber(o, {
                unit: "day"
              });
            case "iii":
              return Oe(l.day(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.day(o, {
                width: "short",
                context: "formatting"
              }) || l.day(o, {
                width: "narrow",
                context: "formatting"
              }), u);
            case "iiiii":
              return Oe(l.day(o, {
                width: "narrow",
                context: "formatting"
              }), u);
            case "iiiiii":
              return Oe(l.day(o, {
                width: "short",
                context: "formatting"
              }) || l.day(o, {
                width: "narrow",
                context: "formatting"
              }), u);
            case "iiii":
            default:
              return Oe(l.day(o, {
                width: "wide",
                context: "formatting"
              }) || l.day(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.day(o, {
                width: "short",
                context: "formatting"
              }) || l.day(o, {
                width: "narrow",
                context: "formatting"
              }), u);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 1 && i <= 7;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o = Oo(o, l), o.setUTCHours(0, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    Ao = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 80), F(H(e), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "a":
            case "aa":
            case "aaa":
              return l.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
              });
            case "aaaaa":
              return l.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
              });
            case "aaaa":
            default:
              return l.dayPeriod(o, {
                width: "wide",
                context: "formatting"
              }) || l.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCHours(rn(l), 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    Eo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 80), F(H(e), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "b":
            case "bb":
            case "bbb":
              return l.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
              });
            case "bbbbb":
              return l.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
              });
            case "bbbb":
            default:
              return l.dayPeriod(o, {
                width: "wide",
                context: "formatting"
              }) || l.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCHours(rn(l), 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    xo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 80), F(H(e), "incompatibleTokens", ["a", "b", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "B":
            case "BB":
            case "BBB":
              return l.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
              });
            case "BBBBB":
              return l.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
              });
            case "BBBB":
            default:
              return l.dayPeriod(o, {
                width: "wide",
                context: "formatting"
              }) || l.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
              }) || l.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCHours(rn(l), 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    Vo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 70), F(H(e), "incompatibleTokens", ["H", "K", "k", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "h":
              return Me(_e.hour12h, o);
            case "ho":
              return l.ordinalNumber(o, {
                unit: "hour"
              });
            default:
              return Pe(i.length, o);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 1 && i <= 12;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          var u = o.getUTCHours() >= 12;
          return u && l < 12 ? o.setUTCHours(l + 12, 0, 0, 0) : !u && l === 12 ? o.setUTCHours(0, 0, 0, 0) : o.setUTCHours(l, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    Yo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 70), F(H(e), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "H":
              return Me(_e.hour23h, o);
            case "Ho":
              return l.ordinalNumber(o, {
                unit: "hour"
              });
            default:
              return Pe(i.length, o);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 0 && i <= 23;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCHours(l, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    Ro = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 70), F(H(e), "incompatibleTokens", ["h", "H", "k", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "K":
              return Me(_e.hour11h, o);
            case "Ko":
              return l.ordinalNumber(o, {
                unit: "hour"
              });
            default:
              return Pe(i.length, o);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 0 && i <= 11;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          var u = o.getUTCHours() >= 12;
          return u && l < 12 ? o.setUTCHours(l + 12, 0, 0, 0) : o.setUTCHours(l, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    Io = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 70), F(H(e), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "k":
              return Me(_e.hour24h, o);
            case "ko":
              return l.ordinalNumber(o, {
                unit: "hour"
              });
            default:
              return Pe(i.length, o);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 1 && i <= 24;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          var u = l <= 24 ? l % 24 : l;
          return o.setUTCHours(u, 0, 0, 0), o;
        }
      }]), r;
    }(pe),
    Uo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 60), F(H(e), "incompatibleTokens", ["t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "m":
              return Me(_e.minute, o);
            case "mo":
              return l.ordinalNumber(o, {
                unit: "minute"
              });
            default:
              return Pe(i.length, o);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 0 && i <= 59;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCMinutes(l, 0, 0), o;
        }
      }]), r;
    }(pe),
    Wo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 50), F(H(e), "incompatibleTokens", ["t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i, l) {
          switch (i) {
            case "s":
              return Me(_e.second, o);
            case "so":
              return l.ordinalNumber(o, {
                unit: "second"
              });
            default:
              return Pe(i.length, o);
          }
        }
      }, {
        key: "validate",
        value: function value(o, i) {
          return i >= 0 && i <= 59;
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCSeconds(l, 0), o;
        }
      }]), r;
    }(pe),
    Fo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 30), F(H(e), "incompatibleTokens", ["t", "T"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i) {
          var l = function l(p) {
            return Math.floor(p * Math.pow(10, -i.length + 3));
          };
          return Oe(Pe(i.length, o), l);
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return o.setUTCMilliseconds(l), o;
        }
      }]), r;
    }(pe),
    Lo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 10), F(H(e), "incompatibleTokens", ["t", "T", "x"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i) {
          switch (i) {
            case "X":
              return Ge(je.basicOptionalMinutes, o);
            case "XX":
              return Ge(je.basic, o);
            case "XXXX":
              return Ge(je.basicOptionalSeconds, o);
            case "XXXXX":
              return Ge(je.extendedOptionalSeconds, o);
            case "XXX":
            default:
              return Ge(je.extended, o);
          }
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return i.timestampIsSet ? o : new Date(o.getTime() - l);
        }
      }]), r;
    }(pe),
    Ho = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 10), F(H(e), "incompatibleTokens", ["t", "T", "X"]), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o, i) {
          switch (i) {
            case "x":
              return Ge(je.basicOptionalMinutes, o);
            case "xx":
              return Ge(je.basic, o);
            case "xxxx":
              return Ge(je.basicOptionalSeconds, o);
            case "xxxxx":
              return Ge(je.extendedOptionalSeconds, o);
            case "xxx":
            default:
              return Ge(je.extended, o);
          }
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return i.timestampIsSet ? o : new Date(o.getTime() - l);
        }
      }]), r;
    }(pe),
    zo = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 40), F(H(e), "incompatibleTokens", "*"), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o) {
          return ir(o);
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return [new Date(l * 1e3), {
            timestampIsSet: !0
          }];
        }
      }]), r;
    }(pe),
    Ko = function (t) {
      me(r, t);
      var a = he(r);
      function r() {
        var e;
        ce(this, r);
        for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return e = a.call.apply(a, [this].concat(i)), F(H(e), "priority", 20), F(H(e), "incompatibleTokens", "*"), e;
      }
      return de(r, [{
        key: "parse",
        value: function value(o) {
          return ir(o);
        }
      }, {
        key: "set",
        value: function value(o, i, l) {
          return [new Date(l), {
            timestampIsSet: !0
          }];
        }
      }]), r;
    }(pe),
    qo = {
      G: new co(),
      y: new fo(),
      Y: new mo(),
      R: new ho(),
      u: new yo(),
      Q: new po(),
      q: new go(),
      M: new vo(),
      L: new wo(),
      w: new bo(),
      I: new To(),
      d: new Po(),
      D: new No(),
      E: new $o(),
      e: new So(),
      c: new _o(),
      i: new Bo(),
      a: new Ao(),
      b: new Eo(),
      B: new xo(),
      h: new Vo(),
      H: new Yo(),
      K: new Ro(),
      k: new Io(),
      m: new Uo(),
      s: new Wo(),
      S: new Fo(),
      X: new Lo(),
      x: new Ho(),
      t: new zo(),
      T: new Ko()
    },
    jo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Go = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Qo = /^'([^]*?)'?$/,
    Xo = /''/g,
    Zo = /\S/,
    Jo = /[a-zA-Z]/;
  function on(t, a, r, e) {
    var o, i, l, u, p, y, D, k, f, v, I, Y, R, A, U, J, ne, x;
    Q(3, arguments);
    var W = String(t),
      q = String(a),
      X = qe(),
      re = (o = (i = e == null ? void 0 : e.locale) !== null && i !== void 0 ? i : X.locale) !== null && o !== void 0 ? o : tr;
    if (!re.match) throw new RangeError("locale must contain match property");
    var ue = ae((l = (u = (p = (y = e == null ? void 0 : e.firstWeekContainsDate) !== null && y !== void 0 ? y : e == null || (D = e.locale) === null || D === void 0 || (k = D.options) === null || k === void 0 ? void 0 : k.firstWeekContainsDate) !== null && p !== void 0 ? p : X.firstWeekContainsDate) !== null && u !== void 0 ? u : (f = X.locale) === null || f === void 0 || (v = f.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && l !== void 0 ? l : 1);
    if (!(ue >= 1 && ue <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var E = ae((I = (Y = (R = (A = e == null ? void 0 : e.weekStartsOn) !== null && A !== void 0 ? A : e == null || (U = e.locale) === null || U === void 0 || (J = U.options) === null || J === void 0 ? void 0 : J.weekStartsOn) !== null && R !== void 0 ? R : X.weekStartsOn) !== null && Y !== void 0 ? Y : (ne = X.locale) === null || ne === void 0 || (x = ne.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && I !== void 0 ? I : 0);
    if (!(E >= 0 && E <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (q === "") return W === "" ? oe(r) : new Date(NaN);
    var C = {
        firstWeekContainsDate: ue,
        weekStartsOn: E,
        locale: re
      },
      w = [new uo()],
      B = q.match(Go).map(function (z) {
        var L = z[0];
        if (L in en) {
          var ye = en[L];
          return ye(z, re.formatLong);
        }
        return z;
      }).join("").match(jo),
      S = [],
      V = rr(B),
      P;
    try {
      var b = function b() {
        var L = P.value;
        !(e != null && e.useAdditionalWeekYearTokens) && er(L) && It(L, q, t), !(e != null && e.useAdditionalDayOfYearTokens) && Jn(L) && It(L, q, t);
        var ye = L[0],
          Te = qo[ye];
        if (Te) {
          var te = Te.incompatibleTokens;
          if (Array.isArray(te)) {
            var Ve = S.find(function (Ce) {
              return te.includes(Ce.token) || Ce.token === ye;
            });
            if (Ve) throw new RangeError("The format string mustn't contain `".concat(Ve.fullToken, "` and `").concat(L, "` at the same time"));
          } else if (Te.incompatibleTokens === "*" && S.length > 0) throw new RangeError("The format string mustn't contain `".concat(L, "` and any other token at the same time"));
          S.push({
            token: ye,
            fullToken: L
          });
          var Be = Te.run(W, L, re.match, C);
          if (!Be) return {
            v: new Date(NaN)
          };
          w.push(Be.setter), W = Be.rest;
        } else {
          if (ye.match(Jo)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + ye + "`");
          if (L === "''" ? L = "'" : ye === "'" && (L = el(L)), W.indexOf(L) === 0) W = W.slice(L.length);else return {
            v: new Date(NaN)
          };
        }
      };
      for (V.s(); !(P = V.n()).done;) {
        var g = b();
        if (Fe(g) === "object") return g.v;
      }
    } catch (z) {
      V.e(z);
    } finally {
      V.f();
    }
    if (W.length > 0 && Zo.test(W)) return new Date(NaN);
    var h = w.map(function (z) {
        return z.priority;
      }).sort(function (z, L) {
        return L - z;
      }).filter(function (z, L, ye) {
        return ye.indexOf(z) === L;
      }).map(function (z) {
        return w.filter(function (L) {
          return L.priority === z;
        }).sort(function (L, ye) {
          return ye.subPriority - L.subPriority;
        });
      }).map(function (z) {
        return z[0];
      }),
      _ = oe(r);
    if (isNaN(_.getTime())) return new Date(NaN);
    var M = zn(_, Rt(_)),
      G = {},
      c = rr(h),
      d;
    try {
      for (c.s(); !(d = c.n()).done;) {
        var s = d.value;
        if (!s.validate(M, C)) return new Date(NaN);
        var $ = s.set(M, G, C);
        Array.isArray($) ? (M = $[0], ja(G, $[1])) : M = $;
      }
    } catch (z) {
      c.e(z);
    } finally {
      c.f();
    }
    return M;
  }
  function el(t) {
    return t.match(Qo)[1].replace(Xo, "'");
  }
  function tl(t, a) {
    Q(2, arguments);
    var r = ae(a);
    return Ze(t, -r);
  }
  function nl(t, a) {
    var r;
    Q(1, arguments);
    var e = ae((r = a == null ? void 0 : a.additionalDigits) !== null && r !== void 0 ? r : 2);
    if (e !== 2 && e !== 1 && e !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (!(typeof t == "string" || Object.prototype.toString.call(t) === "[object String]")) return new Date(NaN);
    var o = ll(t),
      i;
    if (o.date) {
      var l = il(o.date, e);
      i = sl(l.restDateString, l.year);
    }
    if (!i || isNaN(i.getTime())) return new Date(NaN);
    var u = i.getTime(),
      p = 0,
      y;
    if (o.time && (p = ul(o.time), isNaN(p))) return new Date(NaN);
    if (o.timezone) {
      if (y = cl(o.timezone), isNaN(y)) return new Date(NaN);
    } else {
      var D = new Date(u + p),
        k = new Date(0);
      return k.setFullYear(D.getUTCFullYear(), D.getUTCMonth(), D.getUTCDate()), k.setHours(D.getUTCHours(), D.getUTCMinutes(), D.getUTCSeconds(), D.getUTCMilliseconds()), k;
    }
    return new Date(u + p + y);
  }
  var Ft = {
      dateTimeDelimiter: /[T ]/,
      timeZoneDelimiter: /[Z ]/i,
      timezone: /([Z+-].*)$/
    },
    rl = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    al = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    ol = /^([+-])(\d{2})(?::?(\d{2}))?$/;
  function ll(t) {
    var a = {},
      r = t.split(Ft.dateTimeDelimiter),
      e;
    if (r.length > 2) return a;
    if (/:/.test(r[0]) ? e = r[0] : (a.date = r[0], e = r[1], Ft.timeZoneDelimiter.test(a.date) && (a.date = t.split(Ft.timeZoneDelimiter)[0], e = t.substr(a.date.length, t.length))), e) {
      var o = Ft.timezone.exec(e);
      o ? (a.time = e.replace(o[1], ""), a.timezone = o[1]) : a.time = e;
    }
    return a;
  }
  function il(t, a) {
    var r = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + a) + "})|(\\d{2}|[+-]\\d{" + (2 + a) + "})$)"),
      e = t.match(r);
    if (!e) return {
      year: NaN,
      restDateString: ""
    };
    var o = e[1] ? parseInt(e[1]) : null,
      i = e[2] ? parseInt(e[2]) : null;
    return {
      year: i === null ? o : i * 100,
      restDateString: t.slice((e[1] || e[2]).length)
    };
  }
  function sl(t, a) {
    if (a === null) return new Date(NaN);
    var r = t.match(rl);
    if (!r) return new Date(NaN);
    var e = !!r[4],
      o = _t(r[1]),
      i = _t(r[2]) - 1,
      l = _t(r[3]),
      u = _t(r[4]),
      p = _t(r[5]) - 1;
    if (e) return yl(a, u, p) ? dl(a, u, p) : new Date(NaN);
    var y = new Date(0);
    return !ml(a, i, l) || !hl(a, o) ? new Date(NaN) : (y.setUTCFullYear(a, i, Math.max(o, l)), y);
  }
  function _t(t) {
    return t ? parseInt(t) : 1;
  }
  function ul(t) {
    var a = t.match(al);
    if (!a) return NaN;
    var r = ln(a[1]),
      e = ln(a[2]),
      o = ln(a[3]);
    return pl(r, e, o) ? r * Zt + e * Xt + o * 1e3 : NaN;
  }
  function ln(t) {
    return t && parseFloat(t.replace(",", ".")) || 0;
  }
  function cl(t) {
    if (t === "Z") return 0;
    var a = t.match(ol);
    if (!a) return 0;
    var r = a[1] === "+" ? -1 : 1,
      e = parseInt(a[2]),
      o = a[3] && parseInt(a[3]) || 0;
    return gl(e, o) ? r * (e * Zt + o * Xt) : NaN;
  }
  function dl(t, a, r) {
    var e = new Date(0);
    e.setUTCFullYear(t, 0, 4);
    var o = e.getUTCDay() || 7,
      i = (a - 1) * 7 + r + 1 - o;
    return e.setUTCDate(e.getUTCDate() + i), e;
  }
  var fl = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function cr(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
  }
  function ml(t, a, r) {
    return a >= 0 && a <= 11 && r >= 1 && r <= (fl[a] || (cr(t) ? 29 : 28));
  }
  function hl(t, a) {
    return a >= 1 && a <= (cr(t) ? 366 : 365);
  }
  function yl(t, a, r) {
    return a >= 1 && a <= 53 && r >= 0 && r <= 6;
  }
  function pl(t, a, r) {
    return t === 24 ? a === 0 && r === 0 : r >= 0 && r < 60 && a >= 0 && a < 60 && t >= 0 && t < 25;
  }
  function gl(t, a) {
    return a >= 0 && a <= 59;
  }
  function kt(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = ae(a),
      o = r.getFullYear(),
      i = r.getDate(),
      l = new Date(0);
    l.setFullYear(o, e, 15), l.setHours(0, 0, 0, 0);
    var u = Qa(l);
    return r.setMonth(e, Math.min(i, u)), r;
  }
  function Ae(t, a) {
    if (Q(2, arguments), Fe(a) !== "object" || a === null) throw new RangeError("values parameter must be an object");
    var r = oe(t);
    return isNaN(r.getTime()) ? new Date(NaN) : (a.year != null && r.setFullYear(a.year), a.month != null && (r = kt(r, a.month)), a.date != null && r.setDate(ae(a.date)), a.hours != null && r.setHours(ae(a.hours)), a.minutes != null && r.setMinutes(ae(a.minutes)), a.seconds != null && r.setSeconds(ae(a.seconds)), a.milliseconds != null && r.setMilliseconds(ae(a.milliseconds)), r);
  }
  function dr(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = ae(a);
    return r.setHours(e), r;
  }
  function sn(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = ae(a);
    return r.setMilliseconds(e), r;
  }
  function fr(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = ae(a);
    return r.setMinutes(e), r;
  }
  function mr(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = ae(a);
    return r.setSeconds(e), r;
  }
  function tt(t, a) {
    Q(2, arguments);
    var r = oe(t),
      e = ae(a);
    return isNaN(r.getTime()) ? new Date(NaN) : (r.setFullYear(e), r);
  }
  function bt(t, a) {
    Q(2, arguments);
    var r = ae(a);
    return Ke(t, -r);
  }
  function vl(t, a) {
    if (Q(2, arguments), !a || Fe(a) !== "object") return new Date(NaN);
    var r = a.years ? ae(a.years) : 0,
      e = a.months ? ae(a.months) : 0,
      o = a.weeks ? ae(a.weeks) : 0,
      i = a.days ? ae(a.days) : 0,
      l = a.hours ? ae(a.hours) : 0,
      u = a.minutes ? ae(a.minutes) : 0,
      p = a.seconds ? ae(a.seconds) : 0,
      y = bt(t, e + r * 12),
      D = tl(y, i + o * 7),
      k = u + l * 60,
      f = p + k * 60,
      v = f * 1e3,
      I = new Date(D.getTime() - v);
    return I;
  }
  function wl(t, a) {
    Q(2, arguments);
    var r = ae(a);
    return Fn(t, -r);
  }
  var hr = function hr(t, a, r, e, o) {
      var i = on(t, a.slice(0, t.length), new Date());
      return Mt(i) && Ln(i) ? e || o ? i : Ae(i, {
        hours: +r.hours,
        minutes: +(r == null ? void 0 : r.minutes),
        seconds: +(r == null ? void 0 : r.seconds),
        milliseconds: 0
      }) : null;
    },
    kl = function kl(t, a, r, e, o) {
      var i = Array.isArray(r) ? r[0] : r;
      if (typeof a == "string") return hr(t, a, i, e, o);
      if (Array.isArray(a)) {
        var l = null;
        var _iterator = _createForOfIteratorHelper(a),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var u = _step.value;
            if (l = hr(t, u, i, e, o), l) break;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return l;
      }
      return typeof a == "function" ? a(t) : null;
    },
    O = function O(t) {
      return t ? new Date(t) : new Date();
    },
    bl = function bl(t, a, r) {
      if (a) {
        var o = (t.getMonth() + 1).toString().padStart(2, "0"),
          i = t.getDate().toString().padStart(2, "0"),
          l = t.getHours().toString().padStart(2, "0"),
          u = t.getMinutes().toString().padStart(2, "0"),
          p = r ? t.getSeconds().toString().padStart(2, "0") : "00";
        return "".concat(t.getFullYear(), "-").concat(o, "-").concat(i, "T").concat(l, ":").concat(u, ":").concat(p, ".000Z");
      }
      var e = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds());
      return new Date(e).toISOString();
    },
    Le = function Le(t) {
      var a = O(JSON.parse(JSON.stringify(t)));
      return a = dr(a, 0), a = fr(a, 0), a = mr(a, 0), a = sn(a, 0), a;
    },
    He = function He(t, a, r, e) {
      var o = t ? O(t) : O();
      return (a || a === 0) && (o = dr(o, +a)), (r || r === 0) && (o = fr(o, +r)), (e || e === 0) && (o = mr(o, +e)), sn(o, 0);
    },
    Ye = function Ye(t, a) {
      return !t || !a ? !1 : St(Le(t), Le(a));
    },
    ve = function ve(t, a) {
      return !t || !a ? !1 : ft(Le(t), Le(a));
    },
    Re = function Re(t, a) {
      return !t || !a ? !1 : $t(Le(t), Le(a));
    },
    yr = function yr(t, a, r) {
      return t && t[0] && t[1] ? Re(r, t[0]) && Ye(r, t[1]) : t && t[0] && a ? Re(r, t[0]) && Ye(r, a) || Ye(r, t[0]) && Re(r, a) : !1;
    },
    Ot = function Ot(t) {
      var a = Ae(new Date(t), {
        date: 1
      });
      return Le(a);
    },
    un = function un(t, a, r) {
      return a && (r || r === 0) ? Object.fromEntries(["hours", "minutes", "seconds"].map(function (e) {
        return e === a ? [e, r] : [e, isNaN(+t[e]) ? void 0 : +t[e]];
      })) : {
        hours: isNaN(+t.hours) ? void 0 : +t.hours,
        minutes: isNaN(+t.minutes) ? void 0 : +t.minutes,
        seconds: isNaN(+t.seconds) ? void 0 : +t.seconds
      };
    },
    Lt = function Lt(t) {
      return {
        hours: Je(t),
        minutes: et(t),
        seconds: wt(t)
      };
    },
    Bt = n.reactive({
      menuFocused: !1,
      shiftKeyInMenu: !1
    }),
    pr = function pr() {
      var t = function t(e) {
          Bt.menuFocused = e;
        },
        a = function a(e) {
          Bt.shiftKeyInMenu !== e && (Bt.shiftKeyInMenu = e);
        };
      return {
        control: n.computed(function () {
          return {
            shiftKeyInMenu: Bt.shiftKeyInMenu,
            menuFocused: Bt.menuFocused
          };
        }),
        setMenuFocused: t,
        setShiftKey: a
      };
    };
  function cn(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t["default"] : t;
  }
  var gr = {
    exports: {}
  };
  (function (t) {
    function a(r) {
      return r && r.__esModule ? r : {
        "default": r
      };
    }
    t.exports = a, t.exports.__esModule = !0, t.exports["default"] = t.exports;
  })(gr);
  var Dl = gr.exports,
    dn = {
      exports: {}
    };
  (function (t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a["default"] = r;
    function r(e) {
      if (e === null || e === !0 || e === !1) return NaN;
      var o = Number(e);
      return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
    }
    t.exports = a["default"];
  })(dn, dn.exports);
  var Tl = dn.exports;
  var Cl = cn(Tl);
  var fn = {
    exports: {}
  };
  (function (t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a["default"] = r;
    function r(e) {
      var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
      return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
    }
    t.exports = a["default"];
  })(fn, fn.exports);
  var Ml = fn.exports;
  var vr = cn(Ml);
  function Pl(t, a) {
    var r = _l(a);
    return r.formatToParts ? $l(r, t) : Sl(r, t);
  }
  var Nl = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  function $l(t, a) {
    try {
      for (var r = t.formatToParts(a), e = [], o = 0; o < r.length; o++) {
        var i = Nl[r[o].type];
        i >= 0 && (e[i] = parseInt(r[o].value, 10));
      }
      return e;
    } catch (l) {
      if (l instanceof RangeError) return [NaN];
      throw l;
    }
  }
  function Sl(t, a) {
    var r = t.format(a).replace(/\u200E/g, ""),
      e = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);
    return [e[3], e[1], e[2], e[4], e[5], e[6]];
  }
  var mn = {};
  function _l(t) {
    if (!mn[t]) {
      var a = new Intl.DateTimeFormat("en-US", {
          hour12: !1,
          timeZone: "America/New_York",
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }).format(new Date("2014-06-25T04:00:00.123Z")),
        r = a === "06/25/2014, 00:00:00" || a === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
      mn[t] = r ? new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: t,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }) : new Intl.DateTimeFormat("en-US", {
        hourCycle: "h23",
        timeZone: t,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }
    return mn[t];
  }
  function hn(t, a, r, e, o, i, l) {
    var u = new Date(0);
    return u.setUTCFullYear(t, a, r), u.setUTCHours(e, o, i, l), u;
  }
  var wr = 36e5,
    Ol = 6e4,
    yn = {
      timezone: /([Z+-].*)$/,
      timezoneZ: /^(Z)$/,
      timezoneHH: /^([+-]\d{2})$/,
      timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
    };
  function pn(t, a, r) {
    var e, o;
    if (!t || (e = yn.timezoneZ.exec(t), e)) return 0;
    var i;
    if (e = yn.timezoneHH.exec(t), e) return i = parseInt(e[1], 10), kr(i) ? -(i * wr) : NaN;
    if (e = yn.timezoneHHMM.exec(t), e) {
      i = parseInt(e[1], 10);
      var l = parseInt(e[2], 10);
      return kr(i, l) ? (o = Math.abs(i) * wr + l * Ol, i > 0 ? -o : o) : NaN;
    }
    if (El(t)) {
      a = new Date(a || Date.now());
      var u = r ? a : Bl(a),
        p = gn(u, t),
        y = r ? p : Al(a, p, t);
      return -y;
    }
    return NaN;
  }
  function Bl(t) {
    return hn(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
  }
  function gn(t, a) {
    var r = Pl(t, a),
      e = hn(r[0], r[1] - 1, r[2], r[3] % 24, r[4], r[5], 0).getTime(),
      o = t.getTime(),
      i = o % 1e3;
    return o -= i >= 0 ? i : 1e3 + i, e - o;
  }
  function Al(t, a, r) {
    var e = t.getTime(),
      o = e - a,
      i = gn(new Date(o), r);
    if (a === i) return a;
    o -= i - a;
    var l = gn(new Date(o), r);
    return i === l ? i : Math.max(i, l);
  }
  function kr(t, a) {
    return -23 <= t && t <= 23 && (a == null || 0 <= a && a <= 59);
  }
  var br = {};
  function El(t) {
    if (br[t]) return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: t
      }), br[t] = !0, !0;
    } catch (_unused2) {
      return !1;
    }
  }
  var xl = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
  var Dr = xl;
  var vn = 36e5,
    Tr = 6e4,
    Vl = 2,
    Ie = {
      dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
      datePattern: /^([0-9W+-]+)(.*)/,
      plainTime: /:/,
      YY: /^(\d{2})$/,
      YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
      YYYY: /^(\d{4})/,
      YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
      MM: /^-(\d{2})$/,
      DDD: /^-?(\d{3})$/,
      MMDD: /^-?(\d{2})-?(\d{2})$/,
      Www: /^-?W(\d{2})$/,
      WwwD: /^-?W(\d{2})-?(\d{1})$/,
      HH: /^(\d{2}([.,]\d*)?)$/,
      HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
      HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
      timeZone: Dr
    };
  function wn(t, a) {
    if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (t === null) return new Date(NaN);
    var r = a || {},
      e = r.additionalDigits == null ? Vl : Cl(r.additionalDigits);
    if (e !== 2 && e !== 1 && e !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (t instanceof Date || _typeof(t) == "object" && Object.prototype.toString.call(t) === "[object Date]") return new Date(t.getTime());
    if (typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]") return new Date(t);
    if (!(typeof t == "string" || Object.prototype.toString.call(t) === "[object String]")) return new Date(NaN);
    var o = Yl(t),
      i = Rl(o.date, e),
      l = i.year,
      u = i.restDateString,
      p = Il(u, l);
    if (isNaN(p)) return new Date(NaN);
    if (p) {
      var y = p.getTime(),
        D = 0,
        k;
      if (o.time && (D = Ul(o.time), isNaN(D))) return new Date(NaN);
      if (o.timeZone || r.timeZone) {
        if (k = pn(o.timeZone || r.timeZone, new Date(y + D)), isNaN(k)) return new Date(NaN);
      } else k = vr(new Date(y + D)), k = vr(new Date(y + D + k));
      return new Date(y + D + k);
    } else return new Date(NaN);
  }
  function Yl(t) {
    var a = {},
      r = Ie.dateTimePattern.exec(t),
      e;
    if (r ? (a.date = r[1], e = r[3]) : (r = Ie.datePattern.exec(t), r ? (a.date = r[1], e = r[2]) : (a.date = null, e = t)), e) {
      var o = Ie.timeZone.exec(e);
      o ? (a.time = e.replace(o[1], ""), a.timeZone = o[1].trim()) : a.time = e;
    }
    return a;
  }
  function Rl(t, a) {
    var r = Ie.YYY[a],
      e = Ie.YYYYY[a],
      o;
    if (o = Ie.YYYY.exec(t) || e.exec(t), o) {
      var i = o[1];
      return {
        year: parseInt(i, 10),
        restDateString: t.slice(i.length)
      };
    }
    if (o = Ie.YY.exec(t) || r.exec(t), o) {
      var l = o[1];
      return {
        year: parseInt(l, 10) * 100,
        restDateString: t.slice(l.length)
      };
    }
    return {
      year: null
    };
  }
  function Il(t, a) {
    if (a === null) return null;
    var r, e, o, i;
    if (t.length === 0) return e = new Date(0), e.setUTCFullYear(a), e;
    if (r = Ie.MM.exec(t), r) return e = new Date(0), o = parseInt(r[1], 10) - 1, Pr(a, o) ? (e.setUTCFullYear(a, o), e) : new Date(NaN);
    if (r = Ie.DDD.exec(t), r) {
      e = new Date(0);
      var l = parseInt(r[1], 10);
      return Ll(a, l) ? (e.setUTCFullYear(a, 0, l), e) : new Date(NaN);
    }
    if (r = Ie.MMDD.exec(t), r) {
      e = new Date(0), o = parseInt(r[1], 10) - 1;
      var u = parseInt(r[2], 10);
      return Pr(a, o, u) ? (e.setUTCFullYear(a, o, u), e) : new Date(NaN);
    }
    if (r = Ie.Www.exec(t), r) return i = parseInt(r[1], 10) - 1, Nr(a, i) ? Cr(a, i) : new Date(NaN);
    if (r = Ie.WwwD.exec(t), r) {
      i = parseInt(r[1], 10) - 1;
      var p = parseInt(r[2], 10) - 1;
      return Nr(a, i, p) ? Cr(a, i, p) : new Date(NaN);
    }
    return null;
  }
  function Ul(t) {
    var a, r, e;
    if (a = Ie.HH.exec(t), a) return r = parseFloat(a[1].replace(",", ".")), kn(r) ? r % 24 * vn : NaN;
    if (a = Ie.HHMM.exec(t), a) return r = parseInt(a[1], 10), e = parseFloat(a[2].replace(",", ".")), kn(r, e) ? r % 24 * vn + e * Tr : NaN;
    if (a = Ie.HHMMSS.exec(t), a) {
      r = parseInt(a[1], 10), e = parseInt(a[2], 10);
      var o = parseFloat(a[3].replace(",", "."));
      return kn(r, e, o) ? r % 24 * vn + e * Tr + o * 1e3 : NaN;
    }
    return null;
  }
  function Cr(t, a, r) {
    a = a || 0, r = r || 0;
    var e = new Date(0);
    e.setUTCFullYear(t, 0, 4);
    var o = e.getUTCDay() || 7,
      i = a * 7 + r + 1 - o;
    return e.setUTCDate(e.getUTCDate() + i), e;
  }
  var Wl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Fl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function Mr(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
  }
  function Pr(t, a, r) {
    if (a < 0 || a > 11) return !1;
    if (r != null) {
      if (r < 1) return !1;
      var e = Mr(t);
      if (e && r > Fl[a] || !e && r > Wl[a]) return !1;
    }
    return !0;
  }
  function Ll(t, a) {
    if (a < 1) return !1;
    var r = Mr(t);
    return !(r && a > 366 || !r && a > 365);
  }
  function Nr(t, a, r) {
    return !(a < 0 || a > 52 || r != null && (r < 0 || r > 6));
  }
  function kn(t, a, r) {
    return !(t != null && (t < 0 || t >= 25) || a != null && (a < 0 || a >= 60) || r != null && (r < 0 || r >= 60));
  }
  var bn = {
      exports: {}
    },
    Dn = {
      exports: {}
    };
  (function (t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a["default"] = r;
    function r(e, o) {
      if (e == null) throw new TypeError("assign requires that input parameter not be null or undefined");
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
      return e;
    }
    t.exports = a["default"];
  })(Dn, Dn.exports);
  var Hl = Dn.exports;
  (function (t, a) {
    var r = Dl["default"];
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a["default"] = o;
    var e = r(Hl);
    function o(i) {
      return (0, e["default"])({}, i);
    }
    t.exports = a["default"];
  })(bn, bn.exports);
  var zl = bn.exports;
  var Kl = cn(zl);
  function ql(t, a, r) {
    var e = wn(t, r),
      o = pn(a, e, !0),
      i = new Date(e.getTime() - o),
      l = new Date(0);
    return l.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), l.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), l;
  }
  function jl(t, a, r) {
    if (typeof t == "string" && !t.match(Dr)) {
      var e = Kl(r);
      return e.timeZone = a, wn(t, e);
    }
    var o = wn(t, r),
      i = hn(o.getFullYear(), o.getMonth(), o.getDate(), o.getHours(), o.getMinutes(), o.getSeconds(), o.getMilliseconds()).getTime(),
      l = pn(a, new Date(i));
    return new Date(i + l);
  }
  var Gl = function Gl(t) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var r = [];
    for (var e = 0; e < t.length; e += a) r.push([t[e], t[e + 1], t[e + 2]]);
    return r;
  };
  function $r(t) {
    return function (a) {
      return new Intl.DateTimeFormat(t, {
        weekday: "short",
        timeZone: "UTC"
      }).format(new Date("2017-01-0".concat(a, "T00:00:00+00:00"))).slice(0, 2);
    };
  }
  function Ql(t) {
    return function (a) {
      return dt(new Date("2017-01-0".concat(a, "T00:00:00+00:00")), "EEEEEE", {
        locale: t
      });
    };
  }
  var Xl = function Xl(t, a, r) {
      var _concat, _ref;
      var e = [1, 2, 3, 4, 5, 6, 7];
      var o;
      if (t !== null) try {
        o = e.map(Ql(t));
      } catch (_unused3) {
        o = e.map($r(a));
      } else o = e.map($r(a));
      var i = o.slice(0, r),
        l = o.slice(r + 1, o.length);
      return (_concat = (_ref = [o[r]]).concat.apply(_ref, _toConsumableArray(l))).concat.apply(_concat, _toConsumableArray(i));
    },
    Zl = function Zl(t, a) {
      var r = [];
      for (var e = +t[0]; e <= +t[1]; e++) r.push({
        value: +e,
        text: "".concat(e)
      });
      return a ? r.reverse() : r;
    },
    Jl = function Jl(t, a, r) {
      var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (i) {
        var l = i < 10 ? "0".concat(i) : i;
        return new Date("2017-".concat(l, "-01T00:00:00+00:00"));
      });
      if (t !== null) try {
        var i = r === "long" ? "MMMM" : "MMM";
        return e.map(function (l, u) {
          var p = dt(l, i, {
            locale: t
          });
          return {
            text: p.charAt(0).toUpperCase() + p.substring(1),
            value: u
          };
        });
      } catch (_unused4) {}
      var o = new Intl.DateTimeFormat(a, {
        month: r,
        timeZone: "UTC"
      });
      return e.map(function (i, l) {
        var u = o.format(i);
        return {
          text: u.charAt(0).toUpperCase() + u.substring(1),
          value: l
        };
      });
    },
    ei = function ei(t) {
      return [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][t];
    },
    Ne = function Ne(t) {
      var a = n.unref(t);
      return a != null && a.$el ? a == null ? void 0 : a.$el : a;
    },
    ti = function ti(t) {
      return Object.assign({
        type: "dot"
      }, t);
    },
    Sr = function Sr(t) {
      return Array.isArray(t) ? !!t[0] && !!t[1] : !1;
    },
    Ht = {
      prop: function prop(t) {
        return "\"".concat(t, "\" prop must be enabled!");
      },
      dateArr: function dateArr(t) {
        return "You need to use array as \"model-value\" binding in order to support \"".concat(t, "\"");
      }
    },
    Ee = function Ee(t) {
      return t;
    },
    _r = function _r(t) {
      return t === 0 ? t : !t || isNaN(+t) ? null : +t;
    },
    ni = function ni(t) {
      return t === 0 ? !0 : !!t;
    },
    Or = function Or(t) {
      return t === null;
    },
    ri = function ri(t) {
      if (t) return _toConsumableArray(t.querySelectorAll("input, button, select, textarea, a[href]"))[0];
    },
    Br = function Br(t) {
      return Object.assign({
        menuAppear: "",
        open: "dp-slide-down",
        close: "dp-slide-up",
        next: "calendar-next",
        previous: "calendar-prev",
        vNext: "dp-slide-up",
        vPrevious: "dp-slide-down"
      }, t);
    },
    ai = function ai(t) {
      return Object.assign({
        toggleOverlay: "Toggle overlay",
        menu: "Datepicker menu",
        input: "Datepicker input",
        calendarWrap: "Calendar wrapper",
        calendarDays: "Calendar days",
        openTimePicker: "Open time picker",
        closeTimePicker: "Close time Picker",
        incrementValue: function incrementValue(a) {
          return "Increment ".concat(a);
        },
        decrementValue: function decrementValue(a) {
          return "Decrement ".concat(a);
        },
        openTpOverlay: function openTpOverlay(a) {
          return "Open ".concat(a, " overlay");
        },
        amPmButton: "Switch AM/PM mode",
        openYearsOverlay: "Open years overlay",
        openMonthsOverlay: "Open months overlay",
        nextMonth: "Next month",
        prevMonth: "Previous month",
        day: function day() {
          return "";
        }
      }, t);
    },
    oi = function oi(t) {
      return t === null ? 0 : typeof t == "boolean" ? t ? 2 : 0 : +t >= 2 ? +t : 2;
    },
    li = function li(t, a, r) {
      return t || (typeof r == "string" ? r : a);
    },
    ii = function ii(t) {
      return typeof t == "boolean" ? t ? Br({}) : !1 : Br(t);
    },
    si = function si() {
      return {
        enterSubmit: !0,
        tabSubmit: !0,
        openMenu: !0,
        rangeSeparator: " - "
      };
    },
    ui = function ui(t) {
      return Object.assign({
        months: [],
        years: [],
        times: {
          hours: [],
          minutes: [],
          seconds: []
        }
      }, t);
    },
    ci = function ci(t) {
      return Object.assign({
        showSelect: !0,
        showCancel: !0,
        showNow: !1,
        showPreview: !0
      }, t);
    },
    We = function We(t) {
      var a = function a() {
          if (t.partialRange) return null;
          throw new Error(Ht.prop("partial-range"));
        },
        r = n.computed(function () {
          return {
            ariaLabels: ai(t.ariaLabels),
            textInputOptions: Object.assign(si(), t.textInputOptions),
            multiCalendars: oi(t.multiCalendars),
            previewFormat: li(t.previewFormat, t.format, i()),
            filters: ui(t.filters),
            transitions: ii(t.transitions),
            startTime: v(),
            actionRow: ci(t.actionRow)
          };
        }),
        e = function e(c) {
          if (t.range) return c();
          throw new Error(Ht.prop("range"));
        },
        o = function o() {
          var c = t.enableSeconds ? ":ss" : "";
          return t.is24 ? "HH:mm".concat(c) : "hh:mm".concat(c, " aa");
        },
        i = function i() {
          return t.format ? t.format : t.monthPicker ? "MM/yyyy" : t.timePicker ? o() : t.weekPicker ? "MM/dd/yyyy" : t.yearPicker ? "yyyy" : t.enableTimePicker ? "MM/dd/yyyy, ".concat(o()) : "MM/dd/yyyy";
        },
        l = function l(c, d) {
          if (typeof t.format == "function") return t.format(c);
          var s = d || i(),
            $ = t.formatLocale ? {
              locale: t.formatLocale
            } : void 0;
          return Array.isArray(c) ? "".concat(dt(c[0], s, $)).concat(t.modelAuto && !c[1] ? "" : r.value.textInputOptions.rangeSeparator || "-").concat(c[1] ? dt(c[1], s, $) : "") : dt(c, s, $);
        },
        u = function u(c) {
          return t.timezone ? ql(c, t.timezone) : c;
        },
        p = function p(c) {
          return t.timezone ? jl(c, t.timezone) : c;
        },
        y = n.computed(function () {
          return function (c) {
            var d;
            return (d = t.hideNavigation) == null ? void 0 : d.includes(c);
          };
        }),
        D = function D(c) {
          var d, s, $, z;
          return Array.isArray(t.allowedDates) && !((d = t.allowedDates) != null && d.length) ? !0 : (s = t.arrMapValues) != null && s.allowedDates ? !U(c, t.arrMapValues.allowedDates) : ($ = t.allowedDates) != null && $.length ? !((z = t.allowedDates) != null && z.some(function (L) {
            return ve(u(O(L)), u(c));
          })) : !1;
        },
        k = function k(c) {
          var Be;
          var d = t.maxDate ? Re(u(c), u(O(t.maxDate))) : !1,
            s = t.minDate ? Ye(u(c), u(O(t.minDate))) : !1,
            $ = U(c, (Be = t.arrMapValues) != null && Be.disabledDates ? t.arrMapValues.disabledDates : t.disabledDates),
            L = r.value.filters.months.map(function (Ce) {
              return +Ce;
            }).includes(ke(c)),
            ye = t.disabledWeekDays.length ? t.disabledWeekDays.some(function (Ce) {
              return +Ce === Ga(c);
            }) : !1,
            Te = D(c),
            te = be(c),
            Ve = te < +t.yearRange[0] || te > +t.yearRange[1];
          return !(d || s || $ || L || Ve || ye || Te);
        },
        f = function f(c) {
          var d = {
            hours: Je(O()),
            minutes: et(O()),
            seconds: t.enableSeconds ? wt(O()) : 0
          };
          return Object.assign(d, c);
        },
        v = function v() {
          return t.range ? t.startTime && Array.isArray(t.startTime) ? [f(t.startTime[0]), f(t.startTime[1])] : null : t.startTime && !Array.isArray(t.startTime) ? f(t.startTime) : null;
        },
        I = function I(c) {
          return !k(c);
        },
        Y = function Y(c) {
          return Array.isArray(c) ? Mt(c[0]) && (c[1] ? Mt(c[1]) : !0) : c ? Mt(c) : !1;
        },
        R = function R(c) {
          return c instanceof Date ? c : nl(c);
        },
        A = function A(c) {
          var d = st(u(c), {
              weekStartsOn: +t.weekStart
            }),
            s = zr(u(c), {
              weekStartsOn: +t.weekStart
            });
          return [d, s];
        },
        U = function U(c, d) {
          return c ? d instanceof Map ? !!d.get(h(c)) : Array.isArray(d) ? d.some(function (s) {
            return ve(u(O(s)), u(c));
          }) : d(O(JSON.parse(JSON.stringify(c)))) : !0;
        },
        J = function J(c, d, s) {
          var $ = c ? O(c) : O();
          return (d || d === 0) && ($ = kt($, d)), s && ($ = tt($, s)), $;
        },
        ne = function ne(c) {
          return Ae(O(), Lt(c));
        },
        x = function x(c) {
          return Ae(O(), {
            hours: +c.hours || 0,
            minutes: +c.minutes || 0,
            seconds: +c.seconds || 0
          });
        },
        W = function W(c, d, s, $) {
          if (!c) return !0;
          if ($) {
            var z = s === "max" ? St(c, d) : $t(c, d),
              L = {
                seconds: 0,
                milliseconds: 0
              };
            return z || ft(Ae(c, L), Ae(d, L));
          }
          return s === "max" ? c.getTime() <= d.getTime() : c.getTime() >= d.getTime();
        },
        q = function q() {
          return !t.enableTimePicker || t.monthPicker || t.yearPicker || t.ignoreTimeValidation;
        },
        X = function X(c) {
          return Array.isArray(c) ? [c[0] ? ne(c[0]) : null, c[1] ? ne(c[1]) : null] : ne(c);
        },
        re = function re(c) {
          var d = t.maxTime ? x(t.maxTime) : O(t.maxDate);
          return Array.isArray(c) ? W(c[0], d, "max", !!t.maxDate) && W(c[1], d, "max", !!t.maxDate) : W(c, d, "max", !!t.maxDate);
        },
        ue = function ue(c, d) {
          var s = t.minTime ? x(t.minTime) : O(t.minDate);
          return Array.isArray(c) ? W(c[0], s, "min", !!t.minDate) && W(c[1], s, "min", !!t.minDate) && d : W(c, s, "min", !!t.minDate) && d;
        },
        E = function E(c) {
          var d = !0;
          if (!c || q()) return !0;
          var s = !t.minDate && !t.maxDate ? X(c) : c;
          if ((t.maxTime || t.maxDate) && (d = re(Ee(s))), (t.minTime || t.minDate) && (d = ue(Ee(s), d)), t.disabledTimes) {
            var $ = Array.isArray(c) ? [Lt(c[0]), c[1] ? Lt(c[1]) : void 0] : Lt(c);
            d = !t.disabledTimes($);
          }
          return d;
        },
        C = function C(c, d) {
          var s = O(JSON.parse(JSON.stringify(c))),
            $ = [];
          for (var z = 0; z < 7; z++) {
            var L = Ze(s, z),
              ye = ke(L) !== d;
            $.push({
              text: t.hideOffsetDates && ye ? "" : L.getDate(),
              value: L,
              current: !ye,
              classData: {}
            });
          }
          return $;
        },
        w = function w(c, d) {
          switch (t.sixWeeks === !0 ? "append" : t.sixWeeks) {
            case "prepend":
              return [!0, !1];
            case "center":
              return [c == 0, !0];
            case "fair":
              return [c == 0 || d > c, !0];
            case "append":
              return [!1, !1];
            default:
              return [!1, !1];
          }
        },
        B = function B(c, d) {
          var s = [],
            $ = O(u(new Date(d, c))),
            z = O(u(new Date(d, c + 1, 0))),
            L = t.weekStart,
            ye = st($, {
              weekStartsOn: L
            }),
            Te = function Te(te) {
              var Ve = C(te, c);
              if (s.push({
                days: Ve
              }), !s[s.length - 1].days.some(function (Be) {
                return ve(Le(Be.value), Le(z));
              })) {
                var Be = Ze(te, 7);
                Te(Be);
              }
            };
          if (Te(ye), t.sixWeeks && s.length < 6) {
            var te = 6 - s.length,
              Ve = ($.getDay() + 7 - L) % 7,
              Ce = 6 - (z.getDay() + 7 - L) % 7,
              _w = w(Ve, Ce),
              _w2 = _slicedToArray(_w, 2),
              Qe = _w2[0],
              yt = _w2[1];
            for (var nt = 1; nt <= te; nt++) if (yt ? !!(nt % 2) == Qe : Qe) {
              var ze = s[0].days[0],
                j = C(Ze(ze.value, -7), ke($));
              s.unshift({
                days: j
              });
            } else {
              var _ze = s[s.length - 1],
                _j = _ze.days[_ze.days.length - 1],
                le = C(Ze(_j.value, 1), ke($));
              s.push({
                days: le
              });
            }
          }
          return s;
        },
        S = function S(c, d, s) {
          return [Ae(O(c), {
            date: 1
          }), Ae(O(), {
            month: d,
            year: s,
            date: 1
          })];
        },
        V = function V(c, d) {
          return Ye.apply(void 0, _toConsumableArray(S(t.minDate, c, d))) || ve.apply(void 0, _toConsumableArray(S(t.minDate, c, d)));
        },
        P = function P(c, d) {
          return Re.apply(void 0, _toConsumableArray(S(t.maxDate, c, d))) || ve.apply(void 0, _toConsumableArray(S(t.maxDate, c, d)));
        },
        b = function b(c, d, s) {
          var $ = !1;
          return t.maxDate && s && P(c, d) && ($ = !0), t.minDate && !s && V(c, d) && ($ = !0), $;
        },
        g = function g(c, d, s, $) {
          var z = !1;
          return $ ? t.minDate && t.maxDate ? z = b(c, d, s) : (t.minDate && V(c, d) || t.maxDate && P(c, d)) && (z = !0) : z = !0, z;
        },
        h = function h(c) {
          var d = Le(u(O(c))).toISOString(),
            _d$split = d.split("T"),
            _d$split2 = _slicedToArray(_d$split, 1),
            s = _d$split2[0];
          return s;
        },
        _ = function _(c) {
          return new Map(c.map(function (d) {
            return [h(d), !0];
          }));
        },
        M = function M(c) {
          return Array.isArray(c) && c.length > 0;
        };
      return {
        checkPartialRangeValue: a,
        checkRangeEnabled: e,
        getZonedDate: u,
        getZonedToUtc: p,
        formatDate: l,
        getDefaultPattern: i,
        validateDate: k,
        getDefaultStartTime: v,
        isDisabled: I,
        isValidDate: Y,
        sanitizeDate: R,
        getWeekFromDate: A,
        matchDate: U,
        setDateMonthOrYear: J,
        isValidTime: E,
        getCalendarDays: B,
        validateMonthYearInRange: g,
        validateMaxDate: P,
        validateMinDate: V,
        assignDefaultTime: f,
        mapDatesArrToMap: function mapDatesArrToMap(c) {
          M(t.allowedDates) && (c.allowedDates = _(t.allowedDates)), M(t.highlight) && (c.highlightedDates = _(t.highlight)), M(t.disabledDates) && (c.disabledDates = _(t.disabledDates));
        },
        defaults: r,
        hideNavigationButtons: y
      };
    },
    De = n.reactive({
      monthYear: [],
      calendar: [],
      time: [],
      actionRow: [],
      selectionGrid: [],
      timePicker: {
        0: [],
        1: []
      },
      monthPicker: []
    }),
    Tn = n.ref(null),
    zt = n.ref(!1),
    Cn = n.ref(!1),
    Mn = n.ref(!1),
    Pn = n.ref(!1),
    Ue = n.ref(0),
    xe = n.ref(0),
    lt = function lt() {
      var t = n.computed(function () {
          return zt.value ? [].concat(_toConsumableArray(De.selectionGrid), [De.actionRow]).filter(function (A) {
            return A.length;
          }) : Cn.value ? [].concat(_toConsumableArray(De.timePicker[0]), _toConsumableArray(De.timePicker[1]), [Pn.value ? [] : [Tn.value], De.actionRow]).filter(function (A) {
            return A.length;
          }) : Mn.value ? [].concat(_toConsumableArray(De.monthPicker), [De.actionRow]) : [De.monthYear].concat(_toConsumableArray(De.calendar), [De.time, De.actionRow]).filter(function (A) {
            return A.length;
          });
        }),
        a = function a(A) {
          Ue.value = A ? Ue.value + 1 : Ue.value - 1;
          var U = null;
          t.value[xe.value] && (U = t.value[xe.value][Ue.value]), U || (Ue.value = A ? Ue.value - 1 : Ue.value + 1);
        },
        r = function r(A) {
          if (xe.value === 0 && !A || xe.value === t.value.length && A) return;
          xe.value = A ? xe.value + 1 : xe.value - 1, t.value[xe.value] ? t.value[xe.value] && !t.value[xe.value][Ue.value] && Ue.value !== 0 && (Ue.value = t.value[xe.value].length - 1) : xe.value = A ? xe.value - 1 : xe.value + 1;
        },
        e = function e(A) {
          var U = null;
          t.value[xe.value] && (U = t.value[xe.value][Ue.value]), U ? U.focus({
            preventScroll: !zt.value
          }) : Ue.value = A ? Ue.value - 1 : Ue.value + 1;
        },
        o = function o() {
          a(!0), e(!0);
        },
        i = function i() {
          a(!1), e(!1);
        },
        l = function l() {
          r(!1), e(!0);
        },
        u = function u() {
          r(!0), e(!0);
        },
        p = function p(A, U) {
          De[U] = A;
        },
        y = function y(A, U) {
          De[U] = A;
        },
        D = function D() {
          Ue.value = 0, xe.value = 0;
        };
      return {
        buildMatrix: p,
        buildMultiLevelMatrix: y,
        setTimePickerBackRef: function setTimePickerBackRef(A) {
          Tn.value = A;
        },
        setSelectionGrid: function setSelectionGrid(A) {
          zt.value = A, D(), A || (De.selectionGrid = []);
        },
        setTimePicker: function setTimePicker(A) {
          var U = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          Cn.value = A, Pn.value = U, D(), A || (De.timePicker[0] = [], De.timePicker[1] = []);
        },
        setTimePickerElements: function setTimePickerElements(A) {
          var U = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          De.timePicker[U] = A;
        },
        arrowRight: o,
        arrowLeft: i,
        arrowUp: l,
        arrowDown: u,
        clearArrowNav: function clearArrowNav() {
          De.monthYear = [], De.calendar = [], De.time = [], De.actionRow = [], De.selectionGrid = [], De.timePicker[0] = [], De.timePicker[1] = [], zt.value = !1, Cn.value = !1, Pn.value = !1, Mn.value = !1, D(), Tn.value = null;
        },
        setMonthPicker: function setMonthPicker(A) {
          Mn.value = A, D();
        },
        refSets: De
      };
    },
    Ar = function Ar(t) {
      return Array.isArray(t);
    },
    mt = function mt(t) {
      return Array.isArray(t);
    },
    Er = function Er(t) {
      return Array.isArray(t) && t.length === 2;
    },
    di = function di(t, a, r, e, o) {
      var _We = We(t),
        i = _We.getDefaultStartTime,
        l = _We.isDisabled,
        u = _We.sanitizeDate,
        p = _We.getWeekFromDate,
        y = _We.setDateMonthOrYear,
        D = _We.validateMonthYearInRange,
        k = _We.defaults,
        f = n.computed({
          get: function get() {
            return t.internalModelValue;
          },
          set: function set(m) {
            !t.readonly && !t.disabled && a("update:internal-model-value", m);
          }
        }),
        v = n.ref([]);
      n.watch(f, function (m, N) {
        t.range ? q() : ft(m, N) || q();
      });
      var I = n.toRef(t, "multiCalendars");
      n.watch(I, function () {
        j(0);
      });
      var Y = n.ref([{
        month: ke(O()),
        year: be(O())
      }]);
      n.watch(Y, function () {
        Y.value.forEach(function (m, N) {
          a("update-month-year", {
            instance: N,
            month: m.month,
            year: m.year
          });
        });
      }, {
        deep: !0
      });
      var R = n.reactive({
          hours: t.range ? [Je(O()), Je(O())] : Je(O()),
          minutes: t.range ? [et(O()), et(O())] : et(O()),
          seconds: t.range ? [0, 0] : 0
        }),
        A = n.computed(function () {
          return function (m) {
            return Y.value[m] ? Y.value[m].month : 0;
          };
        }),
        U = n.computed(function () {
          return function (m) {
            return Y.value[m] ? Y.value[m].year : 0;
          };
        }),
        J = n.computed(function () {
          var m;
          return (m = t.flow) != null && m.length && !t.partialFlow ? o.value === t.flow.length : !0;
        }),
        ne = function ne(m, N, ee) {
          var ie, $e;
          Y.value[m] || (Y.value[m] = {
            month: 0,
            year: 0
          }), Y.value[m].month = Or(N) ? (ie = Y.value[m]) == null ? void 0 : ie.month : N, Y.value[m].year = Or(ee) ? ($e = Y.value[m]) == null ? void 0 : $e.year : ee;
        },
        x = function x(m, N) {
          R[m] = N;
        },
        W = function W() {
          t.startDate && (ne(0, ke(O(t.startDate)), be(O(t.startDate))), k.value.multiCalendars && j(0));
        };
      n.onMounted(function () {
        f.value || (W(), k.value.startTime && P()), q(!0), t.focusStartDate && t.startDate && W();
      });
      var q = function q() {
          var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          if (f.value) return Array.isArray(f.value) ? (v.value = f.value, C(m)) : re(f.value, m);
          if (t.timePicker) return w();
          if (t.monthPicker && !t.range) return B();
          if (t.yearPicker && !t.range) return S();
          if (k.value.multiCalendars && m && !t.startDate) return X(O(), m);
        },
        X = function X(m) {
          var N = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          if ((!k.value.multiCalendars || !t.multiStatic || N) && ne(0, ke(m), be(m)), k.value.multiCalendars) for (var ee = 1; ee < k.value.multiCalendars; ee++) {
            var ie = Ae(O(), {
                month: A.value(ee - 1),
                year: U.value(ee - 1)
              }),
              $e = Un(ie, {
                months: 1
              });
            Y.value[ee] = {
              month: ke($e),
              year: be($e)
            };
          }
        },
        re = function re(m, N) {
          X(m), x("hours", Je(m)), x("minutes", et(m)), x("seconds", wt(m)), k.value.multiCalendars && N && g();
        },
        ue = function ue(m, N) {
          m[1] && t.showLastInRange ? X(m[1], N) : X(m[0], N);
          var ee = function ee(ie, $e) {
            return [ie(m[0]), m[1] ? ie(m[1]) : R[$e][1]];
          };
          x("hours", ee(Je, "hours")), x("minutes", ee(et, "minutes")), x("seconds", ee(wt, "seconds"));
        },
        E = function E(m, N) {
          if ((t.range || t.weekPicker) && !t.multiDates) return ue(m, N);
          if (t.multiDates) {
            var ee = m[m.length - 1];
            return re(ee, N);
          }
        },
        C = function C(m) {
          var N = f.value;
          E(N, m), k.value.multiCalendars && t.multiCalendarsSolo && g();
        },
        w = function w() {
          if (P(), !t.range) f.value = He(O(), R.hours, R.minutes, V());else {
            var m = R.hours,
              N = R.minutes;
            f.value = [He(O(), m[0], N[0], V()), He(O(), m[1], N[1], V(!1))];
          }
        },
        B = function B() {
          t.multiDates ? f.value = [y(O(), A.value(0), U.value(0))] : f.value = y(O(), A.value(0), U.value(0));
        },
        S = function S() {
          f.value = O();
        },
        V = function V() {
          var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          return t.enableSeconds ? Array.isArray(R.seconds) ? m ? R.seconds[0] : R.seconds[1] : R.seconds : 0;
        },
        P = function P() {
          var m = i();
          if (m) {
            var N = Array.isArray(m),
              ee = N ? [+m[0].hours, +m[1].hours] : +m.hours,
              ie = N ? [+m[0].minutes, +m[1].minutes] : +m.minutes,
              $e = N ? [+m[0].seconds, +m[1].seconds] : +m.seconds;
            x("hours", ee), x("minutes", ie), t.enableSeconds && x("seconds", $e);
          }
        },
        b = function b() {
          return Array.isArray(f.value) && f.value.length ? f.value[f.value.length - 1] : null;
        },
        g = function g() {
          if (Array.isArray(f.value) && f.value.length === 2) {
            var m = O(O(f.value[1] ? f.value[1] : Ke(f.value[0], 1))),
              _ref2 = [ke(f.value[0]), be(f.value[0])],
              N = _ref2[0],
              ee = _ref2[1],
              _ref3 = [ke(f.value[1]), be(f.value[1])],
              ie = _ref3[0],
              $e = _ref3[1];
            (N !== ie || N === ie && ee !== $e) && t.multiCalendarsSolo && ne(1, ke(m), be(m));
          } else f.value && !Array.isArray(f.value) && ne(0, ke(f.value), be(f.value));
        },
        h = function h(m) {
          var N = Ke(m, 1);
          return {
            month: ke(N),
            year: be(N)
          };
        },
        _ = function _(m) {
          var N = ke(O(m)),
            ee = be(O(m));
          if (ne(0, N, ee), k.value.multiCalendars > 0) for (var ie = 1; ie < k.value.multiCalendars; ie++) {
            var $e = h(Ae(O(m), {
              year: A.value(ie - 1),
              month: U.value(ie - 1)
            }));
            ne(ie, $e.month, $e.year);
          }
        },
        M = function M(m) {
          if (f.value && Array.isArray(f.value)) {
            if (f.value.some(function (N) {
              return ve(m, N);
            })) {
              var N = f.value.filter(function (ee) {
                return !ve(ee, m);
              });
              f.value = N.length ? N : null;
            } else (t.multiDatesLimit && +t.multiDatesLimit > f.value.length || !t.multiDatesLimit) && f.value.push(m);
          } else f.value = [m];
        },
        G = function G(m, N) {
          var ee = Re(m, N) ? N : m,
            ie = Re(N, m) ? N : m;
          return Hn({
            start: ee,
            end: ie
          });
        },
        c = function c(m) {
          var N = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          if (Array.isArray(f.value) && f.value[N]) {
            var ee = Lr(m, f.value[N]),
              ie = G(f.value[N], m),
              $e = ie.length === 1 ? 0 : ie.filter(function (T) {
                return l(T);
              }).length,
              rt = Math.abs(ee) - $e;
            if (t.minRange && t.maxRange) return rt >= +t.minRange && rt <= +t.maxRange;
            if (t.minRange) return rt >= +t.minRange;
            if (t.maxRange) return rt <= +t.maxRange;
          }
          return !0;
        },
        d = function d(m) {
          return Array.isArray(f.value) && f.value.length === 2 ? t.fixedStart && (Re(m, f.value[0]) || ve(m, f.value[0])) ? [f.value[0], m] : t.fixedEnd && (Ye(m, f.value[1]) || ve(m, f.value[1])) ? [m, f.value[1]] : (a("invalid-fixed-range", m), f.value) : [];
        },
        s = function s() {
          t.autoApply && J.value && a("auto-apply", t.partialFlow);
        },
        $ = function $() {
          t.autoApply && a("select-date");
        },
        z = function z(m) {
          return !Hn({
            start: m[0],
            end: m[1]
          }).some(function (ee) {
            return l(ee);
          });
        },
        L = function L(m) {
          return f.value = p(O(m.value)), s();
        },
        ye = function ye(m) {
          var N = He(O(m.value), R.hours, R.minutes, V());
          t.multiDates ? M(N) : f.value = N, r(), s();
        },
        Te = function Te() {
          v.value = f.value ? f.value.slice() : [], v.value.length === 2 && !(t.fixedStart || t.fixedEnd) && (v.value = []);
        },
        te = function te(m, N) {
          var ee = [O(m.value), Ze(O(m.value), +t.autoRange)];
          z(ee) && (N && _(m.value), v.value = ee);
        },
        Ve = function Ve(m) {
          Be(m.value) || !c(m.value, t.fixedStart ? 0 : 1) || (v.value = d(O(m.value)));
        },
        Be = function Be(m) {
          return t.noDisabledRange ? G(v.value[0], m).some(function (ee) {
            return l(ee);
          }) : !1;
        },
        Ce = function Ce(m, N) {
          if (Te(), t.autoRange) return te(m, N);
          if (t.fixedStart || t.fixedEnd) return Ve(m);
          v.value[0] ? c(O(m.value)) && !Be(m.value) && (Ye(O(m.value), O(v.value[0])) ? (v.value.unshift(O(m.value)), a("range-end", v.value[0])) : (v.value[1] = O(m.value), a("range-end", v.value[1]))) : (v.value[0] = O(m.value), a("range-start", v.value[0]));
        },
        Qe = function Qe(m) {
          v.value[m] = He(v.value[m], R.hours[m], R.minutes[m], V(m !== 1));
        },
        yt = function yt() {
          var m, N;
          v.value[0] && v.value[1] && +((m = v.value) == null ? void 0 : m[0]) > +((N = v.value) == null ? void 0 : N[1]) && (v.value.reverse(), a("range-start", v.value[0]), a("range-end", v.value[1]));
        },
        nt = function nt() {
          v.value.length && (v.value[0] && !v.value[1] ? Qe(0) : (Qe(0), Qe(1), r()), yt(), f.value = v.value.slice(), v.value[0] && v.value[1] && t.autoApply && a("auto-apply"), v.value[0] && !v.value[1] && t.modelAuto && t.autoApply && a("auto-apply"));
        },
        Tt = function Tt(m) {
          var N = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          if (!(l(m.value) || !m.current && t.hideOffsetDates)) {
            if (t.weekPicker) return L(m);
            if (!t.range) return ye(m);
            mt(R.hours) && mt(R.minutes) && !t.multiDates && (Ce(m, N), nt());
          }
        },
        ze = function ze(m) {
          var N = m[0];
          return t.weekNumbers === "local" ? no(N.value, {
            weekStartsOn: +t.weekStart
          }) : t.weekNumbers === "iso" ? Za(N.value) : typeof t.weekNumbers == "function" ? t.weekNumbers(N.value) : "";
        },
        j = function j(m) {
          for (var N = m - 1; N >= 0; N--) {
            var ee = bt(Ae(O(), {
              month: A.value(N + 1),
              year: U.value(N + 1)
            }), 1);
            ne(N, ke(ee), be(ee));
          }
          for (var _N = m + 1; _N <= k.value.multiCalendars - 1; _N++) {
            var _ee = Ke(Ae(O(), {
              month: A.value(_N - 1),
              year: U.value(_N - 1)
            }), 1);
            ne(_N, ke(_ee), be(_ee));
          }
        },
        le = function le(m) {
          return y(O(), A.value(m), U.value(m));
        },
        se = function se(m) {
          return He(m, R.hours, R.minutes, V());
        },
        Et = function Et(m) {
          M(le(m));
        },
        pt = function pt(m, N) {
          var ee = t.monthPicker ? A.value(m) !== N.month || !N.fromNav : U.value(m) !== N.year || !N.fromNav;
          if (ne(m, N.month, N.year), k.value.multiCalendars && !t.multiCalendarsSolo && j(m), t.monthPicker || t.yearPicker) if (t.multiDates) ee && Et(m);else if (t.range) {
            if (ee && c(le(m))) {
              var ie = f.value ? f.value.slice() : [];
              ie.length === 2 && ie[1] !== null && (ie = []), ie.length ? Ye(le(m), ie[0]) ? ie.unshift(le(m)) : ie[1] = le(m) : ie = [le(m)], f.value = ie;
            }
          } else (t.autoApplyMonth || ee) && (f.value = le(m));
          e(t.multiCalendarsSolo ? m : void 0);
        },
        _n = /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var m,
              N,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  m = _args.length > 0 && _args[0] !== undefined ? _args[0] : !1;
                  if (!(t.autoApply && (t.monthPicker || t.yearPicker))) {
                    _context.next = 6;
                    break;
                  }
                  _context.next = 4;
                  return n.nextTick();
                case 4:
                  N = t.monthPicker ? m : !1;
                  t.range ? a("auto-apply", N || !f.value || f.value.length === 1) : a("auto-apply", N);
                case 6:
                  r();
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function _n() {
            return _ref4.apply(this, arguments);
          };
        }(),
        jt = function jt(m, N) {
          var ee = Ae(O(), {
              month: A.value(N),
              year: U.value(N)
            }),
            ie = m < 0 ? Ke(ee, 1) : bt(ee, 1);
          D(ke(ie), be(ie), m < 0, t.preventMinMaxNavigation) && (ne(N, ke(ie), be(ie)), k.value.multiCalendars && !t.multiCalendarsSolo && j(N), e());
        },
        xt = function xt(m) {
          Ar(m) && Ar(f.value) && mt(R.hours) && mt(R.minutes) ? (m[0] && f.value[0] && (f.value[0] = He(m[0], R.hours[0], R.minutes[0], V())), m[1] && f.value[1] && (f.value[1] = He(m[1], R.hours[1], R.minutes[1], V(!1)))) : t.multiDates && Array.isArray(f.value) ? f.value[f.value.length - 1] = se(m) : !t.range && !Er(m) && (f.value = se(m)), a("time-update");
        },
        On = function On(m) {
          var N = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var ee = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          var ie = N ? m : R.hours,
            $e = !N && !ee ? m : R.minutes,
            rt = ee ? m : R.seconds;
          if (t.range && Er(f.value) && mt(ie) && mt($e) && mt(rt) && !t.disableTimeRangeValidation) {
            var T = function T(we) {
                return He(f.value[we], ie[we], $e[we], rt[we]);
              },
              K = function K(we) {
                return sn(f.value[we], 0);
              };
            if (ve(f.value[0], f.value[1]) && ($t(T(0), K(1)) || St(T(1), K(0)))) return;
          }
          if (x("hours", ie), x("minutes", $e), x("seconds", rt), f.value) {
            if (t.multiDates) {
              var _T = b();
              _T && xt(_T);
            } else xt(f.value);
          } else t.timePicker && xt(t.range ? [O(), O()] : O());
          r();
        },
        Bn = function Bn(m, N) {
          t.monthChangeOnScroll && jt(t.monthChangeOnScroll !== "inverse" ? -m.deltaY : m.deltaY, N);
        },
        An = function An(m, N) {
          var ee = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          t.monthChangeOnArrows && t.vertical === ee && Gt(m, N);
        },
        Gt = function Gt(m, N) {
          jt(m === "right" ? -1 : 1, N);
        };
      return {
        time: R,
        month: A,
        year: U,
        modelValue: f,
        calendars: Y,
        monthYearSelect: _n,
        isDisabled: l,
        updateTime: On,
        getWeekNum: ze,
        selectDate: Tt,
        updateMonthYear: pt,
        handleScroll: Bn,
        getMarker: function getMarker(m) {
          return t.markers.find(function (N) {
            return ve(u(m.value), u(N.date));
          });
        },
        handleArrow: An,
        handleSwipe: Gt,
        selectCurrentDate: function selectCurrentDate() {
          t.range ? f.value && Array.isArray(f.value) && f.value[0] ? f.value = Ye(O(), f.value[0]) ? [O(), f.value[0]] : [f.value[0], O()] : f.value = [O()] : f.value = O(), $();
        },
        presetDateRange: function presetDateRange(m, N) {
          N || m.length && m.length <= 2 && t.range && (f.value = m.map(function (ee) {
            return O(ee);
          }), $(), t.multiCalendars && n.nextTick().then(function () {
            return q(!0);
          }));
        }
      };
    },
    fi = function fi(t, a, r) {
      var e = n.ref(),
        _We2 = We(a),
        o = _We2.getZonedToUtc,
        i = _We2.getZonedDate,
        l = _We2.formatDate,
        u = _We2.getDefaultPattern,
        p = _We2.checkRangeEnabled,
        y = _We2.checkPartialRangeValue,
        D = _We2.isValidDate,
        k = _We2.setDateMonthOrYear,
        f = _We2.defaults,
        v = n.ref(""),
        I = n.toRef(a, "format");
      n.watch(e, function () {
        t("internal-model-change", e.value);
      }), n.watch(I, function () {
        b();
      });
      var Y = function Y(s) {
          var $ = s || O();
          return a.modelType ? h($) : {
            hours: Je($),
            minutes: et($),
            seconds: a.enableSeconds ? wt($) : 0
          };
        },
        R = function R(s) {
          return a.modelType ? h(s) : {
            month: ke(s),
            year: be(s)
          };
        },
        A = function A(s) {
          return Array.isArray(s) ? p(function () {
            return [tt(O(), s[0]), s[1] ? tt(O(), s[1]) : y()];
          }) : tt(O(), +s);
        },
        U = function U(s, $) {
          return (typeof s == "string" || typeof s == "number") && a.modelType ? g(s) : $;
        },
        J = function J(s) {
          return Array.isArray(s) ? [U(s[0], He(null, +s[0].hours, +s[0].minutes, s[0].seconds)), U(s[1], He(null, +s[1].hours, +s[1].minutes, s[1].seconds))] : U(s, He(null, s.hours, s.minutes, s.seconds));
        },
        ne = function ne(s) {
          return Array.isArray(s) ? a.multiDates ? s.map(function ($) {
            return U($, k(null, +$.month, +$.year));
          }) : p(function () {
            return [U(s[0], k(null, +s[0].month, +s[0].year)), U(s[1], s[1] ? k(null, +s[1].month, +s[1].year) : y())];
          }) : U(s, k(null, +s.month, +s.year));
        },
        x = function x(s) {
          if (Array.isArray(s)) return s.map(function ($) {
            return g($);
          });
          throw new Error(Ht.dateArr("multi-dates"));
        },
        W = function W(s) {
          if (Array.isArray(s)) return [O(s[0]), O(s[1])];
          throw new Error(Ht.dateArr("week-picker"));
        },
        q = function q(s) {
          return a.modelAuto ? Array.isArray(s) ? [g(s[0]), g(s[1])] : a.autoApply ? [g(s)] : [g(s), null] : Array.isArray(s) ? p(function () {
            return [g(s[0]), s[1] ? g(s[1]) : y()];
          }) : g(s);
        },
        X = function X() {
          Array.isArray(e.value) && a.range && e.value.length === 1 && e.value.push(y());
        },
        re = function re() {
          var s = e.value;
          return [h(s[0]), s[1] ? h(s[1]) : y()];
        },
        ue = function ue() {
          return e.value[1] ? re() : h(Ee(e.value[0]));
        },
        E = function E() {
          return (e.value || []).map(function (s) {
            return h(s);
          });
        },
        C = function C() {
          return X(), a.modelAuto ? ue() : a.multiDates ? E() : Array.isArray(e.value) ? p(function () {
            return re();
          }) : h(Ee(e.value));
        },
        w = function w(s) {
          return s ? a.timePicker ? J(Ee(s)) : a.monthPicker ? ne(Ee(s)) : a.yearPicker ? A(Ee(s)) : a.multiDates ? x(Ee(s)) : a.weekPicker ? W(Ee(s)) : q(Ee(s)) : null;
        },
        B = function B(s) {
          var $ = w(s);
          D(Ee($)) ? (e.value = Ee($), b()) : (e.value = null, v.value = "");
        },
        S = function S() {
          var $;
          var s = function s(z) {
            var L;
            return dt(z, (L = f.value.textInputOptions) == null ? void 0 : L.format);
          };
          return "".concat(s(e.value[0]), " ").concat(($ = f.value.textInputOptions) == null ? void 0 : $.rangeSeparator, " ").concat(e.value[1] ? s(e.value[1]) : "");
        },
        V = function V() {
          var s;
          return r.value && e.value ? Array.isArray(e.value) ? S() : dt(e.value, (s = f.value.textInputOptions) == null ? void 0 : s.format) : l(e.value);
        },
        P = function P() {
          var s;
          return e.value ? a.multiDates ? e.value.map(function ($) {
            return l($);
          }).join("; ") : a.textInput && typeof ((s = f.value.textInputOptions) == null ? void 0 : s.format) == "string" ? V() : l(e.value) : "";
        },
        b = function b() {
          !a.format || typeof a.format == "string" || a.textInput && typeof a.textInputOptions.format == "string" ? v.value = P() : v.value = a.format(e.value);
        },
        g = function g(s) {
          if (a.utc) {
            var $ = new Date(s);
            return a.utc === "preserve" ? new Date($.getTime() + $.getTimezoneOffset() * 6e4) : $;
          }
          return a.modelType ? a.modelType === "date" || a.modelType === "timestamp" ? i(new Date(s)) : a.modelType === "format" && (typeof a.format == "string" || !a.format) ? on(s, u(), new Date()) : i(on(s, a.modelType, new Date())) : i(new Date(s));
        },
        h = function h(s) {
          return s ? a.utc ? bl(s, a.utc === "preserve", a.enableSeconds) : a.modelType ? a.modelType === "timestamp" ? +o(s) : a.modelType === "format" && (typeof a.format == "string" || !a.format) ? l(o(s)) : l(o(s), a.modelType) : o(s) : "";
        },
        _ = function _(s) {
          t("update:model-value", s);
        },
        M = function M(s) {
          return Array.isArray(e.value) ? a.multiDates ? e.value.map(function ($) {
            return s($);
          }) : [s(e.value[0]), e.value[1] ? s(e.value[1]) : y()] : s(Ee(e.value));
        },
        G = function G(s) {
          return _(Ee(M(s)));
        };
      return {
        inputValue: v,
        internalModelValue: e,
        checkBeforeEmit: function checkBeforeEmit() {
          return e.value ? a.range ? a.partialRange ? e.value.length >= 1 : e.value.length === 2 : !!e.value : !1;
        },
        parseExternalModelValue: B,
        formatInputValue: b,
        emitModelValue: function emitModelValue() {
          return b(), a.monthPicker ? G(R) : a.timePicker ? G(Y) : a.yearPicker ? G(be) : a.weekPicker ? _(e.value) : _(C());
        }
      };
    },
    mi = function mi(t, a) {
      var _We3 = We(t),
        r = _We3.validateMonthYearInRange,
        e = _We3.validateMaxDate,
        o = _We3.validateMinDate,
        i = _We3.defaults,
        l = function l(k, f) {
          var v = k;
          return i.value.filters.months.includes(ke(v)) ? (v = f ? Ke(k, 1) : bt(k, 1), l(v, f)) : v;
        },
        u = function u(k, f) {
          var v = k;
          return i.value.filters.years.includes(be(v)) ? (v = f ? Fn(k, 1) : wl(k, 1), u(v, f)) : v;
        },
        p = function p(k) {
          var f = Ae(new Date(), {
            month: t.month,
            year: t.year
          });
          var v = k ? Ke(f, 1) : bt(f, 1);
          t.disableYearSelect && (v = tt(v, t.year));
          var I = ke(v),
            Y = be(v);
          i.value.filters.months.includes(I) && (v = l(v, k), I = ke(v), Y = be(v)), i.value.filters.years.includes(Y) && (v = u(v, k), Y = be(v)), r(I, Y, k, t.preventMinMaxNavigation) && y(I, Y);
        },
        y = function y(k, f) {
          a("update-month-year", {
            month: k,
            year: f
          });
        },
        D = n.computed(function () {
          return function (k) {
            if (!t.preventMinMaxNavigation || k && !t.maxDate || !k && !t.minDate) return !1;
            var f = Ae(new Date(), {
                month: t.month,
                year: t.year
              }),
              v = k ? Ke(f, 1) : bt(f, 1),
              I = [ke(v), be(v)];
            return k ? !e.apply(void 0, I) : !o.apply(void 0, I);
          };
        });
      return {
        handleMonthYearChange: p,
        isDisabled: D,
        updateMonthYear: y
      };
    };
  var Kt = function (t) {
    return t.center = "center", t.left = "left", t.right = "right", t;
  }(Kt || {});
  var hi = function hi(t, a, r, e) {
      var o = n.ref({
          top: "0",
          left: "0",
          transform: "none",
          opacity: "0"
        }),
        i = n.ref(!1),
        l = n.toRef(e, "teleportCenter"),
        u = n.computed(function () {
          return i.value ? "-100%" : "0";
        }),
        p = function p() {
          y(), o.value.opacity = "0";
        };
      n.watch(l, function () {
        U();
      }), n.onMounted(function () {
        y();
      });
      var y = function y() {
          var C = Ne(a);
          if (C) {
            var _I = I(C),
              w = _I.top,
              B = _I.left,
              S = _I.width,
              V = _I.height;
            o.value.top = "".concat(w + V / 2, "px"), v(B, S, 50);
          }
        },
        D = function D(C) {
          if (e.teleport) {
            var w = C.getBoundingClientRect();
            return {
              left: w.left + window.scrollX,
              top: w.top + window.scrollY
            };
          }
          return {
            top: 0,
            left: 0
          };
        },
        k = function k(C, w) {
          o.value.left = "".concat(C + w, "px"), o.value.transform = "translate(-100%, ".concat(u.value, ")");
        },
        f = function f(C) {
          o.value.left = "".concat(C, "px"), o.value.transform = "translate(0, ".concat(u.value, ")");
        },
        v = function v(C, w, B) {
          e.position === Kt.left && f(C), e.position === Kt.right && k(C, w), e.position === Kt.center && (o.value.left = "".concat(C + w / 2, "px"), o.value.transform = B ? "translate(-50%, -".concat(B, "%)") : "translate(-50%, ".concat(u.value, ")"));
        },
        I = function I(C) {
          var _C$getBoundingClientR = C.getBoundingClientRect(),
            w = _C$getBoundingClientR.width,
            B = _C$getBoundingClientR.height,
            _ref5 = e.altPosition ? e.altPosition(C) : D(C),
            S = _ref5.top,
            V = _ref5.left;
          return {
            top: +S,
            left: +V,
            width: w,
            height: B
          };
        },
        Y = function Y() {
          var C = Ne(a);
          if (C) {
            var _I2 = I(C),
              w = _I2.top,
              B = _I2.left,
              S = _I2.width,
              V = _I2.height,
              P = q();
            o.value.top = "".concat(w + V / 2, "px"), v(B, S, P === "top" ? 100 : 0);
          }
        },
        R = function R() {
          o.value.left = "50%", o.value.top = "50%", o.value.transform = "translate(-50%, -50%)", o.value.position = "fixed", delete o.value.opacity;
        },
        A = function A() {
          var C = Ne(a),
            _e$altPosition = e.altPosition(C),
            w = _e$altPosition.top,
            B = _e$altPosition.left,
            S = _e$altPosition.transform;
          o.value = {
            top: "".concat(w, "px"),
            left: "".concat(B, "px"),
            transform: S || ""
          };
        },
        U = function U() {
          var C = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          if (!e.inline) return l.value ? R() : e.altPosition !== null ? A() : (C && r("recalculate-position"), re());
        },
        J = function J(_ref6) {
          var C = _ref6.inputEl,
            w = _ref6.menuEl,
            B = _ref6.left,
            S = _ref6.width;
          window.screen.width > 768 && v(B, S), W(C, w);
        },
        ne = function ne(C, w) {
          var _I3 = I(C),
            B = _I3.top,
            S = _I3.left,
            V = _I3.height,
            P = _I3.width;
          o.value.top = "".concat(V + B + +e.offset, "px"), i.value = !1, J({
            inputEl: C,
            menuEl: w,
            left: S,
            width: P
          });
        },
        x = function x(C, w) {
          var _I4 = I(C),
            B = _I4.top,
            S = _I4.left,
            V = _I4.width;
          o.value.top = "".concat(B - +e.offset, "px"), i.value = !0, J({
            inputEl: C,
            menuEl: w,
            left: S,
            width: V
          });
        },
        W = function W(C, w) {
          if (e.autoPosition) {
            var _I5 = I(C),
              B = _I5.left,
              S = _I5.width,
              _w$getBoundingClientR = w.getBoundingClientRect(),
              V = _w$getBoundingClientR.left,
              P = _w$getBoundingClientR.right;
            return V <= 0 ? f(B) : P >= document.documentElement.clientWidth ? k(B, S) : v(B, S);
          }
        },
        q = function q() {
          var C = Ne(t),
            w = Ne(a);
          if (C && w) {
            var _C$getBoundingClientR2 = C.getBoundingClientRect(),
              B = _C$getBoundingClientR2.height,
              _w$getBoundingClientR2 = w.getBoundingClientRect(),
              S = _w$getBoundingClientR2.top,
              V = _w$getBoundingClientR2.height,
              b = window.innerHeight - S - V,
              g = S;
            return B <= b ? "bottom" : B > b && B <= g ? "top" : b >= g ? "bottom" : "top";
          }
          return "bottom";
        },
        X = function X(C, w) {
          return q() === "bottom" ? ne(C, w) : x(C, w);
        },
        re = function re() {
          var C = Ne(a),
            w = Ne(t);
          if (C && w) return e.autoPosition ? X(C, w) : ne(C, w);
        },
        ue = function ue(C) {
          if (C) {
            var w = C.scrollHeight > C.clientHeight,
              S = window.getComputedStyle(C).overflowY.indexOf("hidden") !== -1;
            return w && !S;
          }
          return !0;
        },
        E = function E(C) {
          return !C || C === document.body || C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : ue(C) ? C : E(C.parentNode);
        };
      return {
        openOnTop: i,
        menuStyle: o,
        resetPosition: p,
        setMenuPosition: U,
        setInitialPosition: Y,
        getScrollableParent: E
      };
    },
    Dt = [{
      name: "clock-icon",
      use: ["time", "calendar"]
    }, {
      name: "arrow-left",
      use: ["month-year", "calendar"]
    }, {
      name: "arrow-right",
      use: ["month-year", "calendar"]
    }, {
      name: "arrow-up",
      use: ["time", "calendar", "month-year"]
    }, {
      name: "arrow-down",
      use: ["time", "calendar", "month-year"]
    }, {
      name: "calendar-icon",
      use: ["month-year", "time", "calendar"]
    }, {
      name: "day",
      use: ["calendar"]
    }, {
      name: "month-overlay-value",
      use: ["calendar", "month-year"]
    }, {
      name: "year-overlay-value",
      use: ["calendar", "month-year"]
    }, {
      name: "year-overlay",
      use: ["month-year"]
    }, {
      name: "month-overlay",
      use: ["month-year"]
    }, {
      name: "month-overlay-header",
      use: ["month-year"]
    }, {
      name: "year-overlay-header",
      use: ["month-year"]
    }, {
      name: "hours-overlay-value",
      use: ["calendar", "time"]
    }, {
      name: "minutes-overlay-value",
      use: ["calendar", "time"]
    }, {
      name: "seconds-overlay-value",
      use: ["calendar", "time"]
    }, {
      name: "hours",
      use: ["calendar", "time"]
    }, {
      name: "minutes",
      use: ["calendar", "time"]
    }, {
      name: "month",
      use: ["calendar", "month-year"]
    }, {
      name: "year",
      use: ["calendar", "month-year"]
    }, {
      name: "action-buttons",
      use: ["action"]
    }, {
      name: "action-preview",
      use: ["action"]
    }, {
      name: "calendar-header",
      use: ["calendar"]
    }, {
      name: "marker-tooltip",
      use: ["calendar"]
    }, {
      name: "action-extra",
      use: ["menu"]
    }, {
      name: "time-picker-overlay",
      use: ["calendar", "time"]
    }, {
      name: "am-pm-button",
      use: ["calendar", "time"]
    }, {
      name: "left-sidebar",
      use: ["menu"]
    }, {
      name: "right-sidebar",
      use: ["menu"]
    }, {
      name: "month-year",
      use: ["month-year"]
    }, {
      name: "time-picker",
      use: ["menu"]
    }, {
      name: "action-row",
      use: ["action"]
    }, {
      name: "marker",
      use: ["calendar"]
    }],
    yi = [{
      name: "trigger"
    }, {
      name: "input-icon"
    }, {
      name: "clear-icon"
    }, {
      name: "dp-input"
    }],
    pi = {
      all: function all() {
        return Dt;
      },
      monthYear: function monthYear() {
        return Dt.filter(function (t) {
          return t.use.includes("month-year");
        });
      },
      input: function input() {
        return yi;
      },
      timePicker: function timePicker() {
        return Dt.filter(function (t) {
          return t.use.includes("time");
        });
      },
      action: function action() {
        return Dt.filter(function (t) {
          return t.use.includes("action");
        });
      },
      calendar: function calendar() {
        return Dt.filter(function (t) {
          return t.use.includes("calendar");
        });
      },
      menu: function menu() {
        return Dt.filter(function (t) {
          return t.use.includes("menu");
        });
      }
    },
    ht = function ht(t, a, r) {
      var e = [];
      return pi[a]().forEach(function (o) {
        t[o.name] && e.push(o.name);
      }), r && r.length && r.forEach(function (o) {
        o.slot && e.push(o.slot);
      }), e;
    },
    qt = function qt(t) {
      return {
        transitionName: n.computed(function () {
          return function (r) {
            return t && typeof t != "boolean" ? r ? t.open : t.close : "";
          };
        }),
        showTransition: !!t
      };
    },
    it = {
      multiCalendars: {
        type: [Boolean, Number, String],
        "default": null
      },
      modelValue: {
        type: [String, Date, Array, Object, Number],
        "default": null
      },
      modelType: {
        type: String,
        "default": null
      },
      position: {
        type: String,
        "default": "center"
      },
      dark: {
        type: Boolean,
        "default": !1
      },
      format: {
        type: [String, Function],
        "default": function _default() {
          return null;
        }
      },
      closeOnScroll: {
        type: Boolean,
        "default": !1
      },
      autoPosition: {
        type: Boolean,
        "default": !0
      },
      closeOnAutoApply: {
        type: Boolean,
        "default": !0
      },
      altPosition: {
        type: Function,
        "default": null
      },
      transitions: {
        type: [Boolean, Object],
        "default": !0
      },
      formatLocale: {
        type: Object,
        "default": null
      },
      utc: {
        type: [Boolean, String],
        "default": !1
      },
      ariaLabels: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      offset: {
        type: [Number, String],
        "default": 10
      },
      hideNavigation: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      timezone: {
        type: String,
        "default": null
      },
      vertical: {
        type: Boolean,
        "default": !1
      },
      disableMonthYearSelect: {
        type: Boolean,
        "default": !1
      },
      disableYearSelect: {
        type: Boolean,
        "default": !1
      },
      menuClassName: {
        type: String,
        "default": null
      },
      dayClass: {
        type: Function,
        "default": null
      },
      yearRange: {
        type: Array,
        "default": function _default() {
          return [1900, 2100];
        }
      },
      multiCalendarsSolo: {
        type: Boolean,
        "default": !1
      },
      calendarCellClassName: {
        type: String,
        "default": null
      },
      enableTimePicker: {
        type: Boolean,
        "default": !0
      },
      autoApply: {
        type: Boolean,
        "default": !1
      },
      disabledDates: {
        type: [Array, Function],
        "default": function _default() {
          return [];
        }
      },
      monthNameFormat: {
        type: String,
        "default": "short"
      },
      startDate: {
        type: [Date, String],
        "default": null
      },
      startTime: {
        type: [Object, Array],
        "default": null
      },
      hideOffsetDates: {
        type: Boolean,
        "default": !1
      },
      autoRange: {
        type: [Number, String],
        "default": null
      },
      noToday: {
        type: Boolean,
        "default": !1
      },
      disabledWeekDays: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      allowedDates: {
        type: Array,
        "default": null
      },
      showNowButton: {
        type: Boolean,
        "default": !1
      },
      nowButtonLabel: {
        type: String,
        "default": "Now"
      },
      markers: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      modeHeight: {
        type: [Number, String],
        "default": 255
      },
      escClose: {
        type: Boolean,
        "default": !0
      },
      spaceConfirm: {
        type: Boolean,
        "default": !0
      },
      monthChangeOnArrows: {
        type: Boolean,
        "default": !0
      },
      presetRanges: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      flow: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      partialFlow: {
        type: Boolean,
        "default": !1
      },
      preventMinMaxNavigation: {
        type: Boolean,
        "default": !1
      },
      minRange: {
        type: [Number, String],
        "default": null
      },
      maxRange: {
        type: [Number, String],
        "default": null
      },
      multiDatesLimit: {
        type: [Number, String],
        "default": null
      },
      reverseYears: {
        type: Boolean,
        "default": !1
      },
      keepActionRow: {
        type: Boolean,
        "default": !1
      },
      weekPicker: {
        type: Boolean,
        "default": !1
      },
      filters: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      arrowNavigation: {
        type: Boolean,
        "default": !1
      },
      multiStatic: {
        type: Boolean,
        "default": !0
      },
      disableTimeRangeValidation: {
        type: Boolean,
        "default": !1
      },
      highlight: {
        type: [Array, Function],
        "default": null
      },
      highlightWeekDays: {
        type: Array,
        "default": null
      },
      highlightDisabledDays: {
        type: Boolean,
        "default": !1
      },
      teleport: {
        type: [String, Boolean],
        "default": null
      },
      teleportCenter: {
        type: Boolean,
        "default": !1
      },
      locale: {
        type: String,
        "default": "en-Us"
      },
      weekNumName: {
        type: String,
        "default": "W"
      },
      weekStart: {
        type: [Number, String],
        "default": 1
      },
      weekNumbers: {
        type: [String, Function],
        "default": null
      },
      calendarClassName: {
        type: String,
        "default": null
      },
      noSwipe: {
        type: Boolean,
        "default": !1
      },
      monthChangeOnScroll: {
        type: [Boolean, String],
        "default": !0
      },
      dayNames: {
        type: [Function, Array],
        "default": null
      },
      monthPicker: {
        type: Boolean,
        "default": !1
      },
      customProps: {
        type: Object,
        "default": null
      },
      yearPicker: {
        type: Boolean,
        "default": !1
      },
      modelAuto: {
        type: Boolean,
        "default": !1
      },
      selectText: {
        type: String,
        "default": "選擇"
      },
      cancelText: {
        type: String,
        "default": "取消"
      },
      previewFormat: {
        type: [String, Function],
        "default": function _default() {
          return "";
        }
      },
      multiDates: {
        type: Boolean,
        "default": !1
      },
      partialRange: {
        type: Boolean,
        "default": !0
      },
      ignoreTimeValidation: {
        type: Boolean,
        "default": !1
      },
      minDate: {
        type: [Date, String],
        "default": null
      },
      maxDate: {
        type: [Date, String],
        "default": null
      },
      minTime: {
        type: Object,
        "default": null
      },
      maxTime: {
        type: Object,
        "default": null
      },
      name: {
        type: String,
        "default": null
      },
      placeholder: {
        type: String,
        "default": ""
      },
      hideInputIcon: {
        type: Boolean,
        "default": !1
      },
      clearable: {
        type: Boolean,
        "default": !0
      },
      state: {
        type: Boolean,
        "default": null
      },
      required: {
        type: Boolean,
        "default": !1
      },
      autocomplete: {
        type: String,
        "default": "off"
      },
      inputClassName: {
        type: String,
        "default": null
      },
      inlineWithInput: {
        type: Boolean,
        "default": !1
      },
      textInputOptions: {
        type: Object,
        "default": function _default() {
          return null;
        }
      },
      fixedStart: {
        type: Boolean,
        "default": !1
      },
      fixedEnd: {
        type: Boolean,
        "default": !1
      },
      timePicker: {
        type: Boolean,
        "default": !1
      },
      enableSeconds: {
        type: Boolean,
        "default": !1
      },
      is24: {
        type: Boolean,
        "default": !0
      },
      noHoursOverlay: {
        type: Boolean,
        "default": !1
      },
      noMinutesOverlay: {
        type: Boolean,
        "default": !1
      },
      noSecondsOverlay: {
        type: Boolean,
        "default": !1
      },
      hoursGridIncrement: {
        type: [String, Number],
        "default": 1
      },
      minutesGridIncrement: {
        type: [String, Number],
        "default": 5
      },
      secondsGridIncrement: {
        type: [String, Number],
        "default": 5
      },
      hoursIncrement: {
        type: [Number, String],
        "default": 1
      },
      minutesIncrement: {
        type: [Number, String],
        "default": 1
      },
      secondsIncrement: {
        type: [Number, String],
        "default": 1
      },
      range: {
        type: Boolean,
        "default": !1
      },
      uid: {
        type: String,
        "default": null
      },
      disabled: {
        type: Boolean,
        "default": !1
      },
      readonly: {
        type: Boolean,
        "default": !1
      },
      inline: {
        type: Boolean,
        "default": !1
      },
      textInput: {
        type: Boolean,
        "default": !1
      },
      onClickOutside: {
        type: Function,
        "default": null
      },
      noDisabledRange: {
        type: Boolean,
        "default": !1
      },
      sixWeeks: {
        type: [Boolean, String],
        "default": !1
      },
      actionRow: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      allowPreventDefault: {
        type: Boolean,
        "default": !1
      },
      closeOnClearValue: {
        type: Boolean,
        "default": !0
      },
      focusStartDate: {
        type: Boolean,
        "default": !1
      },
      disabledTimes: {
        type: Function,
        "default": void 0
      },
      showLastInRange: {
        type: Boolean,
        "default": !0
      },
      timePickerInline: {
        type: Boolean,
        "default": !1
      },
      calendar: {
        type: Function,
        "default": null
      },
      autoApplyMonth: {
        type: Boolean,
        "default": !0
      }
    },
    gi = {
      key: 1,
      "class": "dp__input_wrap"
    },
    vi = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "onKeydown"],
    wi = {
      key: 2,
      "class": "dp__clear_icon"
    },
    ki = n.defineComponent({
      __name: "DatepickerInput",
      props: _objectSpread({
        isMenuOpen: {
          type: Boolean,
          "default": !1
        },
        inputValue: {
          type: String,
          "default": ""
        }
      }, it),
      emits: ["clear", "open", "update:input-value", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus-prev", "focus", "blur", "real-blur"],
      setup: function setup(t, _ref7) {
        var a = _ref7.expose,
          r = _ref7.emit;
        var e = t,
          _We4 = We(e),
          o = _We4.getDefaultPattern,
          i = _We4.isValidDate,
          l = _We4.defaults,
          u = _We4.getDefaultStartTime,
          p = _We4.assignDefaultTime,
          y = n.ref(),
          D = n.ref(null),
          k = n.ref(!1),
          f = n.ref(!1),
          v = n.computed(function () {
            return _defineProperty({
              dp__pointer: !e.disabled && !e.readonly && !e.textInput,
              dp__disabled: e.disabled,
              dp__input_readonly: !e.textInput,
              dp__input: !0,
              dp__input_icon_pad: !e.hideInputIcon,
              dp__input_valid: e.state,
              dp__input_invalid: e.state === !1,
              dp__input_focus: k.value || e.isMenuOpen,
              dp__input_reg: !e.textInput
            }, e.inputClassName, !!e.inputClassName);
          }),
          I = function I() {
            r("set-input-date", null), e.autoApply && (r("set-empty-date"), y.value = null);
          },
          Y = function Y(w) {
            var S;
            var B = u();
            return kl(w, ((S = l.value.textInputOptions) == null ? void 0 : S.format) || o(), B || p({}), e.inputValue, f.value);
          },
          R = function R(w) {
            var B = l.value.textInputOptions.rangeSeparator,
              _w$split = w.split("".concat(B)),
              _w$split2 = _slicedToArray(_w$split, 2),
              S = _w$split2[0],
              V = _w$split2[1];
            if (S) {
              var P = Y(S.trim()),
                b = V ? Y(V.trim()) : null,
                g = P && b ? [P, b] : [P];
              y.value = P ? g : null;
            }
          },
          A = function A() {
            f.value = !0;
          },
          U = function U(w) {
            if (e.range) R(w);else if (e.multiDates) {
              var B = w.split(";");
              y.value = B.map(function (S) {
                return Y(S.trim());
              }).filter(function (S) {
                return S;
              });
            } else y.value = Y(w);
          },
          J = function J(w) {
            var S, V;
            var B = typeof w == "string" ? w : (S = w.target) == null ? void 0 : S.value;
            B !== "" ? ((V = l.value.textInputOptions) != null && V.openMenu && !e.isMenuOpen && r("open"), U(B), r("set-input-date", y.value)) : I(), f.value = !1, r("update:input-value", B);
          },
          ne = function ne(w) {
            var B, S;
            e.textInput ? (U(w.target.value), (B = l.value.textInputOptions) != null && B.enterSubmit && i(y.value) && e.inputValue !== "" ? (r("set-input-date", y.value, !0), y.value = null) : (S = l.value.textInputOptions) != null && S.enterSubmit && e.inputValue === "" && (y.value = null, r("clear"))) : q(w);
          },
          x = function x(w) {
            var B, S, V;
            e.textInput && (B = l.value.textInputOptions) != null && B.tabSubmit && U(w.target.value), (S = l.value.textInputOptions) != null && S.tabSubmit && i(y.value) && e.inputValue !== "" ? (r("set-input-date", y.value, !0), y.value = null) : (V = l.value.textInputOptions) != null && V.tabSubmit && e.inputValue === "" && (y.value = null, r("clear"));
          },
          W = function W() {
            k.value = !0, r("focus");
          },
          q = function q(w) {
            var B;
            w.preventDefault(), w.stopImmediatePropagation(), w.stopPropagation(), e.textInput && (B = l.value.textInputOptions) != null && B.openMenu && !e.inlineWithInput ? (r("toggle"), l.value.textInputOptions.enterSubmit && r("select-date")) : e.textInput || r("toggle");
          },
          X = function X() {
            r("real-blur"), k.value = !1, (!e.isMenuOpen || e.inline && e.inlineWithInput) && r("blur"), e.autoApply && e.textInput && y.value && !e.isMenuOpen && (r("set-input-date", y.value), r("select-date"), y.value = null);
          },
          re = function re() {
            r("clear");
          },
          ue = function ue(w) {
            if (!e.textInput) {
              if (w.code === "Tab") return;
              w.preventDefault();
            }
          };
        return a({
          focusInput: function focusInput() {
            var w;
            (w = D.value) == null || w.focus({
              preventScroll: !0
            });
          },
          setParsedDate: function setParsedDate(w) {
            y.value = w;
          }
        }), function (w, B) {
          var S;
          return n.openBlock(), n.createElementBlock("div", {
            onClick: q
          }, [w.$slots.trigger && !w.$slots["dp-input"] && !w.inline ? n.renderSlot(w.$slots, "trigger", {
            key: 0
          }) : n.createCommentVNode("", !0), !w.$slots.trigger && (!w.inline || w.inlineWithInput) ? (n.openBlock(), n.createElementBlock("div", gi, [w.$slots["dp-input"] && !w.$slots.trigger && !w.inline ? n.renderSlot(w.$slots, "dp-input", {
            key: 0,
            value: t.inputValue,
            isMenuOpen: t.isMenuOpen,
            onInput: J,
            onEnter: ne,
            onTab: x,
            onClear: re,
            onBlur: X,
            onKeypress: ue,
            onPaste: A
          }) : n.createCommentVNode("", !0), w.$slots["dp-input"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock("input", {
            key: 1,
            ref_key: "inputRef",
            ref: D,
            id: w.uid ? "dp-input-".concat(w.uid) : void 0,
            name: w.name,
            "class": n.normalizeClass(v.value),
            inputmode: w.textInput ? "text" : "none",
            placeholder: w.placeholder,
            disabled: w.disabled,
            readonly: w.readonly,
            required: w.required,
            value: t.inputValue,
            autocomplete: w.autocomplete,
            "aria-label": (S = n.unref(l).ariaLabels) == null ? void 0 : S.input,
            onInput: J,
            onKeydown: [n.withKeys(ne, ["enter"]), n.withKeys(x, ["tab"]), ue],
            onBlur: X,
            onFocus: W,
            onKeypress: ue,
            onPaste: A
          }, null, 42, vi)), n.createElementVNode("div", {
            onClick: B[2] || (B[2] = function (V) {
              return r("toggle");
            })
          }, [w.$slots["input-icon"] && !w.hideInputIcon ? (n.openBlock(), n.createElementBlock("span", {
            key: 0,
            "class": "dp__input_icon",
            onClick: B[0] || (B[0] = function (V) {
              return r("toggle");
            })
          }, [n.renderSlot(w.$slots, "input-icon")])) : n.createCommentVNode("", !0), !w.$slots["input-icon"] && !w.hideInputIcon && !w.$slots["dp-input"] ? (n.openBlock(), n.createBlock(n.unref(Vt), {
            key: 1,
            onClick: B[1] || (B[1] = function (V) {
              return r("toggle");
            }),
            "class": "dp__input_icon dp__input_icons"
          })) : n.createCommentVNode("", !0)]), w.$slots["clear-icon"] && t.inputValue && w.clearable && !w.disabled && !w.readonly ? (n.openBlock(), n.createElementBlock("span", wi, [n.renderSlot(w.$slots, "clear-icon", {
            clear: re
          })])) : n.createCommentVNode("", !0), w.clearable && !w.$slots["clear-icon"] && t.inputValue && !w.disabled && !w.readonly ? (n.openBlock(), n.createBlock(n.unref(Yr), {
            key: 3,
            "class": "dp__clear_icon dp__input_icons",
            onClick: n.withModifiers(re, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : n.createCommentVNode("", !0)])) : n.createCommentVNode("", !0)]);
        };
      }
    }),
    bi = ["title"],
    Di = {
      "class": "dp__action_buttons"
    },
    Ti = ["onKeydown", "disabled"],
    Ci = n.defineComponent({
      __name: "ActionRow",
      props: _objectSpread({
        menuMount: {
          type: Boolean,
          "default": !1
        },
        internalModelValue: {
          type: [Date, Array],
          "default": null
        },
        calendarWidth: {
          type: Number,
          "default": 0
        }
      }, it),
      emits: ["close-picker", "select-date", "select-now", "invalid-select"],
      setup: function setup(t, _ref9) {
        var a = _ref9.emit;
        var r = t,
          _We5 = We(r),
          e = _We5.formatDate,
          o = _We5.isValidTime,
          i = _We5.defaults,
          _lt = lt(),
          l = _lt.buildMatrix,
          u = n.ref(null),
          p = n.ref(null);
        n.onMounted(function () {
          r.arrowNavigation && l([Ne(u), Ne(p)], "actionRow");
        });
        var y = n.computed(function () {
            return r.range && !r.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0;
          }),
          D = n.computed(function () {
            return !k.value || !f.value || !y.value;
          }),
          k = n.computed(function () {
            return !r.enableTimePicker || r.ignoreTimeValidation ? !0 : o(r.internalModelValue);
          }),
          f = n.computed(function () {
            return r.monthPicker ? r.range && Array.isArray(r.internalModelValue) ? !r.internalModelValue.filter(function (W) {
              return !J(W);
            }).length : J(r.internalModelValue) : !0;
          }),
          v = function v() {
            var x = i.value.previewFormat;
            return r.timePicker || r.monthPicker, x(Ee(r.internalModelValue));
          },
          I = function I() {
            var x = r.internalModelValue;
            return i.value.multiCalendars > 0 ? "".concat(Y(x[0]), " - ").concat(Y(x[1])) : [Y(x[0]), Y(x[1])];
          },
          Y = function Y(x) {
            return e(x, i.value.previewFormat);
          },
          R = n.computed(function () {
            return !r.internalModelValue || !r.menuMount ? "" : typeof i.value.previewFormat == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? I() : r.multiDates ? r.internalModelValue.map(function (x) {
              return "".concat(Y(x));
            }) : r.modelAuto ? "".concat(Y(r.internalModelValue[0])) : "".concat(Y(r.internalModelValue[0]), " -") : Y(r.internalModelValue) : v();
          }),
          A = function A() {
            return r.multiDates ? "; " : " - ";
          },
          U = n.computed(function () {
            return Array.isArray(R.value) ? R.value.join(A()) : R.value;
          }),
          J = function J(x) {
            if (!r.monthPicker) return !0;
            var W = !0;
            var q = O(Ot(x));
            if (r.minDate && r.maxDate) {
              var X = O(Ot(r.minDate)),
                re = O(Ot(r.maxDate));
              return Re(q, X) && Ye(q, re) || ve(q, X) || ve(q, re);
            }
            if (r.minDate) {
              var _X = O(Ot(r.minDate));
              W = Re(q, _X) || ve(q, _X);
            }
            if (r.maxDate) {
              var _X2 = O(Ot(r.maxDate));
              W = Ye(q, _X2) || ve(q, _X2);
            }
            return W;
          },
          ne = function ne() {
            k.value && f.value && y.value ? a("select-date") : a("invalid-select");
          };
        return function (x, W) {
          return n.openBlock(), n.createElementBlock("div", {
            "class": "dp__action_row",
            style: n.normalizeStyle(t.calendarWidth ? {
              width: "".concat(t.calendarWidth, "px")
            } : {})
          }, [x.$slots["action-row"] ? n.renderSlot(x.$slots, "action-row", n.normalizeProps(n.mergeProps({
            key: 0
          }, {
            internalModelValue: t.internalModelValue,
            disabled: D.value,
            selectDate: function selectDate() {
              return x.$emit("select-date");
            },
            closePicker: function closePicker() {
              return x.$emit("close-picker");
            }
          }))) : (n.openBlock(), n.createElementBlock(n.Fragment, {
            key: 1
          }, [n.unref(i).actionRow.showPreview ? (n.openBlock(), n.createElementBlock("div", {
            key: 0,
            "class": "dp__selection_preview",
            title: U.value
          }, [x.$slots["action-preview"] ? n.renderSlot(x.$slots, "action-preview", {
            key: 0,
            value: t.internalModelValue
          }) : n.createCommentVNode("", !0), x.$slots["action-preview"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
            key: 1
          }, [n.createTextVNode(n.toDisplayString(U.value), 1)], 64))], 8, bi)) : n.createCommentVNode("", !0), n.createElementVNode("div", Di, [x.$slots["action-buttons"] ? n.renderSlot(x.$slots, "action-buttons", {
            key: 0,
            value: t.internalModelValue
          }) : n.createCommentVNode("", !0), x.$slots["action-buttons"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
            key: 1
          }, [!x.inline && n.unref(i).actionRow.showCancel ? (n.openBlock(), n.createElementBlock("button", {
            key: 0,
            type: "button",
            ref_key: "cancelButtonRef",
            ref: u,
            "class": "dp__action_button dp__action_cancel",
            onClick: W[0] || (W[0] = function (q) {
              return x.$emit("close-picker");
            }),
            onKeydown: [W[1] || (W[1] = n.withKeys(function (q) {
              return x.$emit("close-picker");
            }, ["enter"])), W[2] || (W[2] = n.withKeys(function (q) {
              return x.$emit("close-picker");
            }, ["space"]))]
          }, n.toDisplayString(x.cancelText), 545)) : n.createCommentVNode("", !0), x.showNowButton || n.unref(i).actionRow.showNow ? (n.openBlock(), n.createElementBlock("button", {
            key: 1,
            type: "button",
            ref_key: "cancelButtonRef",
            ref: u,
            "class": "dp__action_button dp__action_cancel",
            onClick: W[3] || (W[3] = function (q) {
              return x.$emit("select-now");
            }),
            onKeydown: [W[4] || (W[4] = n.withKeys(function (q) {
              return x.$emit("select-now");
            }, ["enter"])), W[5] || (W[5] = n.withKeys(function (q) {
              return x.$emit("select-now");
            }, ["space"]))]
          }, n.toDisplayString(x.nowButtonLabel), 545)) : n.createCommentVNode("", !0), n.unref(i).actionRow.showSelect ? (n.openBlock(), n.createElementBlock("button", {
            key: 2,
            type: "button",
            "class": "dp__action_button dp__action_select",
            onKeydown: [n.withKeys(ne, ["enter"]), n.withKeys(ne, ["space"])],
            onClick: ne,
            disabled: D.value,
            ref_key: "selectButtonRef",
            ref: p
          }, n.toDisplayString(x.selectText), 41, Ti)) : n.createCommentVNode("", !0)], 64))])], 64))], 4);
        };
      }
    }),
    Mi = ["aria-label"],
    Pi = {
      "class": "dp__calendar_header",
      role: "row"
    },
    Ni = {
      key: 0,
      "class": "dp__calendar_header_item",
      role: "gridcell"
    },
    $i = n.createElementVNode("div", {
      "class": "dp__calendar_header_separator"
    }, null, -1),
    Si = ["aria-label"],
    _i = {
      key: 0,
      role: "gridcell",
      "class": "dp__calendar_item dp__week_num"
    },
    Oi = {
      "class": "dp__cell_inner"
    },
    Bi = ["aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"],
    Ai = n.defineComponent({
      __name: "Calendar",
      props: _objectSpread({
        mappedDates: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        getWeekNum: {
          type: Function,
          "default": function _default() {
            return "";
          }
        },
        specificMode: {
          type: Boolean,
          "default": !1
        },
        instance: {
          type: Number,
          "default": 0
        },
        month: {
          type: Number,
          "default": 0
        },
        year: {
          type: Number,
          "default": 0
        }
      }, it),
      emits: ["select-date", "set-hover-date", "handle-scroll", "mount", "handle-swipe", "handle-space", "tooltip-open", "tooltip-close"],
      setup: function setup(t, _ref10) {
        var a = _ref10.expose,
          r = _ref10.emit;
        var e = t,
          _lt2 = lt(),
          o = _lt2.buildMultiLevelMatrix,
          _We6 = We(e),
          i = _We6.setDateMonthOrYear,
          l = _We6.defaults,
          u = n.ref(null),
          p = n.ref({
            bottom: "",
            left: "",
            transform: ""
          }),
          y = n.ref([]),
          D = n.ref(null),
          k = n.ref(!0),
          f = n.ref(""),
          v = n.ref({
            startX: 0,
            endX: 0,
            startY: 0,
            endY: 0
          }),
          I = n.ref([]),
          Y = n.ref({
            left: "50%"
          }),
          R = n.computed(function () {
            return e.calendar ? e.calendar(e.mappedDates) : e.mappedDates;
          }),
          A = n.computed(function () {
            return e.dayNames ? Array.isArray(e.dayNames) ? e.dayNames : e.dayNames(e.locale, +e.weekStart) : Xl(e.formatLocale, e.locale, +e.weekStart);
          });
        n.onMounted(function () {
          r("mount", {
            cmp: "calendar",
            refs: y
          }), e.noSwipe || D.value && (D.value.addEventListener("touchstart", C, {
            passive: !1
          }), D.value.addEventListener("touchend", w, {
            passive: !1
          }), D.value.addEventListener("touchmove", B, {
            passive: !1
          })), e.monthChangeOnScroll && D.value && D.value.addEventListener("wheel", P, {
            passive: !1
          });
        });
        var U = function U(b) {
            return b ? e.vertical ? "vNext" : "next" : e.vertical ? "vPrevious" : "previous";
          },
          J = function J(b, g) {
            if (e.transitions) {
              var h = Le(i(O(), e.month, e.year));
              f.value = Re(Le(i(O(), b, g)), h) ? l.value.transitions[U(!0)] : l.value.transitions[U(!1)], k.value = !1, n.nextTick(function () {
                k.value = !0;
              });
            }
          },
          ne = n.computed(function () {
            return _defineProperty({}, e.calendarClassName, !!e.calendarClassName);
          }),
          x = n.computed(function () {
            return function (b) {
              var g = ti(b);
              return {
                dp__marker_dot: g.type === "dot",
                dp__marker_line: g.type === "line"
              };
            };
          }),
          W = n.computed(function () {
            return function (b) {
              return ve(b, u.value);
            };
          }),
          q = n.computed(function () {
            return {
              dp__calendar: !0,
              dp__calendar_next: l.value.multiCalendars > 0 && e.instance !== 0
            };
          }),
          X = n.computed(function () {
            return function (b) {
              return e.hideOffsetDates ? b.current : !0;
            };
          }),
          re = n.computed(function () {
            return e.specificMode ? {
              height: "".concat(e.modeHeight, "px")
            } : void 0;
          }),
          ue = /*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(b, g, h) {
              var _, M, G, _G$getBoundingClientR, c, d, s, $, _I$value$0$getBoundin, z, L;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(r("set-hover-date", b), (M = (_ = b.marker) == null ? void 0 : _.tooltip) != null && M.length)) {
                      _context2.next = 12;
                      break;
                    }
                    G = Ne(y.value[g][h]);
                    if (!G) {
                      _context2.next = 12;
                      break;
                    }
                    _G$getBoundingClientR = G.getBoundingClientRect(), c = _G$getBoundingClientR.width, d = _G$getBoundingClientR.height;
                    u.value = b.value;
                    s = {
                      left: "".concat(c / 2, "px")
                    }, $ = -50;
                    _context2.next = 8;
                    return n.nextTick();
                  case 8:
                    if (!I.value[0]) {
                      _context2.next = 11;
                      break;
                    }
                    _I$value$0$getBoundin = I.value[0].getBoundingClientRect(), z = _I$value$0$getBoundin.left, L = _I$value$0$getBoundin.width;
                    z < 0 && (s = {
                      left: "0"
                    }, $ = 0, Y.value.left = "".concat(c / 2, "px")), window.innerWidth < z + L && (s = {
                      right: "0"
                    }, $ = 0, Y.value.left = "".concat(L - c / 2, "px"));
                  case 11:
                    p.value = _objectSpread(_objectSpread({
                      bottom: "".concat(d, "px")
                    }, s), {}, {
                      transform: "translateX(".concat($, "%)")
                    }), r("tooltip-open", b.marker);
                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function ue(_x2, _x3, _x4) {
              return _ref12.apply(this, arguments);
            };
          }(),
          E = function E(b) {
            u.value && (u.value = null, p.value = JSON.parse(JSON.stringify({
              bottom: "",
              left: "",
              transform: ""
            })), r("tooltip-close", b.marker));
          },
          C = function C(b) {
            v.value.startX = b.changedTouches[0].screenX, v.value.startY = b.changedTouches[0].screenY;
          },
          w = function w(b) {
            v.value.endX = b.changedTouches[0].screenX, v.value.endY = b.changedTouches[0].screenY, S();
          },
          B = function B(b) {
            e.vertical && !e.inline && b.preventDefault();
          },
          S = function S() {
            var b = e.vertical ? "Y" : "X";
            Math.abs(v.value["start".concat(b)] - v.value["end".concat(b)]) > 10 && r("handle-swipe", v.value["start".concat(b)] > v.value["end".concat(b)] ? "right" : "left");
          },
          V = function V(b, g, h) {
            b && (Array.isArray(y.value[g]) ? y.value[g][h] = b : y.value[g] = [b]), e.arrowNavigation && o(y.value, "calendar");
          },
          P = function P(b) {
            e.monthChangeOnScroll && (b.preventDefault(), r("handle-scroll", b));
          };
        return a({
          triggerTransition: J
        }), function (b, g) {
          var h;
          return n.openBlock(), n.createElementBlock("div", {
            "class": n.normalizeClass(q.value)
          }, [n.createElementVNode("div", {
            style: n.normalizeStyle(re.value),
            ref_key: "calendarWrapRef",
            ref: D,
            role: "grid",
            "class": n.normalizeClass(ne.value),
            "aria-label": (h = n.unref(l).ariaLabels) == null ? void 0 : h.calendarWrap
          }, [t.specificMode ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
            key: 0
          }, [n.createElementVNode("div", Pi, [b.weekNumbers ? (n.openBlock(), n.createElementBlock("div", Ni, n.toDisplayString(b.weekNumName), 1)) : n.createCommentVNode("", !0), (n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(A.value, function (_, M) {
            return n.openBlock(), n.createElementBlock("div", {
              "class": "dp__calendar_header_item",
              role: "gridcell",
              key: M
            }, [b.$slots["calendar-header"] ? n.renderSlot(b.$slots, "calendar-header", {
              key: 0,
              day: _,
              index: M
            }) : n.createCommentVNode("", !0), b.$slots["calendar-header"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
              key: 1
            }, [n.createTextVNode(n.toDisplayString(_), 1)], 64))]);
          }), 128))]), $i, n.createVNode(n.Transition, {
            name: f.value,
            css: !!b.transitions
          }, {
            "default": n.withCtx(function () {
              var _;
              return [k.value ? (n.openBlock(), n.createElementBlock("div", {
                key: 0,
                "class": "dp__calendar",
                role: "grid",
                "aria-label": (_ = n.unref(l).ariaLabels) == null ? void 0 : _.calendarDays
              }, [(n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(R.value, function (M, G) {
                return n.openBlock(), n.createElementBlock("div", {
                  "class": "dp__calendar_row",
                  role: "row",
                  key: G
                }, [b.weekNumbers ? (n.openBlock(), n.createElementBlock("div", _i, [n.createElementVNode("div", Oi, n.toDisplayString(t.getWeekNum(M.days)), 1)])) : n.createCommentVNode("", !0), (n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(M.days, function (c, d) {
                  var s, $, z;
                  return n.openBlock(), n.createElementBlock("div", {
                    role: "gridcell",
                    "class": "dp__calendar_item",
                    ref_for: !0,
                    ref: function ref(L) {
                      return V(L, G, d);
                    },
                    key: d + G,
                    "aria-selected": c.classData.dp__active_date || c.classData.dp__range_start || c.classData.dp__range_start,
                    "aria-disabled": c.classData.dp__cell_disabled,
                    "aria-label": ($ = (s = n.unref(l).ariaLabels) == null ? void 0 : s.day) == null ? void 0 : $.call(s, c),
                    tabindex: "0",
                    onClick: n.withModifiers(function (L) {
                      return b.$emit("select-date", c);
                    }, ["stop", "prevent"]),
                    onKeydown: [n.withKeys(function (L) {
                      return b.$emit("select-date", c);
                    }, ["enter"]), n.withKeys(function (L) {
                      return b.$emit("handle-space", c);
                    }, ["space"])],
                    onMouseenter: function onMouseenter(L) {
                      return ue(c, G, d);
                    },
                    onMouseleave: function onMouseleave(L) {
                      return E(c);
                    }
                  }, [n.createElementVNode("div", {
                    "class": n.normalizeClass(["dp__cell_inner", c.classData])
                  }, [b.$slots.day && X.value(c) ? n.renderSlot(b.$slots, "day", {
                    key: 0,
                    day: +c.text,
                    date: c.value
                  }) : n.createCommentVNode("", !0), b.$slots.day ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
                    key: 1
                  }, [n.createTextVNode(n.toDisplayString(c.text), 1)], 64)), c.marker && X.value(c) ? (n.openBlock(), n.createElementBlock(n.Fragment, {
                    key: 2
                  }, [b.$slots.marker ? n.renderSlot(b.$slots, "marker", {
                    key: 0,
                    marker: c.marker,
                    day: +c.text,
                    date: c.value
                  }) : (n.openBlock(), n.createElementBlock("div", {
                    key: 1,
                    "class": n.normalizeClass(x.value(c.marker)),
                    style: n.normalizeStyle(c.marker.color ? {
                      backgroundColor: c.marker.color
                    } : {})
                  }, null, 6))], 64)) : n.createCommentVNode("", !0), W.value(c.value) ? (n.openBlock(), n.createElementBlock("div", {
                    key: 3,
                    "class": "dp__marker_tooltip",
                    ref_for: !0,
                    ref_key: "activeTooltip",
                    ref: I,
                    style: n.normalizeStyle(p.value)
                  }, [(z = c.marker) != null && z.tooltip ? (n.openBlock(), n.createElementBlock("div", {
                    key: 0,
                    "class": "dp__tooltip_content",
                    onClick: g[0] || (g[0] = n.withModifiers(function () {}, ["stop"]))
                  }, [(n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(c.marker.tooltip, function (L, ye) {
                    return n.openBlock(), n.createElementBlock("div", {
                      key: ye,
                      "class": "dp__tooltip_text"
                    }, [b.$slots["marker-tooltip"] ? n.renderSlot(b.$slots, "marker-tooltip", {
                      key: 0,
                      tooltip: L,
                      day: c.value
                    }) : n.createCommentVNode("", !0), b.$slots["marker-tooltip"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
                      key: 1
                    }, [n.createElementVNode("div", {
                      "class": "dp__tooltip_mark",
                      style: n.normalizeStyle(L.color ? {
                        backgroundColor: L.color
                      } : {})
                    }, null, 4), n.createElementVNode("div", null, n.toDisplayString(L.text), 1)], 64))]);
                  }), 128)), n.createElementVNode("div", {
                    "class": "dp__arrow_bottom_tp",
                    style: n.normalizeStyle(Y.value)
                  }, null, 4)])) : n.createCommentVNode("", !0)], 4)) : n.createCommentVNode("", !0)], 2)], 40, Bi);
                }), 128))]);
              }), 128))], 8, Si)) : n.createCommentVNode("", !0)];
            }),
            _: 3
          }, 8, ["name", "css"])], 64))], 14, Mi)], 2);
        };
      }
    }),
    Ei = ["aria-label", "aria-disabled"],
    Nn = n.defineComponent({
      __name: "ActionIcon",
      props: {
        ariaLabel: {},
        disabled: {
          type: Boolean
        }
      },
      emits: ["activate", "set-ref"],
      setup: function setup(t, _ref13) {
        var a = _ref13.emit;
        var r = n.ref(null);
        return n.onMounted(function () {
          return a("set-ref", r);
        }), function (e, o) {
          return n.openBlock(), n.createElementBlock("button", {
            type: "button",
            "class": "dp__btn dp__month_year_col_nav",
            onClick: o[0] || (o[0] = function (i) {
              return e.$emit("activate");
            }),
            onKeydown: [o[1] || (o[1] = n.withKeys(n.withModifiers(function (i) {
              return e.$emit("activate");
            }, ["prevent"]), ["enter"])), o[2] || (o[2] = n.withKeys(n.withModifiers(function (i) {
              return e.$emit("activate");
            }, ["prevent"]), ["space"]))],
            tabindex: "0",
            "aria-label": e.ariaLabel,
            "aria-disabled": e.disabled,
            ref_key: "elRef",
            ref: r
          }, [n.createElementVNode("span", {
            "class": n.normalizeClass(["dp__inner_nav", {
              dp__inner_nav_disabled: e.disabled
            }])
          }, [n.renderSlot(e.$slots, "default")], 2)], 40, Ei);
        };
      }
    }),
    xi = ["onKeydown"],
    Vi = {
      "class": "dp__selection_grid_header"
    },
    Yi = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"],
    Ri = ["aria-label", "onKeydown"],
    At = n.defineComponent({
      __name: "SelectionGrid",
      props: {
        items: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        modelValue: {
          type: [String, Number],
          "default": null
        },
        multiModelValue: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        disabledValues: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        minValue: {
          type: [Number, String],
          "default": null
        },
        maxValue: {
          type: [Number, String],
          "default": null
        },
        year: {
          type: Number,
          "default": 0
        },
        skipActive: {
          type: Boolean,
          "default": !1
        },
        headerRefs: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        skipButtonRef: {
          type: Boolean,
          "default": !1
        },
        monthPicker: {
          type: Boolean,
          "default": !1
        },
        yearPicker: {
          type: Boolean,
          "default": !1
        },
        escClose: {
          type: Boolean,
          "default": !0
        },
        type: {
          type: String,
          "default": null
        },
        arrowNavigation: {
          type: Boolean,
          "default": !1
        },
        autoApply: {
          type: Boolean,
          "default": !1
        },
        textInput: {
          type: Boolean,
          "default": !1
        },
        ariaLabels: {
          type: Object,
          "default": function _default() {
            return {};
          }
        },
        hideNavigation: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        internalModelValue: {
          type: [Date, Array],
          "default": null
        },
        autoApplyMonth: {
          type: Boolean,
          "default": !1
        }
      },
      emits: ["update:model-value", "selected", "toggle", "reset-flow"],
      setup: function setup(t, _ref14) {
        var a = _ref14.expose,
          r = _ref14.emit;
        var e = t,
          _lt3 = lt(),
          o = _lt3.setSelectionGrid,
          i = _lt3.buildMultiLevelMatrix,
          l = _lt3.setMonthPicker,
          _We7 = We(e),
          u = _We7.hideNavigationButtons,
          p = n.ref(!1),
          y = n.ref(null),
          D = n.ref(null),
          k = n.ref([]),
          f = n.ref(),
          v = n.ref(null),
          I = n.ref(0),
          Y = n.ref(null);
        n.onBeforeUpdate(function () {
          y.value = null;
        }), n.onMounted(function () {
          var P;
          n.nextTick().then(function () {
            return re();
          }), A(), R(!0), (P = y.value) == null || P.focus({
            preventScroll: !0
          });
        }), n.onUnmounted(function () {
          return R(!1);
        });
        var R = function R(P) {
            var b;
            e.arrowNavigation && ((b = e.headerRefs) != null && b.length ? l(P) : o(P));
          },
          A = function A() {
            var P = Ne(D);
            P && (e.textInput || P.focus({
              preventScroll: !0
            }), p.value = P.clientHeight < P.scrollHeight);
          },
          U = n.computed(function () {
            return {
              dp__overlay: !0
            };
          }),
          J = n.computed(function () {
            return {
              dp__overlay_col: !0
            };
          }),
          ne = function ne(P) {
            return e.monthPicker && !e.autoApplyMonth ? ve(e.internalModelValue, tt(kt(new Date(), P.value), e.year)) : e.skipActive ? !1 : P.value === e.modelValue;
          },
          x = n.computed(function () {
            return e.items.map(function (P) {
              return P.filter(function (b) {
                return b;
              }).map(function (b) {
                var _, M, G;
                var g = e.disabledValues.some(function (c) {
                    return c === b.value;
                  }) || X(b.value),
                  h = (_ = e.multiModelValue) != null && _.length ? (M = e.multiModelValue) == null ? void 0 : M.some(function (c) {
                    return ve(c, tt(e.monthPicker ? kt(new Date(), b.value) : new Date(), e.monthPicker ? e.year : b.value));
                  }) : ne(b);
                return _objectSpread(_objectSpread({}, b), {}, {
                  className: {
                    dp__overlay_cell_active: h,
                    dp__overlay_cell: !h,
                    dp__overlay_cell_disabled: g,
                    dp__overlay_cell_active_disabled: g && h,
                    dp__overlay_cell_pad: !0,
                    dp__cell_in_between: (G = e.multiModelValue) != null && G.length && e.skipActive ? E(b.value) : !1
                  }
                });
              });
            });
          }),
          W = n.computed(function () {
            return {
              dp__button: !0,
              dp__overlay_action: !0,
              dp__over_action_scroll: p.value,
              dp__button_bottom: e.autoApply
            };
          }),
          q = n.computed(function () {
            var P, b;
            return {
              dp__overlay_container: !0,
              dp__container_flex: ((P = e.items) == null ? void 0 : P.length) <= 6,
              dp__container_block: ((b = e.items) == null ? void 0 : b.length) > 6
            };
          }),
          X = function X(P) {
            var b = e.maxValue || e.maxValue === 0,
              g = e.minValue || e.minValue === 0;
            return !b && !g ? !1 : b && g ? +P > +e.maxValue || +P < +e.minValue : b ? +P > +e.maxValue : g ? +P < +e.minValue : !1;
          },
          re = function re() {
            var P = Ne(y),
              b = Ne(D),
              g = Ne(v),
              h = Ne(Y),
              _ = g ? g.getBoundingClientRect().height : 0;
            b && (I.value = b.getBoundingClientRect().height - _), P && h && (h.scrollTop = P.offsetTop - h.offsetTop - (I.value / 2 - P.getBoundingClientRect().height) - _);
          },
          ue = function ue(P) {
            !e.disabledValues.some(function (b) {
              return b === P;
            }) && !X(P) && (r("update:model-value", P), r("selected"));
          },
          E = function E(P) {
            var b = e.monthPicker ? e.year : P;
            return yr(e.multiModelValue, tt(e.monthPicker ? kt(new Date(), f.value || 0) : new Date(), e.monthPicker ? b : f.value || b), tt(e.monthPicker ? kt(new Date(), P) : new Date(), b));
          },
          C = function C() {
            r("toggle"), r("reset-flow");
          },
          w = function w() {
            e.escClose && C();
          },
          B = function B(P, b, g, h) {
            P && (b.value === +e.modelValue && !e.disabledValues.includes(b.value) && (y.value = P), e.arrowNavigation && (Array.isArray(k.value[g]) ? k.value[g][h] = P : k.value[g] = [P], S()));
          },
          S = function S() {
            var b, g;
            var P = (b = e.headerRefs) != null && b.length ? [e.headerRefs].concat(k.value) : k.value.concat([e.skipButtonRef ? [] : [v.value]]);
            i(Ee(P), (g = e.headerRefs) != null && g.length ? "monthPicker" : "selectionGrid");
          },
          V = function V(P) {
            e.arrowNavigation || P.stopImmediatePropagation();
          };
        return a({
          focusGrid: A
        }), function (P, b) {
          var g;
          return n.openBlock(), n.createElementBlock("div", {
            ref_key: "gridWrapRef",
            ref: D,
            "class": n.normalizeClass(U.value),
            role: "dialog",
            tabindex: "0",
            onKeydown: [n.withKeys(w, ["esc"]), b[0] || (b[0] = n.withKeys(function (h) {
              return V(h);
            }, ["left"])), b[1] || (b[1] = n.withKeys(function (h) {
              return V(h);
            }, ["up"])), b[2] || (b[2] = n.withKeys(function (h) {
              return V(h);
            }, ["down"])), b[3] || (b[3] = n.withKeys(function (h) {
              return V(h);
            }, ["right"]))]
          }, [n.createElementVNode("div", {
            "class": n.normalizeClass(q.value),
            ref_key: "containerRef",
            ref: Y,
            role: "grid",
            style: n.normalizeStyle({
              height: "".concat(I.value, "px")
            })
          }, [n.createElementVNode("div", Vi, [n.renderSlot(P.$slots, "header")]), P.$slots.overlay ? n.renderSlot(P.$slots, "overlay", {
            key: 0
          }) : (n.openBlock(!0), n.createElementBlock(n.Fragment, {
            key: 1
          }, n.renderList(x.value, function (h, _) {
            return n.openBlock(), n.createElementBlock("div", {
              "class": n.normalizeClass(["dp__overlay_row", {
                dp__flex_row: x.value.length >= 3
              }]),
              key: _,
              role: "row"
            }, [(n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(h, function (M, G) {
              return n.openBlock(), n.createElementBlock("div", {
                role: "gridcell",
                "class": n.normalizeClass(J.value),
                key: M.value,
                "aria-selected": M.value === t.modelValue && !t.disabledValues.includes(M.value),
                "aria-disabled": M.className.dp__overlay_cell_disabled,
                ref_for: !0,
                ref: function ref(c) {
                  return B(c, M, _, G);
                },
                tabindex: "0",
                onClick: function onClick(c) {
                  return ue(M.value);
                },
                onKeydown: [n.withKeys(function (c) {
                  return ue(M.value);
                }, ["enter"]), n.withKeys(function (c) {
                  return ue(M.value);
                }, ["space"])],
                onMouseover: function onMouseover(c) {
                  return f.value = M.value;
                }
              }, [n.createElementVNode("div", {
                "class": n.normalizeClass(M.className)
              }, [P.$slots.item ? n.renderSlot(P.$slots, "item", {
                key: 0,
                item: M
              }) : n.createCommentVNode("", !0), P.$slots.item ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
                key: 1
              }, [n.createTextVNode(n.toDisplayString(M.text), 1)], 64))], 2)], 42, Yi);
            }), 128))], 2);
          }), 128))], 6), P.$slots["button-icon"] ? n.withDirectives((n.openBlock(), n.createElementBlock("div", {
            key: 0,
            role: "button",
            "aria-label": (g = t.ariaLabels) == null ? void 0 : g.toggleOverlay,
            "class": n.normalizeClass(W.value),
            tabindex: "0",
            ref_key: "toggleButton",
            ref: v,
            onClick: C,
            onKeydown: [n.withKeys(C, ["enter"]), n.withKeys(C, ["tab"])]
          }, [n.renderSlot(P.$slots, "button-icon")], 42, Ri)), [[n.vShow, !n.unref(u)(t.type)]]) : n.createCommentVNode("", !0)], 42, xi);
        };
      }
    }),
    Ii = ["aria-label"],
    xr = n.defineComponent({
      __name: "RegularPicker",
      props: {
        ariaLabel: {
          type: String,
          "default": ""
        },
        showSelectionGrid: {
          type: Boolean,
          "default": !1
        },
        modelValue: {
          type: Number,
          "default": null
        },
        items: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        disabledValues: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        minValue: {
          type: Number,
          "default": null
        },
        maxValue: {
          type: Number,
          "default": null
        },
        slotName: {
          type: String,
          "default": ""
        },
        overlaySlot: {
          type: String,
          "default": ""
        },
        headerRefs: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        escClose: {
          type: Boolean,
          "default": !0
        },
        type: {
          type: String,
          "default": null
        },
        transitions: {
          type: [Object, Boolean],
          "default": !1
        },
        arrowNavigation: {
          type: Boolean,
          "default": !1
        },
        autoApply: {
          type: Boolean,
          "default": !1
        },
        textInput: {
          type: Boolean,
          "default": !1
        },
        ariaLabels: {
          type: Object,
          "default": function _default() {
            return {};
          }
        },
        hideNavigation: {
          type: Array,
          "default": function _default() {
            return [];
          }
        }
      },
      emits: ["update:model-value", "toggle", "set-ref"],
      setup: function setup(t, _ref15) {
        var a = _ref15.emit;
        var r = t,
          _qt = qt(r.transitions),
          e = _qt.transitionName,
          o = _qt.showTransition,
          i = n.ref(null);
        return n.onMounted(function () {
          return a("set-ref", i);
        }), function (l, u) {
          return n.openBlock(), n.createElementBlock(n.Fragment, null, [n.createElementVNode("button", {
            type: "button",
            "class": "dp__btn dp__month_year_select",
            onClick: u[0] || (u[0] = function (p) {
              return l.$emit("toggle");
            }),
            onKeydown: [u[1] || (u[1] = n.withKeys(n.withModifiers(function (p) {
              return l.$emit("toggle");
            }, ["prevent"]), ["enter"])), u[2] || (u[2] = n.withKeys(n.withModifiers(function (p) {
              return l.$emit("toggle");
            }, ["prevent"]), ["space"]))],
            "aria-label": t.ariaLabel,
            tabindex: "0",
            ref_key: "elRef",
            ref: i
          }, [n.renderSlot(l.$slots, "default")], 40, Ii), n.createVNode(n.Transition, {
            name: n.unref(e)(t.showSelectionGrid),
            css: n.unref(o)
          }, {
            "default": n.withCtx(function () {
              return [t.showSelectionGrid ? (n.openBlock(), n.createBlock(At, n.mergeProps({
                key: 0
              }, {
                modelValue: t.modelValue,
                items: t.items,
                disabledValues: t.disabledValues,
                minValue: t.minValue,
                maxValue: t.maxValue,
                escClose: t.escClose,
                type: t.type,
                arrowNavigation: t.arrowNavigation,
                textInput: t.textInput,
                autoApply: t.autoApply,
                ariaLabels: t.ariaLabels,
                hideNavigation: t.hideNavigation
              }, {
                "header-refs": [],
                "onUpdate:modelValue": u[3] || (u[3] = function (p) {
                  return l.$emit("update:model-value", p);
                }),
                onToggle: u[4] || (u[4] = function (p) {
                  return l.$emit("toggle");
                })
              }), n.createSlots({
                "button-icon": n.withCtx(function () {
                  return [l.$slots["calendar-icon"] ? n.renderSlot(l.$slots, "calendar-icon", {
                    key: 0
                  }) : n.createCommentVNode("", !0), l.$slots["calendar-icon"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(Vt), {
                    key: 1
                  }))];
                }),
                _: 2
              }, [l.$slots[t.slotName] ? {
                name: "item",
                fn: n.withCtx(function (_ref16) {
                  var p = _ref16.item;
                  return [n.renderSlot(l.$slots, t.slotName, {
                    item: p
                  })];
                }),
                key: "0"
              } : void 0, l.$slots[t.overlaySlot] ? {
                name: "overlay",
                fn: n.withCtx(function () {
                  return [n.renderSlot(l.$slots, t.overlaySlot)];
                }),
                key: "1"
              } : void 0, l.$slots["".concat(t.overlaySlot, "-header")] ? {
                name: "header",
                fn: n.withCtx(function () {
                  return [n.renderSlot(l.$slots, "".concat(t.overlaySlot, "-header"))];
                }),
                key: "2"
              } : void 0]), 1040)) : n.createCommentVNode("", !0)];
            }),
            _: 3
          }, 8, ["name", "css"])], 64);
        };
      }
    }),
    Ui = {
      "class": "dp__month_year_row"
    },
    Wi = {
      "class": "dp__month_picker_header"
    },
    Fi = ["aria-label"],
    Li = ["aria-label"],
    Hi = ["aria-label"],
    zi = n.defineComponent({
      __name: "MonthYearPicker",
      props: _objectSpread({
        month: {
          type: Number,
          "default": 0
        },
        year: {
          type: Number,
          "default": 0
        },
        instance: {
          type: Number,
          "default": 0
        },
        years: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        months: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        internalModelValue: {
          type: [Date, Array],
          "default": null
        }
      }, it),
      emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
      setup: function setup(t, _ref17) {
        var a = _ref17.expose,
          r = _ref17.emit;
        var e = t,
          _We8 = We(e),
          o = _We8.defaults,
          _qt2 = qt(o.value.transitions),
          i = _qt2.transitionName,
          l = _qt2.showTransition,
          _lt4 = lt(),
          u = _lt4.buildMatrix,
          _mi = mi(e, r),
          p = _mi.handleMonthYearChange,
          y = _mi.isDisabled,
          D = _mi.updateMonthYear,
          k = n.ref(!1),
          f = n.ref(!1),
          v = n.ref([null, null, null, null]),
          I = n.ref(null),
          Y = n.ref(null),
          R = n.ref(null);
        n.onMounted(function () {
          r("mount");
        });
        var A = function A(d) {
            return {
              get: function get() {
                return e[d];
              },
              set: function set(s) {
                var _r2;
                var $ = d === "month" ? "year" : "month";
                r("update-month-year", (_r2 = {}, _defineProperty(_r2, d, s), _defineProperty(_r2, $, e[$]), _r2)), r("month-year-select", d === "year"), d === "month" ? h(!0) : _(!0);
              }
            };
          },
          U = n.computed(A("month")),
          J = n.computed(A("year")),
          ne = function ne(d) {
            var s = be(O(d));
            return e.year === s;
          },
          x = n.computed(function () {
            return e.monthPicker ? Array.isArray(e.disabledDates) ? e.disabledDates.map(function (d) {
              return O(d);
            }).filter(function (d) {
              return ne(d);
            }).map(function (d) {
              return ke(d);
            }) : [] : [];
          }),
          W = n.computed(function () {
            return function (d) {
              var s = d === "month";
              return {
                showSelectionGrid: (s ? k : f).value,
                items: (s ? S : V).value,
                disabledValues: o.value.filters[s ? "months" : "years"].concat(x.value),
                minValue: (s ? ue : X).value,
                maxValue: (s ? E : re).value,
                headerRefs: s && e.monthPicker ? [I.value, Y.value, R.value] : [],
                escClose: e.escClose,
                transitions: o.value.transitions,
                ariaLabels: o.value.ariaLabels,
                textInput: e.textInput,
                autoApply: e.autoApply,
                arrowNavigation: e.arrowNavigation,
                hideNavigation: e.hideNavigation
              };
            };
          }),
          q = n.computed(function () {
            return function (d) {
              return {
                month: e.month,
                year: e.year,
                items: d === "month" ? e.months : e.years,
                instance: e.instance,
                updateMonthYear: D,
                toggle: d === "month" ? h : _
              };
            };
          }),
          X = n.computed(function () {
            return e.minDate ? be(O(e.minDate)) : null;
          }),
          re = n.computed(function () {
            return e.maxDate ? be(O(e.maxDate)) : null;
          }),
          ue = n.computed(function () {
            if (e.minDate && X.value) {
              if (X.value > e.year) return 12;
              if (X.value === e.year) return ke(O(e.minDate));
            }
            return null;
          }),
          E = n.computed(function () {
            return e.maxDate && re.value ? re.value < e.year ? -1 : re.value === e.year ? ke(O(e.maxDate)) : null : null;
          }),
          C = n.computed(function () {
            return (e.range || e.multiDates) && e.internalModelValue && (e.monthPicker || e.yearPicker) ? e.internalModelValue : [];
          }),
          w = function w(d) {
            var s = [],
              $ = function $(z) {
                return z;
              };
            for (var z = 0; z < d.length; z += 3) {
              var L = [d[z], d[z + 1], d[z + 2]];
              s.push($(L));
            }
            return s;
          },
          B = n.computed(function () {
            var d = e.months.find(function (s) {
              return s.value === e.month;
            });
            return d || {
              text: "",
              value: 0
            };
          }),
          S = n.computed(function () {
            return w(e.months);
          }),
          V = n.computed(function () {
            return w(e.years);
          }),
          P = n.computed(function () {
            return o.value.multiCalendars ? e.multiCalendarsSolo ? !0 : e.instance === 0 : !0;
          }),
          b = n.computed(function () {
            return o.value.multiCalendars ? e.multiCalendarsSolo ? !0 : e.instance === o.value.multiCalendars - 1 : !0;
          }),
          g = function g(d, s) {
            s !== void 0 ? d.value = s : d.value = !d.value;
          },
          h = function h() {
            var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var s = arguments.length > 1 ? arguments[1] : undefined;
            M(d), g(k, s), k.value || r("overlay-closed");
          },
          _ = function _() {
            var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var s = arguments.length > 1 ? arguments[1] : undefined;
            M(d), g(f, s), f.value || r("overlay-closed");
          },
          M = function M(d) {
            d || r("reset-flow");
          },
          G = function G() {
            var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            y.value(d) || r("update-month-year", {
              year: d ? e.year + 1 : e.year - 1,
              month: e.month,
              fromNav: !0
            });
          },
          c = function c(d, s) {
            e.arrowNavigation && (v.value[s] = Ne(d), u(v.value, "monthYear"));
          };
        return a({
          toggleMonthPicker: h,
          toggleYearPicker: _,
          handleMonthYearChange: p
        }), function (d, s) {
          var $, z, L, ye, Te;
          return n.openBlock(), n.createElementBlock("div", Ui, [d.$slots["month-year"] ? n.renderSlot(d.$slots, "month-year", n.normalizeProps(n.mergeProps({
            key: 0
          }, {
            month: t.month,
            year: t.year,
            months: t.months,
            years: t.years,
            updateMonthYear: n.unref(D),
            handleMonthYearChange: n.unref(p),
            instance: t.instance
          }))) : (n.openBlock(), n.createElementBlock(n.Fragment, {
            key: 1
          }, [!d.monthPicker && !d.yearPicker ? (n.openBlock(), n.createElementBlock(n.Fragment, {
            key: 0
          }, [P.value && !d.vertical ? (n.openBlock(), n.createBlock(Nn, {
            key: 0,
            "aria-label": ($ = n.unref(o).ariaLabels) == null ? void 0 : $.prevMonth,
            disabled: n.unref(y)(!1),
            onActivate: s[0] || (s[0] = function (te) {
              return n.unref(p)(!1);
            }),
            onSetRef: s[1] || (s[1] = function (te) {
              return c(te, 0);
            })
          }, {
            "default": n.withCtx(function () {
              return [d.$slots["arrow-left"] ? n.renderSlot(d.$slots, "arrow-left", {
                key: 0
              }) : n.createCommentVNode("", !0), d.$slots["arrow-left"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(xn), {
                key: 1
              }))];
            }),
            _: 3
          }, 8, ["aria-label", "disabled"])) : n.createCommentVNode("", !0), n.createElementVNode("div", {
            "class": n.normalizeClass(["dp__month_year_wrap", {
              dp__year_disable_select: e.disableYearSelect
            }])
          }, [n.createVNode(xr, n.mergeProps({
            type: "month",
            "slot-name": "month-overlay-val",
            "overlay-slot": "overlay-month",
            "aria-label": (z = n.unref(o).ariaLabels) == null ? void 0 : z.openMonthsOverlay,
            modelValue: U.value,
            "onUpdate:modelValue": s[2] || (s[2] = function (te) {
              return U.value = te;
            })
          }, W.value("month"), {
            onToggle: h,
            onSetRef: s[3] || (s[3] = function (te) {
              return c(te, 1);
            })
          }), n.createSlots({
            "default": n.withCtx(function () {
              return [d.$slots.month ? n.renderSlot(d.$slots, "month", n.normalizeProps(n.mergeProps({
                key: 0
              }, B.value))) : n.createCommentVNode("", !0), d.$slots.month ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
                key: 1
              }, [n.createTextVNode(n.toDisplayString(B.value.text), 1)], 64))];
            }),
            _: 2
          }, [d.$slots["calendar-icon"] ? {
            name: "calendar-icon",
            fn: n.withCtx(function () {
              return [n.renderSlot(d.$slots, "calendar-icon")];
            }),
            key: "0"
          } : void 0, d.$slots["month-overlay-value"] ? {
            name: "month-overlay-val",
            fn: n.withCtx(function (_ref18) {
              var te = _ref18.item;
              return [n.renderSlot(d.$slots, "month-overlay-value", {
                text: te.text,
                value: te.value
              })];
            }),
            key: "1"
          } : void 0, d.$slots["month-overlay"] ? {
            name: "overlay-month",
            fn: n.withCtx(function () {
              return [n.renderSlot(d.$slots, "month-overlay", n.normalizeProps(n.guardReactiveProps(q.value("month"))))];
            }),
            key: "2"
          } : void 0, d.$slots["month-overlay-header"] ? {
            name: "overlay-month-header",
            fn: n.withCtx(function () {
              return [n.renderSlot(d.$slots, "month-overlay-header", {
                toggle: h
              })];
            }),
            key: "3"
          } : void 0]), 1040, ["aria-label", "modelValue"]), e.disableYearSelect ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(xr, n.mergeProps({
            key: 0,
            type: "year",
            "slot-name": "year-overlay-val",
            "overlay-slot": "overlay-year",
            "aria-label": (L = n.unref(o).ariaLabels) == null ? void 0 : L.openYearsOverlay,
            modelValue: J.value,
            "onUpdate:modelValue": s[4] || (s[4] = function (te) {
              return J.value = te;
            })
          }, W.value("year"), {
            onToggle: _,
            onSetRef: s[5] || (s[5] = function (te) {
              return c(te, 2);
            })
          }), n.createSlots({
            "default": n.withCtx(function () {
              return [d.$slots.year ? n.renderSlot(d.$slots, "year", {
                key: 0,
                year: t.year
              }) : n.createCommentVNode("", !0), d.$slots.year ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
                key: 1
              }, [n.createTextVNode(n.toDisplayString(t.year), 1)], 64))];
            }),
            _: 2
          }, [d.$slots["calendar-icon"] ? {
            name: "calendar-icon",
            fn: n.withCtx(function () {
              return [n.renderSlot(d.$slots, "calendar-icon")];
            }),
            key: "0"
          } : void 0, d.$slots["year-overlay-value"] ? {
            name: "year-overlay-val",
            fn: n.withCtx(function (_ref19) {
              var te = _ref19.item;
              return [n.renderSlot(d.$slots, "year-overlay-value", {
                text: te.text,
                value: te.value
              })];
            }),
            key: "1"
          } : void 0, d.$slots["year-overlay"] ? {
            name: "overlay-year",
            fn: n.withCtx(function () {
              return [n.renderSlot(d.$slots, "year-overlay", n.normalizeProps(n.guardReactiveProps(q.value("year"))))];
            }),
            key: "2"
          } : void 0, d.$slots["year-overlay-header"] ? {
            name: "overlay-year-header",
            fn: n.withCtx(function () {
              return [n.renderSlot(d.$slots, "year-overlay-header", {
                toggle: _
              })];
            }),
            key: "3"
          } : void 0]), 1040, ["aria-label", "modelValue"]))], 2), P.value && d.vertical ? (n.openBlock(), n.createBlock(Nn, {
            key: 1,
            "aria-label": (ye = n.unref(o).ariaLabels) == null ? void 0 : ye.prevMonth,
            disabled: n.unref(y)(!1),
            onActivate: s[6] || (s[6] = function (te) {
              return n.unref(p)(!1);
            })
          }, {
            "default": n.withCtx(function () {
              return [d.$slots["arrow-up"] ? n.renderSlot(d.$slots, "arrow-up", {
                key: 0
              }) : n.createCommentVNode("", !0), d.$slots["arrow-up"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(Rn), {
                key: 1
              }))];
            }),
            _: 3
          }, 8, ["aria-label", "disabled"])) : n.createCommentVNode("", !0), b.value ? (n.openBlock(), n.createBlock(Nn, {
            key: 2,
            ref: "rightIcon",
            disabled: n.unref(y)(!0),
            "aria-label": (Te = n.unref(o).ariaLabels) == null ? void 0 : Te.nextMonth,
            onActivate: s[7] || (s[7] = function (te) {
              return n.unref(p)(!0);
            }),
            onSetRef: s[8] || (s[8] = function (te) {
              return c(te, 3);
            })
          }, {
            "default": n.withCtx(function () {
              return [d.$slots[d.vertical ? "arrow-down" : "arrow-right"] ? n.renderSlot(d.$slots, d.vertical ? "arrow-down" : "arrow-right", {
                key: 0
              }) : n.createCommentVNode("", !0), d.$slots[d.vertical ? "arrow-down" : "arrow-right"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.resolveDynamicComponent(d.vertical ? n.unref(In) : n.unref(Vn)), {
                key: 1
              }))];
            }),
            _: 3
          }, 8, ["disabled", "aria-label"])) : n.createCommentVNode("", !0)], 64)) : n.createCommentVNode("", !0), d.monthPicker ? (n.openBlock(), n.createBlock(At, n.mergeProps({
            key: 1
          }, W.value("month"), {
            "skip-active": d.range,
            "internal-model-value": t.internalModelValue,
            year: t.year,
            "auto-apply-month": d.autoApplyMonth,
            "multi-model-value": C.value,
            "month-picker": "",
            modelValue: U.value,
            "onUpdate:modelValue": s[17] || (s[17] = function (te) {
              return U.value = te;
            }),
            onToggle: h,
            onSelected: s[18] || (s[18] = function (te) {
              return d.$emit("overlay-closed");
            })
          }), n.createSlots({
            header: n.withCtx(function () {
              var te, Ve, Be;
              return [n.createElementVNode("div", Wi, [n.createElementVNode("div", {
                "class": "dp__month_year_col_nav",
                tabindex: "0",
                ref_key: "mpPrevIconRef",
                ref: I,
                onClick: s[9] || (s[9] = function (Ce) {
                  return G(!1);
                }),
                onKeydown: s[10] || (s[10] = n.withKeys(function (Ce) {
                  return G(!1);
                }, ["enter"]))
              }, [n.createElementVNode("div", {
                "class": n.normalizeClass(["dp__inner_nav", {
                  dp__inner_nav_disabled: n.unref(y)(!1)
                }]),
                role: "button",
                "aria-label": (te = n.unref(o).ariaLabels) == null ? void 0 : te.prevMonth
              }, [d.$slots["arrow-left"] ? n.renderSlot(d.$slots, "arrow-left", {
                key: 0
              }) : n.createCommentVNode("", !0), d.$slots["arrow-left"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(xn), {
                key: 1
              }))], 10, Fi)], 544), n.createElementVNode("div", {
                "class": "dp__pointer",
                role: "button",
                ref_key: "mpYearButtonRef",
                ref: Y,
                "aria-label": (Ve = n.unref(o).ariaLabels) == null ? void 0 : Ve.openYearsOverlay,
                tabindex: "0",
                onClick: s[11] || (s[11] = function () {
                  return _(!1);
                }),
                onKeydown: s[12] || (s[12] = n.withKeys(function () {
                  return _(!1);
                }, ["enter"]))
              }, [d.$slots.year ? n.renderSlot(d.$slots, "year", {
                key: 0,
                year: t.year
              }) : n.createCommentVNode("", !0), d.$slots.year ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
                key: 1
              }, [n.createTextVNode(n.toDisplayString(t.year), 1)], 64))], 40, Li), n.createElementVNode("div", {
                "class": "dp__month_year_col_nav",
                tabindex: "0",
                ref_key: "mpNextIconRef",
                ref: R,
                onClick: s[13] || (s[13] = function (Ce) {
                  return G(!0);
                }),
                onKeydown: s[14] || (s[14] = n.withKeys(function (Ce) {
                  return G(!0);
                }, ["enter"]))
              }, [n.createElementVNode("div", {
                "class": n.normalizeClass(["dp__inner_nav", {
                  dp__inner_nav_disabled: n.unref(y)(!0)
                }]),
                role: "button",
                "aria-label": (Be = n.unref(o).ariaLabels) == null ? void 0 : Be.nextMonth
              }, [d.$slots["arrow-right"] ? n.renderSlot(d.$slots, "arrow-right", {
                key: 0
              }) : n.createCommentVNode("", !0), d.$slots["arrow-right"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(Vn), {
                key: 1
              }))], 10, Hi)], 544)]), n.createVNode(n.Transition, {
                name: n.unref(i)(f.value),
                css: n.unref(l)
              }, {
                "default": n.withCtx(function () {
                  return [f.value ? (n.openBlock(), n.createBlock(At, n.mergeProps({
                    key: 0
                  }, W.value("year"), {
                    modelValue: J.value,
                    "onUpdate:modelValue": s[15] || (s[15] = function (Ce) {
                      return J.value = Ce;
                    }),
                    onToggle: _,
                    onSelected: s[16] || (s[16] = function (Ce) {
                      return d.$emit("overlay-closed");
                    })
                  }), n.createSlots({
                    "button-icon": n.withCtx(function () {
                      return [d.$slots["calendar-icon"] ? n.renderSlot(d.$slots, "calendar-icon", {
                        key: 0
                      }) : n.createCommentVNode("", !0), d.$slots["calendar-icon"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(Vt), {
                        key: 1
                      }))];
                    }),
                    _: 2
                  }, [d.$slots["year-overlay-value"] ? {
                    name: "item",
                    fn: n.withCtx(function (_ref20) {
                      var Ce = _ref20.item;
                      return [n.renderSlot(d.$slots, "year-overlay-value", {
                        text: Ce.text,
                        value: Ce.value
                      })];
                    }),
                    key: "0"
                  } : void 0]), 1040, ["modelValue"])) : n.createCommentVNode("", !0)];
                }),
                _: 3
              }, 8, ["name", "css"])];
            }),
            _: 2
          }, [d.$slots["month-overlay-value"] ? {
            name: "item",
            fn: n.withCtx(function (_ref21) {
              var te = _ref21.item;
              return [n.renderSlot(d.$slots, "month-overlay-value", {
                text: te.text,
                value: te.value
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["skip-active", "internal-model-value", "year", "auto-apply-month", "multi-model-value", "modelValue"])) : n.createCommentVNode("", !0), d.yearPicker ? (n.openBlock(), n.createBlock(At, n.mergeProps({
            key: 2
          }, W.value("year"), {
            modelValue: J.value,
            "onUpdate:modelValue": s[19] || (s[19] = function (te) {
              return J.value = te;
            }),
            "multi-model-value": C.value,
            "skip-active": d.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: _,
            onSelected: s[20] || (s[20] = function (te) {
              return d.$emit("overlay-closed");
            })
          }), n.createSlots({
            _: 2
          }, [d.$slots["year-overlay-value"] ? {
            name: "item",
            fn: n.withCtx(function (_ref22) {
              var te = _ref22.item;
              return [n.renderSlot(d.$slots, "year-overlay-value", {
                text: te.text,
                value: te.value
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : n.createCommentVNode("", !0)], 64))]);
        };
      }
    }),
    Ki = {
      key: 0,
      "class": "dp__time_input"
    },
    qi = ["aria-label", "onKeydown", "onClick"],
    ji = n.createElementVNode("span", {
      "class": "dp__tp_inline_btn_bar dp__tp_btn_in_l"
    }, null, -1),
    Gi = n.createElementVNode("span", {
      "class": "dp__tp_inline_btn_bar dp__tp_btn_in_r"
    }, null, -1),
    Qi = ["aria-label", "onKeydown", "onClick"],
    Xi = ["aria-label", "onKeydown", "onClick"],
    Zi = n.createElementVNode("span", {
      "class": "dp__tp_inline_btn_bar dp__tp_btn_in_l"
    }, null, -1),
    Ji = n.createElementVNode("span", {
      "class": "dp__tp_inline_btn_bar dp__tp_btn_in_r"
    }, null, -1),
    es = {
      key: 0
    },
    ts = ["aria-label", "onKeydown"],
    ns = n.defineComponent({
      __name: "TimeInput",
      props: _objectSpread({
        hours: {
          type: Number,
          "default": 0
        },
        minutes: {
          type: Number,
          "default": 0
        },
        seconds: {
          type: Number,
          "default": 0
        },
        closeTimePickerBtn: {
          type: Object,
          "default": null
        },
        order: {
          type: Number,
          "default": 0
        }
      }, it),
      emits: ["set-hours", "set-minutes", "update:hours", "update:minutes", "update:seconds", "reset-flow", "mounted", "overlay-closed", "am-pm-change"],
      setup: function setup(t, _ref23) {
        var a = _ref23.expose,
          r = _ref23.emit;
        var e = t,
          _lt5 = lt(),
          o = _lt5.setTimePickerElements,
          i = _lt5.setTimePickerBackRef,
          _We9 = We(e),
          l = _We9.defaults,
          _qt3 = qt(l.value.transitions),
          u = _qt3.transitionName,
          p = _qt3.showTransition,
          y = n.reactive({
            hours: !1,
            minutes: !1,
            seconds: !1
          }),
          D = n.ref("AM"),
          k = n.ref(null),
          f = n.ref([]);
        n.onMounted(function () {
          r("mounted");
        });
        var v = function v(g) {
            return Ae(new Date(), {
              hours: g.hours,
              minutes: g.minutes,
              seconds: e.enableSeconds ? g.seconds : 0,
              milliseconds: 0
            });
          },
          I = n.computed(function () {
            return {
              hours: e.hours,
              minutes: e.minutes,
              seconds: e.seconds
            };
          }),
          Y = n.computed(function () {
            return function (g) {
              return !X(+e[g] + +e["".concat(g, "Increment")], g);
            };
          }),
          R = n.computed(function () {
            return function (g) {
              return !X(+e[g] - +e["".concat(g, "Increment")], g);
            };
          }),
          A = function A(g, h) {
            return Un(Ae(O(), g), h);
          },
          U = function U(g, h) {
            return vl(Ae(O(), g), h);
          },
          J = n.computed(function () {
            return {
              dp__time_col: !0,
              dp__time_col_block: !e.timePickerInline,
              dp__time_col_reg_block: !e.enableSeconds && e.is24 && !e.timePickerInline,
              dp__time_col_reg_inline: !e.enableSeconds && e.is24 && e.timePickerInline,
              dp__time_col_reg_with_button: !e.enableSeconds && !e.is24,
              dp__time_col_sec: e.enableSeconds && e.is24,
              dp__time_col_sec_with_button: e.enableSeconds && !e.is24
            };
          }),
          ne = n.computed(function () {
            var g = [{
              type: "hours"
            }, {
              type: "",
              separator: !0
            }, {
              type: "minutes"
            }];
            return e.enableSeconds ? g.concat([{
              type: "",
              separator: !0
            }, {
              type: "seconds"
            }]) : g;
          }),
          x = n.computed(function () {
            return ne.value.filter(function (g) {
              return !g.separator;
            });
          }),
          W = n.computed(function () {
            return function (g) {
              if (g === "hours") {
                var h = B(+e.hours);
                return {
                  text: h < 10 ? "0".concat(h) : "".concat(h),
                  value: h
                };
              }
              return {
                text: e[g] < 10 ? "0".concat(e[g]) : "".concat(e[g]),
                value: e[g]
              };
            };
          }),
          q = function q(g) {
            var h = e.is24 ? 24 : 12,
              _ = g === "hours" ? h : 60,
              M = +e["".concat(g, "GridIncrement")],
              G = g === "hours" && !e.is24 ? M : 0,
              c = [];
            for (var d = G; d < _; d += M) c.push({
              value: d,
              text: d < 10 ? "0".concat(d) : "".concat(d)
            });
            return g === "hours" && !e.is24 && c.push({
              value: 0,
              text: "12"
            }), Gl(c);
          },
          X = function X(g, h) {
            var _ = e.minTime ? v(un(e.minTime)) : null,
              M = e.maxTime ? v(un(e.maxTime)) : null,
              G = v(un(I.value, h, g));
            return _ && M ? (St(G, M) || ft(G, M)) && ($t(G, _) || ft(G, _)) : _ ? $t(G, _) || ft(G, _) : M ? St(G, M) || ft(G, M) : !0;
          },
          re = n.computed(function () {
            return function (g) {
              return q(g).flat().filter(function (_) {
                return ni(_.value);
              }).map(function (_) {
                return _.value;
              }).filter(function (_) {
                return !X(_, g);
              });
            };
          }),
          ue = function ue(g) {
            return e["no".concat(g[0].toUpperCase() + g.slice(1), "Overlay")];
          },
          E = function E(g) {
            ue(g) || (y[g] = !y[g], y[g] || r("overlay-closed"));
          },
          C = function C(g) {
            return g === "hours" ? Je : g === "minutes" ? et : wt;
          },
          w = function w(g) {
            var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var _ = h ? A : U,
              M = h ? +e["".concat(g, "Increment")] : -+e["".concat(g, "Increment")];
            X(+e[g] + M, g) && r("update:".concat(g), C(g)(_(_defineProperty({}, g, +e[g]), _defineProperty({}, g, +e["".concat(g, "Increment")]))));
          },
          B = function B(g) {
            return e.is24 ? g : (g >= 12 ? D.value = "PM" : D.value = "AM", ei(g));
          },
          S = function S() {
            D.value === "PM" ? (D.value = "AM", r("update:hours", e.hours - 12)) : (D.value = "PM", r("update:hours", e.hours + 12)), r("am-pm-change", D.value);
          },
          V = function V(g) {
            y[g] = !0;
          },
          P = function P(g, h, _) {
            if (g && e.arrowNavigation) {
              Array.isArray(f.value[h]) ? f.value[h][_] = g : f.value[h] = [g];
              var M = f.value.reduce(function (G, c) {
                return c.map(function (d, s) {
                  return [].concat(_toConsumableArray(G[s] || []), [c[s]]);
                });
              }, []);
              i(e.closeTimePickerBtn), k.value && (M[1] = M[1].concat(k.value)), o(M, e.order);
            }
          },
          b = function b(g, h) {
            return g === "hours" && !e.is24 ? r("update:".concat(g), D.value === "PM" ? h + 12 : h) : r("update:".concat(g), h);
          };
        return a({
          openChildCmp: V
        }), function (g, h) {
          var _;
          return g.disabled ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock("div", Ki, [(n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(ne.value, function (M, G) {
            var c, d, s;
            return n.openBlock(), n.createElementBlock("div", {
              key: G,
              "class": n.normalizeClass(J.value)
            }, [M.separator ? (n.openBlock(), n.createElementBlock(n.Fragment, {
              key: 0
            }, [n.createTextVNode(" : ")], 64)) : (n.openBlock(), n.createElementBlock(n.Fragment, {
              key: 1
            }, [n.createElementVNode("button", {
              type: "button",
              "class": n.normalizeClass({
                dp__btn: !0,
                dp__inc_dec_button: !e.timePickerInline,
                dp__inc_dec_button_inline: e.timePickerInline,
                dp__tp_inline_btn_top: e.timePickerInline,
                dp__inc_dec_button_disabled: Y.value(M.type)
              }),
              "aria-label": (c = n.unref(l).ariaLabels) == null ? void 0 : c.incrementValue(M.type),
              tabindex: "0",
              onKeydown: [n.withKeys(function ($) {
                return w(M.type);
              }, ["enter"]), n.withKeys(function ($) {
                return w(M.type);
              }, ["space"])],
              onClick: function onClick($) {
                return w(M.type);
              },
              ref_for: !0,
              ref: function ref($) {
                return P($, G, 0);
              }
            }, [e.timePickerInline ? (n.openBlock(), n.createElementBlock(n.Fragment, {
              key: 1
            }, [ji, Gi], 64)) : (n.openBlock(), n.createElementBlock(n.Fragment, {
              key: 0
            }, [g.$slots["arrow-up"] ? n.renderSlot(g.$slots, "arrow-up", {
              key: 0
            }) : n.createCommentVNode("", !0), g.$slots["arrow-up"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(Rn), {
              key: 1
            }))], 64))], 42, qi), n.createElementVNode("button", {
              type: "button",
              "aria-label": (d = n.unref(l).ariaLabels) == null ? void 0 : d.openTpOverlay(M.type),
              "class": n.normalizeClass(["dp__btn", ue(M.type) ? void 0 : {
                dp__time_display: !0,
                dp__time_display_block: !e.timePickerInline,
                dp__time_display_inline: e.timePickerInline
              }]),
              tabindex: "0",
              onKeydown: [n.withKeys(function ($) {
                return E(M.type);
              }, ["enter"]), n.withKeys(function ($) {
                return E(M.type);
              }, ["space"])],
              onClick: function onClick($) {
                return E(M.type);
              },
              ref_for: !0,
              ref: function ref($) {
                return P($, G, 1);
              }
            }, [g.$slots[M.type] ? n.renderSlot(g.$slots, M.type, {
              key: 0,
              text: W.value(M.type).text,
              value: W.value(M.type).value
            }) : n.createCommentVNode("", !0), g.$slots[M.type] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock(n.Fragment, {
              key: 1
            }, [n.createTextVNode(n.toDisplayString(W.value(M.type).text), 1)], 64))], 42, Qi), n.createElementVNode("button", {
              type: "button",
              "class": n.normalizeClass({
                dp__btn: !0,
                dp__inc_dec_button: !e.timePickerInline,
                dp__inc_dec_button_inline: e.timePickerInline,
                dp__tp_inline_btn_bottom: e.timePickerInline,
                dp__inc_dec_button_disabled: R.value(M.type)
              }),
              "aria-label": (s = n.unref(l).ariaLabels) == null ? void 0 : s.decrementValue(M.type),
              tabindex: "0",
              onKeydown: [n.withKeys(function ($) {
                return w(M.type, !1);
              }, ["enter"]), n.withKeys(function ($) {
                return w(M.type, !1);
              }, ["space"])],
              onClick: function onClick($) {
                return w(M.type, !1);
              },
              ref_for: !0,
              ref: function ref($) {
                return P($, G, 2);
              }
            }, [e.timePickerInline ? (n.openBlock(), n.createElementBlock(n.Fragment, {
              key: 1
            }, [Zi, Ji], 64)) : (n.openBlock(), n.createElementBlock(n.Fragment, {
              key: 0
            }, [g.$slots["arrow-down"] ? n.renderSlot(g.$slots, "arrow-down", {
              key: 0
            }) : n.createCommentVNode("", !0), g.$slots["arrow-down"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(In), {
              key: 1
            }))], 64))], 42, Xi)], 64))], 2);
          }), 128)), g.is24 ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock("div", es, [g.$slots["am-pm-button"] ? n.renderSlot(g.$slots, "am-pm-button", {
            key: 0,
            toggle: S,
            value: D.value
          }) : n.createCommentVNode("", !0), g.$slots["am-pm-button"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: k,
            type: "button",
            "class": "dp__pm_am_button",
            role: "button",
            "aria-label": (_ = n.unref(l).ariaLabels) == null ? void 0 : _.amPmButton,
            tabindex: "0",
            onClick: S,
            onKeydown: [n.withKeys(n.withModifiers(S, ["prevent"]), ["enter"]), n.withKeys(n.withModifiers(S, ["prevent"]), ["space"])]
          }, n.toDisplayString(D.value), 41, ts))])), (n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(x.value, function (M, G) {
            return n.openBlock(), n.createBlock(n.Transition, {
              key: G,
              name: n.unref(u)(y[M.type]),
              css: n.unref(p)
            }, {
              "default": n.withCtx(function () {
                return [y[M.type] ? (n.openBlock(), n.createBlock(At, {
                  key: 0,
                  items: q(M.type),
                  "disabled-values": n.unref(l).filters.times[M.type].concat(re.value(M.type)),
                  "esc-close": g.escClose,
                  "aria-labels": n.unref(l).ariaLabels,
                  "hide-navigation": g.hideNavigation,
                  "onUpdate:modelValue": function onUpdateModelValue(c) {
                    return b(M.type, c);
                  },
                  onSelected: function onSelected(c) {
                    return E(M.type);
                  },
                  onToggle: function onToggle(c) {
                    return E(M.type);
                  },
                  onResetFlow: h[0] || (h[0] = function (c) {
                    return g.$emit("reset-flow");
                  }),
                  type: M.type
                }, n.createSlots({
                  "button-icon": n.withCtx(function () {
                    return [g.$slots["clock-icon"] ? n.renderSlot(g.$slots, "clock-icon", {
                      key: 0
                    }) : n.createCommentVNode("", !0), g.$slots["clock-icon"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(Yn), {
                      key: 1
                    }))];
                  }),
                  _: 2
                }, [g.$slots["".concat(M.type, "-overlay-value")] ? {
                  name: "item",
                  fn: n.withCtx(function (_ref26) {
                    var c = _ref26.item;
                    return [n.renderSlot(g.$slots, "".concat(M.type, "-overlay-value"), {
                      text: c.text,
                      value: c.value
                    })];
                  }),
                  key: "0"
                } : void 0]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : n.createCommentVNode("", !0)];
              }),
              _: 2
            }, 1032, ["name", "css"]);
          }), 128))]));
        };
      }
    }),
    rs = ["aria-label"],
    as = ["tabindex"],
    os = ["aria-label"],
    ls = n.defineComponent({
      __name: "TimePicker",
      props: _objectSpread({
        hours: {
          type: [Number, Array],
          "default": 0
        },
        minutes: {
          type: [Number, Array],
          "default": 0
        },
        seconds: {
          type: [Number, Array],
          "default": 0
        },
        internalModelValue: {
          type: [Date, Array],
          "default": null
        }
      }, it),
      emits: ["update:hours", "update:minutes", "update:seconds", "mount", "reset-flow", "overlay-opened", "overlay-closed", "am-pm-change"],
      setup: function setup(t, _ref27) {
        var a = _ref27.expose,
          r = _ref27.emit;
        var e = t,
          _lt6 = lt(),
          o = _lt6.buildMatrix,
          i = _lt6.setTimePicker,
          l = n.useSlots(),
          _We10 = We(e),
          u = _We10.hideNavigationButtons,
          p = _We10.defaults,
          _qt4 = qt(p.value.transitions),
          y = _qt4.transitionName,
          D = _qt4.showTransition,
          k = n.ref(null),
          f = n.ref(null),
          v = n.ref([]),
          I = n.ref(null);
        n.onMounted(function () {
          r("mount"), !e.timePicker && e.arrowNavigation ? o([Ne(k.value)], "time") : i(!0, e.timePicker);
        });
        var Y = n.computed(function () {
            return e.range && e.modelAuto ? Sr(e.internalModelValue) : !0;
          }),
          R = n.ref(!1),
          A = function A(E) {
            return {
              hours: Array.isArray(e.hours) ? e.hours[E] : e.hours,
              minutes: Array.isArray(e.minutes) ? e.minutes[E] : e.minutes,
              seconds: Array.isArray(e.seconds) ? e.seconds[E] : e.seconds
            };
          },
          U = n.computed(function () {
            var E = [];
            if (e.range) for (var C = 0; C < 2; C++) E.push(A(C));else E.push(A(0));
            return E;
          }),
          J = function J(E) {
            var C = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            C || r("reset-flow"), R.value = E, r(E ? "overlay-opened" : "overlay-closed"), e.arrowNavigation && i(E), n.nextTick(function () {
              w !== "" && v.value[0] && v.value[0].openChildCmp(w);
            });
          },
          ne = n.computed(function () {
            return {
              dp__btn: !0,
              dp__button: !0,
              dp__button_bottom: e.autoApply && !e.keepActionRow
            };
          }),
          x = ht(l, "timePicker"),
          W = function W(E, C, w) {
            return e.range ? C === 0 ? [E, U.value[1][w]] : [U.value[0][w], E] : E;
          },
          q = function q(E) {
            r("update:hours", E);
          },
          X = function X(E) {
            r("update:minutes", E);
          },
          re = function re(E) {
            r("update:seconds", E);
          },
          ue = function ue() {
            if (I.value) {
              var E = ri(I.value);
              E && E.focus({
                preventScroll: !0
              });
            }
          };
        return a({
          toggleTimePicker: J
        }), function (E, C) {
          var w;
          return n.openBlock(), n.createElementBlock("div", null, [!E.timePicker && !E.timePickerInline ? n.withDirectives((n.openBlock(), n.createElementBlock("button", {
            key: 0,
            type: "button",
            "class": n.normalizeClass(ne.value),
            "aria-label": (w = n.unref(p).ariaLabels) == null ? void 0 : w.openTimePicker,
            tabindex: "0",
            ref_key: "openTimePickerBtn",
            ref: k,
            onKeydown: [C[0] || (C[0] = n.withKeys(function (B) {
              return J(!0);
            }, ["enter"])), C[1] || (C[1] = n.withKeys(function (B) {
              return J(!0);
            }, ["space"]))],
            onClick: C[2] || (C[2] = function (B) {
              return J(!0);
            })
          }, [E.$slots["clock-icon"] ? n.renderSlot(E.$slots, "clock-icon", {
            key: 0
          }) : n.createCommentVNode("", !0), E.$slots["clock-icon"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(Yn), {
            key: 1
          }))], 42, rs)), [[n.vShow, !n.unref(u)("time")]]) : n.createCommentVNode("", !0), n.createVNode(n.Transition, {
            name: n.unref(y)(R.value),
            css: n.unref(D) && !E.timePickerInline
          }, {
            "default": n.withCtx(function () {
              var B;
              return [R.value || E.timePicker || E.timePickerInline ? (n.openBlock(), n.createElementBlock("div", {
                key: 0,
                "class": n.normalizeClass({
                  dp__overlay: !E.timePickerInline
                }),
                ref_key: "overlayRef",
                ref: I,
                tabindex: E.timePickerInline ? void 0 : 0
              }, [n.createElementVNode("div", {
                "class": n.normalizeClass(E.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
                style: {
                  display: "flex"
                }
              }, [E.$slots["time-picker-overlay"] ? n.renderSlot(E.$slots, "time-picker-overlay", {
                key: 0,
                hours: t.hours,
                minutes: t.minutes,
                seconds: t.seconds,
                setHours: q,
                setMinutes: X,
                setSeconds: re
              }) : n.createCommentVNode("", !0), E.$slots["time-picker-overlay"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createElementBlock("div", {
                key: 1,
                "class": n.normalizeClass(E.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
              }, [(n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(U.value, function (S, V) {
                return n.withDirectives((n.openBlock(), n.createBlock(ns, n.mergeProps({
                  key: V
                }, _objectSpread(_objectSpread({}, E.$props), {}, {
                  order: V,
                  hours: S.hours,
                  minutes: S.minutes,
                  seconds: S.seconds,
                  closeTimePickerBtn: f.value,
                  disabled: V === 0 ? E.fixedStart : E.fixedEnd
                }), {
                  ref_for: !0,
                  ref_key: "timeInputRefs",
                  ref: v,
                  "onUpdate:hours": function onUpdateHours(P) {
                    return q(W(P, V, "hours"));
                  },
                  "onUpdate:minutes": function onUpdateMinutes(P) {
                    return X(W(P, V, "minutes"));
                  },
                  "onUpdate:seconds": function onUpdateSeconds(P) {
                    return re(W(P, V, "seconds"));
                  },
                  onMounted: ue,
                  onOverlayClosed: ue,
                  onAmPmChange: C[3] || (C[3] = function (P) {
                    return E.$emit("am-pm-change", P);
                  })
                }), n.createSlots({
                  _: 2
                }, [n.renderList(n.unref(x), function (P, b) {
                  return {
                    name: P,
                    fn: n.withCtx(function (g) {
                      return [n.renderSlot(E.$slots, P, n.normalizeProps(n.guardReactiveProps(g)))];
                    })
                  };
                })]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [[n.vShow, V === 0 ? !0 : Y.value]]);
              }), 128))], 2)), !E.timePicker && !E.timePickerInline ? n.withDirectives((n.openBlock(), n.createElementBlock("button", {
                key: 2,
                type: "button",
                ref_key: "closeTimePickerBtn",
                ref: f,
                "class": n.normalizeClass(ne.value),
                "aria-label": (B = n.unref(p).ariaLabels) == null ? void 0 : B.closeTimePicker,
                tabindex: "0",
                onKeydown: [C[4] || (C[4] = n.withKeys(function (S) {
                  return J(!1);
                }, ["enter"])), C[5] || (C[5] = n.withKeys(function (S) {
                  return J(!1);
                }, ["space"]))],
                onClick: C[6] || (C[6] = function (S) {
                  return J(!1);
                })
              }, [E.$slots["calendar-icon"] ? n.renderSlot(E.$slots, "calendar-icon", {
                key: 0
              }) : n.createCommentVNode("", !0), E.$slots["calendar-icon"] ? n.createCommentVNode("", !0) : (n.openBlock(), n.createBlock(n.unref(Vt), {
                key: 1
              }))], 42, os)), [[n.vShow, !n.unref(u)("time")]]) : n.createCommentVNode("", !0)], 2)], 10, as)) : n.createCommentVNode("", !0)];
            }),
            _: 3
          }, 8, ["name", "css"])]);
        };
      }
    }),
    is = function is(t, a) {
      var _We11 = We(a),
        r = _We11.isDisabled,
        e = _We11.matchDate,
        o = _We11.getWeekFromDate,
        i = _We11.defaults,
        l = n.ref(null),
        u = n.ref(O()),
        p = function p(h) {
          !h.current && a.hideOffsetDates || (l.value = h.value);
        },
        y = function y() {
          l.value = null;
        },
        D = function D(h) {
          return Array.isArray(t.value) && a.range && t.value[0] && l.value ? h ? Re(l.value, t.value[0]) : Ye(l.value, t.value[0]) : !0;
        },
        k = function k(h, _) {
          var M = function M() {
              return t.value ? _ ? t.value[0] || null : t.value[1] : null;
            },
            G = t.value && Array.isArray(t.value) ? M() : null;
          return ve(O(h.value), G);
        },
        f = function f(h) {
          var _ = Array.isArray(t.value) ? t.value[0] : null;
          return h ? !Ye(l.value || null, _) : !0;
        },
        v = function v(h) {
          var _ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          return (a.range || a.weekPicker) && Array.isArray(t.value) && t.value.length === 2 ? a.hideOffsetDates && !h.current ? !1 : ve(O(h.value), t.value[_ ? 0 : 1]) : a.range ? k(h, _) && f(_) || ve(h.value, Array.isArray(t.value) ? t.value[0] : null) && D(_) : !1;
        },
        I = function I(h, _, M) {
          return Array.isArray(t.value) && t.value[0] && t.value.length === 1 ? h ? !1 : M ? Re(t.value[0], _.value) : Ye(t.value[0], _.value) : !1;
        },
        Y = function Y(h) {
          return !t.value || a.hideOffsetDates && !h.current ? !1 : a.range ? a.modelAuto && Array.isArray(t.value) ? ve(h.value, t.value[0] ? t.value[0] : u.value) : !1 : a.multiDates && Array.isArray(t.value) ? t.value.some(function (_) {
            return ve(_, h.value);
          }) : ve(h.value, t.value ? t.value : u.value);
        },
        R = function R(h) {
          if (a.autoRange || a.weekPicker) {
            if (l.value) {
              if (a.hideOffsetDates && !h.current) return !1;
              var _ = Ze(l.value, +a.autoRange),
                M = o(O(l.value));
              return a.weekPicker ? ve(M[1], O(h.value)) : ve(_, O(h.value));
            }
            return !1;
          }
          return !1;
        },
        A = function A(h) {
          if (a.autoRange || a.weekPicker) {
            if (l.value) {
              var _ = Ze(l.value, +a.autoRange);
              if (a.hideOffsetDates && !h.current) return !1;
              var M = o(O(l.value));
              return a.weekPicker ? Re(h.value, M[0]) && Ye(h.value, M[1]) : Re(h.value, l.value) && Ye(h.value, _);
            }
            return !1;
          }
          return !1;
        },
        U = function U(h) {
          if (a.autoRange || a.weekPicker) {
            if (l.value) {
              if (a.hideOffsetDates && !h.current) return !1;
              var _ = o(O(l.value));
              return a.weekPicker ? ve(_[0], h.value) : ve(l.value, h.value);
            }
            return !1;
          }
          return !1;
        },
        J = function J(h) {
          return yr(t.value, l.value, h.value);
        },
        ne = function ne() {
          return a.modelAuto && Array.isArray(a.internalModelValue) ? !!a.internalModelValue[0] : !1;
        },
        x = function x() {
          return a.modelAuto ? Sr(a.internalModelValue) : !0;
        },
        W = function W(h) {
          if (Array.isArray(t.value) && t.value.length || a.weekPicker) return !1;
          var _ = a.range ? !v(h) && !v(h, !1) : !0;
          return !r(h.value) && !Y(h) && !(!h.current && a.hideOffsetDates) && _;
        },
        q = function q(h) {
          return a.range ? a.modelAuto ? ne() && Y(h) : !1 : Y(h);
        },
        X = function X(h) {
          var _;
          return a.highlight ? e(h.value, (_ = a.arrMapValues) != null && _.highlightedDates ? a.arrMapValues.highlightedDates : a.highlight) : !1;
        },
        re = function re(h) {
          return r(h.value) && a.highlightDisabledDays === !1;
        },
        ue = function ue(h) {
          return a.highlightWeekDays && a.highlightWeekDays.includes(h.value.getDay());
        },
        E = function E(h) {
          return (a.range || a.weekPicker) && (!(i.value.multiCalendars > 0) || h.current) && x() && !(!h.current && a.hideOffsetDates) && !Y(h) ? J(h) : !1;
        },
        C = function C(h) {
          var _S = S(h),
            _ = _S.isRangeStart,
            M = _S.isRangeEnd,
            G = a.range ? _ || M : !1;
          return {
            dp__cell_offset: !h.current,
            dp__pointer: !a.disabled && !(!h.current && a.hideOffsetDates) && !r(h.value),
            dp__cell_disabled: r(h.value),
            dp__cell_highlight: !re(h) && (X(h) || ue(h)) && !q(h) && !G,
            dp__cell_highlight_active: !re(h) && (X(h) || ue(h)) && q(h),
            dp__today: !a.noToday && ve(h.value, u.value) && h.current
          };
        },
        w = function w(h) {
          return {
            dp__active_date: q(h),
            dp__date_hover: W(h)
          };
        },
        B = function B(h) {
          return _objectSpread(_objectSpread(_objectSpread({}, V(h)), P(h)), {}, {
            dp__range_between_week: E(h) && a.weekPicker
          });
        },
        S = function S(h) {
          var _ = i.value.multiCalendars > 0 ? h.current && v(h) && x() : v(h) && x(),
            M = i.value.multiCalendars > 0 ? h.current && v(h, !1) && x() : v(h, !1) && x();
          return {
            isRangeStart: _,
            isRangeEnd: M
          };
        },
        V = function V(h) {
          var _S2 = S(h),
            _ = _S2.isRangeStart,
            M = _S2.isRangeEnd;
          return {
            dp__range_start: _,
            dp__range_end: M,
            dp__range_between: E(h) && !a.weekPicker,
            dp__date_hover_start: I(W(h), h, !0),
            dp__date_hover_end: I(W(h), h, !1)
          };
        },
        P = function P(h) {
          return _objectSpread(_objectSpread({}, V(h)), {}, {
            dp__cell_auto_range: A(h),
            dp__cell_auto_range_start: U(h),
            dp__cell_auto_range_end: R(h)
          });
        },
        b = function b(h) {
          return a.range ? a.autoRange ? P(h) : a.modelAuto ? _objectSpread(_objectSpread({}, w(h)), V(h)) : V(h) : a.weekPicker ? B(h) : w(h);
        };
      return {
        setHoverDate: p,
        clearHoverDate: y,
        getDayClassData: function getDayClassData(h) {
          var _objectSpread2;
          return a.hideOffsetDates && !h.current ? {} : _objectSpread(_objectSpread(_objectSpread({}, C(h)), b(h)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, a.dayClass ? a.dayClass(h.value) : "", !0), _defineProperty(_objectSpread2, a.calendarCellClassName, !!a.calendarCellClassName), _objectSpread2));
        }
      };
    },
    ss = ["id", "onKeydown"],
    us = {
      key: 0,
      "class": "dp__sidebar_left"
    },
    cs = {
      key: 1,
      "class": "dp__preset_ranges"
    },
    ds = ["onClick"],
    fs = {
      key: 2,
      "class": "dp__sidebar_right"
    },
    ms = {
      key: 3,
      "class": "dp__action_extra"
    },
    hs = n.defineComponent({
      __name: "DatepickerMenu",
      props: _objectSpread({
        openOnTop: {
          type: Boolean,
          "default": !1
        },
        internalModelValue: {
          type: [Date, Array],
          "default": null
        },
        arrMapValues: {
          type: Object,
          "default": function _default() {
            return {};
          }
        }
      }, it),
      emits: ["close-picker", "select-date", "auto-apply", "time-update", "flow-step", "update-month-year", "invalid-select", "update:internal-model-value", "recalculate-position", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end"],
      setup: function setup(t, _ref28) {
        var a = _ref28.expose,
          r = _ref28.emit;
        var e = t,
          o = n.computed(function () {
            var T = e.openOnTop,
              K = e.internalModelValue,
              we = e.arrMapValues,
              Se = _objectWithoutProperties(e, _excluded);
            return Se;
          }),
          _pr = pr(),
          i = _pr.setMenuFocused,
          l = _pr.setShiftKey,
          u = _pr.control,
          _We12 = We(e),
          p = _We12.getCalendarDays,
          y = _We12.defaults,
          D = n.useSlots(),
          k = n.ref(null),
          f = n.reactive({
            timePicker: !!(!e.enableTimePicker || e.timePicker || e.monthPicker),
            monthYearInput: !!e.timePicker,
            calendar: !1
          }),
          v = n.ref([]),
          I = n.ref([]),
          Y = n.ref(null),
          R = n.ref(null),
          A = n.ref(0),
          U = n.ref(!1),
          J = n.ref(0);
        n.onMounted(function () {
          var K;
          U.value = !0, !((K = e.presetRanges) != null && K.length) && !D["left-sidebar"] && !D["right-sidebar"] && (ze(), window.addEventListener("resize", ze));
          var T = Ne(R);
          if (T && !e.textInput && !e.inline && (i(!0), re()), T) {
            var we = function we(Se) {
              e.allowPreventDefault && Se.preventDefault(), Se.stopImmediatePropagation(), Se.stopPropagation();
            };
            T.addEventListener("pointerdown", we), T.addEventListener("mousedown", we);
          }
        }), n.onUnmounted(function () {
          window.removeEventListener("resize", ze);
        });
        var _lt7 = lt(),
          ne = _lt7.arrowRight,
          x = _lt7.arrowLeft,
          W = _lt7.arrowDown,
          q = _lt7.arrowUp,
          X = function X(T) {
            T || T === 0 ? I.value[T].triggerTransition(B.value(T), S.value(T)) : I.value.forEach(function (K, we) {
              return K.triggerTransition(B.value(we), S.value(we));
            });
          },
          re = function re() {
            var T = Ne(R);
            T && T.focus({
              preventScroll: !0
            });
          },
          ue = function ue() {
            var T;
            (T = e.flow) != null && T.length && J.value !== -1 && (J.value += 1, r("flow-step", J.value), m());
          },
          E = function E() {
            J.value = -1;
          },
          _di = di(e, r, ue, X, J),
          C = _di.calendars,
          w = _di.modelValue,
          B = _di.month,
          S = _di.year,
          V = _di.time,
          P = _di.updateTime,
          b = _di.updateMonthYear,
          g = _di.selectDate,
          h = _di.getWeekNum,
          _ = _di.monthYearSelect,
          M = _di.handleScroll,
          G = _di.handleArrow,
          c = _di.handleSwipe,
          d = _di.getMarker,
          s = _di.selectCurrentDate,
          $ = _di.presetDateRange,
          _is = is(w, e),
          z = _is.setHoverDate,
          L = _is.clearHoverDate,
          ye = _is.getDayClassData,
          te = {
            modelValue: w,
            month: B,
            year: S,
            time: V,
            updateTime: P,
            updateMonthYear: b,
            selectDate: g,
            presetDateRange: $,
            handleMonthYearChange: function handleMonthYearChange(T) {
              v.value[0] && v.value[0].handleMonthYearChange(T);
            }
          };
        n.watch(C, function () {
          e.openOnTop && setTimeout(function () {
            r("recalculate-position");
          }, 0);
        }, {
          deep: !0
        });
        var Ve = ht(D, "calendar"),
          Be = ht(D, "action"),
          Ce = ht(D, "timePicker"),
          Qe = ht(D, "monthYear"),
          yt = n.computed(function () {
            return e.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top";
          }),
          nt = n.computed(function () {
            return Zl(e.yearRange, e.reverseYears);
          }),
          Tt = n.computed(function () {
            return Jl(e.formatLocale, e.locale, e.monthNameFormat);
          }),
          ze = function ze() {
            var T = Ne(k);
            T && (A.value = T.getBoundingClientRect().width);
          },
          j = n.computed(function () {
            return function (T) {
              return p(B.value(T), S.value(T));
            };
          }),
          le = n.computed(function () {
            return y.value.multiCalendars > 0 ? _toConsumableArray(Array(y.value.multiCalendars).keys()) : [0];
          }),
          se = n.computed(function () {
            return function (T) {
              return T === 1;
            };
          }),
          Et = n.computed(function () {
            return e.monthPicker || e.timePicker || e.yearPicker;
          }),
          pt = n.computed(function () {
            return {
              dp__menu_inner: !0,
              dp__flex_display: y.value.multiCalendars > 0
            };
          }),
          _n = n.computed(function () {
            return {
              dp__instance_calendar: y.value.multiCalendars > 0
            };
          }),
          jt = n.computed(function () {
            return {
              dp__menu_disabled: e.disabled,
              dp__menu_readonly: e.readonly
            };
          }),
          xt = n.computed(function () {
            return function (T) {
              return Bn(j, T);
            };
          }),
          On = n.computed(function () {
            return _defineProperty({
              dp__menu: !0,
              dp__menu_index: !e.inline,
              dp__relative: e.inline
            }, e.menuClassName, !!e.menuClassName);
          }),
          Bn = function Bn(T, K) {
            return T.value(K).map(function (we) {
              return _objectSpread(_objectSpread({}, we), {}, {
                days: we.days.map(function (Se) {
                  return Se.marker = d(Se), Se.classData = ye(Se), Se;
                })
              });
            });
          },
          An = function An(T) {
            T.stopPropagation(), T.stopImmediatePropagation();
          },
          Gt = function Gt() {
            e.escClose && r("close-picker");
          },
          Vr = function Vr(T) {
            var K = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            g(T, K), e.spaceConfirm && r("select-date");
          },
          Qt = function Qt(T) {
            var K;
            (K = e.flow) != null && K.length && (f[T] = !0, Object.keys(f).filter(function (we) {
              return !f[we];
            }).length || m());
          },
          Ct = function Ct(T, K, we, Se) {
            if (e.flow[J.value] === T) {
              var Z = Se ? K.value[0] : K.value;
              for (var _len = arguments.length, Xe = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
                Xe[_key - 4] = arguments[_key];
              }
              Z && Z[we].apply(Z, Xe);
            }
          },
          m = function m() {
            Ct("month", v, "toggleMonthPicker", !0, !0), Ct("year", v, "toggleYearPicker", !0, !0), Ct("calendar", Y, "toggleTimePicker", !1, !1, !0), Ct("time", Y, "toggleTimePicker", !1, !0, !0);
            var T = e.flow[J.value];
            (T === "hours" || T === "minutes" || T === "seconds") && Ct(T, Y, "toggleTimePicker", !1, !0, !0, T);
          },
          N = function N(T) {
            if (e.arrowNavigation) {
              if (T === "up") return q();
              if (T === "down") return W();
              if (T === "left") return x();
              if (T === "right") return ne();
            } else T === "left" || T === "up" ? G("left", 0, T === "up") : G("right", 0, T === "down");
          },
          ee = function ee(T) {
            l(T.shiftKey), !e.disableMonthYearSelect && T.code === "Tab" && T.target.classList.contains("dp__menu") && u.value.shiftKeyInMenu && (T.preventDefault(), T.stopImmediatePropagation(), r("close-picker"));
          },
          ie = function ie() {
            re(), r("time-picker-close");
          },
          $e = function $e(T) {
            var K, we, Se, Xe, Z;
            (K = Y.value) == null || K.toggleTimePicker(!1, !1), (Se = (we = v.value) == null ? void 0 : we[T]) == null || Se.toggleMonthPicker(!1, !1), (Z = (Xe = v.value) == null ? void 0 : Xe[T]) == null || Z.toggleYearPicker(!1, !1);
          };
        return a({
          updateMonthYear: b,
          switchView: function switchView(T) {
            var K = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var we, Se, Xe, Z, at;
            return T === "month" ? (Se = (we = v.value) == null ? void 0 : we[K]) == null ? void 0 : Se.toggleMonthPicker(!1, !0) : T === "year" ? (Z = (Xe = v.value) == null ? void 0 : Xe[K]) == null ? void 0 : Z.toggleYearPicker(!1, !0) : T === "time" ? (at = Y.value) == null ? void 0 : at.toggleTimePicker(!0, !1) : $e(K);
          }
        }), function (T, K) {
          var we;
          return n.openBlock(), n.createBlock(n.Transition, {
            appear: "",
            name: (we = n.unref(y).transitions) == null ? void 0 : we.menuAppear,
            css: !!T.transitions
          }, {
            "default": n.withCtx(function () {
              var Se, Xe;
              return [n.createElementVNode("div", {
                id: T.uid ? "dp-menu-".concat(T.uid) : void 0,
                tabindex: "0",
                ref_key: "dpMenuRef",
                ref: R,
                role: "dialog",
                "class": n.normalizeClass(On.value),
                onMouseleave: K[14] || (K[14] = function () {
                  return n.unref(L) && n.unref(L).apply(void 0, arguments);
                }),
                onClick: An,
                onKeydown: [n.withKeys(Gt, ["esc"]), K[15] || (K[15] = n.withKeys(n.withModifiers(function (Z) {
                  return N("left");
                }, ["prevent"]), ["left"])), K[16] || (K[16] = n.withKeys(n.withModifiers(function (Z) {
                  return N("up");
                }, ["prevent"]), ["up"])), K[17] || (K[17] = n.withKeys(n.withModifiers(function (Z) {
                  return N("down");
                }, ["prevent"]), ["down"])), K[18] || (K[18] = n.withKeys(n.withModifiers(function (Z) {
                  return N("right");
                }, ["prevent"]), ["right"])), ee]
              }, [(T.disabled || T.readonly) && T.inline ? (n.openBlock(), n.createElementBlock("div", {
                key: 0,
                "class": n.normalizeClass(jt.value)
              }, null, 2)) : n.createCommentVNode("", !0), !T.inline && !T.teleportCenter ? (n.openBlock(), n.createElementBlock("div", {
                key: 1,
                "class": n.normalizeClass(yt.value)
              }, null, 2)) : n.createCommentVNode("", !0), n.createElementVNode("div", {
                "class": n.normalizeClass({
                  dp__menu_content_wrapper: ((Se = T.presetRanges) == null ? void 0 : Se.length) || !!T.$slots["left-sidebar"] || !!T.$slots["right-sidebar"]
                })
              }, [T.$slots["left-sidebar"] ? (n.openBlock(), n.createElementBlock("div", us, [n.renderSlot(T.$slots, "left-sidebar", n.normalizeProps(n.guardReactiveProps(te)))])) : n.createCommentVNode("", !0), (Xe = T.presetRanges) != null && Xe.length ? (n.openBlock(), n.createElementBlock("div", cs, [(n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(T.presetRanges, function (Z, at) {
                return n.openBlock(), n.createElementBlock("div", {
                  key: at,
                  style: n.normalizeStyle(Z.style || {}),
                  "class": "dp__preset_range",
                  onClick: function onClick(fe) {
                    return n.unref($)(Z.range, !!Z.slot);
                  }
                }, [Z.slot ? n.renderSlot(T.$slots, Z.slot, {
                  key: 0,
                  presetDateRange: n.unref($),
                  label: Z.label,
                  range: Z.range
                }) : (n.openBlock(), n.createElementBlock(n.Fragment, {
                  key: 1
                }, [n.createTextVNode(n.toDisplayString(Z.label), 1)], 64))], 12, ds);
              }), 128))])) : n.createCommentVNode("", !0), n.createElementVNode("div", {
                "class": "dp__instance_calendar",
                ref_key: "calendarWrapperRef",
                ref: k,
                role: "document"
              }, [n.createElementVNode("div", {
                "class": n.normalizeClass(pt.value)
              }, [(n.openBlock(!0), n.createElementBlock(n.Fragment, null, n.renderList(le.value, function (Z, at) {
                return n.openBlock(), n.createElementBlock("div", {
                  key: Z,
                  "class": n.normalizeClass(_n.value)
                }, [!T.disableMonthYearSelect && !T.timePicker ? (n.openBlock(), n.createBlock(zi, n.mergeProps({
                  key: 0,
                  ref_for: !0,
                  ref: function ref(fe) {
                    fe && (v.value[at] = fe);
                  },
                  months: Tt.value,
                  years: nt.value,
                  month: n.unref(B)(Z),
                  year: n.unref(S)(Z),
                  instance: Z,
                  "internal-model-value": t.internalModelValue
                }, o.value, {
                  onMount: K[0] || (K[0] = function (fe) {
                    return Qt("monthYearInput");
                  }),
                  onResetFlow: E,
                  onUpdateMonthYear: function onUpdateMonthYear(fe) {
                    return n.unref(b)(Z, fe);
                  },
                  onMonthYearSelect: n.unref(_),
                  onOverlayClosed: re
                }), n.createSlots({
                  _: 2
                }, [n.renderList(n.unref(Qe), function (fe, ks) {
                  return {
                    name: fe,
                    fn: n.withCtx(function (En) {
                      return [n.renderSlot(T.$slots, fe, n.normalizeProps(n.guardReactiveProps(En)))];
                    })
                  };
                })]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : n.createCommentVNode("", !0), n.createVNode(Ai, n.mergeProps({
                  ref_for: !0,
                  ref: function ref(fe) {
                    fe && (I.value[at] = fe);
                  },
                  "specific-mode": Et.value,
                  "get-week-num": n.unref(h),
                  instance: Z,
                  "mapped-dates": xt.value(Z),
                  month: n.unref(B)(Z),
                  year: n.unref(S)(Z)
                }, o.value, {
                  onSelectDate: function onSelectDate(fe) {
                    return n.unref(g)(fe, !se.value(Z));
                  },
                  onHandleSpace: function onHandleSpace(fe) {
                    return Vr(fe, !se.value(Z));
                  },
                  onSetHoverDate: K[1] || (K[1] = function (fe) {
                    return n.unref(z)(fe);
                  }),
                  onHandleScroll: function onHandleScroll(fe) {
                    return n.unref(M)(fe, Z);
                  },
                  onHandleSwipe: function onHandleSwipe(fe) {
                    return n.unref(c)(fe, Z);
                  },
                  onMount: K[2] || (K[2] = function (fe) {
                    return Qt("calendar");
                  }),
                  onResetFlow: E,
                  onTooltipOpen: K[3] || (K[3] = function (fe) {
                    return T.$emit("tooltip-open", fe);
                  }),
                  onTooltipClose: K[4] || (K[4] = function (fe) {
                    return T.$emit("tooltip-close", fe);
                  })
                }), n.createSlots({
                  _: 2
                }, [n.renderList(n.unref(Ve), function (fe, ks) {
                  return {
                    name: fe,
                    fn: n.withCtx(function (En) {
                      return [n.renderSlot(T.$slots, fe, n.normalizeProps(n.guardReactiveProps(_objectSpread({}, En))))];
                    })
                  };
                })]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])], 2);
              }), 128))], 2), n.createElementVNode("div", null, [T.$slots["time-picker"] ? n.renderSlot(T.$slots, "time-picker", n.normalizeProps(n.mergeProps({
                key: 0
              }, {
                time: n.unref(V),
                updateTime: n.unref(P)
              }))) : (n.openBlock(), n.createElementBlock(n.Fragment, {
                key: 1
              }, [T.enableTimePicker && !T.monthPicker && !T.weekPicker ? (n.openBlock(), n.createBlock(ls, n.mergeProps({
                key: 0,
                ref_key: "timePickerRef",
                ref: Y,
                hours: n.unref(V).hours,
                minutes: n.unref(V).minutes,
                seconds: n.unref(V).seconds,
                "internal-model-value": t.internalModelValue
              }, o.value, {
                onMount: K[5] || (K[5] = function (Z) {
                  return Qt("timePicker");
                }),
                "onUpdate:hours": K[6] || (K[6] = function (Z) {
                  return n.unref(P)(Z);
                }),
                "onUpdate:minutes": K[7] || (K[7] = function (Z) {
                  return n.unref(P)(Z, !1);
                }),
                "onUpdate:seconds": K[8] || (K[8] = function (Z) {
                  return n.unref(P)(Z, !1, !0);
                }),
                onResetFlow: E,
                onOverlayClosed: ie,
                onOverlayOpened: K[9] || (K[9] = function (Z) {
                  return T.$emit("time-picker-open", Z);
                }),
                onAmPmChange: K[10] || (K[10] = function (Z) {
                  return T.$emit("am-pm-change", Z);
                })
              }), n.createSlots({
                _: 2
              }, [n.renderList(n.unref(Ce), function (Z, at) {
                return {
                  name: Z,
                  fn: n.withCtx(function (fe) {
                    return [n.renderSlot(T.$slots, Z, n.normalizeProps(n.guardReactiveProps(fe)))];
                  })
                };
              })]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : n.createCommentVNode("", !0)], 64))])], 512), T.$slots["right-sidebar"] ? (n.openBlock(), n.createElementBlock("div", fs, [n.renderSlot(T.$slots, "right-sidebar", n.normalizeProps(n.guardReactiveProps(te)))])) : n.createCommentVNode("", !0), T.$slots["action-extra"] ? (n.openBlock(), n.createElementBlock("div", ms, [T.$slots["action-extra"] ? n.renderSlot(T.$slots, "action-extra", {
                key: 0,
                selectCurrentDate: n.unref(s)
              }) : n.createCommentVNode("", !0)])) : n.createCommentVNode("", !0)], 2), !T.autoApply || T.keepActionRow ? (n.openBlock(), n.createBlock(Ci, n.mergeProps({
                key: 2,
                "menu-mount": U.value,
                "calendar-width": A.value,
                "internal-model-value": t.internalModelValue
              }, o.value, {
                onClosePicker: K[11] || (K[11] = function (Z) {
                  return T.$emit("close-picker");
                }),
                onSelectDate: K[12] || (K[12] = function (Z) {
                  return T.$emit("select-date");
                }),
                onInvalidSelect: K[13] || (K[13] = function (Z) {
                  return T.$emit("invalid-select");
                }),
                onSelectNow: n.unref(s)
              }), n.createSlots({
                _: 2
              }, [n.renderList(n.unref(Be), function (Z, at) {
                return {
                  name: Z,
                  fn: n.withCtx(function (fe) {
                    return [n.renderSlot(T.$slots, Z, n.normalizeProps(n.guardReactiveProps(_objectSpread({}, fe))))];
                  })
                };
              })]), 1040, ["menu-mount", "calendar-width", "internal-model-value", "onSelectNow"])) : n.createCommentVNode("", !0)], 42, ss)];
            }),
            _: 3
          }, 8, ["name", "css"]);
        };
      }
    }),
    ys = (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : void 0,
    $n = function $n() {},
    ps = function ps(t) {
      return n.getCurrentScope() ? (n.onScopeDispose(t), !0) : !1;
    },
    gs = function gs(t, a, r, e) {
      if (!t) return $n;
      var _o2 = $n;
      var i = n.watch(function () {
          return n.unref(t);
        }, function (u) {
          _o2(), u && (u.addEventListener(a, r, e), _o2 = function o() {
            u.removeEventListener(a, r, e), _o2 = $n;
          });
        }, {
          immediate: !0,
          flush: "post"
        }),
        l = function l() {
          i(), _o2();
        };
      return ps(l), l;
    },
    vs = function vs(t, a, r) {
      var e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var _e$window = e.window,
        o = _e$window === void 0 ? ys : _e$window,
        _e$event = e.event,
        i = _e$event === void 0 ? "pointerdown" : _e$event;
      return o ? gs(o, i, function (u) {
        var p = Ne(t),
          y = Ne(a);
        !p || !y || p === u.target || u.composedPath().includes(p) || u.composedPath().includes(y) || r(u);
      }, {
        passive: !0
      }) : void 0;
    },
    ws = n.defineComponent({
      __name: "VueDatePicker",
      props: _objectSpread({}, it),
      emits: ["update:model-value", "text-submit", "closed", "cleared", "open", "focus", "blur", "internal-model-change", "recalculate-position", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end"],
      setup: function setup(t, _ref30) {
        var a = _ref30.expose,
          r = _ref30.emit;
        var e = t,
          o = n.useSlots(),
          i = n.ref(!1),
          l = n.toRef(e, "modelValue"),
          u = n.toRef(e, "timezone"),
          p = n.ref(null),
          y = n.ref(null),
          D = n.ref(!1),
          k = n.ref(null),
          f = n.reactive({
            disabledDates: null,
            allowedDates: null,
            highlightedDates: null
          }),
          _pr2 = pr(),
          v = _pr2.setMenuFocused,
          I = _pr2.setShiftKey,
          _lt8 = lt(),
          Y = _lt8.clearArrowNav,
          _We13 = We(e),
          R = _We13.validateDate,
          A = _We13.isValidTime,
          U = _We13.defaults,
          J = _We13.mapDatesArrToMap;
        n.onMounted(function () {
          B(e.modelValue), e.inline || (E(k.value).addEventListener("scroll", _), window.addEventListener("resize", M)), e.inline && (i.value = !0), J(f);
        }), n.onUnmounted(function () {
          if (!e.inline) {
            var j = E(k.value);
            j && j.removeEventListener("scroll", _), window.removeEventListener("resize", M);
          }
        });
        var ne = ht(o, "all", e.presetRanges),
          x = ht(o, "input");
        n.watch([l, u], function () {
          B(l.value);
        }, {
          deep: !0
        });
        var _hi = hi(p, y, r, e),
          W = _hi.openOnTop,
          q = _hi.menuStyle,
          X = _hi.resetPosition,
          re = _hi.setMenuPosition,
          ue = _hi.setInitialPosition,
          E = _hi.getScrollableParent,
          _fi = fi(r, e, D),
          C = _fi.inputValue,
          w = _fi.internalModelValue,
          B = _fi.parseExternalModelValue,
          S = _fi.emitModelValue,
          V = _fi.formatInputValue,
          P = _fi.checkBeforeEmit,
          b = n.computed(function () {
            return {
              dp__main: !0,
              dp__theme_dark: e.dark,
              dp__theme_light: !e.dark,
              dp__flex_display: e.inline,
              dp__flex_display_with_input: e.inlineWithInput
            };
          }),
          g = n.computed(function () {
            return e.dark ? "dp__theme_dark" : "dp__theme_light";
          }),
          h = n.computed(function () {
            return e.teleport ? {
              to: typeof e.teleport == "boolean" ? "body" : e.teleport,
              disabled: e.inline
            } : {
              "class": "dp__outer_menu_wrap"
            };
          }),
          _ = function _() {
            i.value && (e.closeOnScroll ? Te() : re());
          },
          M = function M() {
            i.value && re();
          },
          G = /*#__PURE__*/function () {
            var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var j, le, se;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.t0 = !e.disabled && !e.readonly;
                    if (!_context3.t0) {
                      _context3.next = 17;
                      break;
                    }
                    X();
                    _context3.next = 5;
                    return n.nextTick();
                  case 5:
                    i.value = !0;
                    _context3.next = 8;
                    return n.nextTick();
                  case 8:
                    ue();
                    _context3.next = 11;
                    return n.nextTick();
                  case 11:
                    re();
                    delete q.value.opacity;
                    !((j = U.value.transitions) != null && j.menuAppear) && e.transitions && ((se = (le = p.value) == null ? void 0 : le.$el) == null || se.classList.add("dp__menu_transitioned"));
                    i.value && r("open");
                    i.value || ye();
                    B(e.modelValue);
                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function G() {
              return _ref31.apply(this, arguments);
            };
          }(),
          c = function c() {
            C.value = "", ye(), r("update:model-value", null), r("cleared"), e.closeOnClearValue && Te();
          },
          d = function d() {
            var j = w.value;
            return !j || !Array.isArray(j) && R(j) ? !0 : Array.isArray(j) ? j.length === 2 && R(j[0]) && R(j[1]) ? !0 : R(j[0]) : !1;
          },
          s = function s() {
            P() && d() ? (S(), Te()) : r("invalid-select", w.value);
          },
          $ = function $(j) {
            z(), S(), e.closeOnAutoApply && !j && Te();
          },
          z = function z() {
            y.value && e.textInput && y.value.setParsedDate(w.value);
          },
          L = function L() {
            var j = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            e.autoApply && A(w.value) && d() && (e.range && Array.isArray(w.value) ? (e.partialRange || w.value.length === 2) && $(j) : $(j));
          },
          ye = function ye() {
            e.textInput || (w.value = null);
          },
          Te = function Te() {
            e.inline || (i.value && (i.value = !1, v(!1), I(!1), Y(), r("closed"), ue(), C.value && B(l.value)), ye());
          },
          te = function te(j, le) {
            if (!j) {
              w.value = null;
              return;
            }
            w.value = j, le && (s(), r("text-submit"));
          },
          Ve = function Ve() {
            e.autoApply && A(w.value) && S(), z();
          },
          Be = function Be() {
            return i.value ? Te() : G();
          },
          Ce = function Ce(j) {
            w.value = j;
          },
          Qe = function Qe() {
            e.textInput && (D.value = !0, V()), r("focus");
          },
          yt = function yt() {
            e.textInput && (D.value = !1, B(e.modelValue)), r("blur");
          },
          nt = function nt(j) {
            p.value && p.value.updateMonthYear(0, {
              month: _r(j.month),
              year: _r(j.year)
            });
          },
          Tt = function Tt(j) {
            B(j || e.modelValue);
          },
          ze = function ze(j, le) {
            var se;
            (se = p.value) == null || se.switchView(j, le);
          };
        return vs(p, y, e.onClickOutside ? function () {
          return e.onClickOutside(d);
        } : Te), a({
          closeMenu: Te,
          selectDate: s,
          clearValue: c,
          openMenu: G,
          onScroll: _,
          formatInputValue: V,
          updateInternalModelValue: Ce,
          setMonthYear: nt,
          parseModel: Tt,
          switchView: ze
        }), function (j, le) {
          return n.openBlock(), n.createElementBlock("div", {
            "class": n.normalizeClass(b.value),
            ref_key: "pickerWrapperRef",
            ref: k
          }, [n.createVNode(ki, n.mergeProps({
            ref_key: "inputRef",
            ref: y,
            "is-menu-open": i.value,
            "input-value": n.unref(C),
            "onUpdate:inputValue": le[0] || (le[0] = function (se) {
              return n.isRef(C) ? C.value = se : null;
            })
          }, j.$props, {
            onClear: c,
            onOpen: G,
            onSetInputDate: te,
            onSetEmptyDate: n.unref(S),
            onSelectDate: s,
            onToggle: Be,
            onClose: Te,
            onFocus: Qe,
            onBlur: yt,
            onRealBlur: le[1] || (le[1] = function (se) {
              return D.value = !1;
            })
          }), n.createSlots({
            _: 2
          }, [n.renderList(n.unref(x), function (se, Et) {
            return {
              name: se,
              fn: n.withCtx(function (pt) {
                return [n.renderSlot(j.$slots, se, n.normalizeProps(n.guardReactiveProps(pt)))];
              })
            };
          })]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]), i.value ? (n.openBlock(), n.createBlock(n.resolveDynamicComponent(j.teleport ? n.Teleport : "div"), n.normalizeProps(n.mergeProps({
            key: 0
          }, h.value)), {
            "default": n.withCtx(function () {
              return [i.value ? (n.openBlock(), n.createBlock(hs, n.mergeProps({
                key: 0,
                ref_key: "dpMenuRef",
                ref: p,
                "class": g.value,
                style: j.inline ? void 0 : n.unref(q),
                "open-on-top": n.unref(W),
                "arr-map-values": f
              }, j.$props, {
                "internal-model-value": n.unref(w),
                "onUpdate:internalModelValue": le[2] || (le[2] = function (se) {
                  return n.isRef(w) ? w.value = se : null;
                }),
                onClosePicker: Te,
                onSelectDate: s,
                onAutoApply: L,
                onTimeUpdate: Ve,
                onFlowStep: le[3] || (le[3] = function (se) {
                  return j.$emit("flow-step", se);
                }),
                onUpdateMonthYear: le[4] || (le[4] = function (se) {
                  return j.$emit("update-month-year", se);
                }),
                onInvalidSelect: le[5] || (le[5] = function (se) {
                  return j.$emit("invalid-select", n.unref(w));
                }),
                onInvalidFixedRange: le[6] || (le[6] = function (se) {
                  return j.$emit("invalid-fixed-range", se);
                }),
                onRecalculatePosition: n.unref(re),
                onTooltipOpen: le[7] || (le[7] = function (se) {
                  return j.$emit("tooltip-open", se);
                }),
                onTooltipClose: le[8] || (le[8] = function (se) {
                  return j.$emit("tooltip-close", se);
                }),
                onTimePickerOpen: le[9] || (le[9] = function (se) {
                  return j.$emit("time-picker-open", se);
                }),
                onTimePickerClose: le[10] || (le[10] = function (se) {
                  return j.$emit("time-picker-close", se);
                }),
                onAmPmChange: le[11] || (le[11] = function (se) {
                  return j.$emit("am-pm-change", se);
                }),
                onRangeStart: le[12] || (le[12] = function (se) {
                  return j.$emit("range-start", se);
                }),
                onRangeEnd: le[13] || (le[13] = function (se) {
                  return j.$emit("range-end", se);
                })
              }), n.createSlots({
                _: 2
              }, [n.renderList(n.unref(ne), function (se, Et) {
                return {
                  name: se,
                  fn: n.withCtx(function (pt) {
                    return [n.renderSlot(j.$slots, se, n.normalizeProps(n.guardReactiveProps(_objectSpread({}, pt))))];
                  })
                };
              })]), 1040, ["class", "style", "open-on-top", "arr-map-values", "internal-model-value", "onRecalculatePosition"])) : n.createCommentVNode("", !0)];
            }),
            _: 3
          }, 16)) : n.createCommentVNode("", !0)], 2);
        };
      }
    }),
    Sn = function () {
      var t = ws;
      return t.install = function (a) {
        a.component("Vue3DatePicker", t);
      }, t;
    }();
  return Object.entries(Object.freeze(Object.defineProperty({
    __proto__: null,
    "default": Sn
  }, Symbol.toStringTag, {
    value: "Module"
  }))).forEach(function (_ref32) {
    var _ref33 = _slicedToArray(_ref32, 2),
      t = _ref33[0],
      a = _ref33[1];
    t !== "default" && (Sn[t] = a);
  }), Sn;
}(Vue);