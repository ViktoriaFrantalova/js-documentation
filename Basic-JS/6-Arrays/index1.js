// Finding Elements (Primitives)

const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(4)); // vypise sa 4
console.log(numbers.indexOf(1)); // vypise sa 0
console.log(numbers.indexOf('a')); // vypise sa -1
console.log(numbers.indexOf('5')); // vypise sa -1
console.log(numbers.indexOf(1, 2)); // vypise sa 3


console.log(numbers.lastIndexOf(1)); // vypise sa 3

console.log(numbers.indexOf(1) !== -1); // vypise sa TRUE
console.log(numbers.includes(1)); // vypise sa TRUE = krajsie a pouzivanejsie

//----------------------------------------------------------------------------

// Finding Elements (Reference Type)
const courses = [
  { id: 1, name: 'a'},
  { id: 2, name: 'b'},
];

// console.log(courses.includes({id: 1, name: 'a'})); // vypise sa false

const najdene = courses.find(function(item) {
  return item.name === 'a';
});

console.log(najdene); // vypise sa { id: 1, name: 'a' }