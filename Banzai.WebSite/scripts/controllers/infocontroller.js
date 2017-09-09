var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('infoController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Look! I am an info page.';
});