var express = require('express');
var session = require('express-session');
var csrf = require('csurf');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file

var races = require('./routes/races');
var users = require('./routes/users');
var clubs = require('./routes/clubs');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});

var app = express();

app.use('/races',races);
app.use('/users',users);

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));


app.use(session({
  secret: 'My super session secret',
  cookie: {
    httpOnly: true,
    secure: true
  }
}));

app.use(csrf());

app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});

app.route('/')
.get(function(req,res){

});

app.route('/login')
.get(function(req,res){

})
.post(parseUrlencoded,function(req,res){

});
