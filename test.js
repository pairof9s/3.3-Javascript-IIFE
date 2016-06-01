// (function(){
//   'use strict';



  //document.body.style.backgroundColor = container;

//   document.body.style.backgroundColor = function(color1, color2, color3) { //function expression, where function is assigned to a variable
//     var newColor = '#' + color1 + color2 + color3;
//
//     return newColor;
//   }('DD', 'DD', 'A1');
//
//   //the variable is given a value to a new variable
//
//    //the new variable then can call the function through the expression variable
//
//
// }());
//
//
// (function() {
//   'use strict';
//
//   //new code
//
//
// }());

// (function(){
//
// var theWinner;
//
// function driveFast(muliplyer){
//   return  muliplyer * 10;
// }
//
// function driveSlow(muliplyer){
//   return  muliplyer * 1;
// }
//
// function winner(){
//   return theWinner;
// }
//
// function playGame(){
//   var players = ['Kirby', 'Andy', 'David'];
//   var playerSpeeds = [];
//
//   for(var i=0; i<players.length; i++){
//     if(i % 2 === 0){
//       playerSpeeds[i] = driveFast(i);
//     }else playerSpeeds[i] = driveSlow(i);
//   }
//
//   theWinner = players[0];
// }
//
// playGame();
//
// console.log(winner());
//
// }());


var addTwo = function(numberToAdd){
  return 2 + numberToAdd;
}
var addThree = function(numberToAdd){
  return 3 + numberToAdd;
}

console.log(addTwo);

function doSomething(doThis, withThis){
  return doThis(withThis);
}

console.log(doSomething(addTwo, 4)+(addThree, 3));

console.log(doSomething(function(numberToAdd){
  return 3 + numberToAdd;
}, 3)
);
