var app = angular.module('mainApp', ['ngRoute','ui.bootstrap']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});