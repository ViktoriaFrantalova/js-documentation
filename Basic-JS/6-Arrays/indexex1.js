// Exercise2 - Includes

const numbers = [1, 2, 3, 4];

// Obsahuje pole numbers elemnet 1/-1???
console.log(numbers.includes(1)); // true
console.log(numbers.includes(-1)); // false


function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement)
    return true; 
  }
  return false;
};

console.log(includes(numbers, 1)); // to iste ale s vyuziti funkcie // true