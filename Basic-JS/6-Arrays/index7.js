// Iterating an Array - opakovanie pola

const numbers = [1, 2, 3];

for (let number of numbers) {
  console.log(number);
}

// numbers.forEach(function(number){
//   console.log(number);
// });

// to iste ale za pomoci Arrow a pridany index
numbers.forEach((number, index, array) => console.log(index, number, array));