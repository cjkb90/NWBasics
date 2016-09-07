'use strict';

app.controller('ProductCtrl', function($scope, ProductFactory, products){
	$scope.alphabet = ProductFactory.alphabet;
	$scope.products = products;
	$scope.newProduct = function(product){
		return ProductFactory.newProduct(product);
	}
});