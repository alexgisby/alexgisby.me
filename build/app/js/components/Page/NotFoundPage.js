'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderSection = require('../Section/HeaderSection');

var _HeaderSection2 = _interopRequireDefault(_HeaderSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundPage = function (_React$Component) {
    _inherits(NotFoundPage, _React$Component);

    function NotFoundPage() {
        _classCallCheck(this, NotFoundPage);

        return _possibleConstructorReturn(this, (NotFoundPage.__proto__ || Object.getPrototypeOf(NotFoundPage)).apply(this, arguments));
    }

    _createClass(NotFoundPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'page-missing' },
                _react2.default.createElement(_HeaderSection2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'center-align white-text' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        '404 Not Found'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'I suppose I should put something witty here...'
                    )
                )
            );
        }
    }]);

    return NotFoundPage;
}(_react2.default.Component);

exports.default = NotFoundPage;