var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " done 'Sutututu' ")
}

var Car = mongoose.model('Cat', schema)

var jdm = new Car({ name: 'Supra' })
jdm.save(function (err) {
    jdm.meow()
})
