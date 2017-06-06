"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterSection = function (_React$Component) {
    _inherits(FooterSection, _React$Component);

    function FooterSection() {
        _classCallCheck(this, FooterSection);

        return _possibleConstructorReturn(this, (FooterSection.__proto__ || Object.getPrototypeOf(FooterSection)).apply(this, arguments));
    }

    _createClass(FooterSection, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "footer",
                { className: "page-footer blue-grey lighten-2 white-text" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col l8 s12" },
                            _react2.default.createElement(
                                "h5",
                                null,
                                _react2.default.createElement("i", { className: "fa fa-paper-plane-o" }),
                                " Say Hi!"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "grey-text text-lighten-4" },
                                "I'm looking for my next opportunity! I'm available from September 2017, get in touch if you've got something awesome to share!"
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "I ",
                                    _react2.default.createElement(
                                        "u",
                                        null,
                                        "do not"
                                    ),
                                    " reply to \"I have a client...\" emails. Contact me directly, name the company or gtfo!"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col l4 s12" },
                            _react2.default.createElement(
                                "ul",
                                { className: "right-align" },
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "mailto:alex@solution10.com", className: "white-text" },
                                        "alex@solution10.com ",
                                        _react2.default.createElement("i", { className: "fa fa-envelope" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "https://twitter.com/alexgisby", className: "white-text" },
                                        "@alexgisby ",
                                        _react2.default.createElement("i", { className: "fa fa-twitter" })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "footer-copyright" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        "\xA9 2017 Alex Gisby"
                    )
                )
            );
        }
    }]);

    return FooterSection;
}(_react2.default.Component);

exports.default = FooterSection;