var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Race = require('../model/race');
var parseUrlencoded = bodyParser.urlencoded({extended:false});

router.route('/')
.get(function(req,res){
  var today = new Date();
  Race.findOneAndUpdate({"end_registration" : {"$lt" : today }}, {"$set" : { open : false }}, { "new": true }, function(error,data){
    if (error) {
      console.log(error);
    };
  })
  Race.find({},'id date name end_registration',function(err,races){
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
  Race.findOne({id:raceId},'',function(error,foundRace){
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
.get(function(req,res){
  var raceId = req.params['race_id'];
  Race.findOne({id:raceId},'',function(error,foundRace){
    res.json(foundRace.participants);
  });
})
.post(parseUrlencoded,function(req,res){
  var raceId = req.params['race_id'];
  Race.findOneAndUpdate({id:raceId},{"$pull":{"participants":req.body}},{new:true},function(error,updateRace){
    res.json(updateRace);
  });
});

router.route('/:race_id/participants/licence/:category')
.get(function(req,res){
  var raceId = req.params['race_id'];
  var category = req.params['category'];
  Race.findOne({id:raceId},{"$push":{"participants":{licence:category}}},{new:true},function(error,updateRace){
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

router.route('/:race_id/participants/category/:category_id')
.get(function(req,res){
  var raceId = req.params['race_id'];
  var categoryId = req.params['category_id'];
  Race.findOne({id:raceId},function(error,result){
    competitors = [];
    for (var runner in result.participants){
      if (result.participants[runner].category == categoryId)
      {
        competitors.push(result.participants[runner]);
      }
    }
    res.json(competitors);
  });
});

module.exports = router;
