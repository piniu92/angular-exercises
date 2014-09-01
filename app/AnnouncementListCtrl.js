(function () {
    'use strict';
    function AnnouncementListCtrl(AnnouncementDAO) {
        var ctrl = this;
        AnnouncementDAO.query().then(function (data) {
            console.log(data);
            ctrl.anon = data;
        });
        console.log(ctrl.anon);

    }

    var module = angular.module("exerciseApp");
    module.controller('AnnouncementListCtrl', ['AnnouncementDAO',AnnouncementListCtrl]);

})();
