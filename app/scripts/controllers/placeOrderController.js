'use strict';
angular.module('angularKendoShopApp')
  .constant('orderUrl', 'http://localhost:8000/orders')
  .controller('submitOrderController', function ($scope, $http, $location, orderUrl, cart) {

    $scope.sendOrder = function (shippingDetails) {
      var order = angular.copy(shippingDetails);
      order.products = cart.getProducts();
      $http.post(orderUrl, order).success(function (data) {
        $scope.data.orderId = data.id;
        cart.getProducts().length = 0;
      }).error(function (error) {
        $scope.data.orderError = error;
      }).finally(function () {
        $location.path('/complete');
      });
    };
});