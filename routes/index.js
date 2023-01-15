var express = require('express')
var router = express.Router()
//var Car = require("../models/car").Car
//var User = require("./../models/user").User
var db = require('../mySQLConnect.js')



router.get('/', function(req, res, next) {
 //       req.session.greeting = "Session started"
        res.render('index', {
                                title: 'MidNightClub',
                                counter: req.session.counter
                            });
    });


/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход', error:null});
    

    });

    /* POST login/registration page. */
    router.post('/logreg', function(req, res, next) {
        var username = req.body.username
        var password = req.body.password
        db.query (`SELECT * FROM user WHERE user.username = '${req.body.username}'`, function(err,users){
                if(err) return next(err)
                if(users.length > 0) {
                  var user = users[0];
                  if (password == user.password){
                    req.session.user = user.user_id
                    res.redirect('/')
                  } else {
                    res.render('logreg', {title: 'Вход', error: 'Пароль не верный'})
                  }
                } else {
                  db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, function(err, user){
                    if(err) return next(err)
                    req.session.user = user.user_id
                    res.redirect('/')
                  })
                }
        })
    });
router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
  });

module.exports = router;
