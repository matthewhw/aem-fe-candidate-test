'use strict';

describe('Unit: MainCtrl', function() {

  beforeEach(module('reviewModule'));

  var MainCtrl, scope, reviewData;

  beforeEach(inject(function($controller, $rootScope, reviewsData) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    reviewData = reviewsData;
  }));

  it('should have undefined reviews to begin with', function() {
      expect(scope.reviews).toBeUndefined();
  });

})