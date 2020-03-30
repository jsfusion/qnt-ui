"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHeading6 = exports.StyledHeading5 = exports.StyledHeading4 = exports.StyledHeading3 = exports.StyledHeading2 = exports.StyledHeading1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheming = _interopRequireDefault(require("styled-theming"));

var _settings = require("../../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n  font-size: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n  font-size: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n  font-size: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n  font-size: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n  font-size: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var spacing1 = _settings.spacings.spacing1,
    spacing2 = _settings.spacings.spacing2,
    spacing3 = _settings.spacings.spacing3,
    spacing4 = _settings.spacings.spacing4;
var h1 = _settings.fontSizes.h1,
    h2 = _settings.fontSizes.h2,
    h3 = _settings.fontSizes.h3,
    h4 = _settings.fontSizes.h4,
    h5 = _settings.fontSizes.h5,
    h6 = _settings.fontSizes.h6;
var margin = (0, _styledTheming.default)('type', {
  h1: "".concat(spacing4, " 0"),
  h2: "".concat(spacing4, " 0"),
  h3: "".concat(spacing3, " 0"),
  h4: "".concat(spacing3, " 0"),
  h5: "".concat(spacing2, " 0"),
  h6: "".concat(spacing1, " 0")
});

var StyledHeading1 = _styledComponents.default.h1(_templateObject(), margin, h1);

exports.StyledHeading1 = StyledHeading1;

var StyledHeading2 = _styledComponents.default.h2(_templateObject2(), margin, h2);

exports.StyledHeading2 = StyledHeading2;

var StyledHeading3 = _styledComponents.default.h3(_templateObject3(), margin, h3);

exports.StyledHeading3 = StyledHeading3;

var StyledHeading4 = _styledComponents.default.h4(_templateObject4(), margin, h4);

exports.StyledHeading4 = StyledHeading4;

var StyledHeading5 = _styledComponents.default.h5(_templateObject5(), margin, h5);

exports.StyledHeading5 = StyledHeading5;

var StyledHeading6 = _styledComponents.default.h6(_templateObject6(), margin, h6);

exports.StyledHeading6 = StyledHeading6;