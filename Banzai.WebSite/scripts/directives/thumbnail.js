app.directive('thumbnail', function () {
    return {
        scope: {
            slides: '=slides',
            url: '@url'
        },
        templateUrl: './views/templates/thumbnail.html'
    };
});