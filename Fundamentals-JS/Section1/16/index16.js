// WHILE

let value1 = 1;

console.log('cisla su:');
while (value1 <= 10) {
  console.log(`${value1}`);
  value1++;
}

// opacna logika
let value2 = 10;

while (value2 > 0) {
  console.log(`cislo je ${value2}`);
  value2--;
}
//-----------------------------------------------

// DO.. WHILE
let value3 = 1;

do {
  console.log(`cislo je ${value3}`);
  value3++;
} while (value3 <= 10);

// opacna logika
let value4 = 10;

do {
  console.log(`cislo je ${value4}`);
  value4--;
} while (value4 > 0);
//-------------------------------------------------------

// FOR

let value = 99; // tato hodnota je definovana mimo scopu cyklu for preto vonku value ma vzdy 99

for (let value = 0; value < 10; value++) {
  // toto je vnutorny scope cyklu for ktori nevidi ze value je 99
  console.log(`cislo je ${value}`);
}

console.log(value); // 99

// opacna logika
for (let value = 10; value > 0; value--) {
  console.log(`cislo je ${value}`);
}

console.log(value); // 99
