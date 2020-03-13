const Track = require("../models").Track;
module.exports = {
  create(req, res) {
  return Track.create({ 
    songStartTime: req.body.songStartTime,
    songEndTime: req.body.songEndTime,
    movieId: req.body.movieId,
    songId: req.body.songId
  })
  .then(track => res.status(201).send(track))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
  Track.findAll()
  .then(tracks => res.send(tracks))
  .catch(error => res.status(400).send(error));
},

getById(req, res) {
  const id = req.params.id;

  Track.findByPk(id)
  .then(track => res.send(track))
  .catch(error => res.status(400).send(error));
},

getBySong(req, res) {
  Track.findAll({
    include: [
        { model: Song, where: { name: req.params.songId } }
    ]
  })
  .then(tracks => res.json(tracks))
},

update(req, res) {
  const id = req.params.id;

  Track.update(req.body, {
      where: { id: id }
    })
  .then(num => {
      if (num == 1) {
        res.send({
          message: "Track updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Track with id=${id}.`
        });
      }
    })
  .catch(error => res.status(400).send(error));
},

delete(req, res) {
  const id = req.params.id;

  Track.destroy( {
      where: { id: id }
    })
  .then(num => {
      if (num == 1) {
        res.send({
          message: "Track deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete Track with id=${id}.`
        });
      }
    })
  .catch(error => res.status(400).send(error));
}

};