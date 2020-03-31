(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter('illustrate', illustrateFilterFactory)
  .filter('truth', TruthFilter);

  MsgController.$inject = ['$scope', 'illustrateFilter'];
  function MsgController($scope, illustrateFilter) {
    $scope.name = "LF14";
    $scope.stateOfBeing = "Pikatchu";

    $scope.sayMessage  = function() {
      var msg = "LF14 shows a pokemon!";
      return msg;
    };

    $scope.sayIllustrateMessage  = function() {
      var msg = "LF14 shows an animal!";
      msg = illustrateFilter(msg);
      return msg;
    };

    $scope.feedLF14 = function () {
      $scope.stateOfBeing = "charizard";
    };
  }

  function illustrateFilterFactory() {
    return function(input) {
      input = input || "";
      input = input.replace("shows", "illustrates");
      return input;
    };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }

})();
