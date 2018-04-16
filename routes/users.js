const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/:userId', (req, res, next) => {
  const id = req.params.userId;
  User.findById(id).populate('places').exec((err, user) => {
    if (err) {
      return next(err);
    }

    const data = {
      userInfo: user
    };
    res.render('users/profile', data);
  });
});

router.post('/delete/:placeId', (req, res, next) => {
  const placeId = req.params.placeId;
  const id = req.session.currentUser._id;
  User.findByIdAndUpdate(id, { $pull: {places: placeId} }, {safe: true, new: true}, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/users/' + id);
    };
  });
});

router.get('/logout', function (req, res, next) {
  res.render('/');
});

module.exports = router;
