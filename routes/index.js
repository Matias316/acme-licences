const trackController = require("../controllers").track;
const songController = require("../controllers").song;
const movieController = require("../controllers").movie;
const movieSceneController = require("../controllers").movieScene;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: "Welcome to acme-licences API"
      }));

    app.post('/api/tracks', trackController.create);
    app.get('/api/tracks', trackController.getAll);
    //app.put('/api/tracks/:id', trackController.update);
    //app.delete('/api/tracks/:id', trackController.delete);

    app.post('/api/songs', songController.create);
    app.get('/api/songs', songController.getAll);
    app.get('/api/songs/:id', songController.getById);
    app.put('/api/songs/:id', songController.update);
    app.delete('/api/songs/:id', songController.delete);

    app.post('/api/movies', movieController.create);
    app.get('/api/movies', movieController.getAll);
    app.get('/api/movies/:id', movieController.getById);
    app.put('/api/movies/:id', movieController.update);
    app.delete('/api/movies/:id', movieController.delete);

    app.post('/api/movieScenes', movieSceneController.create);
    app.get('/api/movieScenes', movieSceneController.getAll);
    //app.put('/api/movieScenes/:id', movieSceneController.update);
    //app.delete('/api/movieScenes/:id', movieSceneController.delete);

}
