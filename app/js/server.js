const express = require('express');
const path = require('path');

const app = new express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.use(express.static('build'));

app.get('/', (req, res) => {
    res.render('layout')
});

module.exports = app;
