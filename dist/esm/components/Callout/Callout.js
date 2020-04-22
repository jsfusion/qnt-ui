"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _Callout = require("./styles/Callout.styles");

var _settings = require("../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variants = {
  none: 'none',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger'
};

var Callout = _react["default"].forwardRef(function (_ref, ref) {
  var _cx;

  var children = _ref.children,
      customClassName = _ref.className,
      id = _ref.id,
      icon = _ref.icon,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? variants.none : _ref$variant,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["children", "className", "id", "icon", "variant", "title"]);

  var className = (0, _classnames["default"])((_cx = {}, _defineProperty(_cx, "".concat(_settings.appPrefix, "-callout"), true), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: {}
  }, _react["default"].createElement(_Callout.StyledCallout, _extends({
    id: id,
    ref: ref,
    className: className,
    intent: variant,
    icon: icon,
    title: title
  }, rest), children));
});

Callout.propTypes = {
  id: _propTypes.PropTypes.string,
  icon: _propTypes.PropTypes.string,
  variant: _propTypes.PropTypes.oneOf(Object.keys(variants)),
  title: _propTypes.PropTypes.string
};
var _default = Callout;
exports["default"] = _default;