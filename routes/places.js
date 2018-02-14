var express = require('express');
var router = express.Router();

const Place = require('../models/places');
const User = require('../models/user');

router.get('/', function (req, res, next) {
  // find the places and pass the data to the view
  res.render('places/new');
});

// in places/new -> create a new place

router.post('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/');
  }

  const name = req.body.name;
  const description = req.body.description;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  // if in the db there is a place with the same name -> redirect

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

    const idUser = req.session.currentUser._id;

    User.findByIdAndUpdate(idUser, { $push: { places: newPlace._id } }, (err) => {
      if (err) {
        return next(err);
      }
    });

    // find the userById that we have on req.session.currentUser._id
    // const idUser = req.session.currentUser._id;
    // const userModified = { $push: { places: newPlace._id }}
    // User.findByIdAndUpdate(idUser, userModified, (err) => {if (err) { return next(err) } })
    res.redirect('/');
  });
});

router.get('/new', function (req, res, next) {
  // find the places and pass the data to the view
  if (!req.session.currentUser) {
    const data = {
      message: 'You have to be logged in to add new places!'
    };
    res.render('/places/new', data);
  }

  Place.find({}, (err, places) => {
    if (err) {
      return next(err);
    }
    const data = {
      places
    };
    res.render('places/new', data);
  });
});

// list a place
router.get('/details', (req, res, next) => {
  // const id = req.params.id;
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

// router.post('/add', (req, res, next) => {
//   const name = req.body.name;
//   const a = Place.find(name, (err, place) => {
//     if (err) {
//       return next(err);
//     }
//   });

//   a.save((err) => {
//     if (err) {
//       return next(err);
//     }

//     const idUser = req.session.currentUser._id;

//     User.findByIdAndUpdate(idUser, { $push: { places: a._id } }, (err) => {
//       if (err) {
//         return next(err);
//       }
//     });
//   });
//   res.redirect('/');
// });

module.exports = router;
