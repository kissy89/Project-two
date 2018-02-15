const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

/* GET users profile */

// see my profile
router.get('/:userId', (req, res, next) => {
  // if (!req.session.currentUser) {
  //   res.redirect('/');
  // }

  // check if we are logged -- byron comment
  // const id = req.session.currentUser._id;
  const id = req.params.userId;
  User.findById(id).populate('places').exec((err, user) => {
    if (err) {
      return next(err);
    }

    const data = {
      userInfo: user
    };
    console.log(user.places);

    // pass the places to the templates
    res.render('users/profile', data);
  });
});

// router.post('/:id/delete', (req, res, next) => {
//   const id = req.params._id;
// User.findByIdAndUpdate(id,
//   User.places.remove({place_id: place._id}, (err) => {
//     if (err) {
//       return next(err);
//     }
//     res.redirect('/');
//   });
// });

// users.findByIdAndUpdate(userID,
//   {$push: {friends: friend}},
//   {safe: true, upsert: true},
//   function(err, doc) {
//       if(err){
//       console.log(err);
//       }else{
//       //do stuff
//       }
//   }
// );

// see some user
// router.get('/:userId', function (req, res, next) {
//   const userId = req.params.userId;
//   User.findById(userId, (err, user) => {
//     if (err) {
//       return next(err);
//     }

//     const data = {
//       user: user
//     };
//     res.render('users/profile', data);
//   });
// });

// router.use((req, res, next) => {
//   if (req.session.currentUser) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// });

module.exports = router;
