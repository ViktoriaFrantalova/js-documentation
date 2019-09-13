// Keyboard & Input Events

const input1 = document.getElementById('input1');
input1.addEventListener('keypress', function() {
  console.log(e.target.value); // co napisem do inputu viem to ziskat cez value
  console.log('stlacil som nieco na klavesnici okrem sipiek');
});

const input2 = document.getElementById('input2');
input2.addEventListener('keydown', function() {
  console.log('stlacil som sipku dole');
});

const input3 = document.getElementById('input3');
input3.addEventListener('keyup', function() {
  console.log('stlacil som sipku hore');
});

const input4 = document.getElementById('input4');
input4.addEventListener('focus', function() {
  console.log('vosiel som s mysou do inputu');
});

input4.addEventListener('blur', function() {
  console.log('odisiel som z focusnuteho inputu');
});

input4.addEventListener('cut', function() {
  console.log('ked oznacim text v inpute a stalcim ctrl+x');
});

input4.addEventListener('paste', function() {
  console.log('ked skopirujem text pomocou stalcenim ctrl+v');
});

const input5 = document.getElementById('input5');
input5.addEventListener('input', function() {
  console.log('hocico urobim vramci inputu');
});

const input6 = document.getElementById('input6');
input6.addEventListener('change', function() {
  console.log('ked vlozim jedno pismenko a odkliknem sa z inputu');
});

const div = document.getElementById('animuj');

div.addEventListener('click', function(e) {
  console.log('kontrolujem event klik len nad div a jeho detmi:', e.target);
});
