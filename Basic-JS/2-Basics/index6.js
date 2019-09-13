// performing a task
function greet(name, lastName) {
	console.log('Hello' + name + ' ' + lastName);
}
greet('Jano', 'Smith');

// calculating a value
function square(number) {
	return number * number;
}

// viem zapísať takto ale...
let number = square(2);
console.log(number);

// ... aj takto
console.log(square(2));
