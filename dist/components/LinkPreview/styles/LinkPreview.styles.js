"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinkPreview = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _settings = require("../../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100px;\n  width: 100%;\n  max-width: ", ";\n  background: ", ";\n  border-radius: 5px;\n  color: ", ";\n  text-decoration: none;\n\n  :hover {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  &.", "-linkpreview--loading {\n    justify-content: center;\n    align-items: center;\n  }\n\n  &.", "-linkpreview--no-preview {\n    justify-content: center;\n    align-items: center;\n    font-size: ", ";\n    color: ", ";\n    background: ", ";\n    word-break: break-all;\n    padding: 10px;\n  }\n\n  .", "-linkpreview__image {\n    height: 100px;\n    width: 100px;\n    min-width: 100px;\n    background: url(https://via.placeholder.com/100x100.png?text=!);\n\n    & img {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px;\n    }\n  }\n\n  .", "-linkpreview--info__wrapper {\n    & .", "-linkpreview__title {\n      padding: 3px 5px 0 5px;\n      font-size: ", ";\n      font-weight: ", ";\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n    }\n\n    & .", "-linkpreview__description {\n      padding: 2px 5px 0 5px;\n      font-size: ", ";\n      color: ", ";\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ColorLightGray30L = _settings.theme.ColorLightGray30L,
    ColorDarkGray20L = _settings.theme.ColorDarkGray20L,
    ColorDisabledBackground = _settings.theme.ColorDisabledBackground,
    ColorDisabled = _settings.theme.ColorDisabled,
    ColorHeading = _settings.theme.ColorHeading,
    TypographySize2 = _settings.theme.TypographySize2,
    TypographySize3 = _settings.theme.TypographySize3,
    TypographyWeightBold = _settings.theme.TypographyWeightBold;

var StyledLinkPreview = _styledComponents.default.a(_templateObject(), function (props) {
  return !props.isFullWidth && '400px';
}, ColorLightGray30L, ColorHeading, ColorHeading, _settings.appPrefix, _settings.appPrefix, TypographySize3, ColorDisabled, ColorDisabledBackground, _settings.appPrefix, _settings.appPrefix, _settings.appPrefix, TypographySize3, TypographyWeightBold, _settings.appPrefix, TypographySize2, ColorDarkGray20L);

exports.StyledLinkPreview = StyledLinkPreview;