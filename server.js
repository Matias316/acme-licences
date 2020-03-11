var express = require("express")
var bodyParser = require("body-parser");
var environment = require("./config/environment.js");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require("./routes/index")(app);

// listen for requests
app.listen(environment.SERVER_HTTP_PORT, () => {
    console.log("Server is listening on port " + environment.SERVER_HTTP_PORT);
});

