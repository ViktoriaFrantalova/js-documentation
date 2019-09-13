// Exercise4 - Moving an Element - uz sa nepouziva !!!!

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 2); // offset = o kolko sa ma cislo v poli posunut

console.log(output);

function move(array, index, offset) {
  const position = index + offset;

  if (position >= array.length || position < 0) {
    return console.error('Invalid offset.');
  }

  const output = [...array]; // original array
  const element = output.splice(index, 1)[0];

  // const element = output.splice(index, 1)
  // console.log(element);  // [ 2, 3, [ 1 ], 4 ]
  output.splice(index + offset, 0, element);
  return output;
}
