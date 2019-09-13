// Funkcia do ktorej vložím 2 čisla a vratí mi to iba to väčšie číslo

let number = max(3, 5);
console.log(number);

function max(number1, number2) {
	if (number1 > number2) return number1;
	else return number2;
}

// inak....
function max(number1, number2) {
	return number1 > number2 ? number1 : number2;
}
