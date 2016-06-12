var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Race = require('../model/race');
var Participant = require('../model/participant')
var parseUrlencoded = bodyParser.urlencoded({extended:false});

router.route('/')
.get(function(req,res){
  var today = new Date();
  Race.findOneAndUpdate({"end_registration" : {"$lt" : today }}, {"$set" : { open : false }}, { "new": true }, function(error,data){
    if (error) {
      console.log(error);
    };
  })
  Race.find({},'id date name end_registration',function(error,races){
    if (error) {
      console.log(error);
    }
    else {
      res.json(races);
    }
  });
}).post(parseUrlencoded,function(req,res){
  Race.create(req.body,function(error,newRace){
    if (error) {
      console.log(error);
    }
    else {
      res.json(newRace);
    }
  });
});

router.route('/:race_id')
.get(function(req,res){
  var raceId = req.params['race_id'];
  Race.findOne({id:raceId},'',function(error,foundRace){
    if (error) {
      console.log(error);
    }
    else {
      res.json(foundRace);
    }
  });
})
.put(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  Race.findOneAndUpdate({id:raceId},req.body,{new:true},function(error,updateRace){
    if (error) {
      console.log(error);
    }
    else {
      res.json(updateRace);
    }
  });
})
.delete(function(req,res){
  var raceId = req.params['race_id'];
  Race.findOneAndUpdate({id:raceId},{valid:false},{new:true},function(error,deleteRace){
    if (error) {
      console.log(error);
    }
    else {
      res.json(deleteRace);
    }
  });
});

router.route('/:race_id/fees')
.post(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  Race.findOneAndUpdate({id:raceId},{"$push":{"fees":req.body}},{new:true},function(error,updateRace){
    if (error) {
      console.log(error);
    }
    else {
      res.json(updateRace);
    }
  });
});

router.route('/:race_id/fees/:fee_id')
.delete(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  var feeId = req.params['fee_id'];
  Race.findOneAndUpdate({id:raceId},{"$pull":{"fees":{id:feeId}}},{new:true},function(error,updateRace){
    if (error) {
      console.log(error);
    }
    else {
      res.json(updateRace);
    }
  });
});

router.route('/:race_id/participants')
.get(function(req,res){
  var raceId = req.params['race_id'];
  Participant.find({race_id:raceId},'',function(error,foundParticipants){
    if (error) {
      console.log(error);
    }
    else {
      res.json(foundParticipants);
    }
  });
})
.post(parseUrlencoded,function(req,res){
  Participant.create(req.body,function(error,newParticipant){
    if (error) {
      console.log(error);
    }
    else {
      res.json(newParticipant);
    }
  });
});

router.route('/:race_id/participants/category/:category')
.get(function(req,res){
  var raceId = req.params['race_id'];
  var category = req.params['category'];
  Participant.find({race_id:raceId,category:category},'',function(error,participants){
    if (error) {
      console.log(error);
    }
    else {
      res.json(participants);
    }
  });
});

router.route('/:race_id/participants/:participant_id')
.delete(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  var participantId = req.params['participant_id'];
  Participant.findOnAndRemove({race_id:raceId,_id:participantId},function(error,removedParticipant){
    if (error) {
      console.log(error);
    }
    else {
      res.json(removedParticipant);
    }
  });
}).put(parseUrlencoded, function(req,res){
  var raceId = req.params['race_id'];
  var participantId = req.params['participant_id'];
  Participant.findOneAndUpdate({participantId:raceId, race_id: raceId},req.body,{new:true},function(error,updateRace){
    if (error) {
      console.log(error);
    }
    else {
      res.json(updateRace);
    }
  });
})

module.exports = router;
