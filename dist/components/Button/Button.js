"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _Button = require("./styles/Button.styles");

var _settings = require("../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var classPrefix = _settings.themeProps.classPrefix;
var sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};
var variants = {
  primary: 'primary',
  secondary: 'secondary'
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      id = _ref.id,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? sizes.medium : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["children", "id", "size", "variant", "isDisabled", "onClick"]);

  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {
      size: size,
      variant: variant
    }
  }, _react.default.createElement(_Button.StyledButton, _extends({
    id: id,
    ref: ref,
    className: "".concat(classPrefix, "-button"),
    disabled: isDisabled,
    variant: variant,
    onClick: onClick
  }, rest), _react.default.createElement("span", {
    className: "".concat(classPrefix, "-button__label")
  }, children)));
});

Button.propTypes = {
  id: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.oneOf(Object.keys(sizes)),
  variant: _propTypes.PropTypes.oneOf(Object.keys(variants)),
  isDisabled: _propTypes.PropTypes.bool,
  onClick: _propTypes.PropTypes.func
};
var _default = Button;
exports.default = _default;