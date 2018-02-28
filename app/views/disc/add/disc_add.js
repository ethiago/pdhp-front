'use strict';

angular.module('pdhp.disc.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/disc/add', {
    templateUrl: 'views/disc_add.html',
    controller: 'discAddController'
  })
  ;
}])

.controller('discAddController', [ '$scope', '$window', 'apiFactory', '$location',  function($scope, $window, apiFactory, $location) {

    $scope.model = new apiFactory.disc();

    $scope.model.name = '';

    $scope.save = function(){
        $scope.model.$save(function(savedModel){
            $location.path('/disc/'+savedModel.id+'/details')
        })
    }

}])