(function(){  //** Key is to contain the var "score" within a function, which by definition cannot have information within it extrapolated.

  var score = 0;

  var increaseScore = function() {
    score++;
    console.log(score);
  }

  var decreaseScore = function() {
    score--;
    console.log(score);
  }

  function run(){
    increaseScore();
  }

  run();  // The "run" operator will then provide the controlled answer to the global scope "outside" the function.

}());
