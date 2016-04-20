'use strict';
process.env.NODE_ENV = 'test';
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var app = require('../app.js');
var request = require('supertest').agent(app.listen());
var utils = require('./utils');
var User = require('../model/user');
describe('User routes', function(){

  beforeEach(function(done){
    var users = [{
      id: "001",
      name: "Jim",
      surname: "Smith",
      dob: new Date("1985","03","03"),
      password: "123456",
      admin: true,
      active: true
    },
    {
      id: "002",
      name: "Kevin",
      surname: "Burn",
      dob: new Date("1975","03","03"),
      password: "123456",
      admin: false,
      active: true
    },
    {
      id: "003",
      name: "Donald",
      surname: "Duck",
      dob: new Date("1955","03","03"),
      password: "123456",
      admin: false,
      active: true
    }];
    User.create(users,function(error){
      assert.ifError(error);
    });
    done();
  });

  it('load all users',function(done){
    request
    .get('/users')
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

    it('create a user',function(done){
      var user =   {
          id: "004",
          name: "Pluto",
          surname: "Dog",
          dob: new Date("1965","03","03"),
          password: "123456",
          admin: false,
          active: true
        };

      request
      .post('/users')
      .send(user)
      .expect('Content-type','application/json; charset=utf-8')
      .expect(200) // THis is HTTP response
      .end(function(err,res){
          // HTTP status should be 200
          res.status.should.equal(200);
          var object = res.body;
          expect(object.id).to.equal("004");
          expect(object.name).to.equal("Pluto");
          done();
        });
      });

      it('load a user',function(done){
        request
        .get('/users/001')
        .expect('Content-type','application/json; charset=utf-8')
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(200);
            var object = res.body;
            expect(object.id).to.equal("001");
            expect(object.name).to.equal("Jim");
            done();
          });
        });

        it('Update an user',function(done){
          var user =   {
              id: "003",
              surname: "The Duck",
              dob: new Date("1955","03","03"),
              active: true
            };
          request
          .put('/users/003')
          .send(user)
          .expect('Content-type','application/json; charset=utf-8')
          .expect(200) // THis is HTTP response
          .end(function(err,res){
              // HTTP status should be 200
              res.status.should.equal(200);
              var object = res.body;
              expect(object.id).to.equal("003");
              expect(object.name).to.equal("Donald");
              expect(object.surname).to.equal("The Duck");
              expect(object.active).to.equal(true);
              done();
            });
          });

          it('Delete an user',function(done){
            request
            .delete('/users/003')
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
