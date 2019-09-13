// Cloning an Object 

const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// const another = {};
// another['color'] = 'yellow'
// for (let key in circle) {
//   another[key] = circle[key];
// }

// to iste ale inak...
const another = Object.assign(
  {
    color: 'yellow'
  }, 
  circle
);

// // to iste opat inak, tri ...(spred operator) = vlastnosti metody teda: 
  /*radius: 1,
    draw() {
    console.log('draw');
  }*/
// const another = { ...circle };

console.log(another);