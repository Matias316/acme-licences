const app = require('express')();
const bodyParser = require('body-parser');
const environment = require('./config/environment.js');
const path = require('path');
const routes = require('./routes');

app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', routes);

// listen for requests
app.listen(environment.SERVER_HTTP_PORT, () => {
    console.log("Server is listening on port " + environment.SERVER_HTTP_PORT);
});

