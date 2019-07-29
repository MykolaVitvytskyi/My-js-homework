var hamburgerComponents = {
  SIZE_SMALL: [50, 20],
  SIZE_BIG: [100, 40],
  STUFFING_CHEESE: [10, 20],
  STUFFING_SALAD: [20, 5],
  STUFFING_POTATO: [15, 10],
  TOPPING_SAUCE: [15, 0],
  TOPPING_MAYO: [20, 5]
};

function Hamburger(size, stuffing){
  var topping = [];

  this.addTopping = function(item){  
    topping.push(item);
  };

  this.calcPrice = function(){
    var toppingResult = 0;
    for (var i = 0; i < topping.length; i++){
      toppingResult += topping[i][0];
    }
    return size[0] + stuffing[0] + toppingResult;
  };

  this.calcCalories = function(){
    var toppingResult = 0;
    for (var i = 0; i < topping.length; i++){
      toppingResult += topping[i][1];
    }
    return size[1] + stuffing[1] + toppingResult;
  };

}

var hamburger = new Hamburger(hamburgerComponents.SIZE_SMALL, hamburgerComponents.STUFFING_CHEESE);
hamburger.addTopping(hamburgerComponents.TOPPING_MAYO);
console.log("Calories: " + hamburger.calcCalories());
console.log("Price: " + hamburger.calcPrice());
hamburger.addTopping(hamburgerComponents.TOPPING_SAUCE);
console.log("Price with sauce: " + hamburger.calcPrice());