'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderSection = require('../Section/HeaderSection');

var _HeaderSection2 = _interopRequireDefault(_HeaderSection);

var _Repository = require('../../data/Repository');

var _Repository2 = _interopRequireDefault(_Repository);

var _database = require('../../../data/database');

var _database2 = _interopRequireDefault(_database);

var _ProjectsList = require('../Organism/ProjectsList');

var _ProjectsList2 = _interopRequireDefault(_ProjectsList);

var _NotFoundPage = require('../Page/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagPage = function (_React$Component) {
    _inherits(TagPage, _React$Component);

    function TagPage() {
        _classCallCheck(this, TagPage);

        return _possibleConstructorReturn(this, (TagPage.__proto__ || Object.getPrototypeOf(TagPage)).apply(this, arguments));
    }

    _createClass(TagPage, [{
        key: 'render',
        value: function render() {
            var repo = new _Repository2.default(_database2.default);

            var tagKey = this.props.params.tag;
            var tag = repo.fetchTagByUrlKey(tagKey);

            if (!tag) {
                return _react2.default.createElement(_NotFoundPage2.default, null);
            }

            var projects = repo.fetchProjectsForTag(tag);

            return _react2.default.createElement(
                'div',
                { id: 'page-tag' },
                _react2.default.createElement(_HeaderSection2.default, { size: 'small' }),
                _react2.default.createElement(
                    'div',
                    { className: 'tag-details container white-text' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        tag.getName()
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        tag.getDescription()
                    ),
                    _react2.default.createElement(_ProjectsList2.default, { projects: projects })
                )
            );
        }
    }]);

    return TagPage;
}(_react2.default.Component);

exports.default = TagPage;