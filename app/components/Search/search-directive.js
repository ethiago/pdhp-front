'use strict';

angular.module('pdhp.search.directives', [])

.directive('pdSearchInput', function() {
  return {
    restrict: 'E',
    transclude: true,

    templateUrl: 'views/search-input.html'
  };
})

.directive('pdSearchResult', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        _: '=entity',
      },

      controller: ['$scope', '$location', function($scope, $location){
        $scope.listClick = function(item){
          $location.path($scope._.route.replace(':id', item.id));
        }
      }],
  
      templateUrl: 'views/search-result.html'
    };
  })

;