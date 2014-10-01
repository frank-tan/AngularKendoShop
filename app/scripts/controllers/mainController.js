'use strict';

/**
 * @ngdoc function
 * @name angularKendoShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularKendoShopApp
 */
angular.module('angularKendoShopApp')
  .constant('dataUrl', 'http://localhost:8000/products')
  .controller('MainCtrl', function ($scope, $http, dataUrl) {

    $scope.data = {};
    $http.get(dataUrl).success(function (data) {
      $scope.data = data;
    }).error(function (error) {
      $scope.data.error = error; //need to customize laravel to return an error object
    });
  });