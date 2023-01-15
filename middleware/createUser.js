var db = require('../mySQLConnect.js');

module.exports = function(req,res,next){
res.locals.user = null
    db.query(`SELECT * FROM user WHERE user.user_id = '${req.session.user}'`, (err, users) => {  
        if(err) 
            return next(err)
        res.locals.user = users;
        next()
    })
}