/**
 * Created by piniu on 05.09.14.
 */
describe("BlogPostCtrl", function () {
    'use strict';
    beforeEach(module('exerciseApp'));
    var announcementListCtrl;
    var AnnouncementDAOmock;
    beforeEach(function () {
        AnnouncementDAOmock = jasmine.createSpyObj('AnnouncementDAO', ['query']);
        AnnouncementDAOmock.query.andReturn({then: function (callback) {
            callback([
                {   id: 1,
                    title: 'Announcement 1',
                    description: 'I want to buy new car...'
                },
                {   id: 2,
                    title: 'Announcement 2',
                    description: 'I want to buy new bike...'
                },
                {   id: 3,
                    title: 'Announcement 3',
                    description: 'I want to buy new-old Fiat 126 p...'
                },
                {   id: 4,
                    title: 'Announcement 4',
                    description: 'I want to buy something to eat...'
                }
            ]);
            return this;
        }});
    });
    beforeEach(inject(function ($controller) {
        announcementListCtrl = $controller('AnnouncementListCtrl', {AnnouncementDAO: AnnouncementDAOmock})

    }));

    describe("AnnouncementDAO.query()", function () {
        it("should be called", function () {
            expect(AnnouncementDAOmock.query).toHaveBeenCalled();
        });
    });

    describe("variable  posts", function () {
        it("should exist", function () {
            expect(announcementListCtrl.posts).not.toBe(undefined);
        });
        it("should be an array", function () {
            expect(announcementListCtrl.posts instanceof Array).toBe(true);
        });
        it("should heave properties : id, title, description", function () {
            expect(announcementListCtrl.posts[0]['id']).not.toBe(undefined);
            expect(announcementListCtrl.posts[0]['title']).not.toBe(undefined);
            expect(announcementListCtrl.posts[0]['description']).not.toBe(undefined);
        });
    });


});