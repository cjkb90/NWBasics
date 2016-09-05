var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname, '..', 'index.js'));
var Product = db.Product;

router.get('/products', function(req, res){
	res.send('These are all of our products');
});

module.exports = router;