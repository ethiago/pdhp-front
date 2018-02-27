'use strict';

angular.module('pdhp.domain', ['ngResource'])

.config( [ '$resourceProvider', function($resourceProvider){

    $resourceProvider.defaults.stripTrailingSlashes = false;
}])

.factory('metaResource', [ '$resource', 'baseUrl', function metaResourceFactory($resource, baseUrl) {
      
    return $resource(baseUrl + "/meta", null);
    
}])

.factory('collectionResourceFactory', ['$resource', 'baseUrl', function collectionResourceFactory($resource, baseUrl){

    return $resource(baseUrl + "/collection/:collectionId", {collectionId: '@id'});

}])

.factory('searchResource', [ '$resource', 'baseUrl', function searchResourceFactory($resource, baseUrl) {
      
    return $resource(baseUrl + "/search", null, {'query': {method: 'GET', isArray: false }});
    
}])

.factory('discResourceFactory', [ '$resource', 'baseUrl', function discResourceFactory($resource, baseUrl) {
      
    return $resource(baseUrl + "/disc/:discId", { discId: '@id' });
    
}])

;