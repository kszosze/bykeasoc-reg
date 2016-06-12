var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var participantSchema = new Schema({
  name: String,
  surname: String,
  race_id : String,
  subscribed_on: Date,
  category: String,
  fee_id:String,
  licence: String,
  club_id: String,
  paid: Boolean
})
try{
  mongoose.model('Participant',participantSchema);
}catch(error){}
module.exports = mongoose.model('Participant');
