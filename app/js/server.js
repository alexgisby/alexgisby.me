import path from 'path';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from './routes';

const app = new Express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.use(Express.static('build'));

app.get('*', (req, res) => {
    match(
        {routes, location: req.url},
        (err, redirectLocation, renderProps) => {
            if (err) {
                return res.status(500).send(err.message);
            }

            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            let markup;
            if (renderProps) {
                markup = renderToString(<RouterContext {...renderProps}/>)
            } else {
                // markup = renderToString(<NotFoundPage/>);
                res.status(404);
            }

            return res.render('layout', {markup});
        }
    )
});

module.exports = app;
