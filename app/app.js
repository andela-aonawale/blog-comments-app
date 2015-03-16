
angular.module('CommentsApp', ['ngMaterial', 'CommentsModule', 'CommentForm', 'PostBody'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal', {
                'default': '700'
            })
            .accentPalette('teal', {
                'default': '500'
            });
    });