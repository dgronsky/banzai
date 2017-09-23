var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('trainersController', function ($scope, $routeParams) {
    // create a message to display in our view
    $scope.$parent.page = "trainers";
    $scope.$parent.pageHeader = "НАШИ ТРЕНЕРА"; 
    $scope.trainers = [
        new trainer(
            "rakhansky1.jpg",
            ["rakhansky2.jpg", "rakhansky1.jpg"],
            "Раханский",
            "Кирил",
            "Степанович",
            ["тренер Макаронка Андрея Николаевича :)",
             "добавить описание"
            ]),
        new trainer("makaronak1.jpg",
            ["makaronak2.jpg", "makaronak1.jpg"],
            "Макаронак",
            "Андрей",
            "Николаевич",
            ["чемпион РБ, мастер спорта,",
                "член нач. сборной команды,",
                "2е место на Чемпионате мира,",
                "кадеты, г.Москва(Россия)"
            ]),
        new trainer(
            "omelyanchuk1.jpg",
            ["omelyanchuk2.jpg", "omelyanchuk1.jpg"],
            "Омельянчук",
            "Евгений",
            "",
            ["тренер :)",
                "добавить описание"
            ]),
    ];
    var currIndex = 0;
    var trainerSlides = [];
    for (index = 0; index < $scope.trainers.length; index++)
    {
        var selectedTrainer = $scope.trainers[index];
        trainerSlides.push({
            image: "../content/images/trainers/" + selectedTrainer.image,
            text: selectedTrainer.getFullname(),
            id: currIndex++
        });

    }
    $scope.trainerSlides = trainerSlides;
    if ($routeParams.id !== undefined) {
        $scope.id = $routeParams.id;
        $scope.description = $scope.trainers[$scope.id].getDescription();
        $scope.$parent.pageHeader = $scope.trainers[$scope.id].getFullname(); 

        var moreimages = $scope.trainers[$scope.id].moreimages;

        var details = [];
        var currIndex = 0;

        for (var index = 0; index < moreimages.length; index++) {
            details.push({
                image: "../content/images/trainers/" + moreimages[index],
                id: currIndex++
            });
        }
        $scope.details = details;
    }
});