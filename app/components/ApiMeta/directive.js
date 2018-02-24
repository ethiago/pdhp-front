'use strict';

angular.module('pdhp.apiVersion', ['pdhp.services'])

.directive('apiVersion', function() {
  return {
    restrict: 'E',
    transclude: false,
    scope: {},
    replace: true,

    controller: ['$scope', 'apiFactory', function apiVersionDirectiveController($scope, apiFactory) {
        $scope.metaData = {};

        apiFactory.getMeta()
            .then(function(value){
                $scope.metaData = value;
            }
        );
    }],
    template: 'Api version: <span>{{metaData.version}}</span>'
  };
})

;