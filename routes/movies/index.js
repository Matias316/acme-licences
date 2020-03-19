const movies = require('express').Router();
const movieController = require("../../controllers").movie;

movies.get('/', (req, res) => {
    movieController.getAllForView(req, res);
}
);

movies.get('/addMovie', (req, res) => res.status(200).render('add-movie')
);

movies.post('/addMovie', (req, res) => {       
    movieController.createForView(req, res);
}
);

movies.get('/updateMovie/:id', (req, res) => {
    movieController.getByIdForView(req, res);
}
);

movies.post('/updateMovie/:id', (req, res) => {
    movieController.updateForView(req, res);
}
);

movies.get('/deleteMovie/:id', (req, res) => {
    var id = req.params.id;
    movieController.deleteForView(req,res);
}
);

module.exports = movies;