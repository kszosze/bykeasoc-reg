var express = require('express');
var router = express.router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});
var Club   = require('./app/models/club'); // get our mongoose model

router.route('/')
.get(function(req,res){
  res.json(Club.all());
}).post(parseUrlencoded,function(req,res){
  res.json(Club.create(req.body));
});

router.route('/:club_id')
.get(function(req,res){
  var clubId = parseInt(req.param('club_id'),10);
  res.json(Club.get(clubId)| {});
})
.put(parseUrlencoded,function(req,res){
  res.json(Club.update(req.body));
})
.delete(function(req,res){
  var clubId = parseInt(req.param('club_id'),10);
  res.json(Club.delete(clubId)| {});
});

module.exports = router;
