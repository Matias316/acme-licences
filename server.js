var express = require("express")
var bodyParser = require("body-parser");
var environment = require("./config/environment.js");
var path = require('path');

var app = express();
app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./routes/index")(app);

// listen for requests
app.listen(environment.SERVER_HTTP_PORT, () => {
    console.log("Server is listening on port " + environment.SERVER_HTTP_PORT);
});

