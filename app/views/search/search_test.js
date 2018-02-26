'use strict';

describe('pdhp.search module', function() {

  var $rootScope,
      $scope,
      ctrl;

  beforeEach(module('pdhp.search'));

  beforeEach(inject(function(_$rootScope_) {
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function($controller) {
    $scope = $rootScope.$new();
    ctrl = $controller
      
  $controller('searchController', {
      '$routeParams': { entity: "disc" },
      '$window': {},
      'apiFactory': {},
      '$scope': $scope
    });
  }));

  describe('search controller', function(){

    it('should ....', inject(function($controller) {

      expect(ctrl).toBeDefined();
    }));

  });
});