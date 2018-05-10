var brandElem = document.querySelector('.shoeBrand');
var colorElem = document.querySelector('.shoeColor');
var sizeElem = document.querySelector('.shoeSize');
var stockQtyElem = document.querySelector('.shoeQty');
var addStockBtn = document.querySelector('.btnStock');

function ShoeCatalouge(storedItems, trolley) {
  var shoeBrand = '';
  var shoeColor = '';
  var shoeQty = 0;
  var shoeSize = 0;
  var storeShoeStock = storedItems || [];

  function setShoeBrand(value) {
    if (value != undefined) {
      shoeBrand = value;
      return shoeBrand;
    }
  }
  function setShoeColor(value) {
    if (value != undefined) {
      shoeColor = value;
      return shoeColor;
    }

  }
  function setShoeQty(value) {
    if (value != undefined) {
      shoeQty = value;
      return shoeQty;
    }

  }

  function setShoeSize(value) {
    if (value != undefined) {
      shoeSize = value;
      return shoeSize;
    }
  }

  function stockMap() {
    return storeShoeStock;
  }

  function addNewStock(brand, Color, Qty, shoesize, Price) {
    
    
     storeShoeStock.push({
      'shoeBrand':brand,
      'colour':Color,
      'qty':Qty,
      'sizeShoe':shoesize,
      'price': 1500
    })
   

      return storeShoeStock;
    }

  return {
    stockadd: addNewStock,
    storeMap: stockMap
  }
}


var StoredItems = localStorage.getItem('shoppingBasket') ? JSON.parse(localStorage.getItem('shoppingBasket')) : [];

var shoe_Catalogue = ShoeCatalouge(StoredItems);

function addStock() {
   
  shoe_Catalogue.stockadd(
    brandElem.value,
    colorElem.value,
    stockQtyElem.value,
    sizeElem.value,
     150
    );

  localStorage.setItem('shoppingBasket', JSON.stringify(shoe_Catalogue.storeMap()));

}


addStockBtn.addEventListener('click', addStock);
