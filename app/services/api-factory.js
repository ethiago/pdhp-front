'use strict';

angular.module('pdhp.services', ['pdhp.domain'])

.factory('apiFactory', [ 'metaResource', function apiFactory(metaResource) {
      
    return {
      "getMeta": function(){

        return metaResource.get().$promise;

      }
    };
}])

;