const express = require('express');
const router = express.Router();

const Place = require('../models/places');

router.get('/:id', (req, res, next) => {
  // get the place with the req.params.id and send the data as json
  const id = req.params.id;
  Place.findById(id, (err, place) => {
    if (err) {
      return next(err);
    }

    const data = {
      place: place
    };
    res.json(data);
  });
});

module.exports = router;
