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

.controller('collectionDetailController', [ '$scope', '$routeParams', '$window', 'apiFactory',  function($scope, $routeParams, $window, apiFactory) {

  $scope.collectionId = 0;

  $scope.mode = "list";

  $scope.close = function(){
    $window.history.back();
  };

  $scope.collectionId = Number($routeParams.id);

  if(!Number.isInteger($scope.collectionId))
  {
    console.log($scope.collectionId + " is not a integer");
    $window.history.back();
  }
  

  $scope.collection = apiFactory.getCollection($scope.collectionId);

  $scope.$on('DiscSelected', function(event,resource){
    $scope.collection = resource;
    $scope.mode = "list";
  });

  $scope.$on('DiscSelectionCanceled', function(){
    $scope.mode = "list";
  });

}])

.controller('addDiscController', [ '$scope', 'apiFactory', 'nSetSubFilter', function($scope, apiFactory, nSetSubFilter){

  $scope.selectedItem = null;
  $scope.searchText = null;

  $scope.query = function(searchText){
    return apiFactory.discSearch(searchText).then(function(list){

        return nSetSubFilter(list, $scope.collection.discs, function(a,b){
          return a.id === b.id;
        })

    });
  };

  $scope.add = function(){
    if($scope.selectedItem)
    {
      $scope.searchText = null;

      $scope.collection.discs.push($scope.selectedItem);
      $scope.collection.$save(function(user){
        $scope.collection = user;
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