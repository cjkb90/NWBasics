var express = require('express');
	router = express.Router();
	models = require('../index.js');
	Product = models.Product;


router.get('/', function(req, res){
	res.send("This is the HOME page");
});

router.get('/products', function(req, res){
	res.send("This is the PRODUCTS page");
});

module.exports = router;