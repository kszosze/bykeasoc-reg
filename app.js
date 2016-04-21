var express = require('express');
var session = require('express-session');
var csrf = require('csurf');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var http = require('http');
var path = require('path');
var races = require('./routes/races');
var users = require('./routes/users');
var clubs = require('./routes/clubs');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});

var app = express();
var env = process.env.NODE_ENV || 'development';
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 3000; // used to create, sign, and verify tokens
mongoose.connect(config.db[app.settings.env],function(err){
 if (err) console.error.bind(console, 'connection error:');
});
mongoose.connection.once('open',function(){
  console.log("We are connected");
});
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));

// use morgan to log requests to the console
app.use(morgan('dev'));


/*app.use(session({
  secret: 'My super session secret',
  cookie: {
    httpOnly: true,
    secure: true
  }
}));*/

//app.use(csrf());

app.use(function(req, res, next) {
  //res.locals._csrf = req.csrfToken();
  next();
});

app.route('/')
.get(function(req,res){
  res.sendFile('/public/index.html', { root : __dirname});
});

app.route('/login')
.get(function(req,res){

})
.post(parseUrlencoded,function(req,res){

});

app.use('/races',races);
app.use('/users',users);
app.use('/clubs',clubs);

if(!module.parent){
    app.listen(port,function(){
      console.log("I am listening at PORT %d",port);
    });
 }
module.exports = app;
