const TrackEvent = require("../models").TrackEvent;
module.exports = {
  create(req, res) {
  return TrackEvent.create({ 
    description: req.body.description,
    trackId: req.body.trackId,
    statusId: req.body.statusId
  })
  
  .then(trackEvent => res.status(201).send({trackEvent:trackEvent}))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
  TrackEvent.findAll()
  .then(trackEvents => res.status(200).send({trackEvents:trackEvents}))
  .catch(error => res.status(400).send(error));
},

getById(req, res) {
  const id = req.params.id;

  TrackEvent.findByPk(id)
  .then(trackEvent => res.status(200).send({trackEvent:trackEvent}))
  .catch(error => res.status(400).send(error));
},

getByTrack(req, res) {
  TrackEvent.findAll({
     where: { trackId: req.params.trackId } 
    }    
  )
  .then(trackEvents => res.status(200).send({trackEvents:trackEvents}))
  .catch(error => res.status(400).send(error));
},

//TODO - Should we return updated objects instead?
update(req, res) {
  const id = req.params.id;

  TrackEvent.update(req.body, {
      where: { id: id }
    })
  .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "TrackEvent updated successfully."
        });
      } else {
        res.status(500).send({
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
        res.status(200).send({
          message: "TrackEvent deleted successfully."
        });
      } else {
        res.status(500).send({
          message: `Cannot delete TrackEvent with id=${id}.`
        });
      }
    })
  .catch(error => res.status(400).send(error));
}

};