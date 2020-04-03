"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _LinkPreview = require("./styles/LinkPreview.styles");

var _settings = require("../../settings");

var _Spinner = _interopRequireDefault(require("../Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LinkPreview = _react.default.forwardRef(function (_ref, ref) {
  var _cx;

  var customClassName = _ref.className,
      id = _ref.id,
      url = _ref.url,
      previewNotFoundText = _ref.previewNotFoundText,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? false : _ref$isFullWidth,
      rest = _objectWithoutProperties(_ref, ["className", "id", "url", "previewNotFoundText", "isFullWidth"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      description = _useState6[0],
      setDescription = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      image = _useState8[0],
      setImage = _useState8[1];

  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(_settings.appPrefix, "-linkpreview"), true), _defineProperty(_cx, "".concat(_settings.appPrefix, "-linkpreview--loading"), loading), _defineProperty(_cx, "".concat(_settings.appPrefix, "-linkpreview--no-preview"), !image && !title && !description), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  (0, _react.useEffect)(function () {
    getLinkPreview(url);
  }, []);

  var fetchMetas = function fetchMetas(data) {
    var doc = document.implementation.createHTMLDocument('');
    doc.open();
    doc.write(data);
    doc.close();
    return doc;
  };

  var getWebsiteInfo = function getWebsiteInfo(data) {
    var doc = fetchMetas(data);
    var metas = doc.getElementsByTagName('meta');
    var info = {};

    for (var i = 0; i < metas.length; i++) {
      info[metas[i].getAttribute('property')] = metas[i].getAttribute('content');
    }

    return info;
  };

  var getLinkPreview = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(url) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              _context2.next = 3;
              return fetch(url).then(function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(response) {
                  var htmlData, info;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return response.text();

                        case 2:
                          htmlData = _context.sent;
                          info = getWebsiteInfo(htmlData);
                          setImage(info['og:image']);
                          setTitle(info['og:title']);
                          setDescription(info['og:description']);
                          setLoading(false);

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }()).catch(function () {
                setLoading(false);
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getLinkPreview(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {}
  }, _react.default.createElement(_LinkPreview.StyledLinkPreview, _extends({
    id: id,
    ref: ref,
    className: className,
    href: url,
    target: "_blank",
    isFullWidth: isFullWidth
  }, rest), loading ? _react.default.createElement(_Spinner.default, {
    size: 30
  }) : !image && !title && !description ? previewNotFoundText ? previewNotFoundText : url ? url : 'URL is required' : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "".concat(_settings.appPrefix, "-linkpreview__image")
  }, _react.default.createElement("img", {
    src: image,
    width: "100",
    height: "100",
    alt: ""
  })), _react.default.createElement("div", {
    className: "".concat(_settings.appPrefix, "-linkpreview--info__wrapper")
  }, _react.default.createElement("span", {
    className: "".concat(_settings.appPrefix, "-linkpreview__title")
  }, title), _react.default.createElement("span", {
    className: "".concat(_settings.appPrefix, "-linkpreview__description")
  }, description)))));
});

LinkPreview.propTypes = {
  id: _propTypes.PropTypes.string,
  url: _propTypes.PropTypes.string.isRequired,
  previewNotFoundText: _propTypes.PropTypes.string,
  isFullWidth: _propTypes.PropTypes.bool
};
var _default = LinkPreview;
exports.default = _default;