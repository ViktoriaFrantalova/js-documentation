# Existuje 5 zakladnych operátorov:

- Arithmetic
- Assignment = pridelené
- Comparison
- Logical
- Bitwise = bitová uroveň

# MATEMATICKE OPERACIE
```js
// to iste
x++; 
x = x + 1;

// to iste
x = x + 5;
x += 5;

// to iste
x = x * 3;
x *= 3;

// prednost znamienok
let x = 2 + 3 * 4; // x = 14, lebo nasobenie ma prednost
let x = (2 + 3) * 4; // x = 20

console.log(x);
```

# LOGICKE...
```js
// logical AND (&&)
// vrati true ak obe operatori su pravdive
console.log(true&&true);
```
* logical OR (||)
* vrati true ak aspon jeden operator je pravdivy
* všetko čo nie je falsy tak je truthy
- ak do treminala napíšem false || 1 || 2 ta terminal vypíše 1 a zvyšok ignoruje

# BITWISE...
* 1 bit = 8 bite
* 1 = 00000001
* 2 = 00000010
