const app = require('express')();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', routes);

module.exports = app


