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
		// .state('products.list', {
		// 	url: '/list',
		// 	templateUrl: '/browser/products/productsList.html',
		// 	controller: 'ProductListCtrl',
		// 	resolve: {
		// 		miniature: function(){
		// 			return "I am miniature"
		// 		}
		// 	}
		// })
})