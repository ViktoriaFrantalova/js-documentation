## 4-ControlFlow
# IF/ELSE
```js
if (condition) {
	statment; // oznam
} else if (anotherCondition) {
	statement;
} else if (yetAnotherCondition) {
	statement;
} else statement;
```
# SWITCH/CASE
```js
let role = '?';
switch (variable) {
	case 'guest/?': // POZOR :
		console.log('Guest User');
		break; // VYSKOCI

	case 'moderator/?':
		console.log('Moderator User');
		break;

	default:
		console.log('Unknown User');
}
```
# LOOPS - cykli
* for
* while
* do..while
INFINITE LOOPS
* for...in 
* for...of

* 1.for
* ```js
for (initialExpression; condition; incrementExpression) {
  statement
}
```

* 2.while
```js
let i = 0;
while (condition) {
  statement;
  incrementExpression; (i++)
}
```

* 3.do...while
```js
let i = 0;
do {
	statement;
	incrementExpression; (i++)
} while (condition);
```

### POZOR = rozdiel medzi 2 a 3 je v tom že pri 3 sa podmienka vykoná až na koniec a preto ak zmením premennú na 9 tak sa mi vypiše 9, pričom pri 2 nič

*4.for...in
```js
const y = ['........'];
for (let x in y) // vytvorim si premenu do ktorej vlo6im nejaku konstantu????{
   statement - console.log(x, y[x]);
}
```

*5.for...of
```js
for (let z of y) console.log(z); 
```
# BREAK AND CONTINUE

NaN => 'Not a number' - matematick8 pemenna

# COMPLIT FALSY VALUES
* Falsy
* undefined
* null
* ''
* false
* 0
* NaN