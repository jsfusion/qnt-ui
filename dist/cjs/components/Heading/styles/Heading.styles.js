"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHeading6 = exports.StyledHeading5 = exports.StyledHeading4 = exports.StyledHeading3 = exports.StyledHeading2 = exports.StyledHeading1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _settings = require("../../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SizeH1 = _settings.theme.SizeH1,
    SizeH2 = _settings.theme.SizeH2,
    SizeH3 = _settings.theme.SizeH3,
    SizeH4 = _settings.theme.SizeH4,
    SizeH5 = _settings.theme.SizeH5,
    SizeH6 = _settings.theme.SizeH6,
    TypographyWeightRegular = _settings.theme.TypographyWeightRegular,
    ColorTextMuted = _settings.theme.ColorTextMuted,
    ColorHeading = _settings.theme.ColorHeading;

var styleHeading = function styleHeading(fontSize) {
  return "\n  font-size: ".concat(fontSize, ";\n  color: ").concat(ColorHeading, ";\n\n  &.").concat(_settings.appPrefix, "-heading--italic {\n    font-style: italic;\n  }\n\n  &.").concat(_settings.appPrefix, "-heading--assistive {\n    font-style: italic;\n    font-weight: ").concat(TypographyWeightRegular, ";\n    color: ").concat(ColorTextMuted, ";\n  }\n");
};

var StyledHeading1 = _styledComponents.default.h1(_templateObject(), styleHeading(SizeH1));

exports.StyledHeading1 = StyledHeading1;

var StyledHeading2 = _styledComponents.default.h2(_templateObject2(), styleHeading(SizeH2));

exports.StyledHeading2 = StyledHeading2;

var StyledHeading3 = _styledComponents.default.h3(_templateObject3(), styleHeading(SizeH3));

exports.StyledHeading3 = StyledHeading3;

var StyledHeading4 = _styledComponents.default.h4(_templateObject4(), styleHeading(SizeH4));

exports.StyledHeading4 = StyledHeading4;

var StyledHeading5 = _styledComponents.default.h5(_templateObject5(), styleHeading(SizeH5));

exports.StyledHeading5 = StyledHeading5;

var StyledHeading6 = _styledComponents.default.h6(_templateObject6(), styleHeading(SizeH6));

exports.StyledHeading6 = StyledHeading6;