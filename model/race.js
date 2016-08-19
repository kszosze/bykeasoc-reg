// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    club_id:String,
    information:String,
    open:Boolean,
    valid:Boolean,
    fees:[{
      category:String,
      conditions:String,
      pre_register:Boolean,
      pre_paid:Boolean,
      fee:Number
    }]
});
try{
  mongoose.model('Race',raceSchema);
}catch(error){}
module.exports = mongoose.model('Race');
