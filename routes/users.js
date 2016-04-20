var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});
var User = require('../model/user'); // get our mongoose model

router.route('/')
.get(function(req,res){
   User.find(function(error,users){
     res.json(users);
   });
})
.post(parseUrlencoded,function(req,res){
   User.create(req.body,function(error,newUser){
     res.json(newUser);
   });
});

router.route('/:user_id')
.get(function(req,res){
   var userId = req.params['user_id'];
   User.findOne({id:userId},function(error,foundUser){
      res.json(foundUser);
   });
})
.put(parseUrlencoded,function(req,res){
   var userId = req.params['user_id'];
   User.findOneAndUpdate({id:userId},req.body,{new:true},function(error,updateUser){
     res.json(updateUser);
   });
})
.delete(function(req,res){
   var userId = req.params['user_id'];
   User.findOneAndUpdate({id:userId},{active:false},{new:true},function(error,updateUser){
     res.json(updateUser);
   });
});

module.exports = router;
