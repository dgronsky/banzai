var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('shopController', function ($scope, $routeParams) {
    // create a message to display in our view
    $scope.$parent.page = "shop";
    $scope.$parent.pageHeader = "Магазин";

    var shopItems = [];
    var currIndex = 0;

    for (var index = 0; index < 5; index++) {
        shopItems.push({
            image: "../content/images/draft0.jpg",
            text: index.toString() + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros neque, faucibus quis mollis vitae. ' + currIndex,
            id: currIndex++
        });
    }

    $scope.shopItems = shopItems;

    if ($routeParams.id !== undefined) {
        $scope.id = $routeParams.id;

        $scope.text = $scope.shopItems[$scope.id].text

        var details = [];
        var currIndex = 0;

        for (var index = 1; index <= 3; index++) {
            details.push({
                image: "../content/images/draft" + index + ".jpg",
                id: currIndex++
            });
        }
        $scope.details = details;
    }
});