// cisla a funkcie v JS

const number = 34;
const number2 = 2.456;

let sum = number + number2;
let sub = number - number2;
let mult = number * number2;
let div = number / number2;

console.log(sum); // 36.456
console.log(sub); // 31.544
console.log(mult); // 83.504
console.log(div); // 13.843648208469055

let cislo1 = 0;
++cislo1; // pripocita 1
console.log(cislo1); // 1

let cislo2 = 0;
let cislo3 = 11;
cislo2++; // pripocita 1
console.log(cislo2); // 1
console.log(cislo3 % 2); // 1 lebo dava zvysok po deleni

let cislo4 = 0;
cislo4 += 10; // pripocita k 0 cislo 10 a prepise aktualny stav v parametri cislo4
console.log(cislo4); // 10
