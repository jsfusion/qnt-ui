"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTheming = _interopRequireDefault(require("styled-theming"));

var _polished = require("polished");

var _settings = require("../../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n\n    :hover {\n      box-shadow: none;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  margin: 5px;\n  cursor: pointer;\n  background: ", ";\n  color: ", ";\n  outline: none;\n  font-weight: bold;\n  border: ", ";\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n\n  :hover {\n    box-shadow: 1px 1px 10px -5px #000000;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var primaryColor = _settings.themeProps.primaryColor,
    secondaryColor = _settings.themeProps.secondaryColor,
    disabledColor = _settings.themeProps.disabledColor,
    primaryFontColor = _settings.themeProps.primaryFontColor,
    secondaryFontColor = _settings.themeProps.secondaryFontColor,
    disabledFontColor = _settings.themeProps.disabledFontColor;
var padding = (0, _styledTheming.default)('size', {
  small: "".concat((0, _polished.rem)('6px'), " ").concat((0, _polished.rem)('12px')),
  medium: "".concat((0, _polished.rem)('8px'), " ").concat((0, _polished.rem)('20px')),
  large: "".concat((0, _polished.rem)('12px'), " ").concat((0, _polished.rem)('30px'))
});
var bgColor = (0, _styledTheming.default)('variant', {
  primary: primaryColor,
  secondary: secondaryColor
});
var fgColor = (0, _styledTheming.default)('variant', {
  primary: primaryFontColor,
  secondary: secondaryFontColor
});
var borderStyle = (0, _styledTheming.default)('variant', {
  primary: "2px solid ".concat(primaryColor),
  secondary: "2px solid ".concat(primaryColor)
});

var StyledButton = _styledComponents.default.button(_templateObject(), padding, bgColor, fgColor, borderStyle, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject2(), props.variant === 'primary' ? disabledColor : secondaryColor, props.variant === 'primary' ? disabledFontColor : disabledColor, disabledColor);
});

exports.StyledButton = StyledButton;