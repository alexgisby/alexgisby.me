'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderSection = require('../Section/HeaderSection');

var _HeaderSection2 = _interopRequireDefault(_HeaderSection);

var _TagGroup = require('../Organism/TagGroup');

var _TagGroup2 = _interopRequireDefault(_TagGroup);

var _Repository = require('../../data/Repository');

var _Repository2 = _interopRequireDefault(_Repository);

var _database = require('../../../data/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPage = function (_React$Component) {
    _inherits(IndexPage, _React$Component);

    function IndexPage() {
        _classCallCheck(this, IndexPage);

        return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
    }

    _createClass(IndexPage, [{
        key: 'render',
        value: function render() {
            var repo = new _Repository2.default(_database2.default);
            var groups = repo.fetchTagsGroupedByType();

            return _react2.default.createElement(
                'div',
                { id: 'page-index' },
                _react2.default.createElement(_HeaderSection2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'skills-groups container white-text' },
                    groups.map(function (tagGroup) {
                        return _react2.default.createElement(_TagGroup2.default, { key: tagGroup.description, group: tagGroup });
                    })
                )
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;