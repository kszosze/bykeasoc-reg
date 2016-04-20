var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Race = require('../model/race');
var parseUrlencoded = bodyParser.urlencoded({extended:false});

router.route('/')
.get(function(req,res){
  Race.find().exec(function(err,races){
    res.json(races);
  });
}).post(parseUrlencoded,function(req,res){
  Race.create(req.body,function(error,newRace){
    res.json(newRace);
  });
});

router.route('/:race_id')
.get(function(req,res){
  var raceId = req.params['race_id'];
  Race.findOne({id:raceId},function(error,foundRace){
    res.json(foundRace);
  });
})
.put(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  Race.findOneAndUpdate({id:raceId},req.body,{new:true},function(error,updateRace){
    res.json(updateRace);
  });
})
.delete(function(req,res){
  var raceId = req.params['race_id'];
  Race.findOneAndUpdate({id:raceId},{valid:false},{new:true},function(error,deleteRace){
    res.json(deleteRace);
  });
});

router.route('/:race_id/fees')
.post(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  Race.findOneAndUpdate({id:raceId},{"$push":{"fees":req.body}},{new:true},function(error,updateRace){
    res.json(updateRace);
  });
});

router.route('/:race_id/fees/:fee_id')
.delete(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  var feeId = req.params['fee_id'];
  Race.findOneAndUpdate({id:raceId},{"$pull":{"fees":{id:feeId}}},{new:true},function(error,updateRace){
    res.json(updateRace);
  });
});

router.route('/:race_id/participants')
.post(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  Race.findOneAndUpdate({id:raceId},{"$push":{"participants":req.body}},{new:true},function(error,updateRace){
    res.json(updateRace);
  });
});

router.route('/:race_id/participants/:participant_id')
.delete(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  var participantId = req.params['participant_id'];
  Race.findOneAndUpdate({id:raceId},{"$pull":{"participants":{id:participantId}}},{new:true},function(error,updateRace){
    res.json(updateRace);
  });
})
.put(parseUrlencoded, function(req,res){
  var raceId = req.params['race_id'];
  var participantId = req.params['participant_id'];
  Race.findOneAndUpdate({id:raceId},{"$pull":{"participants":{id:participantId}}},{new:true},function(error){
    if (error) { console.log(error)};
  });
  Race.findOneAndUpdate({id:raceId},{"$push":{"participants":req.body}},{new:true},function(error,updateRace){
    if (error) {console.log(error)};
    res.json(updateRace);
  });
});

module.exports = router;
