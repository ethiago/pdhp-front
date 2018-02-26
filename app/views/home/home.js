'use strict';

angular.module('pdhp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'homeController'
  });
}])

.controller('homeController', [ '$scope', '$location',  function($scope, $location) {

  $scope.go = function ( path ) {
    $location.path( path );
  };

}])
;