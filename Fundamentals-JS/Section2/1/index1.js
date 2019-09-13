// vlastnosti stringu v JS

const value1 = 'text';
const value2 = 10;
console.log(value1 + ' ' + value2); // text 10

const value3 = 'text';
console.log(value3.length); // 4 pismena v stringu

// indexOf()
const veta = 'janko peto hrasko iveta jarka neviem uz peto';
console.log(veta.indexOf('peto')); // 6
console.log(veta.indexOf('10')); // -1 - parameter sa nenasiel
console.log(veta.indexOf('peto', 10)); // 40

//lastIndexOf()
const veta1 = 'janko peto hrasko iveta jarka neviem us peto';
console.log(veta1.lastIndexOf('peto')); // 40
console.log(veta1.lastIndexOf('10')); // -1
console.log(veta1.lastIndexOf('peto', 10)); // 6

// toLowerCase/toUpperCase()
const male = 'janko';
console.log(male.toUpperCase()); // JANKO
const velke = 'FERKO';
console.log(velke.toLowerCase()); // ferko

//charAt()
const pismenko = 'Janko';
console.log(pismenko.charAt(0)); // J
console.log(pismenko.charAt(3)); // k

// trim() -  metoda zmaze pred a za stringom prazdny priestor
const inputFormText = ' janko@gmail.com   ';
console.log(inputFormText.trim()); // janko@gmail.com

// startWith() - hlada string na yaciatku vety => CASESENSITIVE, => endWith(), includes()
const obsah = 'Jordan peter Jordan';
console.log(obsah.startsWith('peter')); // false
console.log(obsah.endsWith('Jordan')); // true
console.log(obsah.includes('peter')); // true
const pole = ['peter', 'janko', 'dusi'];
console.log(pole.includes('dusi')); // true

// replace() najde, vymaze a prepise
const premenna = 'text aaa text bbb text aaa';
// prepis neglobalne
console.log(premenna.replace('aaa', 'bbb')); // text bbb text bbb text aaa
// prepis globalne
console.log(premenna.replace(/aaa/g, 'bbb')); // text bbb text bbb text bbb

//slice() a substring(start: *, end?: *)
const text = 'peter janko isiel domov';
console.log(text.slice(6)); // janko isiel domov
console.log(text.substring(6)); // janko isiel domov
console.log(text.slice(6, 11)); // janko
console.log(text.substring(6, 11)); // janko
console.log(text.slice(6, 0)); // vrati NIC kedže slice nie je inteligentný ako substring
console.log(text.substring(6, 0)); // peter

//substr(from: *, lenght: *)
const text1 = 'peter janko isiel domov';
console.log(text1.substr(6)); // janko isiel domov
console.log(text1.substr(6, 11)); // janko isiel

//split()
const text2 = 'ako sa mas ja sa mam';
console.log(text2.split('')); // vrati samostatne pismena yo stringu zoradene do stlpcu
console.log(text2.split(' ', 3)); // [ 'ako', 'sa', 'mas' ]

// concat()
const poleA = ['jablko', 'pomaranc'];
const poleB = ['citron', 'banan'];
const poleC = ['jahoda', 'mandarinka'];

const spojenePole = poleA.concat(poleB, poleC);

console.log(spojenePole); // [ 'jablko', 'pomaranc', 'citron', 'banan', 'jahoda', 'mandarinka' ]
