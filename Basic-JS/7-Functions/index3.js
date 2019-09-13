// The Rest Operator

// function sum(args) { // iba prve cislo
//   console.log(args); // 1
// }
// console.log(sum(1, 2, 3, 4, 5, 10));
// //------------------------------------------------------------
// function sum(...args) { // ... = vyberie vsetky cisla pola
//   console.log(args); // [ 1, 2, 3, 4, 5, 10 ]
// }
// console.log(sum(1, 2, 3, 4, 5, 10));
//------------------------------------------------------------

function sum(discount, ...prices) {
  console.log('discount', discount);
  console.log('prices', ...prices);

  const sucetCisel = prices.reduce((total, actualnaHodnota) => {
    return total + actualnaHodnota;
  });
  return sucetCisel * (1 - discount);
}
console.log(sum(0.1, 20, 30, 1)); // 45.9
