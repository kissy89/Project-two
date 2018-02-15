const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  User.find({}).populate('places').exec((err, users) => {
    if (err) {
      return next(err);
    }

    const data = {
      users
    };

    res.render('index', data);
  });
});

module.exports = router;
