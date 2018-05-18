describe('The Add Shoes into stock', function() {
    it('should display shoe in the shoe stock list if it does not exist in a stock list  ', function() {
      var shoes = ShoeCatalogue();
      shoes.stockadd(
        "New Balance","Blue","7","4", 1500);
      assert.deepEqual(shoes.storeMap(),
      [
        {shoeBrand: "Le coq", colour: "Blue", qty: 2, sizeShoe: "6", price:2400,id:'1'},
        {shoeBrand: "Le coq", colour: "Blue", qty: 2, sizeShoe: "7", price: 2400, id:'2'},
        {shoeBrand: "Adidas", colour: "Brown", qty: 2, sizeShoe: "6", price: 2400, id:'3'},
        {shoeBrand: "Adidas", colour: "White", qty: 2, sizeShoe: "7", price: 2400, id:'4'},
        {shoeBrand: "Nike", colour: "White", qty: 2, sizeShoe: "6", price: 2400,id:'5'},
        {shoeBrand: "Nike", colour: "Black", qty: 2, sizeShoe: "7", price: 2400,id:'6'},
        {shoeBrand: "Puma", colour: "White", qty: 2, sizeShoe: "6", price: 2400,id:'7'},
        {shoeBrand: "Puma", colour: "Black", qty: 2, sizeShoe: "7", price: 2400,id:'8'},
      {shoeBrand: 'New Balance', colour: "Blue", qty: "7", sizeShoe: "4", price: 1500,id:9}]
    );
});

it('should display increased shoe QTY if shoe already exist  ', function() {
    var shoes = ShoeCatalogue();
    shoes.stockadd(
      "New Balance","Blue","7","4", 1500);
      shoes.stockadd(
    "New Balance","Blue","4","4", 1500);
    assert.deepEqual(shoes.storeMap(),
   [ {shoeBrand: "Le coq", colour: "Blue", qty: 2, sizeShoe: "6", price:2400,id:'1'},
    {shoeBrand: "Le coq", colour: "Blue", qty: 2, sizeShoe: "7", price: 2400, id:'2'},
    {shoeBrand: "Adidas", colour: "Brown", qty: 2, sizeShoe: "6", price: 2400, id:'3'},
    {shoeBrand: "Adidas", colour: "White", qty: 2, sizeShoe: "7", price: 2400, id:'4'},
    {shoeBrand: "Nike", colour: "White", qty: 2, sizeShoe: "6", price: 2400,id:'5'},
    {shoeBrand: "Nike", colour: "Black", qty: 2, sizeShoe: "7", price: 2400,id:'6'},
    {shoeBrand: "Puma", colour: "White", qty: 2, sizeShoe: "6", price: 2400,id:'7'},
    {shoeBrand: "Puma", colour: "Black", qty: 2, sizeShoe: "7", price: 2400,id:'8'},
    {shoeBrand: 'New Balance', colour: "Blue", qty:11, sizeShoe: "4", price: 1500,id:9}]
  );
});
});


describe('Filterby selected brandName,BrandColor,BrandSize', function() {
    it('Should filterBy BrandName of a shoe then return it has an Object', function() {
      var shoes = ShoeCatalogue();
      shoes.stockadd("New Balance","Blue","7","4", 1500);
      shoes.filterBy({
        shoeBrand:"New Balance"
      });
     
      assert.deepEqual(shoes.getFiltered(),
      [{shoeBrand: 'New Balance', colour: "Blue", qty: "7", sizeShoe: "4", price: 1500, id:9}]);
});

it('Should filterBy Color of Shoes then return has an Object', function() {
    var shoes = ShoeCatalogue();
    shoes.stockadd("New Balance","Blue","7","4", 1500);
    shoes.stockadd("Nike","Blue","5","4", 1500);
    shoes.stockadd("Nike","White","4","4", 1500);
    shoes.filterBy({colour:"Blue"});
    assert.deepEqual(shoes.getFiltered(),
    [ {shoeBrand: "Le coq", colour: "Blue", qty: 2, sizeShoe: "6", price:2400,id:'1'},
     {shoeBrand: "Le coq", colour: "Blue", qty: 2, sizeShoe: "7", price: 2400, id:'2'},
     {shoeBrand: 'New Balance', colour: "Blue", qty: "7", sizeShoe: "4", price: 1500, id:9},
      {shoeBrand: 'Nike', colour: "Blue", qty: "5", sizeShoe: "4", price: 1500,id:10}]    
  );
});

it('should filterBy Size of shoes then return an object has an Object', function() {
    var shoes = ShoeCatalogue();
    shoes.stockadd("New Balance","Blue","7","7", 1500);
    shoes.stockadd("Nike","Blue","5","4", 1500);
    shoes.stockadd("Nike","White","4","4", 1500);
    shoes.filterBy({sizeShoe:"4"});
    assert.deepEqual(shoes.getFiltered(),
    [{shoeBrand: 'Nike', colour: "Blue", qty: "5", sizeShoe: "4", price: 1500,id:10},
      {shoeBrand: 'Nike', colour: "White", qty: "4", sizeShoe: "4", price: 1500,id:11}]    
  );
});
  it('should filterBy BrandName,BrandColor and size has an Object', function() {
    var shoes = ShoeCatalogue();
    shoes.stockadd("New Balance","Blue","7","7", 1500);
    shoes.stockadd("Nike","Blue","5","4", 1500);
    shoes.stockadd("Nike","White","4","4", 1500);
    shoes.filterBy({shoeBrand:"Nike",colour:"Blue",sizeShoe:"4"});
    
    assert.deepEqual(shoes.getFiltered(),
    [{shoeBrand: 'Nike', colour: "Blue", qty: "5", sizeShoe: "4", price: 1500,id:10}
     ]    
  );
});
});

describe('Add to Basket', function() {
    it('should search shoes using id then return an object ', function() {
      var shoes = ShoeCatalogue();
      shoes.cart(1);
      assert.deepEqual(shoes.addedCartITems(),
      [
      {shoeBrand: 'Le coq', colour: "Blue", qty: 1, sizeShoe: "6", price: 2400,id:1}]
    );
});

it('should search shoes using id then return an object', function() {
    var shoes = ShoeCatalogue();
      shoes.cart(1);
      shoes.cart(1);
      assert.deepEqual(shoes.addedCartITems(),
      [
      {shoeBrand: 'Le coq', colour: "Blue", qty: 2, sizeShoe: "6", price: 4800,id:1}]
    );  
});

it('should search shoes using id then return an object', function() {
  var shoes = ShoeCatalogue();
    shoes.cart(1);
    shoes.cart(2);
    assert.deepEqual(shoes.addedCartITems(),
    [
    {shoeBrand: 'Le coq', colour: "Blue", qty: 1, sizeShoe: "6", price: 2400,id:1},
    {shoeBrand: 'Le coq', colour: "Blue", qty: 1, sizeShoe: "7", price: 2400,id:2}
  ]
  );  
});
});




describe('Remove Item to Cart', function() {
  it('should 0.00 Cart total if cart is deleted', function() {
    var shoes = ShoeCatalogue();
    shoes.cart(1);
    assert.deepEqual(shoes.addedCartITems(),
    [{shoeBrand: 'Le coq', colour: "Blue", qty: 1, sizeShoe: "6", price: 2400,id:1}]);
    shoes.removeItemCart()
    assert.equal(shoes.cartBill(),0.00);
});


it('should 4800.00 cart total if cart is not removed', function() {
  var shoes = ShoeCatalogue();
  shoes.cart(1);
  shoes.cart(2);
  assert.deepEqual(shoes.addedCartITems(),
  [{shoeBrand: 'Le coq', colour: "Blue", qty: 1, sizeShoe: "6", price: 2400,id:1},
  {shoeBrand: 'Le coq', colour: "Blue", qty: 1, sizeShoe: "7", price: 2400,id:2}]);
  console.log(shoes.calcTotal());
  assert.equal(shoes.cartBill(),4800.00);
});


});






























