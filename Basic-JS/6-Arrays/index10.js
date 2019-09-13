// Testing the Elements of an Array - Testovanie prvkov poľa

const numbers = [1, -1, 2, 3];

const allpositive = numbers.every(function(value) {
  return value >= 0;
}); // false

const atLeastOnePositive = numbers.some(function(value) {
  return value >= 0;
}); // true

console.log(allpositive);
console.log(atLeastOnePositive);