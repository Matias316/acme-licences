const Song = require("../models").Song;
module.exports = {
  create(req, res) {
  return Song.create({ 
    title: req.body.title,
    duration:req.body.duration
  })
  
  .then(song => res.status(201).send(song))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
  Song.findAll()
  .then(songs => res.send(songs))
  .catch(error => res.status(400).send(error));
}

};