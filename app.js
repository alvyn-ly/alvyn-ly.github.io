var app = angular.module('mainApp', ['ngAnimate', 'mgcrea.ngStrap', 'ngRoute']);

app.config(function($locationProvider, $routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'front.html'
	})
	.when('/dotleaflet', {
		templateUrl: 'front.html'
	})
	.when('/let-it-ryde', {
		templateUrl: 'front.html'
	})
	// .otherwise({
	// 	redirectTo: '/'
	// })
	;
	$locationProvider.html5Mode(true); 
});