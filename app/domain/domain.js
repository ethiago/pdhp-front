'use strict';

angular.module('pdhp.domain', ['ngResource'])

.factory('metaResource', [ '$resource', 'baseUrl', function metaResourceFactory($resource, baseUrl) {
      
    return $resource(baseUrl + "/meta", null);
    
}])

.factory('collectionResource', ['$resource', 'baseUrl', function collectionResourceFactory($resource, baseUrl){

    return $resource(baseUrl + "/collection/:collectionId", {collectionId: '@id'});

}])

;