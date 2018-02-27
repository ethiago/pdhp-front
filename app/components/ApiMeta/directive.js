'use strict';

angular.module('pdhp.apiVersion', ['pdhp.services'])

.directive('apiVersion', function() {
  return {
    restrict: 'E',
    transclude: false,
    scope: {},

    controller: ['$scope', 'apiFactory', function apiVersionDirectiveController($scope, apiFactory) {
        $scope.metaData = {};

        apiFactory.getMeta()
            .then(function(value){
                $scope.metaData = value;
            }
        );
    }],
    template: '<span>Api version: <span id="api-version">{{metaData.version}}</span></span>'
  };
})

;