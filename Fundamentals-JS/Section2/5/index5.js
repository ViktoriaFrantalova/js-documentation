// funkcie return, polia a for cyklus

let firstArray = ['1', '2', '3'];
let secondArray = ['4', '5', '6'];

function mergeArray(firstArray, secondArray) {
  for (let i = 0; i < secondArray.length; i++) {
    firstArray.push(secondArray[i]);
  }
  return firstArray;
}
const result = mergeArray(firstArray, secondArray);

console.log(result); // [ '1', '2', '3', '4', '5', '6' ]
