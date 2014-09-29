'use strict';

angular.module('angularKendoShopApp')
  .constant('productListActiveClass', 'btn-primary')
  .constant('productListPageCount', 2)
  .controller('productListCtrl', function ($scope, $filter, productListActiveClass, productListPageCount) {
    
    var selectedCategory = null;

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function (newCategory) {
      if (newCategory === undefined) {
        selectedCategory = null;
      } else {
        selectedCategory = newCategory;
      }
      
      $scope.selectedPage = 1;
    };
    $scope.selectPage = function (newPage) {
      $scope.selectedPage = newPage;
    };

    $scope.categoryFilterFn = function (product) {
      return selectedCategory === null || product.category === selectedCategory;
    };

    /* for highlighting the active category button */
    $scope.getCategoryClass = function (category) {
      return selectedCategory === category ? productListActiveClass : '';
    };

    /* for highlighting the active page button */
    $scope.getPageClass = function (page) {
      return $scope.selectedPage === page ? productListActiveClass : '';
    };

  });