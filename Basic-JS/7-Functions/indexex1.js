// exercise 2 are of Circle

// circle.radius = 2;
// console.log(circle.area)

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area); // 3.141592653589793
