// doslovný reťazec - String literal

const name = 'Janko';
const age = 25;
const sentence = 'ahoj to som ja ' + name + ' a ja mam ' + age + ' rokov';
console.log(sentence); // ahoj to som ja Janko a ja mam 25 rokov

const sentenceLit = `ahoj to som ja ${name} a ja mam ${age} rokov`;
console.log(sentenceLit); // ahoj to som ja Janko a ja mam 25 rokov

// vstupna hodnota môže byť aj funkcia
const vykonaj = () => {
  return 10;
};
const text = `cislo je ${vykonaj()}`;
console.log(text); // cislo je 10
