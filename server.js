var express = require('express');
var php = require('php-proxy-middleware');

var app = express();

app.use(php(__dirname + '/wordpress'));

//app.listen(3000);

module.exports = app;
