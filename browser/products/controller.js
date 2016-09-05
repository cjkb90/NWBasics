'use strict';

app.controller('ProductCtrl', function($scope, ProductFactory){
	$scope.alphabet = ProductFactory.alphabet;
	$scope.newProduct = function(prodName){
		return ProductFactory.newProduct(prodName);
	}
});