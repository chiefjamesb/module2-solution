(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  // List of shopping items
  var buyList = this;

   buyList.items = ShoppingListCheckOffService.getToBuyItems();

  buyList.addItem = function (itemIndex, name, quantity) {
    ShoppingListCheckOffService.addItem(itemIndex, name, quantity);
  
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  // List of shopping items
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems =[ {name: "cookies", quantity: 10} ,{name: "brownies", quantity: 15} , 
                    {name: "rolls", quantity: 20} , {name: "cakes", quantity: 2} , {name: "croissants", quantity: 12} ];
  var boughtItems = [];

  service.addItem = function (itemIndex, itemName, quantity) {
     
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtItems.push(item);
      console.log(item);
      toBuyItems.splice(itemIndex,1)
    
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}




})();
