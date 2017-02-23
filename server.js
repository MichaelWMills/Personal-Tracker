var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('./client'));

app.listen(port, function() {
	console.log('Server connected on ' + port);
});