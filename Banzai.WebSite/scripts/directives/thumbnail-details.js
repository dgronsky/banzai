
app.directive('thumbnailDetails', function () {
    return {
        scope: {
            data: '=data',
            description: '@description'
        },
        templateUrl: './views/templates/thumbnail-details.html' 
    };
});