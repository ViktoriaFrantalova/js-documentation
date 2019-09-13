// Emptying an Array 

let numbers = [1, 2, 3, 4];
let another = numbers;

//Solution 1
numbers = [];
console.log(another);
console.log(numbers);

// solution2
let numbers1 = [1, 2, 3, 4];
numbers1.length = 0;

// solution3
let numbers2 = [1, 2, 3, 4];
numbers2.splice(0, numbers2.length);
console.log(numbers2);

// solution4
let numbers3 = [1, 2, 3, 4];
while (numbers3.length >0) {
  numbers3.pop();
  console.log(numbers3);
}
console.log(numbers3);


// najlepšie riešenie je druhe... 