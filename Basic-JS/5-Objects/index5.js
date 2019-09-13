// Functionsare Objects

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

// // to iste....
// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function() {
//   console.log('draw');
// }`
// );

// const circle = new Circle1(1);

 // https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_call_call
const a = Circle.call({}, 1);
console.log(a);

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_apply
const b = Circle.apply({}, [1, 2, 3]); // apply(thisArg: any, argArray?: any): any
console.log(b);


const another = new Circle(1);