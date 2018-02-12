const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET users profile */
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

// router.get('/profile', (req, res, next) => {
//  pass the users data from req.session.currentUser to the view
//   res.render('profile');
// });
module.exports = router;
