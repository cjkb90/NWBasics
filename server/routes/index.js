var express = require('express');
var router = express.Router();
var models = require('../index.js');
var Product = models.Product;
var path = require('path');
var apiIndex = require('./apiIndex.js');

var landingPage = path.join(__dirname, '..', '..', '/public/index.html');

router.use('/api', apiIndex);

router.get('/products', function(req, res){
	res.send("This is the PRODUCTS page");
});

router.get('/', function(req, res){
	res.sendFile(landingPage);
});

module.exports = router;