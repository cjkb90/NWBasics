'use strict';

app.config(function($stateProvider){
	$stateProvider
		.state('products', {
			url: '/products',
			templateUrl: '/browser/products/products.html',
			controller: 'ProductCtrl',
			resolve: {
				products: function(ProductFactory){
					return ProductFactory.products();
				}
			}
		})
		.state('products.details', {
			url: '/:letter',
			templateUrl: '/browser/products/productsDetails.html',
			controller: 'ProductCtrl',
			resolve: {
				products: function($stateParams, ProductFactory){
					return ProductFactory.productsByLetter($stateParams.letter);
				}
			}
		})
})