(function () {
    'use strict';
    function PostListCtrl(PostDAO) {
        var ctrl = this;
        PostDAO.query().then(function(data){
            ctrl.posts = data;
        });
        console.log(ctrl.posts);
    }

    var module = angular.module("exerciseApp");
    module.controller('PostListCtrl', ['PostDAO', PostListCtrl]);
})();
