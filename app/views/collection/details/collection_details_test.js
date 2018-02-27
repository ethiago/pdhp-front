'use strict';

describe('pdhp.collection.details', function() {

  var $q,
      $rootScope,
      $scope,
      mockapiFactory,
      mockParam,
      mockResponse = { id: 1, name: 'collection', discs:[ { id: 1, name: 'D1'}, { id:2, name: 'D2'} ] };

  beforeEach(module('pdhp.collection.details'));

  beforeEach(inject(function(_$rootScope_) {
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function($controller) {
    $scope = $rootScope.$new();

    mockParam = { id: 0 };

    mockapiFactory = {
      getCollection: function(id) { 
        return mockResponse;
      }
    }
    
    $controller('collectionDetailController', {
      '$scope': $scope,
      '$routeParams': mockParam,
      '$window': { history: { back: function(){} } },
      'apiFactory': mockapiFactory
    });
  }));

  describe('collectionDetailController with good param', function(){

    beforeEach(function() {
      mockParam.id = 1;
      $rootScope.$apply();
    });

    it('should define value for collection', function() {
      
      expect($scope.collection).toEqual(mockResponse);
      
      
    });

  });
});