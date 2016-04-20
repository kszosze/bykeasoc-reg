'use strict';
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var utils = require('./utils');
var User = require('../model/user');

describe('Users', function(){

  beforeEach(function(done){
    var user = {
      id: "001",
      name: "Jim",
      surname: "Smith",
      dob: new Date("1985","03","03"),
      password: "123456",
      admin: true,
      active: true
    };
    User.create(user,function(error){
      assert.ifError(error);
    });
    done();
  });

  it('Can create a User', function(done){
    var user = {
        id: "002",
        name: "Vasily",
        surname: "Utrenchko",
        dob: new Date("1985","03","03"),
        password: "654321",
        admin: true,
        active: true
    };
    User.create(user,function(error,newUser){
      should.not.exist(error);
      should.exist(newUser);
      newUser.name.should.equal("Vasily");
      newUser.password.should.equal("654321");
    });
    done();
  });

  it('Can update an User',function(done){
    var user = {
      name: "Mijail",
      surname: "Dovstoiesky"
    };
    User.findOneAndUpdate({id:"001"},user,function(error,updatedUser){
      should.not.exist(error);
      should.exist(updatedUser);
      updatedUser.should.be.an('object');
      updatedUser.name.should.equal('Mijail');
      updatedUser.password.should.equal('654321');
    });
    done();
  });

  it('Can remove an User',function(done){
    User.findOneAndRemove({id:"001"},function(error,removedUser){
      should.not.exist(error);
      should.exist(removedUser);
      removedUser.should.be.an('object');
      removedUser.name.should.equal('Jim');
      removedUser.password.should.equal('123456');
    });
    User.findOne({id:"001"},function(error,foundUser){
      should.not.exist(error);
      should.not.exist(foundUser);
    });
    done();
  });
});
