var brandElem = document.querySelector('.shoeBrand');
var colorElem = document.querySelector('.shoeColor');
var sizeElem = document.querySelector('.shoeSize');
var stockQtyElem = document.querySelector('.shoeQty');
var addStockBtn = document.querySelector('.btnStock');
var shoeSelect = document.querySelector('.shoe');
var colorSelect = document.querySelector('.shoeColors');
var ShoeSizeSelect = document.querySelector('.shoeSizes');
var searchShoesBtn = document.querySelector('.searchBtn');
var storeToBasket  = document.querySelector('.btnCart');

// Template setup
var templateSource = document.querySelector(".ShoeTemplate").innerHTML;
var shoeTemplate = Handlebars.compile(templateSource);
var displayShoesElem = document.querySelector('.displayArea');


var StoredItems = localStorage.getItem('shoppingBasket') ? JSON.parse(localStorage.getItem('shoppingBasket')) : [];
var shoe_Catalogue = ShoeCatalogue(StoredItems);

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

function searchByID(idValue){  
  localStorage.setItem('shoppingBasket', JSON.stringify(shoe_Catalogue.cart(idValue.id)));
   window.location.reload();

}

addStockBtn.addEventListener('click', addStock);

// Search Items 
searchShoesBtn.addEventListener('click', function () {
  SearchItems = {
    shoeBrand: shoeSelect.value,
    colour: colorSelect.value,
    sizeShoe: ShoeSizeSelect.value
  }
  if (colorSelect.value == "") {
    delete selectedItems.colour;
  }

  if (ShoeSizeSelect.value == "") {
    delete selectedItems.sizeShoe;
  }
  if (shoeSelect.value == "") {
    delete selectedItems.shoeBrand;
  }
  shoe_Catalogue.filterBy(SearchItems);
  displayShoesElem.innerHTML = shoeTemplate({
    shoeList:shoe_Catalogue.getFiltered()
  });
});


window.addEventListener('load',function(){
  displayShoesElem.innerHTML = shoeTemplate({
    shoeList:shoe_Catalogue.storeMap()
  });
});





