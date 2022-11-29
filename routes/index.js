var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Supra a70 
router.get('/supraa70', function(req, res, next) {
  res.render('car', {
    title: "Toyota Supra A70",
    picture: "images/supraa70.jpg",
    desc: "In February 1986, the bonds between the Celica and the Supra were cut; they were now two completely different models. The Celica changed to a front-wheel drive layout, using the Toyota T platform associated with the Corona, while the Supra kept its rear-wheel-drive layout. The engine was updated to a more powerful 2,954 cc (3.0 L) inline-six engine rated at 149 kW (200 hp; 203 PS). Although initially only available with naturally aspirated engines, a turbocharged version was added in the 1987 model year. The Supra was now mechanically related to the Soarer."
  })
  res.send("<h1>About Supra A70</h1>")
});
/* Страница Nissan s130z 
router.get('/nissans130z', function(req, res, next) {
  res.render('car', {
    title: "Nissan S130z",
    picture: "images/nissans130z.jpg",
    desc: "The Nissan S130 is a sports coupé produced by Nissan in Japan from 1978 until 1983. It was sold as the Datsun 280ZX, Nissan Fairlady Z and Nissan Fairlady 280Z, depending on the market. In Japan, it was exclusive to Nissan Bluebird Store locations. It was the second generation Z-car, replacing the Nissan S30 in late 1978. The 280ZX was the first time the by Nissan subscript was badged alongside the Datsun logo, along with Nissan trucks. The 280ZX was Motor Trend's import car of the year for 1979. The 280ZX was replaced by the Nissan 300ZX in 1984."
  })
  res.send("<h1>About Nissan S130z</h1>")
});
/* Страница Porsche 930 Turbo 
router.get('/porsche930turbo', function(req, res, next) {
  res.render('car', {
    title: "Porsche 930 Turbo",
    picture: "images/porsche930turbo.jpg",
    desc: "The Porsche 930 is a sports car manufactured by German automobile manufacturer Porsche between 1975 and 1989, known to the public as the 911 Turbo. It was the maker's top-of-the-range 911 model for its entire production duration and, at the time of its introduction, was the fastest production car available in Germany."
  })
  res.send("<h1>About Porsche 930 Turbo</h1>")
});
*/
module.exports = router;
