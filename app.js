(function () {
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', DIController);

    function DIcontroller($scope, $filter) {
      $scope.name = "LF14";
      $scope.upper = function() {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
    }



})();
