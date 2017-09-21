var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('infoDetailsController', function ($scope, $routeParams) {
    // create a message to display in our view
    $scope.$parent.page = "info";
    $scope.message = 'Look! I am an info details page.';
    $scope.id = $routeParams.id;
});

