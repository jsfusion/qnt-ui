"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSearchInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@blueprintjs/core");

var _settings = require("../../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  background: transparent;\n  max-width: 340px;\n  width: 100%;\n  height: '36px';\n\n  input[type='search'] {\n    border-radius: 5px;\n  }\n\n  input[type='search']:focus {\n    box-shadow: 1px 1px 5px -2px ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ColorBlack = _settings.theme.ColorBlack;
var StyledSearchInput = (0, _styledComponents["default"])(_core.InputGroup)(_templateObject(), ColorBlack);
exports.StyledSearchInput = StyledSearchInput;