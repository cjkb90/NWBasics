'use strict';

app.factory('ProductFactory', function($http){
	var ProductFactory = {};

	ProductFactory.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

	ProductFactory.newProduct = function(prodName){
		console.log(prodName)
	};

	return ProductFactory;
})