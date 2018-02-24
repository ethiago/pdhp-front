'use strict';

// Declare app level module which depends on views, and components
angular.module('pdhp', [
  'ngRoute',
  'ngMaterial',
  'pdhp.autoConst',
  'pdhp.home',
  'pdhp.apiVersion'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}])
.config(['$mdThemingProvider', function($mdThemingProvider) {

  // Extend the red theme with a different color and make the contrast color black instead of white.
  // For example: raised button text will be black instead of white.
  var neonRedMap = $mdThemingProvider.extendPalette('red', {
    '500': '#ff0000',
    'contrastDefaultColor': 'dark'
  });

  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('neonRed', neonRedMap);

  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('neonRed');

}])
;
