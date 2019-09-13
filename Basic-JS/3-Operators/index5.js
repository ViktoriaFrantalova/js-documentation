
// Bitwise operatory
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011 
// R = 00000000 (R=0)

console.log(1|2); // Bitwise OR  // vypise sa cislo 3
console.log(1&2); // Bitwise AND  // vypise sa cislo 0

// Čítať, písať, uskutočniť
// 4 = 00000100
// 2 = 00000010
// 1 = 00000001

const precitajSuhlas = 4; // permission
const napisSuhlas = 2;
const uskutocniSuhlas = 1;

let mojsuhlas = 0;
mojsuhlas = mojsuhlas | precitajSuhlas | napisSuhlas;
console.log(mojsuhlas); // term. 6

// kratsi yapis if a else
let sprava = (mojsuhlas & precitajSuhlas) ? 'yes': 'no'; // ak moj suhlas je
console.log(sprava); // term. yes, ak odstraním z premennej const precitajSuhlas tak term vypise správu no

