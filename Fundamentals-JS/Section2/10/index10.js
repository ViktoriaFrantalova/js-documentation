// globalny scope

let name = 'bob';
name = 'peter';

function pocitaj() {
  // tu sa nachadza blok kodu
  console.log(name); //peter
  name = 'orange';

  function inePocitanie() {
    // tu sa nachadza blok kodu
    name = 'this some other value';
    console.log(name); // this some other value
  }
  inePocitanie();
}

pocitaj();

if (true) {
  // tu sa nachadza blok kodu
  console.log(name); // this some other value
  name = 'pants';
}

console.log(`moje meno je ${name} a je super duper`); // moje meno je pants a je super duper
