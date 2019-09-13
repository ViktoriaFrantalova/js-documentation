// Adding Elements

// End
const numbers = [1, 2, 3, 4, 5, 6];
numbers.push('aaaa', 'bbbb');
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 'aaaa', 'bbbb' ]

// Beginning
const numbers2 = [1, 2, 3, 4, 5, 6];
numbers2.unshift('aaaa', 'bbbb');
console.log(numbers2); // [ 'aaaa', 'bbbb', 1, 2, 3, 4, 5, 6 ]

// Middle
const numbers3 = [1, 2, 3, 4, 5, 6];
numbers3.splice(2, 0, 'aaaa', 'bbbb');
console.log(numbers3); // [ 1, 2, 'aaaa', 'bbbb', 3, 4, 5, 6 ]

// Middle
const numbers4 = [1, 2, 3, 4, 5, 6];
numbers4.splice(2, 2, 'aaaa', 'bbbb');
console.log(numbers4); // [ 1, 2, 'aaaa', 'bbbb', 5, 6 ]




