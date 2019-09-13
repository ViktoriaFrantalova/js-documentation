// cvičenie3

// delitelný(divisible) 3 => Fizz
// delitelný(divisible) 5 => Buzz
// delitelný oboma (divisible) 3 a 5 => FizzBuzz
// nedelitelný(divisible) 3 ani 5 => input
// ziadne čislo => 'Not a number'
// NaN => 'Not a number'

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
	if (typeof input !== 'number') return NaN;

	if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz'; // musím dať do zátvoriek

	if (input % 3 === 0) return 'Fizz';

	if (input % 5 === 0) return 'Buzz';

	return input;
}
