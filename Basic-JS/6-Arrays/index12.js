// Mapping an Array

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >=0);

const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul> ' + items.join('') + ' </ul>';


console.log(filtered); // [ 1, 2, 3 ]
console.log(items); // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
console.log(html); // <ul> <li>1</li><li>2</li><li>3</li> </ul>

//-------------------------------------------------------------------------
// another example

const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >=0);
// const items = filtered.map(n => {
//   const obj = { value: n};
//   return obj;
// });


// kratsi zapis
// const filtered = numbers.filter(n => n >=0);
// const items = filtered.map(n => ({value: n}) );


//najkratsi zapis - spojenie const filtered a items
const items = numbers.filter(n => n >= 0).map(n =>({value: n}));
  
// 2 vyhoda zlucovania 
const items2 = numbers
  .filter(n => n >= 0)
  .map(n =>({value: n}))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);


console.log(items); // [ { value: 1 }, { value: 2 }, { value: 3 } ]
console.log(items2); // [ 2, 3 ]

//---------------------------------------------------------------------------------
// last example

const array = [1, 4, 9, 16];

const map1 = array.map(x => x * 2);

console.log(map1); // [ 2, 8, 18, 32 ]