'use strict';

describe('pdhp.collection.details', function() {

  var $q,
      $rootScope,
      $scope,
      mockapiFactory,
      mockParam,
      queryDeferred,
      mockResponse = { id: 1, name: 'collection', discs:[ { id: 1, name: 'D1'}, { id:2, name: 'D2'} ] };

  beforeEach(module('pdhp.collection.details'));

  beforeEach(inject(function(_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function($controller) {
    $scope = $rootScope.$new();

    mockParam = { id: 0 };

    mockapiFactory = {
      getCollection: function(id) {
        queryDeferred = $q.defer();
        return { $promise: queryDeferred.promise };
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
      queryDeferred.resolve(mockResponse);
      mockParam.id = 1;
      $rootScope.$apply();
    });

    it('should define value for collection', function() {
      
      expect($scope.collection.value).toEqual(mockResponse);
      
    });

  });
});