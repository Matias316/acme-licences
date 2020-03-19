const songs = require('express').Router();
const songController = require("../../controllers").song;

songs.get('/', (req, res) => {
    songController.getAllForView(req, res);
}
);

songs.get('/addSong', (req, res) => res.status(200).render('add-song')
);

songs.post('/addSong', (req, res) => {       
    songController.createForView(req, res);
}
);

songs.get('/updateSong/:id', (req, res) => {
    songController.getByIdForView(req, res);
}
);

songs.post('/updateSong/:id', (req, res) => {
    songController.updateForView(req, res);
}
);

songs.get('/deleteSong/:id', (req, res) => {
    songController.deleteForView(req, res);
}
);


module.exports = songs;