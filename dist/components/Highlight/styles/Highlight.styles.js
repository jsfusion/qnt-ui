"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHighlight = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _settings = require("../../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  padding: 0 2px;\n\n  &.", "-highlight--bold {\n    font-weight: bold;\n  }\n\n  &.", "-highlight--italic {\n    font-style: italic;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHighlight = _styledComponents.default.span(_templateObject(), function (props) {
  return props.highlightColor;
}, function (props) {
  return props.color;
}, _settings.appPrefix, _settings.appPrefix);

exports.StyledHighlight = StyledHighlight;