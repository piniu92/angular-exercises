/**
 * Created by piniu on 02.09.14.
 */
(function () {
    'use strict';
    function BrainCandyDetailsCtrl(CandyDAO, $routeParams) {
        var ctrl = this;
        CandyDAO.get($routeParams.id).then(function (data) {
            ctrl.details = data;

        });

        ctrl.saveCandy = function () {
            CandyDAO.save(ctrl.details);
        };

        ctrl.deleteCandy = function () {
            console.log($routeParams.id);
            CandyDAO.delete($routeParams.id);
        };

    }

    var module = angular.module("exerciseApp");
    module.controller('BrainCandyDetailsCtrl', ['CandyDAO', '$routeParams', BrainCandyDetailsCtrl]);
})();