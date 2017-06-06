'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TagList = require('./TagList');

var _TagList2 = _interopRequireDefault(_TagList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagGroup = function (_React$Component) {
    _inherits(TagGroup, _React$Component);

    function TagGroup() {
        _classCallCheck(this, TagGroup);

        return _possibleConstructorReturn(this, (TagGroup.__proto__ || Object.getPrototypeOf(TagGroup)).apply(this, arguments));
    }

    _createClass(TagGroup, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'skills-group row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col s3' },
                    _react2.default.createElement(
                        'h2',
                        { className: 'blue-grey-text text-lighten-4' },
                        this.props.group.getDescription()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col s9' },
                    _react2.default.createElement(_TagList2.default, { tags: this.props.group.tags })
                )
            );
        }
    }]);

    return TagGroup;
}(_react2.default.Component);

exports.default = TagGroup;