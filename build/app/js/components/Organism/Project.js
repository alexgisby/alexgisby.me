'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TagList = require('./TagList');

var _TagList2 = _interopRequireDefault(_TagList);

var _ExternalLink = require('../Molecule/ExternalLink');

var _ExternalLink2 = _interopRequireDefault(_ExternalLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project() {
        _classCallCheck(this, Project);

        return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
    }

    _createClass(Project, [{
        key: 'render',
        value: function render() {
            var project = this.props.project;
            return _react2.default.createElement(
                'div',
                { className: 'project' },
                _react2.default.createElement(
                    'h4',
                    null,
                    project.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col m4' },
                        _react2.default.createElement(
                            'div',
                            { className: 'center-align project-icon' },
                            _react2.default.createElement('i', { className: 'jumbo fa fa-' + project.icon })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'project-dates center-align' },
                            project.dates.start && project.dates.start + ' - ',
                            project.dates.end
                        ),
                        project.externalLinks.length > 0 && _react2.default.createElement(
                            'ul',
                            { className: 'external-links browser-default' },
                            project.externalLinks.map(function (link) {
                                return _react2.default.createElement(
                                    'li',
                                    { key: link.url },
                                    _react2.default.createElement(_ExternalLink2.default, { url: link.url, title: link.title })
                                );
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col m8' },
                        _react2.default.createElement(
                            'p',
                            null,
                            project.description
                        ),
                        _react2.default.createElement(_TagList2.default, { tags: project.tags })
                    )
                ),
                _react2.default.createElement('hr', null)
            );
        }
    }]);

    return Project;
}(_react2.default.Component);

exports.default = Project;