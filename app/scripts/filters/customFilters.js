'use strict';

angular.module('customFilters', [])
  .filter('unique', function () {
    return function (data, propertyName) {
      if (angular.isArray(data) && angular.isString(propertyName)) {
        var results = [];
        var keys = {};
        for (var i = 0; i < data.length; i++) {
          var val = data[i][propertyName];
          if (angular.isUndefined(keys[val])) {
            keys[val] = true;
            results.push(val);
          }
        }
        return results;
      } else {
        return data;
      }
    };
  })
  .filter('currentPageData', function ($filter) {
    return function (data, currentPageNum, pageSize) {
      if (angular.isArray(data) && angular.isNumber(currentPageNum) && angular.isNumber(pageSize)) {
        var startIndex = (currentPageNum - 1) * pageSize;
        if (data.length < startIndex) {
          return [];
        } else {
          return $filter('limitTo')(data.splice(startIndex), pageSize);
        }
      } else {
        return data;
      }
    };
  })
  .filter('pageNumberList', function () {
    return function (data, size) {
      if (angular.isArray(data)) {
        var result = [];
        for (var i = 0; i < Math.ceil(data.length / size); i++) {
          result.push(i);
        }
        return result;
      } else {
        return data;
      }
    };
  });