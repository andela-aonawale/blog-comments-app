
describe('Controller: commentsController', function(){

    beforeEach(module('CommentsApp'));

    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller('CommentsController');
    }));

    it('should return something', function(){
        expect(ctrl.comment.show).toBeTruthy();
    });
});
