'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderSection = require('./Section/HeaderSection');

var _HeaderSection2 = _interopRequireDefault(_HeaderSection);

var _FooterSection = require('./Section/FooterSection');

var _FooterSection2 = _interopRequireDefault(_FooterSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutSmaller = function (_React$Component) {
    _inherits(LayoutSmaller, _React$Component);

    function LayoutSmaller() {
        _classCallCheck(this, LayoutSmaller);

        return _possibleConstructorReturn(this, (LayoutSmaller.__proto__ || Object.getPrototypeOf(LayoutSmaller)).apply(this, arguments));
    }

    _createClass(LayoutSmaller, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'application-container' },
                _react2.default.createElement(_HeaderSection2.default, null),
                this.props.children,
                _react2.default.createElement(_FooterSection2.default, null)
            );
        }
    }]);

    return LayoutSmaller;
}(_react2.default.Component);

exports.default = LayoutSmaller;