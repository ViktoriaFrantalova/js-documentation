// Value vs Reference Types


// vypis x = 20, vypis y = 10 - primitives
let x = 10;
let y = x;

x = 20;

// VS

// vypis x a y bude {value: 20} - reference
let x = { value: 10 }; // moj objekt obs parameter s nazvom value a ma hodnotu 10
let y = x;

x.value = 20; // vyťahovanie parametra s hodnotou/ prepis

// PRIKLADY

// priklad na primitives, lebo vypíše sa číslo 10 a nie 11
let number = 10;

function increase(number) {
  number++;
}

increase(number); 
console.log(number);

// VS

// priklad na reference types, lebo vypíše sa číslo 11
let obj = {value: 10};

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
