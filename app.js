(function () {
  'use strict';

  angular.module('DIApp', [])

  .controller('DIController', function($scope, $filter){

  // function DIcontroller($scope, $filter) {
    $scope.name = "LF14";
    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    function AnnonateMe(name, job, blah){
    return "blah";
    };

    console.log(AnnonateMe());

  });


})();
