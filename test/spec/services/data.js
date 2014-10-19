'use strict';

describe('Unit: reviewsData', function() {

  beforeEach(module('reviewModule'));

  var service;

  beforeEach(inject(function(reviewsData) {
    service = reviewsData;
  }));

  describe("reviewsData", function(){
      it("should return reviews data", function(){
          expect(service.reviews('test.json')).toBeDefined();
      });
  });

})