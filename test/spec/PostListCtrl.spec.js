/**
 * Created by piniu on 05.09.14.
 */
describe("PostListCtr", function () {
    'use strict';
    beforeEach(module('exerciseApp'));
    var postListCtrl;
    var PostDAOmock;
    beforeEach(function () {
        PostDAOmock = jasmine.createSpyObj('PostDAO', ['query']);
        PostDAOmock.query.andReturn({then: function (callback) {
            callback([
                {   id: 1,
                    name: 'Stefan'
                },
                {   id: 2,
                    name: 'Gienia'
                },
                {   id: 3,
                    name: 'Erlang'

                }
            ]);
            return this;
        }});
    });
    beforeEach(inject(function ($controller) {
        postListCtrl = $controller('PostListCtrl', {PostDAO: PostDAOmock})

    }));

    describe("PostDAO.query()", function () {
        it("should be called", function () {
            expect(PostDAOmock.query).toHaveBeenCalled();
        });
    });

    describe("variable  details", function () {
        it("should exist", function () {
            expect(postListCtrl.posts).not.toBe(undefined);
        });
        it("should be an array", function () {
            expect(postListCtrl.posts instanceof Array).toBe(true);
        });
        it("should heave properties : id, name, pets", function () {
            expect(postListCtrl.posts[0]['id']).not.toBe(undefined);
            expect(postListCtrl.posts[0]['name']).not.toBe(undefined);
        });
    });


});