const tracks = require('express').Router();
const trackController = require("../../controllers").track;

tracks.get('/', (req, res) => {
    trackController.getAllForView(req, res);       
}
);

tracks.get('/addTrack', (req, res) => {
    //TO-DO async not working
    //let allSongs = await songController.getAll();
    //let allMovies = await movieController.getAll();
    let allMovies = [{ id: 1, title:'Forrest Gump', genre:'Comedy'},{ id: 2, title:'Gladiator', genre:'Action'}];
    let allSongs = [{ id: 1, title:'Song2', duration:10, owner:'Blur'},{ id: 2, title:'Crazy', duration:10, owner:'Aerosmith'}];
    res.render('add-track', {songs: allSongs, movies: allMovies});
}
);

tracks.get('/deleteTrack/:id', (req, res) => {
    trackController.deleteForView(req, res);
}
);

module.exports = tracks;