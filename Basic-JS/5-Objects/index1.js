
// Faktory funkcie, vytiahnutie parametrov
function vytvorkruh(radius) {
  return {
    // radius: radius, - to iste ako dole
    radius, 
      kresli() {
      console.log('kresli');
    }
    
    // to iste... 
    //kresli: function() {
      //console.log('kresli'); // vlozena funkcia v objekte
   // }
  };
}

const kruh = vytvorkruh(1);
console.log(kruh);

const kruh2 = vytvorkruh(2);
console.log(kruh2);