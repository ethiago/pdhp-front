'use strict';

// Declare app level module which depends on views, and components
angular.module('pdhp', [
  'ngRoute',
  'pdhp.autoConst',
  'pdhp.view1',
  'pdhp.view2',
  'pdhp.version',
  'pdhp.apiVersion'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
