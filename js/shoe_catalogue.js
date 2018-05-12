var brandElem = document.querySelector('.shoeBrand');
var colorElem = document.querySelector('.shoeColor');
var sizeElem = document.querySelector('.shoeSize');
var stockQtyElem = document.querySelector('.shoeQty');
var addStockBtn = document.querySelector('.btnStock');
var shoeSelect = document.querySelector('.shoe');
var colorSelect = document.querySelector('.shoeColors');
var ShoeSizeSelect = document.querySelector('.shoeSizes');
var searchShoesBtn = document.querySelector('.searchBtn');


function ShoeCatalouge(storedItems) {
  var shoeBrand = '';
  var shoeColor = '';
  var shoeQty = 0;
  var shoeSize = 0;
  var storeShoeStock = storedItems || [];
  var trolley = {};

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
   
  function filterShoes(brandName,brandColor,brandSize){
    var getFilteredItems = [];
   if(brandName !==''&& brandColor!==''&& brandColor!==''){
    getFilteredItems= _.filter(storeShoeStock,
    {shoeBrand:brandName,colour:brandColor,sizeShoe:brandSize});
     
    if(getFilteredItems !=={}){
   
      trolley=  getFilteredItems;
   console.log(Object.assign(trolley));
              

    // console.log(trolley);
    }
    return getFilteredItems;
    }
  }
    
  function addCart(){


  }
      
    
      
  



  

  function addNewStock(brand, Color, Qty, shoesize, Price) {
   var alreadyExist =false;
   storeShoeStock.map(current =>{
  if(current.shoeBrand ===brand&&current.colour===Color&& current.sizeShoe==shoesize){
       console.log("already exist");
       let  getQty = parseFloat(current.qty)
      let  QtyNumber =parseFloat(Qty)
       current.qty  =getQty +QtyNumber ;
       alreadyExist =true;
      }
   });
      if(!alreadyExist){
         storeShoeStock.push({
      'shoeBrand':brand,
      'colour':Color,
      'qty':Qty,
      'sizeShoe':shoesize,
      'price': 1500
    })
      }
      return storeShoeStock;
    }
 
   


  
  
   return {
    stockadd: addNewStock,
    storeMap: stockMap,
    filterBy: filterShoes  
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

shoeSelect.addEventListener('change',function(){
shoeSelect.value;
});

colorSelect.addEventListener('change',function(){
  colorSelect.value;
  });

  ShoeSizeSelect.addEventListener('change',function(){
    ShoeSizeSelect.value;
  });

// Search Items 
searchShoesBtn.addEventListener('click',function(){
  if(shoeSelect.value !==''&&colorSelect.value !==''&& ShoeSizeSelect.value!==''){
    console.log(shoe_Catalogue.filterBy(shoeSelect.value,colorSelect.value,ShoeSizeSelect.value));
  }
});





