const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

/* GET users profile */

// see my profile
router.get('/profile', (req, res, next) => {
  if (!req.session.currentUser) {
    res.redirect('/');
  }

  // check if we are logged -- byron comment
  const id = req.session.currentUser._id;
  User.findById(id).populate('places').exec((err, user) => {
    if (err) {
      return next(err);
    }

    const data = {
      user: user
    };
    // console.log(user.places[0].name);

    // pass the places to the templates
    res.render('users/profile', data);
  });
});

// see some user
router.get('/:userId', function (req, res, next) {
  const userId = req.params.userId;
  User.findById(userId, (err, user) => {
    if (err) {
      return next(err);
    }

    const data = {
      user: user
    };
    res.render('users/profile', data);
  });
});

// router.use((req, res, next) => {
//   if (req.session.currentUser) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// });

module.exports = router;
