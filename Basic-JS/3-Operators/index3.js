
// ak zakaznik má viac ako 100 € on je "zlatý zakaznik" ak nie. on je "strieborny zákazník".

let eur=110;
let type=eur>100 ? 'gold' : 'silver'; // ak to je pravda tak gold ak nie tak silver

console.log(type);