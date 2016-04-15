// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Race', new Schema({
    id:String,
    name:String,
    date:Date,
    start_registration:Date,
    end_registration:Date,
    price:Number,
    startPoint:String,
    endPoint:String,
    distance:String,
    duration:String,
    organiser_id:String,
    fee:[{
      id:String,
      category:String,
      conditions:String,
      pre_register:Boolean,
      pra_paid:Boolean,
      fee:Number
    }],
    participants: [{
      user_id: String,
      subscribedOn: Date,
      category: String,
      licence: String,
      club_id: String,
      paid: Boolean
    }]
}));
