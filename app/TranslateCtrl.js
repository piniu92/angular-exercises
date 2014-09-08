(function () {
    'use strict';
    function TranslateCtrl(gettext, gettextCatalog) {
        var ctrl = this;
        gettext('polski');
        gettext('angielski');
        gettext('niemiecki');
        ctrl.languages = [
            {value: 'pl', name: 'polski'},
            {value: 'en', name: 'angielski'},
            {value: 'de', name: 'niemiecki'}
        ];

        ctrl.changeLanguage = function (lang) {
            gettextCatalog.setCurrentLanguage(lang);
        }

    }

    var module = angular.module('exerciseApp', ['gettext']);
    module.controller('TranslateCtrl', ['gettext', 'gettextCatalog', TranslateCtrl]);
})();
