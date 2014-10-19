'use strict';

/**
 * @ngdoc function
 * @name reviewModule.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reviewsModule
 */
angular.module('reviewModule')
  .controller('MainCtrl', function ($scope, reviewsData) {
    reviewsData.reviews('test.json')
      .success(function(data){
        $scope.filmLink = data.filmLink;
        $scope.imagePath = data.imagePath;
        $scope.numArticles = data.numArticles;
        $scope.reviews = data.reviewList.reviewArticles;
      });

    $scope.styles = [
       {name: 'default', title: 'Default'},
       {name: 'dark', title: 'Darken'},
       {name: 'flat', title: 'Flatten'},
    ];

  });
