"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
var wrapper;
var props = {
  id: 'test_spinner_id'
};
describe('***--- Spinner Component ---***', function () {
  beforeAll(function () {
    wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, props));
  });
  it('To match snapshot of Spinner component', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(done) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              expect(wrapper).toMatchSnapshot();
              done();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});