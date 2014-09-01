(function () {
    'use strict';
    function BlogPostCtrl(PostDAO) {
        var ctrl = this;
        PostDAO.query().then(function (data) {
            ctrl.posts = data;
        });
    }

    var module = angular.module("exerciseApp");
    module.controller('BlogPostCtrl', ['PostDAO',BlogPostCtrl]);
})();
