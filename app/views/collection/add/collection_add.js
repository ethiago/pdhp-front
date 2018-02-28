'use strict';

angular.module('pdhp.collection.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/collection/add', {
    templateUrl: 'views/collection_add.html',
    controller: 'collectionAddController'
  })
  ;
}])

.controller('collectionAddController', [ '$scope', '$window', 'apiFactory', '$location',  function($scope, $window, apiFactory, $location) {

    $scope.model = new apiFactory.collection();

    $scope.model.name = '';

    $scope.save = function(){
        $scope.model.$save(function(savedModel){
            $location.path('/collection/'+savedModel.id+'/details')
        })
    }

}])