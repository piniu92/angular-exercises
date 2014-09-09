(function () {
    'use strict';
    var module = angular.module("exerciseApp", ['ngResource', 'ngRoute']);

    module.directive('currency', ['$filter', function ($filter) {
        return {
            require: 'ngModel',
            link: function (elem, $scope, attrs, ngModel) {
                ngModel.$formatters.push(function (val) {
                    return $filter('currency')(val)
                });
                ngModel.$parsers.push(function (val) {
                    return val.replace(/[\$,]/, '')
                });
            }
        }
    }]);

    module.config(function ($provide, $routeProvider) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $routeProvider.when('/', {
            templateUrl: 'views/productList.html',
            controller: 'ProductListCtrl as productList'
        });
        $routeProvider.when('/details/:id', {
            templateUrl: 'views/productDetails.html',
            controller: 'ProductDetailsCtrl as productDetails'
        });
        $routeProvider.when('/new', {
            templateUrl: 'views/productNew.html',
            controller: 'ProductNewCtrl as productNew'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    module.run(function ($httpBackend) {
        var sequence = 1;
        var products = {};
        [
            {   id: sequence++,
                product: 'Rumianek',
                price: '200'
            },
            {   id: sequence++,
                product: 'JSON prawde Ci powie',
                price: '100'
            }
        ].every(function (value) {
                products[value.id] = value;
                return true;
            });

        $httpBackend.whenGET('/api/product').respond(function () {
            return [200, products];
        });

        $httpBackend.whenGET(/\/api\/product\/(\d+)/).respond(function (method, url) {
            var match = /\/api\/product\/(\d+)/.exec(url);
            return [200, products[parseInt(match[1])]];
        });

        $httpBackend.whenPOST('/api/product').respond(function (method, url, data) {
            data = JSON.parse(data);

            if (products[data.id]) {
                products[data.id].product = data.product;
                products[data.id].price = data.price;
            } else {
                data.id = sequence++;
                products[data.id] = data;
            }
            console.log(products[data.id]);
            return [200];
        });

        $httpBackend.whenDELETE(/\/api\/product\/(\d+)/).respond(function (method, url) {
            var match = /\/api\/product\/(\d+)/.exec(url);
            if (match) {
                var id = parseInt(match[1], 10)
                delete products[id];
                return [200];
            } else {
                return [404];
            }
        });

        $httpBackend.whenPUT('/api/product/new').respond(function (method, url, data) {
            data = JSON.parse(data)
            data.id = sequence++;
            products[data.id] = data;
        });

        $httpBackend.whenGET(/.*\.html/).passThrough();
    });
})();
