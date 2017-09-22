var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('infoController', function ($scope) {
    // create a message to display in our view
    $scope.$parent.page = "info";
    $scope.message = 'Look! I am an info page.';
    $scope.selectedId = "1";

    var infoItemBoxes = [];
    var currIndex = 0;

    for (var index = 0; index < 15; index++) {
        infoItemBoxes.push({
            image: 'http://unsplash.it/600/400/?random',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros neque, faucibus quis mollis vitae. ' + currIndex,
            id: currIndex++
        });
    }
    $scope.infoItemBoxes = infoItemBoxes;

});

app.directive('infoItemBox', function () {
    return {
        scope: {
            itemInfo: '=infoItemBox'
        },
        templateUrl: './views/templates/infoitembox.html'
    };
});