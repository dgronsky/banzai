// script.js

// create the module and name it app
// also include ngRoute for all our routing needs
var app = angular.module('banzaiApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngTouch']);

//configure our routes
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    //debugger;
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })

        .when('/info', {
            templateUrl: 'views/info.html',
            controller: 'infoController'
        })

        .when('/info/:id', {
            templateUrl: 'views/infodetails.html',
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

        .when('/trainers/:id', {
            templateUrl: 'views/trainerdetails.html',
            controller: 'trainersController'
        })

        .when('/shop', {
            templateUrl: 'views/shop.html',
            controller: 'shopController'
        });

}]);

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