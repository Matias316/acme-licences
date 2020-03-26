const MovieScene = require("../models").MovieScene;
module.exports = {
  create(req, res) {
  return MovieScene.create({ 
    movieStartTime: req.body.movieStartTime,
    movieEndTime: req.body.movieEndTime,
    movieId: req.body.movieId
  })
  .then(movieScene => res.status(201).send({movieScene:movieScene}))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
    MovieScene.findAll()
    .then(movieScenes => res.status(200).send({movieScenes:movieScenes}))
    .catch(error => res.status(400).send(error));
  },

  getById(req, res) {
    const id = req.params.id;

    MovieScene.findByPk(id)
    .then(movieScene => res.status(200).send({movieScene:movieScene}))
    .catch(error => res.status(400).send(error));
},

getByMovie(req, res) {
  MovieScene.findAll({
     where: { movieId: req.params.movieId } 
    }    
  )
  .then(movieScenes => res.status(200).send({movieScenes:movieScenes}))
  .catch(error => res.status(400).send(error));
},

  update(req, res) {
    const id = req.params.id;
  
    MovieScene.update(req.body, {
        where: { id: id }
      })
    .then(num => {
        if (num == 1) {
          res.status(200).send({
            message: "MovieScene updated successfully."
          });
        } else {
          res.status(500).send({
            message: `Cannot update MovieScene with id=${id}.`
          });
        }
      })
    .catch(error => res.status(400).send(error));
  },
  
  delete(req, res) {
    const id = req.params.id;
  
    MovieScene.destroy( {
        where: { id: id }
      })
    .then(num => {
        if (num == 1) {
          res.status(200).send({
            message: "MovieScene deleted successfully."
          });
        } else {
          res.status(500).send({
            message: `Cannot delete MovieScene with id=${id}.`
          });
        }
      })
    .catch(error => res.status(400).send(error));
  }

};