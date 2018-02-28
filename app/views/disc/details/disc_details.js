'use strict';

angular.module('pdhp.disc.details', ['ngRoute', 'pdhp.pages.detail'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/disc/:id/details', {
    templateUrl: 'views/disc_details.html',
    controller: 'discDetailController'
  });
}])

.controller('discDetailController', ['$scope', 'apiFactory', '$routeParams', '$window', function discDetailController($scope, apiFactory, $routeParams, $window){

    $scope.save = function(){
      $scope.disc.$save(function(disc){
        $scope.disc = disc;
      });
    }

    $scope.discId = Number($routeParams.id);
    if(!Number.isInteger($scope.discId))
    {
        $window.history.back();
    }
  
    $scope.disc = apiFactory.disc.get( {discId: $scope.discId} );


}])