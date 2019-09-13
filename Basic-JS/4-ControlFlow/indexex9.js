// cvicenie Stars - vypíše hviezdy v riadkoch vždy zväčšené o jednu * (vytvorí trojholník)

// *
// **
// ***

showStars(3);

function showStars(rows) {
	for (let row = 1; row <= rows; row++) {
		let pattern = '';
		for (let i = 0; i < row; i++) pattern += '*';
		console.log(pattern);
	}
}
