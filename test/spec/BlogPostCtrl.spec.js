describe("BlogPostCtrl", function () {
    'use strict';
    beforeEach(module('exerciseApp'));
    var blogPostCtrl;
    var PostDAOmock;
    beforeEach(function () {
        PostDAOmock = jasmine.createSpyObj('PostDAO', ['query']);
        PostDAOmock.query.andReturn({then: function (callback) {
            callback([
                {   id: 1,
                    name: 'Stefan',
                    pets: 'Sfinksu'
                },
                {   id: 2,
                    name: 'Gienia',
                    pets: 'Krowcia'
                }
            ]);
            return this;
        }});
    });
    beforeEach(inject(function ($controller) {
        blogPostCtrl = $controller('BlogPostCtrl', {PostDAO: PostDAOmock})

    }));

    describe("PostDAO.query()", function () {
        it("should be called", function () {
            expect(PostDAOmock.query).toHaveBeenCalled();
        });
    });

    describe("variable  posts", function () {
        it("should exist", function () {
            expect(blogPostCtrl.posts).not.toBe(undefined);
        });
        it("should be an array", function () {
            expect(blogPostCtrl.posts instanceof Array).toBe(true);
        });
        it("should heave properties : id, name, pets", function () {
            expect(blogPostCtrl.posts[0]['id']).not.toBe(undefined);
            expect(blogPostCtrl.posts[0]['name']).not.toBe(undefined);
            expect(blogPostCtrl.posts[0]['pets']).not.toBe(undefined);
        });
    });


});