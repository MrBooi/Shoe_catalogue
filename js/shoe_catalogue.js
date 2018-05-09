        var brandElem = document.querySelector('.shoeBrand');
        var colorElem = document.querySelector('.shoeColor');
        var sizeElem = document.querySelector('.shoeSize');
        var stockQtyElem = document.querySelector('.shoeQty');
        var addStockBtn = document.querySelector('.btnStock');



        function ShoeCatalouge(){

        var shoeBrand ='';
        var shoeColor='';
        var shoeQty  =0;
        var shoeSize =0;

        var storeShoeStock ={};

       function setShoeBrand(value) {
           if (value !='') {
             shoeBrand =value;
             return shoeBrand;
           }
       }
       function setShoeColor(value) {
           if (value !='') {
             shoeColor =value;
             return shoeColor;
           }
           
       }
       function setShoeQty(value) {
           if (value !='') {
             shoeQty =value;
             return shoeQty;
           }
          
       }
      

       function setShoeSize(value){
        if(value!=''){
          shoeSize = value;
           return shoeSize;
        }
            

       }
       
      function addNewStock(brand,Color,Qty ,size){
         
        for (let i = 0; i < storeShoeStock.length; i++) {
           
          
        }


         storeShoeStock[brand]={
              color: Color,
              qty  : Qty,
              size :  size
         }  



        
  return storeShoeStock;
      }


      return{
        stockadd: addNewStock


      }

        }

         var shoe_Catalogue = ShoeCatalouge();

        window.addEventListener('load', function() {
            console.log(shoe_Catalogue.stockadd("Le coq","grey",10,3));
        });    