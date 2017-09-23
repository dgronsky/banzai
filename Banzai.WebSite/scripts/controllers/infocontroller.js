var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('infoController', function ($scope, $routeParams) {
    // create a message to display in our view
    debugger;
    $scope.$parent.page = "info";
    $scope.message = 'Look! I am an info page.';
    $scope.selectedId = "1";
    $scope.detailsUrl = "info";

    var slides = [];
    var currIndex = 0;

    for (var index = 0; index < 15; index++) {
        slides.push({
            image: 'http://unsplash.it/320/200/?random',
            text: index.toString() + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros neque, faucibus quis mollis vitae. ' + currIndex,
            id: currIndex++
        });
    }
    $scope.slides = slides;

    if ($routeParams.id !== undefined)
    {
        debugger;
        $scope.id = $routeParams.id;

        $scope.text = $scope.slides[$scope.id].text
        
        var detailSlides = [];
        var currIndex = 0;

        for (var index = 0; index < 4; index++) {
            detailSlides.push({
                image: 'http://unsplash.it/1200/700/?random',
                id: currIndex++
            });
        }
        $scope.detailSlides = detailSlides;
    }

});

