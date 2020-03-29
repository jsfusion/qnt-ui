"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHeading6 = exports.StyledHeading5 = exports.StyledHeading4 = exports.StyledHeading3 = exports.StyledHeading2 = exports.StyledHeading1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheming = _interopRequireDefault(require("styled-theming"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var margin = (0, _styledTheming.default)('type', {
  h1: "".concat((0, _polished.rem)('20px'), " ").concat((0, _polished.rem)('0px')),
  h2: "".concat((0, _polished.rem)('18px'), " ").concat((0, _polished.rem)('0px')),
  h3: "".concat((0, _polished.rem)('16px'), " ").concat((0, _polished.rem)('0px')),
  h4: "".concat((0, _polished.rem)('12px'), " ").concat((0, _polished.rem)('0px')),
  h5: "".concat((0, _polished.rem)('8px'), " ").concat((0, _polished.rem)('0px')),
  h6: "".concat((0, _polished.rem)('4px'), " ").concat((0, _polished.rem)('0px'))
});

var StyledHeading1 = _styledComponents.default.h1(_templateObject(), margin);

exports.StyledHeading1 = StyledHeading1;

var StyledHeading2 = _styledComponents.default.h2(_templateObject2(), margin);

exports.StyledHeading2 = StyledHeading2;

var StyledHeading3 = _styledComponents.default.h3(_templateObject3(), margin);

exports.StyledHeading3 = StyledHeading3;

var StyledHeading4 = _styledComponents.default.h4(_templateObject4(), margin);

exports.StyledHeading4 = StyledHeading4;

var StyledHeading5 = _styledComponents.default.h5(_templateObject5(), margin);

exports.StyledHeading5 = StyledHeading5;

var StyledHeading6 = _styledComponents.default.h6(_templateObject6(), margin);

exports.StyledHeading6 = StyledHeading6;