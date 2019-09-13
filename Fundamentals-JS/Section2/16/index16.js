// Date objekt

const date1 = new Date('December 17, 1995 03:24:00'); // 1995-12-17T02:24:00.000Z
const date2 = new Date(); // aktualny date

//---------------------------------------------

const datum = new Date();
console.log(datum); // 2019-08-22T13:13:11.184Z - aktualne info...

let rok = date2.getFullYear();
console.log(rok); // 1995

let mesiac = date2.getMonth();
console.log(mesiac + 1); // 12

let den = date2.getDay();
console.log(den); // 0 - nedela

let sekunda = date2.getSeconds();
console.log(sekunda);

//----------------------------------------------
const event = new Date('August 19, 1975 23:15:30');
event.setDate(24);
console.log(event.getDate()); // 24

//-------------------------------------------------------

const mesiace = [
  'januar',
  'februar',
  'marec',
  'april',
  'maj',
  'jun',
  'jul',
  'august',
  'september',
  'oktober',
  'november',
  'december'
];

const dni = [
  'nedela',
  'pondelok',
  'utorok',
  'streda',
  'stvrtok',
  'piatok',
  'sobota'
];

console.log(mesiace[11]);
// vyuzi new Date() nato aby si pomocou metody get vytiahla aktulany mesiac a vyuzi tuto hodnotu nato aby si vytiahla aktualny mesiac ako string pomocou pola mesiace

let date = new Date();
let mesiacik = date.getMonth();
console.log(mesiace[mesiacik]);

let day = new Date();
let dnicek = day.getDay();
console.log(dni[dnicek]);
