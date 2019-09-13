// Exercise Address Object

let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c'
};

function showAddress(address) {
  for (let key in address) // vytahujem y objektu address
    console.log(key, address[key])
    // street a
    // city b
    // zipCode c
};

showAddress(address);