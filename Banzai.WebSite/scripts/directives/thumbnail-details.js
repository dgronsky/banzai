
app.directive('thumbnailDetails', function () {
    return {
        scope: {
            slides: '=slides',
            description: '@description'
        },
        templateUrl: './views/templates/thumbnail-details.html' 
    };
});