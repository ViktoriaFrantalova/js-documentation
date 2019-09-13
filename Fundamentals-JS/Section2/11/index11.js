// Lokalny scope

// vonkajsi blokovy kod
function pocitaj() {
  // lokalny blokovy kod
  const name = 'susy'; // premenna v local scope
  console.log(name); // susy
  // lokalny blokovy kod
}
pocitaj();
// vonkajsi blokovy kod
// console.log(name); // premenna name nie je dostupna pre vonkajsi blokovy kod
