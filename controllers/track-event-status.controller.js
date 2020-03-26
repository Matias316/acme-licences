const TrackEventStatus = require("../models").TrackEventStatus;
module.exports = {
  create(req, res) {
  return TrackEventStatus.create({ 
    type: req.body.type
  })
  
  .then(trackEventStatus => res.status(201).send({trackEventStatus:trackEventStatus}))
  .catch(error => res.status(400).send(error));
},

getAll(req, res) {
  TrackEventStatus.findAll()
  .then(trackEventStatuses => res.status(200).send({trackEventStatuses:trackEventStatuses}))
  .catch(error => res.status(400).send(error));
},

getById(req, res) {
  const id = req.params.id;

  TrackEventStatus.findByPk(id)
  .then(trackEventStatus => res.status(200).send({trackEventStatus:trackEventStatus}))
  .catch(error => res.status(400).send(error));
},

update(req, res) {
  const id = req.params.id;

  TrackEventStatus.update(req.body, {
      where: { id: id }
    })
  .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "TrackEventStatus updated successfully."
        });
      } else {
        res.status(500).send({
          message: `Cannot update TrackEventStatus with id=${id}.`
        });
      }
    })
  .catch(error => res.status(400).send(error));
},

delete(req, res) {
  const id = req.params.id;

  TrackEventStatus.destroy( {
      where: { id: id }
    })
  .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "TrackEventStatus deleted successfully."
        });
      } else {
        res.status(500).send({
          message: `Cannot delete TrackEventStatus with id=${id}.`
        });
      }
    })
  .catch(error => res.status(400).send(error));
}

};