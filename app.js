var app = angular.module('mainApp', ['ngRoute','mgcrea.ngStrap']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});