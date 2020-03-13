const Song = require("../models").Song;
module.exports = {
  create(req, res) {
  return Song.create({ 
    title: req.body.title,
    duration: req.body.duration,
    owner: req.body.owner
  })
  
  .then(song => res.status(201).send(song))
  .catch(error => res.status(400).send(error));
},

async getAll(req, res) {
  const allSongs = await Song.findAll();
  res.send(allSongs);
},

async getById(req, res) {
  const id = req.params.id;

 const song = await Song.findByPk(id);
  res.send(song);
},

update(req, res) {
  const id = req.params.id;

  Song.update(req.body, {
      where: { id: id }
    })
  .then(num => {
      if (num == 1) {
        res.send({
          message: "Song updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Song with id=${id}.`
        });
      }
    })
  .catch(error => res.status(400).send(error));
},

delete(req, res) {
  const id = req.params.id;

  Song.destroy( {
      where: { id: id }
    })
  .then(num => {
      if (num == 1) {
        res.send({
          message: "Song deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete Song with id=${id}.`
        });
      }
    })
  .catch(error => res.status(400).send(error));
}

};