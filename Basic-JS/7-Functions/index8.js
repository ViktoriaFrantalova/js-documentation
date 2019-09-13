// Let vs Var

let x = 0;
var y = 0;

function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

// var => function-scoped
// ES6 (ES2015): let, cosnt => block-scoped

start();
