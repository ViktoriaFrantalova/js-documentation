// String or Template Literals

// string primitive
const message = 'This is my \n first message '; // ak chcem upravovat syntax textu ako v Linux \n = new line...

// string object
const another = new String('hi'); 

//-------------------------------------------------------

// template literals - doslovna sablona
const messages = 
'This is my\n' + 
'\'first\' message ';

// to iste
const anothers = `This is my
'first' message`;

// PRIKLAD
const name = 'Luky';
const mail = 'Hi ' + name + ',\n'; // very ugly

// lepsie takto
const email = 
`Hi ${name}, 

Thank you for joining my mailing list.

Regards,
Mosh`;

// mozem vkladat aj napr. cisla $(2+6)  atd.. 