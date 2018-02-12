const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('User_id', function (req, res, next) {
  res.send('/profile');
});

module.exports = router;
