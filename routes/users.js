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

// router.post('/:id/delete', (req, res, next) => {
//   const id = req.params.userId;
//   User.findByIdAndUpdate(id, {$pop: {places: place.id}}, {safe: true, upsert: true}, (err) => {
//     if (err) {
//       return next(err);
//     } else {
//       res.redirect('/users/profile');
//     };
//   });
// });

module.exports = router;
