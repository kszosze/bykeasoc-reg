// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var Club = mongoose.model('Club', new Schema({
    id: String,
    name: String,
    contact_id: String,
    web_page: String,
    location: String,
    active: Boolean
}));

module.exports = Club;
