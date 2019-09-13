// Constructor property 

// Factory Funtcion - iba krabicka
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

let circle = createCircle(1);
console.log(circle);
circle = createCircle(2);
console.log(circle);
circle = createCircle(4);
console.log(circle);


// Constructor Function - krabicka s nazvom
function Circle(radius) {
  this.radius = radius; // this, ak chcem mat referenciu co chcem vratit
  this.draw = function() {
    console.log('draw');
  }
}

let another = new Circle(1);
console.log(another);
another = new Circle(2);
console.log(another);
another = new Circle(4);
console.log(another);

// to stejny ale v B musim dat referenciu