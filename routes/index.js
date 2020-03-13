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
        //TO-DO async not working
        //let allMovies = await movieController.getAll();
        let allMovies = [{ id: 1, title:'Forrest Gump', genre:'Comedy'},{ id: 2, title:'Gladiator', genre:'Action'}];
        res.render('movie', {movies: allMovies})
    }
    );

    app.get('/updateMovie/:id', (req, res) => {
        //TO-DO async not working
        //let song = await songController.getById(req, res);
        let movie = { id: 1, title:'Forrest Gump', genre:'Comedy'};
        res.render('update-movie', {movie: movie});
    }
    );

    app.get('/deleteMovie/:id', (req, res) => {
        var id = req.params.id;
        res.render('delete-movie', {movieId : id});
    }
    );

    app.get('/songs', (req, res) => {
        //TO-DO async not working
        //let allSongs = await songController.getAll();
        let allSongs = [{ id: 1, title:'Song2', duration:10, owner:'Blur'},{ id: 2, title:'Crazy', duration:10, owner:'Aerosmith'}];
        res.render('song', {songs: allSongs})
    }
    );

    app.get('/tracks', (req, res) => {
        //TO-DO async not working
        //let allTracks = await trackController.getAll();
        let allTracks = [{ id: 1, songStartTime:'00:00', songEndTime:'00:10', movie: { id: 1, title:'Forrest Gump', genre:'Comedy'}, song: { id: 1, title:'Song2', duration:10, owner:'Blur'} },
        { id: 2, songStartTime:'00:00', songEndTime:'00:10', movie: { id: 1, title:'Forrest Gump', genre:'Comedy'}, song: { id: 2, title:'Crazy', duration:10, owner:'Aerosmith'} }];        
        res.render('track', {tracks: allTracks})
    }
    );

    app.get('/addSong', (req, res) => res.render('add-song')
    );

    app.get('/updateSong/:id', (req, res) => {
        //TO-DO async not working
        //let song = await songController.getById(req, res);
        let song = { id: 1, title:'Song2', duration:10, owner:'Blur'};
        res.render('update-song', {song: song});
    }
    );

    app.get('/deleteSong/:id', (req, res) => {
        var id = req.params.id;
        res.render('delete-song', {songId : id});
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


    /* These methods are the APIs */

    app.post('/api/tracks', trackController.create);
    app.get('/api/tracks', trackController.getAll);
    app.get('/api/tracks/:id', trackController.getById);
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
    app.put('/api/trackEvents/:id', trackEventController.update);
    app.delete('/api/trackEvents/:id', trackEventController.delete);

    app.post('/api/trackEventStatuses', trackEventStatusController.create);
    app.get('/api/trackEventStatuses', trackEventStatusController.getAll);
    app.get('/api/trackEventStatuses/:id', trackEventStatusController.getById);
    app.put('/api/trackEventStatuses/:id', trackEventStatusController.update);
    app.delete('/api/trackEventStatuses/:id', trackEventStatusController.delete);
}
