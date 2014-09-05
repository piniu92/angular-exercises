(function () {
    'use strict';
    function AnnouncementListCtrl(AnnouncementDAO) {
        var ctrl = this;
        AnnouncementDAO.query().then(function (data) {
            ctrl.posts = data;
        });

    }

    var module = angular.module("exerciseApp");
    module.controller('AnnouncementListCtrl', ['AnnouncementDAO',AnnouncementListCtrl]);

})();
