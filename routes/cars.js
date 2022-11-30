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
    async.parallel([
            function(callback){
                Car.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Car.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var car = result[0]
            var cars = result[1] || []
            if(!car) return next(new Error("There was no such cаr in MidNightClub, maybe you made a mistake in your request?"))
            res.render('car', {
                title: car.title,
                picture: car.avatar,
                desc: car.desc,
                menu: cars
            });
        })
  })
  
  module.exports = router
  
