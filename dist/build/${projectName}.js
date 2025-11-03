(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("@penta-b/ma-lib"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "@penta-b/ma-lib"], factory);
	else if(typeof exports === 'object')
		exports["${projectName}"] = factory(require("react"), require("react-redux"), require("@penta-b/ma-lib"));
	else
		root["${projectName}"] = factory(root["react"], root["react-redux"], root["@penta-b/ma-lib"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE__penta_b_ma_lib__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/MapClick/MapClick.component.js":
/*!*******************************************************!*\
  !*** ./src/components/MapClick/MapClick.component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @penta-b/ma-lib */ "@penta-b/ma-lib");
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Author: Amr Samir
 * 
 * Description: 
 *  - An example of a plugin that listens to another 
 *    plugin's state changes (Map plugin), and log that state.
 */




var MapClickComponent = /*#__PURE__*/function (_React$Component) {
  function MapClickComponent(props) {
    _classCallCheck(this, MapClickComponent);
    return _callSuper(this, MapClickComponent, [props]);
  }

  /**
   * Description: 
   *  - React lifecycle method, here we check for state changes.
   */
  _inherits(MapClickComponent, _React$Component);
  return _createClass(MapClickComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this = this;
      console.log("aaaa" + this.props.singleClick);
      if (this.props.isActive) {
        var prevClick = prevProps.singleClick;
        var currentClick = this.props.singleClick;
        if (currentClick && currentClick != prevClick) {
          this.id && this.props.removeMapClickResult(this.id);
          this.props.showMapClickResult({
            coordinate: currentClick.coordinate
          }, function (id) {
            return _this.id = id;
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    singleClick: _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.getSelector('selectMapSingleClick', state, ownProps.reducerId)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showMapClickResult: function showMapClickResult(props, onAdd) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('showComponent', 'keroles', 'MapClickResult', props, onAdd));
    },
    removeMapClickResult: function removeMapClickResult(id) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('removeComponent', id));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(MapClickComponent));

/***/ }),

/***/ "./src/components/MapClickResult/MapClickResult.component.js":
/*!*******************************************************************!*\
  !*** ./src/components/MapClickResult/MapClickResult.component.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @penta-b/ma-lib */ "@penta-b/ma-lib");
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var MapClickResult = /*#__PURE__*/function (_React$Component) {
  function MapClickResult() {
    _classCallCheck(this, MapClickResult);
    return _callSuper(this, MapClickResult, arguments);
  }
  _inherits(MapClickResult, _React$Component);
  return _createClass(MapClickResult, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        coordinate = _this$props.coordinate,
        t = _this$props.t;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, t('click.msg', {
        '0': coordinate[0],
        '1': coordinate[1]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), t('test.plurals', {
        '0': 1,
        '1': 5
      }));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__.withLocalize)(MapClickResult, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.LOCALIZATION_NAMESPACE));

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCALIZATION_NAMESPACE: () => (/* binding */ LOCALIZATION_NAMESPACE)
/* harmony export */ });
var LOCALIZATION_NAMESPACE = "keroles";

/***/ }),

/***/ "./src/messages.js":
/*!*************************!*\
  !*** ./src/messages.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugin_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin.svg */ "./src/plugin.svg");
/* harmony import */ var _plugin_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugin_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "click.msg": "You clicked on location: {0}, {1}",
  "test.plurals": "There {0,plural,one{is # apple}other{are # apples}} in {1,plural,one{# basket}other{# baskets}}.",
  "title": "keroles",
  "icon": (_plugin_svg__WEBPACK_IMPORTED_MODULE_0___default())
});

/***/ }),

/***/ "./src/plugin.svg":
/*!************************!*\
  !*** ./src/plugin.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "plugin.svg";

/***/ }),

/***/ "@penta-b/ma-lib":
/*!**********************************!*\
  !*** external "@penta-b/ma-lib" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__penta_b_ma_lib__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:3001/test-plugin/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components),
/* harmony export */   localization: () => (/* binding */ localization)
/* harmony export */ });
/* harmony import */ var _components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MapClick/MapClick.component */ "./src/components/MapClick/MapClick.component.js");
/* harmony import */ var _components_MapClickResult_MapClickResult_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MapClickResult/MapClickResult.component */ "./src/components/MapClickResult/MapClickResult.component.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/messages.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/**
 * Author: Amr Samir
 * 
 * Description: 
 *  - This index file exports plugin's components and/or reducers and/or actions.
 */





_components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__["default"].Title = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE + ":title";
_components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__["default"].Icon = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE + ":icon";
var components = {
  MapClick: _components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__["default"],
  MapClickResult: _components_MapClickResult_MapClickResult_component__WEBPACK_IMPORTED_MODULE_1__["default"]
};
var localization = {
  namespace: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE,
  defaultLocalization: _messages__WEBPACK_IMPORTED_MODULE_2__["default"]
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDQUEseUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0U7QUFDa0I7QUFDckM7QUFDa0I7QUFFL0RDLCtFQUFRLENBQUNFLEtBQUssR0FBR1Qsd0VBQXNCLEdBQUcsUUFBUTtBQUNsRE8sK0VBQVEsQ0FBQ0QsSUFBSSxHQUFHTix3RUFBc0IsR0FBRyxPQUFPO0FBRWhELElBQU1VLFVBQVUsR0FBRztFQUNmSCxRQUFRLEVBQVJBLCtFQUFRO0VBQ1JOLGNBQWMsRUFBZEEsMkZBQWNBO0FBQ2xCLENBQUM7QUFFRCxJQUFNVSxZQUFZLEdBQUc7RUFDakJDLFNBQVMsRUFBRVosd0VBQXNCO0VBQ2pDUSxtQkFBbUIsRUFBbkJBLGlEQUFtQkE7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLyR7cHJvamVjdE5hbWV9L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8ke3Byb2plY3ROYW1lfS8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrL01hcENsaWNrLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8ke3Byb2plY3ROYW1lfS8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrUmVzdWx0L01hcENsaWNrUmVzdWx0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8ke3Byb2plY3ROYW1lfS8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLyR7cHJvamVjdE5hbWV9Ly4vc3JjL21lc3NhZ2VzLmpzIiwid2VicGFjazovLyR7cHJvamVjdE5hbWV9Ly4vc3JjL3BsdWdpbi5zdmciLCJ3ZWJwYWNrOi8vJHtwcm9qZWN0TmFtZX0vZXh0ZXJuYWwgdW1kIFwiQHBlbnRhLWIvbWEtbGliXCIiLCJ3ZWJwYWNrOi8vJHtwcm9qZWN0TmFtZX0vZXh0ZXJuYWwgdW1kIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8ke3Byb2plY3ROYW1lfS9leHRlcm5hbCB1bWQgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLyR7cHJvamVjdE5hbWV9L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLyR7cHJvamVjdE5hbWV9L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLyR7cHJvamVjdE5hbWV9L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8ke3Byb2plY3ROYW1lfS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLyR7cHJvamVjdE5hbWV9L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vJHtwcm9qZWN0TmFtZX0vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vJHtwcm9qZWN0TmFtZX0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKSwgcmVxdWlyZShcIkBwZW50YS1iL21hLWxpYlwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInJlYWN0LXJlZHV4XCIsIFwiQHBlbnRhLWIvbWEtbGliXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIiR7cHJvamVjdE5hbWV9XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKSwgcmVxdWlyZShcIkBwZW50YS1iL21hLWxpYlwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiJHtwcm9qZWN0TmFtZX1cIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcInJlYWN0LXJlZHV4XCJdLCByb290W1wiQHBlbnRhLWIvbWEtbGliXCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfcmVkdXhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fcGVudGFfYl9tYV9saWJfXykgPT4ge1xucmV0dXJuICIsIi8qKlxyXG4gKiBBdXRob3I6IEFtciBTYW1pclxyXG4gKiBcclxuICogRGVzY3JpcHRpb246IFxyXG4gKiAgLSBBbiBleGFtcGxlIG9mIGEgcGx1Z2luIHRoYXQgbGlzdGVucyB0byBhbm90aGVyIFxyXG4gKiAgICBwbHVnaW4ncyBzdGF0ZSBjaGFuZ2VzIChNYXAgcGx1Z2luKSwgYW5kIGxvZyB0aGF0IHN0YXRlLlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZWxlY3RvcnNSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5IH0gZnJvbSAnQHBlbnRhLWIvbWEtbGliJztcclxuXHJcblxyXG5jbGFzcyBNYXBDbGlja0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2NyaXB0aW9uOiBcclxuICAgICAqICAtIFJlYWN0IGxpZmVjeWNsZSBtZXRob2QsIGhlcmUgd2UgY2hlY2sgZm9yIHN0YXRlIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICBjb25zb2xlLmxvZyhcImFhYWFcIit0aGlzLnByb3BzLnNpbmdsZUNsaWNrKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2Q2xpY2sgPSBwcmV2UHJvcHMuc2luZ2xlQ2xpY2s7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2xpY2sgPSB0aGlzLnByb3BzLnNpbmdsZUNsaWNrO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDbGljayAmJiBjdXJyZW50Q2xpY2sgIT0gcHJldkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkICYmIHRoaXMucHJvcHMucmVtb3ZlTWFwQ2xpY2tSZXN1bHQodGhpcy5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93TWFwQ2xpY2tSZXN1bHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGU6IGN1cnJlbnRDbGljay5jb29yZGluYXRlXHJcbiAgICAgICAgICAgICAgICB9LCBpZCA9PiB0aGlzLmlkID0gaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaW5nbGVDbGljazogc2VsZWN0b3JzUmVnaXN0cnkuZ2V0U2VsZWN0b3IoJ3NlbGVjdE1hcFNpbmdsZUNsaWNrJywgc3RhdGUsIG93blByb3BzLnJlZHVjZXJJZClcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93TWFwQ2xpY2tSZXN1bHQ6IChwcm9wcywgb25BZGQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdzaG93Q29tcG9uZW50JywgJ2tlcm9sZXMnLCAnTWFwQ2xpY2tSZXN1bHQnLCBwcm9wcywgb25BZGQpKSxcclxuICAgICAgICByZW1vdmVNYXBDbGlja1Jlc3VsdDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYXBDbGlja0NvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHdpdGhMb2NhbGl6ZSB9IGZyb20gJ0BwZW50YS1iL21hLWxpYic7XHJcblxyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBNYXBDbGlja1Jlc3VsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb29yZGluYXRlLCB0IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHQoJ2NsaWNrLm1zZycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzAnOiBjb29yZGluYXRlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMSc6IGNvb3JkaW5hdGVbMV1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdCgndGVzdC5wbHVyYWxzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMCc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcxJzogNVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhMb2NhbGl6ZShNYXBDbGlja1Jlc3VsdCwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSk7IiwiZXhwb3J0IGNvbnN0IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgPSBcImtlcm9sZXNcIjsiLCJpbXBvcnQgSWNvbiBmcm9tICcuL3BsdWdpbi5zdmcnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFwiY2xpY2subXNnXCI6IFwiWW91IGNsaWNrZWQgb24gbG9jYXRpb246IHswfSwgezF9XCIsXHJcbiAgICBcInRlc3QucGx1cmFsc1wiOiBcIlRoZXJlIHswLHBsdXJhbCxvbmV7aXMgIyBhcHBsZX1vdGhlcnthcmUgIyBhcHBsZXN9fSBpbiB7MSxwbHVyYWwsb25leyMgYmFza2V0fW90aGVyeyMgYmFza2V0c319LlwiLFxyXG4gICAgXCJ0aXRsZVwiOiBcImtlcm9sZXNcIixcclxuICAgIFwiaWNvblwiOiBJY29uXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwbHVnaW4uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19wZW50YV9iX21hX2xpYl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9yZWR1eF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS90ZXN0LXBsdWdpbi9cIjsiLCIvKipcclxuICogQXV0aG9yOiBBbXIgU2FtaXJcclxuICogXHJcbiAqIERlc2NyaXB0aW9uOiBcclxuICogIC0gVGhpcyBpbmRleCBmaWxlIGV4cG9ydHMgcGx1Z2luJ3MgY29tcG9uZW50cyBhbmQvb3IgcmVkdWNlcnMgYW5kL29yIGFjdGlvbnMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IE1hcENsaWNrIGZyb20gJy4vY29tcG9uZW50cy9NYXBDbGljay9NYXBDbGljay5jb21wb25lbnQnO1xyXG5pbXBvcnQgTWFwQ2xpY2tSZXN1bHQgZnJvbSAnLi9jb21wb25lbnRzL01hcENsaWNrUmVzdWx0L01hcENsaWNrUmVzdWx0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBkZWZhdWx0TG9jYWxpemF0aW9uIGZyb20gJy4vbWVzc2FnZXMnO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbk1hcENsaWNrLlRpdGxlID0gTE9DQUxJWkFUSU9OX05BTUVTUEFDRSArIFwiOnRpdGxlXCI7XHJcbk1hcENsaWNrLkljb24gPSBMT0NBTElaQVRJT05fTkFNRVNQQUNFICsgXCI6aWNvblwiO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgIE1hcENsaWNrLFxyXG4gICAgTWFwQ2xpY2tSZXN1bHRcclxufTtcclxuXHJcbmNvbnN0IGxvY2FsaXphdGlvbiA9IHtcclxuICAgIG5hbWVzcGFjZTogTE9DQUxJWkFUSU9OX05BTUVTUEFDRSxcclxuICAgIGRlZmF1bHRMb2NhbGl6YXRpb24gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbXBvbmVudHMsIGxvY2FsaXphdGlvbiB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsIk1hcENsaWNrQ29tcG9uZW50IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwic2luZ2xlQ2xpY2siLCJpc0FjdGl2ZSIsInByZXZDbGljayIsImN1cnJlbnRDbGljayIsImlkIiwicmVtb3ZlTWFwQ2xpY2tSZXN1bHQiLCJzaG93TWFwQ2xpY2tSZXN1bHQiLCJjb29yZGluYXRlIiwicmVuZGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsImdldFNlbGVjdG9yIiwicmVkdWNlcklkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkFkZCIsImdldEFjdGlvbkNyZWF0b3IiLCJ3aXRoTG9jYWxpemUiLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiTWFwQ2xpY2tSZXN1bHQiLCJhcmd1bWVudHMiLCJfdGhpcyRwcm9wcyIsInQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbiIsIk1hcENsaWNrIiwiZGVmYXVsdExvY2FsaXphdGlvbiIsIlRpdGxlIiwiY29tcG9uZW50cyIsImxvY2FsaXphdGlvbiIsIm5hbWVzcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=