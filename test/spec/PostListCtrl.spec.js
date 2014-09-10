describe("PostListCtrl", function () {
    var controller;
    var PostDAOMock;
    var queryResponseA;
    var queryResponseB;

    function createController($controller) {
        controller = $controller('PostListCtrl', {PostDAO: PostDAOMock});
    }

    beforeEach(module('exerciseApp'));
    beforeEach(function () {
        PostDAOMock = jasmine.createSpyObj('PostDao', ['query']);
        queryResponseA = {resultList: [
            { id: 1, name: 'Stefan', pets: 'Sfinksu' }
        ]};
        queryResponseB = {resultList: [
            { id: 2, name: 'Gienia', pets: 'Krowcia' }
        ], totalCount: 10};
        PostDAOMock.query.andReturn(successfulPromise(queryResponseA));

    });
    describe("constructor", function () {
        beforeEach(inject(function ($controller) {
            createController($controller);
        }));

        it("should load posts list", function () {
            expect(controller.posts).toEqual(queryResponseA.resultList);
        });
        it('should make isPaginationNeeded return false', function () {
            expect(controller.isPaginationNeeded()).toBe(false);
        });
        describe('when search query is typed', function () {
            beforeEach(inject(function ($rootScope) {
                PostDAOMock.query.andReturn(successfulPromise(queryResponseB));
                $rootScope.$digest();
                controller.filter.searchQuery = 'abc';
                $rootScope.$digest();
            }));
            it('should reload the results', function () {
                expect(controller.posts).toEqual(queryResponseB.resultList);
            });
            it('should call DAO with proper filters', function () {
                expect(PostDAOMock.query).toHaveBeenCalledWith({searchQuery: 'abc', firstResult: 0, maxResults: 5});
            });
        });
        describe('when moving to next page', function () {
            beforeEach(inject(function ($rootScope) {
                PostDAOMock.query.andReturn(successfulPromise(queryResponseB));
                $rootScope.$digest();
                controller.currentPage = 2;
                $rootScope.$digest();
            }));
            it('should load next results', function () {
                expect(PostDAOMock.query).toHaveBeenCalledWith({searchQuery: null, firstResult: 5, maxResults: 5});
            });
        });
    });
    describe('constructor', function () {
        beforeEach(inject(function ($controller) {
            PostDAOMock.query.andReturn(successfulPromise(queryResponseB));
            createController($controller);
        }));
        it('should load posts list', function () {
            expect(controller.posts).toEqual(queryResponseB.resultList);
        });
        it('should make isPaginationNeeded return true', function () {
            expect(controller.isPaginationNeeded()).toBe(true);
        });
    });

});