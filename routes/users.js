var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});
var User = require('../model/user'); // get our mongoose model

router.route('/')
.get(function(req,res){
   User.find(function(error,users){
     if (error) {
       console.log(error);
     }
     else {
       res.json(users);
     }
   });
})
.post(parseUrlencoded,function(req,res){
   User.create(req.body,function(error,newUser){
     if (error) {
       console.log(error);
     }
     else {
       res.json(newUser);
     }
   });
});

router.route('/:user_id')
.get(function(req,res){
   var userId = req.params['user_id'];
   User.findOne({id:userId},function(error,foundUser){
     if (error) {
       console.log(error);
     }
     else {
       res.json(foundUser);
     }
   });
})
.put(parseUrlencoded,function(req,res){
   var userId = req.params['user_id'];
   User.findOneAndUpdate({id:userId},req.body,{new:true},function(error,updateUser){
     if (error) {
       console.log(error);
     }
     else {
       res.json(updateUser);
     }
   });
})
.delete(function(req,res){
   var userId = req.params['user_id'];
   User.findOneAndUpdate({id:userId},{active:false},{new:true},function(error,updateUser){
     if (error) {
       console.log(error);
     }
     else {
       res.json(updateUser);
     }
   });
});

router.route('/search/:user_name')
.get(function(req,res){
  var userName = req.params['user_name'];
  if (userName != '')
  {
  User.find({name: { "$regex": userName, "$options": "i" }},function(error,foundUser){
    if (error) {
      console.log(error);
    }
    res.json(foundUser);
  });
}else{
  User.find().exec(function(error,foundUser){
    if (error){
      console.log(error)
    }
    res.json(foundUser);
  })
}
});

module.exports = router;
