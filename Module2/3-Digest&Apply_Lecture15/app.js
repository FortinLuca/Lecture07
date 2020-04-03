(function () {
  'use strict';

  angular.module('CounterApp', [])

  .controller('CounterController', function ($scope, $timeout) {
    $scope.counter = 0;

    $scope.upCounter = function() {
      $timeout(function() {
        $scope.counter++;
        console.log("counter incremented");
      }, 2000);
    };

    // $scope.upCounter = function() {
    //   setTimeout(function() {
    //     $scope.$apply(function() {
    //       $scope.counter++;
    //       console.log("counter incremented");
    //     });
    //   }, 2000);
    // };

    // $scope.upCounter = function() {
    //   // setTimeout( function() {
    //     $scope.counter++;
    //     console.log("counter incremented");
    //     // $scope.$digest();
    //   // }, 2000);
    // };

  });
})();
