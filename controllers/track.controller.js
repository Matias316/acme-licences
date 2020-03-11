const Track = require("../models").Track;
module.exports = {
  create(req, res) {
  return Track.create({ 
    title: req.body.title,
    content: req.body.content
  })
  .then(track => res.status(201).send(track))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
  Track.findAll()
  .then(tracks => res.send(tracks))
  .catch(error => res.status(400).send(error));
}

/*TODO
update();
delete();
*/


};