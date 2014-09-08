/**
 * Created by piniu on 08.09.14.
 */
describe("ReservationCtrl", function () {
    var controller;
    beforeEach(module('exerciseApp'));

    describe("$watch() tests", function () {

        beforeEach(inject(function ($controller, $rootScope) {
            controller = $controller('ReservationCtrl', {$scope: $rootScope});
        }));
        describe("should call save()", function () {
            it("when first name was changed", inject(function ($rootScope) {
                $rootScope.$digest();
                controller.list.firstName = 'aaa';
                $rootScope.$digest();
                expect(controller.formData.firstName).toEqual('aaa');
            }));
            it("when last name was changed", inject(function ($rootScope) {
                $rootScope.$digest();
                controller.list.lastName = 'bbb';
                $rootScope.$digest();
                expect(controller.formData.lastName).toEqual('bbb');
            }));
            it("when email was changed", inject(function ($rootScope) {
                $rootScope.$digest();
                controller.list.email = 'a@b';
                $rootScope.$digest();
                expect(controller.formData.email).toEqual('a@b');
            }));
            it("when select refreshment was changed", inject(function ($rootScope) {
                $rootScope.$digest();
                controller.list.selectRefreshment = 1;
                $rootScope.$digest();
                expect(controller.formData.selectRefreshment).toEqual(1);
            }));
            it("when select zone was changed", inject(function ($rootScope) {
                $rootScope.$digest();
                controller.list.selectZone = 2;
                $rootScope.$digest();
                expect(controller.formData.selectZone).toEqual(2);
            }));
            it("when vip was changed", inject(function ($rootScope) {
                $rootScope.$digest();
                controller.list.vip = true;
                $rootScope.$digest();
                expect(controller.formData.vip).toBe(true);
            }));
            it("when date was changed", inject(function ($rootScope) {
                $rootScope.$digest();
                controller.list.date = '1-1-2014';
                $rootScope.$digest();
                expect(controller.formData.date).toEqual('1-1-2014');
            }));
            it("when comments was changed", inject(function ($rootScope) {
                $rootScope.$digest();
                controller.list.comments = 'ok';
                $rootScope.$digest();
                expect(controller.formData.comments).toEqual('ok');
            }));
        });

    });
});