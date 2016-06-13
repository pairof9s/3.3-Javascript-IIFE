var speed = 0;

var accelerate = function(amount) {
  if (amount === undefined){
    amount = 1;
  }
  speed += amount;
};
