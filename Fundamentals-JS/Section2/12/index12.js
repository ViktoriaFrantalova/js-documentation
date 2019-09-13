// Global vs Lokal scope

const globalneCislo = 5;

const spocitaj = () => {
  const lokalneCislo1 = 3;
  const lokalneCislo2 = 2;
  console.log(lokalneCislo1); // 3
  console.log(lokalneCislo2); // 2

  const spocitajVysledok = lokalneCislo1 + lokalneCislo2 + globalneCislo;
  const nasob = () => {
    const nasobokVysledok = globalneCislo * spocitajVysledok;

    console.log('nasobokVysledok', nasobokVysledok); // nasobokVysledok 50
  };
  // console.log(nasobokVysledok); // nie je dostypna hodnota lebo je v inom scope

  nasob();
  return spocitajVysledok;
  console.log('toto nebude vypisane lebo mam nad sebou return');
}; // console.log(spocitajVysledok); // nie je dostypna hodnota lebo je v inom scope

console.log(globalneCislo); // 5 // ako prve sa vypíše toto číslo, lebo ....????

console.log('spocitajVysledok', spocitaj()); // spocitajVysledok 10
