
app.directive('thumbnailDetails', function () {
    return {
        scope: {
            slides: '=slides',
            title: '@title',
            description: '@description'
        },
        templateUrl: './views/templates/thumbnail-details.html' 
    };
});