var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope) {
    // create a message to display in our view
    //$scope.BrandName = 'BANZAI';
    $scope.BrandName = 'ABC';
    $scope.BrandDesc = 'Спортивный клуб боевых искусств';
});