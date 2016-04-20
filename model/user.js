// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var userSchema = new Schema({
    id: String,
    name: String,
    surname: String,
    dob: Date,
    password: String,
    admin: Boolean,
    active: Boolean
});

try {
  mongoose.model('User',userSchema);
}catch(error){}

module.exports = mongoose.model('User');
