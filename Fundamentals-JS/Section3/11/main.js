// Mouse Events -

const item = document.getElementById('item');
const heading = document.getElementById('heading');

item.addEventListener('click', function() {
  console.log('Klikol som');
});
item.addEventListener('dblclick', function() {
  console.log('dblclick 2x som klikol');
});
item.addEventListener('mousedown', function() {
  console.log('mousedown nastane ked kliknem nad prvkom');
});
item.addEventListener('mouseup', function() {
  console.log('mouseup ked pouzivatel uvolni tlacidlo mysi nad prvkom');
});
item.addEventListener('mouseout', function() {
  console.log('mouseout odisiel som z elementu');
});
item.addEventListener('mouseover', function() {
  console.log(
    'mouseover ked sa kurzor presunie nad prvok alebo na jedno z jeho deti'
  );
});
item.addEventListener('mouseenter', function() {
  console.log('mouseeneter ked sa kurzor presunie na prvok');
});
item.addEventListener('mouseleave', function() {
  console.log('mouseleave ked sa ukazovatel presunie z prvku');
});
item.addEventListener('mousemove', function() {
  console.log('mousemove ked sa kurzor pohybuje nad prvkom');
});
