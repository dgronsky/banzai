app.directive('thumbnail', function () {
    return {
        scope: {
            data: '=data',
            url: '@url'
        },
        templateUrl: './views/templates/thumbnail.html'
    };
});