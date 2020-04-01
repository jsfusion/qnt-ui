"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheming = _interopRequireDefault(require("styled-theming"));

var _polished = require("polished");

var _settings = require("../../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  padding: ", ";\n  margin: 5px;\n  cursor: pointer;\n  background: ", ";\n  font-size: ", ";\n  color: ", ";\n  outline: none;\n  font-weight: bold;\n  border: ", ";\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n\n  &:hover {\n    box-shadow: 1px 1px 10px -5px #000000;\n  }\n\n  &:disabled {\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    cursor: ", ";\n\n    &:hover {\n      box-shadow: none;\n    }\n\n    .", "-button__icon {\n      color: ", ";\n    }\n  }\n\n  .", "-button__label,\n    .", "-button__icon,\n    .", "-button__spinner {\n    position: relative;\n    z-index: 2;\n  }\n\n  .", "-button__label {\n    display: inline-block;\n    height: ", ";\n    opacity: 1;\n  }\n\n  .", "-button__icon {\n    height: ", ";\n    width: ", ";\n    display: inline-block;\n    opacity: 1;\n    color: ", ";\n\n    .", "-icon {\n      vertical-align: sub;\n      padding-bottom: 2px;\n    }\n\n    &--left {\n      margin-right: ", ";\n      margin-left: -", ";\n    }\n\n    &--right {\n      margin-left: ", ";\n      margin-right: -", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _colors$primary = _settings.colors.primary,
    ColorFlamingoBase = _colors$primary.ColorFlamingoBase,
    ColorWhiteBase = _colors$primary.ColorWhiteBase;
var _colors$disable = _settings.colors.disable,
    ColorDisableBg = _colors$disable.ColorDisableBg,
    ColorDisableFg = _colors$disable.ColorDisableFg;
var Spacing2 = _settings.spacings.Spacing2,
    Spacing3 = _settings.spacings.Spacing3,
    Spacing4 = _settings.spacings.Spacing4,
    Spacing8 = _settings.spacings.Spacing8;
var padding = (0, _styledTheming.default)('size', {
  small: "".concat(Spacing2, " ").concat(Spacing3),
  medium: "".concat(Spacing3, " ").concat(Spacing4),
  large: "".concat(Spacing4, " ").concat(Spacing8)
});
var bgColor = (0, _styledTheming.default)('variant', {
  primary: ColorFlamingoBase,
  secondary: ColorWhiteBase
});
var fgColor = (0, _styledTheming.default)('variant', {
  primary: ColorWhiteBase,
  secondary: ColorFlamingoBase
});
var borderStyle = (0, _styledTheming.default)('variant', {
  primary: "2px solid ".concat(ColorFlamingoBase),
  secondary: "2px solid ".concat(ColorFlamingoBase)
});
var iconMargin = (0, _styledTheming.default)('size', {
  small: (0, _polished.rem)('6px'),
  medium: (0, _polished.rem)('8px')
});
var iconMarginNegative = (0, _styledTheming.default)('size', {
  small: (0, _polished.rem)('4px'),
  medium: (0, _polished.rem)('6px')
});
var fontSize = (0, _styledTheming.default)('size', {
  small: (0, _polished.rem)('12px'),
  medium: (0, _polished.rem)('14px')
});

var iconColor = _styledTheming.default.variants('variant', {
  primary: ColorWhiteBase,
  secondary: ColorFlamingoBase
});

var iconColorDisabled = _styledTheming.default.variants('mode', 'variant', {
  primary: ColorDisableFg,
  secondary: ColorDisableFg
});

var StyledButton = _styledComponents.default.button(_templateObject(), padding, bgColor, fontSize, fgColor, borderStyle, function (props) {
  return props.variant === 'primary' ? ColorDisableBg : ColorWhiteBase;
}, ColorDisableFg, ColorDisableBg, function (props) {
  return props.isLoading ? 'wait' : 'not-allowed';
}, _settings.appPrefix, iconColorDisabled, _settings.appPrefix, _settings.appPrefix, _settings.appPrefix, _settings.appPrefix, fontSize, _settings.appPrefix, fontSize, fontSize, iconColor, _settings.appPrefix, iconMargin, iconMarginNegative, iconMargin, iconMarginNegative);

exports.StyledButton = StyledButton;