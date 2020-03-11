const MovieScene = require("../models").MovieScene;
module.exports = {
  create(req, res) {
  return MovieScene.create({ 
    movieStartTime: req.body.startTime,
    movieEndTime: req.body.endTime,
  })
  .then(movieScene => res.status(201).send(movieScene))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
    MovieScene.findAll()
    .then(movieScenes => res.send(movieScenes))
    .catch(error => res.status(400).send(error));
  }

/* TODO
update()
delete()
*/

};