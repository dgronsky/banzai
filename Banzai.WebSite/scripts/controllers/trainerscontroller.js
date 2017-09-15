var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('trainersController', function ($scope) {
    // create a message to display in our view
    $scope.$parent.page = "trainers";
    $scope.trainers = [
        new trainer("makaronak.jpg",
            "Макаронак",
            "Андрей",
            "Николаевич",
            ["чемпион РБ, мастер спорта,",
             "член нач. сборной команды,",
             "2е место на Чемпионате мира,",
             "кадеты, г.Москва(Россия)"
            ]),
        new trainer(
            "rakhansky.jpg",
            "Раханский",
            "Кирил",
            "Степанович",
            ["тренер Макаронка Андрея Николаевич :)",
             "добавить описание"
            ]),
    ];

    if ($scope.trainers.length <= 3)
    {
        $scope.totalImageColumns = $scope.trainers.length;
    } else
    {
        $scope.totalImageColumns = 3;
    }
    $scope.IsFirstImage = function ($index)
    {
        return $index % 3 == 1; 
    }

    $scope.IsLastImage = function ($index) {
        debugger;
        return $index % 3 == 0;
    }

    $scope.IsMiddleImage = function ($index)
    {
        return !$scope.IsFirstImage($index) && !$scope.IsLastImage;
    }
     
    angular.element(document).ready(function () {
        window.setTimeout(function () { 
            InitializeJsControls();
        }, 100);

    });

});