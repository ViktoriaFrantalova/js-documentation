// Sorting Arrays

const numbers = [3, 2, 1];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// ------------------------------------------------------

const courses = [
  { id: 1, name: 'Aaaa'},
  { id: 2, name: 'cccc'},
  { id: 2, name: 'BBBB'},
];

courses.sort(function(a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  return nameA > nameB
});

// jednoduchsi zapis
// courses.sort((a,b) => {
//   return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
// })
// arrow function
// courses.sort((a,b) => a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase())


console.log(courses);
