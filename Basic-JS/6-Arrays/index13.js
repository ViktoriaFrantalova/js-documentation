// Reducing an Array

const numbers = [1, -1, 2, 3];

//A
let sum = 0;
for (let n of numbers) {
  sum += n;
};
// console.log(sum);

//B to iste 
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

const sum1 = numbers.reduce((accumulator, currentValue) => {

  const vysledok = accumulator + currentValue; // aktuálna hodnoty
  // console.log(vysledok);
  return vysledok
}, 0);
console.log(sum1);

//C to iste..
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);


// console.log(sum2); // 5