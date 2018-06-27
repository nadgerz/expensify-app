'use strict';

var nameVar = 'Steve';
console.log('nameVar', nameVar);
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jeff';
console.log('nameLet', nameLet);

nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

var petName = getPetName();
console.log(petName);

// Block scoping

var fullName = 'Steve ingram';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}

/*
firstName = 'Doink';
console.log( firstName );
*/
