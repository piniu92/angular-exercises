(function () {
    'use strict';
    function BlogPostCtrl() {
        this.posts = [
            {ID: 0, Name: "Ala", Pets: "cat"},
            {ID: 1, Name: "Marysia", Pets: "ryś"},
            {ID: 2, Name: "Jan", Pets: "lala"}
        ];
    }

    var module = angular.module("exerciseApp", []);
    module.controller('BlogPostCtrl', [BlogPostCtrl]);
})();
