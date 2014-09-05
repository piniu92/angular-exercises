/**
 * Created by piniu on 05.09.14.
 */
describe("PostDetailsCtr", function () {
    'use strict';
    beforeEach(module('exerciseApp'));
    var postListCtrl;
    var PostDAOmock;
    beforeEach(function () {
        PostDAOmock = jasmine.createSpyObj('PostDAO', ['get']);
        PostDAOmock.get.andReturn({then: function (callback) {
            callback([
                {   id: 1,
                    name: 'Stefan',
                    pets: 'Sfinksu'
                },
                {   id: 2,
                    name: 'Gienia',
                    pets: 'Krowcia'
                },
                {   id: 3,
                    name: 'Erlang',
                    pets: 'Square'
                }
            ]);
            return this;
        }});
    });
    beforeEach(inject(function ($controller) {
        postListCtrl = $controller('PostDetailsCtrl', {PostDAO: PostDAOmock})

    }));

    describe("PostDAO.get()", function () {
        it("should be called", function () {
            expect(PostDAOmock.get).toHaveBeenCalled();
        });
    });

    describe("variable  details", function () {
        it("should exist", function () {
            expect(postListCtrl.details).not.toBe(undefined);
        });
        it("should be an array", function () {
            expect(postListCtrl.details instanceof Array).toBe(true);
        });
        it("should heave properties : id, name, pets", function () {
            expect(postListCtrl.details[0]['id']).not.toBe(undefined);
            expect(postListCtrl.details[0]['name']).not.toBe(undefined);
            expect(postListCtrl.details[0]['pets']).not.toBe(undefined);
        });
    });


});