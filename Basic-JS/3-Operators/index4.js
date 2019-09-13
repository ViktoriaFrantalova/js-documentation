
// logical AND (&&)
let vysokyprijem = true; // high income
let dobrekreditskore=true;
let matnaroknapozicku= vysokyprijem && dobrekreditskore; // eligible for loan

console.log(matnaroknapozicku); // true

// logical OR (||)
// vrati true ak aspon jeden operator je pravdivy
let vysokyprijem = false; // high income
let dobrekreditskore=false;
let matnaroknapozicku= vysokyprijem||dobrekreditskore; // eligible for loan

console.log('Narok', matnaroknapozicku); // false

// NOT (!), lebo je to opozit preto true
let aplikaciaOdmietnutia=!matnaroknapozicku;

console.log('odmietnutie', aplikaciaOdmietnutia); // true

// iny priklad
let mojaFarba='red';
let susedovaFarba='green';
let vyuzitaFarba=mojaFarba||susedovaFarba; 

console.log(vyuzitaFarba); // vypise sa red

// ak nekupim farbu budem malovat od suseda zelenou.. 
let mojaFarba=undefined;
let susedovaFarba='green';
let vyuzitaFarba=mojaFarba||susedovaFarba; 

console.log(vyuzitaFarba); // vypise sa green

