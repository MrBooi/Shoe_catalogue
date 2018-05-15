describe('The Add Shoes into stock', function() {
    it('should display shoe in the shoe stock list if it does not exist in a stock list  ', function() {
      var shoes = ShoeCatalogue();
      shoes.stockadd(
        "New Balance","Blue","7","4", 1500);
   
      assert.deepEqual(shoes.storeMap(),
      [
      {shoeBrand: 'New Balance', colour: "Blue", qty: "7", sizeShoe: "4", price: 1500,id:1}]
    );
});

it('should display increased shoe QTY if shoe already exist  ', function() {
    var shoes = ShoeCatalogue();
    shoes.stockadd(
      "New Balance","Blue","7","4", 1500);
      shoes.stockadd(
    "New Balance","Blue","4","4", 1500);
    assert.deepEqual(shoes.storeMap(),
    [{shoeBrand: 'New Balance', colour: "Blue", qty: 11, sizeShoe: "4", price: 1500,id:1}]
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
      [{shoeBrand: 'New Balance', colour: "Blue", qty: "7", sizeShoe: "4", price: 1500, id:1}]);
});

it('Should filterBy Color of Shoes then return has an Object', function() {
    var shoes = ShoeCatalogue();
    shoes.stockadd("New Balance","Blue","7","4", 1500);
    shoes.stockadd("Nike","Blue","5","4", 1500);
    shoes.stockadd("Nike","White","4","4", 1500);
    shoes.filterBy({colour:"Blue"});
    assert.deepEqual(shoes.getFiltered(),
    [{shoeBrand: 'New Balance', colour: "Blue", qty: "7", sizeShoe: "4", price: 1500, id:1},
      {shoeBrand: 'Nike', colour: "Blue", qty: "5", sizeShoe: "4", price: 1500,id:2}]    
  );
});

it('should filterBy Size of shoes then return an object has an Object', function() {
    var shoes = ShoeCatalogue();
    shoes.stockadd("New Balance","Blue","7","7", 1500);
    shoes.stockadd("Nike","Blue","5","4", 1500);
    shoes.stockadd("Nike","White","4","4", 1500);
    shoes.filterBy({sizeShoe:"4"});
    assert.deepEqual(shoes.getFiltered(),
    [{shoeBrand: 'Nike', colour: "Blue", qty: "5", sizeShoe: "4", price: 1500,id:2},
      {shoeBrand: 'Nike', colour: "White", qty: "4", sizeShoe: "4", price: 1500,id:3}]    
  );
});
  it('should filterBy BrandName,BrandColor and size has an Object', function() {
    var shoes = ShoeCatalogue();
    shoes.stockadd("New Balance","Blue","7","7", 1500);
    shoes.stockadd("Nike","Blue","5","4", 1500);
    shoes.stockadd("Nike","White","4","4", 1500);
    shoes.filterBy({shoeBrand:"Nike",colour:"Blue",sizeShoe:"4"});
    assert.deepEqual(shoes.getFiltered(),
    [{shoeBrand: 'Nike', colour: "Blue", qty: "5", sizeShoe: "4", price: 1500,id:2}
     ]    
  );
});
});

describe('Add to Basket', function() {
    it('should search shoes using id then return an object ', function() {
      var shoes = ShoeCatalogue();
      shoes.stockadd("New Balance","Blue","7","4", 1500);
      shoes.cart(1);
      assert.deepEqual(shoes.addedCartITems(),
      [
      {shoeBrand: 'New Balance', colour: "Blue", qty: "7", sizeShoe: "4", price: 1500,id:1}]
    );
});

it('should search shoes using id then return an object', function() {
    var shoes = ShoeCatalogue();
    shoes.stockadd("New Balance","Blue","7","4", 1500);
    shoes.stockadd("New Balance","White","4","4", 1500);
      shoes.cart(2);
    assert.deepEqual(shoes.addedCartITems(),
    [{shoeBrand: 'New Balance', colour: "White", qty: '4', sizeShoe: "4", price: 1500,id:2}]
  );
});
});


























