/**
 * Created by piniu on 08.09.14.
 */
describe("TranslateCtrl", function () {
    var controller;
    beforeEach(module('exerciseApp'));
    beforeEach(inject(function ($controller) {
        controller = $controller('TranslateCtrl');

    }));
    describe("changeLanguage", function () {
        describe("to german", function () {
            it("should change translation of languages", inject(function ($filter) {
                controller.changeLanguage('de');
                var translate = $filter('translate');
                expect(translate(controller.languages[0].name)).toEqual('polnisch');
                expect(translate(controller.languages[1].name)).toEqual('englisch');
                expect(translate(controller.languages[2].name)).toEqual('deutsch');
            }));
        });
        describe("to english", function () {
            it("should change translation of languages", inject(function ($filter) {
                controller.changeLanguage('en');
                var translate = $filter('translate');
                expect(translate(controller.languages[0].name)).toEqual('polish');
                expect(translate(controller.languages[1].name)).toEqual('english');
                expect(translate(controller.languages[2].name)).toEqual('german');
            }));
        });

    });
});