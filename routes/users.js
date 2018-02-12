const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET users profile */
router.get('/:userId', function (req, res, next) {
  const userId = req.params.userId;
  // search on db with this userId
  // after getting the user, render the profile template passing the users data
  res.send('/profile');
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
