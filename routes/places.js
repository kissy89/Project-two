var express = require('express');
var router = express.Router();

const Place = require('../models/places');

router.get('/', function (req, res, next) {
  res.render('places');
});

router.post('/', (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/');
  }

  const name = req.body.name;
  const description = req.body.description;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  const newPlace = new Place({
    name,
    description,
    location: {
      coordinates: [latitude, longitude]
    }
  });

  newPlace.save((err) => {
    if (err) {
      return next(err);
    }

    res.redirect('/');
  });
  // });
});

// list all places
router.get('/details', (req, res, next) => {
  const id = req.params.id;
  Place.find({}, (err, places) => {
    if (err) {
      return next(err);
    }
    const data = {
      places
    };
    res.render('places/details', data);
  });
});

module.exports = router;
