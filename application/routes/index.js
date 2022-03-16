var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./partials/index.hbs', {name: "Miguel"});
});

module.exports = router;
