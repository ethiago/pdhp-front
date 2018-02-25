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

.controller('collectionController', [ '$scope', '$routeParams', 'apiFactory', function($scope, $routeParams, apiFactory) {

  var collectionId = $routeParams.id;

  if(!Number.isInteger(collectionId))
    return false;

  var collection = apiFactory.getCollection($routeParams.id);

  collection.$promise.then(function(obj){
    $scope.collection = {
      resource: collection,
      value: obj
    }
  });
  
}])
;