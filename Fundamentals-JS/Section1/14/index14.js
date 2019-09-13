// OR a AND

// vyhodnocujem vstupne hodnoty a porovnavam s databazovymi hodnotami
const vstupEmail = 'janko@gmail.com';
const vstupHeslo = 'nba12345';

const databaseEmail = 'janko@gmail.com';
const databaseHeslo = 'nba12345';

// ak vstupEmail a databaseEmail ma rovnaky typ a hodnotu nasledne ma zaujima aj
// vstupHeslo a databaseHeslo ma rovnaky typ a hodnotu tj.
// 1 && 1 vyhodnoti sa to ako pravda
// 0 && 1 vyhodnoti sa to ako nepravda
// 1 && 0 vyhodnoti sa to ako nepravda
// 0 && 0 vyhodnoti sa to ako nepravda
if (vstupEmail === databaseEmail && vstupHeslo === databaseHeslo) {
  console.log('ahoj pouzivatel janko');
} else if (vstupEmail !== databaseEmail && vstupHeslo === databaseHeslo) {
  console.log('zadal si zly email');
} else if (vstupEmail === databaseEmail && vstupHeslo !== databaseHeslo) {
  console.log('zadal si zle heslo');
} else {
  console.log('uzivatel neexistuje');
}
//--------------------------------------------------------------------------------------

const vykonaj = true;
// ak je vykonaj pravidva hodnota tak sa nasledne vykona vsetko za &&
vykonaj && console.log('ahoj1');
//to iste
if (vykonaj) {
  console.log('ahoj1');
}

// ak je vykonaj nepravidva hodnota tak sa nasledne vykona vsetko za ||
vykonaj || console.log('ahoj2');
// to iste
if (!vykonaj) {
  console.log('ahoj2');
}
