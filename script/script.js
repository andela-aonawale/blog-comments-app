var app = angular.module('CommentsApp', []);
app.controller('CommentsController', [function(){
    //this.show = true;
    //this.hide = false;
    this.comments = [];
    this.comment = {text: '', name: '', email: '', date: new Date().toUTCString(), show: true, hide: false};
    this.addComment = function(){
        this.comments.push(this.comment);
        this.comment = {date: new Date().toUTCString(), show: true, hide: false};
    };
    this.deleteComment = function(){
        this.comments.splice(this.comments.indexOf(this)-1, 1);
    };
    this.editComment = function(com){
        com.hide = true;
        com.show = false;
    };
    this.saveComment = function(com){
        com.hide = false;
        com.show = true;
    };
    this.cancelEdit = function(com){
        com.show = true;
        com.hide = false;
    }
}]);