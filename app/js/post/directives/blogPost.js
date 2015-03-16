/**
 * Created by ammyreal on 3/13/15.
 */
angular.module('PostBody', []).
    directive('blogPost', function(){
        return{
            restrict: 'E',
            templateUrl: './app/js/post/partials/post-body.html'
        };
    });