var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

var filteredNumberArray = numberArray.filter(function (value) {
  return value > 5;
});

console.log("Filtered number array: ", filteredNumberArray);

var shoppingList = [
  "Latte", "Biscotti (cioccolato)", "Cioccolato", "Burro", "Ciambelle (cioccolato)", "Caramelle (cioccolato)"
];

console.log("Shopping list: ", shoppingList);

var searchValue = "cioccolato" ;
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}

var serachedShoppingList = shoppingList.filter(containsFilter);
console.log("Searched shopping list: ", serachedShoppingList);

// (funtion () {
//   angular.module('FilterApp', [])
//
//   .controller('FilterController', funtion($scope) {
//
//   });
// })();
