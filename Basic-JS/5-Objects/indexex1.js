// Exercise Factory and Construct or Functions

// Factory function - krabica bez nazvu
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

let address1 = createAddress('a', 'b', 'c');
console.log(address1);

//---------------------------------------------------------

//Constructor function - krabica s nazvom
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address2 = new Address('a', 'b', 'c');
console.log(address2);