"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-frame-component";
exports.ids = ["vendor-chunks/react-frame-component"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-frame-component/lib/Content.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-frame-component/lib/Content.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars\n\n\nvar Content = function (_Component) {\n  _inherits(Content, _Component);\n\n  function Content() {\n    _classCallCheck(this, Content);\n\n    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));\n  }\n\n  _createClass(Content, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.contentDidMount();\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      this.props.contentDidUpdate();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react.Children.only(this.props.children);\n    }\n  }]);\n\n  return Content;\n}(_react.Component);\n\nContent.propTypes = {\n  children: _propTypes2.default.element.isRequired,\n  contentDidMount: _propTypes2.default.func.isRequired,\n  contentDidUpdate: _propTypes2.default.func.isRequired\n};\nexports[\"default\"] = Content;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZnJhbWUtY29tcG9uZW50L2xpYi9Db250ZW50LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQzs7QUFFRixpQ0FBaUMsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsK0RBQStELHlEQUF5RCxxRUFBcUUsNkRBQTZELHdCQUF3Qjs7QUFFampCLGFBQWEsbUJBQU8sQ0FBQyx3R0FBTzs7QUFFNUI7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsNERBQVk7O0FBRXJDOztBQUVBLHVDQUF1Qyx1Q0FBdUM7O0FBRTlFLGtEQUFrRCwwQ0FBMEM7O0FBRTVGLGtEQUFrRCxhQUFhLHlGQUF5Rjs7QUFFeEosMkNBQTJDLCtEQUErRCx1R0FBdUcseUVBQXlFLGVBQWUsMEVBQTBFLEdBQUcseUhBQXlIOzs7QUFHL2U7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW4tcmVzdW1lLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZyYW1lLWNvbXBvbmVudC9saWIvQ29udGVudC5qcz8zZDg1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxudmFyIENvbnRlbnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29udGVudCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGVudCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbnRlbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb250ZW50KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udGVudCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5jb250ZW50RGlkTW91bnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLnByb3BzLmNvbnRlbnREaWRVcGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRlbnQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudC5pc1JlcXVpcmVkLFxuICBjb250ZW50RGlkTW91bnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICBjb250ZW50RGlkVXBkYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRlbnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-frame-component/lib/Content.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-frame-component/lib/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-frame-component/lib/Context.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.FrameContextConsumer = exports.FrameContextProvider = exports.useFrame = exports.FrameContext = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar doc = void 0;\nvar win = void 0;\nif (typeof document !== 'undefined') {\n  doc = document;\n}\nif (typeof window !== 'undefined') {\n  win = window;\n}\n\nvar FrameContext = exports.FrameContext = _react2.default.createContext({ document: doc, window: win });\n\nvar useFrame = exports.useFrame = function useFrame() {\n  return _react2.default.useContext(FrameContext);\n};\n\nvar FrameContextProvider = FrameContext.Provider,\n    FrameContextConsumer = FrameContext.Consumer;\nexports.FrameContextProvider = FrameContextProvider;\nexports.FrameContextConsumer = FrameContextConsumer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZnJhbWUtY29tcG9uZW50L2xpYi9Db250ZXh0LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDRCQUE0QixHQUFHLDRCQUE0QixHQUFHLGdCQUFnQixHQUFHLG9CQUFvQjs7QUFFckcsYUFBYSxtQkFBTyxDQUFDLHdHQUFPOztBQUU1Qjs7QUFFQSx1Q0FBdUMsdUNBQXVDOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0IsbUNBQW1DLDRCQUE0Qjs7QUFFdEcsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLDRCQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW4tcmVzdW1lLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZyYW1lLWNvbXBvbmVudC9saWIvQ29udGV4dC5qcz82MzMxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRnJhbWVDb250ZXh0Q29uc3VtZXIgPSBleHBvcnRzLkZyYW1lQ29udGV4dFByb3ZpZGVyID0gZXhwb3J0cy51c2VGcmFtZSA9IGV4cG9ydHMuRnJhbWVDb250ZXh0ID0gdW5kZWZpbmVkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkb2MgPSB2b2lkIDA7XG52YXIgd2luID0gdm9pZCAwO1xuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZG9jID0gZG9jdW1lbnQ7XG59XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luID0gd2luZG93O1xufVxuXG52YXIgRnJhbWVDb250ZXh0ID0gZXhwb3J0cy5GcmFtZUNvbnRleHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7IGRvY3VtZW50OiBkb2MsIHdpbmRvdzogd2luIH0pO1xuXG52YXIgdXNlRnJhbWUgPSBleHBvcnRzLnVzZUZyYW1lID0gZnVuY3Rpb24gdXNlRnJhbWUoKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQudXNlQ29udGV4dChGcmFtZUNvbnRleHQpO1xufTtcblxudmFyIEZyYW1lQ29udGV4dFByb3ZpZGVyID0gRnJhbWVDb250ZXh0LlByb3ZpZGVyLFxuICAgIEZyYW1lQ29udGV4dENvbnN1bWVyID0gRnJhbWVDb250ZXh0LkNvbnN1bWVyO1xuZXhwb3J0cy5GcmFtZUNvbnRleHRQcm92aWRlciA9IEZyYW1lQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5GcmFtZUNvbnRleHRDb25zdW1lciA9IEZyYW1lQ29udGV4dENvbnN1bWVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-frame-component/lib/Context.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-frame-component/lib/Frame.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-frame-component/lib/Frame.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Frame = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Context = __webpack_require__(/*! ./Context */ \"(ssr)/./node_modules/react-frame-component/lib/Context.js\");\n\nvar _Content = __webpack_require__(/*! ./Content */ \"(ssr)/./node_modules/react-frame-component/lib/Content.js\");\n\nvar _Content2 = _interopRequireDefault(_Content);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Frame = exports.Frame = function (_Component) {\n  _inherits(Frame, _Component);\n\n  // React warns when you render directly into the body since browser extensions\n  // also inject into the body and can mess up React. For this reason\n  // initialContent is expected to have a div inside of the body\n  // element that we render react into.\n  function Frame(props, context) {\n    _classCallCheck(this, Frame);\n\n    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props, context));\n\n    _this.setRef = function (node) {\n      _this.nodeRef.current = node;\n\n      var forwardedRef = _this.props.forwardedRef; // eslint-disable-line react/prop-types\n\n      if (typeof forwardedRef === 'function') {\n        forwardedRef(node);\n      } else if (forwardedRef) {\n        forwardedRef.current = node;\n      }\n    };\n\n    _this.handleLoad = function () {\n      clearInterval(_this.loadCheck);\n      // Bail update as some browsers will trigger on both DOMContentLoaded & onLoad ala firefox\n      if (!_this.state.iframeLoaded) {\n        _this.setState({ iframeLoaded: true });\n      }\n    };\n\n    _this.loadCheck = function () {\n      return setInterval(function () {\n        _this.handleLoad();\n      }, 500);\n    };\n\n    _this._isMounted = false;\n    _this.nodeRef = _react2.default.createRef();\n    _this.state = { iframeLoaded: false };\n    return _this;\n  }\n\n  _createClass(Frame, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this._isMounted = true;\n\n      var doc = this.getDoc();\n\n      if (doc) {\n        this.nodeRef.current.contentWindow.addEventListener('DOMContentLoaded', this.handleLoad);\n      }\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this._isMounted = false;\n\n      this.nodeRef.current.removeEventListener('DOMContentLoaded', this.handleLoad);\n    }\n  }, {\n    key: 'getDoc',\n    value: function getDoc() {\n      return this.nodeRef.current ? this.nodeRef.current.contentDocument : null; // eslint-disable-line\n    }\n  }, {\n    key: 'getMountTarget',\n    value: function getMountTarget() {\n      var doc = this.getDoc();\n      if (this.props.mountTarget) {\n        return doc.querySelector(this.props.mountTarget);\n      }\n      return doc.body.children[0];\n    }\n\n    // In certain situations on a cold cache DOMContentLoaded never gets called\n    // fallback to an interval to check if that's the case\n\n  }, {\n    key: 'renderFrameContents',\n    value: function renderFrameContents() {\n      if (!this._isMounted) {\n        return null;\n      }\n\n      var doc = this.getDoc();\n\n      if (!doc) {\n        return null;\n      }\n\n      var contentDidMount = this.props.contentDidMount;\n      var contentDidUpdate = this.props.contentDidUpdate;\n\n      var win = doc.defaultView || doc.parentView;\n      var contents = _react2.default.createElement(\n        _Content2.default,\n        {\n          contentDidMount: contentDidMount,\n          contentDidUpdate: contentDidUpdate\n        },\n        _react2.default.createElement(\n          _Context.FrameContextProvider,\n          { value: { document: doc, window: win } },\n          _react2.default.createElement(\n            'div',\n            { className: 'frame-content' },\n            this.props.children\n          )\n        )\n      );\n\n      var mountTarget = this.getMountTarget();\n\n      return [_reactDom2.default.createPortal(this.props.head, this.getDoc().head), _reactDom2.default.createPortal(contents, mountTarget)];\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var props = _extends({}, this.props, {\n        srcDoc: this.props.initialContent,\n        children: undefined // The iframe isn't ready so we drop children from props here. #12, #17\n      });\n      delete props.head;\n      delete props.initialContent;\n      delete props.mountTarget;\n      delete props.contentDidMount;\n      delete props.contentDidUpdate;\n      delete props.forwardedRef;\n\n      return _react2.default.createElement(\n        'iframe',\n        _extends({}, props, { ref: this.setRef, onLoad: this.handleLoad }),\n        this.state.iframeLoaded && this.renderFrameContents()\n      );\n    }\n  }]);\n\n  return Frame;\n}(_react.Component);\n\nFrame.propTypes = {\n  style: _propTypes2.default.object, // eslint-disable-line\n  head: _propTypes2.default.node,\n  initialContent: _propTypes2.default.string,\n  mountTarget: _propTypes2.default.string,\n  contentDidMount: _propTypes2.default.func,\n  contentDidUpdate: _propTypes2.default.func,\n  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)])\n};\nFrame.defaultProps = {\n  style: {},\n  head: null,\n  children: undefined,\n  mountTarget: undefined,\n  contentDidMount: function contentDidMount() {},\n  contentDidUpdate: function contentDidUpdate() {},\n  initialContent: '<!DOCTYPE html><html><head></head><body><div class=\"frame-root\"></div></body></html>'\n};\nexports[\"default\"] = _react2.default.forwardRef(function (props, ref) {\n  return _react2.default.createElement(Frame, _extends({}, props, { forwardedRef: ref }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZnJhbWUtY29tcG9uZW50L2xpYi9GcmFtZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixhQUFhOztBQUViLG9EQUFvRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsaUNBQWlDOztBQUVoUCxpQ0FBaUMsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsK0RBQStELHlEQUF5RCxxRUFBcUUsNkRBQTZELHdCQUF3Qjs7QUFFampCLGFBQWEsbUJBQU8sQ0FBQyx3R0FBTzs7QUFFNUI7O0FBRUEsZ0JBQWdCLG1CQUFPLENBQUMsZ0hBQVc7O0FBRW5DOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFZOztBQUVyQzs7QUFFQSxlQUFlLG1CQUFPLENBQUMsNEVBQVc7O0FBRWxDLGVBQWUsbUJBQU8sQ0FBQyw0RUFBVzs7QUFFbEM7O0FBRUEsdUNBQXVDLHVDQUF1Qzs7QUFFOUUsa0RBQWtELDBDQUEwQzs7QUFFNUYsa0RBQWtELGFBQWEseUZBQXlGOztBQUV4SiwyQ0FBMkMsK0RBQStELHVHQUF1Ryx5RUFBeUUsZUFBZSwwRUFBMEUsR0FBRzs7QUFFdFgsWUFBWSxhQUFhO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVksU0FBUyw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVcsMkNBQTJDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLGtCQUFlO0FBQ2YseURBQXlELFdBQVcsbUJBQW1CO0FBQ3ZGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuLXJlc3VtZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1mcmFtZS1jb21wb25lbnQvbGliL0ZyYW1lLmpzP2UzYjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GcmFtZSA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9Db250ZXh0ID0gcmVxdWlyZSgnLi9Db250ZXh0Jyk7XG5cbnZhciBfQ29udGVudCA9IHJlcXVpcmUoJy4vQ29udGVudCcpO1xuXG52YXIgX0NvbnRlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29udGVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEZyYW1lID0gZXhwb3J0cy5GcmFtZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGcmFtZSwgX0NvbXBvbmVudCk7XG5cbiAgLy8gUmVhY3Qgd2FybnMgd2hlbiB5b3UgcmVuZGVyIGRpcmVjdGx5IGludG8gdGhlIGJvZHkgc2luY2UgYnJvd3NlciBleHRlbnNpb25zXG4gIC8vIGFsc28gaW5qZWN0IGludG8gdGhlIGJvZHkgYW5kIGNhbiBtZXNzIHVwIFJlYWN0LiBGb3IgdGhpcyByZWFzb25cbiAgLy8gaW5pdGlhbENvbnRlbnQgaXMgZXhwZWN0ZWQgdG8gaGF2ZSBhIGRpdiBpbnNpZGUgb2YgdGhlIGJvZHlcbiAgLy8gZWxlbWVudCB0aGF0IHdlIHJlbmRlciByZWFjdCBpbnRvLlxuICBmdW5jdGlvbiBGcmFtZShwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGcmFtZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRnJhbWUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGcmFtZSkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLnNldFJlZiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5ub2RlUmVmLmN1cnJlbnQgPSBub2RlO1xuXG4gICAgICB2YXIgZm9yd2FyZGVkUmVmID0gX3RoaXMucHJvcHMuZm9yd2FyZGVkUmVmOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3Byb3AtdHlwZXNcblxuICAgICAgaWYgKHR5cGVvZiBmb3J3YXJkZWRSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZm9yd2FyZGVkUmVmKG5vZGUpO1xuICAgICAgfSBlbHNlIGlmIChmb3J3YXJkZWRSZWYpIHtcbiAgICAgICAgZm9yd2FyZGVkUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChfdGhpcy5sb2FkQ2hlY2spO1xuICAgICAgLy8gQmFpbCB1cGRhdGUgYXMgc29tZSBicm93c2VycyB3aWxsIHRyaWdnZXIgb24gYm90aCBET01Db250ZW50TG9hZGVkICYgb25Mb2FkIGFsYSBmaXJlZm94XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmlmcmFtZUxvYWRlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlmcmFtZUxvYWRlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMubG9hZENoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuaGFuZGxlTG9hZCgpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIF90aGlzLm5vZGVSZWYgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMuc3RhdGUgPSB7IGlmcmFtZUxvYWRlZDogZmFsc2UgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRnJhbWUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICAgIHZhciBkb2MgPSB0aGlzLmdldERvYygpO1xuXG4gICAgICBpZiAoZG9jKSB7XG4gICAgICAgIHRoaXMubm9kZVJlZi5jdXJyZW50LmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuaGFuZGxlTG9hZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLm5vZGVSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5oYW5kbGVMb2FkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREb2MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREb2MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlUmVmLmN1cnJlbnQgPyB0aGlzLm5vZGVSZWYuY3VycmVudC5jb250ZW50RG9jdW1lbnQgOiBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TW91bnRUYXJnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNb3VudFRhcmdldCgpIHtcbiAgICAgIHZhciBkb2MgPSB0aGlzLmdldERvYygpO1xuICAgICAgaWYgKHRoaXMucHJvcHMubW91bnRUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMucHJvcHMubW91bnRUYXJnZXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRvYy5ib2R5LmNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIC8vIEluIGNlcnRhaW4gc2l0dWF0aW9ucyBvbiBhIGNvbGQgY2FjaGUgRE9NQ29udGVudExvYWRlZCBuZXZlciBnZXRzIGNhbGxlZFxuICAgIC8vIGZhbGxiYWNrIHRvIGFuIGludGVydmFsIHRvIGNoZWNrIGlmIHRoYXQncyB0aGUgY2FzZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJGcmFtZUNvbnRlbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRnJhbWVDb250ZW50cygpIHtcbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgZG9jID0gdGhpcy5nZXREb2MoKTtcblxuICAgICAgaWYgKCFkb2MpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZW50RGlkTW91bnQgPSB0aGlzLnByb3BzLmNvbnRlbnREaWRNb3VudDtcbiAgICAgIHZhciBjb250ZW50RGlkVXBkYXRlID0gdGhpcy5wcm9wcy5jb250ZW50RGlkVXBkYXRlO1xuXG4gICAgICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRWaWV3O1xuICAgICAgdmFyIGNvbnRlbnRzID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Db250ZW50Mi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudERpZE1vdW50OiBjb250ZW50RGlkTW91bnQsXG4gICAgICAgICAgY29udGVudERpZFVwZGF0ZTogY29udGVudERpZFVwZGF0ZVxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfQ29udGV4dC5GcmFtZUNvbnRleHRQcm92aWRlcixcbiAgICAgICAgICB7IHZhbHVlOiB7IGRvY3VtZW50OiBkb2MsIHdpbmRvdzogd2luIH0gfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdmcmFtZS1jb250ZW50JyB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgdmFyIG1vdW50VGFyZ2V0ID0gdGhpcy5nZXRNb3VudFRhcmdldCgpO1xuXG4gICAgICByZXR1cm4gW19yZWFjdERvbTIuZGVmYXVsdC5jcmVhdGVQb3J0YWwodGhpcy5wcm9wcy5oZWFkLCB0aGlzLmdldERvYygpLmhlYWQpLCBfcmVhY3REb20yLmRlZmF1bHQuY3JlYXRlUG9ydGFsKGNvbnRlbnRzLCBtb3VudFRhcmdldCldO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHNyY0RvYzogdGhpcy5wcm9wcy5pbml0aWFsQ29udGVudCxcbiAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZCAvLyBUaGUgaWZyYW1lIGlzbid0IHJlYWR5IHNvIHdlIGRyb3AgY2hpbGRyZW4gZnJvbSBwcm9wcyBoZXJlLiAjMTIsICMxN1xuICAgICAgfSk7XG4gICAgICBkZWxldGUgcHJvcHMuaGVhZDtcbiAgICAgIGRlbGV0ZSBwcm9wcy5pbml0aWFsQ29udGVudDtcbiAgICAgIGRlbGV0ZSBwcm9wcy5tb3VudFRhcmdldDtcbiAgICAgIGRlbGV0ZSBwcm9wcy5jb250ZW50RGlkTW91bnQ7XG4gICAgICBkZWxldGUgcHJvcHMuY29udGVudERpZFVwZGF0ZTtcbiAgICAgIGRlbGV0ZSBwcm9wcy5mb3J3YXJkZWRSZWY7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2lmcmFtZScsXG4gICAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywgeyByZWY6IHRoaXMuc2V0UmVmLCBvbkxvYWQ6IHRoaXMuaGFuZGxlTG9hZCB9KSxcbiAgICAgICAgdGhpcy5zdGF0ZS5pZnJhbWVMb2FkZWQgJiYgdGhpcy5yZW5kZXJGcmFtZUNvbnRlbnRzKClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZyYW1lO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRnJhbWUucHJvcFR5cGVzID0ge1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaGVhZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBpbml0aWFsQ29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG1vdW50VGFyZ2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY29udGVudERpZE1vdW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNvbnRlbnREaWRVcGRhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsIF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQpXSlcbn07XG5GcmFtZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgaGVhZDogbnVsbCxcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgbW91bnRUYXJnZXQ6IHVuZGVmaW5lZCxcbiAgY29udGVudERpZE1vdW50OiBmdW5jdGlvbiBjb250ZW50RGlkTW91bnQoKSB7fSxcbiAgY29udGVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29udGVudERpZFVwZGF0ZSgpIHt9LFxuICBpbml0aWFsQ29udGVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48ZGl2IGNsYXNzPVwiZnJhbWUtcm9vdFwiPjwvZGl2PjwvYm9keT48L2h0bWw+J1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdDIuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGcmFtZSwgX2V4dGVuZHMoe30sIHByb3BzLCB7IGZvcndhcmRlZFJlZjogcmVmIH0pKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-frame-component/lib/Frame.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-frame-component/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-frame-component/lib/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _Frame = __webpack_require__(/*! ./Frame */ \"(ssr)/./node_modules/react-frame-component/lib/Frame.js\");\n\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Frame).default;\n  }\n}));\n\nvar _Context = __webpack_require__(/*! ./Context */ \"(ssr)/./node_modules/react-frame-component/lib/Context.js\");\n\nObject.defineProperty(exports, \"FrameContext\", ({\n  enumerable: true,\n  get: function get() {\n    return _Context.FrameContext;\n  }\n}));\nObject.defineProperty(exports, \"FrameContextConsumer\", ({\n  enumerable: true,\n  get: function get() {\n    return _Context.FrameContextConsumer;\n  }\n}));\nObject.defineProperty(exports, \"useFrame\", ({\n  enumerable: true,\n  get: function get() {\n    return _Context.useFrame;\n  }\n}));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZnJhbWUtY29tcG9uZW50L2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7O0FBRUYsYUFBYSxtQkFBTyxDQUFDLHdFQUFTOztBQUU5QiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7O0FBRUYsZUFBZSxtQkFBTyxDQUFDLDRFQUFXOztBQUVsQyxnREFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRix3REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7O0FBRUYsdUNBQXVDLHVDQUF1QyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW4tcmVzdW1lLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZyYW1lLWNvbXBvbmVudC9saWIvaW5kZXguanM/NzM3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRnJhbWUgPSByZXF1aXJlKCcuL0ZyYW1lJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVmYXVsdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZyYW1lKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9Db250ZXh0ID0gcmVxdWlyZSgnLi9Db250ZXh0Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRnJhbWVDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0NvbnRleHQuRnJhbWVDb250ZXh0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRnJhbWVDb250ZXh0Q29uc3VtZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfQ29udGV4dC5GcmFtZUNvbnRleHRDb25zdW1lcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZyYW1lJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0NvbnRleHQudXNlRnJhbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-frame-component/lib/index.js\n");

/***/ })

};
;