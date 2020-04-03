"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _Spinner = require("./styles/Spinner.styles");

var _settings = require("../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Spinner = _react.default.forwardRef(function (_ref, ref) {
  var _cx;

  var children = _ref.children,
      customClassName = _ref.className,
      id = _ref.id,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? variants.none : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 50 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["children", "className", "id", "variant", "size"]);

  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(_settings.appPrefix, "-spinner"), true), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {}
  }, _react.default.createElement(_Spinner.StyledSpinner, _extends({
    ref: ref,
    className: className,
    intent: variant,
    size: size
  }, rest), children));
});

Spinner.propTypes = {
  id: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.number,
  variant: _propTypes.PropTypes.string
};
var _default = Spinner;
exports.default = _default;