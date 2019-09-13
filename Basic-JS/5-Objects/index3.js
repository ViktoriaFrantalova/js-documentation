// Dynamic Natur of Objekts/ dynamická povaha obvjektov

const circle = {
  radius: 1
};

// circle = {}; - priradenie kon3tantnej premennej

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;


console.log(circle);