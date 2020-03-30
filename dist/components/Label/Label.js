"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _settings = require("../../settings");

var _Label = require("./styles/Label.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var classPrefix = _settings.themeProps.classPrefix;
var fontWeights = {
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
  900: '900',
  bold: 'bold',
  bolder: 'bolder'
};

var Label = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      id = _ref.id,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? '100' : _ref$fontWeight,
      _ref$isItalic = _ref.isItalic,
      isItalic = _ref$isItalic === void 0 ? false : _ref$isItalic,
      rest = _objectWithoutProperties(_ref, ["children", "id", "fontWeight", "isItalic"]);

  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {}
  }, _react.default.createElement(_Label.StyledLabel, _extends({
    id: id,
    ref: ref,
    className: "".concat(classPrefix, "-label"),
    fontWeight: fontWeight,
    isItalic: isItalic
  }, rest), children));
});

Label.propTypes = {
  id: _propTypes.PropTypes.string,
  fontWeight: _propTypes.PropTypes.oneOf(Object.keys(fontWeights)),
  isItalic: _propTypes.PropTypes.bool
};
var _default = Label;
exports.default = _default;