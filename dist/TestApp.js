"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TestApp;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./components/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TestApp() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, null));
}