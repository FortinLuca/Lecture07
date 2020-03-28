(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];
  function MsgController($scope, $filter) {
    $scope.name = "LF14";
    $scope.stateOfBeing = "Pikatchu";
    $scope.pokemonCost = .45;

    $scope.sayMessage  = function() {
      var msg = "LF14 shows a pokemon!";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.feedLF14 = function () {
      $scope.stateOfBeing = "charizard";
    }
  }

})();
