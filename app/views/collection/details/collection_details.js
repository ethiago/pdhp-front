'use strict';

angular.module('pdhp.collection.details', ['ngRoute', 'pdhp.tools.filter'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/collection/:id/details', {
    templateUrl: 'views/collection_details.html',
    controller: 'collectionDetailController'
  })
  ;
  
}])

.controller('collectionDetailController', [ '$scope', '$routeParams', '$window', 'apiFactory', '$location', '$q', function($scope, $routeParams, $window, apiFactory, $location, $q) {

  $scope.itemClick = function(disc){
    $location.path('/disc/'+disc.id+'/details')
  }


  $scope.remove = function(id, item){
    $scope.collection.discs.splice(id,1);
  }

  $scope.add = function(){
    
    $scope.addDeferred = $q.defer();

    $scope.addMode = true

    return $scope.addDeferred.promise;
  }

  $scope.cancelAdd = function(){
    $scope.addMode = false
    $scope.addDeferred.resolve();
  }
    

  $scope.save = function(){
    return $scope.collection.$save(function(collection){
      $scope.collection = collection;
    });
  }

  $scope.$on('DiscSelected', function(event,resource){
    $scope.collection = resource;
    $scope.addMode = false
    $scope.addDeferred.resolve();
  });


  $scope.collectionId = Number($routeParams.id);
  if(!Number.isInteger($scope.collectionId))
  {
    $window.history.back();
  }
  
  $scope.collection = apiFactory.collection.get( {collectionId: $scope.collectionId} );

  $scope.menu = [ { action: $scope.remove, iconName: "clear", displayName: "Remove" } ];

  $scope.addMode = false

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

}])

;