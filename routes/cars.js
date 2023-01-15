var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Car = require("../models/car").Car
var checkAuth = require("../middleware/checkAuth.js")
// var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});

/* Страница машин */
router.get("/:nick", checkAuth, function(req, res, next){
db.query(`SELECT * FROM cars WHERE cars.nick = '${req.params.nick}'`, (err, cars) => {
if(err) {
console.log(err);
if(err) return next(err)
} else {
if(cars.length == 0) return next(new Error("There was no such cаr in MidNightClub, maybe you made a mistake in your request?"))
var car = cars[0];
res.render('car', {
title: car.title,
picture: car.avatar,
desc: car.about
})
// result(null, results);
}
})
// Cat.findOne({nick:req.params.nick}, function(err, cat){
// if(err) return next(err)
// if(!cat) return next(new Error("Нет такого котенка в этом мультике"))
// res.render('cat', {
// title: cat.title,
// picture: cat.avatar,
// desc: cat.desc,
// });
// })
});

  module.exports = router
  
