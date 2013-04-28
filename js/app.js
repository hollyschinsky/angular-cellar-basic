'use strict';

// Declare app level module which depends on filters, and services
/* App Module */
var myApp = angular.module('myApp', ['ngResource']);
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
            when('/', {templateUrl:'/angular-cellar-basic/partials/welcome.html'}).
            when('/wines', {templateUrl:'/angular-cellar-basic/partials/wine-list.html'}).
            when('/wines/add', {templateUrl:'/angular-cellar-basic/partials/wine-details.html',controller: WineAddCtrl}).
            when('/wines/:wineId', {templateUrl: '/angular-cellar-basic/partials/wine-details.html',controller: WineDetailCtrl}).
            when('/about', {templateUrl:'/angular-cellar-basic/partials/about.html'})
    }]);



