describe('The Add Shoes into stock', function() {
    it('should display   ', function() {
      var storedItems= [];
      var shoeCatalogue = ShoeCatalouge(storedItems);
      shoe_Catalogue.stockadd(
        "New Balance","Blue","7","4", 1500);
   
      assert.deepEqual(shoe_Catalogue.storeMap(),
      [
      {shoeBrand: "Adidas", colour: "Blue", qty: "6", sizeShoe: "7", price: 1500},
      {shoeBrand: "Adidas", colour: "White", qty: "6", sizeShoe: "6", price: 1500},
      {shoeBrand: "Nike", colour: "White", qty: "1", sizeShoe: "5", price: 1500},
      {shoeBrand: "Nike", colour: "Blue", qty: "4", sizeShoe: "6", price: 1500},
      {shoeBrand: "Nike", colour: "Blue", qty: "42", sizeShoe: "5", price: 1500},
      {shoeBrand: "Nike", colour: "Blue", qty: "12", sizeShoe: "5", price: 1500},
      {shoeBrand: "Le coq", colour: "Black", qty: 109, sizeShoe: "5", price: 1500},
      {shoeBrand: 3, colour: "White", qty: "1", sizeShoe: "5", price: 1500},
      {shoeBrand: 'New Balance', colour: "Blue", qty: "7", sizeShoe: "4", price: 1500}]
    );

 
});
});