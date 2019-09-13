// Callback funkcia, higher order funkcia

// higher order function
const spocitaj = (pole, cb) => {
  let vysledok = [];
  for (let i = 0; i < pole.length; i++) {
    let vec = cb(pole[i]); // callback
    vysledok.push(vec);
  }
  return vysledok;
};

const plus = cislo => {
  return cislo + 10;
};

const nasob = cislo => {
  return cislo * 10;
};

let hodnota1 = spocitaj([1, 2, 3], plus);
console.log(hodnota1); // [ 11, 12, 13 ]

let hodnota2 = spocitaj([1, 2, 3], nasob);
console.log(hodnota2); // [ 10, 20, 30 ]
