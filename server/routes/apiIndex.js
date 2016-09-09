var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname, '..', 'index.js'));
var Product = db.Product;

router.get('/products', function(req, res){
	Product.find()
	.then(function(response){
		res.send(response);
	})
});

router.get('/products/:letter', function(req, res){
	var letter = new RegExp('^'+req.params.letter,'i');
	Product.find({
		"name": { "$regex": letter } 
	})
	.then(function(response){
		res.send(response);
	})
});

router.post('/products', function(req, res){
	var newProd = new Product({name: req.body.name, quantity: req.body.quantity});
	newProd.save()
	.then(function(response){
		res.send(response);
	})
});

router.delete('/products/:prodId', function(req, res){
	Product.findOne({_id: req.params.prodId})
	.remove()
	.exec()
	.catch(function(err){
		throw(err);
	})
});

module.exports = router;