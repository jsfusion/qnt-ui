"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("./styles/Button.styles");

var _settings = require("../../settings");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};
var variants = {
  primary: 'primary',
  secondary: 'secondary'
};
var iconSizes = {
  small: 12,
  medium: 14,
  large: 16
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var _cx;

  var children = _ref.children,
      customClassName = _ref.className,
      id = _ref.id,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? sizes.medium : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["children", "className", "id", "size", "variant", "isDisabled", "isLoading", "iconLeft", "iconRight", "onClick"]);

  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(_settings.appPrefix, "-button"), true), _defineProperty(_cx, "".concat(_settings.appPrefix, "-button--loading"), isLoading), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  var iconSize = iconSizes[size] || size;
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {
      size: size,
      variant: variant
    }
  }, _react.default.createElement(_Button.StyledButton, _extends({
    id: id,
    ref: ref,
    className: className,
    disabled: isDisabled || isLoading,
    "aria-disabled": isDisabled || isLoading,
    isLoading: isLoading,
    variant: variant,
    onClick: onClick
  }, rest), iconLeft && _react.default.createElement("span", {
    className: "".concat(_settings.appPrefix, "-button__icon ").concat(_settings.appPrefix, "-button__icon--left")
  }, _react.default.createElement(_Icon.default, {
    icon: iconLeft,
    size: iconSize
  })), _react.default.createElement("span", {
    className: "".concat(_settings.appPrefix, "-button__label")
  }, children), iconRight && _react.default.createElement("span", {
    className: "".concat(_settings.appPrefix, "-button__icon ").concat(_settings.appPrefix, "-button__icon--right")
  }, _react.default.createElement(_Icon.default, {
    icon: iconRight,
    size: iconSize
  }))));
});

Button.propTypes = {
  id: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.oneOf(Object.keys(sizes)),
  variant: _propTypes.PropTypes.oneOf(Object.keys(variants)),
  isDisabled: _propTypes.PropTypes.bool,
  isLoading: _propTypes.PropTypes.bool,
  iconLeft: _propTypes.PropTypes.string,
  iconRight: _propTypes.PropTypes.string,
  onClick: _propTypes.PropTypes.func
};
var _default = Button;
exports.default = _default;