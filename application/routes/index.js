var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./partials/index.hbs', {name: "Miguel", age:35});
});

router.get('/login', (req, res, next) =>{
  res.render('./partials/login');
});

router.get('/imagepost', (req, res, next) => {
  res.render('./partials/imagepost');
});

router.get('/postimage', (req, res, next) => {
  res.render('./partials/postimage');
});

router.get('/registration', (req, res, next) => {
  res.render('./partials/registration');
});
module.exports = router;
