// Try and Catch

const person = {
  firstName: 'Vivien',
  lastName: 'Papaya',
  set fullName(value) {
    //const e = new Error();
    if (typeof value !== 'string') {
      throw new Error('Value is not a string.');
    }

    const parts = value.split(' ');
    if (parts.length !== 2) {
      throw new Error('Enter a first and last name');
    }

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = 'janko hrasko';
} catch (e) {
  console.log(e);
}

console.log(person);
