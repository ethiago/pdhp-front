'use strict';

angular.module('pdhp.pages.detail', [])

.directive('pdPageDetail', function() {
  return {
    restrict: 'E',
    transclude: false,
    templateUrl: 'views/page-detail.html',
    scope:{
      modeBegin: "&pdBeginAs"
      ,label: "@pdLabel"
      ,onCancelEdit: "&pdCancelEdit"
      ,onCancelAdd: "&pdCancelEdit"
      ,onEdit: "&pdEdit"
      ,onClose: "&pdClose"
      ,onAdd: "&pdAdd"
      ,onSave: "&pdSave"
      ,modelName: "=pdModelName"
      ,labelList: "@pdLabelList"
      ,disableEdit: "<?pdDisableEdit"
      ,disableAdd: "<?pdDisableAdd"
      ,modelList: "=pdModelList"
      ,itemDisplay: "@pdItemDisplay"
      ,menuList: "<?pdMenuList"
    },

    controller: [ '$scope', '$q', function pageDetailController($scope, $q){

      $scope.mode = $scope.modeBegin() || 'list'
      console.log($scope.disableEdit)
      $scope.disableEdit = $scope.disableEdit || false; 

      $scope.close = function(mode){
        if($scope.mode == 'edit')
        {
          $q.when($scope.onCancelEdit()).then( function() { $scope.mode = 'list' } )
        }else if($scope.mode == 'add')
        {
          $q.when($scope.onCancelAdd()).then( function() { $scope.mode = 'list' } )
        }
        else
        {
          $scope.onClose()
        }
      }

      $scope.edit = function(){
        $q.when($scope.onEdit()).then( function() { $scope.mode = 'edit' } )
      }

      $scope.add = function(){
        $q.when($scope.onAdd()).then( function() {$scope.mode = 'add' } )
      }

      $scope.save = function(){
        $q.when($scope.onSave()).then( function() {$scope.mode = 'list' } )
      }
      
    }]
  }
})