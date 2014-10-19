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
        console.log($scope.reviews, $scope.imagePath, data);
      });

    /*
    $scope.open = function (articleNum) {
      var modalInstance = $modal.open({
        templateUrl: 'views/article.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          article: function () {
            return $scope.articles[articleNum];
          }
        }
      });
    };
    */

  });
