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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var textAlignments = {
  left: 'left',
  center: 'center',
  right: 'right'
};
var buttonTypes = {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var _cx;

  var children = _ref.children,
      customClassName = _ref.className,
      id = _ref.id,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive,
      _ref$alignText = _ref.alignText,
      alignText = _ref$alignText === void 0 ? textAlignments.center : _ref$alignText,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? false : _ref$isFullWidth,
      _ref$isLarge = _ref.isLarge,
      isLarge = _ref$isLarge === void 0 ? false : _ref$isLarge,
      _ref$isSmall = _ref.isSmall,
      isSmall = _ref$isSmall === void 0 ? false : _ref$isSmall,
      _ref$isMinimal = _ref.isMinimal,
      isMinimal = _ref$isMinimal === void 0 ? false : _ref$isMinimal,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$hasOutline = _ref.hasOutline,
      hasOutline = _ref$hasOutline === void 0 ? false : _ref$hasOutline,
      icon = _ref.icon,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? buttonTypes.button : _ref$type,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["children", "className", "id", "isActive", "alignText", "isFullWidth", "isLarge", "isSmall", "isMinimal", "isLoading", "hasOutline", "icon", "type", "onClick"]);

  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(_settings.appPrefix, "-button"), true), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {}
  }, _react.default.createElement(_Button.StyledButton, _extends({
    id: id,
    ref: ref,
    className: className,
    active: isActive,
    alignText: alignText,
    fill: isFullWidth,
    large: isLarge,
    small: isSmall,
    minimal: isMinimal,
    loading: isLoading,
    outlined: hasOutline,
    rightIcon: icon,
    type: type,
    onClick: onClick
  }, rest), _react.default.createElement("span", {
    className: "".concat(_settings.appPrefix, "-button__label")
  }, children)));
});

Button.propTypes = {
  id: _propTypes.PropTypes.string,
  isActive: _propTypes.PropTypes.bool,
  alignText: _propTypes.PropTypes.oneOf(Object.keys(textAlignments)),
  isFullWidth: _propTypes.PropTypes.bool,
  isLarge: _propTypes.PropTypes.bool,
  isSmall: _propTypes.PropTypes.bool,
  isMinimal: _propTypes.PropTypes.bool,
  isLoading: _propTypes.PropTypes.bool,
  hasOutline: _propTypes.PropTypes.bool,
  icon: _propTypes.PropTypes.string,
  type: _propTypes.PropTypes.oneOf(Object.keys(buttonTypes)),
  onClick: _propTypes.PropTypes.func
};
var _default = Button;
exports.default = _default;