"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _Heading = require("./styles/Heading.styles");

var _settings = require("../../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var types = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

var Heading = _react["default"].forwardRef(function (_ref, ref) {
  var _cx;

  var children = _ref.children,
      customClassName = _ref.className,
      id = _ref.id,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? types.h3 : _ref$type,
      _ref$isItalic = _ref.isItalic,
      isItalic = _ref$isItalic === void 0 ? false : _ref$isItalic,
      _ref$isAssistive = _ref.isAssistive,
      isAssistive = _ref$isAssistive === void 0 ? false : _ref$isAssistive,
      rest = _objectWithoutProperties(_ref, ["children", "className", "id", "type", "isItalic", "isAssistive"]);

  var className = (0, _classnames["default"])((_cx = {}, _defineProperty(_cx, "".concat(_settings.appPrefix, "-heading-").concat(type), true), _defineProperty(_cx, "".concat(_settings.appPrefix, "-heading--italic"), isItalic), _defineProperty(_cx, "".concat(_settings.appPrefix, "-heading--assistive"), isAssistive), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: {
      type: type
    }
  }, type === types.h1 && _react["default"].createElement(_Heading.StyledHeading1, _extends({
    id: id,
    className: className,
    ref: ref
  }, rest), children), type === types.h2 && _react["default"].createElement(_Heading.StyledHeading2, _extends({
    id: id,
    className: className,
    ref: ref
  }, rest), children), type === types.h3 && _react["default"].createElement(_Heading.StyledHeading3, _extends({
    id: id,
    className: className,
    ref: ref
  }, rest), children), type === types.h4 && _react["default"].createElement(_Heading.StyledHeading4, _extends({
    id: id,
    className: className,
    ref: ref
  }, rest), children), type === types.h5 && _react["default"].createElement(_Heading.StyledHeading5, _extends({
    id: id,
    className: className,
    ref: ref
  }, rest), children), type === types.h6 && _react["default"].createElement(_Heading.StyledHeading6, _extends({
    id: id,
    className: className,
    ref: ref
  }, rest), children));
});

Heading.propTypes = {
  id: _propTypes.PropTypes.string,
  type: _propTypes.PropTypes.oneOf(Object.keys(types)),
  isItalic: _propTypes.PropTypes.bool,
  isAssistive: _propTypes.PropTypes.bool
};
var _default = Heading;
exports["default"] = _default;