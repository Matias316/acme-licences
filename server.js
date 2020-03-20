const app = require("./app");
const environment = require('./config/environment.js');

// listen for requests
app.listen(environment.SERVER_HTTP_PORT, () => {
    console.log("Server is listening in port:" + environment.SERVER_HTTP_PORT);
});

