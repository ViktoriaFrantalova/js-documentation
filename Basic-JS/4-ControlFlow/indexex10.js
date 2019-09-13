// cvičenie PrimeNumbers (prvočisla)

showPrimes(20);

// Prime (whose factors are onlz 1 and itself)
// Composite

// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evently by its factors

// 11 = 1, 11
// 13 = 1, 13

function showPrimes(limit) {
	for (let i = 2; i <= limit; i++) {
		let isPrime = true; // musim najprv zadefinovat
		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) console.log(i);
	}
}

// kratsia verzia
function showPrimes(limit) {
	for (let i = 2; i <= limit; i++) if (isPrime(i)) console.log(i);
}

function isPrime(i) {
	for (let j = 2; j < i; j++) {
		if (i % j === 0) {
			return false;
		}
	}
	return true;
}
