'use strict';

angular.module('pdhp.search', ['ngRoute', 'pdhp.search.directives'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/search',{
    templateUrl: 'views/search.html',
    controller: 'searchController'
  })
  ;
  
}])

.controller('searchController', [ '$scope', '$window', 'apiFactory', function($scope, $window, apiFactory) {

  $scope.close = function(){
    $window.history.back();
  };

  $scope.textSearch = '';
  
  $scope.entity = {
    disc: {
      label: "Discs",
      route: "/disc/:id/details"
    },
    collection: {
      label: "Collections",
      route: "/collection/:id/details"
    }
  }

  $scope.clenEntity = function(){
    $scope.entity.disc.searchResult = null;
    $scope.entity.collection.searchResult = null;
  }

  $scope.search = function(query){

    apiFactory.search(query).then(function(obj) { 

      $scope.clenEntity();

      if(obj.discs.total > 0)
      {
        $scope.entity.disc.searchResult = {
          total: obj.discs.total,
          page: obj.page,
          per_page: obj.per_page,
          query: obj.q,
          result: obj.discs.result
        };
      }
      if(obj.collections.total > 0)
      {
        $scope.entity.collection.searchResult = {
          total: obj.collections.total,
          page: obj.page,
          per_page: obj.per_page,
          query: obj.q,
          result: obj.collections.result
        };
      }
      
    });
      
  };

}])
;