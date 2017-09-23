var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('infoController', function ($scope, $routeParams) {
    // create a message to display in our view
    $scope.$parent.page = "info";

    var infos = [];
    var currIndex = 0;

    for (var index = 0; index < 15; index++) {
        infos.push({
            image: 'http://unsplash.it/320/200/?random',
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

        for (var index = 0; index < 4; index++) {
            details.push({
                image: 'http://unsplash.it/1200/700/?random',
                id: currIndex++
            });
        }
        $scope.details = details;
    }

});

