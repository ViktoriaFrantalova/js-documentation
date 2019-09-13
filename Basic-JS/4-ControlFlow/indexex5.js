// cvicenie6  CountThruly

const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
	let count = 0;
	// dlhý zapis, správne to je iba // if (value)
	for (let value of array) if (value !== false || value !== undefined) count++;
	return count;
}
