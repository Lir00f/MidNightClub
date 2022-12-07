var express = require('express');
var router = express.Router();
var Car = require("../models/car").Car
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});

/* Страница машин */


router.get('/:nick', function(req, res, next) {
    Car.findOne({nick:req.params.nick}, function(err,car){
        if(err) return next(err)
        if(!car) return next(new Error("There was no such cаr in MidNightClub, maybe you made a mistake in your request? такого героя в этой книжке"))
        res.render('car', {
            title: car.title,
            picture: car.avatar,
            desc: car.desc
        })
    })
})

  module.exports = router
  
