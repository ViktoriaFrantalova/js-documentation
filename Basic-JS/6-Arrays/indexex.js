// exercise1 Array from Range

const numbers = arrayFromRange(-10, -4);

console.log(numbers); // [ -10, -9, -8, -7, -6, -5, -4 ]

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
};
