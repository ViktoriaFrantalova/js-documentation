// className

const prvy = document.getElementById('prvy');
const druhy = document.getElementById('druhy');
const treti = document.getElementById('treti');

const nazovClassy = prvy.className;

console.log(nazovClassy);

druhy.className = 'farba text'; // do selektnuteho elementu druhy prepisem alebo vlozim classu s definovanym nazvom
treti.className = 'farba text'; // do selektnuteho elementu druhy prepisem alebo vlozim classu s definovanym nazvom
//---------------------------------------------------------------------------------

// classList
const prvy = document.getElementById('prvy');
const druhy = document.getElementById('druhy');
const treti = document.getElementById('treti');

const selekttretiElement = treti.classList;

console.log(selekttretiElement); // vrati pole class a length a value
// + metody
selekttretiElement.add('farba');
selekttretiElement.remove('farba');

console.log(selekttretiElement.item(1));

treti.classList.replace('a', 'farba');

let vysledok = treti.classList.contains('farba');
console.log(vysledok);
