'use strict';

app.controller('ProductCtrl', function($scope, ProductFactory, products){
	$scope.alphabet = ProductFactory.alphabet;
	$scope.products = products;
	$scope.newProduct = function(product){
		ProductFactory.newProduct(product);
		refreshProducts();
	}
	$scope.deleteProd = function(product){
		ProductFactory.deleteProd(product);
		refreshProducts();
	}

	var refreshProducts = function(){
		ProductFactory.products()
		.then(function(products){
			$scope.products = products;
		})
	}
});