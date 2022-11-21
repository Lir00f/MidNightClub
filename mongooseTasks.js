var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Car = require("./models/car").Car


var car = new Car({
title: "Supra",
nick: "supraa70"
})


console.log(car)
car.save(function(err, car, affected){
console.log(car.title)
})
