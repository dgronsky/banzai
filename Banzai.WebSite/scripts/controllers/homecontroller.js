var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('homeController', function ($scope) {
    $scope.$parent.page = "home";
    $scope.$parent.pageHeader = "Есть правила, но нет компромиссов ©";
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;
    var slides = [];

    var images = [
    'dsc_mich.jpg',
    'dsc_0206.jpg',
    'dsc_0298.jpg',
    'dsc_0466.jpg',
    'dsc_0515.jpg',
    'dsc_0612.jpg',
    'dsc_0626.jpg',
    'dsc_0678.jpg',
    'dsc_0699.jpg',
    'dsc_8867.jpg',
    'dsc_9042.jpg',
    'dsc_9156.jpg',
    'dsc_9193.jpg',
    'dsc_9466.jpg',
    'dsc_9530.jpg',
    'dsc_9656.jpg',
    'dsc_9706.jpg',
    'dsc_9744.jpg',
    'dsc_9785.jpg',
    'dsc_9843.jpg',
    'dsc_9982.jpg'
    ];

    for (var index = 0; index < images.length; index++)
    {
        slides.push({
            image: '../content/images/intro/' + images[index],
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
        });
    }
    $scope.slides = slides;
});