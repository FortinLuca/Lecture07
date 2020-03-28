(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "LF14";

    $scope.sayMessage  = function() {
      return "LF14 likes to drink";
    }
  }

})();
