var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Supra a70 */
router.get('/supraa70', function(req, res, next) {
  res.send("<h1>About Supra A70</h1>")
});
/* Страница Nissan s130z */
router.get('/nissans130z', function(req, res, next) {
  res.send("<h1>About Nissan S130z</h1>")
});
/* Страница Porsche 930 Turbo */
router.get('/porsche930turbo', function(req, res, next) {
  res.send("<h1>About Porsche 930 Turbo</h1>")
});

module.exports = router;
