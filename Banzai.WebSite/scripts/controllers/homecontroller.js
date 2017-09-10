



var app = angular.module('banzaiApp');


// create the controller and inject Angular's $scope
app.controller('homeController', function ($scope) {
    $scope.$parent.page = "home";
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;
    var slides = [];
    //var slides = $scope.slides = [
    //    {
    //        image: '../content/',
    //        text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
    //        id: currIndex++
    //    }
    //];
    var images = [
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
    'dsc_9982.jpg',
    ];
    //$scope.addSlide = function () {
    //    var newWidth = 600 + slides.length + 1;
    //    slides.push({
    //        image: '//unsplash.it/' + newWidth + '/300',
    //        text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
    //        id: currIndex++
    //    });
    //};
    for (var index = 0; index < images.length; index++)
    {
        slides.push({
            image: '../content/images/intro/' + images[index],
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
        });
    }
    $scope.slides = slides;

    //$scope.randomize = function () {
    //    var indexes = generateIndexesArray();
    //    assignNewIndexesToSlides(indexes);
    //};

    //for (var i = 0; i < 4; i++) {
    //    $scope.addSlide();
    //}


    // Randomize logic below

    //function assignNewIndexesToSlides(indexes) {
    //    for (var i = 0, l = slides.length; i < l; i++) {
    //        slides[i].id = indexes.pop();
    //    }
    //}

    //function generateIndexesArray() {
    //    var indexes = [];
    //    for (var i = 0; i < currIndex; ++i) {
    //        indexes[i] = i;
    //    }
    //    return shuffle(indexes);
    //}

    //// http://stackoverflow.com/questions/962802#962890
    //function shuffle(array) {
    //    var tmp, current, top = array.length;

    //    if (top) {
    //        while (--top) {
    //            current = Math.floor(Math.random() * (top + 1));
    //            tmp = array[current];
    //            array[current] = array[top];
    //            array[top] = tmp;
    //        }
    //    }

    //    return array;
    //}
    
});