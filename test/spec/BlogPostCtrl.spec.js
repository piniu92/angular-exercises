/**
 * Created by piniu on 05.09.14.
 */
'use strict'
describe("BlogPostCtrl", function () {
    beforeEach(module('exerciseApp'));
    var blogPostCtrl;
    beforeEach(inject(function ($controller) {
        blogPostCtrl = $controller('BlogPostCtrl', {})
    }));
    describe("variable  posts", function () {
        it("should exist", function () {
            expect(blogPostCtrl.posts).not.toBe(undefined);
        });
        it("should be an array", function () {
            expect(blogPostCtrl.posts instanceof Array).toBe(true);
        });
        it("should heave properties : ID, Name, Pets", function () {
            expect(blogPostCtrl.posts[0]['ID']).not.toBe(undefined);
            expect(blogPostCtrl.posts[0]['Name']).not.toBe(undefined);
            expect(blogPostCtrl.posts[0]['Pets']).not.toBe(undefined);
        });
    });
});