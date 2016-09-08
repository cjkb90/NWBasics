'use strict';

app.factory('ProductFactory', function($http){
	var ProductFactory = {};

	ProductFactory.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

	ProductFactory.products = function(){
		return $http.get('/api/products')
		.then(function(response){
			return response.data;
		})
		.catch(function(err){
			throw(err);
		})
	}

	ProductFactory.newProduct = function(prod){
		return $http.post('/api/products', prod)
		.then(function(response){
			console.log(response.data);
			return response.data;
		})
		.catch(function(err){
			throw(err);
		})
	};

	ProductFactory.deleteProd = function(prod){
		return $http.delete('/api/products/' + prod._id)
		.then(function(response){
			console.log("RESPONSE IS: ", response)
			return response.data;
		})
		.catch(function(err){
			throw(err);
		})
	}

	return ProductFactory;
})