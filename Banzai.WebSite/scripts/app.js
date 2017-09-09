// script.js

// create the module and name it app
// also include ngRoute for all our routing needs
var app = angular.module('banzaiApp', ['ngRoute']);

//configure our routes
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    //debugger;
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        .when('/info', {
            templateUrl: 'views/info.html',
            controller: 'infoController'
        })

       .when('/team', {
           templateUrl: 'views/team.html',
            controller: 'teamController'    
        })
        .when('/trainers', {
            templateUrl: 'views/trainers.html',
            controller: 'trainersController'
        })

        .when('/shop', {
            templateUrl: 'views/shop.html',
            controller: 'shopController'
        });

}]);



// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look! home page';
});

app.controller('infoController', function ($scope) {
    $scope.message = 'Look! I am an info page.';
});

app.controller('teamController', function ($scope) {
    $scope.message = 'Look! I am an team page.';
});

app.controller('trainersController', function ($scope) {
    $scope.message = 'Look! I am an trainers page.';
});

app.controller('shopController', function ($scope) {
    $scope.message = 'Look! I am an shop page.';
});

$(document).on('click', function (event) {
    var $clickedOn = $(event.target),
        $collapsableItems = $('.collapse'),
        isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
        isLink = ($clickedOn.closest('a').length == 1),
        isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
    if ((!isToggleButton && isLink) || isOutsideNavbar) {
        $collapsableItems.each(function () {
            $(this).collapse('hide');
        });
    }
});