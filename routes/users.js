var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});
var User = require('../model/user'); // get our mongoose model

router.route('/')
.get(function(req,res){
   res.json(User.all());
})
.post(parseUrlencoded,function(req,res){
   res.json(User.create(req.body));
});

router.route('/:user_id')
.get(function(req,res){
   var userId = parseInt(req.param('user_id'),10);
   res.json(User.get());
})
.put(parseUrlencoded,function(req,res){
   res.json(User.update(req.body));
})
.delete(function(req,res){
   var userId = parseInt(req.param('user_id'),10);
   res.json(User.delete(userId)|{});
});

module.exports = router;
