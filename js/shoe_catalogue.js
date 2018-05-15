function ShoeCatalogue(storedItems) {
  var shoeBrand = '';
  var shoeColor = '';
  var shoeQty = 0;
  var shoeSize = 0;
  var storeShoeStock = storedItems || [];
  var trolley = []
  var basket = [];

  function stockMap() {
    return storeShoeStock;
  }

  function filterShoes(Params) {
    trolley = _.filter(storeShoeStock, Params);
    
    return _.filter(storeShoeStock, Params);
  }

  function getSearchedItems() {
    return trolley;
  }


  function addCart(id) {
    var cartExist = false;     
     basket.map(basketItem=>{
       console.log("here")
        if (basketItem.id==id) {
          basketItem.qty +=1;
          cartExist = true; 
        }
      }) 

      if(!cartExist){
        console.log("does not")
        let found=  storeShoeStock.find(items => (items.id==id));
        basket.push({
        shoeBrand: found.shoeBrand,
        colour: found.colour,
        qty: 0,
        sizeShoe: found.shoesize,
        price: 1500,
        'id': id 
        })
        }
 
      storeShoeStock.map(findItem=>{
        console.log("local changes")
     if(findItem.id==id){
      findItem.qty =findItem.qty-1;
          }
      })
  
    return storeShoeStock;
  }
  
  function getBasket(){
    return basket;
  }

  
 //adding new Stock
  function addNewStock(brand, Color, Qty, shoesize, Price) {
    var alreadyExist = false;
    storeShoeStock.map(current => {
      if (current.shoeBrand === brand && current.colour === Color && current.sizeShoe == shoesize) {
        console.log("already exist");
        let getQty = parseFloat(current.qty)
        let QtyNumber = parseFloat(Qty)
        current.qty = getQty + QtyNumber;
        alreadyExist = true;
      }
    });
    if (!alreadyExist) {
      let id = storeShoeStock.length+1;
      storeShoeStock.push({
        'shoeBrand': brand,
        'colour': Color,
        'qty': Qty,
        'sizeShoe': shoesize,
        'price': 1500,
        'id': id
      })
    }
    return storeShoeStock;
  }



  return {
    stockadd: addNewStock,
    storeMap: stockMap,
    filterBy: filterShoes,
    getFiltered:getSearchedItems,
    cart: addCart,
    addedCartITems: getBasket
  }
}


