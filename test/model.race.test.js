'use strict';
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var utils = require('./utils');
var Race = require('../model/race');
var Participant = require('../model/participant');
describe('Races', function(){

  beforeEach(function (done){
    var race ={
        id:"001",
        name:"The big race ever",
        date:new Date("2026","08","14"),
        start_registration:new Date("2026","05","14"),
        end_registration:new Date("2026","07","14"),
        startPoint:"The Mournes",
        endPoint:"Portaferry",
        distance:200,
        duration:12,
        organiser_id:"001",
        fees:[{
          id:"001",
          category:"Senior 40+",
          conditions:"Be older than 40 years",
          pre_register:true,
          pra_paid:true,
          fee:15
        },{
          id:"002",
          category:"Senior 40+",
          conditions:"Be older than 40 years",
          pre_register:true,
          pra_paid:false,
          fee:18
        },{
          id:"003",
          category:"Senior 40+",
          conditions:"Be older than 40 years",
          pre_register:false,
          pra_paid:false,
          fee:20
        }]
    };
    Race.create(race,function(error){
      assert.ifError(error);
    });
    done();
  });

  it('Can create a race', function(done){
    var race ={
        id:"002",
        name:"The small race ever",
        date:new Date("2026","05","14"),
        start_registration:new Date("2026","04","14"),
        end_registration:new Date("2026","02","14"),
        startPoint:"Cave Hill",
        endPoint:"Black Mountain",
        distance:10,
        duration:2,
        organiser_id:"001",
        fees:[{
          id:"001",
          category:"Senior 40+",
          conditions:"Be older than 40 years",
          pre_register:true,
          pra_paid:true,
          fee:15
        },{
          id:"002",
          category:"Senior 40+",
          conditions:"Be older than 40 years",
          pre_register:true,
          pra_paid:false,
          fee:18
        },{
          id:"003",
          category:"Senior 40+",
          conditions:"Be older than 40 years",
          pre_register:false,
          pra_paid:false,
          fee:20
        }]
    };
    Race.create(race,function(error, newRace){
      should.not.exist(error);
      should.exist(newRace);
      newRace.name.should.equal("The small race ever");
      newRace.startPoint.should.equal("Cave Hill");
    });

    done();
  });

  it('Can find a race', function(done){
        Race.findOne({id:"001"},function(error,foundRace){
        should.not.exist(error);
        should.exist(foundRace);
        foundRace.name.should.equal("The big race ever");
        foundRace.startPoint.should.equal("The Mournes");
    });
    done();
  });

  it('Can remove a race', function(done){
      Race.findOneAndRemove({id:"001"},function(error,removedRace){
          should.not.exist(error);
          should.exist(removedRace);
          removedRace.name.should.equal("The big race ever");
          removedRace.startPoint.should.equal("The Mournes");
      });
      Race.findOne({id:"001"},function(error,foundRace){
        should.not.exist(error);
        should.not.exist(foundRace);
      });
    done();
  });

  it('Can update a race', function(done){
    var race = {
      distance: 300,
      duration: 15,
      endPoint: "Hillsboroug"
    };
   Race.findOneAndUpdate({id:"001"},race,function(error,updateRace){
        should.not.exist(error);
        should.exist(updateRace);
        updateRace.should.be.an('object');
        updateRace.duration.should.equal(15);
        updateRace.distance.should.equal(300);
        updateRace.endPoint.should.equal("Hillsboroug");
        updateRace.startPoint.should.equals("The Mournes");
      });
    done();
  });

  it ('Can add a participant to the race', function(done){
    var participant = {
      name: "Joe",
      surname: "Smith",
      subscribedOn: new Date("2026","06","01"),
      category: "Senior 40+",
      fee_id:"002",
      licence: "Full UK",
      club_id: "002",
      paid: true
    };
    Participant.create(participant,function(error,newParticipant){
      should.not.exist(error);
      should.exist(newParticipant);
    });
    done();
  });

  it ('Can remove a participant from a race', function(done){
    Participant.findOneAndRemove({id:"001"},'',function(error,foundRace){
      should.not.exist(error);
      should.exist(foundRace);
      should.exist(foundRace.participants);
      expect(foundRace.participants.lenght).to.be(0);
    });
    done();
  });
});
