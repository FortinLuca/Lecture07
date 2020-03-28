(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$flter'];
  function MsgController($scope, $filter) {
    $scope.name = "LF14";
    $scope.stateOfBeing = "Pikatchu";

    $scope.sayMessage  = function() {
      var msg = "LF14 shows a pokemon!";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.feedLF14 = function () {
      $scope.stateOfBeing = "charizard";
    };
  }

})();
