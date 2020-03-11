const trackController = require("../controllers").track;
const songController = require("../controllers").song;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: "Welcome to acme-licences API"
      }));

    app.post('/api/tracks', trackController.create);
    app.get('/api/tracks', trackController.getAll);

    app.post('/api/songs', songController.create);
    app.get('/api/songs', songController.getAll);

}
