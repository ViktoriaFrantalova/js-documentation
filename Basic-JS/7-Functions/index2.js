// Arguments

// let x = 1;
// x = 'a';

function sum() {
  // console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } and 3

  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

const vysledok = sum(1, 2, 3, 4, 5, 10);
console.log(vysledok); // 25
