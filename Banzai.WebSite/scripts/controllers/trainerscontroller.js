var app = angular.module('banzaiApp');

// create the controller and inject Angular's $scope
app.controller('trainersController', function ($scope, $routeParams) {
    debugger;
    // create a message to display in our view
    $scope.$parent.page = "trainers";
    $scope.trainers = [
        new trainer("makaronak.jpg",
            ["makaronak.jpg", "makaronak.jpg", "makaronak.jpg", "makaronak.jpg"],
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
            ["rakhansky.jpg", "rakhansky.jpg", "rakhansky.jpg", "rakhansky.jpg"],
            "Раханский",
            "Кирил",
            "Степанович",
            ["тренер Макаронка Андрея Николаевича :)",
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
            text: selectedTrainer.fullname(),
            id: currIndex++
        });

    }
    $scope.trainerSlides = trainerSlides;
    debugger;
    if ($routeParams.id !== undefined) {
        $scope.id = $routeParams.id;

        $scope.text = $scope.trainers[$scope.id].getDescription();
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