var app = angular.module('mainApp', ['ngAnimate', 'mgcrea.ngStrap', 'ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'front.html'
	})
	.otherwise({
		redirectTo: '/home'
	});
});