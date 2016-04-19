'use strict';
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var utils = require('./utils');
var Club = require('../model/club');

describe('Clubs', function(){

  beforeEach(function (done){
    var club = {
      id: "001",
      name: "The Spinning wheels",
      contact_id: "001",
      web_page: "www.thespinningwheels.co.uk",
      location: "DrumDrum",
      active: true
    };
    Club.create(club,function(error){
      assert.ifError(error);
    });
    done();
  });

  it('Can create a club', function(done){
    var club = {
      id: "003",
      name: "The wheels on fire",
      contact_id: "002",
      web_page: "www.thewheelsonfire.co.uk",
      location: "Belfast",
      active: true
    };
    Club.create(club,function(error, newClub){
      should.not.exist(error);
      should.exist(newClub);
      newClub.name.should.equal("The wheels on fire");
      newClub.location.should.equal("Belfast");
    });

    done();
  });

  it('Can find a club', function(done){
    Club.findOne({id:"001"},function(error,foundClub){
      should.not.exist(error);
      should.exist(foundClub);
      foundClub.name.should.equal("The Spinning wheels");
      foundClub.location.should.equal("DrumDrum");
    });
    done();
  });

  it('Can remove a club', function(done){
    Club.findOneAndRemove({id:"001"},function(error,removedClub){
      should.not.exist(error);
      should.exist(removedClub);
      removedClub.name.should.equal("The Spinning wheels");
      removedClub.location.should.equal("DrumDrum");
    });
    Club.findOne({id:"001"},function(error,removedClub){
      should.not.exist(error);
      should.not.exist(removedClub);
    });
    done();
  });


  it('Can update a club', function(done){
    var club = {
      name: "The Broken wheels",
      web_page: "www.thebrokenwheels.co.uk",
      location: "Hillsboroug"
    };
    Club.findOneAndUpdate({id:"001"},club,function(error,updateClub){
        should.not.exist(error);
        should.exist(updateClub);
        updateClub.should.be.an('object');
        updateClub.name.should.equal('The Broken Wheels');
        updateClub.location.should.equal('Hillsboroug');
        updateClub.active.should.equal(true);
      });
    done();
  });
});
