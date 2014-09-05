/**
 * Created by piniu on 02.09.14.
 */
(function () {
    'use strict';
    function BrainCandyListCtrl(CandyDAO) {
        var ctrl = this;
        CandyDAO.query().then(function (data) {
            ctrl.list = data;
        });


    }

    var module = angular.module("exerciseApp");
    module.controller('BrainCandyListCtrl', ['CandyDAO', BrainCandyListCtrl]);
})();