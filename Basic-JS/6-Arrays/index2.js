// Arrow Function

const courses = [
  { id: 1, name: 'a'},
  { id: 2, name: 'b'},
];

// // dlhy zapis
// const najdene = courses.find(function(item) {
//   return item.name === 'a';
// });

// kratsi zapis
const najdene = courses.find(item => item.name === 'b');

console.log(najdene); // vzpise sa { id: 1, name: 'a' }