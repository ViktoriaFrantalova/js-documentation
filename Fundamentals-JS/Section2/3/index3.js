// vlastnosti a metody v poliach

let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names.length); // 5
console.log(names[4]); // ben
console.log(names[names.length - 1]); // ben

// reverse() - prehodenie poradia prvkov v poli
let name = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(name.reverse()); // [ 'ben', 'olga', 'barry', 'bob', 'john' ]

// shift() - odstranenie 1. prvku y pola
let names1 = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names1); // [ 'john', 'bob', 'barry', 'olga', 'ben' ]
names1.shift();
console.log(names1); // [ 'bob', 'barry', 'olga', 'ben' ]
names1.shift();
console.log(names1); // [ 'barry', 'olga', 'ben' ]
names1.shift();
console.log(names1); // [ 'olga', 'ben' ]
names1.shift();
console.log(names1); // [ 'ben' ]
names1.shift();
console.log(names1); // [ ]

// unshift() - vlkadanie prvkov na zaciatok pola
let names2 = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names2); // [ 'john', 'bob', 'barry', 'olga', 'ben' ]
names2.unshift('jablko');
console.log(names2); // [ 'jablko', john', 'bob', 'barry', 'olga', 'ben' ]
names2.unshift('hruska');
console.log(names2); // [ 'hruska', 'jablko', 'john', 'bob', 'barry', 'olga', 'ben' ]`

// push() - vlkadanie prvkov na konci pola
let names3 = ['john', 'bob', 'barry', 'olga', 'ben'];

names3.push('jablko');
console.log(names3); // [ 'john', 'bob', 'barry', 'olga', 'ben', 'jablko' ]

//splice() - doplnenie/prepisanie prvkov v poli
let names4 = ['john', 'bob', 'barry', 'olga', 'ben'];
names4.splice(2, 0, 'jablko', 'hruska');
console.log(names4); // [ 'john', 'bob', 'jablko', 'hruska', 'barry', 'olga', 'ben' ]

let names5 = ['banan', 'pomaranc', 'jablko', 'mango'];
names5.splice(2, 2, 'citron', 'kiwi');
console.log(names5); // [ 'banan', 'pomaranc', 'citron', 'kiwi' ]

//slice(star: *, end?: *) - odstranenie prvku z pola,
let names6 = ['john', 'bob', 'barry', 'olga', 'ben'];
names6 = names6.slice(1);
console.log(names6); // [ 'bob', 'barry', 'olga', 'ben' ]

let names7 = ['banan', 'pomaranc', 'jablko', 'mango'];
names7 = names7.slice(1, 2);
console.log(names7); // [ 'pomaranc' ]
