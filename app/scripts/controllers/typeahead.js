'use strict';

angular.module('itcApp').controller('TypeaheadCtrl', function ($filter,ContactDAO) {

    this.selected = undefined;
    var ctrl = this;

    this.getContacts = function (typedValue) {
	// need to write this function body
        ContactDAO.getAll().then(function (data) {
            ctrl.list = data[0];
        });


    }

    this.selectContact=function(item,model,label){

        this.selected=item;
    }


});