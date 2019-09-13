// Switch()

const value = 10;

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
  console.log('nehodil si ani jedno z cisel');
}

// to iste za pomoci switch metody
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
    console.log('nehodil si ani jedno z cisel');
}
