(function () {
'use strict'

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name="LF14";
  $scope.sayHello = function() {
    return "Hello LF14";
  };
});

})();
