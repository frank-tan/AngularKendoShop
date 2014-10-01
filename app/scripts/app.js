'use strict';

/**
 * @ngdoc overview
 * @name angularKendoShopApp
 * @description
 * # angularKendoShopApp
 *
 * Main module of the application.
 */
angular
  .module('angularKendoShopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'customFilters',
    'cart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/productList.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/checkoutSummary.html',
        controller: 'cartSummaryController'
      })
      .when('/complete', {
        templateUrl: 'views/thankYou.html'
      })
      .when('/placeOrder', {
        templateUrl: '/views/placeOrder.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });