'use strict';

describe('pdhp.home module', function() {

  var $rootScope,
      $scope,
      ctrl;

  beforeEach(module('pdhp.home'));

  beforeEach(inject(function(_$rootScope_) {
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function($controller) {
    $scope = $rootScope.$new();
    ctrl = $controller
      
  $controller('homeController', {
      '$scope': $scope,
      '$location': { path: function(path) {} }
    });
  }));

  describe('home controller', function(){

    it('should ....', inject(function($controller) {

      expect(ctrl).toBeDefined();
    }));

  });
});