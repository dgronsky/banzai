var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('infoController', function ($scope, $routeParams) {
    // create a message to display in our view
    $scope.$parent.page = "info";
    $scope.$parent.pageHeader = "Информация";
    var infos = [];
    var currIndex = 0;

    for (var index = 0; index < 10; index++) {
        infos.push({
            image: "../content/images/draft0.jpg",
            text: index.toString() + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros neque, faucibus quis mollis vitae. ' + currIndex,
            id: currIndex++
        });
    }

    $scope.infos = infos;

    if ($routeParams.id !== undefined)
    {
        $scope.id = $routeParams.id;

        $scope.text = $scope.infos[$scope.id].text
        
        var details = [];
        var currIndex = 0;

        for (var index = 1; index <= 3; index++) {
            details.push({
                image: "../content/images/draft"+ index +".jpg",
                id: currIndex++
            });
        }
        $scope.details = details;
    }

});

