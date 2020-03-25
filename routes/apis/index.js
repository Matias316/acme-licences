const apis = require('express').Router();
const trackController = require("../../controllers").track;
const songController = require("../../controllers").song;
const movieController = require("../../controllers").movie;
const movieSceneController = require("../../controllers").movieScene;
const trackEventController = require("../../controllers").trackEvent;
const trackEventStatusController = require("../../controllers").trackEventStatus;

apis.get('/', (req, res) => {
    res.status(200).json({ message: 'APIs root path!'});
}
);

apis.post('/tracks', trackController.create);
apis.get('/tracks', trackController.getAll);
apis.get('/tracks/id/:id', trackController.getById);
apis.get('/tracks/songId/:songId', trackController.getBySong);
apis.put('/tracks/:id', trackController.update);
apis.delete('/tracks/:id', trackController.delete);

apis.post('/songs', songController.create);
apis.get('/songs', songController.getAll);
apis.get('/songs/:id', songController.getById);
apis.put('/songs/:id', songController.update);
apis.delete('/songs/:id', songController.delete);

apis.post('/movies', movieController.create);
apis.get('/movies', movieController.getAll);
apis.get('/movies/:id', movieController.getById);
apis.put('/movies/:id', movieController.update);
apis.delete('/movies/:id', movieController.delete);

apis.post('/movieScenes', movieSceneController.create);
apis.get('/movieScenes', movieSceneController.getAll);
apis.get('/movieScenes/:id', movieSceneController.getById);
apis.put('/movieScenes/:id', movieSceneController.update);
apis.delete('/movieScenes/:id', movieSceneController.delete);

apis.post('/trackEvents', trackEventController.create);
apis.get('/trackEvents', trackEventController.getAll);
apis.get('/trackEvents/:id', trackEventController.getById);
apis.get('/trackEvents/:trackId', trackEventController.getByTrack);
apis.put('/trackEvents/:id', trackEventController.update);
apis.delete('/trackEvents/:id', trackEventController.delete);

apis.post('/trackEventStatuses', trackEventStatusController.create);
apis.get('/trackEventStatuses', trackEventStatusController.getAll);
apis.get('/trackEventStatuses/:id', trackEventStatusController.getById);
apis.put('/trackEventStatuses/:id', trackEventStatusController.update);
apis.delete('/trackEventStatuses/:id', trackEventStatusController.delete);

module.exports = apis;