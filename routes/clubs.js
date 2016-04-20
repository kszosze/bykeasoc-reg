var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});
var Club = require('../model/club'); // get our mongoose model

router.route('/')
.get(function(req,res){
  Club.find().exec(function(err,clubs){
    res.json(clubs);
  });
}).post(parseUrlencoded,function(req,res){
  Club.create(req.body,function(error,newClub){
    res.json(newClub);
  });
});

router.route('/:club_id')
.get(function(req,res){
  var clubId = req.param('club_id');
  Club.findOne({id:clubId},function(error,foundClub){
    if (error) {
      console.log('got an error');
    }
    res.json(foundClub);
  });
})
.put(parseUrlencoded,function(req,res){
  Club.findOneAndUpdate({id:req.param('club_id')},req.body,{new: true},function(error,updateClub){
    if (error) {
      console.log('got an error');
    }
    res.json(updateClub);
  });
})
.delete(function(req,res){
  var clubId = req.param('club_id');
  Club.findOneAndUpdate({id:clubId},{active:false},{new:true},function(error,removedClub){
    res.json(removedClub);
  });
});

module.exports = router;
