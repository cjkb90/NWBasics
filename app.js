var express = require('express');
var app = express();
var routes = require(__dirname + '/server/routes/');

app.use(routes);

var PORT = process.env.PORT||3000;

app.listen(PORT, function(){
	console.log('Listening at', PORT);
});