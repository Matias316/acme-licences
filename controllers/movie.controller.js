const Movie = require("../models").Movie;
module.exports = {
  create(req, res) {
  return Movie.create({ 
    title: req.body.title,
    genre:  req.body.genre
  })  
  .then(movie => res.status(201).send(movie))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
  Movie.findAll()
  .then(movies => res.send(movies))
  .catch(error => res.status(400).send(error));
},

getById(req, res) {
    const id = req.params.id;

    Movie.findByPk(id)
    .then(movie => res.send(movie))
    .catch(error => res.status(400).send(error));
},

update(req, res) {
    const id = req.params.id;

    Movie.update(req.body, {
        where: { id: id }
      })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Movie with id=${id}.`
          });
        }
      })
    .catch(error => res.status(400).send(error));
},

delete(req, res) {
    const id = req.params.id;

    Movie.destroy( {
        where: { id: id }
      })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie deleted successfully."
          });
        } else {
          res.send({
            message: `Cannot delete Movie with id=${id}.`
          });
        }
      })
    .catch(error => res.status(400).send(error));
}

};