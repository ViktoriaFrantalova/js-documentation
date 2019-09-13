# JS dokumentácia

## 1. Inline js

`onclick` je atribut pomocou ktoreho som nadefinovala inlinovy javascript, kde prevolam metodu alert v ktorej nadefinujem vstupny string ktori sa zobrazi v popupe
priklad:

```html
<button onclick="alert('ahoj spustil som inlinovy javascript')">Click</button>
```

## 2. Interny js

Pridali sme atribut ID s hodnotou "btn" pre element button, vytvorili sme interny javascript pomocou html tagu "script",vo vnutri sme selectli element button pomocou DOMu, kde sme vytiahli pomocou metody "getElementById" element s ID "btn". Nasledne sme definovali metodu, ktora kontroluje eventy nad selectnutym elementom.Definovali sme v tejto metode kontrolu nad eventom "click", kde po kliknuti ma nastatmetoda "alert", ktora vykresli vstupny string.
priklad:

```HTML
<button id="btn">Click</button>
<script>
    document.getElementById("btn").addEventListener("click", function () {
        alert('ahoj spustil som interny javascript')
    })
</script>
```

## 3. Externy js

Pridali sme atribut ID s hodnotou "btn" pre element button, nasledne sme vytvorili externy javascript v subore main.js a nalinkovali pod element ktory budeme vyuzivat v javascripte

```html
<button id="btn">Click</button>
<script src="./main.js"></script>
```

## 4. Externy js definovany v `<head>` elemente

priklad:

```html
<head>
  <script src="./main.js"></script>
</head>
<body>
  <button id="btn">Click</button>
</body>
```

Musime vramci nacitania javascriptu pouzit metodu, ktora zabezpeci, ze javascript je nacitany az po nacitani HTML.

```js
window.onload = function() {
  document.getElementById('btn').addEventListener('click', function() {
    alert('ahoj spustil som externy nacitany z onload javascript');
  });
};
```

## 5. Testovanie javascriptu

Tymito sposobmi mozeme zistit obsah hodnot alebo nefunkcnost zdrojoveho kodu

```js
document.write('vlozeny text pomocou javascriptu');
alert('vlozeny text pomocou javascriptu');
console.log('vlozeny text pomocou javascriptu v terminali');
console.error('vlozeny text pomocou javascriptu v terminali');
// -----
document.write(10 + 10);
alert(20);
console.log(20);
```

## 6. Komentovanie v javascripte

Tymito sposobmi mozeme komentovat kod: // alebo /* */

```js
console.log('Hi everybody'); // vypise sa string

/*console.log('Hi');
console.log('Hi Jan');
console.log('Hi man');
console.log('Hello');*/
```


## 7. Premenne javascriptu

v javascripte vieme nadefinovat premenne pomocou `var`, do ktorych vieme docasne ulozit hodnotu. Je to starsi zapis javascriptu. Aktualne sa pouziva `let` a `const`, kde `let` definuje prepisovatelnu premennu a `const` definuje neprepisovatelnu premennu.

```js
let nazov1 = 'hodnota premennej je tento string';
console.log(nazov1); // vystup je hodnota premennej je tento string
nazov1 = 1;
console.log(nazov1); // vystup je 1

const nazov2 = 'hodnota premennej je tento string';
console.log(nazov2); // vystup je hodnota premennej je tento string
console.log(nazov2); // vystup je hodnota premennej je tento string

let address, zip, state;
address = 'Kosice';
zip = '04001';
state = 'Sk';
console.log(address, zip, state); // vystup je Kosice 04001 Sk
```

## 8. Pomenovanie premennych v javascripte

Pri definovani nazvu premennej sa pouziva zapis `camelCase`. Pri definovani nazvu zaciatok nesmie obsahovat číslo (`1name`), premenná nesmie byť pomenovaná nasledovnými slovami:

- `break, continue, debugger, do, while, for, function, if, else, return, switch, try, catch, const, let, var, ...spred`, rozlišuje aj veľkosť písmena.

```js
let fullName = 'Janko Hrasko';
console.log(fullName);
```

## 9. Spajanie stringov v javascripte

String v JS môžme zapisovať takto:

```js
let fullNameViacejRiadkov = `aaa
                             bbb`;
let fullName1 = `I'm Janko Hrasko`;
let fullName2 = "I'm Janko Hrasko";
let fullName3 = "I'm Janko Hrasko";
let fullName4 = 'I"m Janko Hrasko';
let fullName5 = 'I' + "'" + 'm Janko Hrasko';
const nieco = "'";
let fullName6 = `I${nieco}m Janko Hrasko`;
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
console.log(fullName6);
```

## 10. Čísla a funkcie v javascripte

V JS môžme používať všetky matematické úkony (+,-,/,_,...)<br>
specialne ciselne operatory: `+=`, `-=`, `/=`, `_=`,`++`,`--`,`%`

```js
const number = 34;
const number2 = 2.456;

let sum = number + number2;
let sub = number - number2;
let mult = number * number2;
let div = number / number2;

console.log(sum);
console.log(sub);
console.log(mult);
console.log(div);

let cislo1 = 0;
++cislo1; // pripocita 1
console.log(cislo1); // 1

let cislo2 = 0;
let cislo3 = 11;
cislo2++; // pripocita 1
console.log(cislo2); // 1
console.log(cislo3 % 2); // 1 lebo dava zvysok po deleni


let cislo4 = 0;
cislo4 += 10; // pripocita k 0 cislo 10 a prepise aktualny stav v parametri cislo4
console.log(cislo4); // 10
```

## 11. Datove typy v javascripte

Operator na zistenie datoveho typu je `typeof`

- String

```js
let text = 'nejaky text';
```

- Number

```js
let value = 50;
```

- Boolean

```js
let value1 = true;
let value2 = false;
```

- Null

```js
let result = null;
```

- Undefined

```js
let name;
```

- Object

```js
let array = ['Janko'];
let log = function(a) {
  console.log(a);
};
let object = { name: 'Janko' };
```

## 12. Polia v javascripte

Pole slúži na ukladanie viacerých hodnôť do jednej premennej.

```js
const priatelov = ['janko', 'ferko', 'dusi', 'pavol', 45, undefined];
```

Z pola vieme vyťahovať hodnoty napr prvu hodnotu z pola:

```js
console.log(priatelov[0]);
```

Prepisovanie hodnoty v poly:

```js
priatelov[0] = 'peto';
console.log(priatelov); // [ 'peto', 'ferko', 'dusi', 'pavol', 45, undefined ]
```

Pole začína vždy od 0. vramci pola sa da jendoducho zistit počet hodnôt v poli pomocou `length`

```js
console.log(priatelov.length); // 6
```

## 13. funkcie v javascripte

Funkciu deklarujeme takto

```js
function ahoj() {
  console.log('ahoj');
}
```

Funkciu ak chceme aby sa vykonala musime ju zavolat napr. takto:

```js
ahoj();
```

Vo vnutri funkcii vieme definovat priradenie hodnot a nasledne pomocou `return` vratit vysledok:

```js
function add(num1, num2) {
  let result = num1 + num2;
  return result;
}

const first = add(10, 5);
console.log(first); // 15

const second = add(100, 20);
console.log(second); // 120

const third = add(200, 23);
console.log(third); // 223
```

Funkcie vieme definovat aj s anonymnou funkciou takto:

```js
const add = function(num1, num2) {
  let result = num1 + num2;
  return result;
};
```

## 14. Objekty v javascripte

Objekt umoznuje definovat viacero hodnôt s nazvami parametrov do jedneho parametra

```js
const person = {
  name: 'janko',
  lastName: 'Papuca',
  age: 25,
  education: false,
  married: true,
  siblings: ['sister', 'brother'],
  greeting: function() {
    console.log('Hello my name is Janko!!!');
  }
};
```

ak chceme vytiahnut hodnotu z objektu môžeme to vykonať dvoma spôsobmi a to cez `.` alebo cez `[nazov_parametra]`.

```js
console.log(person.name);
console.log(person['name']);
console.log(person.lastName);
console.log(person['lastName']);
console.log(person.age);
console.log(person['age']);
console.log(person.education);
console.log(person['education']);
console.log(person.married);
console.log(person['married']);
```

ak je v objekte definované pole vieme vytiahnut prvky z pola takto:

```js
console.log(person.siblings[0]);
console.log(person['siblings'][1]);
```

ak je v objekte definovana funkcia vieme ju zavolat napr. takto:

```js
person.greeting();
person['greeting']();
```

ak chcem prepisat hodnotu v objekte vieme to spravit takto:

```js
person.name = 'Peto';
person.lastName = 'Topanka';
person.age = 43;
person.education = [];
person.married = false;
person.siblings = undefined;
person.greeting = function() {
  console.log('Hello my name is Peto!!!');
};
```

## 15. Podmienkova logika if a else v javascripte

V js mame tieto rozhodovacie operatory:

- `>, <, >=, <=`
- `==, ===, !=, !==`
  ak porovnavam dve hodnoty pomocou `===` porovnavam aj typ aj hodnotu
  ak porovnavam dve hodnoty pomocou `==` porovnavam iba hodnotu
  ak porovnavam dve hodnoty pomocou `!==` porovnavam aj typ aj hodnotu ale zaujima ma nerovnost medzi hodnotami
  ak porovnavam dve hodnoty pomocou `!=` porovnavam iba hodnotu ale zaujima ma nerovnost medzi hodnotami

```js
let num1 = 4;
let num2 = 6;

if (num1 > num2) {
  console.log('prve cislo je vacsie ako druhe');
}

if (num1 < num2) {
  console.log('prve cislo je mensie ako druhe');
}
```

ak mam dve po sebe nadefinovane `if` a porovnavaju rovnake hodnoty môžem to prepisať takto:

```js
if (num1 > num2) {
  console.log('prve cislo je vacsie ako druhe');
} else {
  console.log('prve cislo je mensie ako druhe');
}

num1 = 0;
num2 = 0;

if (num1 > num2) {
  console.log('prve cislo je vacsie ako druhe');
} else if (num1 < num2) {
  console.log('prve cislo je mensie ako druhe');
} else if (num1 === num2) {
  console.log('prve cislo je rovnake ako druhe');
} else {
  console.log('niekde mas chybu');
}
```

ak chcem vytvorit opacnu logiku tj. znegovat logiku mozem pouzit `!` na znakovanie hodnoty

```js
let value = false;
if (!value) {
  console.log('hodnota je true');
}
```

## 16. Logicke operatory `AND` a `OR` v javascripte

V JS mame tieto logicke operatory:

- AND `&&`
- OR `||`

```js
// vyhodnocujem vstupne hodnoty a porovnavam s databazovymi hodnotami
const vstupEmail = 'janko@gmail.com';
const vstupHeslo = 'nba12345';

const databaseEmail = 'janko@gmail.com';
const databaseHeslo = 'nba12345';

// ak vstupEmail a databaseEmail ma rovnaky typ a hodnotu nasledne ma zaujima aj
// vstupHeslo a databaseHeslo ma rovnaky typ a hodnotu tj.
// 1 && 1 vyhodnoti sa to ako pravda
// 0 && 1 vyhodnoti sa to ako nepravda
// 1 && 0 vyhodnoti sa to ako nepravda
// 0 && 0 vyhodnoti sa to ako nepravda
if (vstupEmail === databaseEmail && vstupHeslo === databaseHeslo) {
  console.log('ahoj pouzivatel janko');
} else if (vstupEmail !== databaseEmail && vstupHeslo === databaseHeslo) {
  console.log('zadal si zly email');
} else if (vstupEmail === databaseEmail && vstupHeslo !== databaseHeslo) {
  console.log('zadal si zle heslo');
} else {
  console.log('uzivatel neexistuje');
}
```

vramci JS vieme vyhodnocovat a spustat kod takymto zapisom

```js
const vykonaj = true;
// ak je vykonaj pravidva hodnota tak sa nasledne vykona vsetko za &&
vykonaj && console.log('ahoj1');
//to iste
if (vykonaj) {
  console.log('ahoj1');
}

// ak je vykonaj nepravidva hodnota tak sa nasledne vykona vsetko za ||
vykonaj || console.log('ahoj2');
// to iste
if (!vykonaj) {
  console.log('ahoj2');
}
```

## 17. Metoda `Switch()` v javascripte

`switch()` metoda sluzi na jednoduche vyhodnocovanie viacerých podmienok.

`switch()` metoda ocakva vstupnu hodnotu ktora sa bude porovnavat s každou `case` hodnotou, ak sa hodnota rovna vstupnej hodnote vo `switch()` metode vykona sa skript ktory je definovaný za `:` a nasledne pomocou `break` sa dany skript ukončí. Na konci sa vždy definuje `default:` ktorí by mal definovať to, že čo má udiať ak ani jedna hodnota z `case` nie je rovná vstupnej hodnote zo `switch()`

prerobenie 'if a else' na `switch`

```js
const value = 1;

if (value === 1) {
  console.log('hodil si cislo 1');
} else if (value === 2) {
  console.log('hodil si cislo 2');
} else if (value === 3) {
  console.log('hodil si cislo 3');
} else if (value === 4) {
  console.log('hodil si cislo 4');
} else if (value === 5) {
  console.log('hodil si cislo 5');
} else {
  console.log('hodil si cislo 6');
}

switch (value) {
  case 1:
    console.log('hodil si cislo 1');
    break;
  case 2:
    console.log('hodil si cislo 2');
    break;
  case 3:
    console.log('hodil si cislo 3');
    break;
  case 4:
    console.log('hodil si cislo 4');
    break;
  case 5:
    console.log('hodil si cislo 5');
    break;
  default:
    console.log('hodil si cislo 6');
}
```

## 18. `while` cyklus v javascripte

Cyklus `while` ma vo vnútri definovaný skript, ktorí bude vykonaný iba vtedy ak vnutorna definovana logika t.j. `(value <= 10)` pravdivá, ak prestane byť pravdivá následne cyklus skončí.

```js
let value1 = 1;

while (value1 <= 10) {
  console.log(`cislo je ${value1}`);
  value1++;
}

// opacna logika
let value2 = 10;

while (value2 > 0) {
  console.log(`cislo je ${value2}`);
  value2--;
}
```

## 19. `do while` cyklus v javascripte

Cyklus `do while` funguje skoro rovnako ako while, len to ze na zaciatku spusteneho skriptu prva vstupna hodnota sa neporovnava s ocakavanym vstupom a bez porovnania sa dany skript vykona 1 krat.

priklad:

```js
let value1 = 1;

do {
  console.log(`cislo je ${value1}`);
  value1++;
} while (value1 <= 10);

// opacna logika
let value2 = 10;

do {
  console.log(`cislo je ${value2}`);
  value2--;
} while (value2 > 0);
```

## 20. `for` cyklus v javascripte

Cyklus `for` definujeme začiatočný stav `;` nasledne definujem logiku koľko krat sa ma vykonať definovaný skript vo vnútri cyklu `;` a posledne definujem pripočitavanie alebo dopočitavanie začiatočného stavu.

príklad:

```js
let value = 99; // tato hodnota je definovana mimo scopu cyklu for preto vonku value ma vzdy 99

for (let value = 0; value < 10; value++) {
  // toto je vnutorny scope cyklu for ktori nevidi ze value je 99
  console.log(`cislo je ${value}`);
}

console.log(value); // 99

// opacna logika
for (let value = 10; value > 0; value--) {
  console.log(`cislo je ${value}`);
}

console.log(value); // 99
```

## 21. `string properties` v javascripte

Stringove vlastnosti su:

- ak ku stringu pripocitam inu hodnotu vysledne scitanie je string js.

```js
const value1 = 'text';
const value2 = 10;
console.log(value1 + value2);
```

- pomocou `length` vieme zistit kolko pismenok obsahuje stringova premenna

```js
const value1 = 'text';
console.log(value1.length);
```

- `indexOf()` najde v definovanej hodnote `veta` hladany string a urci jeho poziciu a pocita aj medzeri a zacina z lava do prava, ak sa pozadovany string nenasiel vrati hodnotu `-1`, viem definovat ako druhy parameter startovaciu poziciu hladanie stringu

```js
const veta = 'janko peto hrasko iveta jarka neviem us peto';
console.log(veta.indexOf('peto')); // 6
console.log(veta.indexOf('10')); // -1
console.log(veta.indexOf('peto', 10)); // 40
```

- `lastIndexOf()` najde v definovanej hodnote posledny hladany string a urci jeho poziciu a pocita aj medzeri a zacina z prava do lava, ak sa pozadovany string nenasiel vrati hodnotu `-1`, viem definovat ako druhy parameter startovaciu poziciu hladanie stringu

```js
const veta = 'janko peto hrasko iveta jarka neviem us peto';
console.log(veta.lastIndexOf('peto')); // 40
console.log(veta.lastIndexOf('10')); // -1
console.log(veta.lastIndexOf('peto', 15)); // 6
```

- `toLowerCase()` meni string v hodnote na male pismena vs `toUpperCase()` meni string v hodnote na velke pismena.

```js
const male = 'janko';
console.log(male.toUpperCase()); // JANKO
const velke = 'FERKO';
console.log(velke.toLowerCase()); // ferko
```

- `charAt()` pomocou tejto metody viem z definovaneho stringu vytiahnut jedno pismenko na zaklade poradia, vzdy zacinam od 0.

```js
const pismenko = 'Janko';
console.log(pismenko.charAt(0)); // J
```

- `trim()` metoda zmaze pred a za stringom prazdny priestor

```js
const inputFormText = ' janko@gmail.com   ';
console.log(inputFormText.trim()); // janko@gmail.com
```

- `startsWith()` sluzi na hladanie stringu od zaciatku vety berie do uvahy aj velkost pismen vs `endWith()` sluzi na hladanie stringu od konca vety berie do uvahy aj velkost pismen vs `includes()` sluzi na hladanie stringu vramci celej vety berie do uvahy aj velkost pismen, includes sa da pouzit aj pre hladanie slova v poly.

```js
const obsah = 'Jordan peter Jordan';
console.log(obsah.startsWith('peter')); // false
console.log(obsah.endsWith('Jordan')); // true
console.log(obsah.includes('peter')); // true
const pole = ['peter', 'janko', 'dusi'];
console.log(pole.includes('dusi')); // true
```

- `replace()` pomocou tejto metody viem prepisat pozadovany string na iny pozadovany string aj globalne aj neglobalne.

```js
const premenna = 'text aaa text bbb text aaa';
// prepis neglobalne
console.log(premenna.replace('aaa', 'bbb')); // text bbb text bbb text aaa
// prepis globalne
console.log(premenna.replace(/aaa/g, 'bbb')); // text bbb text bbb text bbb
```

- `slice()` a `substring()` pomocou týchto metod viem vystrihnut pozadovany string na zaklade ciselnych suradnic pozicie pismenok. `substring()` metoda je inteligentnejšia ak druha vstupna hodnota je menšia ako prva tak sa berie druha vstupna hodnota ako prva

```js
const text = 'peter janko isiel domov';
console.log(text.slice(6)); // janko isiel domov
console.log(text.substring(6)); // janko isiel domov
console.log(text.slice(6, 11)); // janko
console.log(text.substring(6, 11)); // janko
console.log(text.slice(6, 0)); // vrati nič kedže slice nie je inteligentný ako substring
console.log(text.substring(6, 0)); // peter
```

- `substr()` pomocou tejto metody viem vystrinut pozadovany string kde prvy vstupny parameter je cislo, ktore definuje zaciatok vystrihovania a druha vstupna hodnota je cislo ktore definuje dlzku vytahovaneho stringu od zaciatocku vystrihovania

```js
const text = 'peter janko isiel domov';
console.log(text.substr(6)); // janko isiel domov
console.log(text.substr(6, 11)); // janko isiel
```

- `split()` pomocou tejto metody viem rozdeľovať string poľa definovaného znaku v metode. Ako druhý parameter viem definovať počet, ktorí definuje koľko krát sa má daný string rozdeliť podľa znaku.

```js
const text2 = 'ako sa mas ja sa mam';
console.log(text2.split('')); // vrati samostatne pismena yo stringu zoradene do stlpcu
console.log(text2.split(' ', 3)); // [ 'ako', 'sa', 'mas' ]
```

- `concat` pomocou tejto metody viem spájať polia do jedného poľa.

```js
const poleA = ['jablko', 'pomaranc'];
const poleB = ['citron', 'banan'];
const poleC = ['jahoda', 'mandarinka'];

const spojenePole = poleA.concat(poleB, poleC);

console.log(spojenePole); // [ 'jablko', 'pomaranc', 'citron', 'banan', 'jahoda', 'mandarinka' ]
```

## 22. Stringovy literal

V ramci ES6+ sa definoval literal vdaka ktoremu vieme zapisovat string `'vysledok:' + 10` aj pomocou literalu takto `vysledok ${10}`

priklad:

```js
const name = 'Janko';
const age = 25;
const sentence = 'ahoj to som ja ' + name + ' a ja mam ' + age + ' rokov';
console.log(sentence);

const sentenceLit = `ahoj to som ja ${name} a ja mam ${age} rokov`;
console.log(sentenceLit);

// vstupna hodnota môže byť aj funkcia
const vykonaj = () => {
  return 10;
};
const text = `cislo je ${vykonaj()}`;
console.log(text); // cislo je 10
```

## 23. Vlastnosti a metody v poliach

Pole ma vzdy definovany počet prvkov v poli a to viem vytiahnut pomocou `length`

```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names.length); // 5
console.log(names[4]); // ben
console.log(names[names.length - 1]); // ben
```

Metody:
`conncat()`, `reverse()`, `shift()`, `pop()`, `unshift()`, `push()`, `splice()`, `slice()`

- `concat()` sluzi na spajanie poli do jedneho poľa
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

const lastNames = ['banan', 'cesnak', 'chilli'];
const allNames = names.concat(lastNames);
console.log(allNames); // [ 'john', 'bob', 'barry', 'olga', 'ben', 'banan', 'cesnak', 'chilli' ]
```

- `reverse()` slúži na prehodenie poradia prvkov v poli
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names.reverse()); // [ 'ben', 'olga', 'barry', 'bob', 'john' ]
```

- `shift()` služí na odstranenie prveho prvku z pola 
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names); // [ 'john', 'bob', 'barry', 'olga', 'ben' ]
names.shift();
console.log(names); // [ 'bob', 'barry', 'olga', 'ben' ]
names.shift();
console.log(names); // [ 'barry', 'olga', 'ben' ]
names.shift();
console.log(names); // [ 'olga', 'ben' ]
names.shift();
console.log(names); // [ 'ben' ]
names.shift();
console.log(names); // [ ]
```

- `pop()` slúži na odstranenie posledného prvku z pola
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names); // [ 'john', 'bob', 'barry', 'olga', 'ben' ]
names.pop();
console.log(names); // [ 'john', 'bob', 'barry', 'olga' ]
names.pop();
console.log(names); // [ 'john', 'bob', 'barry' ]
names.pop();
console.log(names); // [ 'john', 'bob' ]
names.pop();
console.log(names); // [ 'john' ]
names.pop();
console.log(names); // [ ]
```

- `unshift()` služí na vkladanie prvku do pola ktore bude vlozene vzdy na zaciatok pola
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names); // [ 'john', 'bob', 'barry', 'olga', 'ben' ]
names.unshift('jablko');
console.log(names); // [ 'jablko', john', 'bob', 'barry', 'olga', 'ben' ]
names.unshift('hruska');
console.log(names); // [ 'hruska', 'jablko', 'john', 'bob', 'barry', 'olga', 'ben' ]`
```

- `push()` služi na vkladanie prvku do pola ktore bude vložene vždy na konci pola
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

names.push('jablko');
console.log(names); // [ 'john', 'bob', 'barry', 'olga', 'ben', 'jablko' ]
```

- `splice()` služi na doplnenie alebo prepisanie prvkov v poli
```js
let names1 = ['john', 'bob', 'barry', 'olga', 'ben'];
names1.splice(2, 0, 'jablko', 'hruska');
console.log(names1); // [ 'john', 'bob', 'jablko', 'hruska', 'barry', 'olga', 'ben' ]

let names2 = ['banan', 'pomaranc', 'jablko', 'mango'];
names2.splice(2, 2, 'citron', 'kiwi');
console.log(names2); // [ 'banan', 'pomaranc', 'citron', 'kiwi' ]
```

- `slice()` sluzi na odstranie prvkov z pola, pri tejto metode musim ulozit stav novej zmeny
```js
let names1 = ['john', 'bob', 'barry', 'olga', 'ben'];
names1 = names1.slice(1);
console.log(names1); // [ 'bob', 'barry', 'olga', 'ben' ]

let names2 = ['banan', 'pomaranc', 'jablko', 'mango'];
names2 = names2.slice(1, 2);
console.log(names2); // [ 'pomaranc' ]
```

## 24. Polia a `for` cyklus 

Pomocou `for` cyklu viem jednoducho vytiahnut vsetky prvky z pola:

```js
let names = ['anna', 'vierka', 'bob'];

for (let i = 0; i < names.length; i++) {
  console.log(`pozicia prvku v poli je: ${i}, prvok z pola: ${names[i]}`);
}

// pozicia prvku v poli je: 0, prvok z pola: anna
// pozicia prvku v poli je: 1, prvok z pola: vierka
// pozicia prvku v poli je: 2, prvok z pola: bob
```

## 25.  Funkcie `return`, polia a `for` cyklus
  
```js
let firstArray = ['1', '2', '3'];
let secondArray = ['4', '5', '6'];

function mergeArray(firstArray, secondArray) {
  for (let i = 0; i < secondArray.length; i++) {
    firstArray.push(secondArray[i]);
  }
  return firstArray;
}
const result = mergeArray(firstArray, secondArray);

console.log(result); // [ '1', '2', '3', '4', '5', '6' ]
```

## 26. Hodnoty a referencie

Pri definovani objektu `{ name: 'bob' }` ktory bol zrecyklovany a nasledne recyklovana hodnota v objekte bola prepisana na novu hodnotu t.j. `susy`, existuje referencia, ktora sa prejavi aj v definovanom objekte z ktoreho sme recyklovali.

```js
const number = 1;
let number2 = number;
number2 = 7;

console.log(`prva hodnota je ${number}`); // 1
console.log(`druha hodnota je ${number2}`); // 7
//----------------------------------------------
const person = { name: 'bob' };
let person2 = person;
person2.name = 'susy';

console.log(`meno s prveho person objektu je ${person.name}`); // 'susy'
console.log(`meno s prveho person objektu je ${person2.name}`); // 'susy'
```

## 27. `Null` vs `undefined`

```js
let number = 20 + null;
console.log(number); // 20

let number2 = 20 + undefined;
console.log(number2); // NaN
```

## 28. Pravdive a nepravdive výroky

- pravdive: `"", '', ``, 1, -1, true`
- nepravdive: `0,-0,NaN, false, null, undefined, !true (negaciou viem spravit nepravdivy vyrok z pravdiveho)`

```js
const bool1 = false;
console.log(typeof bool1); // boolean
const result = 2 < 5;
console.log(typeof result); // boolean

if (result) {
  console.log('vyrok je pravdivy');
} else {
  console.log('vyrok je nepravdive');
}

const text = 'nejaky text';
if (text) {
  console.log('vyrok je pravdivy');
} else {
  console.log('vyrok je nepravdive');
}

const ocakvanaHodnota = 'nejaky text';
ocakvanaHodnota && console.log(ocakvanaHodnota);  // nejaky text

```

## 29. Ternárne operátory

- unarny operator typeof
```js
let text = 'some text';
console.log(typeof text);
```

- binarny operator
```js
let number = 3;
let number2 = 2 + 5;
```

- ternarny opertor `condition ? (run if true) : (run if false)`
```js
let condition = 2 > 5;
if (condition) {
  console.log('pravda');
} else {
  console.log('nepravda');
}
condition ? console.log('pravda') : console.log('nepravda');
```

## 30. Globalny scope

Premenne z vonkajsieho bloku kódu sa nazývajú global scope
```js
let name = 'bob';
name = 'peter';

function pocitaj() {
  // tu sa nachadza blok kodu
  console.log(name); //peter
  name = 'orange';

  function inePocitanie() {
    // tu sa nachadza blok kodu
    name = 'this some other value';
    console.log(name); // this some other value
  }
  inePocitanie();
}

pocitaj();

if (true) {
  // tu sa nachadza blok kodu
  console.log(name); // this some other value
  name = 'pants';
}

console.log(`moje meno je ${name} a je super duper`); // moje meno je pants a je super duper
```

## 31. Lokálny scope

Local scope nie je dostupny pre vonkajsi blokovy kod

```js
// vonkajsi blokovy kod
function pocitaj() {
  // lokalny blokovy kod
  const name = 'susy'; // premenna v local scope
  console.log(name);
  // lokalny blokovy kod
}
pocitaj();
// vonkajsi blokovy kod
console.log(name); // premenna name nie je dostupna pre vonkajsi blokovy kod
```

## 32. Premenne lokalny scope vs global scope

```js
const globalneCislo = 5;

const spocitaj = () => {
  const lokalneCislo1 = 3;
  const lokalneCislo2 = 2;
  console.log(lokalneCislo1);
  console.log(lokalneCislo2);

  const spocitajVysledok = lokalneCislo1 + lokalneCislo2 + globalneCislo;
  const nasob = () => {
    const nasobokVysledok = globalneCislo * spocitajVysledok;

    console.log('nasobokVysledok', nasobokVysledok);
  };
  // console.log(nasobokVysledok); // nie je dostypna hodnota lebo je v inom scope

  nasob();
  return spocitajVysledok;
  console.log('toto nebude vypisane lebo mam nad sebou return');
};// console.log(spocitajVysledok); // nie je dostypna hodnota lebo je v inom scope

console.log(globalneCislo);

console.log('spocitajVysledok', spocitaj());
```

## 33. `Callback function`, `Higher order function`

- `callback function` je funkcia ktora vykonava jednoduchu logiku a je pouzita teda zaslana do druhej funkcie ako argument na vykonanie tejto logiky.
- `higher order function` je funkcia ktora recykluje ine funkcie cez argument t.j. ako vstupny parameter.

```js
// higher order function
const spocitaj = (pole, cb) => {
  let vysledok = [];
  for (let i = 0; i < pole.length; i++) {
    let vec = cb(pole[i]); // callback
    vysledok.push(vec);
  }
  return vysledok;
};

const plus = cislo => {
  return cislo + 10;
};

const nasob = cislo => {
  return cislo * 10;
};

let hodnota1 = spocitaj([1, 2, 3], plus);
console.log(hodnota1); // [ 11, 12, 13 ]

let hodnota2 = spocitaj([1, 2, 3], nasob);
console.log(hodnota2); // [ 10, 20, 30 ]
```

## 34.  Sila iteratorov pre polia
- iteratacne metody pre polia: `forEach`, `map`, `filter`, `find`, `reduce`
  
Pozname stary dobry `for` cyklus ale nie je potrebny ak pozname iteracne metody
```js
const cislo = [0, 1, 2, 3, 4];
for (let i = 0; i < cislo.length; i++) {
  console.log(cislo[i]);
}
```
namiesto toho mozme vyuzit
1. `forEach(callbackfn, index, [])`
- nemeni velkost pola
```js
const ludia = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'pavol', vek: 64, pozicia: 'boss' }
];

ludia.forEach((clovek, index) => {
  console.log('clovek', clovek, index);
});

// clovek { meno: 'feri', vek: 30, pozicia: 'programator' } 0
// clovek { meno: 'janko', vek: 22, pozicia: 'programator' } 1
// clovek { meno: 'iveta', vek: 25, pozicia: 'programator' } 2
// clovek { meno: 'dusi', vek: 20, pozicia: 'dizajner' } 3
// clovek { meno: 'pavol', vek: 64, pozicia: 'boss' } 4

```

2. `map(callbackfn, index, [])`
- pri vytvarani noveho pola pouzijeme hodnoty z povodneho pola a nato nam sluzi map
- nemeni velkost povodneho pola
```js
const ludia = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'pavol', vek: 64, pozicia: 'boss' }
];

const vekLudi = ludia.map((clovek, index) => {
  console.log(index);
  return clovek.vek + 10;
});
console.log('vekLudi', vekLudi);  // vekLudi [ 40, 32, 35, 30, 74 ]

const menaLudi = ludia.map(clovek => {
  return clovek.meno;
});
console.log('menaLudi', menaLudi); // menaLudi [ 'feri', 'janko', 'iveta', 'dusi', 'pavol' ]

const noviLudia = ludia.map(clovek => {
  return {
    prveMeno: clovek.meno.toUpperCase(),
    novyVek: clovek.vek + 20
  };
});
console.log('noviLudia', noviLudia);

// noviLudia [ { prveMeno: 'FERI', novyVek: 50 },
//             { prveMeno: 'JANKO', novyVek: 42 },
//             { prveMeno: 'IVETA', novyVek: 45 },
//             { prveMeno: 'DUSI', novyVek: 40 },
//             { prveMeno: 'PAVOL', novyVek: 84 } ]

```

3. `filter(callbackfn, index, [])`
- meni velkost pola
- filter vyhodnoti logiku vramci funkcie a nasledne vrati najdenu hodnotu ktoru hladame
- ak sa v poli filtrovana hodnota nenachadza vrati nam prazdne pole
```js
const ludia = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'pavol', vek: 64, pozicia: 'boss' }
];
// ak sa v poli filtrovana hodnota nenachadza vrati nam prazdne pole
const mladyludia = ludia.filter(clovek => {
  return clovek.vek <= 30;
});
console.log('mladyludia', mladyludia);

// mladyludia [ { meno: 'feri', vek: 30, pozicia: 'programator' },
//              { meno: 'janko', vek: 22, pozicia: 'programator' },
//              { meno: 'iveta', vek: 25, pozicia: 'programator' },
//              { meno: 'dusi', vek: 20, pozicia: 'dizajner' } ]

const programatori = ludia.filter(clovek => {
  return clovek.pozicia === 'programator';
});
console.log('programatori', programatori);

// programatori [ { meno: 'feri', vek: 30, pozicia: 'programator' },
//                { meno: 'janko', vek: 22, pozicia: 'programator' },
//                { meno: 'iveta', vek: 25, pozicia: 'programator' } ]

const mladiProgramatori = ludia.filter(clovek => {
  return clovek.vek <= 25 && clovek.pozicia === 'programator';
});
console.log('mladiProgramatori', mladiProgramatori);

// mladiProgramatori [ { meno: 'janko', vek: 22, pozicia: 'programator' },
//                     { meno: 'iveta', vek: 25, pozicia: 'programator' } ]
```

4. `find(predicate, index, [])`
- ak nenajde hladany prvok vrati undefined
- skvele pre ziskanie jedinecnej hodnoty z pola
- vrazi vzdy len prvu najdenu hodnotu vramci definovanej logiky hladania
```js
const ludia2 = [
  { id: 1, meno: 'feri', vek: 30, pozicia: 'programator' },
  { id: 2, meno: 'janko', vek: 22, pozicia: 'programator' },
  { id: 3, meno: 'iveta', vek: 25, pozicia: 'programator' },
  { id: 4, meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { id: 5, meno: 'pavol', vek: 64, pozicia: 'boss' }
];
const clovekId = ludia2.find(clovek => {
  return clovek.id === 0;
});
console.log('clovekId', clovekId); // clovekId undefined
```

5. `reduce(callbackfn, currentValue, currentIndex, [])`
- sluzi na manipulaciu aktualne iterovanej hodnoty s predoslou iterovanou hodnotou
- 1 vstupny parameter accumulator - acc - total z celkovej kalkulacie
- 2 vstupny parameter currentValue - curr - aktualna iterovana hodnota
```js
const ludia3 = [
  { id: 1, meno: 'feri', vek: 30, pozicia: 'programator', plat: 2000 },
  { id: 2, meno: 'janko', vek: 22, pozicia: 'programator', plat: 900 },
  { id: 3, meno: 'iveta', vek: 25, pozicia: 'programator', plat: 1900 },
  { id: 4, meno: 'dusi', vek: 20, pozicia: 'dizajner', plat: 1200 },
  { id: 5, meno: 'pavol', vek: 64, pozicia: 'boss', plat: 9000 }
];
const scitaniePlatov = ludia3.reduce((acc, curr) => {
  console.log('total', acc);
  console.log('aktualny plat', curr.plat);
  acc += curr.plat;
  return acc;
}, 0);

// total 0
// aktualny plat 2000
// total 2000
// aktualny plat 900
// total 2900
// aktualny plat 1900
// total 4800
// aktualny plat 1200
// total 6000
// aktualny plat 9000

console.log('scitaniePlatov', scitaniePlatov); // scitaniePlatov 15000
```

## 35. Math objekt

- `Math.floor()` - zaukruhluje na cele cislo
```js
const cislo = 4.56789;
console.log(Math.floor(cislo)); // 4
```
- `Math.ceil()` - zaukruhluje na najblizsie najvacsie cele cislo
```js
const cislo1 = 4.56789;
console.log(Math.ceil(cislo1)); // 5
```
- `Math.sqrt()` - odmocnina cisla
```js
console.log(Math.sqrt(25)); // 5
```
- `Math.PI` - konstanta pi
```js
console.log(Math.PI); // 3.141592653589793
```
- `Math.min()` - najdenie najmensieho cisla
```js
console.log(Math.min(1, 4, 67, 89, 9)); // 1
```
- `Math.max()` - najdenie najvacsieho cisla
```js
console.log(Math.max(1, 4, 67, 89, 9)); // 89
```
- `Math.random()` - vrati nahodne vygenerovanie cislo
```js
console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); // 0-10
console.log(Math.floor(Math.random() * 10 + 1)); // 1-10
```
- `Math.round()` - zaokruhluje na najblizsie cele cislo
```js
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.4)); // 2
```

## 36. Date objekt
- vieme ziskat aktualny cas, den, mesiac, rok a casove pasmo
- vieme si nadefinovat zaciatocny stav dat pre date objekt [linka](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

```js
const date1 = new Date('December 17, 1995 03:24:00'); // 1995-12-17T02:24:00.000Z
const date2 = new Date('1995-12-17T03:24:00'); // 1995-12-17T02:24:00.000Z
```
- vieme vytiahnut data z date objektu
```js
const datum = new Date();
console.log(datum);  // 2019-08-22T13:13:11.184Z - aktualne info...

let rok = date2.getFullYear();
console.log(rok); // 1995

let mesiac = date2.getMonth();
console.log(mesiac + 1); // 12

let den = date2.getDay();
console.log(den); // 0 - nedela

let sekunda = date2.getSeconds();
console.log(sekunda);
```

- vieme nadefinovat data pre date objektu
```js
const event = new Date('August 19, 1975 23:15:30');
event.setDate(24);
console.log(event.getDate()); // 24
```

## 37. DOM - dokument objekt model
Vytiahnutie elementov z DOM vieme pomocou tychto metod:
- `getElementById(id_elementu)` selektujem podla id elementov

```js
const h1 = document.getElementById('title')
h1.style.color = 'red';
console.log(h1); // <h1 id="title" style="color: red;">text</h1>
```
- `getElementsByTagName(nazov_elementu)` selektujem podla tag nazvu elementu
```js
const list = document.getElementsByTagName('li');
console.log(list); // vrati pole selektnutych elemntov
console.log(list.length); // pocet prvkov v poli
list[0].style.color = 'red';
```
List nam vrati HTMLCollection, ktore nie je JS pole ktore si pomocou spread operatora tj. vieme preiterovat a vlozit do pola ktore nasledne mozme pouzivat ako v beznom JS.

```js
const novePole = [...list];
novePole.forEach(element => {
  console.log(element);
});
```
- `getElementsByClassName(class_element)` selektujem podla class nazvu elementu
```js
const classSelektnutie = document.getElementsByClassName('daco');
console.log(classSelektnutie);
classSelektnutie[1].style.backgroundColor = 'red';
```
- `querySelector(vsetky_CSS_selektory)` napr. *, .className, #idName, div[class="daco"]
```js
const querySelektJedenPrvyNajdenyElement = document.querySelector('li');
console.log(querySelektJedenPrvyNajdenyElement);
querySelektJedenPrvyNajdenyElement.style.backgroundColor = 'green';
```
- `querySelectorAll(vsetky_CSS_selektory)` napr. *, .className, #idName, div[class="daco"]
```js
const querySelektVsetkyNajdeneElementy = document.querySelectorAll('li');
console.log(querySelektVsetkyNajdeneElementy);
querySelektVsetkyNajdeneElementy[3].style.backgroundColor = 'green';
```


## 38. Navigovanie v DOM - `children`, `childNodes`, `firstChild`, `lastChild`
- `childNodes`  vrati vsetky deti selektnuteho elementu aj s prazdnym definovanym priestorom 
- [selektory](https://www.w3schools.com/cssref/css_selectors.asp)
```js
const zoznam = document.querySelector('#zoznam'); // selektor # na vytahovanie id
const vsetkyVnoreneDataElementu = zoznam.childNodes;
console.log(vsetkyVnoreneDataElementu);
```
- `children` vieme ziskat vsetky vnorene elementy v selektnutom elemente
```js
const vsetkyDetiElementu = zoznam.children;
console.log(vsetkyDetiElementu);
```
- `firstChild` ziskame prvy dieta z childNodes
```js 
const vytiahnemPrveDieta = zoznam.firstChild;
console.log(vytiahnemPrveDieta);
```
- `lastChild` ziskame posledne dieta z childNodes
```js
const vytiahnemPosledneDieta = zoznam.lastChild;
console.log(vytiahnemPosledneDieta);
```

## 39. Navigovanie v DOM - `nextSibling` vs `previosSibling`
- `nextSibling` vieme sa posunut vramci DOM o childNodes nadol
```js
const prvyElement = document.querySelector('.prva');
console.log(prvyElement);
const druhyElement = prvyElement.nextSibling.nextSibling;
console.log(druhyElement);
```
- `previousSibling` vieme sa posunut vramci DOM o childNodes nahor
```js
const poslednyElement = document.querySelector('.posledna');
console.log(poslednyElement);
const predposlednyElement = poslednyElement.previousSibling.previousSibling;
console.log(predposlednyElement);
```

## 40. Hodnoty v Dom - `textConent` vs `nodeValue`

- `nodeValue` vracia string z definovaneho childNodes ktori musi byt definovany pomocou [poradie_ktori_string_chcem]

```js
const specialnyElement = document.getElementById('special');
console.log('specialnyElement:', specialnyElement);

const hodnotaNodeValue = specialnyElement.childNodes[0].nodeValue;
console.log('hodnotaNodeValue:', hodnotaNodeValue);
// pomocou trim metody vieme precistit priestor pred a za selektnutym stringom
const hodnotaNodeValueUpravena = specialnyElement.childNodes[0].nodeValue.trim();
console.log('hodnotaNodeValueUpravena:', hodnotaNodeValueUpravena);
```
- `textContent` vracia string nachadazjuci sa v selektnutom elemente
```js
const hodnotaTextContent = specialnyElement.textContent;
console.log('hodnotaTextContent:', hodnotaTextContent);
```

## 41. `getAttribute()` vs `setAttribute()`

- `getAttribute(nazovatributu)` pomocou tejto metody vieme vytiahnut zo selektnuteho elementu hodnotu z definovaneho atributu
```js
const elementLiPrvy = document.querySelector('li');
console.log('li element:', elementLiPrvy);

const showClass = elementLiPrvy.getAttribute('class');
const showId = elementLiPrvy.getAttribute('id');
console.log('showClass:', showClass);
console.log('showId:', showId);

const elementA = document.querySelector('a');
console.log('a element:', elementA);
const showHref = elementA.getAttribute('href');
console.log('showHref:', showHref);
```
- `setAttribute(nazovAtributu, hodnotaAtributu)` pomocou tejto metody vieme vlozit definovany atribut a jeho hodnotu do selektnuteho elementu
```js
const elementLiPosledny = document.getElementsByTagName('li')[1];
elementLiPosledny.setAttribute('class', 'posledny');
elementLiPosledny.setAttribute('id', 'daco');
console.log(elementLiPosledny);
```

## 42. `className` vs `classList`

- `className` pomocou vytiahnutej premennej vieme vlozit classy alebo ich prepisat
```js
const prvy = document.getElementById('prvy');
const druhy = document.getElementById('druhy');
const treti = document.getElementById('treti');

const nazovClassy = prvy.className;

console.log(nazovClassy);

druhy.className = 'farba text'; // do selektnuteho elementu druhy prepisem alebo vlozim classu s definovanym nazvom
treti.className = 'farba text'; // do selektnuteho elementu druhy prepisem alebo vlozim classu s definovanym nazvom
```
## 43. `document.createElement('nazov_html_tagu')`, `document.createTextNode('nejaky string')`, `element.appendChild(childElement)` vs `document.body.insertBefore(referenciaNovyVytvorenyElement, referenciaPredKtoryElement)`, `document.body.replaceChild(novyElement, staryElement)`

- `document.createElement('nazov_html_tagu')` táto metóda slúži na vytvorenie html tagu vrámci DOMu
- `document.createTextNode('nejaky string')` táto metóda slúži na vytvorenie textu vrámci DOMu
- `selektnutyElement.appendChild(childElement)` táto metóda slúži na vkladanie vytvorených elementov alebo textov vrámci DOMu, kde najskôr musím definovať kam chcem vložiť niečo t.j. `selektnutyElement` a čo chcem vložiť `childElement` t.j. text alebo ďalší html element.

priklady:
```js
// vytvor prázdny element
const vytvorenyDivElement = document.createElement('div');

// vytvor text
const vytvorenyText = document.createTextNode('nejaky vytvoreny text');

// pridaj vytvorený text do vytvoreného div elementu
vytvorenyDivElement.appendChild(vytvorenyText);

// pridaj vytvorený element div s vytvoreným textom do body
document.body.appendChild(vytvorenyDivElement);
```

ak by som chcel vytvoriť zoznam `ul` ent so zanorenými `li` elementami, ktoré majú nejaký text, vyzeralo by to takto:

```js
// najskôr vytvorím ul element
const elementUl = document.createElement('ul');

// potom vytvorím li element
const elementli1 = document.createElement('li')
// potom vytvorím text
const text1 = document.createTextNode('prvy')
// potom vložím do vytvoreného elementu li vytvorený text
elementli1.appendChild(text1);
// potom vložím do ul elementu li element, ktorý už obsahuje text
elementUl.appendChild(elementli1)

// potom vytvorím li element
const elementli2 = document.createElement('li')
// potom vytvorím text
const text2 = document.createTextNode('druhy')
// potom vložím do vytvoreného elementu li vytvorený text
elementli2.appendChild(text2);
// potom vložím do ul elementu li element, ktorý už obsahuje text
elementUl.appendChild(elementli2)

// potom vytvorím li element
const elementli3 = document.createElement('li')
// potom vytvorím text
const text3 = document.createTextNode('treti')
// potom vložím do vytvoreného elementu li vytvorený text
elementli3.appendChild(text3);
// potom vložím do ul elementu li element, ktorý už obsahuje text
elementUl.appendChild(elementli3)

// potom vložím do body uz ul element, ktorý obsahuje li elementy aj s textami
document.body.appendChild(elementUl);
```

kratšia verzia
```js
// vytvorím si pole textov
const pole = ['prvy', 'druhy', 'treti'];
// namapujem texty a koľko textov mám, tolko vytvorím li s textami
pole.map(item => {
  // potom vytvorím li element
  const elementli = document.createElement('li');
  // potom vytvorím text
  const text = document.createTextNode(item);
  // potom vložím do vytvoreného elementu li vytvorený text
  elementli.appendChild(text);
  // potom vložím do ul elementu li element, ktorý už obsahuje text
  elementUl.appendChild(elementli);
});
// potom vložím do body ul element, ktorý obsahuje li elementy aj s textami
document.body.appendChild(elementUl);
```

- `document.body.insertBefore(referenciaNovyVytvorenyElement, referenciaPredKtoriElement)` vkladá novo vytvorený element pred už existujúci element
```js
// selektnem si už existujúci element
const slectObalovac = document.getElementById('obalovac');

// vytvorím h2 element
const elementH2 = document.createElement('h2');
// vytvorim text
const textH2 = document.createTextNode('somPrvy');
// vložím do vytvoreného elementu h2 vytvorený text
elementH2.appendChild(textH2);

// vrámci body chcem vložiť novo vytvorený element h2 s textom pred existujúci element, ktorý selektujem pomocou id obalovac
document.body.insertBefore(elementH2, slectObalovac);
```
- `document.body.replaceChild(novyElement, staryElement)` pomocou metódy `replaceChild()` vieme prepísať existujúci element v DOMe na novyElement
```js
// vytvor h2 element
const elementH2 = document.createElement('h2');
// vytvor text
const textH2 = document.createTextNode('somPrvy');
// pridaj do h2 element text
elementH2.appendChild(textH2);
// pridaj h2 element do body
document.body.appendChild(elementH2);

// vytvor div element
const vytvorenyDivElement = document.createElement('div');
// vytvor text
const vytvorenyText = document.createTextNode('nejaky vytvoreny text');
// pridaj vytvorený text do vytvoreného div elementu
vytvorenyDivElement.appendChild(vytvorenyText);
// pridaj vytvorený element div s vytvoreným textom do body
document.body.appendChild(vytvorenyDivElement);

// nahraď div element h2 elementom 
document.body.replaceChild(elementH2, vytvorenyDivElement);
```

## 44. `textContent` vs `innerHTML`

- `selektnutyElement.textContent` vlastnosť vieme ziskať textovy obsah elementu a jeho potomkov
```js
const pole = ['prvy', 'druhy', 'treti'];
pole.map(item => {
  const elementli = document.createElement('li');
  const text = document.createTextNode(item);
  elementli.appendChild(text);
  elementUl.appendChild(elementli);
});
document.body.appendChild(elementUl);

console.log(elementUl.textContent); // prvydruhytreti

// vytvorim div element
const krabica = document.createElement('div');
// do toho elementu div vlozim text
krabica.textContent = 'text v krabici pred zoznamom cisel vdaka insertBefore()';
document.body.insertBefore(krabica, elementUl);
```

- `selektnutyElement.innerHTML` nastavuje alebo vracia obsah HTML obsah elementu
```js
const pole = ['prvy', 'druhy', 'treti'];
pole.map(item => {
  const elementli = document.createElement('li');
  const text = document.createTextNode(item);
  elementli.appendChild(text);
  elementUl.appendChild(elementli);
});
document.body.appendChild(elementUl);

console.log(elementUl.innerHTML); // <li>prvy</li><li>druhy</li><li>treti</li>

// vytvorit element ul
const zoznam = document.createElement('ul');
// vlozim do ul elementu li elementy aj s textom
zoznam.innerHTML = `<li class="item">1</li><li class="item">2</li>`;
// vlozim do body vytvoreny ul aj s li a textami
document.body.appendChild(zoznam);
```

## 45. Zmena CSS pomocou style vlastnosti

ak chcem pridat css style cez javascript naskôr si musim seleknuť element, ktoremu chcem pridať štýl a nasledne si vytiahnem style parameter z objektu a v nom si vytiahnem štylovaci parameter ako napr color a pridam cez `=` hodnotu.

```js
nadpis.style.backgroundColor = 'blue';
nadpis.style.color = 'white';
nadpis.style.fontSize = '3rem';
```
## 46. Event Listeners & The Event Objects

- vsetky mozne eventy:
[allevents](https://www.w3schools.com/jsref/dom_obj_event.asp)

- `selectetElement.addEventListener(event, myfunction)`- metoda sa pouziva na vytvaranie posluchaca, ktory pocuva na dany event a vykona moju definovanu funkciu

```js
const btn = document.getElementById('btn');

const pridajClassu = () => {
  console.log(btn.classList.value);
  btn.classList.value === 'second'
    ? btn.classList.remove('second')
    : btn.classList.add('second');
};

btn.addEventListener('click', pridajClassu);
```

## 47. Mouse Events 

```js
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
```

## 48. Keyboard & Input Events

- klavesove eventy vramci Input elementu

```js

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
```

## 49. `localStorage.setItem()`, `localStorage.getItem()`, `JSON.stringify()`, `JSON.parse()`

- `localStorage.setItem(definujem_nazov_kluca, definujem hodnotu)` sluzi na ukladanie dat do local storage v application devtools
```js
localStorage.setItem('name', 'vivka');
localStorage.setItem('age', '21');
```

- `localStorage.getItem(definujem_nazov_kluca)` sluzi na zistenie dat ulozenych v local storage v application devtools kde nam staci definovat key kluc podla ktoreho viem vytiahnut databaseHeslo
```js
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age);
```

ak by som chcel vlozit do local storage viacej hodnot ako pole alebo objekt musim pouzit JSON typ
pomocou `JSON.stringify()` viem premenit typ objekt alebo pole na JSON a pomocou `JSON.parse()` viem dane data previest naspat z JSON formatu na objekt alebo pole na JSON

```js
const data = ['aaa', 'bbb'];
// premena objektu alebo pola na json
const stringifyData = JSON.stringify(data);
console.log('JSON.stringify(data):', stringifyData);
// premena jsonu na objekt alebo pole
console.log('JSON.parse(stringifyData):', JSON.parse(stringifyData));
```


