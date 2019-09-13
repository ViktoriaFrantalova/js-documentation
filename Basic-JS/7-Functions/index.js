// Function Declarations vs Expressions

// Declaration
function walk() {
  console.log('walk');
} // nemusia byt ;

// Expression - vyjadrenie
let run = function() {
  console.log('run'); // run run
};
let move = run;
run();
move();
