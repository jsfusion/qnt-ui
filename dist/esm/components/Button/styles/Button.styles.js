"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@blueprintjs/core");

var _settings = require("../../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &.", "-button {\n    outline: none;\n  }\n\n  &.", "-button--primary {\n    box-shadow: inset 0 0 0 1px ", ", inset 0 -1px 0 ", ";\n  }\n  &.", "-button--success {\n    box-shadow: inset 0 0 0 1px ", ", inset 0 -1px 0 ", ";\n  }\n  &.", "-button--warning {\n    box-shadow: inset 0 0 0 1px ", ", inset 0 -1px 0 ", ";\n  }\n  &.", "-button--danger {\n    box-shadow: inset 0 0 0 1px ", ", inset 0 -1px 0 ", ";\n  }\n\n  &.", "-button--primary:hover {\n    box-shadow: inset 0 0 0 1px ", ", inset 0 -1px 0 ", ";\n  }\n  &.", "-button--success:hover {\n    box-shadow: inset 0 0 0 1px ", ", inset 0 -1px 0 ", ";\n  }\n  &.", "-button--warning:hover {\n    box-shadow: inset 0 0 0 1px ", ", inset 0 -1px 0 ", ";\n  }\n  &.", "-button--danger:hover {\n    box-shadow: inset 0 0 0 1px ", ", inset 0 -1px 0 ", ";\n  }\n\n  &.", "-button--loading {\n    cursor: wait !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ColorPrimary = _settings.theme.ColorPrimary,
    ColorSuccess = _settings.theme.ColorSuccess,
    ColorWarning = _settings.theme.ColorWarning,
    ColorDanger = _settings.theme.ColorDanger;
var StyledButton = (0, _styledComponents["default"])(_core.Button)(_templateObject(), _settings.appPrefix, _settings.appPrefix, ColorPrimary, ColorPrimary, _settings.appPrefix, ColorSuccess, ColorSuccess, _settings.appPrefix, ColorWarning, ColorWarning, _settings.appPrefix, ColorDanger, ColorDanger, _settings.appPrefix, ColorPrimary, ColorPrimary, _settings.appPrefix, ColorSuccess, ColorSuccess, _settings.appPrefix, ColorWarning, ColorWarning, _settings.appPrefix, ColorDanger, ColorDanger, _settings.appPrefix);
exports.StyledButton = StyledButton;