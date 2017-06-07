'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _NotFoundPage = require('./components/Page/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AssetHelper = require('./lib/AssetHelper');

var _AssetHelper2 = _interopRequireDefault(_AssetHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();

app.set('views', _path2.default.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.use(_express2.default.static('build'));

app.get('*', function (req, res) {
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
        if (err) {
            return res.status(500).send(err.message);
        }

        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        var markup = void 0;
        if (renderProps) {
            markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
        } else {
            markup = (0, _server.renderToString)(_react2.default.createElement(_NotFoundPage2.default, null));
            res.status(404);
        }

        res.header('Cache-Control', 'max-age=60, public');

        var assetPath = new _AssetHelper2.default().assetPath();
        return res.render('layout', { markup: markup, assetPath: assetPath });
    });
});

module.exports = app;