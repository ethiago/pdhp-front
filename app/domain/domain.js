'use strict';

angular.module('pdhp.domain', ['ngResource'])

.factory('metaResource', [ '$resource', 'baseUrl', function apiFactory($resource, baseUrl) {
      
    return $resource(baseUrl + "/meta", null);
    
}])

;