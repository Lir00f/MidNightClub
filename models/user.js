var mongoose = require("mongoose")
var crypto = require("crypto")

var schemaUser = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    hashedPassword:{
        type: String,
        required: true
    },
    salt:{
        type: String,
        required: true
    },
    created:{
        type:Date,
        default: Date.now
    }
})

schemaUser.virtual("password").set(function(password){
    this._purePassword = password
    this.salt = Math.random() + ""
    this.hashedPassword = this.encryptPassword(password)
}).get(function(){
    return this._purePassword
})

schemaUser.methods.encryptPassword = function(password){
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
}

module.exports.User = mongoose.model("User",schemaUser);