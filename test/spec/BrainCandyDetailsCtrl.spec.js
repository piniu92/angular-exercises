/**
 * Created by piniu on 05.09.14.
 */
/**
 * Created by piniu on 05.09.14.
 */
describe("BrainCandyDetailsCtrl", function () {
    'use strict';
    beforeEach(module('exerciseApp'));
    var brainCandyDetailsCtrl;
    var CandyDAOmock;

    beforeEach(function () {
        CandyDAOmock = jasmine.createSpyObj('CandyDAO', ['get', 'save', 'delete']);
        CandyDAOmock.get.andReturn({then: function (callback) {
            callback({
                id: 0,
                name: '',
                factory: ''
            });
            return this;
        }})

    });
    beforeEach(inject(function ($controller) {
        brainCandyDetailsCtrl = $controller('BrainCandyDetailsCtrl', {CandyDAO: CandyDAOmock})

    }));

    describe("CandyDAO.get()", function () {
        it("should be called", function () {
            expect(CandyDAOmock.get).toHaveBeenCalled();
        });
    });

    describe("variable  details", function () {
        it("should exist", function () {
            expect(brainCandyDetailsCtrl.details).not.toBe(undefined);
        });

        it("should be a object", function () {
            expect('object' == typeof brainCandyDetailsCtrl.details).toBe(true);
        });
        it("should heave properties : id, name, factory", function () {
            expect(brainCandyDetailsCtrl.details['id']).not.toBe(undefined);
            expect(brainCandyDetailsCtrl.details['name']).not.toBe(undefined);
            expect(brainCandyDetailsCtrl.details['factory']).not.toBe(undefined);
        });

    });
    describe("saveCandy()", function () {
        it("should call CandyDAO.save()", function () {
            brainCandyDetailsCtrl.saveCandy();
            expect(CandyDAOmock.save).toHaveBeenCalled();
        });
    });
    describe("deleteCandy()", function () {
        it("should call CandyDAO.delete()", function () {
            brainCandyDetailsCtrl.deleteCandy();
            expect(CandyDAOmock.delete).toHaveBeenCalled();
        });
    });


});