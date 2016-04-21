// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var raceSchema = new Schema({
    id:String,
    name:String,
    date:Date,
    start_registration:Date,
    end_registration:Date,
    startPoint:String,
    endPoint:String,
    distance:String,
    duration:String,
    organiser_id:String,
    open:Boolean,
    valid:Boolean,
    fees:[{
      id:String,
      category:String,
      conditions:String,
      pre_register:Boolean,
      pre_paid:Boolean,
      fee:Number
    }],
    participants: [{
      user_id: String,
      subscribedOn: Date,
      category: String,
      fee_id:String,
      licence: String,
      club_id: String,
      paid: Boolean
    }]
});
try{
  mongoose.model('Race',raceSchema);
}catch(error){}
module.exports = mongoose.model('Race');
