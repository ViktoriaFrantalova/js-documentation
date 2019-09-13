// The Spread Operator - more flexibility / operator sirenia

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, 'a',...second, 'b']; // [ 1, 2, 3, 'a', 4, 5, 6, 'b' ]

// const copy = combined.slice();
const copy = [...combined]; // [ 1, 2, 3, 'a', 4, 5, 6, 'b' ]


console.log(combined);
console.log(copy);

