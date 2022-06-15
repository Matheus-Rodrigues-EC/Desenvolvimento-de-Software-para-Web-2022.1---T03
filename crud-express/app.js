var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var StudentRoutes = require('./routes/student/StudentRoute');
var ProfessorRoutes = require('./routes/professor/ProfessorRoutes');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/users', users);
app.use('/students', StudentRoutes);
app.use('/professors', ProfessorRoutes);

module.exports = app;
