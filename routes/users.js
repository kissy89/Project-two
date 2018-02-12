const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET users profile */
router.get('User_id', function (req, res, next) {
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
//   res.render('profile');
// });
module.exports = router;
