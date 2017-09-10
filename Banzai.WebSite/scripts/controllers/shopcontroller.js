var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('shopController', function ($scope) {
    // create a message to display in our view
    $scope.$parent.page = "shop";
    $scope.message = 'Everyone come and see how good I look! shop page';
    
});