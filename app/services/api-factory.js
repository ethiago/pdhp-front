'use strict';

angular.module('pdhp.services', ['pdhp.domain'])

.factory('apiFactory', [ 'metaResource', 'collectionResource', function apiFactory(metaResource, collectionResource) {
      
    return {
      "getMeta": function(){
        return metaResource.get().$promise;
      },

      "getCollection": function(id){
        return collectionResource.get( {collectionId: id} );
      }

    };
}])

;