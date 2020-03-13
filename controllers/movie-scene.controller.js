const MovieScene = require("../models").MovieScene;
module.exports = {
  create(req, res) {
  return MovieScene.create({ 
    movieStartTime: req.body.movieStartTime,
    movieEndTime: req.body.movieEndTime,
  })
  .then(movieScene => res.status(201).send(movieScene))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
    MovieScene.findAll()
    .then(movieScenes => res.send(movieScenes))
    .catch(error => res.status(400).send(error));
  },

  getById(req, res) {
    const id = req.params.id;

    MovieScene.findByPk(id)
    .then(movieScene => res.send(movieScene))
    .catch(error => res.status(400).send(error));
},

  update(req, res) {
    const id = req.params.id;
  
    MovieScene.update(req.body, {
        where: { id: id }
      })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "MovieScene updated successfully."
          });
        } else {
          res.send({
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
          res.send({
            message: "MovieScene deleted successfully."
          });
        } else {
          res.send({
            message: `Cannot delete MovieScene with id=${id}.`
          });
        }
      })
    .catch(error => res.status(400).send(error));
  }

};