﻿var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('trainersController', function ($scope) {
    // create a message to display in our view
    $scope.$parent.page = "trainers";
    $scope.message = 'Look! I am an trainers page.';
});