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

  // validate

  // check if user with this username already exists
  // User.findOne({ 'username': username }, (err, user) => {
  //   if (err) {
  //     return next(err);
  //   }
  //   if (user) {
  //     const data = {
  //       title: 'Signup',
  //       message: 'The "' + username + '" username is taken'
  //     };
  //     return res.render('auth/signup', data);
  //   }
  // const salt = bcrypt.genSaltSync(bcryptSalt);
  // const hashPass = bcrypt.hashSync(password, salt);

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

module.exports = router;
