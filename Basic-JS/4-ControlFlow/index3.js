// Break and Continue

// vypíše sa od 0 po 4 a vyskočí
let i = 0;
while (i <= 10) {
	if (i === 5) break;
	console.log(i);
	i++;
}

// vypíše sa iba nepárne čísla
let i = 0;
while (i <= 10) {
	if (i % 2 === 0) {
		i++;
		continue;
	}
	console.log(i);
	i++;
}
