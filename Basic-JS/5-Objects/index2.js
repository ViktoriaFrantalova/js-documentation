
// konšt funkcie
function kruh (radius) {
this.radius = radius;
this.draw = function() {
  console.log('draw');
  }
}


// to iste
function vytvorkruh(radius) {
  return {
    radius, // radius: radius - ten isty vyznam
      kresli() {
      console.log('kresli');
    }
  };
}
