// DOM

// getElementById()
const h1 = document.getElementById('title');
h1.style.color = 'red';
console.log(h1); // <h1 id="title" style="color: red;">text</h1>

document.getElementById('btn').style.backgroundColor = 'blue';

const style = document.getElementById('btn').style;
console.log(style);
//-----------------------------------------------------------------

// getElementsByTagName();
const list = document.getElementsByTagName('li');
console.log(list); // vrati pole selektnutych elemntov
console.log(list.length); // pocet prvkov v poli
list[0].style.color = 'red';

const novePole = [...list];
novePole.forEach(element => {
  console.log(element);
});
//-------------------------------------------------------------------

// getElementByClassName()
document.getElementsByClassName('class');
const classSelektnutie = document.getElementsByClassName('daco');
console.log(classSelektnutie);
classSelektnutie[2].style.color = 'green';
//-------------------------------------------------------------------

// querySelector(vsetky_CSS_selektory)
const querySelektJedenPrvyNajdenyElement = document.querySelector('li');
console.log(querySelektJedenPrvyNajdenyElement);
querySelektJedenPrvyNajdenyElement.style.backgroundColor = 'yellow';
//-------------------------------------------------------------------

// querySelectorAll(vsetky_CSS_selektory)
const querySelektVsetkyNajdeneElementy = document.querySelectorAll('li');
console.log(querySelektVsetkyNajdeneElementy);
querySelektVsetkyNajdeneElementy[3].style.backgroundColor = 'orange';
