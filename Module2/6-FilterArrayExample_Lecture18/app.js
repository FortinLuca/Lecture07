(function () {
  'use strict';

  var shoppingList = [
    "Latte", "Biscotti (cioccolato)", "Cioccolato", "Burro", "Ciambelle (cioccolato)", "Caramelle (cioccolato)"
  ];

  angular.module('ShoppingListApp', [])

  .controller('ShoppingListController', function($scope){
    $scope.shoppingList = shoppingList;

  });

})();
