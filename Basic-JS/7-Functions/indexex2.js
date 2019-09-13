// Exercise 3 Error Handling
try {
  const numbers = [1, 2, 3, 4, 1, 1];
  const count = countOccurrences(numbers, 1);
  console.log(count); // 3 jednotky
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
