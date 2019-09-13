// Hoisting

// Declaration
walk(); // mozem zavolat vopred

function walk() {
  console.log('walk');
}

// Expression
run(); // error,nemozem volat predom

const run = function() {
  console.log('run'); // run run
};
