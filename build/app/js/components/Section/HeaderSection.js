'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _SocialLinks = require('../Organism/SocialLinks');

var _SocialLinks2 = _interopRequireDefault(_SocialLinks);

var _SocialLink = require('../Molecule/SocialLink');

var _SocialLink2 = _interopRequireDefault(_SocialLink);

var _AssetHelper = require('../../lib/AssetHelper');

var _AssetHelper2 = _interopRequireDefault(_AssetHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderSection = function (_React$Component) {
    _inherits(HeaderSection, _React$Component);

    function HeaderSection() {
        _classCallCheck(this, HeaderSection);

        return _possibleConstructorReturn(this, (HeaderSection.__proto__ || Object.getPrototypeOf(HeaderSection)).apply(this, arguments));
    }

    _createClass(HeaderSection, [{
        key: 'render',
        value: function render() {
            var assets = new _AssetHelper2.default();
            var size = this.props.size || 'large';

            if (size === 'small') {
                return _react2.default.createElement(
                    'header',
                    { className: 'blue-grey darken-3 white-text size-small' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col s1 m1 vertical' },
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/', className: 'white-text' },
                                    _react2.default.createElement('i', { className: 'fa fa-arrow-left jumbo' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col s11 m6' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'title-avatar' },
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/', className: 'white-text' },
                                        _react2.default.createElement('img', { className: 'circle avatar', src: assets.assetPath() + '/img/profile.jpg' }),
                                        _react2.default.createElement(
                                            'h1',
                                            null,
                                            'Alex Gisby'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Principal Web Developer and Tech Lead'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col s12 m5 vertical' },
                                _react2.default.createElement(
                                    _SocialLinks2.default,
                                    null,
                                    _react2.default.createElement(_SocialLink2.default, { key: 'github', link: 'https://github.com/alexgisby', icon: 'github',
                                        title: 'View my code on GitHub' }),
                                    _react2.default.createElement(_SocialLink2.default, { key: 'linkedin', link: 'https://www.linkedin.com/in/alexgisby/', icon: 'linkedin',
                                        title: 'See my work experience on LinkedIn' }),
                                    _react2.default.createElement(_SocialLink2.default, { key: 'medium', link: 'https://medium.com/@alexgisby', icon: 'medium',
                                        title: 'Read my writings on Medium' }),
                                    _react2.default.createElement(_SocialLink2.default, { key: 'twitter', link: 'https://twitter.com/alexgisby', icon: 'twitter',
                                        title: 'Follow me on Twitter' })
                                )
                            )
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    'header',
                    { className: 'blue-grey darken-3 white-text size-large' },
                    _react2.default.createElement(
                        'div',
                        { className: 'title-avatar container' },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/', className: 'white-text' },
                            _react2.default.createElement('img', { className: 'circle avatar', src: assets.assetPath() + '/img/profile.jpg' }),
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Alex Gisby'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Principal Web Developer and Tech Lead'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _SocialLinks2.default,
                        null,
                        _react2.default.createElement(_SocialLink2.default, { key: 'github', link: 'https://github.com/alexgisby', icon: 'github',
                            title: 'View my code on GitHub' }),
                        _react2.default.createElement(_SocialLink2.default, { key: 'linkedin', link: 'https://www.linkedin.com/in/alexgisby/', icon: 'linkedin',
                            title: 'See my work experience on LinkedIn' }),
                        _react2.default.createElement(_SocialLink2.default, { key: 'medium', link: 'https://medium.com/@alexgisby', icon: 'medium',
                            title: 'Read my writings on Medium' }),
                        _react2.default.createElement(_SocialLink2.default, { key: 'twitter', link: 'https://twitter.com/alexgisby', icon: 'twitter',
                            title: 'Follow me on Twitter' })
                    )
                );
            }
        }
    }]);

    return HeaderSection;
}(_react2.default.Component);

exports.default = HeaderSection;