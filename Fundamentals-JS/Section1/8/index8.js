// spajanie stringov v JS

let fullNameViacejRiadkov = `aaa
                             bbb`;
let fullName1 = `I'm Janko Hrasko`;
let fullName2 = "I'm Janko Hrasko";
let fullName3 = "I'm Janko Hrasko";
let fullName4 = "I'm Janko Hrasko";
let fullName5 = 'I' + "'" + 'm Janko Hrasko';
const nieco = "'";
let fullName6 = `I${nieco}m Janko Hrasko`;
console.log(fullName1); // I'm Janko Hrasko
console.log(fullName2); // I'm Janko Hrasko
console.log(fullName3); // I'm Janko Hrasko
console.log(fullName4); // I'm Janko Hrasko
console.log(fullName5); // I'm Janko Hrasko
console.log(fullName6); // I'm Janko Hrasko
