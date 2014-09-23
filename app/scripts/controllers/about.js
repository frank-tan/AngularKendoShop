'use strict';

/**
 * @ngdoc function
 * @name angularKendoShopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularKendoShopApp
 */
angular.module('angularKendoShopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
