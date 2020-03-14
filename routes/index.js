const trackController = require("../controllers").track;
const songController = require("../controllers").song;
const movieController = require("../controllers").movie;
const movieSceneController = require("../controllers").movieScene;
const trackEventController = require("../controllers").trackEvent;
const trackEventStatusController = require("../controllers").trackEventStatus;

module.exports = (app) => {

    /* These get methods are used to create the views*/
    app.get('/', (req, res) => res.render('home')
    );

    app.get('/movies', (req, res) => {
        movieController.getAllForView(req, res);
    }
    );

    app.get('/addMovie', (req, res) => res.render('add-movie')
    );

    app.get('/updateMovie/:id', (req, res) => {
        movieController.getByIdForView(req, res);
    }
    );

    app.get('/deleteMovie/:id', (req, res) => {
        var id = req.params.id;
        movieController.delete(req,res);
    }
    );

    app.get('/songs', (req, res) => {       
        songController.getAllForView(req, res);
    }
    );

    app.get('/addSong', (req, res) => res.render('add-song')
    );

    app.get('/updateSong/:id', (req, res) => {
        songController.getByIdForView(req, res);
    }
    );

    app.get('/deleteSong/:id', (req, res) => {
        songController.delete(req, res);
    }
    );

    app.get('/tracks', (req, res) => {
        trackController.getAllForView(req, res);       
    }
    );

    app.get('/addTrack', (req, res) => {
        //TO-DO async not working
        //let allSongs = await songController.getAll();
        //let allMovies = await movieController.getAll();
        let allMovies = [{ id: 1, title:'Forrest Gump', genre:'Comedy'},{ id: 2, title:'Gladiator', genre:'Action'}];
        let allSongs = [{ id: 1, title:'Song2', duration:10, owner:'Blur'},{ id: 2, title:'Crazy', duration:10, owner:'Aerosmith'}];
        res.render('add-track', {songs: allSongs, movies: allMovies});
    }
    );

    app.get('/deleteTrack/:id', (req, res) => {
        trackController.delete(req, res);
    }
    );

    /* These methods are the APIs */

    app.post('/api/tracks', trackController.create);
    app.get('/api/tracks', trackController.getAll);
    app.get('/api/tracks/:id', trackController.getById);
    app.get('/api/tracks/:songId', trackController.getBySong);
    app.put('/api/tracks/:id', trackController.update);
    app.delete('/api/tracks/:id', trackController.delete);

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
    app.get('/api/movieScenes/:id', movieSceneController.getById);
    app.put('/api/movieScenes/:id', movieSceneController.update);
    app.delete('/api/movieScenes/:id', movieSceneController.delete);

    app.post('/api/trackEvents', trackEventController.create);
    app.get('/api/trackEvents', trackEventController.getAll);
    app.get('/api/trackEvents/:id', trackEventController.getById);
    app.get('/api/trackEvents/:trackId', trackEventController.getByTrack);
    app.put('/api/trackEvents/:id', trackEventController.update);
    app.delete('/api/trackEvents/:id', trackEventController.delete);

    app.post('/api/trackEventStatuses', trackEventStatusController.create);
    app.get('/api/trackEventStatuses', trackEventStatusController.getAll);
    app.get('/api/trackEventStatuses/:id', trackEventStatusController.getById);
    app.put('/api/trackEventStatuses/:id', trackEventStatusController.update);
    app.delete('/api/trackEventStatuses/:id', trackEventStatusController.delete);
}
