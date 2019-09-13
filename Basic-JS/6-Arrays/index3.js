// Removing Elements

const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(last); // 4


// Beginning
const first = numbers.shift();
console.log(first); // 1

// Middle
numbers.splice(2, 2); // začnu sa mazať od druheho poľa teda čislo 4 a vypiše ibe 2 čisla teda vymaže sa číslo 1
console.log(numbers); // vypise sa [ 2, 3 ]