'use strict';

angular.module('pdhp.services', ['pdhp.domain'])

.factory('apiFactory', [ 'metaResource', 'collectionResourceFactory', 'searchResource', 'discResourceFactory', function apiFactory(metaResource, collectionResourceFactory, searchResource, discResourceFactory) {
      
    return {
      "getMeta": function(){
        return metaResource.get().$promise;
      },

      "collection": collectionResourceFactory,

      "search": function(query, entity){
        entity = entity || "";
        return searchResource.query( { q: query, entity: entity } ).$promise;
      },

      "disc": discResourceFactory,

    };
}])

;