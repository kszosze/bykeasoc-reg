var express = require('express');
var router = express.router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});
var Race   = require('./app/models/race'); // get our mongoose model

router.route('/')
.get(function(req,res){
  res.json(Race.all());
}).post(parseUrlencoded,function(req,res){
  res.json(Race.create(req.body));
});

router.route('/:race_id')
.get(function(req,res){
  var raceId = parseInt(req.param('race_id'),10);
  res.json(Race.get(raceId)|{});
})
.put(parseUrlencoded,function(req,res){
  res.json(Race.update(req.body));
})
.delete(function(req,res){
  var raceId = parseInt(req.param('race_id'),10);
  res.json(Race.delete(raceId)| {});
});

module.exports = router;
