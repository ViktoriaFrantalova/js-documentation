
// OOP - Object-orientied Programming
// viem vlozit do objektu
let radius = 1;
let x = 1;
let y = 1;

// v objekte
const kruh = {
  radius: 1,
  lokacia: {
    x: 1,
    y: 1
  },
  vyditelnost: true,
  kresli: function() {
    console.log('kresli'); // vlozena funkcia v objekte
  }
};

kruh.kresli(); // metoda (MUSIM ZAVOLAT)