"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../settings");

var _Label = require("./styles/Label.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = _react.default.forwardRef(function (_ref, ref) {
  var _cx;

  var children = _ref.children,
      customClassName = _ref.className,
      id = _ref.id,
      _ref$isBold = _ref.isBold,
      isBold = _ref$isBold === void 0 ? false : _ref$isBold,
      _ref$isItalic = _ref.isItalic,
      isItalic = _ref$isItalic === void 0 ? false : _ref$isItalic,
      _ref$isAssistive = _ref.isAssistive,
      isAssistive = _ref$isAssistive === void 0 ? false : _ref$isAssistive,
      _ref$isWarning = _ref.isWarning,
      isWarning = _ref$isWarning === void 0 ? false : _ref$isWarning,
      _ref$isError = _ref.isError,
      isError = _ref$isError === void 0 ? false : _ref$isError,
      _ref$isSuccess = _ref.isSuccess,
      isSuccess = _ref$isSuccess === void 0 ? false : _ref$isSuccess,
      rest = _objectWithoutProperties(_ref, ["children", "className", "id", "isBold", "isItalic", "isAssistive", "isWarning", "isError", "isSuccess"]);

  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(_settings.appPrefix, "-label"), true), _defineProperty(_cx, "".concat(_settings.appPrefix, "-label--bold"), isBold), _defineProperty(_cx, "".concat(_settings.appPrefix, "-label--italic"), isItalic), _defineProperty(_cx, "".concat(_settings.appPrefix, "-label--assistive"), isAssistive), _defineProperty(_cx, "".concat(_settings.appPrefix, "-label--warning"), isWarning), _defineProperty(_cx, "".concat(_settings.appPrefix, "-label--error"), isError), _defineProperty(_cx, "".concat(_settings.appPrefix, "-label--success"), isSuccess), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {}
  }, _react.default.createElement(_Label.StyledLabel, _extends({
    id: id,
    ref: ref,
    className: className
  }, rest), children));
});

Label.propTypes = {
  id: _propTypes.PropTypes.string,
  isBold: _propTypes.PropTypes.bool,
  isItalic: _propTypes.PropTypes.bool,
  isAssistive: _propTypes.PropTypes.bool,
  isWarning: _propTypes.PropTypes.bool,
  isError: _propTypes.PropTypes.bool,
  isSuccess: _propTypes.PropTypes.bool
};
var _default = Label;
exports.default = _default;