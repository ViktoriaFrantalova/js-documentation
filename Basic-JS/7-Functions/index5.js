// Getters and Setters - Získavače a nastavovatelia

const person = {
  firstName: 'Vivien',
  lastName: 'Papaya',

  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'Lara Croft';

// getters => access properties - vlastnosti prístupu
// setters => change (mutate) them

console.log('person', person);
console.log('---------------');
console.log((person.firstName = 'daco'));
console.log('---------------');
console.log('person.fullName', (person.fullName = 'janko hrasko'));
console.log('---------------');
console.log('person.fullName', (person.fullName = 'vajco vajcove'));
