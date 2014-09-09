'use strict';

/**
 * @ngdoc function
 * @name ngselect2App.controller:Ngselect2Ctrl
 * @description
 * # Ngselect2Ctrl
 * Controller of the ngselect2App
 */
angular.module('ngselect2App').controller('Ngselect2Ctrl', function ($scope, $resource, Artist) {
    var ctrl = this;
    this.artists = [];
    this.artistModel = [];

    this.search = function (queryObj) {

        Artist.query(queryObj.term).then(function (results) {
            ctrl.artists = results.artist.map(function (artist) {
                artist['text'] = artist.name;
                return artist;
            });
            //ctrl.artist = results.artist;
            var data = { results: ctrl.artists };
            console.log(ctrl.artist);
            queryObj.callback(data);
        });

    };


    // fill with 4 items below
    this.select2options = {
        'multiple': true,
        'query': function (query) {
            ctrl.search(query)
        },
        minimumInputLength: 1,
        maximumInputLength: 10
    };
});