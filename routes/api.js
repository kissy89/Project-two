const express = require('express');
const router = express.Router();

const Place = require('../models/places');

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Place.findById(id, (err, place) => {
    if (err) {
      return next(err);
    }
    // what happend is there is not a place??
    const data = {
      place: place
    };
    res.json(data);
  });
});

router.post('/', (req, res, next) => {
  req.app.locals.theme = req.body.theme;
  res.json({ok: 'ok'});
});

module.exports = router;
