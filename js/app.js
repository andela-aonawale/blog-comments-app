var app = angular.module('CommentsApp', []);
app.controller('CommentsController', function(){
    this.comments = [];
    this.comment = {text: '', name: '', email: '', date: new Date(), show: true, hide: false, upvote: 0, downvote: 0};
    this.addComment = function(){
        this.comments.push(this.comment);
        this.comment = {date: new Date(), show: true, hide: false, upvote: 0, downvote: 0};
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
    this.addVote = function(com){
        ++com.upvote;
    }
    this.remVote = function(com){
            ++com.downvote;
    }
}).run(function(){
    //localStorage.setItem('comments', JSON.stringify(this.comments));
    //$(document).ready(function(){
    //console.log(JSON.parse(localStorage.getItem('comments')));
    //});
});