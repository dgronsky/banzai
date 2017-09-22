var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('infoDetailsController', function ($scope, $routeParams) {
    // create a message to display in our view
    $scope.$parent.page = "info";
    $scope.message = 'Look! I am an info details page.';
    $scope.id = $routeParams.id;

    $scope.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros neque, faucibus quis mollis vitae, sodales a nisi. Fusce laoreet vehicula ipsum et rutrum. Cras non nibh est. Duis et felis hendrerit lectus semper blandit. Etiam suscipit ex congue tortor placerat fringilla. Etiam non pharetra elit. Sed placerat arcu nec justo aliquet, laoreet malesuada nisi volutpat. Donec eu ultricies lectus. Curabitur luctus in purus eget commodo. Vestibulum ac turpis at ante lobortis accumsan ac in lorem.';

    var slides = [];
    var currIndex = 0;

    for (var index = 0; index < 4; index++) {
        slides.push({
            image: 'http://unsplash.it/1200/700/?random',
            id: currIndex++
        });
    }
    $scope.slides = slides;
});

app.directive('infoItem', function () {
    return {
        templateUrl: './views/templates/infoitem.html' 
    };
});

