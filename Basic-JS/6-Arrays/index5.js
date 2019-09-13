// Combining and Slicing Arrays - Kombinácia a krájanie polí

const first = [{id: 1}];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log('aaa', combined);
first[0].id = 10;
console.log('bbb', combined);

const slice = combined.slice(1, 2);
console.log(combined);
console.log(slice);

