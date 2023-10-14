"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _default({
  children
}) {
  return /*#__PURE__*/_react.default.createElement("dialog", {
    height: 500,
    width: 500
  }, children);
}