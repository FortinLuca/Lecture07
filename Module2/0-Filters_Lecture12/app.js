(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "LF14";
    $scope.stateOfBeing = "Pikatchu";

    $scope.sayMessage  = function() {
      return "LF14 shows a pokemon!";
    };

    $scope.feedLF14 = function () {
      $scope.stateOfBeing = "charizard";
    }
  }

})();
