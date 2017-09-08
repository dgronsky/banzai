// script.js

// create the module and name it banzaiApp
// also include ngRoute for all our routing needs
var banzaiApp = angular.module('banzaiApp', ['ngRoute']);

// configure our routes
banzaiApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    debugger;
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        .when('/info', {
            templateUrl: 'pages/info.html',
            controller: 'infoController'
        })

       .when('/team', {
            templateUrl: 'pages/team.html',
            controller: 'teamController'    
        })
        .when('/trainers', {
            templateUrl: 'pages/trainers.html',
            controller: 'trainersController'
        })

        .when('/shop', {
            templateUrl: 'pages/shop.html',
            controller: 'shopController'
        });

}]);

// create the controller and inject Angular's $scope
banzaiApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look! home page';
});

banzaiApp.controller('infoController', function ($scope) {
    debugger;
    $scope.message = 'Look! I am an info page.';
});

banzaiApp.controller('teamController', function ($scope) {
    $scope.message = 'Look! I am an team page.';
});

banzaiApp.controller('trainersController', function ($scope) {
    $scope.message = 'Look! I am an trainers page.';
});

banzaiApp.controller('shopController', function ($scope) {
    $scope.message = 'Look! I am an shop page.';
});
