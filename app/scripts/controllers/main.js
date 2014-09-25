'use strict';

/**
 * @ngdoc function
 * @name angularKendoShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularKendoShopApp
 */
angular.module('angularKendoShopApp')
  .controller('MainCtrl', function ($scope) {

    $scope.data = {
      products: [
        {
          name: 'Ippon Men',
          description: 'High quality hand made men',
          category: 'Bogu',
          price: 300
        },
        {
          name: 'Ippon Cote',
          description: 'High quality hand made cote',
          category: 'Bogu',
          price: 150
        },
        {
          name: 'Ippon Do',
          description: 'High quality hand made do',
          category: 'Bogu',
          price: 200
        },
        {
          name: 'Ippon Tare',
          description: 'High quality hand made tare',
          category: 'Bogu',
          price: 200
        },
        {
          name: 'Bato Boken',
          description: 'A premium bukuto for kata training',
          category: 'Bukuto',
          price: 90
        },
        {
          name: 'Ryuto Boken',
          description: 'Our top quality bukuto ',
          category: 'Bukuto',
          price: 120
        },
        {
          name: 'Mushin Shinai',
          description: 'A basic shinai for everyday training',
          category: 'Shinai',
          price: 30
        },
        {
          name: 'Budonshin Shinai',
          description: 'A premium shinai made of high quality bamboo',
          category: 'Shinai',
          price: 40
        },
        {
          name: 'Zanshin Shinai',
          description: 'Our top quality shinai, recommended for professional players and shiais',
          category: 'Shinai',
          price: 50
        },
        {
          name: 'Kuranto Iaito',
          description: 'A premium iaito',
          category: 'Iaito',
          price: 900
        },
        {
          name: 'Seichuto Iaito',
          description: 'A rare replica of a historical katana',
          category: 'Iaito',
          price: 1200
        },
        {
          name: 'Gyakuto Iaito',
          description: 'Our top quality iaito',
          category: 'Iaito',
          price: 2000
        }
      ]
    };
  });