var app = angular.module('CommentsApp', []);
app.controller('CommentsController', function(){
    this.comments = [];
    this.comment = {text: '', name: '', email: '', date: new Date(), sh: true, show: true, hide: false, upvote: 0, downvote: 0};
    this.addComment = function(){
        this.comments.push(this.comment);
        this.comment = {date: new Date(), sh: true, show: true, hide: false, upvote: 0, downvote: 0};
    };
    this.deleteComment = function(com){
        //a cockroach came into the splice below, so i had to use an alternative
        //this.comments.splice(this.comments.indexOf(this)-1, 1);
        com.sh = false;
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
    };
    this.remVote = function(com){
            ++com.downvote;
    };
});