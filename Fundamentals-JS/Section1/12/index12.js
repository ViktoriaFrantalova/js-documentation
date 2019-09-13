// objekty v JS

const person = {
  name: 'janko',
  lastName: 'Papuca',
  age: 25,
  education: false,
  married: true,
  siblings: ['sister', 'brother'],
  greeting: function() {
    console.log('Hello my name is Janko!!!');
  }
};

// prepisanie hodnot v objekte
person.name = 'Peto';
person.lastName = 'Topanka';
person.age = 43;
person.education = [];
person.married = false;
person.siblings = undefined;
person.greeting = function() {
  console.log('Hello my name is Peto!!!');
};

console.log(person.name);
console.log(person['name']);
console.log(person.lastName);
console.log(person['lastName']);
console.log(person.age);
console.log(person['age']);
console.log(person.education);
console.log(person['education']);
console.log(person.married);
console.log(person['married']);

// 2 priklady na volanie
person.greeting(); // Hello my name is Janko!!!
person['greeting'](); // Hello my name is Janko!!!
