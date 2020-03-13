const TrackEvent = require("../models").TrackEvent;
module.exports = {
  create(req, res) {
  return TrackEvent.create({ 
    description: req.body.description
  })
  
  .then(trackEvent => res.status(201).send(trackEvent))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
  TrackEvent.findAll()
  .then(trackEvents => res.send(trackEvents))
  .catch(error => res.status(400).send(error));
},

getById(req, res) {
  const id = req.params.id;

  TrackEvent.findByPk(id)
  .then(trackEvent => res.send(trackEvent))
  .catch(error => res.status(400).send(error));
},

update(req, res) {
  const id = req.params.id;

  TrackEvent.update(req.body, {
      where: { id: id }
    })
  .then(num => {
      if (num == 1) {
        res.send({
          message: "TrackEvent updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update TrackEvent with id=${id}.`
        });
      }
    })
  .catch(error => res.status(400).send(error));
},

delete(req, res) {
  const id = req.params.id;

  TrackEvent.destroy( {
      where: { id: id }
    })
  .then(num => {
      if (num == 1) {
        res.send({
          message: "TrackEvent deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete TrackEvent with id=${id}.`
        });
      }
    })
  .catch(error => res.status(400).send(error));
}

};