'use strict';

/**
 * @ngdoc service
 * @name reviewModule.reviewsData
 * @description
 * # reviewModule
 * Factory in the reviewModule.
 */
angular.module('reviewModule')
  .factory('reviewsData', function ($http) {

    var requestReviews = function(reviewsId) {
      return $http({
        method: 'GET',
        url: '/data/' + reviewsId
      });
    };

    return {
      reviews: function (reviewsId) {
        return requestReviews(reviewsId);
      }
    };
  });
