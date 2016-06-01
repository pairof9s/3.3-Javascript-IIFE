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


// var addTwo = function(numberToAdd){
//   return 2 + numberToAdd;
// }
// var addThree = function(numberToAdd){
//   return 3 + numberToAdd;
// }
//
// console.log(addTwo);
//
// function doSomething(doThis, withThis){
//   return doThis(withThis);
// }
//
// console.log(doSomething(addTwo, 3) + (addThree));
//
// console.log(doSomething(function(numberToAdd){
//   return 3 + numberToAdd;
// }, 3)
// );

// For the assignment, Dan provided the following JS code for a possible solution
//
// var callTenTimes = function(callback) {
//   for(var i=1; i<=10; i++){
//     callback();
//   }
// };
// var letter = "x";
//
// setTimeout(function(){
//   letter = "y";
//   console.log("The letter is", letter);
// }, 1);
//
// letter = "z";
// console.log("The letter is", letter);

//var reverseStr = function(str) {str.reverse(); return str;};
// var spanishColor = {"rojo":"#ff0000", "blanco":"#ffffff", "azul":"#0000ff", "verde":"#00ff00", "negro":"#000000"};
//
// for (var prop in spanishColor) {
//   console.log("Spanish color: " + prop + " = " + spanishColor[prop]);
// };
// var foo;
// foo = "bar";
//
// console.log(foo);

// var reverseStr = function(str) {
//   str.reverse;
//   return str;
// };

// var reverseStr = function(str) {
//   var arr;
//   arr = str.split("");
//   arr = arr.reverse();
//   str = arr.join("");
//   return str;
// };

// var reverseStr = function(str){str.split('').reverse().join('')};
//
// console.log(reverseStr('dog'));

var callNtimes = function(callback) {
  var range = _.range('n');
  _.each(range, callback);
};

var n = (5);

console.log(callNtimes(n));
