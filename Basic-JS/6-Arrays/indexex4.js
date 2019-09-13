// Exercise5 - Count Occurrences - Počet výskytov

const numbers = [1, 2, 3, 4, 1, 1];

const count = countOccurrences(numbers, 1);

console.log(count); // 3 jednotky

function countOccurrences(array, searchElement) {
  // //A
  // let count = 0;
  // for (let element of array) {
  //   if (element === searchElement)
  //     count++;
  // }
  // return count;

  //B
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
