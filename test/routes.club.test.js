'use strict';
process.env.NODE_ENV = 'test';
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var app = require('../app.js');
var request = require('supertest').agent(app.listen());
var utils = require('./utils');
var Club = require('../model/club');
describe('Club routes', function(){

  beforeEach(function(done){
    var clubs = [{
      id: "001",
      name: "The Spinning wheels",
      contactId: "001",
      web_page: "www.thespinningwheels.co.uk",
      location: "DrumDrum",
      active: true
    },
    {
      id: "002",
      name: "The Fire wheels",
      contactId: "001",
      web_page: "www.thefirewheels.co.uk",
      location: "DrumDrum",
      active: true
    },
    {
      id: "003",
      name: "The Metal wheels",
      contactId: "001",
      web_page: "www.themetalwheels.co.uk",
      location: "DrumDrum",
      active: true
    }];
    Club.create(clubs,function(error){
      assert.ifError(error);
    });
    done();
  });

  it('load all clubs',function(done){
    request
    .get('/clubs')
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

    it('create a club',function(done){
      var club = {
        "id": "004",
        "name": "The wheels on fire",
        "contactId": "002",
        "web_page": "www.thewheelsonfire.co.uk",
        "location": "Belfast",
        "active": "true"
      };

      request
      .post('/clubs')
      .send(club)
      .expect('Content-type','application/json; charset=utf-8')
      .expect(200) // THis is HTTP response
      .end(function(err,res){
          // HTTP status should be 200
          res.status.should.equal(200);
          var object = res.body;
          expect(object.id).to.equal("004");
          done();
        });
      });

      it('load a club',function(done){
        request
        .get('/clubs/001')
        .expect('Content-type','application/json; charset=utf-8')
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(200);
            var object = res.body;
            expect(object.id).to.equal("001");
            expect(object.name).to.equal("The Spinning wheels");
            done();
          });
        });

        it('Update a club',function(done){
          var club = {
            "id": "001",
            "name": "The smoothie wheels",
            "contactId": "002",
            "web_page": "www.thesmoothiewheels.co.uk",
            "location": "Belfast",
            "active": "true"
          };
          request
          .put('/clubs/001')
          .send(club)
          .expect('Content-type','application/json; charset=utf-8')
          .expect(200) // THis is HTTP response
          .end(function(err,res){
              // HTTP status should be 200
              res.status.should.equal(200);
              var object = res.body;
              expect(object.id).to.equal("001");
              expect(object.name).to.equal("The smoothie wheels");
              done();
            });
          });

          it('Delete a club',function(done){
            request
            .delete('/clubs/003')
            .expect('Content-type','application/json; charset=utf-8')
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                var object = res.body;
                expect(object.id).to.equal("003");
                expect(object.active).to.equal(false);
                done();
              });
            });

  });
