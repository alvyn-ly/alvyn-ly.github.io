var app = angular.module('mainApp', ['ngAnimate', 'mgcrea.ngStrap', 'ngRoute']);

app.config(function($locationProvider, $routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'front.html'
	})
	.when('/dotleaflet', {
		templateUrl: 'dotleaflet.html'
	})
	.when('/let-it-ride', {
		templateUrl: 'ride.html'
	})
	.when('/other', {
		templateUrl: 'other.html'
	})
	.when('/svic', {
		templateUrl: 'front.html'
	})
	.when('/wump', {
		templateUrl: 'front.html'
	})
	.when('/about', {
		templateUrl: 'front.html'
	})
	.otherwise({
		redirectTo: '/'
	})
	;
	$locationProvider.html5Mode(true); 
});