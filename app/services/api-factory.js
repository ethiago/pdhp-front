'use strict';

angular.module('pdhp.services', ['pdhp.domain'])

.factory('apiFactory', [ 'metaResource', 'collectionResource', 'searchResource', function apiFactory(metaResource, collectionResource, searchResource) {
      
    return {
      "getMeta": function(){
        return metaResource.get().$promise;
      },

      "getCollection": function(id){
        return collectionResource.get( {collectionId: id} );
      },

      "search": function(query, entity){
        entity = entity || "";
        return searchResource.query( { q: query, entity: entity } ).$promise;
      }

    };
}])

;