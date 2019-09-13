// Enumerating Properties of an Object/Vyčíslenie vlastností objektu

const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

for (let key in circle) {
  console.log('-------------');
  console.log(key);
  console.log(circle[key]);
  console.log('-------------');
}

for (let key of Object.keys(circle)) {
  console.log(key);
}

for (let entry of Object.entries(circle)) // Object je definovaný parameter kt. obs. objekt v kt. su metodý ako je napr. entries
  console.log(entry);

if ('radius' in circle) { 
  console.log('yes');
}
