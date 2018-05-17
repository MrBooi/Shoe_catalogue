function ShoeCatalogue(storedItems,storedBasket) {
  var shoeBrand = '';
  var shoeColor = '';
  var shoeQty = 0;
  var shoeSize = 0;
  var storeShoeStock = storedItems || [];
  var trolley = []
  var basket = storedBasket||[];
  var deleteCart =[];

var store=[
      {shoeBrand: "Le coq", colour: "Blue", qty: 2, sizeShoe: "6", price: 2400, id: "1"},
      {shoeBrand: "Le coq", colour: "Blue", qty: 2, sizeShoe: "7", price: 2400, id: "1"}









    ]


























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
          basketItem.price = basketItem.price*basketItem.qty;
          cartExist = true; 
        }
      }) 

      if(!cartExist){
        console.log("does not")
        let found=  storeShoeStock.find(items => (items.id==id));
        basket.push({
        shoeBrand: found.shoeBrand,
        colour: found.colour,
        qty: 1,
        sizeShoe: found.sizeShoe,
        price: found.price,
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

  function removeCart(id){
       console.log("remove cart")
      var removeItem = false;
       let found=  basket.find(item => (item.id==id));
       storeShoeStock.map(updateQty=>{
        console.log("here")
         if (updateQty.id==id) {
          updateQty.qty +=found.qty;
          found.qty =0;
          removeItem = true; 
          console.log(found.qty)
         }
       }) 

        if(!removeItem){
          let found=  storeShoeStock.find(items => (items.id==id));
          basket.push({
          shoeBrand: found.shoeBrand,
          colour: found.colour,
          qty: 0,
          sizeShoe: found.sizeShoe,
          price: found.price,
          'id': id 
          })
        }

        deleteCart = basket
        console.log(deleteCart)
    
   return storeShoeStock
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
        updateElem.style.display='block';
      } 
    });
    if(brand !==""  && Color !== "" && shoesize !== "" && Price!==""){
    if (!alreadyExist) {
      let id = storeShoeStock.length+1;
      storeShoeStock.push({
        'shoeBrand': brand,
        'colour': Color,
        'qty': Qty,
        'sizeShoe': shoesize,
        'price': Price,
        'id': id
      })
      successfulElem.style.display='block';
    }
  } else{
     console.log("incorrect data")
     incorrectElem.style.display="block";
  }


    return storeShoeStock;
  }

  return {
    stockadd: addNewStock,
    storeMap: stockMap,
    filterBy: filterShoes,
    getFiltered:getSearchedItems,
    cart: addCart,
    addedCartITems: getBasket,
    removeItemCart:removeCart
  }
}


