var nameVar = 'Steve';
console.log( 'nameVar', nameVar );
var nameVar = 'Mike';
console.log( 'nameVar', nameVar );

let nameLet = 'Jeff';
console.log( 'nameLet', nameLet );

nameLet = 'Julie';
console.log( 'nameLet', nameLet );

const nameConst = 'Frank';
console.log( 'nameConst', nameConst );

function getPetName() {
  var petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log( petName );

// Block scoping

const fullName = 'Steve ingram';

if ( fullName ) {
  const firstName = fullName.split( ' ' )[0];
  console.log( firstName );
}

let fName;

if ( fullName ) {
  const fName = fullName.split( ' ' )[0];
  console.log( fName );
}

console.log( fName );

/*
firstName = 'Doink';
console.log( firstName );
*/
