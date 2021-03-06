'use strict';
process.env.NODE_ENV = 'test';
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var app = require('../app.js');
var request = require('supertest').agent(app.listen());
var utils = require('./utils');
var Race = require('../model/race');
var Participant = require('../model/participant');

describe('Race routes', function(){

  beforeEach(function(done){
    var races = [{
      id:"001",
      name:"The big race ever",
      date:new Date("2016","07","05"),
      start_registration:new Date("2016","05","05"),
      end_registration:new Date("2016","07","04"),
      startPoint:"Some point",
      endPoint:"Other Point",
      distance:"34m",
      duration:"2h",
      organiser_id:"001",
      valid:true,
      fees:[]
    },
    {
      id:"002",
      name:"The small race ever",
      date:new Date("2016","07","05"),
      start_registration:new Date("2016","05","05"),
      end_registration:new Date("2016","07","04"),
      startPoint:"Some point",
      endPoint:"Other Point",
      distance:"34m",
      duration:"2h",
      organiser_id:"001",
      valid:true,
      fees:[]
    },
    {
      id:"003",
      name:"The hard race ever",
      date:new Date("2016","07","05"),
      start_registration:new Date("2016","05","05"),
      end_registration:new Date("2016","07","04"),
      startPoint:"Some point",
      endPoint:"Other Point",
      distance:"34m",
      duration:"2h",
      organiser_id:"001",
      valid:true,
      fees:[{
        id:"001",
        category:"Senior 40+",
        conditions:"Be really old",
        pre_register:true,
        pre_paid:true,
        fee:20
      }]
    }];
    Race.create(races,function(error){
      assert.ifError(error);
    });
    var participants = [{
      id:"001",
      name: "John",
      surname: "Smith",
      subscribedOn: "2016/06/24 10:00",
      category: "Senior 40+",
      fee_id: "002",
      licence: "Full",
      club_id: "002",
      race_id: "001",
      paid: false,
      valid: true
    },{
      id:"002",
      name: "John",
      surname: "Smith",
      subscribedOn: "2016/06/24 10:00",
      category: "Senior 40+",
      fee_id: "001",
      licence: "Full",
      club_id: "003",
      race_id: "003",
      paid: false,
      valid: true
    }];
    Participant.create(participants,function(error){
      assert.ifError(error);
    });
    done();
  });

  it('load all races',function(done){
    request
    .get('/races')
    .expect('Content-type','application/json; charset=utf-8')
    .expect(200) // THis is HTTP response
    .end(function(err,res){
        // HTTP status should be 200
        res.status.should.equal(200);
        var object = res.body;
        expect(object.length).to.equal(3);
        done();
      });
    });

    it('create a race',function(done){
      var race = {
          "name":"The hard race ever",
          "date":"2016/07/21 10:00",
          "start_registration":"2016/05/05 09:00",
          "end_registration":"2016/07/04 23:00",
          "startPoint":"Some point",
          "endPoint":"Other Point",
          "distance":"34m",
          "duration":"2h",
          "organiser_id":"001",
          "valid":"true",
      };

      request
      .post('/races')
      .send(race)
      .expect('Content-type','application/json; charset=utf-8')
      .expect(200) // THis is HTTP response
      .end(function(err,res){
          // HTTP status should be 200
          res.status.should.equal(200);
          var object = res.body;
          expect(object.id).to.equal("003");
          done();
        });
      });

      it('load a race',function(done){
        request
        .get('/races/001')
        .expect('Content-type','application/json; charset=utf-8')
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(200);
            var object = res.body;
            expect(object.id).to.equal("001");
            expect(object.name).to.equal("The big race ever");
            done();
          });
        });

        it('Update a race',function(done){
          var club = {
            "name": "The interminable race",
          };
          request
          .put('/races/001')
          .send(club)
          .expect('Content-type','application/json; charset=utf-8')
          .expect(200) // THis is HTTP response
          .end(function(err,res){
              // HTTP status should be 200
              res.status.should.equal(200);
              var object = res.body;
              expect(object.id).to.equal("001");
              expect(object.name).to.equal("The interminable race");
              done();
            });
          });

          it('Delete a race',function(done){
            request
            .delete('/races/003')
            .expect('Content-type','application/json; charset=utf-8')
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                var object = res.body;
                expect(object.id).to.equal("003");
                expect(object.valid).to.equal(false);
                done();
              });
            });

          it('Add a fee to a race',function(done){
            var fee={
              id:"001",
              category:"Senior 40+",
              conditions:"Be really old",
              pre_register:true,
              pre_paid:true,
              fee:20
            };
            request
            .post('/races/001/fees')
            .send(fee)
            .expect('Content-type','application/json; charset=utf-8')
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                var object = res.body;
                expect(object.id).to.equal("001");
                expect(object.valid).to.equal(true);
                expect(object.fees.length).to.equal(1);
                done();
              });
            });

      it('Remove a fee from a race',function(done){
        request
        .delete('/races/003/fees/001')
        .expect('Content-type','application/json; charset=utf-8')
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(200);
            var object = res.body;
            expect(object.id).to.equal("003");
            expect(object.valid).to.equal(true);
            expect(object.fees.length).to.equal(0);
            done();
          });
        });

      it('Add participant in a race', function(done){
        var participant ={
          id:"001",
          name: "John",
          surname: "Smith",
          subscribedOn: "2016/06/24 10:00",
          category: "Senior 40+",
          fee_id: "001",
          licence: "Full",
          club_id: "001",
          race_id: "003",
          paid: true,
          valid : true
        };
        request
        .post('/races/003/participants')
        .send(participant)
        .expect('Content-type','application/json; charset=utf-8')
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(200);
            var object = res.body;
            expect(object.name).to.equal("John");
            expect(object.paid).to.equal(true);
            done();
          });
      });

      it('Update participant in a race', function(done){
        var participant ={
          id:"001",
          name: "John",
          surname: "Smith",
          subscribedOn: "2016/06/24 10:00",
          category: "Senior 40+",
          fee_id: "002",
          licence: "Full",
          club_id: "002",
          race_id: "001",
          paid: false,
          valid: true
        };
        request
        .put('/races/003/participants/002')
        .send(participant)
        .expect('Content-type','application/json; charset=utf-8')
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(200);
            var object = res.body;
            expect(object.name).to.equal("John");
            expect(object.paid).to.equal(false);
            done();
          });
      });
  });
