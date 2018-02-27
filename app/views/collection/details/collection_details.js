'use strict';

angular.module('pdhp.collection.details', ['ngRoute', 'pdhp.tools.filter'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/collection/:id', {
    redirectTo: "/collection/:id/details"
  })
  .when('/collection/:id/details', {
    templateUrl: 'views/collection_details.html',
    controller: 'collectionDetailController'
  })
  ;
  
}])

.controller('collectionDetailController', [ '$scope', '$routeParams', '$window', 'apiFactory', function($scope, $routeParams, $window, apiFactory) {

  var originatorEv;

  this.openMenu = function($mdMenu, ev) {
    originatorEv = ev;
    $mdMenu.open(ev);

    console.log("passou");
  };

  $scope.collectionId = 0;

  $scope.mode = "list";

  $scope.close = function(){
    if($scope.mode == 'edit')
    {
      $scope.collection.discs = $scope.discsBackup;
      $scope.mode = 'list';
    }else
      $window.history.back();
  };

  $scope.collectionId = Number($routeParams.id);

  if(!Number.isInteger($scope.collectionId))
  {
    console.log($scope.collectionId + " is not a integer");
    $window.history.back();
  }
  

  $scope.collection = apiFactory.collection.get( {collectionId: $scope.collectionId} );

  $scope.$on('DiscSelected', function(event,resource){
    $scope.collection = resource;
    $scope.mode = "list";
  });

  $scope.$on('DiscSelectionCanceled', function(){
    $scope.mode = "list";
  });

  originatorEv = null;

  /**********EDIT*************/

  $scope.edit = function(){
    $scope.discsBackup = angular.copy( $scope.collection.discs );
    $scope.mode = 'edit';
  }

  $scope.remove = function(disc){
    $scope.collection.discs = $scope.collection.discs.filter(function( e ) { return e.id !== disc.id });
  }

  $scope.save = function(){
    $scope.mode = 'list';
    $scope.collection.$save(function(collection){
      $scope.collection = collection;
    });
  }

}])

.controller('addDiscController', [ '$scope', 'apiFactory', 'nSetSubFilter', function($scope, apiFactory, nSetSubFilter){

  $scope.selectedItem = null;
  $scope.searchText = null;

  $scope.query = function(searchText){
    return apiFactory.disc.query({ name: searchText}).$promise.then(function(list){

        return nSetSubFilter(list, $scope.collection.discs, function(a,b){
          return a.id === b.id;
        });
    });
  };

  $scope.add = function(){
    if($scope.selectedItem)
    {
      $scope.searchText = null;

      $scope.collection.discs.push($scope.selectedItem);
      $scope.collection.$save(function(collection){
        $scope.collection = collection;
        $scope.$emit('DiscSelected', $scope.collection);
      });
    }
  };

  $scope.cancel = function(){
    $scope.selectedItem = null;
    $scope.searchText = null;
    $scope.$emit('DiscSelectionCanceled');
  };

}])

;