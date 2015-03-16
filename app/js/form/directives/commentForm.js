/**
 * Created by ammyreal on 3/13/15.
 */
angular.module('CommentForm', [])
    .directive('commentForm', function(){
        return {
            restrict: 'E',
            templateUrl: './app/js/form/partials/comment-form.html'
        };
    });