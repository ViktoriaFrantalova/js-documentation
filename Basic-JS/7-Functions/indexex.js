// Exercise 1 Sum of Arguments

// sum([1, 2, 3, 4]) => 10

Array.isArray();

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

  console.log(items); // [ 1, 2, 3, 4 ]
  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4])); // 10
