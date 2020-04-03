(function () {
  'use strict';

  var shoppingList1 = [
    "Latte", "Biscotti", "Cioccolato", "Burro", "Ciambelle", "Caramelle"
  ];

  var shoppingList2 = [
    {
      name: "Latte",
      quantity: "2"
    },
    {
      name: "Biscotti",
      quantity: "300"
    },
    {
      name: "Cioccolato",
      quantity: "5"
    },
    {
      name: "Burro",
      quantity: "2"
    },
    {
      name: "Ciambelle",
      quantity: "200"
    },
    {
      name: "Caramelle",
      quantity: "1000"
    }
  ];

  angular.module('ShoppingListApp', [])

  .controller('ShoppingListController', function($scope){
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addToList = function () {
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };

      $scope.shoppingList2.push(newItem);
    }

  });

})();
