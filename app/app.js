'use strict';

// Declare app level module which depends on views, and components
angular.module('pdhp', [
  'ngRoute',
  'ngMaterial',
  'pdhp.autoConst',
  'pdhp.home',
  'pdhp.collection',
  'pdhp.apiVersion'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}])
.config(['$mdThemingProvider', function($mdThemingProvider) {

  $mdThemingProvider
  .theme('default')
  .primaryPalette('orange')
  .accentPalette('purple')
  .warnPalette('red')
  .backgroundPalette('grey');

  // Enable browser color
  $mdThemingProvider.enableBrowserColor({
    theme: 'default', 
    palette: 'primary'
  });

}])
;
