var express = require('express');
var path = require('path');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('client-sessions');
//var expressValidator = require('express-validator');

var index = require('./routes/index');
var operations = require('./routes/operations');
var logout = require('./routes/logout');
var app = express();

app.use(cors());
//app.use(expressValidator());

app.use(session({
    cookieName: 'session',
    secret: 'cmpe273_freelancer',
    duration: 30 * 60 * 1000,    //setting the time for active session
    activeDuration: 5 * 60 * 1000}));// 5 minutes active

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use('./public/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/operations', operations);
app.listen(3001, () => console.log('REact App Listening on port 3k1!'));

app.post('/logout',logout.logout);
module.exports = app;