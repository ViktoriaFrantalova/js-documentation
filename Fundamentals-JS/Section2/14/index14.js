// Sila iteratorov pre polia

const cislo = [0, 1, 2, 3, 4];
for (let i = 0; i < cislo.length; i++) {
  console.log(cislo[i]);
}

//------------------------------------------

// forEach(callbackfn, index, [])
const ludia = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'traktorista', vek: 64, pozicia: 'boss' }
];

ludia.forEach((clovek, index) => {
  console.log('clovek', clovek, index);
});

// clovek { meno: 'feri', vek: 30, pozicia: 'programator' } 0
// clovek { meno: 'janko', vek: 22, pozicia: 'programator' } 1
// clovek { meno: 'iveta', vek: 25, pozicia: 'programator' } 2
// clovek { meno: 'dusi', vek: 20, pozicia: 'dizajner' } 3
// clovek { meno: 'traktorista', vek: 64, pozicia: 'boss' } 4

//----------------------------------------------

//map(callbackfn, index, [])
const ludia1 = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'traktorista', vek: 64, pozicia: 'boss' }
];

const vekLudi = ludia1.map((clovek, index) => {
  console.log(index);
  return clovek.vek + 10;
});
console.log('vekLudi', vekLudi); // vekLudi [ 40, 32, 35, 30, 74 ]

const menaLudi = ludia1.map(clovek => {
  return clovek.meno;
});
console.log('menaLudi', menaLudi); // menaLudi [ 'feri', 'janko', 'iveta', 'dusi', 'traktorista' ]

const noviLudia = ludia1.map(clovek => {
  return {
    prveMeno: clovek.meno.toUpperCase(),
    novyVek: clovek.vek + 20
  };
});
console.log('noviLudia', noviLudia);

// noviLudia [ { prveMeno: 'FERI', novyVek: 50 },
//   { prveMeno: 'JANKO', novyVek: 42 },
//   { prveMeno: 'IVETA', novyVek: 45 },
//   { prveMeno: 'DUSI', novyVek: 40 },
//   { prveMeno: 'TRAKTORISTA', novyVek: 84 } ]

//--------------------------------------------------------

// filter(callbackfn, index, [])
const ludia2 = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'traktorista', vek: 64, pozicia: 'boss' }
];
// ak sa v poli filtrovana hodnota nenachadza vrati nam prazdne pole
const mladyludia = ludia2.filter(clovek => {
  return clovek.vek <= 30;
});
console.log('mladyludia', mladyludia);

// mladyludia [ { meno: 'feri', vek: 30, pozicia: 'programator' },
//   { meno: 'janko', vek: 22, pozicia: 'programator' },
//   { meno: 'iveta', vek: 25, pozicia: 'programator' },
//   { meno: 'dusi', vek: 20, pozicia: 'dizajner' } ]

const programatori = ludia2.filter(clovek => {
  return clovek.pozicia === 'programator';
});
console.log('programatori', programatori);

// programatori [ { meno: 'feri', vek: 30, pozicia: 'programator' },
//   { meno: 'janko', vek: 22, pozicia: 'programator' },
//   { meno: 'iveta', vek: 25, pozicia: 'programator' } ]

const mladiProgramatori = ludia2.filter(clovek => {
  return clovek.vek <= 25 && clovek.pozicia === 'programator';
});
console.log('mladiProgramatori', mladiProgramatori);

// mladiProgramatori [ { meno: 'janko', vek: 22, pozicia: 'programator' },
//   { meno: 'iveta', vek: 25, pozicia: 'programator' } ]

//-----------------------------------------------------------

// find(predicate, index, [])
const ludia3 = [
  { id: 1, meno: 'feri', vek: 30, pozicia: 'programator' },
  { id: 2, meno: 'janko', vek: 22, pozicia: 'programator' },
  { id: 3, meno: 'iveta', vek: 25, pozicia: 'programator' },
  { id: 4, meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { id: 5, meno: 'traktorista', vek: 64, pozicia: 'boss' }
];
const clovekId = ludia3.find(clovek => {
  return clovek.id === 0;
});
console.log('clovekId', clovekId); // clovekId undefined

//--------------------------------------------------------------

// reduce(callbackfn, currentValue, currentIndex, [])
const ludia4 = [
  { id: 1, meno: 'feri', vek: 30, pozicia: 'programator', plat: 2000 },
  { id: 2, meno: 'janko', vek: 22, pozicia: 'programator', plat: 900 },
  { id: 3, meno: 'iveta', vek: 25, pozicia: 'programator', plat: 1900 },
  { id: 4, meno: 'dusi', vek: 20, pozicia: 'dizajner', plat: 1200 },
  { id: 5, meno: 'traktorista', vek: 64, pozicia: 'boss', plat: 9000 }
];
const scitaniePlatov = ludia4.reduce((acc, curr) => {
  console.log('total', acc);
  console.log('aktualny plat', curr.plat);
  acc += curr.plat;
  return acc;
}, 0);

// total 0
// aktualny plat 2000
// total 2000
// aktualny plat 900
// total 2900
// aktualny plat 1900
// total 4800
// aktualny plat 1200
// total 6000
// aktualny plat 9000

console.log('scitaniePlatov', scitaniePlatov); // scitaniePlatov 15000
