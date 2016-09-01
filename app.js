var express = require('express');
var app = express();

var PORT = process.env.PORT||3000;
var routes = require(__dirname + '/routes/');

app.use(routes);

app.listen(PORT, function(){
	console.log('Listening at', PORT);
});