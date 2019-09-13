// LOOPS - cykli

// FOR - vypíše čisla 1,3,5
for (let i = 1; i <= 5; i++) {
	if (i % 2 !== 0) console.log(i); // ak zbytok po deleni 2 sa nerovna 0 tak sa vypise i
}

// FOR - vypíše čisla 5,3,1
for (let i = 5; i >= 1; i--) {
	if (i % 2 !== 0) console.log(i);
}

// WHILE - vypíše čisla 1,3,5
let i = 0;
while (i <= 5) {
	if (i % 2 !== 0) console.log(i);
	i++;
}

// DO...WHILE
let i = 0;
do {
	if (i % 2 !== 0) console.log(i);
	i++;
} while (i <= 5);

// FOR..IN
const person = {
	name: 'Vika',
	age: 20
};

// vypíše do term. name Vika, age 20
for (let key in person) console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

// vypíše do term. 0 red, 1 green, 2 blue
for (let index in colors) console.log(index, colors[index]);

// FOR-OF - vypíše sa red, green, blue
for (let color of colors) console.log(color);
