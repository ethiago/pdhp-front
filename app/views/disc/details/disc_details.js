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

    $scope.close = function(){
      console.log("close");
    }

    $scope.cancelEdit = function(){
      console.log("cancelEdit");
    }

    $scope.cancelAdd = function(){
      console.log("cancelEdit");
    }

    $scope.edit = function(){
      console.log("edit");
    }

    $scope.add = function(){
      console.log("add");
    }

    $scope.save = function(){
      console.log("save");
    }

    $scope.remove = function(item, id){
      console.log("remove");
      console.log(item);
      console.log(id);
    }

    $scope.data = { name: "Blas", list: [ { name: "A"}, { name: "B"}, { name: "C"} ]}
    $scope.menu = [ { action: $scope.remove, iconName: "clear", displayName: "Remove" }]

    $scope.discId = Number($routeParams.id);
    if(!Number.isInteger($scope.discId))
    {
        $window.history.back();
    }
  
    $scope.disc = apiFactory.disc.get( {discId: $scope.discId} );


}])