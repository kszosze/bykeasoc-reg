// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var clubSchema = new Schema({
    id: String,
    name: String,
    contactId: String,
    web_page: String,
    location: String,
    active: Boolean
});
try{
   mongoose.model('Club',clubSchema);
}catch(error){}
module.exports = mongoose.model('Club');
