'use strict';

angular.module('pdhp.collection', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/collection',{
    redirectTo: "/home"
  })
  .when('/collection/:id', {
    redirectTo: "/collection/:id/details"
  })
  .when('/collection/:id/details', {
    templateUrl: 'views/collection.html',
    controller: 'collectionController'
  })
  ;
  
}])

.controller('collectionController', [ '$scope', '$routeParams', '$location', '$window', 'apiFactory', function($scope, $routeParams, $location, $window, apiFactory) {

  $scope.close = function(){
    $window.history.back();
  };

  var collectionId = Number($routeParams.id);

  if(!Number.isInteger(collectionId))
  {
    console.log(collectionId + " is not a integer");
    $window.history.back();
  }

  var collection = apiFactory.getCollection($routeParams.id);

  collection.$promise.then(function(obj){
    $scope.collection = {
      resource: collection,
      value: obj
    }
  });

}])
;