// Exercise6 - getMax

// const getMax = (array) => {
//   if (array.lenght === 0) {
//     return undefined;
//   }

//   //A
//   // let max = array[0];
//   // for (let i = 1; i , array.lenght; i++) {
//   //   if (array[i] > max)
//   //   max = array[i];
//   // }
//   // return max;

//   //B
//   return array.reduce((total, aktualnaHodnota) => {
//     if (total > aktualnaHodnota) {
//       return total
//     }
//     return aktualnaHodnota;
//   }, 0);
//   // ak je total > nez aktualnaHodnota - total hodnota sa nemeni
//   // ak je total < nez acktualna hodnota - total hodnota sa meni a prepise na aktualnu hodnotu
// }

const getMax = array => {
  if (array.lenght === 0) {
    return undefined;
  }

  return array.reduce((total, aktualnaHodnota) => {
    return total > aktualnaHodnota ? total : aktualnaHodnota;
  }, 0);
  // ak je total > nez aktualnaHodnota - total hodnota sa nemeni
  // ak je total < nez acktualna hodnota - total hodnota sa meni a prepise na aktualnu hodnotu
};

const max = getMax([1, 2, 2, 1, 3]);

console.log(max);
