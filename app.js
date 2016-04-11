var express = require('express');
var path = require('path');

var routes = require('./routes/index');
var api = require('./routes/api');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', api);

module.exports = app;
