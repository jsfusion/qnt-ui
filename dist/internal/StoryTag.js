"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _settings = require("../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  overflow: hidden;\n  color: ", ";\n  border: 1px solid\n    ", ";\n  border-radius: 5px;\n  background: ", ";\n  padding-left: 8px;\n  font-size: 12px;\n  vertical-align: middle;\n  line-height: 1;\n  font-weight: bold;\n  margin: 0 8px 16px 0;\n  position: relative;\n  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  text-decoration: none;\n\n  span {\n    display: inline-block;\n    padding: 4px 8px;\n    font-weight: 400;\n    margin-left: 8px;\n    color: ", ";\n    background: ", ";\n  }\n\n  &:hover {\n    pointer-events: ", ";\n    background: ", ";\n    border-color: ", ";\n    text-decoration: none;\n    color: ", ";\n\n    span {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ColorPrimary = _settings.theme.ColorPrimary,
    ColorSuccess = _settings.theme.ColorSuccess,
    ColorDanger = _settings.theme.ColorDanger,
    ColorWhite = _settings.theme.ColorWhite,
    ColorBlack = _settings.theme.ColorBlack;

var StyledStoryTag = _styledComponents.default.div(_templateObject(), ColorWhite, function (props) {
  return props.isWarning ? ColorDanger : props.isActive ? ColorSuccess : ColorPrimary;
}, function (props) {
  return props.isWarning ? ColorDanger : props.isActive ? ColorSuccess : ColorPrimary;
}, ColorBlack, ColorWhite, function (props) {
  return props.isWarning || props.isActive ? 'none' : 'normal';
}, function (props) {
  return props.isWarning ? ColorDanger : props.isActive ? ColorSuccess : ColorPrimary;
}, function (props) {
  return props.isWarning ? ColorDanger : props.isActive ? ColorSuccess : ColorPrimary;
}, ColorWhite, ColorBlack);

var StoryTag = function StoryTag(_ref) {
  var link = _ref.link,
      title = _ref.title,
      children = _ref.children,
      isWarning = _ref.isWarning,
      isActive = _ref.isActive;
  return _react.default.createElement(StyledStoryTag, {
    as: link && 'a',
    href: link,
    target: "_blank",
    isWarning: isWarning,
    isActive: isActive
  }, title, _react.default.createElement("span", null, children));
};

var _default = StoryTag;
exports.default = _default;