// hodnoty a referencie
const number = 1;
let number2 = number;
number2 = 7;

console.log(`prva hodnota je ${number}`); // 1
console.log(`druha hodnota je ${number2}`); // 7

//------------------------------------------------------------------------

const person = { name: 'bob' };
let person2 = person;
person2.name = 'susy';

console.log(`meno s prveho person objektu je ${person.name}`); // 'susy'
console.log(`meno s prveho person objektu je ${person2.name}`); // 'susy'
