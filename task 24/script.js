Hamburger.SIZE_SMALL = [50, 20],
Hamburger.SIZE_BIG = [100, 40],
Hamburger.STUFFING_CHEESE = [10, 20],
Hamburger.STUFFING_SALAD = [20, 5],
Hamburger.STUFFING_POTATO = [15, 10],
Hamburger.TOPPING_SAUCE = [15, 0],
Hamburger.TOPPING_MAYO = [20, 5]


function Hamburger(size, stuffing){
  var topping = [];

  this.addTopping = function(item){  
    topping.push(item);
  };

  this.calcPrice = function(){
    var price = size[0] + stuffing[0];
    return topping.reduce(function(prev, next){    
      return prev + next[0];   
    },price);
  };

  this.calcCalories = function(){
    var calories = size[1] + stuffing[1];
    return topping.reduce(function(prev, next){    
      return prev + next[1];   
    },calories);
  }
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calcCalories());
console.log("Price: " + hamburger.calcPrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Calories with sauce: " + hamburger.calcCalories());
console.log("Price with sauce: " + hamburger.calcPrice());
