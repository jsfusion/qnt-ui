"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _settings = require("../../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  margin: ", " 0;\n\n  &.", "-label--bold {\n    font-weight: bold;\n  }\n\n  &.", "-label--italic {\n    font-style: italic;\n  }\n\n  &.", "-label--assistive {\n    font-style: italic;\n    font-weight: ", ";\n    color: ", ";\n  }\n\n  &.", "-label--warning {\n    color: ", ";\n  }\n\n  &.", "-label--error {\n    color: ", ";\n  }\n\n  &.", "-label--success {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Spacing2 = _settings.spacings.Spacing2;
var TypographyWeightRegular = _settings.typographyWeights.TypographyWeightRegular;
var ColorJetLighter = _settings.colors.primary.ColorJetLighter,
    _colors$rag = _settings.colors.rag,
    ColorRedBase = _colors$rag.red.ColorRedBase,
    ColorAmberBase = _colors$rag.amber.ColorAmberBase,
    ColorGreenDark = _colors$rag.green.ColorGreenDark;

var StyledLabel = _styledComponents.default.label(_templateObject(), Spacing2, _settings.appPrefix, _settings.appPrefix, _settings.appPrefix, TypographyWeightRegular, ColorJetLighter, _settings.appPrefix, ColorAmberBase, _settings.appPrefix, ColorRedBase, _settings.appPrefix, ColorGreenDark);

exports.StyledLabel = StyledLabel;