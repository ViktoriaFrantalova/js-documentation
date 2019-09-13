// cvičenie na Sum of Multiples 3 and 5

console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
	let sum = 0; // musim zadefinovat premennu

	for (let i = 0; i <= limit; i++)
		if (i % 3 === 0 || i % 5 === 0)
			// podmienka
			sum += i;
	return sum;
}
