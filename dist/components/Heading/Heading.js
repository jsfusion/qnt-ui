"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _Heading = require("./styles/Heading.styles");

var _settings = require("../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var classPrefix = _settings.themeProps.classPrefix;
var types = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

var Heading = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      id = _ref.id,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? types.h3 : _ref$type,
      rest = _objectWithoutProperties(_ref, ["children", "id", "type"]);

  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {
      type: type
    }
  }, type === types.h1 && _react.default.createElement(_Heading.StyledHeading1, _extends({
    id: id,
    className: "".concat(classPrefix, "-heading-h1"),
    ref: ref
  }, rest), children), type === types.h2 && _react.default.createElement(_Heading.StyledHeading2, _extends({
    id: id,
    className: "".concat(classPrefix, "-heading-h2"),
    ref: ref
  }, rest), children), type === types.h3 && _react.default.createElement(_Heading.StyledHeading3, _extends({
    id: id,
    className: "".concat(classPrefix, "-heading-h3"),
    ref: ref
  }, rest), children), type === types.h4 && _react.default.createElement(_Heading.StyledHeading4, _extends({
    id: id,
    className: "".concat(classPrefix, "-heading-h4"),
    ref: ref
  }, rest), children), type === types.h5 && _react.default.createElement(_Heading.StyledHeading5, _extends({
    id: id,
    className: "".concat(classPrefix, "-heading-h5"),
    ref: ref
  }, rest), children), type === types.h6 && _react.default.createElement(_Heading.StyledHeading6, _extends({
    id: id,
    className: "".concat(classPrefix, "-heading-h6"),
    ref: ref
  }, rest), children));
});

Heading.propTypes = {
  id: _propTypes.PropTypes.string,
  type: _propTypes.PropTypes.oneOf(Object.keys(types))
};
var _default = Heading;
exports.default = _default;